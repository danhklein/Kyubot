import React, { Component } from 'react';

class SpheroConnectButton extends Component {
  spheroConnect() {
    let gattServer;
  //   let radioService;
  //   let robotService;
  //   let controlCharacteristic;
  //   let sequence = 0;
  //   let heading = 0;
  //   let busy = false;
  //   progress.hidden = true;
  //   if (navigator.bluetooth == undefined) {
  //     document.getElementById("no-bluetooth").open();
  //   }
  //   function handleError(error)
  //   console.log(error);
  //   progress.hidden = true;
  //   gattServer = null;
  //   radioService = null;
  //   robotService = null;
  //   controlCharacteristic = null;
  //   dialog.open();
  // }


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
          // gattServer = server;
          // Get radio service
          console.log('Connected!');
          return server.getPrimaryService("22bb746f-2bb0-7554-2d6f-726568705327");
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