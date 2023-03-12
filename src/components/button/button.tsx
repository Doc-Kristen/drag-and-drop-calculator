import { MAX_NUMBER_SIGNS, STARTING_VALUE_DISPLAY } from '../../helpers/const';
import { count, getIntermediateValue } from '../../helpers/utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setMathOperation, setPreviousNumber, setResultAction } from '../../store/action';
import { getCalculationResult, getMathOperation, getPreviosNumber } from '../../store/calculation-process/selectors';
import { getModeStatus } from '../../store/mode-process/selectors';
import { ButtonParameters } from '../../types/button-parameters';
import './button.scss'

type ButtonProps = {
  buttonParameters: ButtonParameters;
}

const Button = ({ buttonParameters }: ButtonProps): JSX.Element => {

  const dispatch = useAppDispatch();

  const displayValue = useAppSelector(getCalculationResult);
  const previousValue = useAppSelector(getPreviosNumber);
  const mathOperation = useAppSelector(getMathOperation);
  const isModeBuilding = useAppSelector(getModeStatus);
  const allDisplayValues = String(displayValue).split('');
  const calculate = () => {
    if ((buttonParameters.modificator === 'button--number' ||
      buttonParameters.modificator === 'button--null') &&
      allDisplayValues.length <= MAX_NUMBER_SIGNS) {
      if (buttonParameters.value === ',') {
        if (!allDisplayValues.includes(',')) {
          dispatch(setResultAction(getIntermediateValue(String(displayValue), buttonParameters.value)));
        }
        else {
          dispatch(setResultAction(String(displayValue)));
        }
      } else {
        dispatch(setResultAction(getIntermediateValue(String(displayValue), buttonParameters.value)));
        console.log(allDisplayValues.includes(','));
      }
    }
    if (buttonParameters.modificator === 'button--math-operation') {
      dispatch(setPreviousNumber(Number(displayValue)));
      dispatch(setMathOperation(buttonParameters.value));
      dispatch(setResultAction(STARTING_VALUE_DISPLAY));
    }

    if (buttonParameters.modificator === 'button--equally-button') {
      dispatch(setPreviousNumber(Number(displayValue)));
      if (previousValue !== undefined && displayValue !== undefined && mathOperation !== undefined) {
        dispatch(setResultAction(count(Number(previousValue), Number(displayValue), mathOperation)));
      }
    }
  }

  return (
    <button
      className={`button ${buttonParameters.modificator ? buttonParameters.modificator : ''}`}
      type='button'
      onClick={
        () => {
          if (isModeBuilding) {
            calculate();
          }
        }
      }
    > {buttonParameters.value}
    </button >
  );
}

export default Button;
