let RenderFunc = function() {
  let data = JSON.parse(localStorage.getItem('EmployeesData'))
  //Number of Emp in each department
  let adminArr = [0,0]
  let markArr = [0,0]
  let devArr = [0,0]
  let finArr = [0,0]
  data.forEach(e => {
    switch (e.Department) {
      case 'Administration':
        adminArr[0]++;
        adminArr[1] += e.salary
        break;
      case 'Marketing':
        markArr[0]++;
        markArr[1] += e.salary
        break;
      case 'Development':
        devArr[0]++;
        devArr[1] += e.salary
        break;
      case 'Finance':
        finArr[0]++;
        finArr[1] += e.salary
        break;
    }
  });
  // Average Cal
  adminArr[2] = adminArr[1]/adminArr[0]
  markArr[2] = markArr[1]/markArr[0]
  devArr[2] = devArr[1]/devArr[0]
  finArr[2] = finArr[1]/finArr[0]
  let valuesArr = [adminArr,markArr,devArr,finArr]
  let sumNum = adminArr[0] + markArr[0] + devArr[0] + finArr[0]
  let sumSal = adminArr[1] + markArr[1] + devArr[1] + finArr[1]
  let sumAvg = adminArr[2] + markArr[2] + devArr[2] + finArr[2]
  //Creating Cells
  let myAdmin = document.querySelector('.Administration')
  let myMark = document.querySelector('.Marketing')
  let myDev = document.querySelector('.Development')
  let myFin = document.querySelector('.Finance')
  let depArr = [myAdmin, myMark, myDev, myFin]
  for(let i = 0; i < depArr.length; i++) {
    for(let j = 0; j < valuesArr[i].length; j++) {
      let myCell = document.createElement('td')
      myCell.textContent = valuesArr[i][j]
      depArr[i].append(myCell)
    }
  }
  let totalNum = document.querySelector('.total-number')
  let totalSal = document.querySelector('.total-salary')
  let totalAvg = document.querySelector('.total-average')
  totalNum.textContent += ` = ${sumNum}`
  totalSal.textContent += ` = ${sumSal} $`
  totalAvg.textContent += ` = ${sumAvg} $`
}
window.onload = RenderFunc()