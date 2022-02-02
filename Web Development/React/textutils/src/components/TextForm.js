import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    // text = "new text"; wrong way to update text
    // setText("new text"); right way to update text
    const handleUpClick = () => {
        console.log("Convert to uppercase is pressed + text");
        let anaylzeText = text.toUpperCase();
        setText(anaylzeText);
        props.showAlert("Converted to uppercase", 'success')
    }
    const handleLoClick = () => {
        console.log("Convert to lowercase is pressed + text");
        let anaylzeText = text.toLowerCase();
        setText(anaylzeText);
        props.showAlert("Converted to lowercase", 'success')
    }
    const handleOnchange = (event) => {
        console.log("handle Onchange is pressed");
        setText(event.target.value);
    }
    const handleReClick = (event) => {
        console.log("handle reset is pressed");
        props.showAlert("Text Cleared", 'success')
        setText("");
    }
    const handleCamelCaseClick = (event) =>{
        console.log('handle camel case click is pressed');
        let a = text;
        let analyzeText = "";
        a = a.split(' ');
        for(let i = 0; i<a.length; i++){
            analyzeText += a[i][0].toUpperCase() + a[i].substring(1) + ' ';
        }
        setText(analyzeText[0].toLowerCase()+analyzeText.substring(1));
        props.showAlert("Converted to Camel Case", 'success')
    }
    const handlePascalCaseClick = (event) =>{
        console.log('handle camel case click is pressed');
        let a = text;
        let analyzeText = "";
        a = a.split(' ');
        for(let i = 0; i<a.length; i++){
            analyzeText += a[i][0].toUpperCase() + a[i].substring(1) + ' ';
        }
        setText(analyzeText);
        props.showAlert("Converted to Pascal Case", 'success')
    }
    const handleCopy = (event) => {
        console.log("handle copy is pressed");
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value); 
        props.showAlert("Text Copied", 'success')
    }
    const handleExtraSpaces = () => {
        console.log("handle extra spaces is pressed");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (
        <>
        <div className = 'container' style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style = {{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} value ={text} onChange={ handleOnchange } id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={ handleUpClick }>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={ handleLoClick }>Convert to lowerCase</button>
            <button className="btn btn-primary mx-1" onClick={ handleCamelCaseClick }>Convert to camelCase</button>
            <button className="btn btn-primary mx-1" onClick={ handlePascalCaseClick }>Convert to PascalCase</button>
            <button className="btn btn-primary mx-1" onClick={ handleReClick }>Reset</button>
            <button className="btn btn-primary mx-1" onClick={ handleCopy }>Copy text</button>
            <button className="btn btn-primary mx-1" onClick={ handleExtraSpaces }>Remove Extra Spaces</button>
        </div>
        <div className="container my-3"  style = {{color: props.mode === 'dark' ? 'white' : 'black'}}> 
            <h2>Your Text Summary</h2>
            <p><b>{text.length > 0 ? text.split(" ").length-1 : 0}</b> Words and <b>{text.length > 0 ?text.length : 0} Characters</b></p>
            <p><b>{ text.length > 0 ? text.split(" ").length*0.008 : 0}</b> Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter your text here to preview it here'}</p>
        </div>
        </>
    )
}
