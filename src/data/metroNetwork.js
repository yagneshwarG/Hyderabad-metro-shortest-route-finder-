// Hyderabad Metro network data based on the real network map.
// The network is represented as a weighted graph:
//   - each station is a node
//   - each connection between two adjacent stations is an edge with a weight
//     (approximate travel distance in km)

// Line info (matching the real Hyderabad Metro):
//   line 1 = Red Line   : Miyapur -> LB Nagar
//   line 2 = Green Line : JBS Parade Ground -> MG Bus Station (via Secunderabad)
//   line 3 = Blue Line  : Raidurg -> Nagole (via Ameerpet & Secunderabad)
//
// Interchange stations:
//   Ameerpet        : Red line <-> Blue line
//   Parade Grounds  : Green line <-> Blue line  (JBS Parade Ground connects here)
//   MG Bus Station  : Red line <-> Green line

export const stations = [
  // ================= RED LINE (Miyapur -> LB Nagar) =================
  { name: 'Miyapur', line: 'red' },
  { name: 'JNTU College', line: 'red' },
  { name: 'KPHB Colony', line: 'red' },
  { name: 'Kukatpally', line: 'red' },
  { name: 'Balanagar', line: 'red' },
  { name: 'Moosapet', line: 'red' },
  { name: 'Bharat Nagar', line: 'red' },
  { name: 'Erragadda', line: 'red' },
  { name: 'ESI Hospital', line: 'red' },
  { name: 'SR Nagar', line: 'red' },
  { name: 'Ameerpet', line: 'interchange' }, // Red <-> Blue
  { name: 'Punjagutta', line: 'red' },
  { name: 'Irrum Manzil', line: 'red' },
  { name: 'Khairatabad', line: 'red' },
  { name: 'Lakdikapul', line: 'red' },
  { name: 'Assembly', line: 'red' },
  { name: 'Nampally', line: 'red' },
  { name: 'Gandhi Bhavan', line: 'red' },
  { name: 'Osmania Medical College', line: 'red' },
  { name: 'MG Bus Station', line: 'interchange' }, // Red <-> Green
  { name: 'Malakpet', line: 'red' },
  { name: 'New Market', line: 'red' },
  { name: 'Musarambagh', line: 'red' },
  { name: 'Dilsukhnagar', line: 'red' },
  { name: 'Chaitanyapuri', line: 'red' },
  { name: 'Victoria Memorial', line: 'red' },
  { name: 'LB Nagar', line: 'red' },

  // ================= BLUE LINE (Raidurg -> Nagole) =================
  { name: 'Raidurg', line: 'blue' },
  { name: 'HITEC City', line: 'blue' },
  { name: 'Durgam Cheruvu', line: 'blue' },
  { name: 'Madhapur', line: 'blue' },
  { name: 'Jubilee Hills Check Post', line: 'blue' },
  { name: 'Jubilee Hills Road No. 5', line: 'blue' },
  { name: 'Yusufguda', line: 'blue' },
  { name: 'Madhura Nagar', line: 'blue' },
  { name: 'Begumpet', line: 'blue' },
  { name: 'Prakash Nagar', line: 'blue' },
  { name: 'Rasoolpura', line: 'blue' },
  { name: 'Paradise', line: 'blue' },
  { name: 'Parade Grounds', line: 'interchange' }, // Green <-> Blue
  { name: 'Secunderabad East', line: 'blue' },
  { name: 'Mettuguda', line: 'blue' },
  { name: 'Tarnaka', line: 'blue' },
  { name: 'Habsiguda', line: 'blue' },
  { name: 'NGRI', line: 'blue' },
  { name: 'Stadium', line: 'blue' },
  { name: 'Uppal', line: 'blue' },
  { name: 'Nagole', line: 'blue' },

  // ================= GREEN LINE (JBS Parade Ground -> MG Bus Station) =================
  { name: 'JBS Parade Ground', line: 'green' },
  { name: 'Secunderabad West', line: 'green' },
  { name: 'Gandhi Hospital', line: 'green' },
  { name: 'Musheerabad', line: 'green' },
  { name: 'RTC Cross Roads', line: 'green' },
  { name: 'Chikkadpally', line: 'green' },
  { name: 'Narayana Guda', line: 'green' },
  { name: 'Sultan Bazaar', line: 'green' },
];

