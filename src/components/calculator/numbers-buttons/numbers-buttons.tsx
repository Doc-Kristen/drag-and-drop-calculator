import { buttonParameterType } from "../../../helpers/const";
import Button from "../../button/button";
import './numbers-buttons.scss';


const NumbersButtons = (): JSX.Element => {
  return (
    <div className='math-operations-pannel__numbers-buttons numbers-buttons'
    draggable
    >
      <div className='numbers-buttons__container'>
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

export default NumbersButtons;
