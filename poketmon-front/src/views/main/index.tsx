import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import './style.css';
import {useNavigate, useParams} from "react-router-dom";
import { usePagination } from '../../hooks';
import Pagination from '../../components/Pagination';

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


//            function           //
const navigator = useNavigate();


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
                  {<></>}
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
