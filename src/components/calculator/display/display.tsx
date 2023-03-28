import { MAX_NUMBER_SIGNS } from '../../../helpers/const';
import { useAppSelector } from '../../../hooks';
import { getCalculationResult } from '../../../store/calculation-process/selectors';
import './display.scss';

type DisplayProps = {
  inCanvas: boolean
}

const Display = ({ inCanvas }: DisplayProps): JSX.Element => {

  const displayValue = useAppSelector(getCalculationResult);
  const maxDisplayValueLength = 11;

  const largeFontSize = 36;
  const mediumFontSize = 22;
  const smallFontSize = 17;
  const displayValueLength = String(displayValue).split('').length;
  const getDisplayFontSize = () => {
    if (displayValueLength <= maxDisplayValueLength) {
      return largeFontSize;
    }
    if (displayValueLength > maxDisplayValueLength && displayValueLength <= MAX_NUMBER_SIGNS) {
      return mediumFontSize;
    } else {
      return smallFontSize;
    }
  };

  return (
    <div
      className='calculator__display display'
      id='display'
    >
      <div className={'display__result'}>
        <span
          style={
            { fontSize: getDisplayFontSize() }
          }
          className='display__text display__text--small'
        >{displayValue}</span>
      </div>
    </div>
  );
};

export default Display;
