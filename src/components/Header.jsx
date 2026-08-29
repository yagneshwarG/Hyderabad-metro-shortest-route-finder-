function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" width="42" height="42" fill="none">
              <circle cx="24" cy="24" r="22" fill="#0057a3" />
              <circle cx="24" cy="24" r="22" stroke="#ffffff" strokeWidth="2" />
              <text x="13" y="30" fontSize="15" fontWeight="bold" fill="#ffffff" fontFamily="'Segoe UI', Arial, sans-serif">H</text>
              <text x="25" y="30" fontSize="15" fontWeight="bold" fill="#ffffff" fontFamily="'Segoe UI', Arial, sans-serif">M</text>
              <circle cx="24" cy="40" r="3" fill="#00a651" />
              <circle cx="24" cy="40" r="3" stroke="#ffffff" strokeWidth="1" />
            </svg>
          </span>
          <div className="logo-text">
            <span className="logo-title">Hyderabad Metro</span>
            <span className="logo-subtitle">Shortest Route Finder</span>
          </div>
        </div>
        <p className="header-tagline">
          Find the optimal metro route using Dijkstra&apos;s Algorithm
        </p>
      </div>
    </header>
  );
}

export default Header;
