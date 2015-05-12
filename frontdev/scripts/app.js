/**
 * Created by Mi on 5/11/2015.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123450009',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456999',
        salary: 4500
    },
    {firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];

function showList() {
    var myTable = '<table class = "table" border ="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th>' +
        '<th>View</th> <th>Delete</th></tr>';
    for (i in employeesList) {
        myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>'
        + employeesList[i].lastName + '</td><td>' + employeesList[i].phone + '</td><td>'
        + employeesList[i].salary +'</td>' +
         '<td><button onclick="viewCurrentEmp(' + i + ')">View</button></td>' +
         '<td><button onclick="deleteCurrentEmp(' + i + ')"> Delete </button></td></tr>';
    }
    myTable += '<tr><td>' + getFrequentName() + '</td><td>' + getUniqueNames() +'</td><td>' +
        + getFrequentDigits() +'</td><td>' + getAverageSalary()+ '</td></tr>'
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function(firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName,lastName,phone,salary));

/*    var e = new Employee();
    e.firstName = firstName;
    e.lastName = lastName;
    e.phone = phone;
    e.salary = salary;*/
/*    var emp = {firstName: firstName, lastName:lastName, phone: phone, salary:salary};
    employeesList.push(emp);*/

/*    var e = new Object();
    e.prototype = {};
    e.prototype.firstName = firstName;
    e.prototype.lastName = lastName;
    e.prototype.phone = phone;
    e.prototype.salary = salary;
    employeesList.push(e);*/
    showList();
}

function getSalary() {
    var sal = 0.0;
    for (e in employeesList) {
        sal += employeesList[i].salary;
    }

    var html = '<p>' + sal.toFixed(2) + '</p>';
    document.getElementById("listcontainer").innerHTML = html;
}

function deleteEmployee() {
    var e = employeesList.pop();
    var html = '<p> Deleted employee: ' + e.firstName +' ' + e.lastName + '</p>';
    document.getElementById("listcontainer").innerHTML = html;

}

function deleteCurrentEmp(i) {
    alert("Are you sure you want to delete " + employeesList[i].firstName + " " + employeesList[i].lastName + "?");
    employeesList.splice(i, 1);
    showList();
}

function viewCurrentEmp(i) {
    alert(employeesList[i].firstName + " " + employeesList[i].lastName);
}

function getFrequentName() {
    var map = new Object();
    map = { };
    for (i in employeesList) {
        if (map[employeesList[i].firstName] != undefined) {
            var val = map[employeesList[i].firstName];
            map[employeesList[i].firstName] =  val + 1;
        } else
            map[employeesList[i].firstName] = 1;
    }
    var max = 0;
    var the_entry;
    for (var entry in map) {
        if (map[entry] > max) {
            max = map[entry];
            the_entry = entry;
        }
}
    return the_entry;
}

function getUniqueNames() {
    var map = new Object();
    map = { };
    for (i in employeesList) {
        if (map[employeesList[i].firstName] != undefined) {
            var val = map[employeesList[i].firstName];
            map[employeesList[i].firstName] =  val + 1;
        } else
            map[employeesList[i].firstName] = 1;
    }
    var count = 0;
    for (var entry in map) {
        if (map[entry] == 1) {
            count++;
        }
    }
    return count;
}

function getFrequentDigits() {
    var arr = new Array();
    arr = { };
    for (i= 0 ; i < 10; i++)
        arr[i.toString()] = 0;

    for (i in employeesList) {
        var phoneNo = employeesList[i].phone;
        for (j in phoneNo)
            arr[j]++;
    }
    var aux = new Array();
    for (i in arr) {
        aux[i] = arr[i.toString()];
    }

    aux.sort();
    return aux.slice(0,5).toString();
}

function getAverageSalary() {
    var average = 0.0;
    for (i in employeesList)
        average += employeesList[i].salary;
    average = average / employeesList.length;
    return average.toFixed(2).toString();
}
