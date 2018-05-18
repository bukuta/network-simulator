/**
 *  网络topo
 *  设备添加进网络
 *  设备移出网络
 *
 */
class Network {
  constructor({name}){
    this.name = name;
    this.devices = [];
  }
  addDevice(device){
    this.devices.push(device);
  }
  removeDevice(device){
    this.devices = this.devices.filter(dev=>device!=dev);
  }
}

export default Network;

