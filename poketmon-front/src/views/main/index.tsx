import React, { useState } from 'react'
import './style.css';
import {useNavigate} from "react-router-dom";

//            component           //
export default function Main() {

//            state           //
const [name, setName] = useState<String>('');

//            function           //
const navigator = useNavigate();

//            event handler           //
//            component           //
//            effect           //
const onSaveClickHandler = () => {
  navigator('/save');
};

const onResultSearchClickHandler = () => {
  navigator('/result');
};

//            render           //
  return (
    <div id='poket-sample'>
        <div className='poket-header'>포켓몬 샘플 데이터</div>
        <div className='poket-main-box'>
          <div className='poket-main-container'>
            <div className='poket-main-button-box'>
              <button className='poket-main-button' onClick={onSaveClickHandler}>입력</button>
            </div>
            <div className='poket-main-list-box'>
              <div className='poket-main-list-title'>저장된 포켓몬 목록</div>
              <div className='poket-main-list-content'>
                {/* <InputBox name='피카츄'/> */}
              </div>
            </div>
            <div className='poket-main-search'>
              <div className='poket-main-search-input-box'>
                <input className='poket-main-search-input' placeholder='검색어를 입력해주세요.' />
              </div>
              <button className='poket-main-search-button' onClick={onResultSearchClickHandler}>검색</button>
            </div>
          </div>
        </div>
    </div>
  )
}
