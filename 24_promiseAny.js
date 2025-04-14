/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny(iterable) {
  // check if iterable isn't empty
  if (!iterable.length) {
    return new AggregateError([]);
  }

  // when all promise failed, return the failed promise
  const errorArray = [];

  // check how many time promise failed
  let pending = 0;

  // return a promise that can be chained
  return new Promise((resolve, rejected) => {
    iterable.forEach((item, idx) => {
      // each item can be a pending promise, a resolved promise and a pure value.
      // wrap item inside promise for more reliable
      Promise.resolve(item)
        .then(resolve)
        .catch((err) => {
          errorArray[idx] = err;
          pending++;
          if (pending === iterable.length) {
            rejected(new AggregateError(errorArray, "all rejected"));
          }
        });
    });
  });
}
