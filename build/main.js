'use strict';

let data1 = [{ "domain": "mongodb.info", "ip": "82.192.74.35", "country": "NL" }, { "domain": "udemy.com", "ip": "190.93.242.22", "country": "CR" }, { "domain": "coursereport.com", "ip": "204.236.232.83", "country": "US" }];

let data2 = [{ "rank": 1, "name": "China", "population": 1373420000, "percent": 18.9 }, { "rank": 2, "name": "India", "population": 1280670000, "percent": 17.6 }, { "rank": 3, "name": "United States", "population": 322317000, "percent": 4.42 }, { "rank": 4, "name": "Indonesia", "population": 255461700, "percent": 3.51 }, { "rank": 5, "name": "Brazil", "population": 205252000, "percent": 2.82 }];

class ReactTable extends React.Component {

  getHeaders(obj) {
    let ths = [];
    if (obj && obj.length > 0) {
      for (let key in obj[0]) {
        ths.push(React.createElement(
          "th",
          { key: key },
          key
        ));
      }
    }
    return React.createElement(
      "tr",
      null,
      ths
    );
  }

  getRow(obj) {
    let tds = [];
    let i = 0;
    for (let key in obj) {
      tds.push(React.createElement(
        "td",
        { key: key },
        obj[key]
      ));
    }
    return tds;
  }

  getBody(tbl_data) {
    let key = 0;
    return tbl_data.map(obj => {
      return React.createElement(
        "tr",
        { key: key++ },
        this.getRow(obj)
      );
    });
  }

  render() {
    return React.createElement(
      "table",
      { className: "table table-striped" },
      React.createElement(
        "thead",
        null,
        this.getHeaders(this.props.data)
      ),
      React.createElement(
        "tbody",
        null,
        this.getBody(this.props.data)
      )
    );
  }
}

class App extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(ReactTable, { data: data1 }),
      React.createElement(ReactTable, { data: data2 })
    );
  }
}

let container = document.getElementById('container');

ReactDOM.render(React.createElement(App, null), container);