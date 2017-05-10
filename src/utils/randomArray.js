/**
 * Created by fribu on 10.05.17.
 */

/**
 * Get random amount of items from array
 *
 * @param array Array
 * @param amount Number
 * @returns {Array}
 */
export function randomArray(array, amount) {
  let arrayToReturn = [];
  
  while (arrayToReturn.length < amount) {
    let randomItem = array[Math.floor(Math.random() * array.length)];
    let haveThisItem = false;
    for (let i = 0; i < arrayToReturn.length; i++) {
      if (arrayToReturn[i] === randomItem) {
        haveThisItem = true;
        break;
      }
    }
    if (!haveThisItem) {
      arrayToReturn.push(randomItem);
    }
  }
  
  return arrayToReturn;
};
