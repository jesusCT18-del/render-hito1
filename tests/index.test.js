const fs = require('fs');

test('index.html existe', () => {
  expect(fs.existsSync('index.html')).toBe(true);
});

