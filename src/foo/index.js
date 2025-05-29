import a from "./a.png";

export const foo = {
  FOO: GLOBAL.FOO, // <-- This is an expression with sideEffect
};

export const baz = {
  url: a,
};

export const bar = "bar";
