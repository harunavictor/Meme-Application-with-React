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
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(Response => Response.json())
      .then(Response => {
        const { memes } = Response.data;
        this.setState({ allMemeImg: memes });
      });
    };

  handleChange(event) {
    const {name,value}= event.target
 this.setState({[name]:value})
  }
  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top Text"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom Text"
            onChange={this.handleChange}
          />
          <button style={{backgroundColor:'#6441A5'}}>Gen</button>
        </form>
        <div>
          <img src="https://i.imgflip.com/1bij.jpg" alt=""/>
          <h1></h1>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
