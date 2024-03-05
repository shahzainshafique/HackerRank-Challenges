/**Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size . */
function staircase(n) {
    // Write your code here
let str = ``,
        i = 1;
    while (n > 0) {
        if(n !== 1) {
            str += `${' '.repeat(n - 1)}${'#'.repeat(i)}\n`
        } else {
            str += `${' '.repeat(n - 1)}${'#'.repeat(i)}`
        }
        n--
        i++
    }
    console.log(str)
}