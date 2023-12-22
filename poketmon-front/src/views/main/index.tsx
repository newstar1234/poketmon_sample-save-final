import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import './style.css';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getPoketNameListRequest, postPoketRequest } from '../../apis';
import { ResponseDto } from '../../interfaces';
import PoketListItem from '../../components/PoketListItem';
import { usePagination } from '../../hooks';
import { MAIN_POKET_NAME_LIST, SAVE_PATH } from '../../constants';
import Pagination from '../../components/Pagination';
import { GetPoketNameListResponseDto, PoketNameListResponseDto, PostPoketResponseDto } from '../../interfaces/response';
import PostPoketRequestDto from '../../interfaces/request/post-poket.request.dto';
import { usePoketSaveStore } from '../../stores';



//            component           //
export default function Main() {


  // state : 페이지네이션 관련 상태 //
  const{totalPage, currentPage, currentSection, onPageClickHandler, onPreviousClickHandler, onNextClickHandler, changeSection} = usePagination();

  // state : 현재 페이지에서 보여줄 포켓몬 이름 리스트상태 //
  const [viewNameList, setViewNameList] = useState<PoketNameListResponseDto[]>([]);
  // state : 최신 리스트 상태 //
  const [currentList, setCurrentList] = useState<PoketNameListResponseDto[]>([]);
  
//            function           //
const navigator = useNavigate();


//            function           //
// 페이지네이션 함수 //
const getViewPoketList = (list : PoketNameListResponseDto[]) => {
  const startIndex = MAIN_POKET_NAME_LIST * (currentPage -1);
  const lastIndex = list.length > MAIN_POKET_NAME_LIST * currentPage ? 
                    MAIN_POKET_NAME_LIST * currentPage : list.length;
  const viewNameList = list.slice(startIndex, lastIndex);
  setViewNameList(viewNameList);
};

//            function           //
const getPoketNameListResponse = (responseBody: GetPoketNameListResponseDto | ResponseDto | null) => {
  if(!responseBody) return;
  const { code } = responseBody;
  if(code === 'DB') alert('데이터베이스 오류입니다.');
  if(code !== 'SU') return;

  const { poketNameList } = responseBody as GetPoketNameListResponseDto;
  changeSection(poketNameList.length, 5);
  setCurrentList(poketNameList);
  getViewPoketList(poketNameList);
}



// event handler //
const onPoketNameListClickHandler = () => {
  navigator('');
};

// event handler : 저장하기 버튼 클릭 이벤트 //
const onSaveClickHandler =  () => {
  navigator('/save');
};

const onResultSearchClickHandler = () => {
  navigator('/result');
};

// effect //
useEffect (() => {
  getPoketNameListRequest().then(getPoketNameListResponse);
}, [currentSection]);

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
            <button className='poket-main-button' onClick={onSaveClickHandler} >{'저장하기'}</button>
          </div>
          <div className='poket-main-contents-save-box'>
            <div className='poket-main-contents-save-name'>
              {viewNameList.map((item) => (<PoketListItem item={item}/>))}
            </div>
            <div className='poket-main-pagination'>
            <Pagination
            totalPage={totalPage}
            currentPage={currentPage}
            onPreviousClickHandler={onPreviousClickHandler}
            onNextClickHandler={onNextClickHandler}
            onPageClickHandler={onPageClickHandler} />
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
