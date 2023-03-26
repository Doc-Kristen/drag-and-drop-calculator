import { useAppDispatch, useAppSelector } from '../../hooks';
import { setModeAction } from '../../store/action';
import { getModeStatus } from '../../store/mode-process/selectors';
import './toggle.scss';

const Toggle = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isModeBuilding = useAppSelector(getModeStatus);
  console.log(isModeBuilding);
  return (
    <div className="container__toggle toggle">
      <div className="toggle__button-slider button-slider">
        <label htmlFor='checkbox-toggle' className='visually-hidden'>Переключатель режимов конструктора</label>
        <input
          type="checkbox"
          className="checkbox"
          id='checkbox-toggle'
          checked={isModeBuilding}
          onChange={
            () => dispatch(setModeAction(!isModeBuilding))
          }
        ></input>
        <div className="knobs">
          <div className='knobs__button button--checkbox'>
            <svg className='knobs__checbox-icon checkbox-icon'
              aria-hidden="true" focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none">
              <path stroke={isModeBuilding ? '#5D5FEF' : '#4D5562'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.8 11.8a2.5 2.5 0 1 0-3.6-3.6 2.5 2.5 0 0 0 3.6 3.6Z" />
              <path stroke={isModeBuilding ? '#5D5FEF' : '#4D5562'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 10a8.3 8.3 0 0 1 16 0 8.3 8.3 0 0 1-16 0Z" /></svg>
            <span>Runtime</span>
          </div>
          <div className='knobs__button button--checkbox'>
            <svg className='knobs__checbox-icon checkbox-icon'
              aria-hidden="true" focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none">
              <path stroke={isModeBuilding ? '#4D5562' : '#5D5FEF'} d="M7.5 13.3333L4.16666 10L7.5 6.66668M12.5 6.66668L15.8333 10L12.5 13.3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Constructor</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toggle;
