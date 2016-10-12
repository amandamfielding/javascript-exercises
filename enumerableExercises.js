// myEach
function myEach(array,cb) {
  for(let i = 0; i < array.length; i++){
    cb(array[i]);
  }
  return array;
}

//myMap
function myMap(array, cb){
  let newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]));
  }
  return newArray;
}

function cb(ele) {
  return ele + 1;
}

// console.log(myMap([1,2,3], cb)); // [2,3,4]

//myInject
// refactor to take in an optional accumulator
function myInject(array, cb){
  let accum = array.shift();
  myEach(array,function (el) {
    accum = cb(accum,el)});
  return accum;
}

function sum(accum,el){
  return accum + el;
}

//console.log(myInject([1,2,3],sum)); // 6
