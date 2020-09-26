// use a tostring method on nodes to make them readable

// EDGE is the relationship between two nodes.
class Edge {
  constructor() {

  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Adds a new node to the graph
  // Takes in the value of that node
  // Returns the added node
  addNode(value) {
    let newNode = new Node(value);
    this.adjacencyList.add(newNode);
    return this.adjacencyList.size();
  }

  //  Adds a new edge between two nodes in the graph
  // Include the ability to have a “weight”
  // Takes in the two nodes to be connected by the edge
  // Both nodes should already be in the Graph
  addEdge(nodeOne, nodeTwo, weight=null) {
    let origin = null;
    let destination = null;
    
    }
  }
  //  Returns all of the nodes in the graph as a collection (set, list, or similar)
  getNodes() {
    return this.vertexes;
  }
  //  Returns a collection of edges connected to the given node
  // Takes in a given node
  // Include the weight of the connection in the returned collection
  getNeighbors(node) {
    if(!this.vertexes.has(node))
  }
  //  Returns the total number of nodes in the graph
  size() {
    return this.vertexes.size;
  }
}

// VERTEX is a node in a graph
class Node {
  constructor(value) {
    this.value = value;
  }
}
