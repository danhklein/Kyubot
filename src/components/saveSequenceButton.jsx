import React, { Component } from 'react';

class SaveSequence extends Component {
  saveSequence() {
    console.log("Whee! You want to save something!");
  }

  render() {
    return (
      <button onClick={ this.saveSequence }>Save</button>
      );
  }
}

export default SaveSequence;