const STARTING_VALUE_DISPLAY = '0';
const MAX_NUMBER_SIGNS = 16;

const buttonParameterType = {
  'button--math-operation':
  {
    values: ['/', 'х', '-', '+']
  },
  'button--number': {
    values: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','],
  },
  'button--equally-button': {
    values: ['=']
  }
} as const;

enum NameSpace {
  MODE = 'MODE',
  CALCULATION = 'CALCULATION',
}

export { buttonParameterType, NameSpace, STARTING_VALUE_DISPLAY, MAX_NUMBER_SIGNS };
