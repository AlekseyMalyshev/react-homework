'use strict';

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