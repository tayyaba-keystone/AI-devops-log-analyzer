import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UploadCard from "./components/UploadCard";
import StatsCards from "./components/StatsCards";
import SummaryCard from "./components/SummaryCard";
import AnalysisCard from "./components/AnalysisCard";

function App() {

  const [result, setResult] = useState(null);

  const [stats, setStats] = useState({
    total: 0,
    critical: 0,
    successRate: 0
  });

  const [summary, setSummary] = useState(null);

  return (
    <div className="bg-slate-900 text-white min-h-screen">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8 space-y-8">

          {/* Upload */}
          <UploadCard
            setResult={setResult}
            setStats={setStats}
            setSummary={setSummary}
          />

          {/* Stats */}
          <StatsCards stats={stats} />

          {/* Summary */}
          <SummaryCard summary={summary} />

          {/* Analysis */}
          <AnalysisCard result={result} />

        </div>

      </div>

    </div>
  );
}

export default App;