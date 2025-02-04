// Description

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// My Solution

function solution(str, ending){

    const theEnd = str.slice(-ending.length)
   
    if(theEnd === ending || ending === ''){
      return true
    } 
      else {
        return false
    }
}


// Best Practice Solution 1

function solution(str, ending){
    return str.endsWith(ending);
  }

// Best Practice Solution 2

function solution(str, ending){
    return str.substr(-ending.length) == ending;
  }