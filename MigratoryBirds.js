/**Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

 */
function migratoryBirds(arr) {
  // Write your code here
  arr = arr.sort((a, b) => a - b);
  const n = arr.length;
  let result = [0, 0];
  for (let i = 0; i < n; i++) {
    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }
    if (count > result[1]) {
      result[1] = count;
      result[0] = arr[i];
    }
  }
  return result[0];
}
