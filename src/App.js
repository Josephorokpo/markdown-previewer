import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`
# Project Documentation

## Introduction
Welcome to the documentation for my Markdown Previewer! This tool lets you type and preview Markdown in real-time.

## Features
- **Live Preview**: See your Markdown rendered as you type.
- **Code Highlighting**: Display code blocks with syntax highlighting.
- **Responsive Design**: Works seamlessly across devices.

### Example Code Block
\`\`\`javascript
function greetUser(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

## Links
- [View the project on GitHub](https://github.com/josephorokpo/random-quote-machine)

## Images
Here's the GitHub logo:
![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
  `);

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div className="container">
        <div className="editor-container">
          <h2>Markdown Editor</h2>
          <Editor value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
        </div>
        <div className="preview-container">
          <h2>Preview</h2>
          <Preview markdown={markdown} />
        </div>
      </div>
    </div>
  );
}

export default App;
