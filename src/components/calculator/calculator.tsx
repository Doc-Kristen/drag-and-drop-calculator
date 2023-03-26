import './calculator.scss';
import Display from "./display/display";
import EquallyButton from './equally-button/equally-button';
import MathOperationsPanel from './math-operations-buttons/math-operations-panel';
import NumbersPanel from './numbers-panel/numbers-panel';

const Calculator = (): JSX.Element => {

  return (
    <div className='calculator'>
      <Display isInCanvas={false} />
      <MathOperationsPanel isInCanvas={false} />
      <NumbersPanel isInCanvas={false} />
      <EquallyButton isInCanvas={false} />
    </div>
  );
}

export default Calculator;
