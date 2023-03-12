import { useAppSelector } from '../../../hooks';
import { getCalculationResult } from '../../../store/calculation-process/selectors';
import './display.scss';

const Display = (): JSX.Element => {

  const result = useAppSelector(getCalculationResult);

  return (
    <div className='calculator__display display'>
      <div className='display__result'>
        <span className='display__text'>{result}</span>
      </div>
    </div>
  );
}

export default Display;
