import React from 'react';

function Editor({ value, onChange }) {
  return (
    <textarea
      id="editor"
      value={value}
      onChange={onChange}
      rows="10"
      cols="50"
    />
  );
}

export default Editor;