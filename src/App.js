import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Landing from './components/Landing/index';
import Signup from './components/Signup/index'
import Login from './components/Login/index'
import Dashboard from './components/Dashboard/Home/index'
import Profile from './components/Dashboard/Profile/index'
import {auth, firestore} from './config/firebase';




function App() {

const [user, setUser] = useState('');

useEffect(() => {
  auth.onAuthStateChanged( async (userData) => {
   if (userData){
const profile = await firestore.collection('users').doc(userData.uid).get();
if (profile.exists){
setUser(profile.data().fullname);
}
   }else {
    setUser('')
   }
  })
})

const handleLogout = () => {
  auth.signOut();
  localStorage.removeItem('uid')
}

  return (
 <BrowserRouter>
 <Switch>
   <Route exact path ='/'>
     <Landing/>
   </Route>
    <Route path = '/signup'>
      <Signup />
    </Route>
    <Route path = '/login'>
      <Login />
    </Route>
<Route path = '/dashboard'>
  <Dashboard displayName={user} handleLogout={handleLogout}  />
</Route>
<Route path = '/profile'>
  <Profile displayName={user} />
</Route>
 </Switch>
 </BrowserRouter>
 
  );
}

export default App;
