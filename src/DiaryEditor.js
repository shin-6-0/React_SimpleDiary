import { useState } from "react";

const DiaryEditor = () => {
  //useState를 여러번 사용하면 함수로 묶어서 쓰자
  const [state,setState]=useState({
    author:"",
    content:"",
    emotion:1,
  })
  // const [author,setAuthor]=useState("");
  // const [content, setContent] = useState("");

  const handleChangeState=(e)=>{
    //console.log(e.target.name+" : "+e.target.value)
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmitState=()=>{
      console.log(state);
      alert("저장 성공!");
  }

  return (
    <div className ="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author" 
          value={state.author} 
          onChange={handleChangeState}
          //setAuthor(e.target.value); //e.target.value를 사용하면, const author 의 author를 가리키게 된다. 
        />
      </div>
      <br/>
      <div>
        <textarea 
          name="content"
          value={state.content} 
          onChange={handleChangeState}
        />
      </div>
      <br/>
      <div>
        오늘의 감정 점수 : <select name="emotion" value={state.emotion} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmitState}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;