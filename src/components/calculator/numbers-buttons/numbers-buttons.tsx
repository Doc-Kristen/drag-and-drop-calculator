import { useDrag } from "react-dnd";
import { buttonParameterType, elementType } from "../../../helpers/const";
import Button from "../../button/button";
import './numbers-buttons.scss';


const NumbersButtons = (): JSX.Element => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: elementType.NUMBER_PANEL,
    item: { id: 'number-panel' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  return (
    <div className='math-operations-pannel__numbers-buttons numbers-buttons'
      id='number-panel'
      draggable
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      <div className='numbers-buttons__container'   >
        {
          buttonParameterType["button--number"].values.map(value => {
            const buttonModificator = value !== '0' ? 'button--number' : 'button--null';
            return <Button
              key={value}
              buttonParameters={{ value, modificator: buttonModificator }} />
          }
          )
        }
      </div>
    </div>
  );
}

export default NumbersButtons;
