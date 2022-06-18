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
    var html;
    for (let x in proc) {
        $('#mySearch').append(`<a href="#" class="project-box-wrapper result"> <div class="project-box box" style="background-color: #81cdff44;"> <div class="project-box-content-header name-container" style="padding: 25px;color: #fff"> <i class="fa-solid fa-user" style="padding-bottom: 10px; font-size: 45px;"></i> <p class="box-content-header" style="color: #fff">${proc[x].nameFirst} ${proc[x].nameLast}</p> </div> </div> </a>`);
    }
    document.getElementById("test").innerHTML = text;
}

proc[x]._id