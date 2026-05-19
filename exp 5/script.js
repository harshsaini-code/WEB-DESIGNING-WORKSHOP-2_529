let employees = [];

function addEmp() {

    const name = document.getElementById("name").value.trim();
    const empid = document.getElementById("empid").value.trim();
    const salary = parseFloat(document.getElementById("salary").value);
    const dept = document.getElementById("dept").value.trim();

    if (!name || !empid || isNaN(salary) || !dept) {
        alert("Please fill all fields correctly!");
        return;
    }

    employees.push({ name, empid, salary, dept });

    document.getElementById("name").value = "";
    document.getElementById("empid").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";

    alert("Employee added successfully!");
}


function dis() {
    const result = document.getElementById("result");
    if (employees.length === 0) {
        result.innerHTML = "<p>No employees found.</p>";
        return;
    }

    let html = "<h3>All Employees:</h3><ul>";
    for (let i = 0; i < employees.length; i++) {
        const emp = employees[i];
        html += `<li>ID: ${emp.empid}, Name: ${emp.name}, Salary: ${emp.salary.toFixed(2)}, Dept: ${emp.dept}</li>`;
    }
    html += "</ul>";

    result.innerHTML = html;
}


function sal50k() {
    const result = document.getElementById("result");
    let html = "<h3>Employees with Salary > 30000:</h3><ul>";
    let found = false;

    for (let i = 0; i < employees.length; i++) {
        const emp = employees[i];
        if (emp.salary > 30000) {
            html += `<li>ID: ${emp.empid}, Name: ${emp.name}, Salary: ${emp.salary.toFixed(2)}, Dept: ${emp.dept}</li>`;
            found = true;
        }
    }

    html += "</ul>";

    if (!found) {
        result.innerHTML = "<p>No employees with salary greater than 30,000.</p>";
    } else {
        result.innerHTML = html;
    }
}

function totSal() {
    const result = document.getElementById("result");
    let total = 0;

    for (let i = 0; i < employees.length; i++) {
        total += employees[i].salary;
    }

    result.innerHTML = `<h3>Total Salary of All Employees: ${total.toFixed(2)}</h3>`;
}

function empCount() {
    const result = document.getElementById("result");
    if (employees.length === 0) {
        result.innerHTML = "<p>No employees found.</p>";
        return;
    }

    const deptCount = {};

    for (let i = 0; i < employees.length; i++) {
        const emp = employees[i];
        if (deptCount[emp.dept]) {
            deptCount[emp.dept]++;
        } else {
            deptCount[emp.dept] = 1;
        }
    }

    let html = "<h3>Employee Count by Department:</h3><ul>";
    for (let dept in deptCount) {
        html += `<li>${dept}: ${deptCount[dept]}</li>`;
    }
    html += "</ul>";

    result.innerHTML = html;
}