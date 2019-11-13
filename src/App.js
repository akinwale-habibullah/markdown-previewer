import React from 'react';
import { Remarkable } from 'remarkable';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import EditorComponent from './components/editor/Editor';
import PreviewerComponent from './components/previewer/Previewer';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      htmlOutput: ''
    }

    this.submitMarkDown = this.submitMarkDown.bind(this);
  }

  submitMarkDown(str){
    const md = new Remarkable({
      html:  true,
      breaks: true,
    });
    const htmlOutput = md.render(str);
    this.setState((state, props) => ({
      htmlOutput
    }))
  }

  render(){
    return (
      <div className="container">
        <h1 id="app-header">Markdown previewer</h1>
        <div className="row">
          <div className="col s12 m6 l5">
            <EditorComponent submitMarkDown={this.submitMarkDown}/>
          </div>
          <div className="col s12 m6 l7">
            <PreviewerComponent htmlOutput={this.state.htmlOutput}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
