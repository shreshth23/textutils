import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Sample Text");
  let handleUp = ()=>{
    setText(text.toUpperCase());
  };
  let handleDown = ()=>{
    setText(text.toLowerCase());
  };
  let handlechange = (event)=>{
    setText(event.target.value);
  };
  return (
    <div className='container my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} id="myBox" rows="6" onChange={handlechange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUp}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDown}>Lowercase</button>
    </div>
  )
}
