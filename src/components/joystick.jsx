import React, { Component } from 'react';

class JoystickControl extends Component { 

  var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
      var clock = new THREE.Clock();
      var keyboard = new THREEx.KeyboardState();
      var joystick = new VirtualJoystick({
        mouseSupport  : true,
        stationaryBase  : true,
        baseX   : 200,
        baseY   : 200,
        limitStickTravel: true,
        stickRadius: 100
      });
      var renderer = new THREE.WebGLRenderer();
      renderer.setClearColor('rgb(204,204,204)', 1);
      renderer.setSize(window.innerWidth, window.innerHeight);
      render () {
        return (
          <div>SPACESHIP</div>
          )
        // document.body.h1.appendChild(renderer.domElement);
      }
}

export default JoystickControl;