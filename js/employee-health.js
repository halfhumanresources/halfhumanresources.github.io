const endpoint = 'https://r0981ch5ff.execute-api.us-west-2.amazonaws.com/graphql/'
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
var averagePulseAll = 0;
const arr = [];
function main(param) {
    data = JSON.stringify(param);
    myObj = JSON.parse(data);

    var allData = myObj.list_employeeItems._employeeItems;

    document.getElementById("loader").style.display = "none";

    // START AVERAGE EMPLOYEE HEALTH BY GENDER
    var maleAveragePulse=0, femaleAveragePulse=0, nbAveragePulse=0, transAveragePulse=0;
    var malePulseSum=0, femalePulseSum=0, nbPulseSum=0, transPulseSum=0;
    var maleCount =0, femaleCount=0, nbCount=0, transCount=0;
    for (let y in allData) {
        if (allData[y].gender == "M") {
            maleCount++;
            malePulseSum += allData[y].pulserate;
        }
        if (allData[y].gender == "F") {
            femaleCount++;
            femalePulseSum += allData[y].pulserate;
        }
        if (allData[y].gender == "T") {
            transCount++;
            transPulseSum += allData[y].pulserate;
        }
        if (allData[y].gender == "N") {
            nbCount++;
            nbPulseSum += allData[y].pulserate;
        }
    }
    console.log(maleCount + " Male Employees found.");
    console.log(femaleCount + " Female Employees found.");
    console.log(nbCount + " Non-Binary Employees found.");
    console.log(transCount + " Transgender Employees found.");

    maleAveragePulse = malePulseSum/maleCount;
    femaleAveragePulse = femalePulseSum/femaleCount;
    nbAveragePulse = nbPulseSum/nbCount;
    transAveragePulse = transPulseSum/transCount;

    console.log(maleAveragePulse);
    console.log(femaleAveragePulse);
    console.log(nbAveragePulse);
    console.log(transAveragePulse);

    parseddata = allData;
    averagePulseAll = Math.round(avgAll(parseddata));
    arr[0] = maleAveragePulse;
    arr[1] = femaleAveragePulse;
    arr[2] = nbAveragePulse;
    arr[3] = transAveragePulse;
    arr[4] = averagePulseAll;

    // END EMPLOYEE HEALTH BY GENDER

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
            label: 'Transgender',
            data: [arr[3]],
            backgroundColor: 'rgba(235, 224, 255, 0.13)',
            borderColor: '#a678ff',
            borderWidth: 2
        }, {
            label: 'All Employees',
            data: [arr[4]],
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