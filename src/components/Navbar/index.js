import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"

import { Button, Links, NavItem, NavbarContainer, NavbarInner, Brand } from './styles'

const Navbar = () => {
    return (
      <NavbarContainer>
          <NavbarInner>
              <Router>
                  <Link to='/'> <Brand>nBrief</Brand></Link>
                  <Links>
                      <Link to='/demo'><NavItem>demo</NavItem></Link>
                      <Link to='/about'><NavItem>about</NavItem></Link>
                      <Link to='/product'><NavItem>product</NavItem></Link>
                      <Link to='/team'><NavItem>team</NavItem></Link>
                      <Link to='/signup'><Button>sign up</Button></Link>
                  </Links>
             </Router>
          </NavbarInner>
      </NavbarContainer>

    )
}

export default Navbar
