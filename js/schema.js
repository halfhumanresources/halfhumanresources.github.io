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
        $('#all-data').append(`
        <tr class="row">
            <th>${proc[x].nameFirst} ${proc[x].nameLast}</th>
            <th>${proc[x].age}</th>
            <th>${proc[x].gender}</th>
            <th>${proc[x].height}</th>
            <th>${proc[x].weight}</th>
            <th>${proc[x].bodytemp}</th>
            <th>${proc[x].pulserate}</th>
            <th>${proc[x].bloodpressure}</th>
            <th>${proc[x].respirationrate}</th>
            <th>${proc[x].avgWeeklyExercise}</th>
            <th>${proc[x].vacationBalance}</th>
            <th>${proc[x].avgWeeklyHours}</th>
        </tr>
    `);
    }
}
