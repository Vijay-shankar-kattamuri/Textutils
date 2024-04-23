import React,{useState}from 'react'




export default function TextForms(props) {
    const handleUpClick=()=>{
        console.log("button clicked"+text)
        let newText=text.toUpperCase()
        settext(newText)
    }
    const handleLoClick=()=>{
        console.log("button clicked"+text)
        let newText=text.toLowerCase()
        settext(newText)
    }
    const clear=()=>{
        console.log("button clicked"+text)
        let newText=''
        settext(newText)
    }
    const capitalizeEveryWord = () => {
        let newtext=text.replace(/\b\w/g, char => char.toUpperCase());
        settext(newtext)
      };
    
    
    
    const handleOnClick=(event)=>{
        console.log("upper case clicked")
        settext(event.target.value);
  
    }
    const[text,settext]=useState("");
    return (
    <>
    
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
<div className="mb-3"  >

  <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="8" onChange={handleOnClick}value={text}></textarea>
</div>
    </div>
    <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>change to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>change to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={clear}>clear text</button>
    
    <button className="btn btn-primary" onClick={capitalizeEveryWord}>capitalize</button>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h2>Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} letters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text here to show preview"}</p>

    </div>
    </>
  )
}
