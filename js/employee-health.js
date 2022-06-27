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
}).then((res) => res.json()).then((result) => main(result.data));


function main(param) {
    var data = JSON.stringify(param);
    var myObj = JSON.parse(data);

    var allData = myObj.list_employeeItems._employeeItems;

    document.getElementById("loader-wrap").style.display = "none";

    var arr = [];
    // START AVERAGE EMPLOYEE HEALTH BY GENDER
    var maleCount =0, femaleCount=0, nbCount=0, transCount=0;
    var employeeCount=0;

    var maleAveragePulse=0, femaleAveragePulse=0, nbAveragePulse=0, transAveragePulse=0;
    var malePulseSum=0, femalePulseSum=0, nbPulseSum=0, transPulseSum=0;

    var maleAverageExercise=0, femaleAverageExercise=0, nbAverageExercise=0, transAverageExercise=0;
    var maleExerciseSum=0, femaleExerciseSum=0, nbExerciseSum=0, transExerciseSum=0;

    var maleAverageResp=0, femaleAverageResp=0, nbAverageResp=0, transAverageResp=0;
    var maleRespSum=0, femaleRespSum=0, nbRespSum=0, transRespSum=0;

    var allAveragePulse=0, allAverageExercise=0, allAverageResp=0;
    var allPulseSum=0, allExerciseSum=0, allRespSum=0;

    for (let y in allData) {
        allPulseSum += allData[y].pulserate;
        allExerciseSum += allData[y].avgWeeklyExercise;
        allRespSum += allData[y].respirationrate;
        employeeCount++;
        if (allData[y].gender == "M") {
            maleCount++;
            malePulseSum += allData[y].pulserate;
            maleExerciseSum += allData[y].avgWeeklyExercise;
            maleRespSum += allData[y].respirationrate;
        }
        if (allData[y].gender == "F") {
            femaleCount++;
            femalePulseSum += allData[y].pulserate;
            femaleExerciseSum += allData[y].avgWeeklyExercise;
            femaleRespSum += allData[y].respirationrate;
        }
        if (allData[y].gender == "N") {
            nbCount++;
            nbPulseSum += allData[y].pulserate;
            nbExerciseSum += allData[y].avgWeeklyExercise;
            nbRespSum += allData[y].respirationrate;
        }
        if (allData[y].gender == "T") {
            transCount++;
            transPulseSum += allData[y].pulserate;
            transExerciseSum += allData[y].avgWeeklyExercise;
            transRespSum += allData[y].respirationrate;
        }
    }
    console.log(maleCount + " Male Employees found.");
    console.log(femaleCount + " Female Employees found.");
    console.log(nbCount + " Non-Binary Employees found.");
    console.log(transCount + " Transgender Employees found.");

    allAveragePulse = allPulseSum/employeeCount;
    allAverageExercise = allExerciseSum/employeeCount;
    allAverageResp = allRespSum/employeeCount;

    maleAveragePulse = malePulseSum/maleCount;
    femaleAveragePulse = femalePulseSum/femaleCount;
    nbAveragePulse = nbPulseSum/nbCount;
    transAveragePulse = transPulseSum/transCount;

    maleAverageExercise = maleExerciseSum/maleCount;
    femaleAverageExercise = femaleExerciseSum/femaleCount;
    nbAverageExercise = nbExerciseSum/nbCount;
    transAverageExercise = transExerciseSum/transCount;

    maleAverageResp = maleRespSum/maleCount;
    femaleAverageResp = femaleRespSum/femaleCount;
    nbAverageResp = nbRespSum/nbCount;
    transAverageResp = transRespSum/transCount;

    // if *radio button* .checked then set array values to respective averages
    var pulseRadioBtn = document.getElementById("option-1");
    var exerciseRadioBtn = document.getElementById("option-2");
    var respRadioBtn = document.getElementById("option-4");

    var chartTitle = document.getElementById("eh-table-title");

    if (pulseRadioBtn.checked) {
        arr[0] = maleAveragePulse;
        arr[1] = femaleAveragePulse;
        arr[2] = nbAveragePulse;
        arr[3] = transAveragePulse;
        arr[4] = allAveragePulse;
        chartTitle.innerHTML = "Average Employee Pulse Rate (BPM)";
    }
    if (exerciseRadioBtn.checked) {
        arr[0] = maleAverageExercise;
        arr[1] = femaleAverageExercise;
        arr[2] = nbAverageExercise;
        arr[3] = transAverageExercise;
        arr[4] = allAverageExercise;
        chartTitle.innerHTML = "Average Weekly Employee Exercise (Hours)";
    }
    if (respRadioBtn.checked) {
        arr[0] = maleAverageResp;
        arr[1] = femaleAverageResp;
        arr[2] = nbAverageResp;
        arr[3] = transAverageResp;
        arr[4] = allAverageResp;
        chartTitle.innerHTML = "Average Employee Respiration Rate (Breaths/Minute)";
    }

    // END EMPLOYEE HEALTH BY GENDER

    const ctx = document.getElementById('average-employee-health').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: " ",
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