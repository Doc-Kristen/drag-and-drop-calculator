import { buttonParameterType } from "../../../helpers/const";
import Button from "../../button/button";
import './numbers-panel.scss';

const NumbersPanel = (): JSX.Element => {

  return (
    <div className='math-operations-pannel__numbers-buttons numbers-buttons'
      id='number-panel'
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
