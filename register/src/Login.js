import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Home from './Home';

function Login() {
    const [password,setPassword]=useState();
    const[email,setEmail]=useState();
    const navigate=useNavigate();

    const submitHander=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{
            if(result.data==="success"){
                alert("login success");
                navigate("/home");
            }else if(result.data==="email is not reginter"){
                alert("Email is not register");
            }else if(result.data==="password is incorrect"){
                alert("password is incorrect");
            }
        })
        .catch(err=>console.log(err))
    }

    return (    
<div className="container1">
    <h2>Login</h2>
    <form onSubmit={submitHander}>
        <div className="form-group">
            <label for="email">Email Address</label>
            <input type="email" className="email" name="email" required autoFocus value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label for="password">Password</label>
            <input type="password" className="password" name="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
            <button type="submit">Login</button>
        </div>
    </form>
</div>
    );
  }
  
  export default Login;
  