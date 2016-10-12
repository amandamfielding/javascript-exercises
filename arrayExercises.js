function myUniq(array){
  let uniqArray = [];

  for(let i = 0; i < array.length; i++){
    if (!uniqArray.includes(array[i])){
      uniqArray.push(array[i]);
    }
  }
  return uniqArray;
}

// console.log(myUniq([1,2,3])); // [1,2,3]
// console.log(myUniq([1,2,3,3,2])); // [1,2,3]
// console.log(myUniq([1,2,3,3,2,4,5])); // [1,2,3,4,5]


// Find all position of pairs that equal to 0
function twoSum(array){
  let zeroSumPairs = [];

  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if ((i < j) && (array[i] + array[j] === 0)){
        zeroSumPairs.push([i, j])
      }

    }
  }
  return zeroSumPairs;
}

// console.log(twoSum([1,3,-1,0,-3])); // [[0, 2], [1, 4]]
// console.log(twoSum([1,3,-1,-1, 0,-3])); // [[0, 2],[0, 3] [1, 5]]

function myTranspose(array){
  let transposed = [];
  let subs = [];
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      transposed[i].push(array[j][i])
      subs.push(array[j][i]);
      if (subs.length === array.length) {
        transposed.push(subs);
        subs = [];
      }
    }
  }
  return transposed;
}

console.log(myTranspose([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]));











//
