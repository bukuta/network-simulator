import Interface from './Interface.js';
class PC {
  constructor(name){
    this.name = name;
    this.interface = new Interface({name:'interface-0'});
  }
  connectTo(){
  }
}

export default PC;
