
/**write a for loop that loops through 1 to 20
 * if the number is divis by 3, print "frontend "
 * if the number is divis by 5, print "simplified "
 * if the number is divis by 3 and 5 , print "frontend simplified "
 *if the number is not divis by either 3 or 5, print the number  
 */

for (let i = 1; i <= 20; i++){
       if (i % 5 === 0 && i % 3 === 0){
        console.log(i +" Frontend  Simplified")
    }
     else if (i % 3 === 0){
    console.log(i+ " Frontend")
    }
   else if (i % 5 === 0 ){
    console.log(i +" Simplified")
    }
    else {
        console.log(i)
    }


}

