import React from 'react'
import john from './images/john-doe.png'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <img src={john} alt="john"/>
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.</p>
          <p> I am John Doe, a super senior advisor for an independently owned cinancial planning company called
            Intense</p>
          <button className="button">Explore more</button>
        </div>
      </div>
    </div>
  )
}

export default About;