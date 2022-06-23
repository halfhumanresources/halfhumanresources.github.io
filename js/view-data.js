var endpoint = 'https://zqizr027ij.execute-api.us-west-1.amazonaws.com/graphql/';
var token = 'H5Y1wL6ifQ2YLC1RDZ4GrB8P2taSXhCG6rg161Lr4hFg';
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
                        gender
                        height
                        fullname
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
function removeButtons() {
    $(".create-delete-wrap").css("display", "none");
    $(".input-group").css("display", "flex");
}
function showButtons() {
    $(".create-delete-wrap").css("display", "flex");
}
function cancelForm() {
    $(".create-delete-wrap").css("display", "flex");
}

function create_emp() {
    var fullname = document.getElementById("empname").value;
    var age = document.getElementById("empage").value;
    var gender = document.getElementById("empgender").value;
    var height = document.getElementById("empheight").value;
    var weight = document.getElementById("empweight").value;
    var bodytemp = document.getElementById("empbodytemp").value;
    var pulse = document.getElementById("emppulse").value;
    var bp = document.getElementById("empbp").value;
    var resp = document.getElementById("empresp").value;
    var exercise = document.getElementById("empexercise").value;
    var vacation = document.getElementById("empvacation").value;
    var hours = document.getElementById("emphours").value;
    $(".create-delete-wrap").css("display", "flex");
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            query: `
                mutation new_emp {
                    add_employee_async(
                        input: {
                            age: 0,
                            avgWeeklyExercise: 0,
                            avgWeeklyHours: 0,
                            bodytemp: 0,
                            bloodpressure: "",
                            gender: "f",
                            height: "",
                            nameFirst: "",
                            nameLast: "",
                            pulserate: 0,
                            respirationrate: 0,
                            vacationBalance: 0,
                            weight: 0
                        }
                    ) {
                        error
                    }
                }
            `,
        })
    });
}


/* POSSIBLE QUERY
        body: JSON.stringify({
            query: `
            mutation new_emp($age: Int, $exercise: Int, $hours: Int, $bodytemp: Int, $bp: String, $gender: String, $height: String, $nameFirst: String, $nameLast: String, $pulse: Int, $resp: Int, $vacation: Int, $weight: Int) {
                add_employee_async(age: $age, exercise: $exercise, hours: $hours, bodytemp: $bodytemp, bp: $bp, gender: $gender, height: $height, nameFirst: $nameFirst, nameLast: $nameLast, pulse: $pulse, resp: $resp, vacation: $vacation, weight: $weight)
                    age
                    exercise
                    hours
                    bodytemp
                    bp
                    gender
                    height
                    nameFirst
                    nameLast
                    pulse
                    resp
                    vacation
                    weight
            }`,
              variables: {
                "age": age,
                "exercise": exercise,
                "hours": hours,
                "bodytemp": bodytemp,
                "bp": bp,
                "gender": gender,
                "height": height,
                "nameFirst": fullname,
                "nameLast": fullname,
                "pulse": pulse,
                "resp": resp,
                "vacation": vacation,
                "weight": weight
              },
        })
*/

/* 
            mutation new_emp($age: Int, $exercise: Int, $hours: Int, $bodytemp: Int, $bp: String, $gender: String, $height: String, $nameFirst: String, $nameLast: String, $pulse: Int, $resp: Int, $vacation: Int, $weight: Int) {
                add_employee_async(
                    input: {
                        age: $age
                        avgWeeklyExercise: 0, 
                        avgWeeklyHours: 0, 
                        bodytemp: 0, 
                        bloodpressure: "",
                        gender: "", 
                        height: "", 
                        nameFirst: "", 
                        nameLast: "", 
                        pulserate: 0, 
                        respirationrate: 0, 
                        vacationBalance: 0, 
                        weight: 0
                    })
            }
*/