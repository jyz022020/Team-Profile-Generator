const Employee = require("../lib/Employee");

test("Add new employee.", () => {
    const employeeTest = new Employee();
    expect(typeof(employeeTest)).toBe("object");
})

test("Name Test", () => {
    const name = "Kaylee";
    const employeeTest = new Employee(name);
    expect(employeeTest.name).toBe(name);
})

test("ID Test.", () => {
    const id = 518;
    const employeeTest = new Employee("Kaylee", id);
    expect(employeeTest.id).toBe(id);
})

test("Email Test.", () => {
    const email = "jyz022020@gmail.com";
    const employeeTest = new Employee("Kaylee", 518, email);
    expect(employeeTest.email).toBe(email);
})



test("getName() method test", () => {
    const testName = "Kaylee";
    const employeeTest = new Employee(testName);
    expect(employeeTest.getName()).toBe(testName);
})

test("getID() method test", () => {
    const testID = 518;
    const employeeTest = new Employee("Kaylee", testID);
    expect(employeeTest.getId()).toBe(testID);
})

test("getEmail() method test", () => {
    const testEmail = "jyz022020@gmail.com";
    const employeeTest = new Employee("Kaylee", 518, testEmail);
    expect(employeeTest.getEmail()).toBe(testEmail);
})

test("getRole() method test", () => {
    const data= "Employee";
    const employeeTest = new Employee("Kaylee", 518, "jyz022020@gmail.com");
    expect(employeeTest.getRole()).toBe(data);
})


