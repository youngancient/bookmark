import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import DotLoader from "react-spinners/DotLoader";
import { motion, AnimatePresence } from "framer-motion";


const loaderVariant = {
  exit:{
    opacity: 0,
    transition :{
      duration : 2
    }
  }
}

function App() {
  const [isClicked, setClick ] = useState(false);
  const [isLoading, setLoading] = useState(false);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  })
  const mobileMenuHandler =()=> setClick(!isClicked);
  return (
    <div className={`App ${isClicked ? `shorten` : '' } `}>
      <AnimatePresence>
      {
          isLoading ?
          <motion.div className="loader"
          variants={loaderVariant}
          key= "hinokami"
          exit = "exit"
          >
            <DotLoader color={'hsl(231, 69%, 60%)'} size={50} />
          </motion.div>
          : 
          <motion.div
          key= "kagura"
          >
            <Header isClicked={isClicked} setClick={mobileMenuHandler} />
            <Main/>
            <Footer/>
          </motion.div>
        }
        </AnimatePresence>
    </div>
  )
}

export default App
