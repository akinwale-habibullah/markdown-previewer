import React from 'react';
import './Previewer.css';

const PreviewerComponent = (props) => {
  const html = {
    __html: props.htmlOutput
  }
  return (
    <div>
      <h4>Previewer</h4>
      {props.htmlOutput ? <div dangerouslySetInnerHTML={html}/> : <p>'Enter text in the markdown editor'</p>}
    </div>
  )
}

export default PreviewerComponent;
