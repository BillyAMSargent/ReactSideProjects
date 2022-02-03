import React, { useState } from 'react';
import { LoginService } from '../../services/Login.Service';
import Input from '../Shared/TextInput/TextInput';

function Login() {
  const [isAuth, setAuth] = useState(false);
  const dummyLoginService = new LoginService();
     
  const handleButtonClick = () => {
    dummyLoginService.SignIn().then(() => {
      setAuth(true);
      console.log("Authentication complete!");
    });
  }

  let authMessage;
  if (isAuth) {
    authMessage = <h3>You are authenticated!</h3>
  } else {
    authMessage = <h3>You are not authenticated!</h3>
  }

  return (
      <div className='login-element'>
        <h1>BSProjects - V0.1</h1>
        <div className="login-inputs">
          <div className="username-input">
            <Input type="text" label="Username" placeholder="Enter your username" />
          </div>
          <div className="password-input">
            <Input type="password" label="Password" placeholder="Enter your password" />
          </div>

          <input type="button" value="Login" onClick={handleButtonClick}/>

          {authMessage}
        </div>
      </div>
  );
}


export default Login;