var data;
var token = 'WB5xj36cNgDcSoj7te8kyyTsBVh29Y3pmYnk2WkcSJF';
fetch('https://r0981ch5ff.execute-api.us-west-2.amazonaws.com/graphql/', {
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
                        gender
                        height
                        nameFirst
                        nameLast
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
            <th>${proc[x].nameFirst} ${proc[x].nameLast}</th>
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

function removeButtons() {
    $(".create-delete-wrap").css("display", "none");
    $(".input-group").css("display", "flex");
}
function showButtons() {
    $(".create-delete-wrap").css("display", "flex");
}
function createEmployee() {
    $(".create-delete-wrap").css("display", "flex");
}
function cancelForm() {
    $(".create-delete-wrap").css("display", "flex");
}

// WORKING MUTATION QUERY TO CREATE AN EMPLOYEE !!!
/* 
mutation new_emp {
  add_employee_async(
    input: {age: 0, avgWeeklyExercise: 0, avgWeeklyHours: 0, bodytemp: 0, bloodpressure: "", gender: "", height: "", nameFirst: "", nameLast: "", pulserate: 0, respirationrate: 0, vacationBalance: 0, weight: 0}
  ) {
    error
  }
}
*/
