# Hyderabad Metro Shortest-Route Finder

A personal portfolio project that finds the shortest route between two Hyderabad Metro stations
using Dijkstra's Algorithm. Built with React and vanilla CSS.

## About

This project represents the Hyderabad Metro network as a weighted graph, where every metro station
is a node and every connection between two adjacent stations is an edge with a weight (the distance
in kilometres). It then uses Dijkstra's Algorithm (implemented in plain JavaScript) to calculate the
shortest route between any two selected stations.

## Features

- Dijkstra's Algorithm implemented from scratch
- Realistic Hyderabad Metro station network (Red, Blue and Green lines)
  with 3 interchange stations (Ameerpet, Parade Grounds and MG Bus Station)
- Shortest route calculation with total distance, estimated time, and station count
- Metro network map designed to resemble the official Hyderabad Metro rail map
- Swap between start and destination stations
- Friendly error handling for empty / identical / unreachable selections
- Algorithm explanation section for interviews and learning
- Responsive design (desktop, laptop, tablet, mobile)

## Tech Stack

- React
- JavaScript
- HTML
- CSS
- Vite (build tool)

## How It Works

1. The metro network is stored as an adjacency list in `src/data/metroNetwork.js`.
   Each station maps to a list of `{ station, weight }` neighbours, where the weight is the
   approximate distance in km. The network follows the real Hyderabad Metro: a Red Line
   (Miyapur → LB Nagar), a Blue Line (Raidurg → Nagole) and a Green Line
   (JBS Parade Ground → MG Bus Station), joined at Ameerpet, Parade Grounds and MG Bus Station.
2. `src/algorithms/dijkstra.js` contains the Dijkstra implementation. It keeps track of the
   smallest known distance to each station, repeatedly picks the unvisited station with the
   smallest distance, and relaxes (updates) its neighbours until the destination is reached.
3. React components handle the form, display the route, and draw the map with SVG lines and
   positioned station markers.

## How to Run

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
  components/
    Header.jsx        – top navigation / logo
    RouteFinder.jsx   – from / to dropdowns, swap and find buttons
    RouteResult.jsx   – displays the computed shortest route and stats
    MetroMap.jsx      – visual network map with route highlighting
    AlgorithmInfo.jsx – explains how Dijkstra's Algorithm works
    ProjectInfo.jsx   – about this project
    Footer.jsx        – footer
  data/
    metroNetwork.js   – station list, connections, and graph builder
  algorithms/
    dijkstra.js       – the Dijkstra's Algorithm implementation
  App.jsx             – main app that ties everything together
  main.jsx            – React entry point
  index.css           – all styling
```

- `src/data/metroNetwork.js` – the weighted graph data.
- `src/algorithms/dijkstra.js` – the core algorithm (most important file to understand).

## Future Improvements

- Real-time metro timings and train frequency
- Fare calculation based on distance
- A more detailed and geographically accurate map
- Station search with autocomplete
- Multiple route options (fastest vs fewest transfers)
