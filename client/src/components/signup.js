import React, { useState } from "react";
import "../loginSignup.css";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/register", { userName, email, password })
      .then((result) => {
        console.log(result)
        toast.success("Registerd successfully",{position: toast.POSITION.TOP_CENTER});
        navigate('/login')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div class="body-login-signup">
        <ToastContainer/>

      <div class="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h1>SignUp</h1>
          <div class="input-box">
            <input
              type="userName"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <i class="bx bxs-lock-alt"></i>
          </div>
          <div class="input-box">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i class="bx bxs-user"></i>
          </div>
          <div class="input-box">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i class="bx bxs-lock-alt"></i>
          </div>

          <button type="submit" class="btn">
            SignUp
          </button>
          <div class="register-link">
            <p>
              Already have an account ? <a href="/login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
