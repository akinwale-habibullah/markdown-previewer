import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import EditorComponent from './components/editor/Editor';
import PreviewerComponent from './components/previewer/Previewer';

function App() {
  return (
    <div className="container" style={{textAlign: "center"}}>
      <h1>Markdown previewer</h1>
      <div className="row">
        <div className="col s6">
          <EditorComponent />
        </div>
        <div className="col s6">
          <PreviewerComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
