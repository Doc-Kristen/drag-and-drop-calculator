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

const elementType = {
  DISPLAY: 'DISPLAY',
  MATH_PANEL: 'MATH_PANEL',
  NUMBER_PANEL: 'NUMBER_PANEL',
  EQUALLY_BUTTON: 'EQUALLY_BUTTON'
};

const elementTypeList = ['DISPLAY', 'MATH_PANEL', 'NUMBER_PANEL', 'EQUALLY_BUTTON'];

const componentIdList = [{ id: 'display' }, { id: 'math-operations' }, { id: 'number-panel' }, { id: 'equally-button' }];

export { buttonParameterType, NameSpace, STARTING_VALUE_DISPLAY, MAX_NUMBER_SIGNS, elementType, elementTypeList, componentIdList };
