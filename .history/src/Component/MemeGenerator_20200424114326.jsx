import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/1bij.jpg",
      allMemeImg: []
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(Response => Response.json())
      .then(Response => {
        const { memes } = Response.data;
        this.setState({ allMemeImg: memes });
      });
      this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event){
    console.log('working')
  }
  render() {
    return (
      <div>
        <form className="meme-form">
          <input type="text"
           name="topText"
           value={this.state.topText}
           placeholder="Top Text"
           onchange={this.handleChange} />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom Text"
            onhange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default MemeGenerator;
