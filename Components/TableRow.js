import React, { Component, Fragment } from 'react';

class TableRow extends Component {
  render() {
    return (
      <Fragment>
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
        </tr>
      </Fragment>
    );
  }
}

export default TableRow;