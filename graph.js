class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return false;
    this.adjacencyList[vertex] = [];
    return true;
  }

  addEdge(vertex1, vertex2) {
    const vertexExists = !!this.adjacencyList[vertex1] && !!this.adjacencyList[vertex2];
    if (!vertexExists) return false;
    if (!this.adjacencyList[vertex1].some(relatedVertex => relatedVertex === vertex2)) {
      this.adjacencyList[vertex1].push(vertex2)
    }
    if (!this.adjacencyList[vertex2].some(relatedVertex => relatedVertex === vertex1)) {
      this.adjacencyList[vertex2].push(vertex1)
    }
    return true;
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false;
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(relatedVertex => relatedVertex !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(relatedVertex => relatedVertex !== vertex1);
    return true;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false;
    for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
      this.adjacencyList[this.adjacencyList[vertex][i]] = this.adjacencyList[this.adjacencyList[vertex][i]].filter(relatedVertex => relatedVertex !== vertex)
    }
    delete this.adjacencyList[vertex];
    return true;
  }
}

const graph = new Graph()
console.log({ graph })
console.log("adding vertex a", graph.addVertex("a"));
console.log({ graph })
console.log("adding vertex b", graph.addVertex("b"));
console.log({ graph })
console.log("adding vetex a again", graph.addVertex("a"));
console.log({ graph })
console.log("creating and edge between a and b", graph.addEdge("a", "b"))
console.log({ graph: JSON.stringify(graph) })
console.log("trying to create and edge between a and b again", graph.addEdge("a", "b"))
console.log({ graph: JSON.stringify(graph) })
console.log("trying to create and edge between c and b, where c doesn't exists", graph.addEdge("c", "b"))
console.log({ graph: JSON.stringify(graph) })
console.log("adding vertex c", graph.addVertex("c"));
console.log({ graph: JSON.stringify(graph) })
console.log("creating edges between a and c", graph.addEdge("a", "c"))
console.log({ graph: JSON.stringify(graph) })
console.log("removing vertex the b", graph.removeVertex("b"))
console.log({ graph: JSON.stringify(graph) })
console.log("removing vertex the a", graph.removeVertex("a"))
console.log({ graph: JSON.stringify(graph) })
console.log("adding d vertex", graph.addVertex("d"))
console.log({ graph: JSON.stringify(graph) })
console.log("adding c and d edge", graph.addEdge("c", "d"))
console.log({ graph: JSON.stringify(graph) })
console.log("adding a vertex", graph.addVertex("a"))
console.log({ graph: JSON.stringify(graph) })
console.log("adding a and d edge", graph.addEdge("a", "d"))
console.log({ graph: JSON.stringify(graph) })
console.log("removing the edge between c and d", graph.removeEdge("c", "d"))
console.log({ graph: JSON.stringify(graph) })
