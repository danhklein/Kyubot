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

    this.createJoystick();
    this.joystickCalc();

  }


  createJoystick() {
      const joystick = new VirtualJoystick({
        mouseSupport  : true,
        stationaryBase  : true,
        baseX   : 600,
        baseY   : 220,
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
        let direction = ((Math.floor(rad * (180 / Math.PI))) + 270) % 360;

        let outputEl  = document.getElementById('result');
            outputEl.innerHTML  = ''
              + ' <b>speed:</b> '+speed
              + '<br> <b>direction:</b> '+direction
              + (self.joystick.right() ? ' right'  : '')
              + (self.joystick.up()  ? ' up'   : '')
              + (self.joystick.left()  ? ' left' : '')
              + (self.joystick.down()  ? ' down'   : '')

              self.buildObjects(speed, direction);
              // console.log(self.joystick)

          }, 50);


    }

    buildObjects(speed, direction) {
        let moveHistory = [];
          // let moveObject = {};
          moveHistory.push({speed: speed, direction: direction});
          let moveObject = {speed: speed, direction: direction};

          this.setState({
            moveObj:moveObject
          })

          return moveObject;
    }


   render() {
    // setTimeout(this.displaySpeed(), 1000);
    // console.log(this.speedDir)
    return (
      <div>
        <SpheroConnectButton buildObject={ this.state.moveObj } />
      </div>
      );
  }
}

export default KyuPad;

//returns jsx instead of having a method on it
// const RandomForm =()=>{

// }