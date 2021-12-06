const Employee = require ('../lib/Employee'); 

//testing for new employee 
test ('create an employee', () => {
    const employee = new Employee( 'Greg House' , '2', 'house@test.com');

    expect (employee.name).toBe('Greg House');
    expect (employee.id).toBe('2');
    expect (employee.email).toBe('house@test.com');
}); 

//testing getting employee name 
test ('will get the emplyee name', () => { 
    const employee = new Employee( 'Robert Chase' , '3', 'chase@test.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Robert Chase'));
});

