import { useAppSelector } from '../../hooks';
import { getModeStatus } from '../../store/mode-process/selectors';
import DragAndDropWrapper from '../drag-and-drop-wrapper/drag-and-drop-wrapper';
import './calculator.scss';
import Display from "./display/display";
import EquallyButton from './equally-button/equally-button';
import MathOperationsPanel from './math-operations-panel/math-operations-panel';
import NumbersPanel from './numbers-panel/numbers-panel';

const Calculator = (): JSX.Element => {
  const isModeBuilding = useAppSelector(getModeStatus);

  return (
    <div className='calculator'>
      <div className={`${isModeBuilding ? 'visually-hidden' : ''}`}>
        <DragAndDropWrapper
          isInCanvas={false}
          children={<Display
            inCanvas={false}
          />}
          id={'display'}
        />
        <DragAndDropWrapper
          isInCanvas={false}
          children={<MathOperationsPanel />}
          id={'math-operations'}
        />
        <DragAndDropWrapper
          isInCanvas={false}
          children={<NumbersPanel />}
          id={'number-panel'}
        />
        <DragAndDropWrapper
          isInCanvas={false}
          children={<EquallyButton />}
          id={'equally-button'}
        />
      </div>

    </div>
  );
}

export default Calculator;
