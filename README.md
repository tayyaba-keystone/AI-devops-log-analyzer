# AI-Powered DevOps Log Analyzer

## Project Overview

AI-Powered DevOps Log Analyzer is a web-based application that helps DevOps engineers analyze Linux, Docker, and Kubernetes logs and generate automated root-cause analysis using Google Gemini AI.

The platform detects critical incidents, calculates operational metrics, identifies affected technologies, and provides remediation recommendations through an interactive dashboard.

---

## Features

### Log Analysis

* Upload and analyze log files
* Detect critical errors automatically
* Calculate success rate
* Identify affected technologies
* Generate incident summaries

### AI-Powered Troubleshooting

* Root-cause analysis
* Severity assessment
* Automated remediation suggestions
* Operational insights using Google Gemini

### Dashboard

* Total Logs
* Critical Issues
* Success Rate
* Severity Level
* System Status
* Technology Detection
* Detailed AI Analysis

---

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* Vite

### Backend

* Python
* FastAPI
* Uvicorn

### AI Integration

* Google Gemini API

### Version Control

* Git
* GitHub

---

## Architecture

```text
User Uploads Log File
         │
         ▼
React Dashboard
         │
         ▼
FastAPI Backend
         │
         ▼
Log Parsing Engine
         │
         ├── Metrics Calculation
         │      ├── Total Logs
         │      ├── Critical Issues
         │      └── Success Rate
         │
         └── Technology Detection
                ├── Linux
                ├── Docker
                └── Kubernetes
         │
         ▼
Google Gemini API
         │
         ▼
Root Cause Analysis
         │
         ▼
Dashboard Results
```

---

## Project Structure

```text
AI-devops-log-analyzer
│
├── backend
│   ├── .env.example
│   ├── main.py
│   └── requirements.txt
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── screenshots
│   ├── home.png
│   ├── upload.png
│   ├── dashboard.png
│   └── analysis.png
│
├── .gitignore
└── README.md
```

---

## Screenshots

### Home Page

<img width="1366" height="655" alt="image" src="https://github.com/user-attachments/assets/f0810b90-6060-4c9f-833e-a136ae86fb50" />


---

### Upload Log File

Click on upload button and upload the log file after click on analyze button

<img width="1366" height="418" alt="image" src="https://github.com/user-attachments/assets/2e4eb22c-c32c-4299-acc9-a7183ea62c44" />


---

### Dashboard Metrics

<img width="1366" height="594" alt="image" src="https://github.com/user-attachments/assets/eeea09c5-3ce5-44d0-a251-9fbe880a69b5" />


---

### AI Analysis

<img width="1141" height="587" alt="image" src="https://github.com/user-attachments/assets/602b3161-ca40-47b1-9283-b27807314977" />

<img width="1147" height="574" alt="image" src="https://github.com/user-attachments/assets/dabd6706-a048-484e-9836-9431acab758f" />

---

## Installation

### Clone Repository

```bash
git clone https://github.com/tayyaba-keystone/AI-devops-log-analyzer.git
```

```bash
cd AI-devops-log-analyzer
```

---

## Backend Setup

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate:

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create `.env`

```env
GEMINI_API_KEY=your_api_key_here
```

Run backend:

```bash
uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run application:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## Example Analysis

### Input Log

```text
Failed password for root
Failed to start nginx.service
ERROR Java heap space
ERROR Container killed due to memory limit exceeded
Warning FailedScheduling
Warning CrashLoopBackOff
```

### Output

```text
Severity: High
Status: Failed
Technologies:
- Linux/System
- Docker/Containers
- Kubernetes
```

---

## Future Enhancements

* Real-time log streaming
* Kubernetes cluster integration
* Elasticsearch support
* Grafana integration
* PDF report generation
* Historical incident tracking
* User authentication
* AWS deployment

---

## Author

Tayyaba Bagwan

Cloud | DevOps | AWS | Terraform | Kubernetes | Generative AI

GitHub:
https://github.com/tayyaba-keystone
