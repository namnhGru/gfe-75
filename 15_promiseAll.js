/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
    // return a promise to chain with
    return new Promise((resolve, reject) => {
      // create a result array with length equal to input array
      const result = new Array(iterable.length);
  
      // flag to check if all item resolved
      let unresolved = iterable.length;
  
      // resolve immediately if input array empty
      if (iterable.length === 0) {
        resolve([]);
      }
  
      // add resolved to result array
      iterable.forEach(async (item, idx) => {
        try {
          result[idx] = await item;
          unresolved -= 1;
        } catch (e) {
          reject(e);
        }
        if (unresolved === 0) resolve(result);
      });
    });
  }
  