class Mac {
  constructor(mac) {
    if (Mac.isMac(mac)) {
      this.mac = mac;
    } else {
      throw new Error('invalid mac');
    }
  }
  toNumber() {
    return Mac.toNumber(this.mac);
  }
  toBuffer() {
    let numbers = this.toNumber();
    let buffer = new Uint8Array(6);
    buffer[0] = (numbers[0] << 4) + numbers[1];
    buffer[1] = (numbers[2] << 4) + numbers[3];
    buffer[2] = (numbers[4] << 4) + numbers[5];
    buffer[3] = (numbers[6] << 4) + numbers[7];
    buffer[4] = (numbers[8] << 4) + numbers[9];
    buffer[5] = (numbers[10] << 4) + numbers[11];
    return Buffer.from(buffer.buffer);
  }
}

let re = /^[0-9a-f]*$/;
Mac.isMac = function(mac) {
  mac = mac.replace(/:/g, '');
  return mac.length == 12 && re.test(mac)
}
Mac.toNumber = function(mac) {
  mac = mac.replace(/:/g, '');
  return mac.split('').map(a => parseInt(a, 16))
}
export default Mac;
