const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('arlo', 'stensingk@gmail.com', 7, 'githubAccount');

    expect(engineer.name).toBe('arlo');
    expect(engineer.email).toBe('stensingk@gmail.com');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.github).toEqual(expect.stringContaining(engineer.github.toString()));
});

test("get engineer's github", () => {
    const engineer = new Engineer('arlo', 'stensingk@gmail.com', 7, 'githubAccount');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('overrides the role to engineer', () => {
    const engineer = new Engineer('arlo', 'stensingk@gmail.com', 7, 'githubAccount');
    const spy = jest.spyOn(engineer, "getRole").mockImplementation(() => 'Engineer');

    expect(engineer.getRole()).toBe("Engineer");
    spy.mockRestore();
});