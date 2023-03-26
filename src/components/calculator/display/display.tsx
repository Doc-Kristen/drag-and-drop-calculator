import { useState } from 'react';
import { useDrag } from 'react-dnd';
import { elementType } from '../../../helpers/const';
import { useAppSelector } from '../../../hooks';
import { getCalculationResult } from '../../../store/calculation-process/selectors';
import { getComponentIdList, getModeStatus } from '../../../store/mode-process/selectors';
import './display.scss';

type DisplayProps = {
  isInCanvas?: boolean,
}

const Display = ({ isInCanvas }: DisplayProps): JSX.Element => {

  const componentCanvasIdList = useAppSelector(getComponentIdList);
  const isConstructorMode = useAppSelector(getModeStatus);

  const displayValue = useAppSelector(getCalculationResult);
  const [isDrop, setIsDrop] = useState(false);


  const [{ isDragging, }, drag] = useDrag(() => ({
    type: elementType.DISPLAY,
    item: { id: 'display' },
    end: () => {
      setIsDrop(true);
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }));

  const componentInCanvas = componentCanvasIdList.some((item) => item.id === 'display');

  return (
    <div
      ref={!componentInCanvas && !isInCanvas && !isConstructorMode ? drag : undefined}
      className='calculator__display display'
      id='display'
      style={{
        opacity: isDragging || isDrop ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      <div className={'display__result'}>
        <span className='display__text'>{isDrop ? '0' : displayValue}</span>
      </div>
    </div>
  );
};

export default Display;
