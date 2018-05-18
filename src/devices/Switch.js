/*
 *  交换机
 *  设备连接到交换机某端口
 *  设备移出交换机某端口
 *  监听各端口收到数据帧
 *    根据数据帧头，进行转发到对应的端口
 *
 *  划分vlan
 *  控制广播域
 *
 */
const debug = require('debug')('ns:switch');
class Switch{
  constructor(){
    this.ports=[];
    this.vlans=[];
  }
  bind(port,_interface){
    this.portInterfaces[port]=_interface;
    _interface.on('write',this.listen.bing(this));
  }
  unbind(port,_interface){
    delete this.portInterfaces[port];
  }
  listen(frames){
    debug('frames',frames);
  }
}

export default Switch;
