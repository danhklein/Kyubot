import React, { Component } from 'react';


class CurrentlyHappening extends Component {
constructor() {
  super();

  this.state = {
    showStart: false
  }
  this.toggle = this.toggle.bind(this)
}  

toggle() {
  this.setState({ showStart: !this.state.showStart})
}


render () {
  return (
    <div>      
      <div id="kyubot">
        <div className ="clickhere">Click Here to Start!</div>
      </div>
      <div id="result"></div>
    </div>
  );
 }
}

export default CurrentlyHappening;