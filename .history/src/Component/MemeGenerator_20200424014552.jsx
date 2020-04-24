import React, { Component } from 'react'

class MemeGenerator
 extends Component {
     constructor(){
         super()
         this.state={
              topText:'',
              bottomText:'',
              randomImage: 'https://api.imgflip.com/'
              allMem
         }
     }
     componentDidMount(){
         fetch('https://api.imgflip.com/get_names')
         .then(Response=>Response.json())
         .then(Response=>{
             const {memes}=Response.data
         })
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

