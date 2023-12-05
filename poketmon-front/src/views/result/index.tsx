import React from 'react'
import './style.css';

export default function Result() {

//            state           //
//            function           //
//            event handler           //
//            component           //
//            effect           //


//            render           //
  return (
    <div id='poket-sample-result'>
      <div className='poket-sample-result-header'>
        <div className='poket-sample-result-header-left'>
          <button className='poket-sample-result-back'>뒤로</button>
        </div>
        <div className='poket-sample-result-header-right'>포켓몬 샘플 데이터</div>
      </div>
      <div className='poket-sample-result-main-box'>
        <div className='poket-sample-result-search-box'>
          <div className='poket-sample-result-search'>
            <input className='poket-sample-result-search-input' placeholder='검색어를 입력해주세요.'></input>
          </div>
          <button className='poket-sample-result-search-button'>검색</button>
        </div>
        <div className='poket-sample-result-box'>
            <div className='poket-save-input-first'>
              <div className='poket-save-sample-name'>이름</div>
              <div className='poket-save-sample-type'>타입</div>
              <div className='poket-save-sample-specificity'>특성</div>
              <div className='poket-save-sample-character'>성격</div>
              <div className='poket-save-sample-thing'>지닌 물건</div>
            </div>
            <div className='poket-save-input-second'>
              <div className='poket-save-sample-value'>개체치</div>
              <div className='poket-save-sample-HP'>HP</div>
              <div className='poket-save-sample-attack'>공격</div>
              <div className='poket-save-sample-defence'>방어</div>
              <div className='poket-save-sample-special-attack'>특수 공격</div>
              <div className='poket-save-sample-special-defence'>특수 방어</div>
              <div className='poket-save-sample-speed'>스피드</div>
            </div>
            <div className='poket-save-input-third'>
            <div className='poket-save-sample-value'>노력치</div>
              <div className='poket-save-sample-HP'>HP</div>
              <div className='poket-save-sample-attack'>공격</div>
              <div className='poket-save-sample-defence'>방어</div>
              <div className='poket-save-sample-special-attack'>특수 공격</div>
              <div className='poket-save-sample-special-defence'>특수 방어</div>
              <div className='poket-save-sample-speed'>스피드</div>
            </div>
            <div className='poket-save-input-fourth'>
              <div className='poket-save-sample-technology'>기술배치</div>
              <div className='poket-save-sample-technology-one'>1</div>
              <div className='poket-save-sample-technology-two'>2</div>
              <div className='poket-save-sample-technology-three'>3</div>
              <div className='poket-save-sample-technology-four'>4</div>
            </div>
          </div>
      </div>
    </div>
  )
}