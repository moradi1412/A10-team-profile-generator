const Engineer = require('../lib/Engineer.js')

//testing for a new engineer 
test('creates a new engineer', () => {
    const engineer = new Engineer ('Eric Foreman', '6', 'foreman@test.com', 'foremangithub')
    
    expect(engineer.name).toBe('Eric Foreman');
    expect(engineer.id).toBe('6');
    expect(engineer.email).toBe('foreman@test.com');
    expect(engineer.github).toBe('foremangithub');
});

test ("will get engineer github", () => {
    const engineer = new Engineer ('Eric Foreman', '6', 'foreman@test.com', 'foremangithub')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('foremangithub'));
});

test("will get engineer's role", () => {
    const engineer = new Engineer ('Eric Foreman', '6', 'foreman@test.com', 'foremangithub')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});