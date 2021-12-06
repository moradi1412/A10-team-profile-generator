const Manager = require('../lib/Manager.js');

//testing for a new manager 
test('creates a new manager', () => {
    const manager = new Manager('Lisa Cuddy', '1', 'Cuddy@test.com', '5656');
    
    expect(manager.name).toBe('Lisa Cuddy');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('Cuddy@test.com');
    expect(manager.officeNumber).toBe('5656');
});

//testing for employee's role 
test("will gets employee's role", () => {
    const manager = new Manager('Lisa Cuddy', '1', 'Cuddy@test.com', '5656');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});