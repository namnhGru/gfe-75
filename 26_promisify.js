/**
 * @callback func
 * @returns Function
 */
export default function promisify(func) {
    return function (...args) {
      // this will be this function
      let context = this;
      return new Promise((res, rej) => {
        // if err happen from the callback, reject the promise with the error
        // if result happen, resolve the result  
        func.call(context, ...args, (err, result) => {
          err ? rej(err) : res(result);
        });
      });
    };
  }
  