
export default class EventEmitter {
    constructor() {
      this.observers = {};
    }
  
    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    on(eventName, listener) {
      const hasEvent = Object.hasOwn(this.observers, eventName);
      if (!hasEvent) {
        this.observers[eventName] = [];
      }
      this.observers[eventName].push(listener);
      return this;
    }
  
    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    off(eventName, listener) {
      const hasEvent = Object.hasOwn(this.observers, eventName);
      if (!hasEvent) {
        return this;
      }
      const hasListener = this.observers[eventName].includes(listener);
      if (!hasListener) {
        return this;
      }
      const idx = this.observers[eventName].indexOf(listener);
      this.observers[eventName].splice(idx, 1);
      const singleListenerRemoved = this.observers[eventName].length === 0;
      if (singleListenerRemoved) {
        delete this.observers[eventName];
      }
      return this;
    }
  
    /**
     * @param {string} eventName
     * @param  {...any} args
     * @returns {boolean}
     */
    emit(eventName, ...args) {
      const hasEvent = Object.hasOwn(this.observers, eventName);
      if (!hasEvent) {
        return false;
      }
      this.observers[eventName].forEach((func) => func(...args));
      return true;
    }
  }
  