import { ButtonParameters } from '../../types/button-parameters';
import './button.scss'

type ButtonProps = {
  buttonParameters: ButtonParameters;
}

const Button = ({ buttonParameters }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`button ${buttonParameters.modificator ? buttonParameters.modificator : ''}`}
      type='button'
    >{buttonParameters.value}
    </button>
  );
}

export default Button;
