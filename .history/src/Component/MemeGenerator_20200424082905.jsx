import React, { Component } from 'react'

class MemeGenerator
 extends Component {
     constructor(){
         super()
         this.state={
              topText:'',
              bottomText:'',
              randomImage: 'https://i.imgflip.com/1bij.jpg',
              allMemeImg:[]
         }
     }
     componentDidMount(){
         fetch('https://api.imgflip.com/get_names')
         .then(Response=>Response.json())
         .then(Response=>{
           const {memes}= re
         })
         
         
     }
  render() {
    return (
      <div>
        <h1> MEM COMPONENT</h1>
      </div>
          
    )
  }
}

export default MemeGenerator

