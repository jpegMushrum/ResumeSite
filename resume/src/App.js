import React from 'react'
import Title from './Title.js'
import DropText from './DropText.js'

function App() {
    const abtme = "Male, 18 y.o., I'm dreaming about gamedev. Now learning JS/TS, React, TON."
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