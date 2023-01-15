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
    <>
    <div className='container my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} id="myBox" rows="6" onChange={handlechange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUp}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDown}>Lowercase</button>
    </div>
    <div className="container my-2">
        <h1>Yout Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} mins required reading time</p>
        <h2>Preview</h2>
        {text}
    </div>
    </>
  )
}
