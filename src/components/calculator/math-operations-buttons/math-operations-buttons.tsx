import { buttonParameterType } from '../../../helpers/const';
import Button from '../../button/button';
import './math-operations-buttons.scss';

const MathOperationsButtons = (): JSX.Element => {
  return (
    <div className='math-operations-pannel__math-operations-buttons math-operations-buttons'>
      <div className='math-operations-buttons__container'>
        {
          buttonParameterType['button--math-operation'].values.map(value =>
            <Button
              key={value}
              buttonParameters={{ value, modificator: 'button--math-operation' }} />
          )
        }
      </div>
    </div>
  );
}

export default MathOperationsButtons;
