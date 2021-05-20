// 0 2 5 6 7  and 1 3 4 8 9

// 0 1 2 3 4 5 6 7 8 9 

function merge(arr1, arr2) {
  const mergedArray = [];
  //check for inputs
  if (arr1.length === 0 && arr2.length === 0) {
    return "Empty input arrays";
  } 
  if (arr1.length === 0) {
    return arr2;
  } 
  if (arr2.length === 0) {
    return arr1;
  } 
  
  
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    let arr1Item = arr1[i];
    let arr2Item = arr2[j];
console.log(arr1Item, arr2Item)
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      i++;
    } else {
      mergedArray.push(arr2Item);
      j++;
    }
  }
//improvisation
  /*if (i < arr1.length) {
    for (let n = i; n < arr1.length; n++) {
      mergedArray.push(arr1[n]);
    }
  } else if (j < arr2.length) {
    for (let n = j; n < arr2.length; n++) {
      mergedArray.push(arr2[n]);
    }
  } */

  //console.log(mergedArray);
  return mergedArray;
}


console.log(merge([0, 2, 5, 6, 7, 10, 11], [1, 3, 4, 8, 9]))

console.log(merge([0, 2, 5, 6, 7, 10, 11], []))