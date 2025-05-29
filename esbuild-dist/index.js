(() => {
  // src/foo/index.js
  var foo = {
    FOO: GLOBAL.FOO
    // <-- This is an expression with sideEffect
  };
  var bar = "bar";

  // src/index.js
  console.log(bar);
})();
