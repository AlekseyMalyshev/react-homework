var ReactTable = require('table');

'use strict';

class App extends React.Component {
  render() {
    return (
            <div>
              <ReactTable data={data1} />
              <ReactTable data={data2} />
            </div>
            )
  }
}
