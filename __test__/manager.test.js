const Manager = require('../lib/manager');

test('setting office number', () => {
  const testValue = '10';
  const employee = new Manager('Zac', 1, 'zac@fakemail.com', testValue);
  expect(employee.officeNumber).toBe(testValue);
});

test('get Role function', () => {
  const testValue = 'Manager';
  const employee = new Manager('Zac', 1, 'zac@fakemail.com', testValue);
  expect(employee.getRole()).toBe(testValue);
});
