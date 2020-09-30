'use Strict';

const { Graph, Node  } = require("../graph");


let nodeOne = new Node(1);
let nodeTwo = new Node(2);
let nodeThree = new Node(3);

describe('Graph tests', () => {

  it('should implement a graph', () => {
    const graph = new Graph();
    expect(graph).toBeTruthy();
  });

  it('should add a node to the graph', () => {
    const graph = new Graph();
    graph.addNode(nodeOne);
    graph.addNode(nodeTwo);
    expect(graph.size()).toBe(2);
  });

  it('should ad an edge successfully to the graph', () => {
    const graph = new Graph();
    graph.addNode(nodeOne);
    graph.addNode(nodeTwo);
    graph.addEdge(nodeOne, nodeTwo, 'weight');
    let neighbors = graph.getNeighbors(nodeOne);
    const edges = [
      {
      "destination": {
        "neighbors": [1],
        "value": 2,
      },
    "origin":{
      "neighbors":[2],
      "value": 1,
         },
    "weight": "weight",
         },
        ]
    expect(neighbors).toEqual(edges);
  });

  // it.skip('should retrieve nodes successfully', () => {
  //   const graph = new Graph();
  //   graph.addNode(nodeOne);
  //   graph.addNode(nodeTwo);
  //   graph.addNode(nodeThree);

  //   expect(graph.getNodes()).toStrictEqual(Set {{"neighbors": [], "value": 1}, {"neighbors": [], "value": 2}, {"neighbors": [], "value": 3}});
  // })
});

// BREADTH FIRST TESTS

describe('Breadth First Testing', () => {

  // it('should return a list of nodes after completeing breadth-first traversal', () => {
  //   const graph = new Graph();
  //   const a = graph.addNode('A');
  //   const b = graph.addNode('B');
  //   const c = graph.addNode('C');
  //   const d = graph.addNode('D');
  //   const e = graph.addNode('E');
  //   const f = graph.addNode('F');

  //   expect(graph.breadthFirstTraversal(a)).toBe('A', 'B', 'C', 'D', 'E', 'F');
  // })
})
