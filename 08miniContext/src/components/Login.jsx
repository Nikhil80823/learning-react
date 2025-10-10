import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)


  const handleSubmit = (e) => {
    e.preventDefault()
    if (password || username == '') {
      document.querySelector(".message").innerHTML="please enter a valid username or password"
      
    }
    setUser({username, password})
  }

  return (
    <div>
      <h2>Login</h2>
      <input type='text'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder='Username'/>
      <input type='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Password'/>
      <button onClick={handleSubmit}>Submit</button>
      <p className='message'></p>
    </div>
  )
}

export default Login