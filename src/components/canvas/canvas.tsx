import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { elementTypeList } from '../../helpers/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setComponentIdList } from '../../store/action';
import { getComponentIdList } from '../../store/mode-process/selectors';
import Display from '../calculator/display/display';
import EquallyButton from '../calculator/equally-button/equally-button';
import MathOperationsPanel from '../calculator/math-operations-buttons/math-operations-panel';
import NumbersPanel from '../calculator/numbers-panel/numbers-panel';
import './canvas.scss';

const Canvas = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const componentsInCanvasIdList = useAppSelector(getComponentIdList);
  const elementList = [{ id: 'display', component: <Display isInCanvas={true} /> }, { id: 'math-operations', component: <MathOperationsPanel isInCanvas={true} /> }, { id: 'number-panel', component: <NumbersPanel isInCanvas={true} /> }, { id: 'equally-button', component: <EquallyButton isInCanvas={true} /> }];

  const [board, setBoard] = useState([] as { id: string, component: JSX.Element }[]);
  const [isDrop, setIsDrop] = useState(false);

  const addComponentToBoard = (item: HTMLDivElement) => {
    setIsDrop(true);
    dispatch(setComponentIdList({ id: item.id }));
    const itemList = elementList.filter((element) => item.id === element.id);
    setBoard((board) => [...board, itemList[0]]);
  };
  let counter = 1;

  console.log(componentsInCanvasIdList);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: elementTypeList,
    drop: (item: HTMLDivElement) => addComponentToBoard(item),
    collect: (monitor) => ({
      dragStart: monitor.canDrop(),
      isOver: monitor.isOver(),
    })
  }))

  return (

    <div className='canvas'
      ref={drop}
      style={{ backgroundColor: isOver && !isDrop ? '#F0F9FF' : 'white', border: isDrop ? 'none' : '2px dashed #C4C4C4' }}
    >
      <div
        style={{ display: isDrop ? 'none' : '' }}
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
        board.map((item: { id: string, component: JSX.Element }) => {
          return <div
            key={`item-${counter++}`}
            className='item'
          >{item.component}</div>
        })
      }
    </div>
  );
}

export default Canvas;
