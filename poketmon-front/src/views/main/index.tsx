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
  if(code === 'FA') return;
  if(code !== 'SU') return;

  const { nameList } = responseBody as GetPoketNameListResponseDto;
  setNameList(nameList);
  console.log('나와라');
}

// event handler //
const onSaveClickHandler = () => {
  navigator('/save');
};

const onResultSearchClickHandler = () => {
  navigator('/result');
};

// effect //
useEffect(() => {
  getPoketNameListRequest().then(getPoketNameListResponse);
  console.log('1111');
}, []);


//            render           //
  return (
    <div id='poket-sample'>
        <div className='poket-header'>{'포켓몬 샘플 데이터'}</div>
        <div className='poket-main-box'>
          <div className='poket-main-container'>
            <div className='poket-main-button-box'>
              <button className='poket-main-button' onClick={onSaveClickHandler}>{'입력'}</button>
            </div>
            <div className='poket-main-list-box'>
              <div className='poket-main-list-title'>{'저장된 포켓몬 목록'}</div>
              <div className='poket-main-list-content'>
                <div className='poket-main-list-name-box'>
                  {nameList.map((item) => (<PoketListItem listItem={item}/>))}
                </div>
              </div>
            </div>
            <div className='poket-main-search'>
              <div className='poket-main-search-input-box'>
                <input className='poket-main-search-input' placeholder='검색어를 입력해주세요.' />
              </div>
              <button className='poket-main-search-button' onClick={onResultSearchClickHandler}>{'검색'}</button>
            </div>
          </div>
        </div>
    </div>
  )
}
