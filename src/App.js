import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList=[
  {
    id:1,
    author:"신유경",
    content:"일기작성중!",
    emotion:5,
    created_date:new Date().getTime()
    //Date의 getTime > 시간 반환
  },
  {
    id:2,
    author:"춘식",
    content:"쭝시기의 일기장",
    emotion:3,
    created_date:new Date().getTime()
  },
  {    id:3,
    author:"프로도",
    content:"리액트 어렵다",
    emotion:2,
    created_date:new Date().getTime()}
]

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
