import 'react-phone-input-2/lib/style.css'
import './App.css'
import Tablist from './components/Tablist'
import Body from './components/Body'
import LoginBox from './components/LoginBox'
import CountdownTimer from './components/CountdownTimer';
import React, {useState} from 'react'
import Snowfall from 'react-snowfall'
import leaf1Import from './images/leaf1.png'
import UnauthorizedScreen from './components/UnauthorizedScreen'

function App() {

  const leaf1 = document.createElement('img')
  leaf1.src = leaf1Import
  const images = [leaf1]
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [userUnauthorized, setUserUnauthorized] = useState(false)
  const [userId, setUserId] = useState(null)
  const [songPlaying, setSongPlaying] = useState(false)

  let [tabId, setTabId] = useState(0)
  const tabs = ['Main', 'Alexis', 'Chris', 'Drew', 'Elinor', 'Libby', 'Sam', 'Thomas', 'Will'] // 'Kelly'

  return (
    <div className="App" >
      {loggedIn?
      <div>
        <CountdownTimer countdownTimestampMs={1699758000000}/> 
        <Tablist setTabId={setTabId} tabId={tabId} labels={tabs}/>
        <Body setTabId={setTabId} tabId={tabId} labels={tabs} user={user} userId={userId} songPlaying={songPlaying} setSongPlaying={setSongPlaying}/>
        <Snowfall images={images} radius={[50, 150]} snowflakeCount={5} speed={[.25,1.5]} wind={[0,0]} style={{ zIndex:-10}} />  
      </div>
      :
      userUnauthorized? 
      <UnauthorizedScreen></UnauthorizedScreen>
      :
      <div className="box-container">
        <LoginBox setLoggedIn={setLoggedIn} setUser={setUser} setUserId={setUserId} setUserUnauthorized={setUserUnauthorized}/>
      </div>
      }
      <h3>&copy; 2023 | Chris Garsia</h3>
    </div>
  );
}

export default App;
