import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { RESULT_PATH } from '../../constants';

interface Props{
  name : String;
}

export default function InputBox({name} : Props) {
// state //
const navigator = useNavigate();

// function //
// event handler //
const onClickNameHandler = () => {
  navigator(RESULT_PATH());
}
// component //
// effect //

// render //
  return (
    <div className='input-box-container'>
      <div className='input-box-name' onClick={onClickNameHandler}>{name}</div>
    </div>
  )
}