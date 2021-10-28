import React from "react";

export class Welcome extends React.Component{
  constructor(props){
    super(props);

    this.handleYes = this.handleYes.bind(this);
  }

  handleYes(){
    this.props.initiate();
  }

  handleNo(){

  }

  render(){
    return(
      <div>
        <h2>Welcome to Shotgun!</h2>
        <h3>The ultimate drinking game</h3>
        <h4>Do you want to start a new game?</h4>
        <button onClick={this.handleYes} >YES</button>
        {/* <button onClick={this.handleNo} >No, I'm a pussy (not yet activated)</button> */}
      </div>
    )
  }
}