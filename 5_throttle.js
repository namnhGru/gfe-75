/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function throttle(func, wait = 0) {
    // func invoke immediately after call
    // at most in wait time, func can only invoke 1
    let timeOutID = null;
    return function (...args) {
      // if the last function timeOutID is not cleared yet, we have to wait.
      // Otherwise, run it immediately
      const context = this;
  
      // check if there'is already a window prevent function for running
      if (timeOutID === undefined || timeOutID === null) {
        // run the function
        func.apply(context, args);
        // set window for next function
        timeOutID = setTimeout(() => {
          timeOutID = null;
          clearTimeout(timeOutID);
        }, wait);
      }
    };
  }
  