const { Queue } = require('../stacks-and-queues/queue');

// use a tostring method on nodes to make them readable
class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}
// EDGE is the relationship between two nodes.
class Edge {
  constructor(origin, destination, weight) {
    this.origin = origin;
    this.destination = destination;
    this.weight = weight;

  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Set();
    this.edges = [];
  }

  // Adds a new node to the graph
  // Takes in the value of that node
  // Returns the added node
  addNode(node) {
    let newNode = new Node(node.value);
    this.adjacencyList.add(newNode);
    return newNode;
  }

  //  Adds a new edge between two nodes in the graph
  // Include the ability to have a “weight”
  // Takes in the two nodes to be connected by the edge
  // Both nodes should already be in the Graph
  addEdge(origin, destination, weight=null) {
    origin.neighbors.push(destination.value);
    destination.neighbors.push(origin.value);

    const edge = new Edge(origin, destination, weight);
    this.edges.push(edge);
    }
  //  Returns all of the nodes in the graph as a collection (set, list, or similar)
  getNodes() {
    return this.adjacencyList;
  }
  //  Returns a collection of edges connected to the given node
  // Takes in a given node
  // Include the weight of the connection in the returned collection
  getNeighbors(node) {
    const myEdges = [];

    this.edges.forEach(edge => {
      if(edge.origin.value === node.value){
        myEdges.push(edge);
      }
    });
    return myEdges;
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

