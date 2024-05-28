import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './signup.css';
import axios from 'axios';
// import { Navigate } from 'react-router-dom';

function Signup() {
    const [name,setName]=useState();
    const [password,setPassword]=useState();
    const[email,setEmail]=useState();
    const[number,SetNumber]=useState();
    const navigate=useNavigate();

    const submitHander=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/signup',{name,email,number,password})
        .then(result=>{
            alert("Register sucessfully")
             console.log(result)
             navigate("/login")
        })
        .catch(err=>console.log(err))
    }
    
    return (
      <div className="App">
        <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={submitHander}>
            <div className="form_group">
                <label for="fulname">Full Name</label>
                <input type="text" className="fulname" required autoFocus value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form_group">
                <label for="email">Email Address</label>
                <input type="email" className="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form_group">
                <label for="monumber">Mo.Number</label>
                <input type="number" className="monumber" required value={number} onChange={(e)=>SetNumber(e.target.value)}/>
            </div>
            <div className="form_group">
                <label for="password">password</label>
                <input type="password" className="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="form_group">
                <input type="submit" value="Sign Up" className="signup"/>
            </div>
        </form>
        <Link to="/login">
        <p>Already have an Account</p>
        </Link>
    </div>
      </div>
    );
  }
  
  export default Signup;