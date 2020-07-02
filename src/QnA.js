import React from "react";

class QnA extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div> <h1><center><font color="#FFFFFF">HERE FOR YOU</font></center></h1>
      <div style={{ backgroundColor: "white" }} className="quotebox">
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <h1 id="quote">"{this.props.quote}"</h1>
          <h5 id="author">
            -{this.props.author ? this.props.author : ""}-
          </h5>
        </div>
        <button
          style={{ backgroundColor: randomColor }}
          id="newquote"
          onClick={this.props.handleClick}
        >
          Next
        </button>
      </div>
      </div>
    );
  }
}

export default QnA;