/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
    // handle no init, empty array
    const isNoInit = initialValue === undefined;
    const isEmptyArray = this.length === 0;
  
    if (isNoInit && isEmptyArray) throw new Error("Can't be reduced.");
  
    //set initValue, it can be first array element or initValue
    //if initValue is the first element, starting index should be 1. Otherwise it shoud be 0
    let result = isNoInit ? this[0] : initialValue;
    const startIdx = isNoInit ? 1 : 0;
  
    //reducer applied
    for (let i = startIdx; i < this.length; i++) {
      //handle sparse array
      if (Object.hasOwn(this, i)) {
        result = callbackFn(result, this[i], i, this);
      }
    }
  
    return result;
  };


  export default Array.prototype.myReduce;
  