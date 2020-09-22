import React, { useState, useEffect } from 'react';
import './App.css';
import { MetaContainer } from './styles'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import About from './components/About';
import Demo from './components/Demo';
import Team from './components/Team';
import Product from './components/Product';
import Signup from './components/Signup';
import Footer from './components/Footer';

// import { API } from  'aws-amplify';

function App() {
  const [greeting, setGreeting] = useState(null)
  // async function fetchGreeting() {
  //   const apiData = await  API.get('pythonapi', '/text')
  //   setGreeting(apiData.message)
  // }
  // useEffect(() => {
  //   fetchGreeting()

  // }, [])


  return (
    <MetaContainer>
    <h1>{greeting}</h1>

      <BrowserRouter>
          <Navbar/>
          <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/demo" component={Demo} />
           <Route path="/about" component={About}  />
           <Route path="/product" component={Product} />
           <Route path="/team" component={Team} />
           <Route path="/signup" component={Signup} />
         </Switch>
      </BrowserRouter>
      <Footer />
    </MetaContainer>
  );
}

export default App;
