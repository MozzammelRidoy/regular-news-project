// import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { useContext, useState } from 'react';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const [showPassword, setShowPassword] = useState(false); 
    const {createNewUser} = useContext(AuthContext); 

        const handleRegister = e => {
            e.preventDefault(); 
            // console.log(e.currentTarget)
            const form = new FormData(e.currentTarget)
            const name = form.get('name'); 
            const photo = form.get('photo');
            const email = form.get('email'); 
            const password = form.get('password'); 
            e.currentTarget.reset();
            console.log(name, photo, email, password);
            
            // new user create with email and password by firebase
            createNewUser(email, password)
            .then(result => {
                console.log(result.user); 
                updateProfile(result.user, {
                    displayName: name,
                     photoURL: photo
                  }).then(() => {
                    console.log('Profile updated!')
                    // ...
                  }).catch((error) => {
                    console.log(error);
                  });
            })
            .catch(err => console.log(err)) 
        }
    return (
        <div>
        <Navbar></Navbar>
        <div className="">
            <h2 className="text-3xl my-6 text-center font-bold">Register Your Account</h2>
            <form onSubmit={handleRegister} className="md:w-3/4 space-y-4 lg:w-1/2 mx-auto">
            <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
            <div className="form-control ">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
            <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline btn-accent">Register</button>
              </div>
            </form>

            <p className="text-center mt-5">
                Already have an Account ? Please <Link to={'/login'}><span className="btn-link text-accent font-bold">Login</span></Link>
            </p>
        </div>
      
    </div>
    );
};

export default Register;