const { Queue } = require('../stacks-and-queues/queue');

// use a tostring method on nodes to make them readable
class Node {
  constructor(value) {
    this.value = value;
  }
}
// EDGE is the relationship between two nodes.
class Edge {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;

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
  addEdge(origin, destination, weight = 0) {
    if(!this.adjacencyList.has(origin)){
      return;
    }
    if(!this.adjacencyList.has(destination)){
      return;
    }

    const adjacencies = this.adjacencyList.get(origin);

    const edge = new Edge(destination, weight);

    adjacencies.push(edge);
    }
  //  Returns all of the nodes in the graph as a collection (set, list, or similar)
  getNodes() {
    return this.adjacencyList;
  }
  //  Returns a collection of edges connected to the given node
  // Takes in a given node
  // Include the weight of the connection in the returned collection
  getNeighbors(node) {
    return this.adjacencyList.get(node);
  }
  //  Returns the total number of nodes in the graph
  size() {
    return this.adjacencyList.size;
  }

  breadthFirstTraversal(startNode){
   const nodes = new Map(); 
   const breadthQ = new Queue();
   const visitedArr = [];

   breadthQ.enqueue(startNode);

   while (breadthQ){

     const front = breadthQ.dequeue();
     nodes.set(front);
     visitedArr.push(front);

     const children = this.getNeighbors(front);

     for (let child of children){

      const childNode = child.startNode;

      if(!visitedArr.has(childNode)){
        breadthQ.enqueue(childNode)
      }
     }
   }

  return nodes;
  }


}



module.exports = {Graph, Node }

// VERTEX is a node in a graph

