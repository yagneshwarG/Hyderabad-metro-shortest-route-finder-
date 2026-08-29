function AlgorithmInfo() {
  return (
    <section className="algorithm-info">
      <h2 className="section-title">How Dijkstra&apos;s Algorithm Works</h2>
      <p className="info-intro">
        Dijkstra&apos;s Algorithm finds the shortest path between two stations in a weighted graph.
        Each metro connection has a weight (the distance in kilometres), and the algorithm keeps
        track of the cheapest way to reach every station so far.
      </p>

      <ol className="algorithm-steps">
        <li>
          Start from the selected source station and give it a distance of <strong>0</strong>.
        </li>
        <li>
          Give every other station a distance of <strong>Infinity</strong> (we don&apos;t know how
          far they are yet).
        </li>
        <li>
          Pick the unvisited station with the <strong>smallest distance</strong>.
        </li>
        <li>
          Look at all of its connected (neighbour) stations.
        </li>
        <li>
          For each neighbour, calculate <em>current distance + connection weight</em>. If this is
          smaller than the neighbour&apos;s current distance, <strong>update it</strong>.
        </li>
        <li>
          Mark the current station as <strong>visited</strong> and repeat until we reach the
          destination.
        </li>
        <li>
          Walk backwards from the destination using the stored &quot;previous&quot; links to
          <strong> reconstruct the shortest route</strong>.
        </li>
      </ol>

      <h3 className="info-subtitle">Pseudocode</h3>
      <pre className="pseudocode">{`function dijkstra(graph, start, end):
    distances = { every station: Infinity }
    previous  = { every station: null }
    distances[start] = 0

    unvisited = all stations

    while unvisited is not empty:
        current = unvisited station with smallest distance

        if current == end:
            break

        remove current from unvisited

        for neighbour in graph[current]:
            newDistance = distances[current] + neighbour.weight

            if newDistance < distances[neighbour.station]:
                distances[neighbour.station] = newDistance
                previous[neighbour.station] = current

    build path by following previous from end back to start
    return { path, distance }`}</pre>
    </section>
  );
}

export default AlgorithmInfo;
