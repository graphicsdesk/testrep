let graph, scroller;

function init() {
  graph = new Graph(covidData);
  graph.set(initialState);

  scroller = scrollama(); // Instantiate the scrollama
  scroller // Setup the instance, pass callback functions
    .setup({
      step: '.lede-step-surrounding-padding',
      offset: window.innerWidth < 460 ? 0.95 : 0.65,
    })
    .onStepEnter(onStepEnter)
    .onStepExit(onStepExit);
}

const chartContainer = document.getElementById('chart-container');
chartContainer.setAttribute('data-index', 0);

function onStepEnter({ index }) {
  chartContainer.setAttribute('data-index', index);
  const state = allStates[index];
  if (state !== undefined) {
    graph.set(state);
  }
}

function onStepExit({ index, direction }) {
  if (index === 0 && direction === 'up') graph.set(initialState);
}

/**
 * Window event listeners
 */

function handleResize() {
  graph.resize();
  scroller.resize();
}