import React, { Component } from 'react'

class MemeGenerator
 extends Component {
     constructor(){
         super()
         this.state={
              topText:'',
              bottomText:'',
              randomImage: 'http://www.pngall.com/wp-content/uploads/5/3D-Mask-PNG-Image-File.png'
         }
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

