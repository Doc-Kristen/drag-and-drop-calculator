import { useState } from 'react';
import { useDrag } from 'react-dnd';
import { buttonParameterType, elementType } from '../../../helpers/const';
import { useAppSelector } from '../../../hooks';
import { getComponentIdList, getModeStatus } from '../../../store/mode-process/selectors';
import Button from '../../button/button';
import './math-operations-panel.scss';

type MathOperationsPanelProps = {
  isInCanvas?: boolean,
}

const MathOperationsPanel = ({ isInCanvas }: MathOperationsPanelProps): JSX.Element => {

  const componentCanvasIdList = useAppSelector(getComponentIdList);
  const isConstructorMode = useAppSelector(getModeStatus);

  const [isDrop, setIsDrop] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: elementType.MATH_PANEL,
    item: { id: 'math-operations' },
    end: () => {
      setIsDrop(true);
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }));

  const componentInCanvas = componentCanvasIdList.some((item) => item.id === 'math-operations');

  return (
    <div className='math-operations-pannel__math-operations-buttons math-operations-buttons'
      draggable
      ref={!componentInCanvas && !isInCanvas && !isConstructorMode ? drag : undefined}
      style={{
        opacity: isDragging || isDrop ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      <div className='math-operations-buttons__container'
        id='math-operations'
      >
        {
          buttonParameterType['button--math-operation'].values.map(value =>
            <Button
              key={value}
              buttonParameters={{ value, modificator: 'button--math-operation' }} />
          )
        }
      </div>
    </div>
  );
}

export default MathOperationsPanel;
