import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

export default class DraftInput extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({editorState});
  }

  render() {
    console.log(this.state.editorState);
    return (
      <div id="editor-container">
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}
