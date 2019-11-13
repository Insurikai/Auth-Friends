import React, {useState, useEffect} from 'react';
import axiosAuth from '../axiosAuth'
import AddFriend from './AddFriend'

export default ()=>{
  const [friends, setFriends] = useState([])
  useEffect(()=>{
    axiosAuth().get('http://localhost:5000/api/friends').then( response=>{
      setFriends(response.data)
    }).catch();
  })
  return(
    <ul>
      {
        friends && friends.map(friend=><li key={friend.id}>{friend.name}</li>)
      }
      <AddFriend/>
    </ul>
  )
}