import React from 'react';
import './style.css';
import { useNavigate, } from 'react-router-dom';
import { POKET_NUMBER_VARIABLE, RESULT_PATH } from '../../constants';
import { PoketNameListResponseDto } from '../../interfaces/response';

interface Props {
  item : PoketNameListResponseDto;
}

export default function PoketListItem({item} : Props) {

  // state : properties //
  const {poketmonNumber, name} = item;

  // function //
  const navigator = useNavigate();

  // event handler //
  const onPoketNameClickHandler = () => {
  navigator(RESULT_PATH(POKET_NUMBER_VARIABLE));
  }

  // render //
  return (
    <div id='poket-name-wrapper' onClick={onPoketNameClickHandler}>
      <div className='poket-name-badge'>{name}</div>
    </div>
  )
}
