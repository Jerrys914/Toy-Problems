/*
A teacher needs your help grading her class of students.
Given a report of all student grades, return both the class average and 
the average of each student.
NOTE: Round any calculations to the nearest 2 decimal places.
 */

function autograde (report) {
  let reports = report.split('\n');
  let result = {'all': 0};
  for(let i = 0; i < reports.length; i++) {
    let grades = reports[i].split(' ');
    let person = grades.splice(0,1);
    let grade = 0;
    for(let j = 0; j < grades.length; j++) {
      grade += Number(grades[j]);
    }
    let avg = grade/grades.length.toFixed(2)
    result[person] = avg;
  }
  let allAvg = 0;
  for(let prop in result) {
    allAvg += result[prop];
  }
  let finalAvg = (allAvg/(Object.keys(result).length -1));
  result['all'] = Number(finalAvg.toFixed(2));
  return result;
}