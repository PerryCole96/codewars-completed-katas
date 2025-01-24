// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified


// My Solution

function nicknameGenerator(name){

const vowels = "aeiouAEIOU"
    
    if (name.length < 4){
       return "Error: Name too short"
    }

    if (vowels.includes(name[2])){
    return name.slice(0, 4)
    } else {
    return name.slice(0, 3)
    }
    
}
  

// Best Practice Solution 1

const nicknameGenerator = (name) => name.length > 3 
  ? name.slice(0,  3 + 'aeiou'.includes(name[2])) 
  : 'Error: Name too short'


// Best Practice Solution 2

function nicknameGenerator(name){
    return name.length<4?"Error: Name too short":name.match(/^\w{2}([auoie]\w|[^auoie])/)[0];
  }