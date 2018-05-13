'use strict';

var count = 0;

var addOne = function addOne() {
  console.log('addOne');
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  console.log('minusOne');
  count--;
  renderCounterApp();
};

var reset = function reset() {
  console.log('reset');
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );

  ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();
