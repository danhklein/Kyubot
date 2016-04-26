function sendCommand(did, cid, data) {
    // Create client command packets
    // API docs: https://github.com/orbotix/DeveloperResources/blob/master/docs/Sphero_API_1.50.pdf
    // Next sequence number
    let seq = sequence & 255;
    sequence += 1
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
    return controlCharacteristic.writeValue(array).then(() => {
            console.log('Command write done.');
});
}