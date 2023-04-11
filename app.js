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
      max = 1000;
      break;
  }
  let netSalary = Math.floor((Math.random() * (max - min) + min)*0.925);
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
}

let submitBtn = document.querySelector('[type="button"]');
submitBtn.addEventListener("click", function (event) {
  let myForm = event.target.parentElement;
  let id =
    EmployeesArray.length >= 1
      ? EmployeesArray[EmployeesArray.length - 1]["Employee ID"] + 1
      : 1000;
  let name = myForm.querySelector('[type="name"]').value;
  let department = myForm.querySelector('[name="department"]')
    .selectedOptions[0].innerHTML;
  let level =
    myForm.querySelector('[name="level"]').selectedOptions[0].innerHTML;
  let imgURL = document.querySelector("[type='text']").value;
  // Create Elements
  let myCard = document.createElement("div");
  myCard.style.cssText =
    "display: flex; flex-flow: column; padding: 15px; background-color: #fafafa; border-radius: 5px; width: 300px; align-items: center; gap: 20px;";
  let empImg = document.createElement("img");
  empImg.src = imgURL;
  empImg.style.cssText =
    "width: 200px; border-radius: 5px; border: 1px solid black";
  let empInfoContainer = document.createElement("div");
  let empInfo = `Name: ${name} - ID: ${id} Department: ${department} - Level: ${level} - Salary: ${calcSalary(
    level
  )}`;
  myCard.appendChild(empImg, empInfoContainer);
  empInfoContainer.textContent = empInfo;
  empInfoContainer.style.cssText = "color: black; text-align: center";
  myCard.appendChild(empInfoContainer);
  switch (department) {
    case "Administration":
      document.querySelector("section.administration .emp-container")
        .appendChild(myCard);
      break;
    case "Marketing":
      document.querySelector("section.marketing .emp-container").appendChild(myCard);
      break;
    case "Development":
      document.querySelector("section.development .emp-container")
        .appendChild(myCard);
      break;
    case "Finance":
      document.querySelector("section.finance .emp-container").appendChild(myCard);
      break;
  }
  new Employee(id, name, department, level, imgURL, calcSalary(level));
});
