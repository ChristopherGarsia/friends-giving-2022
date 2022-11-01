import 'react-phone-input-2/lib/style.css'
import './App.css'
import Tablist from './components/Tablist'
import Body from './components/Body'
import LoginBox from './components/LoginBox'
import CountdownTimer from './components/CountdownTimer';
import React, {useEffect, useState} from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)


  let [tabId, setTabId] = useState(0)
  const tabs = ['Main', 'Libby', 'Elinor', 'Chris', 'Thomas', 'Sam', 'Dawson', 'Julian', 'Danielle', 'Leon', 'Colter', 'Ashley']

  return (
    <div className="App">
      {loggedIn?
            <div>
              <CountdownTimer countdownTimestampMs={1668227400000}/>
              <Tablist setTabId={setTabId} tabId={tabId} labels={tabs}/>
              <Body setTabId={setTabId} tabId={tabId} labels={tabs} user={user}/>
            </div>
            :
            <div className="box-container">
              <LoginBox setLoggedIn={setLoggedIn} setUser={setUser}/>
            </div>
      }
      <h3>&copy; 2022 | Chris Garsia</h3>
    </div>
  );
}

export default App;
