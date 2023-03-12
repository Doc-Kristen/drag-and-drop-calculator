import './calculator.scss';
import Display from "./display/display";
import EquallyButton from './equally-button/equally-button';
import MathOperationsButtons from './math-operations-buttons/math-operations-buttons';
import NumbersButtons from './numbers-buttons/numbers-buttons';

const Calculator = (): JSX.Element => {
  return (
    <div className='calculator'>
      <Display />
      <MathOperationsButtons />
      <NumbersButtons />
      <EquallyButton />
    </div>
  );
}

export default Calculator;
