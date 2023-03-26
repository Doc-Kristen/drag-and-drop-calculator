import { useState } from "react";
import { useDrag } from "react-dnd";
import { buttonParameterType, elementType } from "../../../helpers/const";
import { useAppSelector } from "../../../hooks";
import { getComponentIdList, getModeStatus } from "../../../store/mode-process/selectors";
import Button from "../../button/button";
import './numbers-panel.scss';

type NumbersPanelProps = {
  isInCanvas?: boolean,
}


const NumbersPanel = ({ isInCanvas }: NumbersPanelProps): JSX.Element => {

  const componentCanvasIdList = useAppSelector(getComponentIdList);
  const isConstructorMode = useAppSelector(getModeStatus);

  const [isDrop, setIsDrop] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: elementType.NUMBER_PANEL,
    item: { id: 'number-panel' },
    end: () => {
      setIsDrop(true);
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }));

  const componentInCanvas = componentCanvasIdList.some((item) => item.id === 'number-panel');

  return (
    <div className='math-operations-pannel__numbers-buttons numbers-buttons'
      id='number-panel'
      draggable
      ref={!componentInCanvas && !isInCanvas && !isConstructorMode ? drag : undefined}
      style={{
        opacity: isDragging || isDrop ? 0.5 : 1,
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

export default NumbersPanel;
