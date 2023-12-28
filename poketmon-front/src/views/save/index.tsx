import React, { ChangeEvent, useRef } from 'react'
import './style.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePoketSaveStore } from '../../stores';
import { PostPoketResponseDto } from '../../interfaces/response';
import { MAIN_PATH, SAVE_PATH } from '../../constants';
import { postPoketRequest } from '../../apis';
import PostPoketRequestDto from '../../interfaces/request/post-poket.request.dto';
import { ResponseDto } from '../../interfaces';

export default function Save() {

  // state : 요소 참조 상태 //
  const nameRef = useRef<HTMLInputElement | null>(null);
  const typeRef = useRef<HTMLInputElement | null>(null);
  const specificityRef = useRef<HTMLInputElement | null>(null);
  const charactersRef = useRef<HTMLInputElement | null>(null);
  const thingsRef = useRef<HTMLInputElement | null>(null);
  const individualHpRef = useRef<HTMLInputElement | null>(null);
  const individualAttackRef = useRef<HTMLInputElement | null>(null);
  const individualDefenceRef = useRef<HTMLInputElement | null>(null);
  const individualSpecialAttackRef = useRef<HTMLInputElement | null>(null);
  const individualSpecialDefenceRef = useRef<HTMLInputElement | null>(null);
  const individualSpeedRef = useRef<HTMLInputElement | null>(null);
  const effortHpRef = useRef<HTMLInputElement | null>(null);
  const effortAttackeRef = useRef<HTMLInputElement | null>(null);
  const effortDefenceRef = useRef<HTMLInputElement | null>(null);
  const effortSpecialAttackeRef = useRef<HTMLInputElement | null>(null);
  const effortSpecialDefenceRef = useRef<HTMLInputElement | null>(null);
  const effortSpeedRef = useRef<HTMLInputElement | null>(null);
  const technologyOneRef = useRef<HTMLInputElement | null>(null);
  const technologyTwoRef = useRef<HTMLInputElement | null>(null);
  const technologyThreeRef = useRef<HTMLInputElement | null>(null);
  const technologyFourRef = useRef<HTMLInputElement | null>(null);


  // state : 게시물 정보를 저장할 상태 //
  const { 
    name, type, specificity, characters, things,
    individualHp, individualAttack, individualDefence,
    individualSpecialAttack, individualSpecialDefence, individualSpeed,
    effortHp, effortAttack, effortDefence,
    effortSpecialAttack, effortSpecialDefence, effortSpeed,
    technologyOne, technologyTwo, technologyThree, technologyFour,
    setName, setType, setSpecificity, setCharacters, setThings,
    setIndividualHp, setIndividualAttack, setIndividualDefence,
    setIndividualSpecialAttack, setIndividualSpecialDefence, setIndividualSpeed,
    setEffortHp, setEffortAttack, setEffortDefence,
    setEffortSpecialAttack,  setEffortSpecialDefence, setEffortSpeed,
    setTechnologyOne, setTechnologyTwo, setTechnologyThree, setTechnologyFour,
    resetPoket
  } = usePoketSaveStore();


  //            function           //
  const navigator = useNavigate();

  // function : post poket response //
  const postPoketResponse = (responseBody : PostPoketResponseDto | ResponseDto | null ) => {
  if(!responseBody) return;
  const { code } = responseBody;
  if(code === 'DB') alert('데이터베이스 오류입니다.');
  if(code !== 'SU') return;

  resetPoket();

  navigator(MAIN_PATH());
}

// event handler : 이름 입력 이벤트 //
const onNameChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setName(value);
}
// event handler : 타입 입력 이벤트 //
const onTypeChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setType(value);
}
// event handler : 특성 입력 이벤트 //
const onSpecificityChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setSpecificity(value);
}
// event handler : 성격 입력 이벤트 //
const onCharactersChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setCharacters(value);
}
// event handler : 지닌물건 입력 이벤트 //
const onThingsChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setThings(value);
}
// event handler : 개체치 hp 입력 이벤트 //
const onIndividualHpChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setIndividualHp(value);
}
// event handler : 개체치 공격 입력 이벤트 //
const onIndividualAttackChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setIndividualAttack(value);
}
// event handler : 개체치 방어 입력 이벤트 //
const onIndividualDefenceChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setIndividualDefence(value);
}
// event handler : 개체치 특공 입력 이벤트 //
const onIndividualSpecialAttackChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setIndividualSpecialAttack(value);
}
// event handler : 개체치 특방 입력 이벤트 //
const onIndividualSpecialDefenceChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setIndividualSpecialDefence(value);
}
// event handler : 개체치 스피드 입력 이벤트 //
const onIndividualSpeedChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setIndividualSpeed(value);
}
// event handler : 노력치hp 입력 이벤트 //
const onEffortHpChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setEffortHp(value);
}
// event handler :노력치 공격 입력 이벤트 //
const onEffortAttackpChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setEffortAttack(value);
}
// event handler : 노력치 방어 입력 이벤트 //
const onEffortDefenceChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setEffortDefence(value);
}
// event handler :노력치 특공 입력 이벤트 //
const onEffortSpecialAttackChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setEffortSpecialAttack(value);
}  
// event handler : 노력치 특방 입력 이벤트 //
const onEffortSpecialDefenceChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setEffortSpecialDefence(value);
}
// event handler : 노력치 스피드 입력 이벤트 //
const onEffortSpeedChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
setEffortSpeed(value); 
}
// event handler : 기술1 입력 이벤트 //
const onTechnologyOneChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setTechnologyOne(value); 
}
// event handler : 기술2 입력 이벤트 //
const onTechnologyTwoChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setTechnologyTwo(value); 
}
// event handler : 기술3 입력 이벤트 //
const onTechnologyThreeChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setTechnologyThree(value); 
}
// event handler : 기술4 입력 이벤트 //
const onTechnologyFourChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setTechnologyFour(value); 
}
// event handler : 메인 이동 //
const onMainClickHandler = () => {
  navigator(MAIN_PATH());
}

