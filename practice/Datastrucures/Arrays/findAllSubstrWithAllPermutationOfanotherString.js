function findAllSubstrWithAllPermutationOfanotherString(str1, str2) {
    let out = {};
    debugger
    if(str1.length < str2.length) {
        return;
    }
    let counter = 1;
    for(let j = str2.length-1, i = 0; j < str1.length; j++, i++) {
        debugger
        let flag = true;
        let tempSubstr = str1.substring(i, i + str2.length);
        for(let n = 0; n < str2.length; n++) {
            debugger
            if(tempSubstr.indexOf(str2[n]) < 0) {
                flag = false;
                break;
            }
        }
        if(!flag) {
            continue;
        } else {
            out[counter++] = i;
        }
    
    }
    return out;
}

console.log(findAllSubstrWithAllPermutationOfanotherString("XYYZXZYZXXYZ", "XYZ"));