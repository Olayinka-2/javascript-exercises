const removeFromArray = function(array, ...elementToRemove) {
   let mainArray = array;
   let argument = elementToRemove;

   for(let value of argument) {
      let find = value;
      for(let j = 0; j < mainArray.length; j++) {
         let position = mainArray.indexOf(find);
         if(position === -1) {
            continue
         } else {
            mainArray.splice(position, 1);
         }
      }
      
   }
   return mainArray;
};


// console.log(removeFromArray([1,3,3,4], 3));

// Do not edit below this line
module.exports = removeFromArray;


