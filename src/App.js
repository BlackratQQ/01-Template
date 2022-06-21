import React from 'react'
import NavBar from "./components/Navbar";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <NavBar/>
      <Welcome />
      <About />
      <Testimonials />
    </div>
  )
}

export default App;
