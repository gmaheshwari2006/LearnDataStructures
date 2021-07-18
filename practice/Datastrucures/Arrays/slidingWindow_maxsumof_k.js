// Javascript code for
// O(n) solution for finding
// maximum sum of a subarray
// of size k
function maxSumofK(arr, k) {
let max = 0;
let sum = 0;
for(let n = 0; n <  k ; n++) {
    sum +=  arr[n];       
}
console.log(sum)
//iterate the array once and increment the left and right edge values and restrict the iteration using left edge such that subarray window should not less than k
/*for(let i = 0, j = k -1 ; i < arr.length - (k -1); i++ && j++) {    
  
    //find the sum of subarray
    for(let n = i; n <  i + k ; n++) {
        sum +=  arr[n];       
    }
   
    //compare if sum is more than max, if yes then replace max with new sum value
       if(sum > max) {
           max = sum;
       } 
    }
*/
    for(let i = k; i < arr.length; i++) {    
  
        sum += arr[i] - arr[i-k];
        //compare if sum is more than max, if yes then replace max with new sum value
           if(sum > max) {
               max = sum;
           } 
        }
    return max;
}

let arr = [1, 4, 2, 20, 2, 3, 1, 0, 20 ];
console.log(maxSumofK(arr, 4))
//output 28