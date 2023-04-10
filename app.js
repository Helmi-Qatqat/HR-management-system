let calcSalary = function (level) {
  let min = 0;
  let max = 0;
  switch (level) {
    case "Senior":
      min = 1500;
      max = 2000;
      break;
    case "Mid-Senior":
      min = 1000;
      max = 1500;
      break;
    case "Junior":
      min = 500;
      max = 100;
      break;
  }
  let amount = Math.floor(Math.random() * (max - min) + min);
  let netSalary = amount - amount * 0.075;
  return netSalary;
};
let EmployeesArray = [];

function Employee(id, fullName, department, level, img, salary) {
  this["Employee ID"] = id;
  this["Full Name"] = fullName;
  this.Department = department;
  this.Level = level;
  this["Image URL"] = img;
  this.salary = calcSalary(this.Level);
  EmployeesArray.push(this);
  Renderer(this["Employee ID"], this["Full Name"], this.Department, this.Level);
}
//
let Renderer = function (id, fullName, department, level) {
  let myTable = document.querySelector("tbody");
  let myRow = document.createElement("tr");
  myTable.appendChild(myRow);
  for (let i of arguments) {
    let myCell = document.createElement("td");
    let myContent = document.createTextNode(i);
    myCell.appendChild(myContent);
    myRow.appendChild(myCell);
  }
  return myTable;
};
new Employee(1000, "Ghazi Samer", "Administration", "Senior");
new Employee(1001, "Lana Ali", "Finance", "Senior");
new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
new Employee(1004, "Omar Zaid", "Development", "Senior");
new Employee(1005, "Rana Saleh", "Development", "Junior");
new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

console.log(EmployeesArray);
