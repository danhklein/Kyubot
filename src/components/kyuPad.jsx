import React, { Component } from 'react';

class KyuPad extends Component {
  constructor() {
    super();


    this.createJoystick = this.createJoystick.bind(this);

  }


  createJoystick() {
      const joystick = new VirtualJoystick({
        mouseSupport  : true,
        stationaryBase  : true,
        baseX   : 600,
        baseY   : 300,
        limitStickTravel: true,
        stickRadius: 100
      });
    



    setInterval(function(){
        let dx = Math.floor(joystick.deltaX());
        let dy = Math.floor(joystick.deltaY());
        let speed = Math.floor((Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2)))*2.45);
        let rad = (Math.atan2(joystick.deltaY(),joystick.deltaX()));
        let direction = (Math.floor(rad * (180 / Math.PI))) + 180;

        let outputEl  = document.getElementById('result');
            outputEl.innerHTML  = '<b>Result:</b> '
              + ' dx: '+dx
              + ' dy: '+dy
              + ' speed: '+speed
              + ' direction: '+direction
              + (joystick.right() ? ' right'  : '')
              + (joystick.up()  ? ' up'   : '')
              + (joystick.left()  ? ' left' : '')
              + (joystick.down()  ? ' down'   : '')

              buildObjects(speed, direction);

              
          }, 50)
  

        function buildObjects (speed, direction){
          let moveHistory = [];
          let moveObject = {};
          moveHistory.push({speed: speed, direction: direction});
          moveObject = {speed, direction};
          console.log(moveObject);
          return moveObject;
        }




      }

   render() {
    this.createJoystick();
    // setTimeout(this.displaySpeed(), 1000);
    return (
      <div id="result">Something</div>
      );
  }
}

export default KyuPad;

//returns jsx instead of having a method on it
// const RandomForm =()=>{

// }