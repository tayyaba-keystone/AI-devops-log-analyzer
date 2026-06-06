function ResultCard({ result }) {

  if (!result) return null;

  return (
    <div>
      <h2>AI Analysis</h2>

      {result.analysis && (
        <pre>{result.analysis}</pre>
      )}

      {result.error && (
        <pre>{result.error}</pre>
      )}
    </div>
  );
}

export default ResultCard;