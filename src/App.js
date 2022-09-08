import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post= '리액트 기초강의';
  let [title,b] = useState(['무료강의 추천','C는 언제공부함','할거졸라많']);
  return (
    <div className="App">
      <div className="black-nav">
        <div>it's blog</div>
      </div>
      <div className="list">
        <h4>{ title[0] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
