import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import './style.css';
import {useNavigate, useParams} from "react-router-dom";
import { getPoketNameListRequest } from '../../apis';
import { usePagination } from '../../hooks';
import { GetPoketNameListResponseDto, PoketNameListResponseDto } from '../../interfaces/response';
import { ResponseDto } from '../../interfaces';
import { MAIN_POKET_NAME_LIST } from '../../constants';
import Pagination from '../../components/Pagination';
import PoketNameListItem from '../../components/PoketNameListItem';

//            component           //
export default function Main() {

  // state : 페이지네이션 함수 //
  const { totalPage, currentPage, currentSection, onPageClickHandler, onPreviousClickHandler, onNextClickHandler, changeSection } = usePagination();

  // state : 포켓몬 이름 요소 참조 상태 //
  const nameRef = useRef<HTMLInputElement | null>(null);
  // state : 포켓몬 이름 상태 //
  const [name, setName] = useState<string>('');
  // state : 게시물 번호 path 상태 //
  const { poketmonNumber } = useParams();

  // state : 현재 페이지에서 보여줄 포켓몬 이름 리스트 상태 //
  const [poketNameList, setPoketNameList] = useState<PoketNameListResponseDto[]>([]);


//            function           //
const navigator = useNavigate();

// function : 페이지네이션 함수 //
const getViewPoketNameList = (list: PoketNameListResponseDto[]) => {
  const startIndex = MAIN_POKET_NAME_LIST * (currentPage -1);
  const lastIndex = list.length > MAIN_POKET_NAME_LIST * currentPage ? MAIN_POKET_NAME_LIST * currentPage : list.length;
  const viewPoketList = list.slice(startIndex, lastIndex);
  setPoketNameList(viewPoketList);
}

// function : get poket name list response 처리 함수 //
const getPoketNameListResponse = (responseBody: GetPoketNameListResponseDto | ResponseDto | null) => {
  if(!responseBody) return;
  const { code } = responseBody;
  if(code === 'DE') alert('데이터베이스 에러');
  if(code !== 'SU') return;

  const { list } = responseBody as GetPoketNameListResponseDto;
  changeSection(list.length, MAIN_POKET_NAME_LIST);
  getViewPoketNameList(list);
  setPoketNameList(list);
}

// event handler //
const onSaveClickHandler = () => {
  navigator('/save');
};

const onResultSearchClickHandler = () => {
  navigator('/result');
};




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
                  {poketNameList.map((item) => (<PoketNameListItem item ={item}/>)) }
                </div>
                <Pagination 
                totalPage={totalPage}
                currentPage={currentPage}
                onPreviousClickHandler={onPreviousClickHandler}
                onNextClickHandler={onNextClickHandler}
                onPageClickHandler={onPageClickHandler} />
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
