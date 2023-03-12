import { buttonParameterType } from '../../../helpers/const';
import Button from '../../button/button';
import './equally-button.scss'

const EquallyButton = (): JSX.Element => {
  return (
    <div className='math-operations-pannel__equaly-button equaly-button'>
      <Button buttonParameters={{ value: buttonParameterType["button--equally-button"].values[0], modificator: "button--equally-button" }} />
    </div>
  );
}

export default EquallyButton;
