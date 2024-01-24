/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 0;

  return nums[0] + product(nums.slice(1))
}

product([2,3,4])

/** longest: return the length of the longest word in an array of words. */

function longest(words) {

  if (words.length === 0) {
    return 0;
  }

  const restLength = longest(words.slice(1));

  return Math.max(words[0].length, restLength)
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (index >= str.length) {
    return "";
  }

  return str[index] + everyOther(str, index + 2)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  if (str.length <= 1) {
    return true;
  }

  if (str[0] === str[str.length -1]) {
    return isPalindrome(str.slice(1,-1))
  }

  return false;

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

  if (index >= arr.length) {
    return -1
  }

  if (arr[index] === val) {
    return index;
  }

  return findIndex(arr, val, index +1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

  if(str === "") {
    return "";
  }

  return str.slice(-1) + revString(str.slice(0,-1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];

  for (let key in obj) {
      if (typeof obj[key] === 'string') {
          result.push(obj[key]);
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          result = result.concat(gatherStrings(obj[key]));
      }
  }

  return result;
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
