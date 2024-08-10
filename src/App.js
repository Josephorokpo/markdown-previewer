import React from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Previewer</h1>
        <Editor />
        <Preview />
      </header>
    </div>
  );
}
