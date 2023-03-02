import './App.css'
import './loginStyle.css'
import axios from 'axios';
import { useState } from 'react';


function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:6000/test'
    try {
      const submitData = {
        email: email,
        password: password
      };
      const response = await axios.post(url, submitData);
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='loginPage'>

          <div className='form'>
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please <br /> sing in with you personal info.</p>


            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(handleEmail) => {
                setEmail(handleEmail.target.value)
              }} />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(handlePassword) => {
                setPassword(handlePassword.target.value)
              }} />

            <button type="submit">SING IN</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default App;
