/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
function reverse(string) {
  // let reverseStr = '';

  // if (reverseStr.length < string.length) {
  //   reverseStr = string[string.length - 1] + reverse(string.slice(0, -1));
  // }

  // return reverseStr;
  if (string.length === 0) {
    return '';
  }

  return string[string.length - 1] + reverse(string.slice(0, -1));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
