import React from 'react'
import $ from './other/jquery-3.7.0.js'
//import $ from 'jquery';

function DropText(props) {
    const Title = props.title;
    const Body = props.body;
    const id = props.idButton;
    const idBody = `b-${id}`
    let isOpen = false;
    
    const OpenClose = () => {
        if (isOpen) {
            $("#" + id)[0].innerHTML = "<i class=\"fa-sharp fa-solid fa-chevron-left\"/>";
            $("#" + idBody).toggle("fast");
            isOpen = !isOpen;
        }
        else {
            
            $("#" + id)[0].innerHTML = "<i class=\"fa-sharp fa-solid fa-chevron-down\"/>";
            $("#" + idBody).toggle("fast");
            isOpen = !isOpen;
        }
    }

    return (
        <div>
            <div class = "OpenCloseButton">
                <h2 class = "DropTitle"> {Title}</h2>
                <button id = {id} onClick = {OpenClose}> <i class="fa-sharp fa-solid fa-chevron-left"/></button>
            </div>
            <h3 id = {idBody} class = "DropBody"> {Body}</h3>
        </div>
    );
}

export default DropText;