export function isArray(value) {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  
  export function isFunction(value) {
    return typeof value === "function";
  }
  
  export function isObject(value) {
    if (value === null || value === undefined) {
      return false;
    }
    return typeof value === "object" || typeof value === "function";
  }
  
  export function isPlainObject(value) {
    if (value == null) return false;
    
    //Every POJO will have a Object prototype or null (when create with Object.create(null))
    const valuePrototype = Object.getPrototypeOf(value);
  
    return valuePrototype === null || valuePrototype === Object.prototype;
  }
  