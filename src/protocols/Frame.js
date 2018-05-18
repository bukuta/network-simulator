import Mac from './Mac.js';

class Frame {
  constructor({smac, tmac}) {
    this.smac = new Mac(smac);
    this.tmac = new Mac(tmac);
  }
  toBuffer() {
    //return Buffer.concat([this.smac,this.tmac,
  }
}


Frame.buildFrameBuffer = function({smac, tmac, buffer,type}) {
  if (!Buffer.isBuffer(buffer)) {
    buffer = new Buffer(buffer);
    if(buffer.byteLength>1500){
      throw new Error('frame too large');
    }
  }
  let types = {
    'ip':[0x08,0x00],
    'arp':[0x08,0x06],
    'rarp': [0x80,0x35],
  };

  let list = [
    new Mac(tmac).toBuffer(),
    new Mac(smac).toBuffer(),
    new Uint8Array(types[type||'ip']),
    buffer,
  ];
  if(buffer.byteLength<46){
    list.push(new Buffer(46-buffer.byteLength));
  }
  // TODO 添加crc校验
  let crc = new Uint8Array(4);

  list.push(crc);
  return Buffer.concat(list);
};

export default Frame;
