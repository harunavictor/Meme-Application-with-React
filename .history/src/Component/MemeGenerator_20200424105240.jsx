
import React, { Component } from 'react'

class MemeGenerator extends Component {

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
             fetch('https://api.imgflip.com/get_memes')
             .then(Response=>Response.json())
             .then(Response=>{
               const {memes}= Response.data
               console.log(memes[0])
               this.setState({allMemeImg:memes});
             });
             
         }
  render() {
    return (
      <div>
        <form className='meme-form'>
        < onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default MemeGenerator




