const Manager = require("../lib/Manager");

test("Office number get test", () => {
    const testOfficeNumber = 1;
    const employeeTest = new Manager("Kaylee",518,"jyz022020@gmail.com", testOfficeNumber);
    expect(employeeTest.officeNumber).toBe(testOfficeNumber);
})

test("Office number return test", () => {
  const testOfficeNumber = 1;
  const employeeTest = new Manager ("Kaylee",518,"jyz022020@gmail.com", testOfficeNumber);
  expect(employeeTest.getOfficeNumber()).toBe(testOfficeNumber);
})

test("Role Test.", () => {
    const role = "Manager";
    const employeeTest = new Manager("Kaylee", 518,"jyz022020@gmail.com", 1);
    expect(employeeTest.getRole()).toBe(role);
})