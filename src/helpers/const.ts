const buttonParameterType = {
  'button--math-operation':
  {
    values: ['/', '*', '-', '+']
  },
  'button--number': {
    values: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','],
  },
  'button--equally-button': {
    values: ['=']
  }
} as const;

export { buttonParameterType };
