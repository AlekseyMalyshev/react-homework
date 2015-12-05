
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
