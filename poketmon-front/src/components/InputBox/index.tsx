import {ChangeEvent, forwardRef, KeyboardEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

interface Props{
  name : string;
  onChange? : (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown? : (event : KeyboardEvent<HTMLInputElement>) => void;
}

const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
// state //
const navigator = useNavigate();

// state: properties //
const { name, onChange, onKeyDown } = props;


// event handler : Key 처리 //
const onKeyDownHandler = (event : KeyboardEvent<HTMLInputElement>) => {
  if(!onKeyDown) return;
  onKeyDown(event);
};


// render //
  return (
    <div className='input-box-container'>
      <input ref={ref} className='input-box-name' onChange={onChange} onKeyDown={onKeyDownHandler} />
    </div>
  )

});

export default InputBox;