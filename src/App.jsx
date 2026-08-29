import { useState } from 'react';
import Header from './components/Header';
import RouteFinder from './components/RouteFinder';
import RouteResult from './components/RouteResult';
import MetroMap from './components/MetroMap';
import AlgorithmInfo from './components/AlgorithmInfo';
import ProjectInfo from './components/ProjectInfo';
import Footer from './components/Footer';
import { stations, graph } from './data/metroNetwork';
import { dijkstra } from './algorithms/dijkstra';

function App() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [route, setRoute] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  function handleFind() {
    setMessage(null);
    setError(null);

    if (!from && !to) {
      setError('Please select both a starting station and a destination station.');
      return;
    }
    if (!from) {
      setError('Please select a starting station.');
      return;
    }
    if (!to) {
      setError('Please select a destination station.');
      return;
    }
    if (from === to) {
      setError('Starting and destination stations are the same. Please pick two different stations.');
      return;
    }

    const result = dijkstra(graph, from, to);

    if (result.path.length === 0) {
      setError('No route is available between these two stations.');
      setRoute(null);
      return;
    }

    setRoute(result);
    setMessage(`Shortest route found with ${result.stationsInRoute} stations.`);
  }

  function handleSwap() {
    setFrom(to);
    setTo(from);
    setRoute(null);
    setMessage(null);
    setError(null);
  }

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="hero">
          <span className="hero-badge">Dijkstra's Algorithm</span>
          <h1 className="hero-title">
            Hyderabad Metro
            <br />
            <span className="em">Shortest Route Finder</span>
          </h1>
          <p className="hero-subtitle">
            Find the optimal route between metro stations using Dijkstra's Algorithm.
          </p>
          <div className="hero-actions">
            <span className="hero-pill"><span className="pill-dot red"></span>Red Line</span>
            <span className="hero-pill"><span className="pill-dot blue"></span>Blue Line</span>
            <span className="hero-pill"><span className="pill-dot green"></span>Green Line</span>
            <span className="hero-pill">{stations.length} Stations</span>
          </div>
        </section>

        <div className="card route-finder">
          <RouteFinder
            stations={stations}
            from={from}
            to={to}
            onFromChange={setFrom}
            onToChange={setTo}
            onSwap={handleSwap}
            onFind={handleFind}
          />
        </div>

        {message && <p className="success-message">✓ {message}</p>}
        {error && <p className="error-message">! {error}</p>}

        <div className="card route-result">
          <RouteResult route={route} from={from} to={to} />
        </div>

        <div className="card">
          <MetroMap from={from} to={to} route={route} />
        </div>

        <div className="card">
          <AlgorithmInfo />
        </div>

        <div className="card">
          <ProjectInfo />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