// event handler : 저장하기 버튼 클릭 이벤트 //
const onSaveClickHandler = async () => {
  
   const requestBody : PostPoketRequestDto = {
     name, type, specificity, characters, things,
     individualHp, individualAttack, individualDefence,
     individualSpecialAttack, individualSpecialDefence, individualSpeed,
     effortHp, effortAttack, effortDefence,
     effortSpecialAttack, effortSpecialDefence, effortSpeed,
     technologyOne, technologyTwo, technologyThree, technologyFour
   }
   postPoketRequest(requestBody).then(postPoketResponse);
  
 };


//            render           //
  return (
    <div id='poket-sample-save'>
      <div className='poket-save-header'>
        <div className='poket-save-header-title' onClick={onMainClickHandler} >{'포켓몬 샘플 데이터'}</div>
      </div>
      <div className='poket-save-main'>
        <div className='poket-save-input-box'>
          <div className='poket-save-input-first'>
            <input ref={nameRef} className='poket-save-sample-name' placeholder='이름' onChange={onNameChangeHandler} value={name} ></input>
            <input ref={typeRef} className='poket-save-sample-type' placeholder='타입' onChange={onTypeChangeHandler} value={type}></input>
            <input ref={specificityRef} className='poket-save-sample-specificity' placeholder='특성' onChange={onSpecificityChangeHandler} value={specificity}></input>
            <input ref={charactersRef} className='poket-save-sample-character' placeholder='성격' onChange={onCharactersChangeHandler} value={characters} ></input>
            <input ref={thingsRef} className='poket-save-sample-thing' placeholder='지닌 물건' onChange={onThingsChangeHandler} value={things}></input>
          </div>
          <div className='poket-save-input-second'>
            <div className='poket-save-sample-value'>{'개체치'}</div>
            <input ref={individualHpRef} className='poket-save-sample-HP' placeholder='HP' onChange={onIndividualHpChangeHandler} value={individualHp} ></input>
            <input ref={individualAttackRef} className='poket-save-sample-attack' placeholder='공격' onChange={onIndividualAttackChangeHandler} value={individualAttack} ></input>
            <input ref={individualDefenceRef} className='poket-save-sample-defence' placeholder='방어' onChange={onIndividualDefenceChangeHandler} value={individualDefence}></input>
            <input ref={individualSpecialAttackRef} className='poket-save-sample-special-attack' placeholder='특수 공격' onChange={onIndividualSpecialAttackChangeHandler} value={individualSpecialAttack} ></input>
            <input ref={individualSpecialDefenceRef} className='poket-save-sample-special-defence' placeholder='특수 방어' onChange={onIndividualSpecialDefenceChangeHandler} value={individualSpecialDefence} ></input>
            <input ref={individualSpeedRef} className='poket-save-sample-speed' placeholder='스피드' onChange={onIndividualSpeedChangeHandler} value={individualSpeed}></input>
          </div>
          <div className='poket-save-input-third'>
          <div className='poket-save-sample-value'>{'노력치'}</div>
            <input ref={effortHpRef} className='poket-save-sample-HP' placeholder='HP' onChange={onEffortHpChangeHandler} value={effortHp} ></input>
            <input ref={effortAttackeRef} className='poket-save-sample-attack' placeholder='공격' onChange={onEffortAttackpChangeHandler} value={effortAttack} ></input>
            <input ref={effortDefenceRef} className='poket-save-sample-defence' placeholder='방어' onChange={onEffortDefenceChangeHandler} value={effortDefence} ></input>
            <input ref={effortSpecialAttackeRef} className='poket-save-sample-special-attack' placeholder='특수 공격' onChange={onEffortSpecialAttackChangeHandler} value={effortSpecialAttack} ></input>
            <input ref={effortSpecialDefenceRef} className='poket-save-sample-special-defence' placeholder='특수 방어' onChange={onEffortSpecialDefenceChangeHandler} value={effortSpecialDefence} ></input>
            <input ref={effortSpeedRef} className='poket-save-sample-speed' placeholder='스피드' onChange={onEffortSpeedChangeHandler}value={effortSpeed}></input>
          </div>
          <div className='poket-save-input-fourth'>
            <div className='poket-save-sample-technology'>{'기술배치'}</div>
            <input ref={technologyOneRef} className='poket-save-sample-technology-one' onChange={onTechnologyOneChangeHandler} value={technologyOne} ></input>
            <input ref={technologyTwoRef} className='poket-save-sample-technology-two' onChange={onTechnologyTwoChangeHandler}value={technologyTwo} ></input>
            <input ref={technologyThreeRef} className='poket-save-sample-technology-three' onChange={onTechnologyThreeChangeHandler} value={technologyThree}></input>
            <input ref={technologyFourRef} className='poket-save-sample-technology-four' onChange={onTechnologyFourChangeHandler}value={technologyFour} ></input>
          </div>
        </div>
          <div className='poket-save-button-box' onClick={onSaveClickHandler} >
            <button className='poket-save-button'>{'저장'}</button>
          </div>
      </div>
    </div>
  )
}