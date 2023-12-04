import { BiLogoJavascript, BiLogoCss3, BiLogoHtml5 } from "react-icons/bi";
import {RiArrowRightSLine} from 'react-icons/ri';

function FileButtons({ setFileName, fileName,handleRunClick }) {
    const iconStyle = {
        display:"inline",
    }
    const btnsMainStyle = 'px-3 py-2 my-1 rounded transition duration-300 ease-in-out';
    const btn_bg = "bg-gradient-to-r from-red-400 to-red-500";
    return (
        <div className='flex justify-between px-2 py-1 bg-[rgb(231,233,235)] dark:bg-[rgb(56,68,77)]'>
            <button
            className={`${btnsMainStyle} ${fileName === "index.html"
                    ? `${btn_bg}`
                    : "bg-sky-300 dark:bg-gray-600 dark:text-[rgb(220,220,220)] hover:bg-gradient-to-r hover:from-red-400 hover:to-red-500"
                }`}
            onClick={() => {
                setFileName("index.html");
            }}
        >
            <BiLogoHtml5 style={iconStyle} />
            index.html
        </button>
            <button
                className={`${btnsMainStyle} ${fileName === "style.css"
                        ? `${btn_bg}`
                        : "bg-sky-300 dark:bg-gray-600 dark:text-[rgb(220,220,220)] hover:bg-gradient-to-r hover:from-red-400 hover:to-red-500"
                    }`}
                onClick={() => {
                    setFileName("style.css");
                }}
            >
                <BiLogoCss3 style={iconStyle} />
                style.css
            </button>
            <button
                className={`${btnsMainStyle} ${fileName === "script.js"
                        ? `${btn_bg}`
                        : "bg-sky-300 dark:bg-gray-600 dark:text-[rgb(220,220,220)] hover:bg-gradient-to-r hover:from-red-400 hover:to-red-500"
                    }`}
                onClick={() => {
                    setFileName("script.js");
                }}
            >
                <BiLogoJavascript style={iconStyle} />
                script.js
            </button>
            <button className='px-5 py-2 my-1 rounded  bg-green-400 hover:bg-green-500' onClick={handleRunClick}>Run<RiArrowRightSLine style={iconStyle}/></button>
        </div>
    )
}

export default FileButtons