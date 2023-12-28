import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { MAIN_PATH, RESULT_PATH } from '../../constants';
import { GetPoketListResponseDto, GetPoketResponseDto, PoketListResponseDto } from '../../interfaces/response';
import { getPoketRequest } from '../../apis';
import { ResponseDto } from '../../interfaces';

interface Props {
  item : PoketListResponseDto;
}

export default function PoketListItem({item} : Props) {

  // state : properties //
  const {poketmonNumber, name , things, type, characters, specificity,
    individualHp, individualAttack, individualDefence, 
    individualSpecialAttack, individualSpecialDefence, individualSpeed,
    effortHp, effortAttack, effortDefence, effortSpecialAttack, effortSpecialDefence, effortSpeed,
    technologyOne, technologyTwo, technologyThree, technologyFour} = item;

  // state : 포켓몬 상태 //
  const [poket, setPoket] = useState<GetPoketResponseDto | null>(null);

  // function //
  const navigator = useNavigate();

  // function : get poket response //
  const getPoketResponse = (responseBody : GetPoketResponseDto | ResponseDto | null) => {
    if(!responseBody) return;
    const { code } = responseBody;
    if(code === 'DBE') alert('데이터베이스 오류입니다.');
    if(code === 'FA') alert('데이터 불러오기 실패!!');
    if(code !== 'SU') {
      navigator(MAIN_PATH()); 
      return;
    }
    setPoket(responseBody as GetPoketResponseDto);
  }

  // event handler //
  const onPoketClickHandler = () => {
    if(!poketmonNumber) return;
    getPoketRequest(poketmonNumber).then(getPoketResponse);
  }

  // render //
  return (
    <div id='poket-wrapper'>
      <div className='poket-badge-name'>{name}</div>
      <div className='poket-badge'>{things}</div>
      <div className='poket-badge'>{type}</div>
      <div className='poket-badge'>{characters}</div>
      <div className='poket-badge'>{specificity}</div>
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
