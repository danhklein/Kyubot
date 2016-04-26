import React, { Component } from 'react';

class SpheroConnectButton extends Component {
  spheroConnect() {
    document.querySelector('#connect').addEventListener('click', () => {

// Can only send commands once device is in developer mode.
// Put device into developer mode by sending a special string to Anti DOS,
// 7 to TX Power and 1 to Wake CPU on radio service.
      navigator.bluetooth.requestDevice({
              filters: [{
                namePrefix: ['BB']
              }]
            })
            .then(device => {
              console.log('> Found ' + device.name);
              console.log('Connecting to GATT Server...');
              return device.connectGATT();
        })
        .then(server => {
          gattServer = server;
          // Get radio service
          console.log('Connected!');
          return gattServer.getPrimaryService("22bb746f-2bb0-7554-2d6f-726568705327");
        })
            .catch(function (err) {
              console.log(err)
            })
    })
  }


    render()
    {
      return (
          <button id="connect" onClick={this.spheroConnect}>Find Sphero</button>
      );
    }
  }


export default SpheroConnectButton;