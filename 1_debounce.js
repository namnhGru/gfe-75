/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
    // init first timeOutID
    let timeOutID = null;
    return function (...args) {
      // clear last timeOutID
      clearTimeout(timeOutID);
      const context = this;
      // make new timeOutID
      timeOutID = setTimeout(() => {
        // function inside setTimeout will lose this, therefore we have to keep this consistency.
        func.call(context, ...args);
      }, wait);
    };
  }
  