const Employee = require('../lib/Employee');

test("creates employee object", () => {
    const employee = new Employee('Arlo');

    expect(employee.name).toBe('Arlo');
    expect(employee.id).toEqual(expect.any(Number));
})