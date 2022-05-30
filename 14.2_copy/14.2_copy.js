import React, { Component } from 'react'

export default class Main extends Component {
  constructor(props) {
      super(props);
      this.textareaRef = React.createRef(); //initial value of ref is null
  }
  
  handleSelectText = ({ current: element }) => element.select();

  handleCopyText = (ref) => {
      this.handleSelectText(ref);
      window.document.execCommand("copy");
  }
    render() {
    return (
      <>
      <textarea ref={this.textareaRef} name="" id="" cols="30" rows="10" />
      <button onClick ={()=> this.handleCopyText(this.textareaRef)} >Copy</button>
      </>
    )
  }
}
