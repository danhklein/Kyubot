import React, { Component } from 'react';
import SpheroConnectButton from './spheroConnectButton';

class KyuPad extends Component {
  constructor() {
    super();
    this.data = {};
    this.joystick;
    this.speedDir;

    this.state = {
      moveObj: {
        speed: 120,
        direction: 75
      },
    }

    this.createJoystick = this.createJoystick.bind(this);
    this.joystickCalc = this.joystickCalc.bind(this);
    this.buildObjects = this.buildObjects.bind(this);

    this.joystickCalc();

  }

  componentDidMount() {
    this.createJoystick();
  }


  createJoystick() {
      const joystick = new VirtualJoystick({
        container: document.getElementById('kyubot'),
        mouseSupport  : true,
        limitStickTravel: true,
        stickRadius: 100
      });

      this.joystick = joystick
      this.speedDir = joystick

    }

    joystickCalc() {
      var self = this;

      setInterval(function (){
       let dx = Math.floor(self.joystick.deltaX());
        let dy = Math.floor(self.joystick.deltaY());
        let speed = Math.floor((Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2)))*2.45);
        let rad = (Math.atan2(self.joystick.deltaY(),self.joystick.deltaX())) + Math.PI;
        let direction = ((Math.floor(rad * (180 / Math.PI))) + 90) % 360;

        let outputEl  = document.getElementById('result');
            outputEl.innerHTML  = ''
              + ' <b>speed:</b> '+speed
              + '<br> <b>direction:</b> '+direction
              + (self.joystick.right() ? ' right'  : '')
              + (self.joystick.up()  ? ' up'   : '')
              + (self.joystick.left()  ? ' left' : '')
              + (self.joystick.down()  ? ' down'   : '')

              self.buildObjects(speed, direction);

          }, 50);


    }

    buildObjects(speed, direction) {
        let moveHistory = [];
          moveHistory.push({speed: speed, direction: direction});
          let moveObject = {speed: speed, direction: direction};

          this.setState({
            moveObj:moveObject
          })

          return moveObject;
    }


   render() {
    return (
      <div>
          <SpheroConnectButton buildObject={ this.state.moveObj } />
      </div>
      );
  }
}

export default KyuPad;