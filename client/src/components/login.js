import React, { useEffect, useState } from 'react'
import  '../loginSignup.css'
import {ToastContainer, toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
// toast.configure()
function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailError,setEmailError]=useState('');
    useEffect(()=>{
    },[email])
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/login',{email,password})
        .then(result=>{
            console.log(result)
            if(result.data==="Success")
            {
                toast.success("Welcome to Yogik", {position: toast.POSITION.TOP_CENTER})
            }
            else if(result.data==="Pwd")
            {
                toast.error("Incorrect password", {position: toast.POSITION.TOP_CENTER})
            }
            else{
                setEmailError("Email id is not registered")
                toast.error("Email id is not registered", {position: toast.POSITION.TOP_CENTER})
            }
        })
        .catch(err=>toast.error("Something went wrong", {position: toast.POSITION.TOP_CENTER}))
       }
  return (
    <div class="body-login-signup">
    <div class="wrapper">
    <form action="" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div class="input-box">
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
            <i class='bx bxs-user'></i> 
        </div>
        <div class="input-box">
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
            <i class='bx bxs-lock-alt'></i>
        </div>
        <div class="remember-forgot">
            {/* <label><input type="checkbox"/>Remember me</label> */}
            {/* <a href="#">Forgot Password</a>   */}
        </div>

        <button type="submit" class="btn">Login</button>
        <div class="register-link">
            <p>Don't have an account ? <a href="/signup">SignUp</a></p>
            <div class="forgot-password">
            <a href="#" >Forgot Password</a>  
            </div>

        </div>
        <ToastContainer/>
    </form>
</div>
</div>

  )
}

export default Login
