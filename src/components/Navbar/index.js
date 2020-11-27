import React from 'react';
import 'materialize-css'


import {Navbar, Icon} from 'react-materialize'
import {NavLink} from 'react-router-dom'

import { Tabs, Tab } from 'react-materialize'

const Index = () => {
    return(
        <div>

<Navbar
  alignLinks="right"
  brand={<a className="brand-logo black-text" href="/">TutChit</a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
  className=" white z-depth-0 nav-wrapper"
>

{/* <Tab
    active
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: true,
      tabWidth: 50,
    }}
    title="tab 2"
  >
    <NavLink to="/" className="white-text">
    Home
<p> how we can help</p>
  </NavLink>
  </Tab>

  
  <Tab
    active
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: true,
      tabWidth: 50,
    }}
    title="tab 2"
  >
    <NavLink to="/" className="white-text">
    Home
<p> how we can help</p>
  </NavLink>
  </Tab>


  <Tab
    active
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: true,
      tabWidth: 50,
    }}
    title="tab 2"
  >
    <NavLink to="/" className="white-text">
    Home
<p> how we can help</p>
  </NavLink>
  </Tab>

  <Tab
    active
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: true,
      tabWidth: 50,
    }}
    title="tab 2"
  >
    <NavLink to="/" className="white-text">
    Home
<p> how we can help</p>
  </NavLink>
  </Tab>

  <Tab
    active
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: true,
      tabWidth: 50,
    }}
    title="tab 2"
  >
    <NavLink to="/" className="white-text">
    Home
<p> how we can help</p>
  </NavLink>
  </Tab>
  <Tab
    active
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: true,
      tabWidth: 50,
    }}
    title="tab 2"
  >
    <NavLink to="/" className="white-text">
    Home
<p> how we can help</p>
  </NavLink>
  </Tab> */}










<NavLink to="/" className="black-text">
    Home
  </NavLink>
  <a href="#about" id ="#about" className="black-text">
About
  </a>
  <a href="#feature" id ="#feature"  className="black-text">
Feature
  </a>
  <a href="#testimonial" id ="#testimonial"  className="black-text">
Testimonial
  </a>
  <NavLink to="/login" className="black-text">
    Login
  </NavLink>
  <NavLink to="/signup"  className="black-text">
    SignUp
  </NavLink>

</Navbar>

        </div>
    )
}

export default Index;