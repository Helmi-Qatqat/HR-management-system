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

let Renderer = function (id, fullName, department, level, imgURL) {
  //Element Create
  let myContainer = document.querySelector(`.${department.toLowerCase()} .emp-container`)
  let empCard = document.createElement('div')
  let empImg  = document.createElement('img')
  let empParagraph = document.createElement('p')
  let textInfo = `<p>ID: ${id}</p><p>Name: ${fullName}</p><p>Department: ${department}</p><p>Level: ${level}</p><p>Salary: ${calcSalary(level)} $</p>`
  //Element appending
  myContainer.appendChild(empCard);
  empCard.appendChild(empImg);
  if(imgURL === undefined) {
    empImg.src = `./assets/${fullName.split(" ")[0]}.jpg`
  } else {
    empImg.src = imgURL
  }
  empCard.appendChild(empParagraph);
  empParagraph.innerHTML = textInfo
  //Element Styling
  empCard.style.cssText =
    "display: flex; flex-flow: column; padding: 15px; background-color: #fafafa; border-radius: 5px; width: 300px; align-items: center; gap: 10px; border: 5px solid rgb(5, 120, 155)";
  empImg.style.cssText =
    "width: 200px; border-radius: 5px";
  
}

function Employee(id, fullName, department, level, img, salary) {
  this["Employee ID"] = id;
  this["Full Name"] = fullName;
  this.Department = department;
  this.Level = level;
  this["Image URL"] = img;
  this.salary = calcSalary(this.Level);
  EmployeesArray.push(this);
  Renderer(this["Employee ID"], this["Full Name"], this.Department, this.Level, this["Image URL"]);
}

new Employee(1000, "Ghazi Samer", "Administration", "Senior");
new Employee(1001, "Lana Ali", "Finance", "Senior");
new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
new Employee(1004, "Omar Zaid", "Development", "Senior");
new Employee(1005, "Rana Saleh", "Development", "Junior");
new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");



let submitBtn = document.querySelector('[type="button"]');
submitBtn.addEventListener("click", function (event) {
  //Element Values Selection
  let myForm = event.target.parentElement;
  let id = EmployeesArray[EmployeesArray.length - 1]["Employee ID"] + 1;
  let name = myForm.querySelector('[type="name"]').value;
  let department = myForm.querySelector('[name="department"]').selectedOptions[0].innerHTML;
  let level = myForm.querySelector('[name="level"]').selectedOptions[0].innerHTML;
  let imgURL = document.querySelector("[type='text']").value;
  console.log(imgURL)
  //Element Create
  new Employee(id, name, department, level, imgURL, calcSalary(level));
});

