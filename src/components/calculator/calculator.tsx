import DragAndDropWrapper from '../drag-and-drop-wrapper/drag-and-drop-wrapper';
import './calculator.scss';
import Display from "./display/display";
import EquallyButton from './equally-button/equally-button';
import MathOperationsPanel from './math-operations-panel/math-operations-panel';
import NumbersPanel from './numbers-panel/numbers-panel';

const Calculator = (): JSX.Element => {

  return (
    <div className='calculator'>
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
  );
}

export default Calculator;
