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

    // START AVERAGE EMPLOYEE HEALTH BY GENDER
    var maleCount =0, femaleCount=0, nbCount=0, transCount=0;
    var employeeCount=0;

    var maleAverageWork=0, femaleAverageWork=0, nbAverageWork=0, transAverageWork=0;
    var maleWorkSum=0, femaleWorkSum=0, nbWorkSum=0, transWorkSum=0;

    var maleAverageExercise=0, femaleAverageExercise=0, nbAverageExercise=0, transAverageExercise=0;
    var maleExerciseSum=0, femaleExerciseSum=0, nbExerciseSum=0, transExerciseSum=0;

    var maleAverageVacation=0, femaleAverageVacation=0, nbAverageVacation=0, transAverageVacation=0;
    var maleVacationSum=0, femaleVacationSum=0, nbVacationSum=0, transVacationSum=0;

    var allAverageWork=0, allAverageExercise=0, allAverageVacation=0;
    var allWorkSum=0, allExerciseSum=0, allVacationSum=0;

    for (let y in allData) {
        allWorkSum += allData[y].avgWeeklyHours;
        allExerciseSum += allData[y].avgWeeklyExercise;
        allVacationSum += allData[y].vacationBalance;
        employeeCount++;
        if (allData[y].gender == "M") {
            maleCount++;
            maleWorkSum += allData[y].avgWeeklyHours;
            maleExerciseSum += allData[y].avgWeeklyExercise;
            maleVacationSum += allData[y].vacationBalance;
        }
        if (allData[y].gender == "F") {
            femaleCount++;
            femaleWorkSum += allData[y].avgWeeklyHours;
            femaleExerciseSum += allData[y].avgWeeklyExercise;
            femaleVacationSum += allData[y].vacationBalance;
        }
        if (allData[y].gender == "N") {
            nbCount++;
            nbWorkSum += allData[y].avgWeeklyHours;
            nbExerciseSum += allData[y].avgWeeklyExercise;
            nbVacationSum += allData[y].vacationBalance;
        }
        if (allData[y].gender == "T") {
            transCount++;
            transWorkSum += allData[y].avgWeeklyHours;
            transExerciseSum += allData[y].avgWeeklyExercise;
            transVacationSum += allData[y].vacationBalance;
        }
    }
    console.log(maleCount + " Male Employees found.");
    console.log(femaleCount + " Female Employees found.");
    console.log(nbCount + " Non-Binary Employees found.");
    console.log(transCount + " Transgender Employees found.");

    allAverageWork = allWorkSum/employeeCount;
    allAverageExercise = allExerciseSum/employeeCount;
    allAverageVacation = allVacationSum/employeeCount;

    maleAverageWork = maleWorkSum/maleCount;
    femaleAverageWork = femaleWorkSum/femaleCount;
    nbAverageWork = nbWorkSum/nbCount;
    transAverageWork = transWorkSum/transCount;

    maleAverageExercise = maleExerciseSum/maleCount;
    femaleAverageExercise = femaleExerciseSum/femaleCount;
    nbAverageExercise = nbExerciseSum/nbCount;
    transAverageExercise = transExerciseSum/transCount;

    maleAverageVacation = maleVacationSum/maleCount;
    femaleAverageVacation = femaleVacationSum/femaleCount;
    nbAverageVacation = nbVacationSum/nbCount;
    transAverageVacation = transVacationSum/transCount;

    // if *radio button* .checked then set array values to respective averages
    /*var WorkRadioBtn = document.getElementById("option-1");
    var exerciseRadioBtn = document.getElementById("option-2");
    var respRadioBtn = document.getElementById("option-4");

    var chartTitle = document.getElementById("eh-table-title");
    */
    var workArr = [];
    var exerciseArr = [];
    var vacationArr = []

    workArr[0] = maleAverageWork;
    workArr[1] = femaleAverageWork;
    workArr[2] = nbAverageWork;
    workArr[3] = transAverageWork;
    workArr[4] = allAverageWork;

    exerciseArr[0] = maleAverageExercise;
    exerciseArr[1] = femaleAverageExercise;
    exerciseArr[2] = nbAverageExercise;
    exerciseArr[3] = transAverageExercise;
    exerciseArr[4] = allAverageExercise;

    vacationArr[0] = maleAverageVacation;
    vacationArr[1] = femaleAverageVacation;
    vacationArr[2] = nbAverageVacation;
    vacationArr[3] = transAverageVacation;
    vacationArr[4] = allAverageVacation;


    const ctx = document.getElementById('average-employee-data').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Weekly Hours Worked", "Accrued Vacation Time (Days)"],
        datasets: [{
            label: 'Male',
            data: [workArr[0], vacationArr[0]],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            borderRadius: 4
        }, {
            label: 'Female',
            data: [workArr[1], vacationArr[1]],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgb(255, 159, 64)',
            borderWidth: 2,
            borderRadius: 4
        }, {
            label: 'Non-Binary',
            data: [workArr[2], vacationArr[2]],
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderColor: 'rgb(255, 205, 86)',
            borderWidth: 2,
            borderRadius: 4
        }, {
            label: 'Transgender',
            data: [workArr[3], vacationArr[3]],
            backgroundColor: 'rgba(54, 163, 235, 0.2)',
            borderColor: '#36a2eb',
            borderWidth: 2,
            borderRadius: 4
        }, {
            label: 'All Employees',
            data: [workArr[4], vacationArr[4]],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 2,
            borderRadius: 4
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








