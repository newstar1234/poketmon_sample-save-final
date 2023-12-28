import React, { useEffect, useState } from 'react'
import './style.css';
import { DeletePoketResponseDto, GetPoketResponseDto, PoketResponseDto } from '../../interfaces/response';
import { deletePoketRequest, getPoketRequest } from '../../apis';
import { ResponseDto } from '../../interfaces';
import { useNavigate, useParams } from 'react-router-dom';
import { MAIN_PATH, UPDATE_PATH } from '../../constants';

export default function Result() {
  
  // state : poketmonNumber //
  const { poketmonNumber } = useParams();

  // state : 포켓몬 상태 //
  const [poketmon, setPoketmon] = useState<PoketResponseDto | null>(null);


  // function : navigator //
  const navigator = useNavigate();

  // function : 포켓몬 불러오기 //
  const getPoketResponse = (responseBody : GetPoketResponseDto | ResponseDto | null) => {
    if(!responseBody) return;
    const { code } = responseBody;
    if(code === 'DBE') alert('데이터베이스 오류입니다.');
    if(code !== 'SU') {
      navigator(MAIN_PATH());
      return;
    }
    const poket: PoketResponseDto = { ...responseBody as GetPoketResponseDto};

    setPoketmon(poket);
  }

  // function : delete poket response //
  const deletePoketResponse = (responseBody: DeletePoketResponseDto | ResponseDto | null) => {
    if(!responseBody) return;
    const { code } = responseBody;
    if(code === 'DBE') alert('데이터베이스 오류입니다.');
    if(code !== 'SU') return;

    alert('삭제 완료!!');
    navigator(MAIN_PATH());
  }

  // event handler : 메인 클릭 이벤트 //
  const onMainClickHandler = () => {
    navigator(MAIN_PATH());
  }
  // event handler : 수정 버튼 클릭 이벤트 //
  const onUpdateClickHandler = () => {
    if(!poketmonNumber) return;
    navigator(UPDATE_PATH(poketmonNumber));
  }

  // event handler : 삭제 버튼 클릭 이벤트 //
  const onDeleteClickHandler = () => {
    if(!poketmonNumber) return;
    deletePoketRequest(poketmonNumber).then(deletePoketResponse);
  }

  // effect : 렌더링 //
  useEffect(() => {
    if(!poketmonNumber) return;
    getPoketRequest(poketmonNumber).then(getPoketResponse);
  }, [poketmonNumber]);

//            render           //
  return (
    <div id='poket-sample-result'>
      <div className='poket-sample-result-header'>
        <div className='poket-sample-result-header-right' onClick={onMainClickHandler} >{'포켓몬 샘플 데이터'}</div>
      </div>
      <div className='poket-sample-result-main-box'>
        <div className='poket-sample-result-search-box'>
          <div className='poket-sample-result-search'>
            <input className='poket-sample-result-search-input' placeholder='검색어를 입력해주세요.'></input>
          </div>
          <button className='poket-sample-result-search-button'>{'검색'}</button>
        </div>
        <div className='poket-sample-button-box'>
            <div className='poket-sample-button' onClick={onUpdateClickHandler} >{'수정'}</div>
            <div className='poket-sample-button' onClick={onDeleteClickHandler} >{'삭제'}</div>
        </div>
        <div className='poket-sample-result-box'>
          <div className='poket-save-input-first'>
            <div className='poket-save-sample-name'>{poketmon?.name}</div>
            <div className='poket-save-sample-type'>{poketmon?.type}</div>
            <div className='poket-save-sample-specificity'>{poketmon?.specificity}</div>
            <div className='poket-save-sample-character'>{poketmon?.characters}</div>
            <div className='poket-save-sample-thing'>{poketmon?.things}</div>
          </div>
          <div className='poket-save-input-second'>
            <div className='poket-save-sample-value'>{'개체치'}</div>
            <div className='poket-save-sample-HP'>{poketmon?.individualHp}</div>
            <div className='poket-save-sample-attack'>{poketmon?.individualAttack}</div>
            <div className='poket-save-sample-defence'>{poketmon?.individualDefence}</div>
            <div className='poket-save-sample-special-attack'>{poketmon?.individualSpecialAttack}</div>
            <div className='poket-save-sample-special-defence'>{poketmon?.individualSpecialDefence}</div>
            <div className='poket-save-sample-speed'>{poketmon?.individualSpeed}</div>
          </div>
          <div className='poket-save-input-third'>
          <div className='poket-save-sample-value'>{'노력치'}</div>
            <div className='poket-save-sample-HP'>{poketmon?.effortHp}</div>
            <div className='poket-save-sample-attack'>{poketmon?.effortAttack}</div>
            <div className='poket-save-sample-defence'>{poketmon?.effortDefence}</div>
            <div className='poket-save-sample-special-attack'>{poketmon?.effortSpecialAttack}</div>
            <div className='poket-save-sample-special-defence'>{poketmon?.effortSpecialDefence}</div>
            <div className='poket-save-sample-speed'>{poketmon?.effortSpeed}</div>
          </div>
          <div className='poket-save-input-fourth'>
            <div className='poket-save-sample-value'>{'기술배치'}</div>
            <div className='poket-save-sample-technology-one'>{poketmon?.technologyOne}</div>
            <div className='poket-save-sample-technology-two'>{poketmon?.technologyTwo}</div>
            <div className='poket-save-sample-technology-three'>{poketmon?.technologyThree}</div>
            <div className='poket-save-sample-technology-four'>{poketmon?.technologyFour}</div>
          </div>
        </div>
      </div>
    </div>
  )
}