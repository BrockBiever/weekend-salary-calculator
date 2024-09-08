let monthlyCost = 0;

function addEmployee(event) {
    event.preventDefault();
console.log("Function Started")
let firstName = document.getElementById('firstName').value
let lastName = document.getElementById('lastName').value
let id = document.getElementById('id').value
let title = document.getElementById('title').value 
let annualSalary = document.getElementById('annualSalary').value

let newRow= `
<tr>
<td>${firstName}</td>
<td>${lastName}</td>
<td>${id}</td>
<td>${title}</td>
<td>${annualSalary}</td>
<td> <button onclick= "deleteRow(event)" data-testid= "deleteButton" id= "deleteButton">Delete</button> </td>
</tr>
`

let table = document.getElementById("table")
table.innerHTML += newRow;

monthlyCost += annualSalary/12;
let footer = document.getElementById("monthlyCost")
footer.innerHTML = monthlyCost
console.log(monthlyCost)

if (monthlyCost > 20000) {
    console.log("Budget exceeded")
   let BudgetExceeded = document.getElementById("theFooter")
   BudgetExceeded.classList.add('over-budget')

}

firstName = document.getElementById('firstName').value =''
lastName = document.getElementById('lastName').value =''
id = document.getElementById('id').value =''
title = document.getElementById('title').value =''
annualSalary = document.getElementById('annualSalary').value =''

} ;

function deleteRow(event) {
   let rowToDelete = event.target.closest('tr');
    rowToDelete.remove();
} ;

