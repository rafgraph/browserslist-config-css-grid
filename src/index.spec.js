const browserslist = require('browserslist');
const config = require('./index.js');

it('exports a valid browserslist configuration', () => {
  expect(() => {
    browserslist(config);
  }).not.toThrow();
});
