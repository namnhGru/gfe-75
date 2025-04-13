/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny(iterable) {
    if (!iterable.length) {
      return new AggregateError([]);
    }
  
    const errorArray = [];
  
    return new Promise((resolve, rejected) => {
      iterable.forEach((item, idx) => {
        if (item instanceof Promise) {
          item.then(resolve).catch((err) => rejected(err));
        } else {
          resolve(item);
        }
      });
    });
  }
  