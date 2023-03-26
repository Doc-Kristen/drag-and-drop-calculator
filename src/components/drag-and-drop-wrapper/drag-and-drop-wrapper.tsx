import { useState } from 'react';
import { useDrag } from 'react-dnd';
import { componentDraggableType } from '../../helpers/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setComponentIdList } from '../../store/action';

import { getComponentIdList } from '../../store/mode-process/selectors';
import './drag-and-drop-wrapper.scss';

type DragAndDropWrapperProps = {
  isInCanvas: boolean,
  children: React.ReactNode,
  id: string
}

const DragAndDropWrapper = ({ isInCanvas, children, id }: DragAndDropWrapperProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const componentCanvasIdList = useAppSelector(getComponentIdList);
  const componentInCanvass = (componentId: string) => componentCanvasIdList.some((element) => element.id === componentId);
  const [isDrop, setIsDrop] = useState(false);

  const [{ isDragging, }, drag] = useDrag(() => ({
    type: componentDraggableType,
    item: { id: id },
    end: () => {
      setIsDrop(true);
      if (componentInCanvass(id)) {
        return;
      } else {
        dispatch(setComponentIdList({ actionType: 'add', id: { id: id } }));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }))

  return (
    <div
      // ref={!componentInCanvas && !isInCanvas && !isConstructorMode ? drag : undefined}
      ref={drag}
      draggable
      onDoubleClick={
        () => {
          dispatch(setComponentIdList({ actionType: 'remove', id: { id: id } }));
        }
      }
      className='drag-and-drop-container'
      style={{
        opacity: isDragging || (isDrop && !isInCanvas) ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      {children}
    </div>
  );
};

export default DragAndDropWrapper;
