import React, { useState } from 'react';
import './style.css';
import { useNavigate, useParams, } from 'react-router-dom';
import { MAIN_PATH, POKET_NUMBER_VARIABLE, RESULT_PATH } from '../../constants';
import { GetPoketNameResponseDto, GetPoketResponseDto, PoketNameListResponseDto } from '../../interfaces/response';
import { getPoketRequest } from '../../apis';
import { ResponseDto } from '../../interfaces';

interface Props {
  item : PoketNameListResponseDto;
}

export default function PoketListItem({item} : Props) {

  // state : properties //
  const {poketmonNumber, name} = item;


  // state : 게시물 상태 //
  const [poket, setPoket] = useState<GetPoketNameResponseDto | null>(null);

  // function //
  const navigator = useNavigate();

  // function : get poket response //
  const getPoketResponse = (responseBody : GetPoketNameResponseDto | ResponseDto | null) => {
    if(!responseBody) return;
    const { code } = responseBody;
    if(code === 'DBE') alert('데이터베이스 오류입니다.');
    if(code === 'FA') alert('데이터 불러오기 실패!!');
    if(code !== 'SU') {
      navigator(MAIN_PATH()); 
      return;
    }
    setPoket(responseBody as GetPoketNameResponseDto);
  }

  // event handler //
  const onPoketNameClickHandler = () => {
    // if(!poketmonNumber) return;
    console.log(poketmonNumber);
    getPoketRequest(poketmonNumber).then(getPoketResponse);
    navigator(RESULT_PATH(poketmonNumber));
  }

  // render //
  return (
    <div id='poket-name-wrapper' onClick={onPoketNameClickHandler}>
      <div className='poket-name-badge'>{name}</div>
    </div>
  )
}
