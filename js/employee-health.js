var data;
var url = 'https://zqizr027ij.execute-api.us-west-1.amazonaws.com/graphql/'
var token = 'H5Y1wL6ifQ2YLC1RDZ4GrB8P2taSXhCG6rg161Lr4hFg';
fetch(url, {
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
.then((result) => main(result.data));

var parseddata;
var averagepulserateAll = 0;
const arr = [];
function main(param) {
    data = JSON.stringify(param);
    myObj = JSON.parse(data);
    var allData = myObj.list_employeeItems._employeeItems;
    document.getElementById("loader").style.display = "none";
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
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2
        }, {
            label: 'Female',
            data: [arr[1]],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgb(255, 159, 64)',
            borderWidth: 2
        }, {
            label: 'Non-Binary',
            data: [arr[2]],
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderColor: 'rgb(255, 205, 86)',
            borderWidth: 2
        }, {
            label: 'All Employees',
            data: [arr[3]],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 2
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