var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(a, b) {
  var newArray = [b, ...a];
  return newArray
}

function destructivelyAddElementToBeginningOfArray(a, b) {

}

function addElementToEndOfArray(a, b) {
  var newArray = [...a, b];
  return newArray
}

function destructivelyAddElementToEndOfArray(a, b) {
  return a.push(b);
}

function accessElementInArray(a, n) {
  return a[n];
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  return a.shift();
}

function removeElementFromBeginningOfArray(a) {
  newArray = a.slice(1)
  return a;
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop()
}

function removeElementFromEndOfArray(a) {
  return a.slice(0, a.length -1);
}