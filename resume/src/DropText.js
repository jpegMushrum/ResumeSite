import React from 'react'

let isOpen = false;
const OpenClose = () => {
    if (isOpen) {
        document.getElementById('hui').innerHTML = "My new text!";
    }
    else {
        $("#hui").innerHTML = "hui";
    }
}

function DropText(props) {
    const Title = props.title;
    const Body = props.body;
    
    return (
        <div>
            <div class = "OpenCloseButton">
                <h2 class = "DropTitle"> {Title}</h2>
                <button id = "hui" onClick = {OpenClose()}> &lt; </button>
            </div>
            <h3 class = "DropBody"> {Body}</h3>
        </div>
    );
}

export default DropText;