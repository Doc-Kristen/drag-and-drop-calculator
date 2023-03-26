import { useState } from 'react';
import { useDrag } from 'react-dnd';
import { buttonParameterType, elementType } from '../../../helpers/const';
import { useAppSelector } from '../../../hooks';
import { getComponentIdList, getModeStatus } from '../../../store/mode-process/selectors';
import Button from '../../button/button';
import './equally-button.scss'

type EquallyButtonProps = {
  isInCanvas?: boolean,
}

const EquallyButton = ({ isInCanvas }: EquallyButtonProps): JSX.Element => {
  const componentCanvasIdList = useAppSelector(getComponentIdList);
  const isConstructorMode = useAppSelector(getModeStatus);

  const [isDrop, setIsDrop] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: elementType.EQUALLY_BUTTON,
    item: { id: 'equally-button' },
    end: () => {
      setIsDrop(true);
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }));

  const componentInCanvas = componentCanvasIdList.some((item) => item.id === 'equally-button');

  return (
    <div className='math-operations-pannel__equaly-button equaly-button'
      id='equally-button'
      ref={!componentInCanvas && !isInCanvas && !isConstructorMode ? drag : undefined}
      style={{
        opacity: isDragging || isDrop ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      <Button buttonParameters={{ value: buttonParameterType["button--equally-button"].values[0], modificator: "button--equally-button" }} />
    </div>
  );
}

export default EquallyButton;
