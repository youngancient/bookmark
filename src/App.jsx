import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import DotLoader from "react-spinners/DotLoader";


function App() {
  const [isClicked, setClick ] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  })
  const mobileMenuHandler =()=> setClick(!isClicked);
  return (
    <div className={`App ${isClicked ? `shorten` : '' } `}>
      {
          isLoading ?
          <div className="loader">
            <DotLoader color={'hsl(231, 69%, 60%)'} size={50} />
          </div>
          : 
          <>
            <Header isClicked={isClicked} setClick={mobileMenuHandler} />
            <Main/>
            <Footer/>
          </>
        }
    </div>
  )
}

export default App
