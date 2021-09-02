window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector("#name");
    const nameError = document.querySelector(".name-error");
    name.addEventListener("input", function() {
        if (name.value.length == 0) {
            nameError.textContent = "";
            return;
        }
        try {
            let employeePayrollData = new EmployeePayrollData();
            employeePayrollData.name = name.value;;
            textError.textContent = "";
        } catch (error) {
            textError.textContent = error;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value
    });
});
/*UC3*/
const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    } catch (error) {
        return;
    }
}

//Uc4
function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList!=undefined)
        employeePayrollList.push(employeePayrollData);
    else {
        employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());    
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}
//
const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById("#name");
    } catch (error) {
        setTextValue('.text-error', error);
        throw error;
    }
    employeePayrollData.profilePic = getSelectedValues("[name = profile]").pop();
    employeePayrollData.gender = getSelectedValues("[name = gender]").pop();
    employeePayrollData.department = getSelectedValues("[name = department]");
    employeePayrollData.salary = getInputValueById("#salary");
    employeePayrollData.notes = getInputValueById("#notes");
    let date = getInputValueById('#day')+" "+ getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (property) => {
    let allItems = document.querySelectorAll(property);
    let selectedItems = [];
    allItems.forEach(item => {
        if (item.checked)
            selectedItems.push(item.value);
    });
    return selectedItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

// Reset Form
const resetForm = () => {
    setValue("#name", "");
    setValue("#salary","");
    setTextValue(".salary-output", getInputValueById("#salary"));
    setValue("#notes","");
    setValue("#day","1");
    setValue("#month","Auguest");
    setValue("#year","2020");
    unsetSelectedValues("[name = profile]");
    unsetSelectedValues("[name = gender]");
    unsetSelectedValues("[name = department]");
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

const setTextValue = (id,value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id,value) => {
    const element = document.querySelector(id);
    element.value = value;
}