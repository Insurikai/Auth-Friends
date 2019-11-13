import React, {useState} from 'react';
import axiosAuth from '../axiosAuth';

export default (props)=>{
  const [friendInfo, setFriendInfo] = useState({
    name: '',
    age: '',
    email: ''
  });
  const submit = (e) =>{
    e.preventDefault();
    axiosAuth().post('http://localhost:5000/api/friends', friendInfo)
  }
  const handleChanges = (e)=>{setFriendInfo({...friendInfo, [e.target.name]: e.target.value})}
  return(
    <form onSubmit={submit}>
      <input type='text' placeholder="friend's name" name='name' value={friendInfo.name} onChange={handleChanges}/>
      <input type='number' placeholder="friend's age" name='age' value={friendInfo.age} onChange={handleChanges}/>
      <input type='email' placeholder="friend's email" name='email' value={friendInfo.email} onChange={handleChanges}/>
      <input type='submit'/>
    </form>
  )
}