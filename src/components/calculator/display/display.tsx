import './display.scss';

const Display = (): JSX.Element => {
  return (
    <div className='calculator__display display'>
      <div className='display__result'>
        <span className='display__text'>0</span>
      </div>
    </div>
  );
}

export default Display;
