import React, { Component } from "react";

class Movies extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
