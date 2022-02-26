const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('arlo', 'stensingk@gmail.com');

    expect(manager.name).toBe('arlo');
    expect(manager.email).toBe('stensingk@gmail.com');
    expect(manager.id).toEqual(expect.any(Number));
})