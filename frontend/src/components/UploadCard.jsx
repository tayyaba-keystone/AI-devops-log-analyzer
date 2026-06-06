import { useState } from "react";
import axios from "axios";

function UploadCard({ setResult, setStats, setSummary }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/upload-log",
        formData
      );

      setResult(response.data);
      setSummary(response.data.summary);

      // ✅ Direct backend stats (REAL DATA)
      if (response.data.stats) {
        setStats(response.data.stats);
      } else {
        // fallback safety
        setStats({
          total: 0,
          critical: 0,
          successRate: 0
        });
      }

    } catch (error) {
      console.error(error);

      setResult({
        error: "Failed to analyze log"
      });
    }

    setLoading(false);
  };

  return (
    <div className="bg-slate-800 p-8 rounded-xl shadow-lg">

      <h2 className="text-2xl font-bold mb-4">
        Upload Log File
      </h2>

      <div className="border-2 border-dashed border-slate-600 rounded-lg p-10 text-center">

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        {file && (
          <p className="mt-4 text-green-400">
            {file.name}
          </p>
        )}

      </div>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
      >
        {loading ? "Analyzing..." : "Analyze Log"}
      </button>

    </div>
  );
}

export default UploadCard;