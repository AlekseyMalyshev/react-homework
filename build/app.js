var ReactTable = require('table');

'use strict';

class App extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(ReactTable, { data: data1 }),
      React.createElement(ReactTable, { data: data2 })
    );
  }
}