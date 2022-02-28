const Employee = require('../lib/Employee');

test("creates employee object", () => {
    const employee = new Employee('Arlo', "stensingk@gmail.com", 7);


    expect(employee.name).toBe('Arlo');
    expect(employee.id).toEqual(7);
    expect(employee.email).toBe("stensingk@gmail.com");
});

test("get's employee's name", () => {
    const employee = new Employee('Arlo', "stensingk@gmail.com", 7);

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("get employee's id", () => {
    const employee = new Employee('Arlo', "stensingk@gmail.com", 7);

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("get employee's email", () => {
    const employee = new Employee('Arlo', "stensingk@gmail.com", 7);

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("get employee's role", () => {
    const employee = new Employee('Arlo', "stensingk@gmail.com", 7);

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});