import React, { Component } from 'react';

class NavButtons extends Component {
  loginClick() {
    console.log("You can't login now, but you will be able to.")
  }

  instructionsClick() {
    console.log("eventually you'll be able to read instructions too.")
  }

  render() {
    return (
      <div>
      <button onClick={this.loginClick}>Home/Login</button>
      <button onClick={this.instructionsClick}>Instructions</button>
      </div>
      );
  }
}

export default NavButtons;