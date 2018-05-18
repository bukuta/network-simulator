import Mac from '../Mac.js';

test('is mac',()=>{
  let macString = '00:0a:09:2235:12';
  expect(Mac.isMac(macString)).toBe(true);
});

test('not a mac',()=>{
  let macString = '00:0a:09:2235:122';
  expect(Mac.isMac(macString)).toBe(false);
});

test('toBuffer',()=>{
  let macString = '00:0a:09:22:35:12';
  let mac = new Mac(macString);
  let buffer = mac.toBuffer();
  expect(Buffer.isBuffer(buffer)).toBe(true);
});
