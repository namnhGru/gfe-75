/**
 * @param {Object} obj
 * @return {Object}
 */
export default function squashObject(obj) {
    // need to have the inner function
    // without it there's no way to recursively update the path & value
    // since squashObject will return the object
    function squashInner(_obj, path, _out) {
      Object.keys(_obj).forEach((key) => {
        const value = _obj[key];
  
        // if value is null or is not an object => primitive value, 
        // add the key: value pair to _out object
        if (typeof value !== "object" || value === null) {
          _out[path.concat(key).filter(Boolean).join(".")] = value;
        } else {
          // recursively check for the object inside
          // with the new path
          squashInner(value, path.concat(key), _out);
        }
      });
    }
  
    const out = {};
    squashInner(obj, [], out);
    return out;
  }
  