// Dijkstra's Algorithm to find the shortest path in a weighted graph.
//
// The graph is passed in as an adjacency list:
//   { 'Station': [ { station: 'NextStation', weight: 1.5 }, ... ], ... }
//
// We return an object containing:
//   - path: array of station names (shortest route from start to end)
//   - distance: total distance in km
//   - stationsInRoute: number of stations visited (including start and end)

export function dijkstra(graph, start, end) {
  // Track the smallest known distance to every station.
  // Start with Infinity so that any real distance is smaller.
  const distances = {};
  // Track which station we came from for each station.
  // This lets us rebuild the path at the end.
  const previous = {};
  // Stations we have not yet finalised.
  const unvisited = new Set(Object.keys(graph));

  // Initialise distances to Infinity and previous to null.
  for (const station of unvisited) {
    distances[station] = Infinity;
    previous[station] = null;
  }

  // The start station has distance 0.
  distances[start] = 0;

  // Keep going until every reachable station has been visited.
  while (unvisited.size > 0) {
    // Pick the unvisited station with the smallest distance.
    let current = null;
    for (const station of unvisited) {
      if (current === null || distances[station] < distances[current]) {
        current = station;
      }
    }

    // If the smallest distance is Infinity, the remaining stations
    // are unreachable, so we can stop early.
    if (distances[current] === Infinity) {
      break;
    }

    // If we have reached the destination, we are done.
    if (current === end) {
      break;
    }

    unvisited.delete(current);

    // Look at each neighbour of the current station.
    for (const connection of graph[current]) {
      const neighbour = connection.station;
      // current distance + weight to reach the neighbour
      const newDistance = distances[current] + connection.weight;

      // If this route is shorter than the best one we know, update it.
      if (newDistance < distances[neighbour]) {
        distances[neighbour] = newDistance;
        previous[neighbour] = current;
      }
    }
  }

  // Rebuild the path by walking backwards from the end station.
  const path = [];
  if (distances[end] !== Infinity) {
    let step = end;
    while (step !== null) {
      path.unshift(step);
      step = previous[step];
    }
  }

  return {
    path,
    distance: distances[end],
    stationsInRoute: path.length,
  };
}
