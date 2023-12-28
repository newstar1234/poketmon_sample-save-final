import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import { MAIN_PATH, RESULT_PATH, SAVE_PATH, UPDATE_PATH } from './constants';
import Main from './views/main';
import Save from './views/save';
import Result from './views/result';
import Update from './views/Update';

// description : main - '/' => MAIN_PATH //
// description : result - '/result => RESULT_PATH //
// description : save - '/save' => SAVE_PATH //

function App() {

  const { poketmonNumber } = useParams();

  return (
    <Router>
      <Routes>
        <Route path={MAIN_PATH()} element={<Main/>}/>
        <Route path={SAVE_PATH()} element={<Save/>} />
        <Route path={RESULT_PATH(':poketmonNumber')} element={<Result/>} />
        <Route path={UPDATE_PATH(':poketmonNumber')} element={<Update/>} />
      </Routes>
    </Router>
  );
}

export default App;
