// import React from 'react';

import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useRef, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false); 
    const {logInWithEmail, forgetPassword} = useContext(AuthContext); 
    const location = useLocation()
    const navigate = useNavigate(); 

    const emailRef = useRef(); 
  

    const handleLogin = e => {
        e.preventDefault(); 
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email'); 
        const password = form.get('password'); 
        // console.log(email, password); 
        e.currentTarget.reset(); 


        // login with email and password via firebase
        logInWithEmail(email, password)
        .then(result => {
            // console.log(result.user)
            navigate(location?.state ? location.state : '/'); 
        })
        .catch(err => console.log(err))

        
    }
    // password reset or forget password 

        const handleForgetPassword = () => {
            const email = emailRef.current.value; 
            if(!email){
                alert('Please Enter Your Email')
                return
            }
            if(! /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                
                alert('Your Email is Invalid. Please Enter a Valid Email.')
                return
            }
            
            
            forgetPassword(email)
            .then(()=>{
                alert('Please... Check Your Email and Reset Your Password. Thank you..!')
            })

            .catch(err => console.log(err))
    }
  return (
    <div>
        <Navbar></Navbar>
        <div className="">
            <h2 className="text-3xl my-6 text-center font-bold">Login Your Account</h2>
            <form onSubmit={handleLogin} className="md:w-3/4 space-y-4 lg:w-1/2 mx-auto">
            <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                    ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={`${showPassword ? 'text' : 'password'}`}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span onClick={()=>setShowPassword(!showPassword)} className="absolute text-2xl top-12 right-4">
                    {
                        showPassword ? <IoMdEye /> : <IoMdEyeOff />
                    }
                </span>
                <label className="label">
                  <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline btn-accent">Login</button>
              </div>
            </form>

            <p className="text-center mt-5">
                Don't have an Account ? Please <Link to={'/register'}><span className="btn-link text-accent font-bold">Register</span></Link>
            </p>
        </div>
      
    </div>
  );
};

export default Login;
