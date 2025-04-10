Function.prototype.myCall = function (thisArg, ...argArray) {
    // this is current function
    const functionToCall = this;

    // bind current function to call from whatever passed to
    const boundedFunction = functionToCall.bind(thisArg);

    // return function called on params
    return boundedFunction(...argArray);
};


function multiplyAge(multiplier = 1) {
    return this.age * multiplier;
}

const mary = {
    age: 21,
};

const john = {
    age: 42,
};

multiplyAge.myCall(mary); // 21
multiplyAge.myCall(john, 2); // 84
