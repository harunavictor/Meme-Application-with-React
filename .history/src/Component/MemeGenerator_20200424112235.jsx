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
        console.log(memes[0]);
        this.setState({ allMemeImg: memes });
      });
  }
  render() {
    return (
      <div>
        <form className="meme-form">
          <input type="text"
           name="bottomText" value={"this.state.topText"} />
          <input
            type="text"
            name="bottomText"
            value={"this.state.bottomText"}
          />
        </form>
      </div>
    );
  }
}

export default MemeGenerator;
