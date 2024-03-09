/**There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. */
function sockMerchant(n, ar) {
    // Write your code here
let totalPairs = 0;
    let counts = {}
    ar.forEach(function(i){counts[i] = (counts[i] || 0) + 1;});
    for (const [key, value] of Object.entries(counts)) {
        totalPairs += Math.floor(value/2);
    }
    return totalPairs;
}