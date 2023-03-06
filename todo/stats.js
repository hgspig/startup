let schooltaskscompleted = 3;
let schooltaskstotal = 7;
let worktaskscompleted = 7;
let worktaskstotal = 8;
let othertaskscompleted = 1;
let othertaskstotal = 9;

function percentageCompleteCalculator(taskscompleted, taskstotal) {
    let percentDone = taskscompleted / taskstotal * 100;
    return percentDone;
}
let schoolpercent = document.querySelector("#schoolpercent")
let schoolpercentvalue = Math.round(percentageCompleteCalculator(schooltaskscompleted,schooltaskstotal));
schoolpercent.innerHTML = schoolpercentvalue+"%";
const overallschoolperecent = document.querySelector("#schoolpercentagevalueHTML");
overallschoolperecent.style.width = schoolpercentvalue + "%";


let workpercent = document.querySelector("#workpercent")
let workpercentvalue = Math.round(percentageCompleteCalculator(worktaskscompleted,worktaskstotal));
workpercent.innerHTML = workpercentvalue+"%";
const overallworkperecent = document.querySelector("#workpercentagevalueHTML");
overallworkperecent.style.width = workpercentvalue + "%";


let otherpercent = document.querySelector("#otherpercent")
let otherpercentvalue = Math.round(percentageCompleteCalculator(othertaskscompleted,othertaskstotal));
otherpercent.innerHTML = otherpercentvalue+"%";
const overallotherperecent = document.querySelector("#otherpercentagevalueHTML");
overallotherperecent.style.width = otherpercentvalue + "%";


//what should the funcitons look like for the strings in HTML and such
//what should I do for the login page?
