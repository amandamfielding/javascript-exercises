function getRange(start,end) {
  let range = [];
  for (let i = start + 1; i < end; i++) {
    range.push(i)
  }
  return range;
}

// strictly between
// console.log(getRange(2, 5)); // [3, 4]
// console.log(getRange(6, 5)); // []

function getRangeRec(start, end){
  if (end <= start){
    return []
  }

  let range = [start];
  return range.concat(getRangeRec(start + 1, end));
}

// console.log(getRangeRec(2, 5)); // [2, 3, 4]
// console.log(getRangeRec(2, 4)); // [2,3]
// console.log(getRangeRec(2, 2)); // []
// console.log(getRangeRec(6, 5)); // []

function arraySum(array){
  if (array.length === 0){
    return 0;
  }

  let sum = array.pop();
  return sum += arraySum(array);
}

// console.log(arraySum([1,2,3,4])); // 10
// console.log(arraySum([1,2,3,-4])); // 2

function expRecA(base,power){
  if (power === 0) {
    return 1;
  }
  return base * expRecA(base, power - 1);
}

// console.log(expRecA(3,2)); //9

function expRecB(base,power) {
  if (power === 0) {
    return 1;
  }
  if (power === 1) {
    return base;
  }
  if (power % 2 === 0){
    return Math.pow(expRecB(base, power / 2),2);
  } else {
    return base * (Math.pow(expRecB(base, (power - 1) / 2),2));
  }
}

// console.log(expRecB(3,4)); //81


function fibonnacciRec(n) {
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return [1,1];
  }

  prevSeq = fibonnacciRec(n-1);
  let l = prevSeq.length;
  return prevSeq.concat((prevSeq[l-1] + prevSeq[l-2]));
}

// console.log(fibonnacciRec(2)); // [1,1]
// console.log(fibonnacciRec(4)); // [1,1,2,3]

function bSearch(array, target){
  // array.sort();
  if (array.length === 0){
    return undefined;
  }

  let midIndex = Math.floor(array.length/2);
  let rightSide = array.slice(midIndex + 1, array.length);
  let leftSide = array.slice(0, midIndex);

  if (array[midIndex] === target){
    return midIndex;
  } else if(target < array[midIndex]){
    return bSearch(leftSide, target);
  } else {
    let r = bSearch(rightSide, target);
    if (r === undefined) {
      return undefined;
    } else {
      return r + midIndex + 1;
    }
  }
}

// console.log(bSearch([1, 2, 3], 1)); //# => 0
// console.log(bSearch([2, 3, 4, 5], 3)); //# => 1
// console.log(bSearch([2, 4, 6, 8, 10], 6)); //# => 2
// console.log(bSearch([1, 3, 4, 5, 9], 5)); //# => 3
// console.log(bSearch([1, 2, 3, 4, 5, 6], 6)); //# => 5
// console.log(bSearch([1, 2, 3, 4, 5, 6], 0)); //# => nil
// console.log(bSearch([1, 2, 3, 4, 5, 7], 6)); //# => nil

function makeChange(target,coins=[25,10,5,1]) {
  if (target === 0){
    return []
  }

  if (coins.every(coin => coin > target)){
    return null;
  }

  coins.sort(function(a, b){ return b - a});

  let bestChange = undefined;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > target){
      continue;
    }

    let remainder = target - coins[i];

    let bestRemainder = makeChange(remainder,coins);

    if (bestRemainder === []){
      continue;
    }

    let thisChange = [coins[i]].concat(bestRemainder);

    if (bestChange === undefined || thisChange.length < bestChange.length) {
      bestChange = thisChange;
    }
  }
  return bestChange;
}

// console.log(makeChange(14, [10, 7, 1]));

function mergeSort(array){
  if (array.length <= 1){
    return array;
  }

  let midIndex = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, midIndex));
  let right = mergeSort(array.slice(midIndex));

  return merge(left, right);
}

function merge(left, right){
  let mergedArray = [];

  while(left.length > 0 && right.length > 0){
    if (left[0] < right[0]){
      mergedArray.push(left.pop());
    } else {
      mergedArray.push(right.pop());
    }
  }
  return mergedArray.concat(left).concat(right);
}

console.log(mergeSort([5,4,3,2,1]));





//
