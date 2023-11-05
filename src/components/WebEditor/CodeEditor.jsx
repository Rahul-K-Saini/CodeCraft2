import React, { useRef, useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import useTheme from '../../context/theme';
import FileButtons from '../Buttons/FileButtons';

const files = {
    "index.html": {
        name: "index.html",
        language: "html",
        value: "<h1>Welcome to CodeCraft</h1>"
    },
    "style.css": {
        name: "style.css",
        language: "css",
        value: "/* Apply your styles here */"
    },
    "script.js": {
        name: "script.js",
        language: "javascript",
        value: `console.log("Hello CodeCraft")`
    }
}


export default function CodeEditor({ onRunClick }) {
    const {theme} = useTheme();
    const [fileName, setFileName] = useState("index.html");
    const editorRef = useRef(null);
    const [htmlValue, setHtmlValue] = useState('');
    const [cssValue, setCssValue] = useState('');
    const [jsValue, setJsValue] = useState('')

    useEffect(() => {
        const storedHtmlValue = localStorage.getItem('htmlValue');
        const storedCssValue = localStorage.getItem('cssValue');
        const storedJsValue = localStorage.getItem('jsValue');

        if (storedHtmlValue) setHtmlValue(storedHtmlValue);
        if (storedCssValue) setCssValue(storedCssValue);
        if (storedJsValue) setJsValue(storedJsValue);
    }, []);

    useEffect(() => {
        localStorage.setItem('htmlValue', htmlValue);
        localStorage.setItem('cssValue', cssValue);
        localStorage.setItem('jsValue', jsValue);
    }, [htmlValue, cssValue, jsValue]);

    function handleEditorDidMount(editor) {
        editorRef.current = editor;
    }

    function handleRunClick() {
        onRunClick(htmlValue, cssValue, jsValue);
    }

    const file = files[fileName];

    return (
        <div className='w-50vw mb-2 w-screen'>
                <FileButtons setFileName={setFileName} fileName={fileName} handleRunClick={handleRunClick}/>
            <Editor
                options={{
                    wordWrap: 'on', 
                    cursorBlinking: "smooth",
                    smoothScrolling: true,
                    fontFamily:"Poppins", // later add a option to add font families with option and select
                }}
                height="94vh"
                width="50vw"
                theme={(theme=='dark')? "vs-dark" : "vs-light"}
                onMount={handleEditorDidMount}
                path={file.name}
                value={file.language === 'html' ? htmlValue : file.language === 'css' ? cssValue : jsValue}
                language={file.language}
                onChange={(value) => {
                    if (file.language === 'html') {
                        setHtmlValue(value);
                    } else if (file.language === 'css') {
                        setCssValue(value);
                    } else if (file.language === 'javascript') {
                        setJsValue(value);
                    }
                }}
            />
        </div>
    )
}
