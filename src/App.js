import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`
# Welcome to My Custom Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's a link to [GitHub](https://www.github.com).

Here's some inline code, \`<div></div>\`.

\`\`\`
// This is a multi-line code block:

function sayHello() {
  console.log("Hello, world!");
}
\`\`\`

You can also make text **bold**... or _italic_.
Or... **_both!_**

Here's a blockquote:
> To be, or not to be, that is the question.

- And of course, there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
  `);
    
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
