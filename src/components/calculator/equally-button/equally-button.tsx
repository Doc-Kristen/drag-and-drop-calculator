import { useDrag } from 'react-dnd';
import { buttonParameterType, elementType } from '../../../helpers/const';
import Button from '../../button/button';
import './equally-button.scss'

const EquallyButton = (): JSX.Element => {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: elementType.EQUALLY_BUTTON,
    item: { id: 'equally-button' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  return (
    <div className='math-operations-pannel__equaly-button equaly-button'
      draggable
      id='equally-button'
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      <Button buttonParameters={{ value: buttonParameterType["button--equally-button"].values[0], modificator: "button--equally-button" }} />
    </div>
  );
}

export default EquallyButton;
