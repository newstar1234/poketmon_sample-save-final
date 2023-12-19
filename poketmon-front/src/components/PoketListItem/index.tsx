import React from 'react';
import './style.css';
import { PoketNameListResponseDto } from '../../interfaces/response';

interface Props {
  item : PoketNameListResponseDto;
}

export default function PoketListItem({item} : Props) {

  const { name } = item;

  return (
    <div className='poket-name-badge'>{name}</div>
  )
}
