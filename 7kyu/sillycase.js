// Description

// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

// eg: foobar == fooBAR

// If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

// sillycase("brian")
// midpoint   --^--

// bri  first half (lower-cased)  
// AN   second half (upper-cased) 


// My Solution

function sillycase(silly) {
    const halfwayRound = Math.ceil(silly.length / 2);
    const firstSillyHalf = silly.slice(0, halfwayRound).toLowerCase()
    const secondSillyHalf = silly.slice(halfwayRound).toUpperCase()
    const stupidWord = firstSillyHalf + secondSillyHalf; 

    return stupidWord
  }


// Best Practice Solution 1

function sillycase(silly) {
    var mid = Math.ceil(silly.length / 2);

    return silly.slice(0, mid).toLowerCase() + silly.slice(mid).toUpperCase();
  }

// Best Practice Solution 2

function sillycase(silly) {
    const firstPart = silly.slice(0, Math.ceil(silly.length / 2)).toLowerCase();
    const secondPart = silly.slice(Math.ceil(silly.length / 2)).toUpperCase();

    return firstPart + secondPart;
  }