import React, { Component } from 'react';

class SpheroConnectButton extends Component {
  constructor(props) {
    super(props);
    this.sequence = 0;
    this.heading = 0;
    this.controlCharacteristic;


    this.state = {
      busy: false
    }
    this.setColor = this.setColor.bind(this);
    this.roll = this.roll.bind(this);
    this.sendCommand = this.sendCommand.bind(this);
    this.spheroConnect = this.spheroConnect.bind(this);
    // this.red;


  }

  sendCommand(did, cid, data) {
      // Create client command packets
      // API docs: https://github.com/orbotix/DeveloperResources/blob/master/docs/Sphero_API_1.50.pdf
      // Next sequence number
      let seq = this.sequence & 255;
      this.sequence += 1
      // Start of packet #2
      let sop2 = 0xfc;
      sop2 |= 1; // Answer
      sop2 |= 2; // Reset timeout
      // Data length
      let dlen = data.byteLength + 1;
      let sum = data.reduce((a, b) => {
              return a + b;
  });
      // Checksum
      let chk = (sum + did + cid + seq + dlen) & 255;
      chk ^= 255;
      let checksum = new Uint8Array([chk]);
      let packets = new Uint8Array([0xff, sop2, did, cid, seq, dlen]);
      // Append arrays: packet + data + checksum
      let array = new Uint8Array(packets.byteLength + data.byteLength + checksum.byteLength);
      array.set(packets, 0);
      array.set(data, packets.byteLength);
      array.set(checksum, packets.byteLength + data.byteLength);
      return this.controlCharacteristic.writeValue(array).then(() => {
              console.log('Command write done.');
  });
  }

  roll(speed, heading) {
    console.log('Roll heading='+heading + ", speed=" + speed);
    if (this.state.busy) {
        // Return if another operation pending
        return Promise.resolve();
    }
   this.setState({ busy: true })
    let did = 0x02; // Virtual device ID
    let cid = 0x30; // Roll command
    // Roll command data: speed, heading (MSB), heading (LSB), state
    let data = new Uint8Array([speed, heading >> 8, heading & 0xFF, 1]);
    this.sendCommand(did, cid, data).then(() => {
       this.setState({ busy: false });
    })
    .catch(function (err) {
                  console.log(err)
                })
      }

  setColor(r, g, b) {
    console.log('Set color: r='+r+',g='+g+',b='+b);
      if (this.state.busy) {
          // Return if another operation pending
          return Promise.resolve();
      }
      this.setState({ busy: true })
      let did = 0x02; // Virtual device ID
      let cid = 0x20; // Set RGB LED Output command
      // Color command data: red, green, blue, flag
      let data = new Uint8Array([r, g, b, 0]);
      this.sendCommand(did, cid, data).then(() => {
          this.setState({ busy: false });
  })
  .catch(function (err) {
              console.log(err)
            })
  }

  spheroConnect() {

    let radioService;
    let gattServer;
    let robotService;

    // let sequence = 0;
    let heading = 0;
    // let busy = false;

  //   if (navigator.bluetooth == undefined) {
  //     document.getElementById("no-bluetooth").open();
  //   }
  //   function handleError(error)
  //   console.log(error);
  //   progress.hidden = true;
    // gattServer = null;
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
              console.log('Cheetapotomas');
               return device.connectGATT();
        })
        .then(server => {
          gattServer = server;
          // Get radio service
            console.log('server', server);

           return server.getPrimaryService("22bb746f-2bb0-7554-2d6f-726568705327");
        })
        .then(service => {
          radioService = service;
        // Developer mode sequence is sent to the radio service
        console.log('Andy\'s radioService', radioService)
        console.log('Andy\'s service', service);


    // Get Anti DOS characteristic
       return radioService.getCharacteristic("22bb746f-2bbd-7554-2d6f-726568705327");
           })
.then(characteristic => {
        console.log('> Found Anti DOS characteristic');
    // Send special string
    let bytes = new Uint8Array('011i3'.split('').map(c => c.charCodeAt()));
    return characteristic.writeValue(bytes).then(() => {
            console.log('Anti DOS write done.');
            console.log('Made it this far');
    })
  })

.then(() => {
        // Get TX Power characteristic
        console.log('service2', radioService)
        return radioService.getCharacteristic("22bb746f-2bb2-7554-2d6f-726568705327");
})
.then(characteristic => {
        console.log('> Found TX Power characteristic', characteristic);
    let array = new Uint8Array([0x07]);
    console.log('arraaaaaaayyyy',array);
    return characteristic.writeValue(array).then(() => {
            console.log('TX Power write done.');
  })
})
.then(() => {
        // Get Wake CPU characteristic
        return radioService.getCharacteristic("22bb746f-2bbf-7554-2d6f-726568705327");
})
.then(characteristic => {
        console.log('> Found Wake CPU characteristic');
    let array = new Uint8Array([0x01]);
    return characteristic.writeValue(array).then(() => {
            console.log('Wake CPU write done.');
  })
})
.then(() => {
        // Get robot service
        return gattServer.getPrimaryService("22bb746f-2ba0-7554-2d6f-726568705327")
    })
.then(service => {
        // Commands are sent to the robot service
        robotService = service;
    // Get Control characteristic
    return robotService.getCharacteristic("22bb746f-2ba1-7554-2d6f-726568705327");
})
.then(characteristic => {
        console.log('> Found Control characteristic');
    // Cache the characteristic
    this.controlCharacteristic = characteristic;

    return this.roll(150, 100);
})


            .catch(function (err) {
              console.log(err)
            })
    })
  }

red() {
  return this.setColor(255,0,0)

}

blue() {
  return this.setColor(0,0,255)

}
rollKyu() {
  console.log('this thing', this.props.buildObject)
  let self = this
  setInterval(function() {
    self.roll(self.props.buildObject.speed, self.props.buildObject.direction);
  }, 100);
}




    render()
    {
      return (
        <div>
          <button id="red" onClick={this.red.bind(this)}>red</button>
          <button id="blue" onClick={this.blue.bind(this)}>blue</button>
          <button id="connect" onClick={this.spheroConnect}>Find Sphero</button>
          <button id="roll" onClick={this.rollKyu.bind(this)}>Roll Meee</button>

        </div>
      );
    }
  }


export default SpheroConnectButton;