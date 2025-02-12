// Description

// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

// In Roman numerals:

// 1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.
// Example:

//    1 -->       "I"
// 1000 -->       "M"
// 1666 --> "MDCLXVI"
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000



// My Solution

function solution(number){
  
    if(number > 3999){
    
    return "Exceeds the maximum integer that can be represented as roman numerals"
    }
     const romanishMap = [
          { value: 1000, symbol: "M" },
          { value: 900, symbol: "CM" },
          { value: 500, symbol: "D" },
          { value: 400, symbol: "CD" },
          { value: 100, symbol: "C" },
          { value: 90, symbol: "XC" },
          { value: 50, symbol: "L" },
          { value: 40, symbol: "XL" },
          { value: 10, symbol: "X" },
          { value: 9, symbol: "IX" },
          { value: 5, symbol: "V" },
          { value: 4, symbol: "IV" },
          { value: 1, symbol: "I" }
      ];
  
      let romanised = "";
  
      for (const { value, symbol } of romanishMap) {
          while (number >= value) {
              romanised += symbol
              number -= value
          }
      }
  
      return romanised
    
    
  }


// Best Practice Solution 1

function solution(number){
    // convert the number to a roman numeral
  var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  
  var ans = '';
  while(number>0){
      for(a in roman){ 
          if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
              
      }
  }
  return ans;
  }

// Best Practice Solution 2

const solution = (v, s = '') => {
    if (v >= 1000) {
      s+="M";
      v-=1000;
    } else if (v >= 900) {
      s+="CM";
      v-= 900;
    } else if (v >= 800) {
      s+="DCCC";
      v-= 800;
    } else if (v >= 700) {
      s+="DCC";
      v-= 700;
    } else if (v >= 600) {
      s+="DC";
      v-= 600;
    } else if (v >= 500) {
      s+="D";
      v-= 500;
    } else if (v >= 400) {
      s+="CD";
      v-= 400;
    } else if (v >= 300) {
      s+="CCC";
      v-= 300;
    } else if (v >= 200) {
      s+="CC";
      v-= 200;
    } else if (v >= 100) {
      s+="C";
      v-= 100;
    } else if (v >= 90) {
      s+="XC";
      v-= 90;
    } else if (v >= 80) {
      s+="LXXX";
      v-= 80;
    } else if (v >= 70) {
      s+="LXX";
      v-= 70;
    } else if (v >= 60) {
      s+="LX";
      v-= 60;
    } else if (v >= 50) {
      s+="L";
      v-= 50;
    } else if (v >= 40) {
      s+="XL";
      v-= 40;
    } else if (v >= 30) {
      s+="XXX";
      v-= 30;
    } else if (v >= 20) {
      s+="XX";
      v-= 20;
    } else if (v >= 10) {
      s+="X";
      v-= 10;
    } else if (v >= 9) {
      s+="IX";
      v-= 9;
    } else if (v >= 8) {
      s+="VIII";
      v-= 8;
    } else if (v >= 7) {
      s+="VII";
      v-= 7;
    } else if (v >= 6) {
      s+="VI";
      v-= 6;
    } else if (v >= 5) {
      s+="V";
      v-= 5;
    } else if (v >= 4) {
      s+="IV";
      v-= 4;
    } else if (v >= 3) {
      s+="III";
      v-= 3;
    } else if (v >= 2) {
      s+="II";
      v-= 2;
    } else if (v >= 1) {
      s+="I";
      v-= 1;
    }
    return v ? solution(v, s) : s;
  };

