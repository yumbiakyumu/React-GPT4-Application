import React from 'react'
import { Footer, Blog, Headers, Possibility, WhatGPT4, Features} from './containers';
import { CTA, Brand, Navbar} from './components';
import './App.css';
const App = () => {
  return (
    <div classname="App">
      <div classname="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT4 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  )
}

export default App