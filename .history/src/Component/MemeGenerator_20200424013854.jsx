import React, { Component } from 'react'

class MemeGenerator
 extends Component {
     constructor(){
         super()
         this.state={
              topText:'',
              bottomText:'',
              randomImage: 'https://api.imgflip.com/'
         }
     }
     componentDidMount(){
         fetch('https://api.imgflip.com/get')
     }
  render() {
    return (
      <div>
          <h1>Hello Dorcas</h1>
      </div>
    )
  }
}

export default MemeGenerator

