import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfilePage from "./components/ProfilePage";
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return
  <UserContext.Provider value={userData}> 
    <ProfilePage userData={userData} />
  </UserContext.Provider>;
}

export default App;
