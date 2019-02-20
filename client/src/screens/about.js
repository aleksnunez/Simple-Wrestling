import React, { Component } from 'react'

import Header from '../components/header.js'
import Team from '../components/team.js'
import '../styles/about.css'

class About extends Component {
  render() {
    return (
      <div>
        <Header text={'The Team'} />
        <Team />
      </div>
    )
  }
}

export default About
