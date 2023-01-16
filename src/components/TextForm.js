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
  let handleClear = (event)=>{
    setText("");
  };
  let handleInsert = (event)=>{
    setText(text.split(" ").join("_"));
  };
  let handleRemove = (event)=>{
    setText(text.split("_").join(" "));
  };
  let handleCopy = (event)=>{
    let text = document.getElementById("myBox")
    navigator.clipboard.writeText(text.value);
  };
  return (
    <>
    <div className='container my-3' style={{color:props.mode==='dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} id="myBox" rows="6" onChange={handlechange}
            style={{backgroundColor:props.mode==='dark' ? 'grey' : 'white',color:props.mode==='dark' ? 'white' : 'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUp}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDown}>Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleInsert}>Insert _</button>
        <button className="btn btn-primary mx-2" onClick={handleRemove}>Remove _</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark' ? 'white' : 'black'}}>
        <h1>Yout Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} mins required reading time</p>
        <h2>Preview</h2>
        {text}
    </div>
    </>
  )
}
