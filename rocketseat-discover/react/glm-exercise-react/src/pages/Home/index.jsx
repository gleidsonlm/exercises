import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import './index.css'

// import { User } from './components/User'
import { User } from '../../components/User'

function Home() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <nav className="App-nav navbar navbar-">
          <ul className="">
            <li className="nav-item">
              <a href="#user">User</a>
            </li>
            <li className="nav-item">
              <a href='#class'>Class</a>
            </li>
            <li className="nav-item">
              <a href='#enrol'>Enrolments</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
            <h1 className="title">Management</h1>
      </main>

      <User />

      </div>
  )
}
export default Home