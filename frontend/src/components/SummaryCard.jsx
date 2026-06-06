function SummaryCard({ summary }) {
  if (!summary) return null;

  return (
    <div className="bg-slate-800 p-6 rounded-xl mt-6">

      <h2 className="text-xl font-bold mb-4">
        Analysis Summary
      </h2>

      <p>
        <span className="font-semibold">Severity:</span>{" "}
        <span className={
          summary.severity === "High"
            ? "text-red-400"
            : summary.severity === "Medium"
            ? "text-yellow-400"
            : "text-green-400"
        }>
          {summary.severity}
        </span>
      </p>

      <p className="mt-2">
        <span className="font-semibold">Technology:</span>{" "}
          {summary.technology?.join(", ")}
       </p>

      <p className="mt-2">
        <span className="font-semibold">Status:</span>{" "}
        <span className={
          summary.status === "Failed"
            ? "text-red-400"
            : "text-green-400"
        }>
          {summary.status}
        </span>
      </p>

    </div>
  );
}

export default SummaryCard;