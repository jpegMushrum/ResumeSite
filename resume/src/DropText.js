import React, { useState } from 'react'
import $ from 'jquery'
//import $ from 'jquery';

function DropText(props) {
    const Title = props.title;
    const Body = props.body;
    const id = props.idButton;
    const idBody = `b-${id}`
    
    const [buttonHTML, setButtonHTML] = useState(<i class="fa-sharp fa-solid fa-chevron-left fa-lg"/>); 
    const [isOpen, setOpen] = useState(false);


    const OpenClose = () => {
        if (isOpen) {
            setButtonHTML(<i class="fa-sharp fa-solid fa-chevron-left fa-lg"/>);
            $("#" + idBody).toggle("fast");
            setOpen(false);
        }
        else {
            setButtonHTML(<i class="fa-sharp fa-solid fa-chevron-down fa-lg"/>);
            $("#" + idBody).toggle("fast");
            setOpen(true);
        }
    }

    return (
        <div class = "DropText">
            <div class = "DropTextUpperBlock" onClick = {OpenClose}>
                <button id = {id} class = "DropButton"> {buttonHTML} </button>
                <h2 class = "DropTitle"> {Title}</h2>
            </div>
            <h3 id = {idBody} class = "DropBody"> {Body}</h3>
        </div>
    );
}

export default DropText;