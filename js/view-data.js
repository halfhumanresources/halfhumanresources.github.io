const endpoint = 'https://zqizr027ij.execute-api.us-west-1.amazonaws.com/graphql/';
const token = 'H5Y1wL6ifQ2YLC1RDZ4GrB8P2taSXhCG6rg161Lr4hFg';
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
    document.getElementById("loader").style.display = "none";
    for (let x in proc) {
        $('#empData').append(`
        <tr class="row">
            <th>${proc[x]._id}</th>
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

function delete_emp() {
    $(".input-group-delete").css("display", "none");
    $(".create-delete-wrap").css("display", "flex");
}

// "Network error when fetching resource: DELETE ALL FORM TAGS IN HTML, WILL FIX THE ISSUE"