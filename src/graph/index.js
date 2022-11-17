class Graph {
  constructor() {
    this.adjecentList = {};
    this.nodes = 0;
  }

  getInstance() {
    return this;
  }

  addVertex(node) {
    this.adjecentList[node] = [];
    this.nodes++;
  }

  addEdge(node1, node2) {
    this.adjecentList[node1].push(node2);
    this.adjecentList[node2].push(node1);
  }
}

module.exports = Graph;
