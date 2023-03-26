import { useAppDispatch, useAppSelector } from '.';
import { MAX_NUMBER_SIGNS, STARTING_VALUE_DISPLAY } from '../helpers/const';
import { count, getIntermediateValue } from '../helpers/utils';
import { setMathOperation, setPreviousNumber, setResultAction } from '../store/action';
import { getCalculationResult, getMathOperation, getPreviosNumber } from '../store/calculation-process/selectors';
import { getModeStatus } from '../store/mode-process/selectors';
import { ButtonParameters } from '../types/button-parameters';

type ResultuseCalculator = [
  useCalculatorAction: () => void,
];

export const useCalculator = (buttonParameter: ButtonParameters): ResultuseCalculator => {
  const dispatch = useAppDispatch();

  const displayValue = useAppSelector(getCalculationResult);
  const previousValue = useAppSelector(getPreviosNumber);
  const mathOperation = useAppSelector(getMathOperation);
  const isModeBuilding = useAppSelector(getModeStatus);
  const allDisplayValues = String(displayValue).split('');

  const handleButtonClick = async () => {
    if(!isModeBuilding) {
      return;
    }
    if ((buttonParameter.modificator === 'button--number' ||
    buttonParameter.modificator === 'button--null') &&
      allDisplayValues.length <= MAX_NUMBER_SIGNS) {
      if (buttonParameter.value === ',') {
        if (!allDisplayValues.includes(',')) {
          dispatch(setResultAction(getIntermediateValue(String(displayValue), buttonParameter.value)));
        }
        else {
          dispatch(setResultAction(String(displayValue)));
        }
      } else {
        dispatch(setResultAction(getIntermediateValue(String(displayValue), buttonParameter.value)));
      }
    }
    if (buttonParameter.modificator === 'button--math-operation') {
      dispatch(setPreviousNumber(Number(displayValue)));
      dispatch(setMathOperation(buttonParameter.value));
      dispatch(setResultAction(STARTING_VALUE_DISPLAY));
    }

    if (buttonParameter.modificator === 'button--equally-button') {
      dispatch(setPreviousNumber(Number(displayValue)));
      if (previousValue !== undefined && displayValue !== undefined && mathOperation !== undefined) {
        dispatch(setResultAction(count(Number(previousValue), Number(displayValue), mathOperation)));
      }
    }
  };

  return [handleButtonClick];
};
