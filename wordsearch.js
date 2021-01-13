const transpose = function(array) {
  // transpose the array to check for vertical letters
  // create an acucumlator
  let transposed = [];
  // create a row array
  let newRow = [];
  // loop through the matrix parameter array with a nested loop
  // first index of the outer array
  // outerloop
  for (let column = 0; column < array[0].length; column++) {
    // innerloop
    for (let row = 0; row < array.length; row++) {
      //   push into newRow at current row and column
      newRow.push(array[row][column]);
    }
    //   push the newRow into transposed
    transposed.push(newRow);
    //   reset the newRow at the end of each loop
    newRow = [];
  }
  return transposed;
};



const wordSearch = (letters, word) => {
  //check if letters is empty first
  if (letters.length === 0) {
    //if it is we return false
    return false;
  }
  //initiate horiontalJoin and verticalJoin variables
  //which are the array elements joined together to create strings
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  // reverse the word (easier than looping through the array)
  const reverseWord = word.split("").reverse().join("");
  //we then loop through the strings to see if they contain the word
  for (let v of verticalJoin) {
    if (v.includes(word) || v.includes(reverseWord)) {
      //if it does we return true
      return true;
    }
  }
    
  for (let l of horizontalJoin) {
    if (l.includes(word) || l.includes(reverseWord)) {
      return true;
    }
  }
  //if the function gets this far, then the word isn't in the 2D array
  //so we return false.
  return false;
};
  
module.exports = wordSearch;
