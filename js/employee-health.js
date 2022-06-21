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
.then((result) => main(result.data));

var parseddata;
var averagepulserateAll = 0;
const arr = [];
function main(param) {
    data = JSON.stringify(param);
    myObj = JSON.parse(data);
    var allData = myObj.list_employeeItems._employeeItems;
    parseddata = allData;
    averagepulserateAll = Math.round(avgAll(parseddata));
    arr[3] = averagepulserateAll;


    const ctx = document.getElementById('average-employee-health').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Pulse Rate"],
        datasets: [{
            label: 'Male',
            data: [arr[0]],
            backgroundColor: '#36a3ebb3',
        }, {
            label: 'Female',
            data: [arr[1]],
            backgroundColor: 'rgba(255, 179, 194, 0.711)',
        }, {
            label: 'Non-Binary',
            data: [arr[2]],
            backgroundColor: 'lightgreen',
        }, {
            label: 'All Employees',
            data: [arr[3]],
            backgroundColor: 'orange',
        }]
    },
    options: {
        scales: {
            x: {
                ticks: {
                    color: '#999'
                }
            }
        }
    }
});
}

function avgAll(stuff) {
    let count = 0;
    let avg  = 0;
    let total = 0;
    for (let x in stuff) {
        total += stuff[x].pulserate;
        count++;
    }
    avg = total/count;
    return avg;
}


