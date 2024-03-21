/**A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. The character must jump from cloud to cloud until it reaches the start again.

There is an array of clouds,  and an energy level . The character starts from  and uses  unit of energy to make a jump of size  to cloud . If it lands on a thundercloud, , its energy () decreases by  additional units. The game ends when the character lands back on cloud .

Given the values of , , and the configuration of the clouds as an array , determine the final value of  after the game ends. */
// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    let e = 100; //energy
    let i=0;
    do{
        i = (i+k)%c.length;
        if (c[i]){
            e-=3;
        }
        else{
            e-=1
        }
    }while(i!==0)
    return e;

}