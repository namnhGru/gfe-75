/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */

export default function classNames(...args) {
    const resultArray = [...args];
    // reduce array value
    return (
      resultArray
        // flatten the array first
        .flat(Infinity)
        .reduce((prev, curr, idx) => {
          // remove falsy value
          if (!!curr === false) {
            return prev;
          }
          // if value type is object, take only the truthy atrribute
          if (typeof curr === "object") {
            for (let item of Object.keys(curr))
              if (!!curr[item] === true) {
                prev.push(item);
              }
          } else {
            // primitive type
            prev.push(curr);
          }
          return prev;
        }, [])
        // create space
        .join(" ")
    );
  }
  