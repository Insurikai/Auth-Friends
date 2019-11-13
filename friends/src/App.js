import React from 'react';
import {Route} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login}/>
      <ProtectedRoute path="/friends" component={FriendsList}/>
    </div>
  );
}

export default App;