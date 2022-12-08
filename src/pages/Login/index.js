import logo from '../../logo.svg';
import './style.css';
import { Link } from 'react-router-dom';
import Dashboard from '../component/dashboard';
import axios from 'axios';
import { useState } from 'react';


export function Login() {

  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');

  const loginUser =()=>{
    axios({
      method: "POST",
      data: {
        email: email,
        password: password,
       
      },
     /*  withCredentials: true, */
      url: "https://test.employee.tokoweb.xyz/api/login",
    }).then((res) => {
     
      if(res.data === 'No User Exists'){
        alert('No User Exist')
      } else{
        
        //history.push("/")
      }    
    });
  }



  return (
    <div className="App">
      <Dashboard/>
      <div className='page'>
        <div className='main'>
          <label>Email</label>
          <input type='email' value={email} onChange={(e)=> setEmail((e.target.value))}
          placeholder='email'>
          </input>
          <label>Password</label>
          <input type='password' placeholder='password'
           value={password} onChange={(e) => setPassword(e.target.value)}>

           </input>
          <button onClick={loginUser}>
            Log-in
            </button>
        </div>
      </div>
    </div>
  );
}
