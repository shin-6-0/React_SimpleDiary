import { useRef, useState } from "react";

const DiaryEditor = ({onCreate}) => {
  const authorInput=useRef(); //객체 접근 가능하게 함
  const contentInput=useRef();
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
      if(state.author.length<1){
        authorInput.current.focus();
        return;
      }
      if(state.content.length<5){
        contentInput.current.focus();
        return;
      }
      onCreate(state.author,state.content,state.emotion);
      alert("저장 성공!");
      setState({
        author:"",
        content:"",
        emotion:1,
      })
  }

  return (
    <div className ="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          value={state.author} 
          onChange={handleChangeState}
          name="author"
          placeholder="작성자"
          type="text" 
          //setAuthor(e.target.value); //e.target.value를 사용하면, const author 의 author를 가리키게 된다. 
        />
      </div>
      <br/>
      <div>
        <textarea 
          ref={contentInput}
          value={state.content} 
          onChange={handleChangeState}
          name="content"
          placeholder="일기"
          type="text"
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