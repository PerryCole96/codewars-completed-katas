// Description

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


// My Solution

function generateHashtag (str) {
  
    const str2 = str.trim().split(/\s+/).join(' ');
   
    if (str2 === '') {
      return false;
    } else {
      const arrayedStr = str2.toLowerCase().split(' ');
      const justTag = ['#'];
  
      arrayedStr.forEach(word => {
        justTag.push(word.charAt(0).toUpperCase() + word.slice(1))
      });
  
      const hashTagged = justTag.join('')
      
        if (hashTagged.length > 140) {
           return false;
        }
      return hashTagged;
    }
  }

// Best Practice Solution 1

function generateHashtag(str) {
    if (!str.trim()) return false;
  
    const result =
      '#' +
      str
        .split(' ')
        .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
        .join('');
  
    return result.length > 140 ? false : result;
  }

// Best Practice Solution 2

function generateHashtag (str) {
    var hash = '#';
    str.split(' ').map(a => {
      hash += a.charAt(0).toUpperCase() + a.slice(1);
    });
    return hash != '#' && hash.length <= 140 ? hash : false;
  }