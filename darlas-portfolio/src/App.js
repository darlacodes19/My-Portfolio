
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from "./components/About"
import Contact from "./components/Contact"
import LandingPage from "./components/LandingPage"
import Projects from "./components/Projects"

import Header from "./components/Header"
import Layout from './Layout'
import './App.css'

function App() {
 
  return (
    <BrowserRouter> 
    <div className="App">
      {/* <Header />
      <Layout />  */}

      <Header /> 
      <Layout />
    
        <Routes>
           
            <Route exact path="/" component={<LandingPage />} />
            <Route exact path="/about" component={<About />} />  
            <Route exact path="/projects" component={<Projects />} />
            <Route exact path="/contact" component={<Contact />} /> 
         </Routes> 
         
   
    </div>
    </BrowserRouter>
  )
}

export default App
