const Toggle = (): JSX.Element => {
  return (
    <div className='toggle'>
    <div className='toggle__button'>
      <button className='toggle__button button button--disabled' type='button'>Runtime</button>
      <button className='toggle__button button button--enabled' type='button'>Constructor</button>
    </div>
  </div>
  );
}

export default Toggle;
