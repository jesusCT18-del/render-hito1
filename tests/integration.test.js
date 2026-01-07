const fs = require('fs');

test('index.html contiene un <h1> con título', () => {
  const html = fs.readFileSync('index.html', 'utf-8');
  expect(html).toMatch(/<h1>/);
});

