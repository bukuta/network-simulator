import Frame from '../Frame.js';


test('buildFrame', () => {
  let smac = '00:00:00:00:00:01';
  let tmac = '00:00:00:00:00:02';
  let data = "abcdefg";

  var buffer = Frame.buildFrameBuffer({
    smac,
    tmac,
    buffer: data
  });

  expect(Buffer.isBuffer(buffer)).toBe(true);
  expect(buffer.byteLength).toBe(6+6+2+46+4);
  console.log(buffer);
});
