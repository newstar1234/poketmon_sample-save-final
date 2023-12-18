import React, { useEffect } from 'react';
import './style.css';
import { PoketNameListResponseDto } from '../../interfaces/response';
import { useParams } from 'react-router-dom';
import { getPoketNameListRequest } from '../../apis';

interface Props {
  item : PoketNameListResponseDto;
}

export default function PoketNameListItem({item} : Props) {

  // state : properties //
  const { name } = item;

  const { poketmonNumber } = useParams();

  // effect  //
  useEffect(() => {
    if(!poketmonNumber) return;
    console.log('22');
  }, [poketmonNumber]);

  return (
    <div id='poket-name-list-wrapper'>
      <div className='poket-name-list-box'>
        <div className='poket-name-list-content'>{name}</div>
      </div>
    </div>
  )
}
