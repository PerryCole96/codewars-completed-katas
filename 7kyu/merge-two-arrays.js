// Description

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).


// My Solution

function mergeArrays(a, b) {

    const mixedArray = []
    let i = 0
  
    while(i < a.length || i < b.length) {
      if(i < a.length){
         mixedArray.push(a[i])
      }
      if(i < b.length){
         mixedArray.push(b[i])
      }
      i++
    }
   return mixedArray;
  }

  
// Best Practice Solution 1

function mergeArrays(a, b) {
    let j = [],
        longest = a.length > b.length ? a:b;
    for (var i=0; i<longest.length; i++){
      if (a[i]) j.push(a[i])
      if (b[i]) j.push(b[i])
    }
    return j
  }

// Best Practice Solution 2

function mergeArrays(a, b) {
    var answer = [];
    
    for (i = 0; i < Math.max(a.length, b.length); i++){
      if (i < a.length) {answer.push(a[i]);}
      if (i < b.length) {answer.push(b[i]);}
    }
    
    return answer; 
    
    
  }