import Interface from '../Interface.js';

let interface0;

beforeAll(() => {
  interface0 = new Interface({
    name: 'interface-0',
    mac: 'AA:AA:AA:00:00:00',
  })
});

afterAll(()=>{

});

test('create a new Interface', () => {
  expect(interface0.name).toBe('interface-0');
  //expect(interface0.ip).toBe('10.0.0.1');
});

test('write data', (done) => {
  interface0.on('upstream', function(data) {
    expect(Buffer.isBuffer(data)).toBe(true);
    expect(data.toString()).toBe('test');
    done();
  });
  interface0.write('test');
});
