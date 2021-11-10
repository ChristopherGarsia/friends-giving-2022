import 'react-phone-input-2/lib/style.css'
import './App.css'
import Tablist from './components/Tablist'
import Body from './components/Body'
import LoginBox from './components/LoginBox'
import React, {useEffect, useState} from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)


  let [tabId, setTabId] = useState(0)
  const tabs = ['Main', 'Alexis', 'Drew', 'Chris', 'Elinor', 'Kelly', 'Libby', 'Sam', 'Thomas']

  return (
    <div className="App">
      {loggedIn?
            <div>
              <Tablist setTabId={setTabId} tabId={tabId} labels={tabs}/>
              <Body setTabId={setTabId} tabId={tabId} labels={tabs} user={user}/>
            </div>
            :
            <div className="box-container">
              <LoginBox setLoggedIn={setLoggedIn} setUser={setUser}/>
            </div>
      }
    </div>
  );
}

export default App;
