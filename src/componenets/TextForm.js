import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () =>{
        // console.log("uppercase was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () =>{
        // console.log("uppercase was clicked "+text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () =>{
        // console.log("uppercase was clicked "+text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }
 
    // handler for event
    const handleOnChange = (event) =>{
        console.log("on change");  
        setText(event.target.value);   //to enable typing in textarea
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard !","success");
    }
    
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))    
    }

    const [text, setText]= useState('Enter Text here');
    // text = "new text "; -> wrong way to change the state
    // setText("new text"); correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3 my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}  id="myBox" rows="8" > </textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>  
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here "}</p>
        </div>
        </>
    )
}
