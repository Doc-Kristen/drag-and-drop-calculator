const getIntermediateValue = (startValue: string, newValue: string) => {
  switch (Number(startValue) !== 0) {
    case true:
      return startValue + newValue;
    case false:
      if (newValue === ',') {
        return startValue;
      }
      return newValue;
  }
};

// Заменить any
const count = (firstNumber: any, secondNumber: any, operator: string) => {
  switch (operator) {
    case "х":
      return firstNumber * secondNumber;
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "/":
      if (secondNumber !== 0) {
        return firstNumber / secondNumber;
      } else {
        return "Не определено";
      }
  }
}

export { count, getIntermediateValue };
