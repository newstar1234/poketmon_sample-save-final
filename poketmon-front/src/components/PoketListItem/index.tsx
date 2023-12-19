import React from 'react';
import './style.css';
import { PoketNameListResponseDto } from '../../interfaces/response';

interface Props {
  listItem : PoketNameListResponseDto;
}

export default function PoketListItem({listItem} : Props) {

  const { name } = listItem;

  return (
    <div className='poket-name-badge'>{name}</div>
  )
}
