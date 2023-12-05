import React from 'react'
import './style.css';

export default function Save() {

//            state           //
//            function           //
//            event handler           //
//            component           //
//            effect           //


//            render           //
  return (
    <div id='poket-sample-save'>
      <div className='poket-save-header'>포켓몬 샘플 데이터</div>
      <div className='poket-save-main'>
        <div className='poket-save-input-box'>
          <div className='poket-save-input-first'>
            <input className='poket-save-sample-name' placeholder='이름을 입력해주세요.'></input>
            <input className='poket-save-sample-type' placeholder='타입을 입력해주세요.'></input>
            <input className='poket-save-sample-specificity' placeholder='특성을 입력해주세요.'></input>
            <input className='poket-save-sample-character' placeholder='성격을 입력해주세요.'></input>
            <input className='poket-save-sample-thing' placeholder='지닌 물건을 입력해주세요.'></input>
          </div>
          <div className='poket-save-input-second'>
            <div className='poket-save-sample-value'>개체치</div>
            <input className='poket-save-sample-HP' placeholder='HP를 입력해주세요.'></input>
            <input className='poket-save-sample-attack' placeholder='공격을 입력해주세요.'></input>
            <input className='poket-save-sample-defence' placeholder='방어를 입력해주세요.'></input>
            <input className='poket-save-sample-special-attack' placeholder='특수 공격을 입력해주세요.'></input>
            <input className='poket-save-sample-special-defence' placeholder='특수 방어를 입력해주세요.'></input>
            <input className='poket-save-sample-speed' placeholder='스피드를 입력해주세요.'></input>
          </div>
          <div className='poket-save-input-third'>
          <div className='poket-save-sample-value'>노력치</div>
            <input className='poket-save-sample-HP' placeholder='HP를 입력해주세요.'></input>
            <input className='poket-save-sample-attack' placeholder='공격을 입력해주세요.'></input>
            <input className='poket-save-sample-defence' placeholder='방어를 입력해주세요.'></input>
            <input className='poket-save-sample-special-attack' placeholder='특수 공격을 입력해주세요.'></input>
            <input className='poket-save-sample-special-defence' placeholder='특수 방어를 입력해주세요.'></input>
            <input className='poket-save-sample-speed' placeholder='스피드를 입력해주세요.'></input>
          </div>
          <div className='poket-save-input-fourth'>
            <div className='poket-save-sample-technology'>기술배치</div>
            <input className='poket-save-sample-technology-one'></input>
            <input className='poket-save-sample-technology-two'></input>
            <input className='poket-save-sample-technology-three'></input>
            <input className='poket-save-sample-technology-four'></input>
          </div>
        </div>
          <div className='poket-save-button-box'>
            <button className='poket-save-button'>저장</button>
          </div>
      </div>
    </div>
  )
}