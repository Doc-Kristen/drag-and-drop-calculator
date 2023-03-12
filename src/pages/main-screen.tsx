import Calculator from "../components/calculator/calculator";
import Canvas from "../components/canvas/canvas";
import Toggle from "../components/toggle/toggle";
import "./main-screen.scss"

const MainScreen = (): JSX.Element => {
  return (
    <div className='container'>
      <Toggle />
      <div className='constructor'>
        <Calculator />
        <Canvas />
      </div>
    </div>
  );
}

export default MainScreen;
