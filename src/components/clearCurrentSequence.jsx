import React, { Component } from 'react';

class ClearCurrent extends Component {
  clearContent() {
    console.log("You want to clear out the current sequence? Ok.")
  }

  render() {
    return(
      <button onClick={ this.clearContent }>Clear</button>
      );
  }
}

export default ClearCurrent;