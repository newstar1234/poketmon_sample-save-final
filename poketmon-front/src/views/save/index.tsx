import React, { ChangeEvent } from 'react'
import './style.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { usePoketSaveStore } from '../../stores';
import { PostPoketResponseDto } from '../../interfaces/response';
import { MAIN_PATH, SAVE_PATH } from '../../constants';
import { postPoketRequest } from '../../apis';
import PostPoketRequestDto from '../../interfaces/request/post-poket.request.dto';
import { ResponseDto } from '../../interfaces';

export default function Save() {

  // state : 번호 path variable //
  const { poketmonNumber } = useParams();
  // state : path name //
  const { pathname } = useLocation();
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

  // function : post //
  const postPoketResponse = (responseBody : PostPoketResponseDto | ResponseDto | null ) => {
  if(!responseBody) return;
  const { code } = responseBody;
  if(code === 'DB') alert('데이터베이스 오류입니다.');
  if(code !== 'SU') return;

  resetPoket();

  navigator(SAVE_PATH());
}

// event handler : 이름 입력 이벤트 //
const onNameChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setName(event.target.value);
}
// event handler : 타입 입력 이벤트 //
const onTypeChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setType(event.target.value);
}
// event handler : 특성 입력 이벤트 //
const onSpecificityChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setSpecificity(event.target.value);
}
// event handler : 성격 입력 이벤트 //
const onCharactersChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setCharacters(event.target.value);
}
// event handler : 지닌물건 입력 이벤트 //
const onThingsChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setThings(event.target.value);
}
// event handler : 개체치 hp 입력 이벤트 //
const onIndividualHpChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setIndividualHp(event.target.value);
}
// event handler : 개체치 공격 입력 이벤트 //
const onIndividualAttackChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setIndividualAttack(event.target.value);
}
// event handler : 개체치 방어 입력 이벤트 //
const onIndividualDefenceChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setIndividualDefence(event.target.value);
}
// event handler : 개체치 특공 입력 이벤트 //
const onIndividualSpecialAttackChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setIndividualSpecialAttack(event.target.value);
}
// event handler : 개체치 특방 입력 이벤트 //
const onIndividualSpecialDefenceChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setIndividualSpecialDefence(event.target.value);
}
// event handler : 개체치 스피드 입력 이벤트 //
const onIndividualSpeedChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setIndividualSpeed(event.target.value);
}
// event handler : 노력치hp 입력 이벤트 //
const onEffortHpChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setEffortHp(event.target.value);
}
// event handler :노력치 공격 입력 이벤트 //
const onEffortAttackpChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setEffortAttack(event.target.value);
}
// event handler : 노력치 방어 입력 이벤트 //
const onEffortDefenceChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setEffortDefence(event.target.value);
}
// event handler :노력치 특공 입력 이벤트 //
const onEffortSpecialAttackChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setEffortSpecialAttack(event.target.value);
}  
// event handler : 노력치 특방 입력 이벤트 //
const onEffortSpecialDefenceChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setEffortSpecialDefence(event.target.value);
}
// event handler : 노력치 스피드 입력 이벤트 //
const onEffortSpeedChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
setEffortSpeed(event.target.value); 
}
// event handler : 기술1 입력 이벤트 //
const onTechnologyOneChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setTechnologyOne(event.target.value); 
}
// event handler : 기술2 입력 이벤트 //
const onTechnologyTwoChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setTechnologyTwo(event.target.value); 
}
// event handler : 기술3 입력 이벤트 //
const onTechnologyThreeChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setTechnologyThree(event.target.value); 
}
// event handler : 기술4 입력 이벤트 //
const onTechnologyFourChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
  setTechnologyFour(event.target.value); 
}
// event handler : 메인 이동 //
const onMainClickHandler = () => {
  navigator(MAIN_PATH());
}

// event handler : 저장하기 버튼 클릭 이벤트 //
const onSaveClickHandler = async () => {
  
  if(pathname === SAVE_PATH()) {
   const requestBody : PostPoketRequestDto = {
     name, 
     type,
     specificity,
     characters,
     things,
     individualHp,
     individualAttack,
     individualDefence,
     individualSpecialAttack,
     individualSpecialDefence,
     individualSpeed,
     effortHp,
     effortAttack,
     effortDefence,
     effortSpecialAttack,
     effortSpecialDefence,
     effortSpeed,
     technologyOne,
     technologyTwo,
     technologyThree,
     technologyFour,
   }
   postPoketRequest(requestBody).then(postPoketResponse);
  }
 };
