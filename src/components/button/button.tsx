
import { useCalculator } from '../../hooks/useCalculator';
import { ButtonParameters } from '../../types/button-parameters';
import './button.scss'

type ButtonProps = {
  buttonParameter: ButtonParameters;
}

const Button = ({ buttonParameter }: ButtonProps): JSX.Element => {


  const [handleButtonClick] = useCalculator(buttonParameter);

  return (
    <button
      className={`button ${buttonParameter.modificator ? buttonParameter.modificator : ''}`}
      type='button'
      onClick={handleButtonClick}
    > {buttonParameter.value}
    </button >
  );
}

export default Button;
