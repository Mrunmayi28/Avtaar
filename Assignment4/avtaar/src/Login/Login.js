import React, { useState } from "react";
import './Login.css';

import GIF from 'C://Users//Mrunmayi//Desktop//Assignment4//avtaar//src//images//login-otp-banner.webp';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = ({setLoginUser}) => {
    const navigate = useNavigate();
    
    const[user,setUser] = useState({
        email:"",
        password:""
    })

    const userchange = e =>{
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value 
        })
    }

    const login = () =>{
        if(user.email =='' ||  user.password ==''){
                alert('Enter all details');
        }else{
            axios.post('http://localhost:5000/user/login',user)
        .then(res =>{
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate('/home')
        }).catch(
            alert('Enter valid Email ID or Password')
        )
    } 
        
    }

    return (
        <>
            <div className="container row " id='login_container'>
            {console.log('User' , user)}
                <div className="col-md-6" >
                    <img id='login_img' className="GIF" src={GIF} />
                </div>
                <div className="col-md-6" >
                <h5 className="header">Login Form</h5>   
                    <form>
                        <input className="form-control" type='text' id='email' name="email" value={user.email} placeholder="Email" onChange={userchange} />
                        <input className="form-control" type='password' id='password' name='password' value={user.password} placeholder="Password" onChange={userchange}/>
                        
                        <div id='button' className="d-grid gap-2">
                            <button className="btn-sm btn-primary" type="button" onClick={login} value='login'>Login</button>
                            <a id='link' href='register'>Don't have an account?Register</a>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;