//            component           //
//            effect           //


//            render           //
  return (
    <div id='poket-sample-save'>
      <div className='poket-save-header'>
        <div className='poket-save-header-title' onClick={onMainClickHandler} >{'포켓몬 샘플 데이터'}</div>
      </div>
      <div className='poket-save-main'>
        <div className='poket-save-input-box'>
          <div className='poket-save-input-first'>
            <input className='poket-save-sample-name' placeholder='이름을 입력해주세요.' onChange={onNameChangeHandler} ></input>
            <input className='poket-save-sample-type' placeholder='타입을 입력해주세요.' onChange={onTypeChangeHandler} ></input>
            <input className='poket-save-sample-specificity' placeholder='특성을 입력해주세요.' onChange={onSpecificityChangeHandler} ></input>
            <input className='poket-save-sample-character' placeholder='성격을 입력해주세요.' onChange={onCharactersChangeHandler} ></input>
            <input className='poket-save-sample-thing' placeholder='지닌 물건을 입력해주세요.' onChange={onThingsChangeHandler} ></input>
          </div>
          <div className='poket-save-input-second'>
            <div className='poket-save-sample-value'>{'개체치'}</div>
            <input className='poket-save-sample-HP' placeholder='HP를 입력해주세요.' onChange={onIndividualHpChangeHandler} ></input>
            <input className='poket-save-sample-attack' placeholder='공격을 입력해주세요.' onChange={onIndividualAttackChangeHandler} ></input>
            <input className='poket-save-sample-defence' placeholder='방어를 입력해주세요.' onChange={onIndividualDefenceChangeHandler} ></input>
            <input className='poket-save-sample-special-attack' placeholder='특수 공격을 입력해주세요.' onChange={onIndividualSpecialAttackChangeHandler} ></input>
            <input className='poket-save-sample-special-defence' placeholder='특수 방어를 입력해주세요.' onChange={onIndividualSpecialDefenceChangeHandler} ></input>
            <input className='poket-save-sample-speed' placeholder='스피드를 입력해주세요.' onChange={onIndividualSpeedChangeHandler} ></input>
          </div>
          <div className='poket-save-input-third'>
          <div className='poket-save-sample-value'>{'노력치'}</div>
            <input className='poket-save-sample-HP' placeholder='HP를 입력해주세요.' onChange={onEffortHpChangeHandler} ></input>
            <input className='poket-save-sample-attack' placeholder='공격을 입력해주세요.' onChange={onEffortAttackpChangeHandler} ></input>
            <input className='poket-save-sample-defence' placeholder='방어를 입력해주세요.' onChange={onEffortDefenceChangeHandler} ></input>
            <input className='poket-save-sample-special-attack' placeholder='특수 공격을 입력해주세요.' onChange={onEffortSpecialAttackChangeHandler} ></input>
            <input className='poket-save-sample-special-defence' placeholder='특수 방어를 입력해주세요.' onChange={onEffortSpecialDefenceChangeHandler} ></input>
            <input className='poket-save-sample-speed' placeholder='스피드를 입력해주세요.' onChange={onEffortSpeedChangeHandler} ></input>
          </div>
          <div className='poket-save-input-fourth'>
            <div className='poket-save-sample-technology'>{'기술배치'}</div>
            <input className='poket-save-sample-technology-one' onChange={onTechnologyOneChangeHandler} ></input>
            <input className='poket-save-sample-technology-two' onChange={onTechnologyTwoChangeHandler} ></input>
            <input className='poket-save-sample-technology-three' onChange={onTechnologyThreeChangeHandler} ></input>
            <input className='poket-save-sample-technology-four' onChange={onTechnologyFourChangeHandler} ></input>
          </div>
        </div>
          <div className='poket-save-button-box'>
            <button className='poket-save-button' onClick={onSaveClickHandler}>{'저장'}</button>
          </div>
      </div>
    </div>
  )
}