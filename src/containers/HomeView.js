// HomeView.js

import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'



export default class HomeView extends Component {
  render(){
    return(
      <div id='snow'>
        <div className="viewNorth">
            <div>
              <br></br>
              <h1>
                Home Page
              </h1>
              <br></br>
              <div className='jt'>
                <Jumbotron />
              </div>
            </div>
        </div>
      </div>
    )
  }

}
