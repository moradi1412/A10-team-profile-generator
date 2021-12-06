const Intern = require('../lib/Intern.js');

test ('creates a new intern', () => {
    const intern = new Intern('Allison Cameron', '9', 'Cameron@test.com', 'Princeton');

    expect(intern.name).toBe('Allison Cameron');
    expect(intern.id).toBe('9');
    expect(intern.email).toBe('Cameron@test.com');
    expect(intern.school).toBe('Princeton');
});

//testing for getting the school name
test("will gets intern's school", () => {
    const intern = new Intern('Allison Cameron', '9', 'Cameron@test.com', 'Princeton');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining('Princeton'));
});

//testing for the role 
test("will gets intern's role", () => {
    const intern = new Intern('Allison Cameron', '9', 'Cameron@test.com', 'Princeton');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});