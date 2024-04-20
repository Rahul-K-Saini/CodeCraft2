import { Editor } from "@monaco-editor/react";
import useTheme from "../../context/theme";
import {RiArrowRightSLine} from 'react-icons/ri';
import React, { useState, useEffect } from "react";
import axios from "axios";

function Programming() {
    const { theme } = useTheme();
    const [code, setCode] = useState("");
    const [data, setData] = useState('');
    const [language, setLanguage] = useState('py');

    const editorTheme = theme === 'dark' ? 'vs-dark' : 'vs-light';

    const handleCodeChange = (value) => {
        setCode(value);
    };

    const iconStyle = {
        display:"inline",
    }

    const handleSubmit = async () => {
        const payload = {
            language: language,
            code
        };
        try {
            const output = await axios.post("http://localhost:5000/run", payload);
            console.log(output);
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
                <div className="flex justify-between bg-[rgb(231,233,235)]  px-4 items-center dark:bg-[rgb(80,90,100)]">
                    <div>
                    <label className="dark:text-white " htmlFor="lang">Language: </label>
                    <select
                        className="dark:bg-gray-300"
                        id='lang'
                        value={language}
                        onChange={(e) => {
                            setLanguage(e.target.value);
                        }}
                    >
                        <option value='py'>Python</option>
                        <option value='cpp'>C++</option>
                        <option value='java'>Java</option>
                    </select>
                    </div>
            <button className='px-5 py-2 my-1 rounded  bg-green-400 hover:bg-green-500' onClick={handleSubmit} >Run<RiArrowRightSLine style={iconStyle}/></button>
                </div>
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
