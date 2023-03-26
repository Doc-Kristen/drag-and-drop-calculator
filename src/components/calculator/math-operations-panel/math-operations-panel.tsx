import { buttonParameterType } from '../../../helpers/const';
import Button from '../../button/button';
import './math-operations-panel.scss';

const MathOperationsPanel = (): JSX.Element => {

  return (
    <div className='math-operations-pannel__math-operations-buttons math-operations-buttons'
    >
      <div className='math-operations-buttons__container'
        id='math-operations'
      >
        {
          buttonParameterType['button--math-operation'].values.map(value =>
            <Button
              key={value}
              buttonParameter={{ value, modificator: 'button--math-operation' }} />
          )
        }
      </div>
    </div>
  );
}

export default MathOperationsPanel;