// Connections list: [stationA, stationB, weight in km]
const connections = [
  // ================= RED LINE =================
  ['Miyapur', 'JNTU College', 1.2],
  ['JNTU College', 'KPHB Colony', 1.5],
  ['KPHB Colony', 'Kukatpally', 1.4],
  ['Kukatpally', 'Balanagar', 1.6],
  ['Balanagar', 'Moosapet', 1.3],
  ['Moosapet', 'Bharat Nagar', 1.2],
  ['Bharat Nagar', 'Erragadda', 1.4],
  ['Erragadda', 'ESI Hospital', 1.2],
  ['ESI Hospital', 'SR Nagar', 1.1],
  ['SR Nagar', 'Ameerpet', 1.5],
  ['Ameerpet', 'Punjagutta', 1.4],
  ['Punjagutta', 'Irrum Manzil', 1.1],
  ['Irrum Manzil', 'Khairatabad', 1.5],
  ['Khairatabad', 'Lakdikapul', 1.3],
  ['Lakdikapul', 'Assembly', 1.2],
  ['Assembly', 'Nampally', 1.1],
  ['Nampally', 'Gandhi Bhavan', 1.3],
  ['Gandhi Bhavan', 'Osmania Medical College', 1.1],
  ['Osmania Medical College', 'MG Bus Station', 1.2],
  ['MG Bus Station', 'Malakpet', 1.3],
  ['Malakpet', 'New Market', 1.1],
  ['New Market', 'Musarambagh', 1.2],
  ['Musarambagh', 'Dilsukhnagar', 1.3],
  ['Dilsukhnagar', 'Chaitanyapuri', 1.1],
  ['Chaitanyapuri', 'Victoria Memorial', 1.2],
  ['Victoria Memorial', 'LB Nagar', 1.1],

  // ================= BLUE LINE =================
  ['Raidurg', 'HITEC City', 1.1],
  ['HITEC City', 'Durgam Cheruvu', 1.3],
  ['Durgam Cheruvu', 'Madhapur', 1.2],
  ['Madhapur', 'Jubilee Hills Check Post', 1.4],
  ['Jubilee Hills Check Post', 'Jubilee Hills Road No. 5', 1.2],
  ['Jubilee Hills Road No. 5', 'Yusufguda', 1.1],
  ['Yusufguda', 'Madhura Nagar', 1.3],
  ['Madhura Nagar', 'Begumpet', 1.5],
  ['Begumpet', 'Prakash Nagar', 1.1],
  ['Prakash Nagar', 'Rasoolpura', 1.2],
  ['Rasoolpura', 'Paradise', 1.1],
  ['Paradise', 'Parade Grounds', 1.5],
  ['Parade Grounds', 'Secunderabad East', 1.2],
  ['Secunderabad East', 'Mettuguda', 1.6],
  ['Mettuguda', 'Tarnaka', 1.4],
  ['Tarnaka', 'Habsiguda', 1.3],
  ['Habsiguda', 'NGRI', 1.2],
  ['NGRI', 'Stadium', 1.4],
  ['Stadium', 'Uppal', 1.5],
  ['Uppal', 'Nagole', 1.4],

  // ================= GREEN LINE =================
  ['JBS Parade Ground', 'Secunderabad West', 1.1],
  ['Secunderabad West', 'Gandhi Hospital', 1.3],
  ['Gandhi Hospital', 'Musheerabad', 1.2],
  ['Musheerabad', 'RTC Cross Roads', 1.1],
  ['RTC Cross Roads', 'Chikkadpally', 1.3],
  ['Chikkadpally', 'Narayana Guda', 1.1],
  ['Narayana Guda', 'Sultan Bazaar', 1.2],
  ['Sultan Bazaar', 'MG Bus Station', 1.1],

  // ================= INTERCHANGE LINKS =================
  // JBS Parade Ground (Green) connects on to Parade Grounds (Blue)
  ['JBS Parade Ground', 'Parade Grounds', 0.5],
  // Ameerpet is the Red <-> Blue interchange. The Blue line runs past
  // Begumpet, so this link lets passengers change between the two lines.
  ['Ameerpet', 'Begumpet', 2.0],
  // MG Bus Station (Red) is shared with the Green Line terminus (Sultan Bazaar).
];

// Build the adjacency list (graph) from the connection definitions.
// A station node is initialised even if it only has one connection,
// so every station is present in the graph.
export function buildGraph() {
  const graph = {};

  stations.forEach((s) => {
    graph[s.name] = [];
  });

  connections.forEach(([from, to, weight]) => {
    graph[from].push({ station: to, weight });
    graph[to].push({ station: from, weight });
  });

  return graph;
}

export const graph = buildGraph();
