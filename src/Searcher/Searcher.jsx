import "./Searcher.css"
function Searcher({ keys = [], selectedKey, onChange }) {
  return (
    <div className="searcher">
      <label htmlFor="marca-select">Seleccioná una marca:</label>
      <select
        id="marca-select"
        value={selectedKey}
        onChange={(e) => onChange(e.target.value)}
      >
        {keys.map((k) => (
          <option key={k} value={k}>{k}</option>
        ))}
      </select>
    </div>
  );
}

export default Searcher;
