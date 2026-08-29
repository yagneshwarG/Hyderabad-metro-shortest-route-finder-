// Metro map based on the real Hyderabad Metro network layout.
// Positions are approximate (not to real geographic scale) but keep the
// Red / Blue / Green corridor shapes recognisable, in the style of the
// official metro rail map.

import { graph, stations } from '../data/metroNetwork';

// Official line colours
const LINE_COLORS = {
  red: '#e4001b',
  green: '#00a651',
  blue: '#0066b3',
};

// Map of station name -> line colour
const stationLines = {};
stations.forEach((s) => {
  stationLines[s.name] = LINE_COLORS[s.line] || '#94a3b8';
});

// Set of interchange station names
const interchangeSet = new Set(
  stations.filter((s) => s.line === 'interchange').map((s) => s.name)
);

// Simple 2D layout: coordinates are percentages of the map area.
const layout = {
  // -------- Red Line (Miyapur top-left -> LB Nagar bottom-left) --------
  'Miyapur': { x: 6, y: 4 },
  'JNTU College': { x: 9, y: 8 },
  'KPHB Colony': { x: 12, y: 12 },
  'Kukatpally': { x: 15, y: 16 },
  'Balanagar': { x: 18, y: 20 },
  'Moosapet': { x: 21, y: 24 },
  'Bharat Nagar': { x: 24, y: 28 },
  'Erragadda': { x: 27, y: 32 },
  'ESI Hospital': { x: 30, y: 36 },
  'SR Nagar': { x: 33, y: 40 },
  'Ameerpet': { x: 38, y: 44 },
  'Punjagutta': { x: 42, y: 46 },
  'Irrum Manzil': { x: 46, y: 48 },
  'Khairatabad': { x: 50, y: 50 },
  'Lakdikapul': { x: 54, y: 52 },
  'Assembly': { x: 56, y: 55 },
  'Nampally': { x: 58, y: 58 },
  'Gandhi Bhavan': { x: 60, y: 61 },
  'Osmania Medical College': { x: 62, y: 64 },
  'MG Bus Station': { x: 52, y: 76 },
  'Malakpet': { x: 50, y: 80 },
  'New Market': { x: 48, y: 84 },
  'Musarambagh': { x: 46, y: 88 },
  'Dilsukhnagar': { x: 44, y: 92 },
  'Chaitanyapuri': { x: 42, y: 96 },
  'Victoria Memorial': { x: 40, y: 96 },
  'LB Nagar': { x: 38, y: 100 },

  // -------- Blue Line (Raidurg top-left -> Nagole right) --------
  'Raidurg': { x: 30, y: 4 },
  'HITEC City': { x: 34, y: 6 },
  'Durgam Cheruvu': { x: 40, y: 8 },
  'Madhapur': { x: 46, y: 10 },
  'Jubilee Hills Check Post': { x: 52, y: 12 },
  'Jubilee Hills Road No. 5': { x: 58, y: 14 },
  'Yusufguda': { x: 63, y: 18 },
  'Madhura Nagar': { x: 66, y: 22 },
  'Begumpet': { x: 64, y: 30 },
  'Prakash Nagar': { x: 62, y: 36 },
  'Rasoolpura': { x: 61, y: 42 },
  'Paradise': { x: 60, y: 48 },
  'Parade Grounds': { x: 61, y: 54 },
  'Secunderabad East': { x: 66, y: 58 },
  'Mettuguda': { x: 71, y: 62 },
  'Tarnaka': { x: 76, y: 66 },
  'Habsiguda': { x: 81, y: 70 },
  'NGRI': { x: 86, y: 74 },
  'Stadium': { x: 91, y: 78 },
  'Uppal': { x: 95, y: 82 },
  'Nagole': { x: 98, y: 88 },

  // -------- Green Line (JBS Parade Ground -> MG Bus Station) --------
  'JBS Parade Ground': { x: 70, y: 50 },
  'Secunderabad West': { x: 69, y: 57 },
  'Gandhi Hospital': { x: 68, y: 63 },
  'Musheerabad': { x: 66, y: 68 },
  'RTC Cross Roads': { x: 63, y: 72 },
  'Chikkadpally': { x: 59, y: 76 },
  'Narayana Guda': { x: 56, y: 78 },
  'Sultan Bazaar': { x: 54, y: 77 },
};

function MetroMap({ from, to, route }) {
  // Build the set of station pairs that are part of the active route.
  const routeEdges = new Set();
  if (route && route.path.length > 0) {
    for (let i = 0; i < route.path.length - 1; i++) {
      const key = [route.path[i], route.path[i + 1]].sort().join('||');
      routeEdges.add(key);
    }
  }
  const routeSet = new Set(route ? route.path : []);

  // Highlight colour follows the line of the starting station.
  const routeColor = route && route.path.length > 1 ? stationLines[route.path[0]] : '#0066b3';

  const activeKind = (name) =>
    name === from ? 'start' : name === to ? 'end' : routeSet.has(name) ? 'onRoute' : 'normal';

  return (
    <section className="metro-map-section">
      <h2 className="section-title">Metro Network Map</h2>
      <div className="map-legend">
        <span className="legend-item"><span className="legend-line red"></span> Red Line</span>
        <span className="legend-item"><span className="legend-line blue"></span> Blue Line</span>
        <span className="legend-item"><span className="legend-line green"></span> Green Line</span>
        <span className="legend-divider"></span>
        <span className="legend-item"><span className="legend-dot start"></span> Start</span>
        <span className="legend-item"><span className="legend-dot end"></span> Destination</span>
        <span className="legend-item"><span className="legend-dot onRoute"></span> On route</span>
      </div>
      <div className="map-scroll">
        <div className="metro-map">
          <svg className="map-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            {Object.keys(graph).map((station) =>
              graph[station].map((c) => {
                const pa = layout[station];
                const pb = layout[c.station];
                if (!pa || !pb || station > c.station) return null;
                const key = [station, c.station].sort().join('||');
                const isRoute = routeEdges.has(key);
                return (
                  <line
                    key={key}
                    x1={pa.x}
                    y1={pa.y}
                    x2={pb.x}
                    y2={pb.y}
                    className={`map-line ${isRoute ? 'route-line' : ''}`}
                    style={isRoute ? { stroke: routeColor } : undefined}
                  />
                );
              })
            )}
          </svg>

          {Object.keys(layout).map((name) => {
            const pos = layout[name];
            const kind = activeKind(name);
            const isInterchange = interchangeSet.has(name);
            return (
              <div
                key={name}
                className={`map-station ${kind} ${isInterchange ? 'interchange' : ''}`}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                title={name}
              >
                <span
                  className="map-dot"
                  style={{ background: kind === 'normal' ? stationLines[name] : undefined }}
                ></span>
                {isInterchange && <span className="map-interchange">⇄</span>}
                <span className="map-label">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MetroMap;
