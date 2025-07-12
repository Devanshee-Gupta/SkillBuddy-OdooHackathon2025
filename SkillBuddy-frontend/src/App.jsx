import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Routing from './routes/routes';
import NavbarComponent from './components/Navbar/navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarComponent />
      <Routing />
    </>
  )
}

export default App
