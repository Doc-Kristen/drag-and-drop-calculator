import { useDrop } from 'react-dnd';
import { componentDraggableType } from '../../helpers/const';
import { useAppSelector } from '../../hooks';
import { getComponentIdList } from '../../store/mode-process/selectors';
import { Item } from '../../types/boards-list';
import Display from '../calculator/display/display';
import EquallyButton from '../calculator/equally-button/equally-button';
import MathOperationsPanel from '../calculator/math-operations-panel/math-operations-panel';
import NumbersPanel from '../calculator/numbers-panel/numbers-panel';
import DragAndDropWrapper from '../drag-and-drop-wrapper/drag-and-drop-wrapper';
import './canvas.scss';

const Canvas = (): JSX.Element => {

  const componentCanvasIdList = useAppSelector(getComponentIdList);
  const elementList = [{ id: 'display', component: <Display /> }, { id: 'math-operations', component: <MathOperationsPanel /> }, { id: 'number-panel', component: <NumbersPanel /> }, { id: 'equally-button', component: <EquallyButton /> }];
  const componentsInCanvass = elementList.filter(element => componentCanvasIdList.some(item => item.id === element.id));

  let counter = 1;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: componentDraggableType,
    collect: (monitor) => ({
      dragStart: monitor.canDrop(),
      isOver: monitor.isOver(),
    })
  }));

  return (

    <div className='canvas'
      ref={drop}
      style={{ backgroundColor: isOver && !componentsInCanvass.length ? '#F0F9FF' : 'white', border: componentsInCanvass.length > 0 ? 'none' : '2px dashed #C4C4C4' }}
    >
      <div
        style={{ display: componentsInCanvass.length > 0 ? 'none' : '' }}
        className='canvas__instruction instruction'>
        <svg className='instruction__pull-acon pull-icon' aria-hidden="true" focusable="false"
          width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.7778 1V5.44444" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M21 3.22222L16.5556 3.22222" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M12.3889 3.22222H5C2.79086 3.22222 1 5.01309 1 7.22223V16.2778M18.7778 9.61111V17C18.7778 19.2091 16.9869 21 14.7778 21H5C2.79086 21 1 19.2091 1 17V16.2778M1 16.2778L4.83824 12.4395C6.40034 10.8774 8.93298 10.8774 10.4951 12.4395C11.8961 13.8406 13.5664 15.5108 14.8889 16.8333" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M18.7778 14.6111L18.2729 14.1062C16.7108 12.5441 14.1781 12.5441 12.616 14.1062L12.3889 14.3333" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12.1111" cy="7.66667" r="0.555556" fill="black" />
        </svg>
        <span className='instruction__title'>Перетащите сюда</span>
        <span className='instruction__text'>любой элемент из левой панели</span>
      </div>
      {
        componentsInCanvass.map((item: Item) => {
          return <div
            key={`item-${counter++}`}
            className='item'
          >
            <DragAndDropWrapper
              isInCanvas={true}
              children={item.component}
              id={item.id}
            />
          </div>
        })
      }
    </div>
  );
}

export default Canvas;
