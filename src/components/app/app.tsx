import Calculator from '../calculator/calculator';
import Canvas from '../canvas/canvas';
import Toggle from '../toggle/toggle';
import './app.scss';

const App = (): JSX.Element => {
  return (
    <div className='container'>
      <div className='constructor'>
        <Toggle />
        <Calculator />
        <Canvas />
      </div>
    </div>
  );
}

export default App;
