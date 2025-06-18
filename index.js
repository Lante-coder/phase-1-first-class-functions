function receivesAFunction(callback) {
  callback();
}

// Function that returns a named function
function returnsANamedFunction() {
  function namedFunction() {
    return "I am a named function";
  }
  return namedFunction;
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    return "I am an anonymous function";
  };
}