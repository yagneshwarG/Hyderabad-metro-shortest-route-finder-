function ProjectInfo() {
  return (
    <section className="project-info">
      <h2 className="section-title">About This Project</h2>
      <p>
        This project is my way of learning and showing two things at once: how to build a React
        interface, and how a classic computer science algorithm actually works in practice.
      </p>
      <p>
        I represented the Hyderabad Metro network as a weighted graph – every metro station is a
        node, and every connection between two stations is an edge with a weight (the distance in
        kilometres). Then I implemented Dijkstra&apos;s Algorithm in JavaScript to calculate the
        shortest route between any two stations.
      </p>
      <p>Through this project I&apos;ve covered:</p>
      <ul className="topic-list">
        <li>Graph data structures and weighted graphs</li>
        <li>Dijkstra&apos;s Algorithm for shortest-path computation</li>
        <li>React components and state management</li>
        <li>JavaScript fundamentals</li>
        <li>Responsive UI design with vanilla CSS</li>
      </ul>
      <p>
        The metro network, the algorithm, and all visuals are kept simple and readable so anyone
        (including me during an interview) can explain how each part works.
      </p>
    </section>
  );
}

export default ProjectInfo;
