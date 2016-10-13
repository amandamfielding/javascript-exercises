function bubbleSort(array){
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      let j = i + 1;
      if (array[i] > array[j]) {
        sorted = false;
        let bigger = array[i];
        let smaller = array[j];
        array[i] = smaller;
        array[j] = bigger;
      }
    }
  }
  return array;
}

// console.log(bubbleSort([7,4,9,6,2,1]));


function substrings(string) {
  let subs = [];
  for (let i = 0; i < string.length; i++) {
    for (var j = 0; j <= string.length; j++) {
      if (i < j) {
        subs.push(string.slice(i,j));
      }
    }
  }
  return subs;
}
console.log(substrings("cat"));
