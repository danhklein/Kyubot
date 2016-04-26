import React, { Component } from 'react';

class SpheroConnectButton extends Component {
  spheroConnect() {

    let radioService;
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
             console.log('full device', device);
              console.log('Connecting to GATT Server...');
               return device.connectGATT();
        })
        .then(server => {
          // gattServer = server;
          // Get radio service
            console.log('server', server);
          console.log('Connected!');
           return server.getPrimaryService("22bb746f-2bb0-7554-2d6f-726568705327");
        })
        .then(service => {
        // Developer mode sequence is sent to the radio service
        console.log('service', service);

    // Get Anti DOS characteristic
       return service.getCharacteristic("22bb746f-2bbd-7554-2d6f-726568705327");
           })

// .then(service => {
//         // Get TX Power characteristic
//         console.log('service2', service)
//         return service.getCharacteristic("22bb746f-2bb2-7554-2d6f-726568705327");
// })
.then(characteristic => {
        console.log('> Found TX Power characteristic', characteristic);
    let array = new Uint8Array([0x07]);
    console.log('arraaaaaaayyyy',array);
    return characteristic.writeValue(array).then(() => {
            console.log('TX Power write done.');
})
})
// .then(() => {
//         // Get Wake CPU characteristic
//         return service.getCharacteristic("22bb746f-2bbf-7554-2d6f-726568705327");
// })
// .then(characteristic => {
//         console.log('> Found Wake CPU characteristic');
//     let array = new Uint8Array([0x01]);
//     return characteristic.writeValue(array).then(() => {
//             console.log('Wake CPU write done.');
// })
// })
// .then(() => {
//         // Get robot service
//         return gattServer.getPrimaryService("22bb746f-2ba0-7554-2d6f-726568705327")
//     })
// .then(service => {
//         // Commands are sent to the robot service

//     // Get Control characteristic
//     return service.getCharacteristic("22bb746f-2ba1-7554-2d6f-726568705327");
// })
// .then(characteristic => {
//         console.log('> Found Control characteristic');
//     // Cache the characteristic
//     controlCharacteristic = characteristic;
//     progress.hidden = true;
//     return setColor(0, 250, 0);
// })


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