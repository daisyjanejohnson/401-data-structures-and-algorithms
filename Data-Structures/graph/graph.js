// use a tostring method on nodes to make them readable
class Node {
  constructor(value) {
    this.value = value;
  }
}
// EDGE is the relationship between two nodes.
class Edge {
  constructor(vertex, weight) {
    this.origin = origin;
    this.destination = destination;

  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Adds a new node to the graph
  // Takes in the value of that node
  // Returns the added node
  addNode(node) {
    this.adjacencyList.set(node, []);
  }

  //  Adds a new edge between two nodes in the graph
  // Include the ability to have a “weight”
  // Takes in the two nodes to be connected by the edge
  // Both nodes should already be in the Graph
  addEdge(origin, destination) {
    this.adjacencyList.get(origin).push(destination);
    this.adjacencyList.get(destination).push(source);
    
    }
  //  Returns all of the nodes in the graph as a collection (set, list, or similar)
  getNodes(start, end, weight=0) {
    const adjacent = this.adjacencyList.get(start);
    adjacent.push(new Edge(end, weight));
    return this.adjacencyList;
  }
  //  Returns a collection of edges connected to the given node
  // Takes in a given node
  // Include the weight of the connection in the returned collection
  getNeighbors(node) {
    return [...this.adjacencyList.get(node)];
  }
  //  Returns the total number of nodes in the graph
  size() {
    return this.adjacencyList.size;
  }
}


// VERTEX is a node in a graph

