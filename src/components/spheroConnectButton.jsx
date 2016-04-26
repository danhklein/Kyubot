import React, { Component } from 'react';

class SpheroConnectButton extends Component {
  spheroConnect() {
    document.querySelector('#connect').addEventListener('click', () => {

// Can only send commands once device is in developer mode.
// Put device into developer mode by sending a special string to Anti DOS,
// 7 to TX Power and 1 to Wake CPU on radio service.

              filters: [{
                services: ['22bb746f-2bb0-7554-2d6f-726568705327']
              }]
            })
            .then(device => {
              console.log('> Found ' + device.name);
              console.log('Connecting to GATT Server...');

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