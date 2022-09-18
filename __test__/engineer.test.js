const Engineer = require('../lib/engineer');

test('setting up github via constructor', () => {
  const testValue = 'zwhumphrey';
  const employee = new Engineer('Zac', 1, 'zac@fakemail.com', testValue);
  expect(employee.github).toBe(testValue);
});

test('getRole function', () => {
  const testValue = 'Engineer';
  const employee = new Engineer('Zac', 1, 'zac@fakemail.com', testValue);
  expect(employee.getRole()).toBe(testValue);
});

test('Get gitHub', () => {
  const testValue = 'zwhumphrey';
  const employee = new Engineer('Zac', 1, 'zac@fakemail.com', testValue);
  expect(employee.getGitHub()).toBe(testValue);
});
