import { useAppSelector } from '../../../hooks';
import { getCalculationResult } from '../../../store/calculation-process/selectors';
import './display.scss';

type DisplayProps = {
  inCanvas: boolean
}

const Display = ({ inCanvas }: DisplayProps): JSX.Element => {

  const displayValue = useAppSelector(getCalculationResult);


  return (
    <div
      className='calculator__display display'
      id='display'
    >
      <div className={'display__result'}>
        <span className='display__text'>{inCanvas ? displayValue : '0'}</span>
      </div>
    </div>
  );
};

export default Display;
