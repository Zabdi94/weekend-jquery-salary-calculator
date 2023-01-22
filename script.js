$(document).ready(onReady);



function onReady() {
    console.log ('ready to start'); }

            $(document).on('click', '#submitButton', addEmployee);
            $(document).on('click', '.deleteButton', onDelete);
    


    let employees = [];

function addEmployee() {

let firstNameInputs = $('#firstNameInputs').val();
let lastNameInputs = $('#lastNameInputs').val();
let employeeIDNumberInputs = $('#idNumberInputs').val();
let jobTitleInputs = $('#jobTitleInputs').val();
let annualSalaryInputs = $('#annualSalaryInputs').val();


let newEmployees = {
    firstName: firstNameInputs,
    lastName: lastNameInputs,
    employeeID: employeeIDNumberInputs,
    employeeTitle: jobTitleInputs,
    annualSalary: annualSalaryInputs
    
  }
//pushing the employees inside the array
employees.push(newEmployees);



 //Seeing if i need a function before the append
 $('#employeeList').append(`
 <tr>
    <td>${firstNameInputs}</td>
    <td>${lastNameInputs}</td>
    <td>${employeeIDNumberInputs}</td>
    <td>${jobTitleInputs}</td>
    <td>${annualSalaryInputs}</td>
    <td>
    <button class="deleteButton">Delete</button>
    </td>
 </tr>`);


 //emptying the array
 $("#firstNameInputs").val('');
 $("#lastNameInputs").val('');
 $("#idNumberInputs").val('');
 $("#jobTitleInputs").val('');
 $("#annualSalaryInputs").val('');


monthlyTotal();


}
function onDelete() {
    let tr = $(this).parents('tr');
    tr.remove();
    alert('Employee deleted',employees);

  }

  function monthlyTotal() {
    let total = 0;
    $('.totalMonthlyCost').empty();
    for (let salary of employees){
        total += Number(salary.annualSalary);
    }
    $('.totalMonthlyCost').append(`Total Monthly Cost: ${total / 12}`);

    if((total/12) >= 20000){
        $('.totalMonthlyCost').css('background-color', 'red');
    }
  }