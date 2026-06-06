from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from google import genai
from dotenv import load_dotenv
import os
import re

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Backend Running"}

@app.post("/upload-log")
async def upload_log(file: UploadFile = File(...)):
    try:
        content = await file.read()
        log_text = content.decode("utf-8")

        # -------------------------
        # Clean and count log lines
        # -------------------------
        raw_lines = log_text.split("\n")

        lines = [
            line.strip()
            for line in raw_lines
            if line.strip() and not line.startswith("[")
        ]

        total_logs = len(lines)

        # -------------------------
        # Critical issue detection
        # -------------------------
        critical_patterns = (
            r"(error|failed|fatal|exception|crash|crashloopbackoff|insufficient memory)"
        )

        critical_count = sum(
            1 for line in lines
            if re.search(critical_patterns, line.lower())
        )

        # -------------------------
        # Success Rate
        # -------------------------
        success_rate = (
            ((total_logs - critical_count) / total_logs) * 100
            if total_logs > 0 else 0
        )

        # -------------------------
        # Technology Detection
        # -------------------------
        patterns = {
            "Linux/System": [
                "sshd",
                "systemd",
                "kernel",
                "ubuntu",
                "centos",
                "failed password"
            ],

            "Docker/Containers": [
                "docker",
                "container",
                "image",
                "memory limit",
                "killed",
                "java heap space"
            ],

            "Kubernetes": [
                "pod",
                "deployment",
                "crashloopbackoff",
                "node",
                "scheduler",
                "kubernetes",
                "failedscheduling"
            ],

            "Networking": [
                "timeout",
                "dns",
                "connection refused",
                "network"
            ],

            "Database": [
                "mysql",
                "postgres",
                "deadlock",
                "query",
                "connection pool"
            ],

            "Security/Auth": [
                "permission denied",
                "unauthorized",
                "token",
                "auth",
                "login failed"
            ]
        }

        tech_score = {key: 0 for key in patterns}

        for line in lines:
            l = line.lower()

            for tech, keywords in patterns.items():
                if any(keyword in l for keyword in keywords):
                    tech_score[tech] += 1

        detected_technologies = [
            tech for tech, score in tech_score.items()
            if score > 0
        ]

        # -------------------------
        # Severity & Status
        # -------------------------
        severity = (
            "High"
            if critical_count > 5
            else "Medium"
            if critical_count > 0
            else "Low"
        )

        status = "Failed" if critical_count > 0 else "Healthy"

        # -------------------------
        # Gemini AI Analysis
        # -------------------------
        prompt = f"""
You are a DevOps expert.

Analyze this log and return:

1. Issue
2. Root Cause
3. Solution
4. Severity (Low/Medium/High)

Log:
{log_text}
"""

        response = client.models.generate_content(
            model="gemini-flash-lite-latest",
            contents=prompt,
        )

        # -------------------------
        # API Response
        # -------------------------
        return {
            "analysis": response.text,

            "stats": {
                "total": total_logs,
                "critical": critical_count,
                "successRate": round(success_rate, 2)
            },

            "summary": {
                "severity": severity,
                "technology": detected_technologies,
                "status": status
            }
        }

    except Exception as e:
        return {
            "error": str(e)
        }