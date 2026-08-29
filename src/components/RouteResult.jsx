function RouteResult({ route, from, to }) {
  if (!route || route.path.length === 0) {
    return (
      <section className="route-result empty">
        <div className="empty-icon">🚇</div>
        <p className="empty-message">Choose your stations to find the shortest route.</p>
      </section>
    );
  }

  return (
    <section className="route-result">
      <div className="result-header">
        <h2 className="section-title">Shortest Route</h2>
        <p className="result-route-desc">{from} → {to}</p>
      </div>

      <div className="route-steps">
        {route.path.map((station, index) => {
          const isStart = index === 0;
          const isEnd = index === route.path.length - 1;
          return (
            <div className="route-step" key={station}>
              <div className="route-node">
                <span className={`node-dot ${isStart ? 'start' : isEnd ? 'end' : 'mid'}`}></span>
                <span className="node-name">{station}</span>
                {isStart && <span className="node-tag start">Start</span>}
                {isEnd && <span className="node-tag end">Destination</span>}
              </div>
              {index < route.path.length - 1 && <span className="node-arrow">↓</span>}
            </div>
          );
        })}
      </div>

      <div className="result-stats">
        <div className="stat">
          <span className="stat-value">{route.stationsInRoute}</span>
          <span className="stat-label">Stations</span>
        </div>
        <div className="stat">
          <span className="stat-value">{route.distance.toFixed(1)} km</span>
          <span className="stat-label">Distance</span>
        </div>
        <div className="stat">
          <span className="stat-value">~{Math.round(route.distance * 2)} min</span>
          <span className="stat-label">Estimated Time</span>
        </div>
      </div>
    </section>
  );
}

export default RouteResult;
