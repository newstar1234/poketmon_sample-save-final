import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import './style.css';
import { useNavigate, useParams } from "react-router-dom";
import PoketListItem from '../../components/PoketListItem';
import { usePagination } from '../../hooks';
import { MAIN_PATH, MAIN_POKET_NAME_LIST } from '../../constants';
import Pagination from '../../components/Pagination';
import { GetSearchPoketListResponseDto, PoketListResponseDto } from '../../interfaces/response';
import { ResponseDto } from '../../interfaces';
import { getSearchPoketListRequest } from '../../apis';


//            component           //
export default function Search() {


  // state : 페이지네이션 관련 상태 //
  const{totalPage, currentPage, currentSection, onPageClickHandler, onPreviousClickHandler, onNextClickHandler, changeSection} = usePagination();

  // state : 전체리스트 상태 //
  const [searchList, setSearchList] = useState<PoketListResponseDto[]>([]);

  // state : 현재 페이지에서 보여줄 포켓몬 리스트상태 //
  const [viewPoketList, setViewPoketList] = useState<PoketListResponseDto[]>([]);

  // state : 검색어 상태 //
  const { name } = useParams();
  const { poketmonNumber } = useParams();

  // state : 검색 게시물 수 //
  const [poketCount, setPoketCount] = useState<number>(0);

  
//            function           //
const navigator = useNavigate();


//            function           //
// 페이지네이션 함수 //
const getViewPoketList = (list : PoketListResponseDto[]) => {
  const startIndex = MAIN_POKET_NAME_LIST * (currentPage -1);
  const lastIndex = list.length > MAIN_POKET_NAME_LIST * currentPage ? 
                    MAIN_POKET_NAME_LIST * currentPage : list.length;
  const viewList = list.slice(startIndex, lastIndex);
  setViewPoketList(viewList);
};

// function : get search poket list response //
const getSearchPoketListResponse = (responseBody : GetSearchPoketListResponseDto | ResponseDto | null) => {
  if(!responseBody) return;
  const { code } = responseBody;
  if(code === 'DE') alert('데이터베이스 오류입니다.');
  if(code !== 'SU') return;

  const { list } = responseBody as GetSearchPoketListResponseDto;
  console.log(list);
}


// event handler : 메인 클릭 //
const onMainClickHandler = () => {
  navigator(MAIN_PATH());
}


// effect //
useEffect(() => {
  if(!name) return;
  getSearchPoketListRequest(name).then(getSearchPoketListResponse);
}, [name]);

useEffect(() => {
  if(poketmonNumber) changeSection(poketCount, MAIN_POKET_NAME_LIST);
}, [currentSection]);
useEffect(() => {
  getViewPoketList(searchList);
}, [currentPage]);


//            render           //
  return (
    <div id='poket-search-wrapper'>
      <div className='poket-search-header'>
        <div className='poket-search-title-box'>
          <div className='poket-search-title' onClick={onMainClickHandler} >{'포켓몬스터 실전 개체값 저장소'}</div>
        </div>  
      </div>      
      <div className='poket-search-contents-container'>
        <div className='poket-search-contents-box'>
          <div className='poket-search-contents-title-box'>
            <div className='poket-search-contents-title'>{'저장된 포켓몬 목록'}</div>
          </div>
          <div className='poket-search-contents-save-box'>
            <div className='poket-search-contents-save-name' >
              {viewPoketList.map((item) => (<PoketListItem item={item} />))}
            </div>
            <div className='poket-search-pagination'>
            <Pagination
            totalPage={totalPage}
            currentPage={currentPage}
            onPreviousClickHandler={onPreviousClickHandler}
            onNextClickHandler={onNextClickHandler}
            onPageClickHandler={onPageClickHandler} />
            </div>
          </div>
        </div>
        <div className='poket-search-input-box'>
          <input className='poket-search-input' />
          <div className='poket-search-button' >{'검색'}</div>
        </div>
      </div>      
    </div>
  )
}
