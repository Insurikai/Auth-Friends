import React, {useState} from 'react';
import Axios from 'axios';

export default (props)=>{
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: ''
  });
  const submit = (e) =>{
    e.preventDefault();
    Axios.post('http://localhost:5000/api/login', loginInfo)
    .then((response)=>{
      localStorage.setItem('token', response.data.payload)
      props.history.push('/friends');
    })
    .catch((e)=>{e.response.status ? console.log('Wrong Login Credentials use {username:Lambda School, password:i<3Lambd4}') : console.log(e)});
  }
  const handleChanges = (e)=>{setLoginInfo({...loginInfo, [e.target.name]: e.target.value})}
  return(
    <form onSubmit={submit}>
      <input type='text' placeholder='Username' name='username' value={loginInfo.username} onChange={handleChanges}/>
      <input type='password' placeholder='Password' name='password' value={loginInfo.password} onChange={handleChanges}/>
      <input type='submit'/>
    </form>
  )
}