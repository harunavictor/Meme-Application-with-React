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
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(Response => Response.json())
      .then(Response => {
        const { memes } = Response.data;
        this.setState({ allMemeImg: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event){
  event.preventDefault()
  const randNum=Math.floor(Math.random) * this.state.allMemeImg.l
  }
  render() {
    return (
      <div>
        <form className="meme-form"  onSubmit={this.handleSubmit}>
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
          <button style={{ backgroundColor: "#6441A5" }}>Gen</button>
        </form>
        <div className='meme'>
          <img src={this.state.randomImage} alt="" />
          <h2 className="top"> {this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
