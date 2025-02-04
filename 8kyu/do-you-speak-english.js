// Description

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
// Upper or lower case letter does not matter -- "eNglisH" is also correct.
// Return value as boolean values, true for the string to contains "English", false for it does not.


// My Solution

function spEng(sentence){
    return /english/i.test(sentence)
  }

// Best Practice Solution 1

function spEng(sentence){
    let sentenceLower = sentence.toLowerCase();
    return sentenceLower.includes('english');
  }

// Best Practice Solution 2

function spEng(sentence){
    let pro = 'english';
    let lcs = sentence.toLowerCase();
    let j = 0;
    for (let i in lcs) {
      if (lcs[i] == pro[j]) {
        j++;
      }
    }
    return j == pro.length;
  }