import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import './style.css';
import { useNavigate } from "react-router-dom";
import { getPoketNameListRequest } from '../../apis';
import { GetPoketNameListResponseDto, PoketNameListResponseDto } from '../../interfaces/response';
import { ResponseDto } from '../../interfaces';
import PoketListItem from '../../components/PoketListItem';

//            component           //
export default function Main() {

  // state : 포켓몬 이름 리스트상태 //
  const [nameList, setNameList] = useState<PoketNameListResponseDto[]>([]);


//            function           //
const navigator = useNavigate();

//            function           //
const getPoketNameListResponse = (responseBody: GetPoketNameListResponseDto | ResponseDto | null) => {
  if(!responseBody) return;
  const { code } = responseBody;
  if(code === 'DB') return;
  if(code !== 'SU') return;

  const { nameList } = responseBody as GetPoketNameListResponseDto;
  setNameList(nameList);
}

// event handler //
const onPoketNameListClickHandler = () => {
  navigator('');
};

const onSaveClickHandler = () => {
  navigator('/save');
};

const onResultSearchClickHandler = () => {
  navigator('/result');
};

// effect //
useEffect(() => {
  // getPoketNameListRequest().then(getPoketNameListResponse);
}, []);


//            render           //
  return (
    <div id='poket-main-wrapper'>
      <div className='poket-main-header'>
        <div className='poket-main-title-box'>
          <div className='poket-main-title'>{'포켓몬스터 실전 개체값 저장소'}</div>
        </div>  
      </div>      
      <div className='poket-main-contents-container'>
        <div className='poket-main-contents-box'>
          <div className='poket-main-contents-title-box'>
            <div className='poket-main-contents-title'>{'저장된 포켓몬 목록'}</div>
            <button className='poket-main-button'>{'저장하기'}</button>
          </div>
          <div className='poket-main-contents-save-box'>
            <div className='poket-main-contents-save-name'>
              <PoketListItem />
              <PoketListItem />
              <PoketListItem />
              <PoketListItem />
              <PoketListItem />
            </div>
          </div>
        </div>
        <div className='poket-main-input-box'>
          <input className='poket-main-input' />
          <button className='poket-main-button'>{'검색'}</button>
        </div>
      </div>      
    </div>
  )
}
