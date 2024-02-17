import React, { useState } from 'react';
import './style.css';
import {  RESULT_PATH } from '../../constants';
import { PoketListResponseDto } from '../../interfaces/response';
import { useNavigate } from 'react-router-dom';

interface Props {
  item : PoketListResponseDto;
}

export default function PoketListItem({item} : Props) {

  // state : properties //
  const { poketmonNumber, name , things, type, characters, specificity,
    individualHp, individualAttack, individualDefence, 
    individualSpecialAttack, individualSpecialDefence, individualSpeed,
    effortHp, effortAttack, effortDefence, effortSpecialAttack, effortSpecialDefence, effortSpeed,
    technologyOne, technologyTwo, technologyThree, technologyFour } = item;

  // function //
  const navigator = useNavigate();

  // event handler //
  const onPoketClickHandler = () => {
    if(!poketmonNumber) return;
    navigator(RESULT_PATH(poketmonNumber));
  }

  // render //
  return (
    <div className='poket-wrapper' onClick={onPoketClickHandler}>
      <div className='poket-badge-name-box'>
        <div className='poket-badge-name'>{name}</div>
      </div>
      <div className='poket-badge'>{type}</div>
      <div className='poket-badge'>{specificity}</div>
      <div className='poket-badge'>{characters}</div>
      <div className='poket-badge'>{things}</div>
      <div className='poket-badge'>{individualHp}</div>
      <div className='poket-badge'>{individualAttack}</div>
      <div className='poket-badge'>{individualDefence}</div>
      <div className='poket-badge'>{individualSpecialAttack}</div>
      <div className='poket-badge'>{individualSpecialDefence}</div>
      <div className='poket-badge'>{individualSpeed}</div>
      <div className='poket-badge'>{effortHp}</div>
      <div className='poket-badge'>{effortAttack}</div>
      <div className='poket-badge'>{effortDefence}</div>
      <div className='poket-badge'>{effortSpecialAttack}</div>
      <div className='poket-badge'>{effortSpecialDefence}</div>
      <div className='poket-badge'>{effortSpeed}</div>
      <div className='poket-badge'>{technologyOne}</div>
      <div className='poket-badge'>{technologyTwo}</div>
      <div className='poket-badge'>{technologyThree}</div>
      <div className='poket-badge'>{technologyFour}</div>
    </div>
  )
}
