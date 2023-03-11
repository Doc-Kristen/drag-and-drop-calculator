const Canvas = (): JSX.Element => {
  return (
    <div className='canvas'>
      <div className='canvas__instruction instruction'>
        <span className='instruction__main-action'>Перетащите сюда</span>
        <span className='instruction__'>любой элемент из левой панели</span>
      </div>
    </div>
  );
}

export default Canvas;
