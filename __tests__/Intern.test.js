const Intern = require("../lib/Intern");

test("School get test", () => {
    const testSchool = "uc b extension";
    const employeeTest = new Intern("Kaylee",518,"jyz022020@gmail.com", testSchool);
    expect(employeeTest.school).toBe(testSchool);
})

test("School return test", () => {
    const testSchool = "uc b extension";
    const employeeTest = new Intern ("Kaylee",518,"jyz022020@gmail.com", testSchool);
    expect(employeeTest.getSchool()).toBe(testSchool);
})

test("Role Test.", () => {
    const role = "Intern";
    const employeeTest = new Intern("Kaylee", 518,"jyz022020@gmail.com", "uc b extension");
    expect(employeeTest.getRole()).toBe(role);
})