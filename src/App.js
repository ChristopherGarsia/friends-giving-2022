import lastSupper from './LastSupper.png';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Friends Giving 2021 Tahoe Edition!
        </p>
        <img src={lastSupper} class="App-logo" alt="logo" />
        <p>
          This site is currently under construction...
        </p>
        <p>
          Please Enter your Mobile Number to receive Text Updates for Friendsgiving
        </p>
        <div>
        <PhoneInput
          onlyCountries={['us']}
          country={'us'}
        />
        <input type="submit" value="Submit"/>
        </div>
      </header>
    </div>
  );
}

export default App;
