function RouteFinder({ stations, from, to, onFromChange, onToChange, onSwap, onFind }) {
  return (
    <section className="route-finder">
      <h2 className="section-title">Find Your Route</h2>
      <div className="finder-form">
        <div className="finder-row">
          <label className="finder-field">
            <span className="field-label">From Station</span>
            <select value={from} onChange={(e) => onFromChange(e.target.value)} className="field-select">
              <option value="">Select start station</option>
              {stations.map((s) => (
                <option key={s.name} value={s.name}>{s.name}</option>
              ))}
            </select>
          </label>

          <button
            type="button"
            className="swap-button"
            onClick={onSwap}
            title="Swap stations"
            aria-label="Swap from and to stations"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3L4 7l4 4" />
              <path d="M4 7h16" />
              <path d="M16 21l4-4-4-4" />
              <path d="M20 17H4" />
            </svg>
          </button>

          <label className="finder-field">
            <span className="field-label">To Station</span>
            <select value={to} onChange={(e) => onToChange(e.target.value)} className="field-select">
              <option value="">Select destination station</option>
              {stations.map((s) => (
                <option key={s.name} value={s.name}>{s.name}</option>
              ))}
            </select>
          </label>
        </div>

        <button type="button" className="find-button" onClick={onFind}>
          Find Shortest Route
        </button>
      </div>
    </section>
  );
}

export default RouteFinder;
