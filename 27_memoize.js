/**
 * @param {Function} func
 * @returns Function
 */
export default function memoize(func) {
    // capture last result
    let memoResult = null;
  
    // capture last arg
    let prevArg = null;
  
    // wrapper function that can memoize
    return function (arg) {
      // ensure not losing this
      let context = this;
  
      // if no memo or same arg, call the function then capture result and arg
      if (memoResult === null || !Object.is(arg, prevArg)) {
        memoResult = func.call(context, arg);
        prevArg = arg;
      }
  
      // either way, return memo
      return memoResult;
    };
  }
  