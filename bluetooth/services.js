function setColor(r, g, b) {
    console.log('Set color: r='+r+',g='+g+',b='+b);
    if (busy) {
        // Return if another operation pending
        return Promise.resolve();
    }
    busy = true;
    let did = 0x02; // Virtual device ID
    let cid = 0x20; // Set RGB LED Output command
    // Color command data: red, green, blue, flag
    let data = new Uint8Array([r, g, b, 0]);
    sendCommand(did, cid, data).then(() => {
        busy = false;
})
.catch(handleError);
}
function roll(heading) {
    console.log('Roll heading='+heading);
    if (busy) {
        // Return if another operation pending
        return Promise.resolve();
    }
    busy = true;
    let did = 0x02; // Virtual device ID
    let cid = 0x30; // Roll command
    // Roll command data: speed, heading (MSB), heading (LSB), state
    let data = new Uint8Array([10, heading >> 8, heading & 0xFF, 1]);
    sendCommand(did, cid, data).then(() => {
        busy = false;
})
.catch(handleError);
}/**
 * Created by danielklein on 4/26/16.
 */
