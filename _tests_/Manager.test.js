const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('arlo', 'stensingk@gmail.com', 7, 8);

    expect(manager.name).toBe('arlo');
    expect(manager.email).toBe('stensingk@gmail.com');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('overrides the role to manager', () => {
    const manager = new Manager('Arlo', "stensingk@gmail.com");
    const spy = jest.spyOn(manager, "getRole").mockImplementation(() => 'Manager');

    expect(manager.getRole()).toBe("Manager");
    spy.mockRestore();
});