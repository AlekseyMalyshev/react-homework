'use strict';

let data1 = [
  {"domain":"mongodb.info","ip":"82.192.74.35","country":"NL"},
  {"domain":"udemy.com","ip":"190.93.242.22","country":"CR"},
  {"domain":"coursereport.com","ip":"204.236.232.83","country":"US"}
];

let data2 = [
   {"rank":1,"name":"China","population":1373420000,"percent":18.9},
   {"rank":2,"name":"India","population":1280670000,"percent":17.6},
   {"rank":3,"name":"United States","population":322317000,"percent":4.42},
   {"rank":4,"name":"Indonesia","population":255461700,"percent":3.51},
   {"rank":5,"name":"Brazil","population":205252000,"percent":2.82}
];

class ReactTable extends React.Component {

  getHeaders(obj) {
    let ths = [];
    if (obj && obj.length > 0) {
      for (let key in obj[0]) {
        ths.push(<th key={key}>{key}</th>);
      }
    }
    return <tr>{ths}</tr>;
  }

  getRow(obj) {
    let tds = [];
    let i = 0;
    for (let key in obj) {
      tds.push(<td key={key}>{obj[key]}</td>);
    }
    return tds;
  }

  getBody(tbl_data) {
    let key = 0;
    return tbl_data.map((obj) => {
              return <tr key={key++}>{this.getRow(obj)}</tr>;
            });
  }

  render() {
    return (<table className="table table-striped">
              <thead>{this.getHeaders(this.props.data)}</thead>
              <tbody>{this.getBody(this.props.data)}</tbody>
            </table>);
  }
}

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

let container = document.getElementById('container');

ReactDOM.render(<App/>, container);
