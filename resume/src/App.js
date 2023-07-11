import React, { useState } from 'react'
import Title from './Title.js'
import DropText from './DropText.js'

function App() {
    const abtme = "Male, 18 y.o., I'm dreaming about gamedev. Now learning JS/TS, React, TON."
    const ach = ""

    return (
        <div>
            <Title />
            <DropText title = 'About me' body = {abtme}/>
            <DropText title = 'Achievments' body = {ach}/>
            <h3> Nice to see you there!</h3>
        </div>
    );
}

export default App;