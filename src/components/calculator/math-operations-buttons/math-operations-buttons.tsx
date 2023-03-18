import { useDrag } from 'react-dnd';
import { buttonParameterType, elementType } from '../../../helpers/const';
import Button from '../../button/button';
import './math-operations-buttons.scss';

const MathOperationsButtons = (): JSX.Element => {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: elementType.MATH_PANEL,
    item: { id: 'math-operations' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  return (
    <div className='math-operations-pannel__math-operations-buttons math-operations-buttons'
      draggable
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
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

export default MathOperationsButtons;
