import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { MAIN_PATH, RESULT_PATH, SAVE_PATH } from './constants';
import Main from './views/main';
import Save from './views/save';
import Result from './views/result';

// description : main - '/' => MAIN_PATH //
// description : result - '/result => RESULT_PATH //
// description : save - '/save' => SAVE_PATH //

function App() {
  return (
    <Router>
      <Routes>
        <Route path={MAIN_PATH()} element={<Main/>} />
        <Route path={SAVE_PATH()} element={<Save/>} />
        <Route path={RESULT_PATH()} element={<Result/>} />
      </Routes>
    </Router>
  );
}

export default App;
