import { useRef,useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import LifeCycle from './Lifecycle';

//https://jsonplaceholder.typicode.com/comments 

function App() {

  const [data,setData]  = useState([]);

  const dataId=useRef(0);

  const onCreate = (author,content,emotion) =>{
    const created_date = new Date().getTime();
    const newItem={
      author,
      content,
      emotion,
      created_date,
      id:dataId.current
    }
    dataId.current+=1;
    setData([newItem,...data]);
  };

  const onRemove = (targetId)=>{
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList=data.filter((it)=>it.id!==targetId);
    setData(newDiaryList);
  };
  const onEdit=(targetId,newContent)=>{
    setData(
      data.map((it)=>it.id ===targetId?{...it,content:newContent}:it)
    )//특정 일기 데이터를 수정. it.id를 map을 통해서 찾고, 이때 바꿈
  }
  return (
    <div className="App">
      <LifeCycle />
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onRemove = {onRemove} diaryList={data}/>
    </div>
  );
}

export default App;
