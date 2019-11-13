import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

const EditorComponent = (props) => {
  function handleTextChange(e){
    const markdown = e.target.value;
    props.submitMarkDown(markdown);
  }

  return (
    <div>
      <h4>Markdown Editor</h4>
      <div className="input-field col s12">
        <textarea id="textarea1" className="materialize-textarea" onKeyUp={handleTextChange}></textarea>
        <label htmlFor="textarea1">Enter markdown here</label>
      </div>
    </div>
  )
}

export default EditorComponent;
