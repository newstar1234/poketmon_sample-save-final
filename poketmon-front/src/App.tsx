import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import { MAIN_PATH, RESULT_PATH, SAVE_PATH, SEARCH_PATH, UPDATE_PATH } from './constants';
import Main from './views/main';
import Save from './views/save';
import Result from './views/result';
import Update from './views/Update';
import Search from './views/search';

// description : main - '/' => MAIN_PATH //
// description : result - '/result => RESULT_PATH //
// description : save - '/save' => SAVE_PATH //

function App() {

  return (
    <Router>
      <Routes>
        <Route path={MAIN_PATH()} element={<Main/>}/>
        <Route path={SAVE_PATH()} element={<Save/>} />
        <Route path={RESULT_PATH(':poketmonNumber')} element={<Result/>} />
        <Route path={UPDATE_PATH(':poketmonNumber')} element={<Update/>} />
        <Route path={SEARCH_PATH(':name')} element={<Search/>} />
      </Routes>
    </Router>
  );
}

export default App;
