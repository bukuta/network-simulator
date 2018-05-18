import Switch from '../Switch.js';
test('create a new Switch',()=>{
  let switcher =  new Switch();
  expect(switcher.ports.length).toBe(0);
});
