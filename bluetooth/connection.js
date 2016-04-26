document.querySelector('#connect').addEventListener('click', () => {
    // progress.hidden = false;
// Can only send commands once device is in developer mode.
// Put device into developer mode by sending a special string to Anti DOS,
// 7 to TX Power and 1 to Wake CPU on radio service.
// if (controlCharacteristic == null) {
    navigator.bluetooth.requestDevice({
            filters: [{
                services: ['22bb746f-2bb0-7554-2d6f-726568705327']
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

    return server.getPrimaryService("22bb746f-2bb0-7554-2d6f-726568705327");
})

.then(service => {
        // Developer mode sequence is sent to the radio service
        radioService = service;
    // Get Anti DOS characteristic
    return radioService.getCharacteristic("22bb746f-2bbd-7554-2d6f-726568705327");
})
// .then(characteristic => {
//         console.log('> Found Anti DOS characteristic');
//     // Send special string
//     let bytes = new Uint8Array('011i3'.split('').map(c => c.charCodeAt()));
//     return characteristic.writeValue(bytes).then(() => {
//             console.log('Anti DOS write done.');
// })
// })
// .then(() => {
//         // Get TX Power characteristic
//         return radioService.getCharacteristic("22bb746f-2bb2-7554-2d6f-726568705327");
// })
// .then(characteristic => {
//         console.log('> Found TX Power characteristic');
//     let array = new Uint8Array([0x07]);
//     return characteristic.writeValue(array).then(() => {
//             console.log('TX Power write done.');
// })
// })
// .then(() => {
//         // Get Wake CPU characteristic
//         return radioService.getCharacteristic("22bb746f-2bbf-7554-2d6f-726568705327");
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
//         robotService = service;
//     // Get Control characteristic
//     return robotService.getCharacteristic("22bb746f-2ba1-7554-2d6f-726568705327");
// })
// .then(characteristic => {
//         console.log('> Found Control characteristic');
//     // Cache the characteristic
//     controlCharacteristic = characteristic;
//     progress.hidden = true;
//     return setColor(0, 250, 0);
// })
.catch(function(err) {
    return err;
        )}
};