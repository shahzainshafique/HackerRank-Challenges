/**Given a sequence of  integers,  where each element is distinct and satisfies . For each  where , that is  increments from  to , find any integer  such that  and keep a history of the values of  in a return array. */
function permutationEquation(p) {
    // Write your code here
    let result = [];
    for (let x = 1; x <= p.length; x++) {
        console.log(p.indexOf(p.indexOf(x) + 1)+1)
        result.push(p.indexOf(p.indexOf(x) + 1)+1);
    }
    
    return result;

}