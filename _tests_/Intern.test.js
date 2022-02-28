const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('arlo', 'stensingk@gmail.com', 7, 'bestSchool');

    expect(intern.name).toBe('arlo');
    expect(intern.email).toBe('stensingk@gmail.com');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.school).toEqual(expect.stringContaining(intern.school.toString()));
});

test("get intern's school", () => {
    const intern = new Intern('arlo', 'stensingk@gmail.com', 7, 'bestSchool');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('overrides the role to intern', () => {
    const intern = new Intern('arlo', 'stensingk@gmail.com', 7, 'bestSchool');
    const spy = jest.spyOn(intern, "getRole").mockImplementation(() => 'Intern');

    expect(intern.getRole()).toBe("Intern");
    spy.mockRestore();
});