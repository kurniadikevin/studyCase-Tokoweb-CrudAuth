
import './style.css';
import Dashboard from '../component/dashboard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


export function Login(props) {

  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [currentUser,setCurrentUser]= useState({});

  let history = useHistory();

   // pull data to app
   props.func(currentUser);

  const loginUser =()=>{
    axios({
      method: "POST",
      data: {
        email: email,
        password: password,
       
      },
      url: "https://test.employee.tokoweb.xyz/api/login",
    }).then((res) => {
     
      if(res.data === 'No User Exists'){
        alert('No User Exist')
      } else{
        setCurrentUser(res.data.data);
        history.push("/");

        const alertBox = document.querySelector('.alert-box');
        alertBox.style.display='inline';
        alertBox.textContent='Login success';
      }    
    });
  }
 
  useEffect(()=>{

  },[currentUser])


  return (
    <div className="App">
      <Dashboard currentUser={currentUser.name}/>
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
