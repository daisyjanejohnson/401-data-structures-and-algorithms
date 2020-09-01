'use strict';

 module.exports = function multiBracketValidation(str){
  let squareCount = 0;
  let curlyCount = 0;
  let roundCount = 0;
  for(let i=0; i < str.length; i++){
    let checker = str[i];
    if(!checker){
      return false;
    }
    if(checker === '['){
      squareCount++;
    }
    if(checker === ']'){
      squareCount--;
    }
    if(checker === '{'){
      curlyCount++;
    }
    if(checker === '}'){
      curlyCount--;
    }
    if(checker === '('){
      roundCount++;
    }
    if(checker === ')'){
      roundCount--;
    }
  }
  if(curlyCount === 0 && squareCount === 0 && roundCount === 0){
    return true;
  } else {
    return false;
  }
}