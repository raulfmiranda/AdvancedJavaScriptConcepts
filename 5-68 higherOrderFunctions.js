const multiplyBy = (num1) => {
    return function (num2) {
      return num1 * num2;
    }
}
  
const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4)