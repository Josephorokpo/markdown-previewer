import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`# Heading 1
## Heading 2
[Link](https://example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**`);

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div className="container">
        <Editor value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
