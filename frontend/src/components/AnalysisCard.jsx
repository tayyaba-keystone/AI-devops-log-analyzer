import ReactMarkdown from "react-markdown";

function AnalysisCard({ result }) {
  if (!result) return null;

  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h2 className="text-xl font-bold mb-4">
        Detailed AI Analysis
      </h2>

      <div className="max-w-none">
        <ReactMarkdown
          components={{
            h2: ({ children }) => (
              <h2 className="text-blue-400 text-xl font-bold mt-6 mb-3 border-l-4 border-blue-400 pl-3">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-blue-300 text-lg font-semibold mt-4 mb-2">
                {children}
              </h3>
            ),
          }}
        >
          {result.analysis}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default AnalysisCard;