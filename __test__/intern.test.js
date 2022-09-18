const Intern = require('../lib/intern');

test('setting school via the constructor argument', () => {
  const testValue = 'University of Minnesota';
  const employee = new Intern('Zac', 1, 'zac@fakemail.com', testValue);
  expect(employee.school).toBe(testValue);
});

test('getRole function', () => {
  const testValue = 'Intern';
  const employee = new Intern('Zac', 1, 'zac@fakemail.com', testValue);
  expect(employee.getRole()).toBe(testValue);
});

test('Get School', () => {
  const testValue = 'University of Minnesota';
  const employee = new Intern('Zac', 1, 'zac@fakemail.com', testValue);
  expect(employee.getSchool()).toBe(testValue);
});
