import { Editor } from "@monaco-editor/react";
import useTheme from "../../context/theme";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Programming() {
    const { theme } = useTheme();
    const [code, setCode] = useState("");
    const [data, setData] = useState('');
    const [language, setLanguage] = useState('cpp');

    const editorTheme = theme === 'dark' ? 'vs-dark' : 'vs-light';

    const handleCodeChange = (value) => {
        setCode(value);
    };

    const handleSubmit = async () => {
        const payload = {
            language: language,
            code
        };
        try {
            const output = await axios.post("http://localhost:5000/run", payload);
            const { data } = output;
            setData(data.output);
        } catch (err) {
            setData(err.response.data.stderr)
        }
    }

    // Default code snippets for each language
    useEffect(() => {
        switch (language) {
            case 'cpp':
                setCode('#include <iostream>\nusing namespace std;\n\nint main() {\n    // Your C++ code here\n    return 0;\n}');
                break;
            case 'py':
                setCode('# Your Python code here');
                break;
            case 'java':
                setCode('//public class should be CodeCraft \npublic class CodeCraft {\n    public static void main(String[] args) {\n        // Your Java code here\n    }\n}');
                break;
            default:
                setCode('');
                break;
        }
    }, [language]);

    return (
        <div className="flex">
            <div>
                <div>
                    <label htmlFor="lang">Language:</label>
                    <select
                        id='lang'
                        value={language}
                        onChange={(e) => {
                            setLanguage(e.target.value);
                        }}
                    >
                        <option value='cpp'>C++</option>
                        <option value='py'>Python</option>
                        <option value='java'>Java</option>
                    </select>
                </div>
                <button onClick={handleSubmit}>Run</button>
                <Editor
                    height="94vh"
                    width="50vw"
                    theme={editorTheme}
                    options={{
                        wordWrap: 'on',
                        cursorBlinking: 'smooth',
                        smoothScrolling: true,
                        fontFamily: 'Poppins',
                    }}
                    language={(language === 'py') ? 'python' : language}
                    value={code} 
                    onChange={handleCodeChange}
                />
            </div>
            <div className="px-4 py-2">
                {data}
            </div>
        </div>
    );
}

export default Programming;
