import React, { useState } from 'react';
import CodeEditor from './CodeEditor';

function EditorMain() {
  const [iframeHtml, setIframeHtml] = useState('');

  function handleRunClick(htmlValue, cssValue, jsValue) {
    const iframeContent = `
            <html>
            <head>
                <style>${cssValue}</style>
            </head>
            <body>
                ${htmlValue}
                <script>${jsValue}</script>
            </body>
            </html>
        `;
      setIframeHtml(iframeContent);
  }

  return (
    <div className='flex justify-between'>
      <CodeEditor onRunClick={handleRunClick} />
      <div className='h-screen w-full border-l border-black'>
        <iframe
          className='w-full h-full'
          title="Result"
          srcDoc={iframeHtml}
        ></iframe>
      </div>
    </div>
  );
}

export default EditorMain;

