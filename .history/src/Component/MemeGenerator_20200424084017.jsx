import React, { Component } from 'react';

class MemeGenerator
 extends Component {
     constructor(){
         super()
         this.state={
              topText:'',
              bottomText:'',
              randomImage: 'https://i.imgflip.com/1bij.jpg',
              allMemeImg:[]
         };
     }
     componentDidMount(){
         fetch('https://api.imgflip.com/get_names')
         .then(Response=>Response.json())
         .then(Response=>{
           const {memes}= Response.data
           console.log([0])
           this.setState({allMemeImg:memes});
         });
         
         
     }
  render() {
    return 
    <div>
      
    </div>
        <h1> MEM COMPONENT<h1/>
          
    )
  }
}

export default MemeGenerator

