import React from 'react';
import Header from './Components/Header';
import {LoginComponent} from './Components/Login';
import {RegisterComponent} from './Components/Register'

const App = ()=>{
    const companyName='Pega Systems';
    return <div>
    <Header title={companyName} />
    <LoginComponent />
    <RegisterComponent />
    <h1>Welcome</h1>
    </div>

};
export default App;