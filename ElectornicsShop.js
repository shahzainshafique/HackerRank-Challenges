/**A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return . */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    var price=-1;
    for(let i = 0; i<keyboards.length;i++){
        for(let j=0;j<drives.length;j++){
            if(keyboards[i]+drives[j]<=b&&keyboards[i]+drives[j]>price){
                price=keyboards[i]+drives[j];
            }
        }
    }
    return price;

}