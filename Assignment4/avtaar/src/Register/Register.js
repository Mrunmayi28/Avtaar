import React, { useState } from "react";
import './Register.css';
import GIF from 'C://Users//Mrunmayi//Desktop//Assignment4//avtaar//src//images//c4.gif';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Register= () => {
    const navigate= useNavigate();

    const [user, setUser] = useState({
        name:"",
        uid:"",
        age:"",
        gender:"",
        email:"",
        password:"",
        repassword:""
    })

    const handlechange = e =>{
        const { name , value } = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = () =>{
        
        const {name,uid,age,gender,email,password,repassword} = user 
        if(name && uid && age && gender && email && (password === repassword)){
            axios.post('http://localhost:5000/user',user)
            .then(res =>{alert(res.data.message)
            navigate('/login');
        })
        }else{
            alert('Invalid Input')
        }
    }
    return (
        <div>
            <div className="container row" id='reg_container'>
                <div className="col-md-6">
                    <img id='reg_image'className="GIF" src={GIF} />
                </div>
                <div className="col-md-6">
                {console.log('user',user)}
                    <form>
                        
                        <h5 className="reg_header">Register Form</h5>  
                                <input className="form-control" type='text' id='name' name='name' value={user.name} placeholder="Full Name" onChange={handlechange}/>
                        
                        <div className="row">
                            <div className="col-md-6">
                                <input className="form-control" type='text' id='uid' name="uid" value={user.uid} placeholder="User ID" onChange={handlechange}/>
                            </div>

                            <div className="col-md-6">
                                <input className="form-control" type='text' id='age' name="age" value={user.age} placeholder="age" onChange={handlechange} />
                            </div>
                        </div>
                        <select className="form-select " id='gender' name="gender" value={user.gender} aria-label="Default select example"onChange={handlechange}>
                            <option selected>Select Gender</option>
                            <option value="1">Female</option>
                            <option value="2">Male</option>
                        </select>
                        <input className="form-control textfields" type='text' name="email" value={user.email} id='email' placeholder="Email" onChange={handlechange} />
                        <input className="form-control" type='password' id='password' name="password" value={user.password} placeholder="Password" onChange={handlechange}/>
                        <input className="form-control" type='password' id='repassword' name="repassword" value={user.repassword} placeholder="Renter Password" onChange={handlechange}/>
                        <div id='button' className="d-grid gap-2">
                            <button className="btn-sm btn-primary" type="button" onClick={register} value='Register'>Register</button>
                            <a id='link' href='login'>Already have an account?SignIn</a>

                            
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;