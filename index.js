
function stringLength(string) {
  const size = string.length;
  if (size < 1 || size > 10) {
    throw `String size error`;
  }
  return size;
}

function reverseString(string) {
  const arr = string.split('');
  return arr.reverse().join('');
}

function capitalized(string) {
  const arr= string.split('');
  arr[0]= arr[0].toUpperCase();
  return arr.join('');
}

module.exports = {
  stringLength,
  reverseString,
  capitalized
};