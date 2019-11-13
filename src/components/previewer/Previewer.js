import React from 'react';
import './Previewer.css';

const PreviewerComponent = (props) => {
  const html = {
    __html: props.htmlOutput
  }
  console.log(html);
  return (
    <div>
      <h4>Previewer</h4>
      <div dangerouslySetInnerHTML={html} id="preview-div"></div>
      {/* {props.htmlOutput ? <div dangerouslySetInnerHTML={html}/> : <p>'No item yet'</p>} */}
    </div>
  )
}

export default PreviewerComponent;
