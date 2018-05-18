import EventEmitter from 'events';


/**
 * 数据上行： 数据从设备通过Interface发出去, 发送数据
 * 数据下行： 数据从Interface发向设备, 接收数据
 */
class Interface extends EventEmitter{
  constructor({name,mac}) {
    super();
    this.name = name;
    this.mac=mac||'';
    this.on('downstream',this.receive.bind(this));
  }

  write(data){
    if(!Buffer.isBuffer(data)){
      data = new Buffer(data);
    }
    this.emit('upstream',data);
  }

  receive(data){
    console.log('receive',data);
  }
}

export default Interface;
