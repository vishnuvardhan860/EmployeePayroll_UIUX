//UC7 - Set Button Style

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.nodeValue;
salary.addEventListener('input',function(){
    output.textContent = salary.nodeValue
});