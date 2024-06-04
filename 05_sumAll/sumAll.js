const sumAll = function(firstNum, secondNum) {
   if(!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
      return "ERROR"
   }
   if(firstNum < 0 || secondNum < 0) {
      return "ERROR";
   }
   if(secondNum < firstNum) {
      [firstNum, secondNum] = [secondNum, firstNum];
   }
   let initialNum = 0;
   for(let i = firstNum; i <= secondNum; i++){
      initialNum += i;
   }
   return initialNum;
};




// Do not edit below this line
module.exports = sumAll;

