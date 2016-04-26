'use strict';
document.addEventListener('WebComponentsReady', () => {

    // let connectToggle = document.querySelector('#connect');
let progress = document.querySelector('#progress');
let dialog = document.querySelector('#dialog');
let message = document.querySelector('#message');
let logo = document.querySelector('#logo');
let gattServer;
let radioService;
let robotService;
let controlCharacteristic;
let sequence = 0;
let heading = 0;
let busy = false;
progress.hidden = true;
if (navigator.bluetooth == undefined) {
    document.getElementById("no-bluetooth").open();
}
function handleError(error) 
    console.log(error);
    progress.hidden = true;
    gattServer = null;
    radioService = null;
    robotService = null;
    controlCharacteristic = null;
    dialog.open();
}
