function findLongestSubStrWithKdistChars(str, k) {
    let arr = [];
    let maxi = 0, maxj = 0;
    let i = 0, j = 0;
    let ds = {};
    
    if(str.length <= k) {
        return str;
    }
    for(let x = 0; x < str.length; x++) {
        debugger
        j = x;        
        
        let index = arr.indexOf(str[x]);
        if(index < 0) {
            arr.push(str[x]);  
            ds[str[x]] = 1;          
        } else {
            ds[str[x]]++;
        }

        if(arr.length > k) {
            while(arr.length > k) {
                ds[str[i]]--;
                if(ds[str[i]] === 0) {
                    let index = arr.indexOf(str[i]);
                    arr.splice(index, 1);
                }
             i++;   
            }
        }

        if((j - i) > (maxj - maxi)) {
            maxj = j;
            maxi = i;
        }
    }
    console.log(ds);    
    return str.substring(maxi, maxj+1)
}


let str = "abcbdbdbbdcdabd";
console.log(findLongestSubStrWithKdistChars(str, 2));

