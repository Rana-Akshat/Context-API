import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>This is an example of Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
