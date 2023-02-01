
function animateShortestPath(shortestPathArray) {
  for (let i = 0; i < shortestPathArray.length; i++) {
    setTimeout(() => {
      const node = shortestPathArray[i];
      document.getElementById(`node-${node.row}-${node.col}`).className =
        'node node-shortest-path';
    }, 50 * i);
  }
};


export function animateDijkstra(visitedArray, shortestPathArray) {
    for (let i = 0; i <= visitedArray.length; i++) {
      if (i === visitedArray.length) {
        setTimeout(() => {
          animateShortestPath(shortestPathArray);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedArray[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-visited';
      }, 10 * i);
    }
  };

 

  
