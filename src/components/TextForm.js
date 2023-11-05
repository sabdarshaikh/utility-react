import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    //  console.log("Uppercase was Clciked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "success");
  }
  const handleloClick = () => {
    //  console.log("Uppercase was Clciked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase", "success");
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText)
    props.showAlert("Text cleared", "success");
  }
  const handleOnChange = (event) => {
    // console.log("on Changed");
    setText(event.target.value); 
  }
  const [text, setText] = useState('')
  return (
    <> 
      <div className="container" style={{color: props.mode==='dark'?'white':'#193754'}}>
          <h2>{props.heading}</h2>
          <div className="my-4">
          
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#193754':'white', color:  props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#193754'}}>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
    </>
  )
}
