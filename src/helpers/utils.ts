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
const count = (num1: any, num2: any, mark: string) => {
  switch (mark) {
    case "х":
      return num1 * num2;
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Не определено";
      }
  }
}

export { count, getIntermediateValue };
