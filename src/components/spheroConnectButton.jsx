import React, { Component } from 'react';

class SpheroConnectButton extends Component {
  spheroConnect() {
    console.log("One day I'll connect you to Sphero. Just watch.")
  }

  render() {
  return (
    <button onClick={this.spheroConnect}>Find Sphero</button>
  );
  }
}

export default SpheroConnectButton;