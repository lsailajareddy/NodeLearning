import React,{Component} from 'react';


export class LoginComponent extends  Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }

    }
    handleChange=(e)=>{
        console.log(e.target.value);
        let currentState = this.state;
        currentState[e.target.name]=e.target.name;
        this.setState(currentState);
    }
    render(){
        return <div>
            <h2>Login</h2>
            <input type="text" placeholder="username" name="Username" onChange={this.handleChange}/>
            <input type="text" placeholder="password" name="Password" onChange={this.handleChange}/>
    <h1>{this.state.username}</h1>
    <h1>{this.state.password}</h1>
        </div>
    }
}