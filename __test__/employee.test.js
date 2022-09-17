const Employee = require('../lib/employee');

test('creates employee object', () => {
  const employee = new Employee();
  expect(typeof employee).toBe('object');
});
