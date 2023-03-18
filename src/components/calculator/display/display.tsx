import { useDrag } from 'react-dnd';
import { elementType } from '../../../helpers/const';
import { useAppSelector } from '../../../hooks';
import { getCalculationResult } from '../../../store/calculation-process/selectors';
import './display.scss';

const Display = (): JSX.Element => {

  const displayValue = useAppSelector(getCalculationResult);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: elementType.DISPLAY,
    item: { id: 'display' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))


  return (
    <div
      ref={drag}
      className='calculator__display display'
      id='display'
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      <div className={'display__result'}>
        <span className='display__text'>{displayValue}</span>
      </div>
    </div>
  );
};

export default Display;
