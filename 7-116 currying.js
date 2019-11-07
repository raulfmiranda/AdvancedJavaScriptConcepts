//Currying
const multiply = (a, b, c) => a * b * c
const curriedMultiply = (a) => (b) => (c) => a * b * c
const multiplyBy5 = curriedMultiply(5)
multiplyBy5(4)(10)