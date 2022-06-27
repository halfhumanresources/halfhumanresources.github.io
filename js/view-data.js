const endpoint = 'https://r0981ch5ff.execute-api.us-west-2.amazonaws.com/graphql/';
const token = 'WB5xj36cNgDcSoj7te8kyyTsBVh29Y3pmYnk2WkcSJF';
fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            query: `query listQuery {
                list_employeeItems {
                    _employeeItems {
                        _id
                        age
                        avgWeeklyExercise
                        avgWeeklyHours
                        bloodpressure
                        bodytemp
                        fullname
                        gender
                        height
                        pulserate
                        respirationrate
                        vacationBalance
                        weight } } }`,
            variables: {
                now: new Date().toISOString(),
            },
        }),
    })

.then((res) => res.json())
.then((result) => process(result.data));

function process(result) {
    data = JSON.stringify(result);
    myObj = JSON.parse(data);
    var proc = myObj.list_employeeItems._employeeItems;
    $("#loader-wrap").css("display", "none");
    $("#toggleIDText").css("display", "flex");
    for (let x in proc) {
        $('#empData').append(`
        <tr class="row">
            <th class="truncateme show">${proc[x]._id}</th>
            <th>${proc[x].fullname}</th>
            <th>${proc[x].age}</th>
            <th>${proc[x].gender}</th>
            <th>${proc[x].height}</th>
            <th>${proc[x].weight + ' lbs'}</th>
            <th>${proc[x].bodytemp + '°F'}</th>
            <th>${proc[x].pulserate + ' BPM'}</th>
            <th>${proc[x].bloodpressure}</th>
            <th>${proc[x].respirationrate}</th>
            <th>${proc[x].avgWeeklyExercise + ' hours'}</th>
            <th>${proc[x].vacationBalance + ' days'}</th>
            <th>${proc[x].avgWeeklyHours + ' hours'}</th>
        </tr>
    `);
    }
}
function removeButtonsCreate() {
    $(".create-delete-wrap").css("display", "none");
    $(".input-group-create").css("display", "flex");
    $(".input-group-1").css("display", "flex");
    $(".input-group-2").css("display", "flex");
    $(".submit-buttons-wrap-create").css("display", "flex");
}
function removeButtonsDelete() {
    $(".create-delete-wrap").css("display", "none");
    $(".input-group-delete").css("display", "flex");
    $(".submit-buttons-wrap-delete").css("display", "flex");
}
function showButtons() {
    $(".create-delete-wrap").css("display", "flex");
}
function cancelForm() {
    $(".create-delete-wrap").css("display", "flex");
    $("input").val('');
    $(".input-group-1").css("display", "none");
    $(".input-group-2").css("display", "none");
    $(".submit-buttons-wrap-create").css("display", "none");
    $(".submit-buttons-wrap-delete").css("display", "none");
    $(".input-group-delete").css("display", "none");
}
var fullname;
var age;
var gender;
var height;
var weight;
var bodytemp;
var pulse;
var bp;
var resp;
var exercise;
var vacation;
var hours;
function create_emp() {
    fullname = String(document.getElementById("empname").value);
    age = document.getElementById("empage").value;
    gender = String(document.getElementById("empgender").value);
    height = String(document.getElementById("empheight").value);
    weight = document.getElementById("empweight").value;
    bodytemp = document.getElementById("empbodytemp").value;
    pulse = document.getElementById("emppulse").value;
    bp = String(document.getElementById("empbp").value);
    resp = document.getElementById("empresp").value;
    exercise = document.getElementById("empexercise").value;
    vacation = document.getElementById("empvacation").value;
    hours = document.getElementById("emphours").value;
    $(".create-delete-wrap").css("display", "flex");
    $(".submit-buttons-wrap-create").css("display", "none");
    $(".input-group-1").css("display", "none");
    $(".input-group-2").css("display", "none");
    $(".create-alert").css("display", "flex");
    $(".delete-alert").css("display", "none");
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            query: `
            mutation myMutation {
                add_employee_async(
                    input: {
                        age: ${age},
                        avgWeeklyExercise: ${exercise},
                        avgWeeklyHours: ${hours},
                        bloodpressure: "${bp}",
                        bodytemp: ${bodytemp},
                        fullname: "${fullname}",
                        gender: "${gender}",
                        height: "${height}",
                        pulserate: ${pulse},
                        respirationrate: ${resp},
                        vacationBalance: ${vacation},
                        weight: ${weight}
                    }
                )
                {
                    error
                }
            }
            `
        })
    })
    $("input").val('');
}

var emp_id;
function delete_emp() {
    emp_id = String(document.getElementById("empid-delete").value);
    $(".delete-alert").css("display", "flex");
    $(".input-group-delete").css("display", "none");
    $(".create-delete-wrap").css("display", "flex");
    $(".create-alert").css("display", "none");
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            query: `
            mutation myOtherMutation {
                remove_employee_async(id: "${emp_id}")
                {
                    error
                }
            }
            `
        })
    })
    $("input").val('');
}
function toggleShow() {
    document.getElementById("idheader").classList.toggle("show");
    var text = document.getElementById("toggleIDText");
    if (text.innerHTML == '<i class="fa fa-eye"></i>Show Employee ID Numbers') {
        text.innerHTML = '<i class="fa fa-eye-slash"></i>Hide Employee ID Numbers';
    } else if (text.innerHTML == '<i class="fa fa-eye-slash"></i>Hide Employee ID Numbers') {
        text.innerHTML = '<i class="fa fa-eye"></i>Show Employee ID Numbers';
    }
    var all = document.getElementsByClassName("truncateme");
    for (var i = 0; i < all.length; i++) {
        all[i].classList.toggle("show");
    }

}
// "Network error when fetching resource: DELETE ALL FORM TAGS IN HTML, WILL FIX THE ISSUE"