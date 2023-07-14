import React from 'react'
import Title from './Title.js'
import DropText from './DropText.js'

function getAge (date) {
    let result = 0;
    if ((date.month > 7) || (date.month === 7 && date.day >= 7)) {
        result = 1;
    }
    result += date.year - 2006;
    return result;
}

function App() {
    let today = new Date();
    today = {
        day: today.getDate(),
        month: today.getMonth() + 1, 
        year: today.getFullYear()
    };
    const age = getAge(today);
    console.log(age);

    const abtme = `Male, ${age} y.o., I'm dreaming about gamedev. Now learning JS/TS, React, TON.`
    const ach = (
        <>
            <ul class = "AchievmentsList">
                <li><a href = "https://diploma.rsr-olymp.ru/files/rsosh-diplomas-static/compiled-storage-2023/by-code/340065436392/color.pdf"> Cryptography olympiad (Mathematics + Cryptography)</a></li>
                <li><a href = "https://diploma.rsr-olymp.ru/files/rsosh-diplomas-static/compiled-storage-2023/by-code/340230856102/color.pdf"> Open olympiad of schoolchild (Informatics)</a></li>
                <li><a href = "https://diploma.rsr-olymp.ru/files/rsosh-diplomas-static/compiled-storage-2023/by-code/340180667460/color.pdf"> "Бельчонок" olympiad (Informatics)</a></li>
                <li><a href = "https://diploma.rsr-olymp.ru/files/rsosh-diplomas-static/compiled-storage-2022/by-code/290403264600/color.pdf"> "Бельчонок" olympiad (Mathematics)</a></li>
            </ul>
        </>
    );

    return (
        <div>
            <Title />
            <DropText title = 'About me' body = {abtme} idButton = {1}/>
            <DropText title = 'Achievments' body = {ach} idButton = {2}/>
            <h3 id = "byeing"> Nice to see you here!</h3>
        </div>
    );
}

export default App;