const Engineer = require("../lib/Engineer");

test("Github generator test", () => {
    const testGithub = "jyz022020";
    const employeeTest = new Engineer("Kaylee",518,"jyz022020@gmail.com", testGithub);
    expect(employeeTest.github).toBe(testGithub);
})

test("Github return test", () => {
    const testGithub = "jyz022020";
    const employeeTest = new Engineer("Kaylee",518,"jyz022020@gmail.com", testGithub);
    expect(employeeTest.getGithub()).toBe(testGithub);
})

test("Role Test.", () => {
    const role = "Engineer";
    const employeeTest = new Engineer("Kaylee",518,"jyz022020@gmail.com", "jyz022020");
    expect(employeeTest.getRole()).toBe(role);
})