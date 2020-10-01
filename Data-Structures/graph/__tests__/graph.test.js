'use Strict';

const { Graph, Node  } = require("../graph");
const { getDirectFlight } = require('../getEdge/get-edge');


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

  // it('should add an edge successfully to the graph', () => {
  //   const graph = new Graph();
  //   graph.addNode(nodeOne);
  //   graph.addNode(nodeTwo);

  //   graph.addEdge(nodeOne, nodeTwo, 30);
  //   let neighbors = graph.getNeighbors(nodeOne);
  //   const edges = [
  //     {
  //     "destination": {
  //       "neighbors": [1],
  //       "value": 2,
  //     },
  //   "origin":{
  //     "neighbors":[2],
  //     "value": 1,
  //        },
  //   "weight": 30,
  //        },
  //       ]
  //   expect(neighbors).toEqual(edges);
  // });

  // Array [
  //   -   Object {
  //   -     "destination": Object {
  //   -       "neighbors": Array [
  //   -         1,
  //   -       ],
  //   +   Edge {
  //   +     "node": Node {
  //           "value": 2,
  //   -     },
  //   -     "origin": Object {
  //   -       "neighbors": Array [
  //   -         2,
  //   -       ],
  //   -       "value": 1,
  //         },
  //         "weight": "weight",
  //       },
  //     ]Jest

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

describe('Has direct flights tests', () => {
  
  it('should return true for Metroville to Pandora', () => {

    const graph = new Graph() ;

    const Metroville = new Node('Metroville');
    const Pandora = new Node('Pandora');

    graph.addNode(Metroville);
    graph.addNode(Pandora);

    graph.addEdge(Metroville, Pandora, 82);

    const result = getDirectFlight(graph, [Metroville, Pandora]);

    expect(result.isTrue);
    expect(result.totalCost).toBe(82);
  });

  it('should return true for Arendelle, New Monstropolis, and Naboo', () => {
      const graph = new Graph();

      const Arendelle = new Node('Arendelle');
      const newMonstropolis = new Node ('New Monstropolis');
      const Naboo = new Node ('Naboo');

      graph.addNode(Arendelle);
      graph.addNode(newMonstropolis);
      graph.addNode(Naboo);

      graph.addEdge(Arendelle, newMonstropolis, 42);
      graph.addEdge(newMonstropolis, Naboo, 73);

      const result = getDirectFlight(graph, [Arendelle,newMonstropolis,Naboo]);

      expect(result.isTrue).toBe(true);
      expect(result.totalCost).toBe(115);
  });

  it('should return false with [Narnia, Arendelle, Naboo]', () => {
    const graph = new Graph();

    const Narnia = new Node('Narnia');
    const Arendelle = new Node('Arendelle');
    const Naboo = new Node('Naboo');

    graph.addNode(Narnia);
    graph.addNode(Arendelle);
    graph.addNode(Naboo);

    graph.addEdge(Narnia, Naboo, 250);

    const result = getDirectFlight(graph, [Narnia, Arendelle, Naboo]);
    
    expect(result.isTrue).toBe(false);
    expect(result.totalCost).toBe(0);
  })
})