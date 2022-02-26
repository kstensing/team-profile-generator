const Employee = require('../lib/Employee');

test("creates employee object", () => {
    const employee = new Employee('Arlo', "stensingk@gmail.com");
    

    expect(employee.name).toBe('Arlo');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("stensingk@gmail.com");
})