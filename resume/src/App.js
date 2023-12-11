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

function getCodeForcesInfo () {
    let request = new XMLHttpRequest();
    request.open("GET", "https://codeforces.com/api/user.info?handles=jpegMushrum&lang=en", false);
    request.send();
    const response = request.response;

    let responseJson = JSON.parse(response);
    responseJson = responseJson['result'][0];
    
    const result = {
        handle: responseJson['handle'],
        rating: responseJson['rating'],
        rank: responseJson['rank']
    };
   
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
    
    const codeForcesInfo = getCodeForcesInfo(); 

    const aboutMe = (
        <>
            Male, ${age} y.o. Like games, guitar and japanese music, anime, manga, novels. Learning TON, now working at <a href = "https://coinvent.dev">Coinvent</a>.
        </>
    );
    const achievments = (
        <>
            <ul>
                <li><a href = "https://diploma.rsr-olymp.ru/files/rsosh-diplomas-static/compiled-storage-2023/by-code/340065436392/color.pdf"> Cryptography olympiad (Mathematics + Cryptography)</a></li>
                <li><a href = "https://diploma.rsr-olymp.ru/files/rsosh-diplomas-static/compiled-storage-2023/by-code/340230856102/color.pdf"> Open olympiad of schoolchildren (Informatics)</a></li>
                <li><a href = "https://diploma.rsr-olymp.ru/files/rsosh-diplomas-static/compiled-storage-2023/by-code/340180667460/color.pdf"> "Бельчонок" olympiad (Informatics)</a></li>
                <li><a href = "https://diploma.rsr-olymp.ru/files/rsosh-diplomas-static/compiled-storage-2022/by-code/290403264600/color.pdf"> "Бельчонок" olympiad (Mathematics)</a></li>
                <li><a href = "https://ictis.sfedu.ru/news/2022/10/chemp_south/"> 50 place (2 in the city) on an ICPC qualification (команда СУНЦ ЮФО) </a></li>
                <li><a href = "https://github.com/jpegMushrum/tsc_4"> Ton Smart Challnge 4 (2nd pool) </a></li>
            </ul>
        </>
    );

    const skills = (
        <>
            <ul>
                <li>
                    Porgramming languages: C# (Windows Forms), C++ (Algorithms and data structures, Basics), Python (Parsers using API, Telegram Bots, TON), 
                    JS|TS (TON), a few of assembler (nasm), FunC (Ton Smart Challenge)
                </li>
                <li>
                    Hard skills: Simple UI, API Queries, Algorithms, Databases and SQL (MySQL), Managing Server, GIT, Simple Smart-Contracts
                </li>
                <li> Languages: Russian (Native), English (B2)</li>
            </ul>
        </>
    );
    
    const git = (
        <>
            <p> My profile on GitHub: <a href="https://github.com/jpegMushrum">jpegMushrum</a></p>
            <div> CodeForces profile info: 
                <ul>
                    <li>Handle and link: <a href = "https://codeforces.com/profile/jpegMushrum">jpegMushrum</a></li>
                    <li>Rank: {codeForcesInfo.rank}</li>
                    <li>Rating: {codeForcesInfo.rating}</li>
                </ul>
            </div>
        </>
    );
    
    return (
        <div>
            <Title />
            <DropText title = 'About me' body = {aboutMe} idButton = {1}/>
            <DropText title = 'Achievements' body = {achievments} idButton = {2}/>
            <DropText title = 'Skills' body = {skills} idButton = {3}/>
            <DropText title = 'Git and CodeForces' body = {git} idButton = {4}/>
            <h3 id = "bying"> Nice to see you here!</h3>
        </div>
    );
}

export default App;