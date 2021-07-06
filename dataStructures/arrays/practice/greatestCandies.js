var kidsWithCandies = function(candies, extraCandies) {
    //find the max
    let max = candies[0];
    let out = [];
    for(let i = 1; i < candies.length; i++) {
        if(candies[i] > max) {
            max = candies[i];
        }
    }
    
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= max) {
            
            out[i] = true;
        } else {
            out[i] = false;
        }
    }
  // console.log(out); 
   return out;
};

//let candies = [2,3,5,1,3];
//let extraCandies = 3

let candies = [4,2,1,1,2];
let extraCandies = 1;
console.log(kidsWithCandies(candies, extraCandies));
