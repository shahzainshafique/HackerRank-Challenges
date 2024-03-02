/**HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade. */
function gradingStudents(grades) {
  // Write your code here
  const g = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      g.push(grades[i]);
    } else if (grades[i] >= 38 && (grades[i] + 2) % 5 === 0) {
      g.push(grades[i] + 2);
    } else if ((grades[i] + 1) % 5 === 0) {
      g.push(grades[i] + 1);
    } else g.push(grades[i]);
  }
  return g;
}
