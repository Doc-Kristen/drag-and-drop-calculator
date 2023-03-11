const Calculator = (): JSX.Element => {
  return (
    <div className='calculator'>
      <div className='calculator__display display'>0</div>
      <div className='calculator__actions actions'>
        <div className='actions__math-operations math-operations'>
          <button className='math-operations__button button button--division' type='button'>/</button>
          <button className='math-operations__button button button--multiplication' type='button'>*</button>
          <button className='math-operations__button button button--subtraction' type='button'>-</button>
          <button className='math-operations__button button button--addition' type='button'>+</button>
        </div>
        <div className='actions__numbers-button numbers-button'>
          <button className='numbers-button__button button' type='button'>0</button>
          <button className='numbers-button__button button' type='button'>1</button>
          <button className='numbers-button__button button' type='button'>2</button>
          <button className='numbers-button__button button' type='button'>3</button>
          <button className='numbers-button__button button' type='button'>4</button>
          <button className='numbers-button__button button' type='button'>5</button>
          <button className='numbers-button__button button' type='button'>6</button>
          <button className='numbers-button__button button' type='button'>7</button>
          <button className='numbers-button__button button' type='button'>8</button>
          <button className='numbers-button__button button' type='button'>9</button>
          <button className='numbers-button__button button' type='button'>,</button>
        </div>
        <button className='actions__result-button result-button' type='button'>=</button>
      </div>
    </div>
  );
}

export default Calculator;
