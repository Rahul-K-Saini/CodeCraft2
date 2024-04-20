import axios from "axios";
import React, { useState } from "react";

function CodeConverter() {
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [convertedCode, setConvertedCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } 
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(convertedCode)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const handleConversion = async () => {
    setLoading(true);

    const data = {
      text: code,
      targetLanguage: language,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.post("http://localhost:5000/convert", data, {
        headers,
      });

      setConvertedCode(res.data.convertedText);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex border py-4 justify-between px-2 dark:bg-gray-950">
      <textarea
        onChange={(e) => setCode(e.target.value)}
        className="w-[39%] border-2  border-gray-500 p-2 font-mono text-sm"
        name="input-code"
        id="input-code"
        cols="53"
        rows="22"
        value={code}
        placeholder="Enter your input code here"
      ></textarea>

      <div className="flex flex-col gap-4 w-[17%]">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-1 py-2 outline-none border-2"
        >
          <option value="">Select Output Language</option>
          <option value="C++" id="C++">
            C++
          </option>
          <option value="Golang" id="Golang">
            Golang
          </option>
          <option value="Java" id="Java">
            Java
          </option>
          <option value="JavaScript" id="JavaScript">
            JavaScript
          </option>
          <option value="Python" id="Python">
            Python
          </option>
          <option value="R" id="R">
            R
          </option>
          <option value="C" id="C">
            C
          </option>
          <option value="Csharp" id="Csharp">
            Csharp
          </option>
          <option value="Julia" id="Julia">
            Julia
          </option>
          <option value="Perl" id="Perl">
            Perl
          </option>
          <option value="Matlab" id="Matlab">
            Matlab
          </option>
          <option value="Kotlin" id="Kotlin">
            Kotlin
          </option>
          <option value="PHP" id="PHP">
            PHP
          </option>
          <option value="Ruby" id="Ruby">
            Ruby
          </option>
          <option value="Rust" id="Rust">
            Rust
          </option>
          <option value="TypeScript" id="TypeScript">
            TypeScript
          </option>
          <option value="Lua" id="Lua">
            Lua
          </option>
          <option value="SAS" id="SAS">
            SAS
          </option>
          <option value="Fortran" id="Fortran">
            Fortran
          </option>
          <option value="Lisp" id="Lisp">
            Lisp
          </option>
          <option value="Scala" id="Scala">
            Scala
          </option>
          <option value="Assembly" id="Assembly">
            Assembly
          </option>
          <option value="ActionScript" id="ActionScript">
            ActionScript
          </option>
          <option value="Clojure" id="Clojure">
            Clojure
          </option>
          <option value="CoffeeScript" id="CoffeeScript">
            CoffeeScript
          </option>
          <option value="Dart" id="Dart">
            Dart
          </option>
          <option value="COBOL" id="COBOL">
            COBOL
          </option>
          <option value="Elixir" id="Elixir">
            Elixir
          </option>
          <option value="Groovy" id="Groovy">
            Groovy
          </option>
          <option value="Erlang" id="Erlang">
            Erlang
          </option>
          <option value="Haskell" id="Haskell">
            Haskell
          </option>
          <option value="Pascal" id="Pascal">
            Pascal
          </option>
          <option value="Swift" id="Swift">
            Swift
          </option>
          <option value="Scheme" id="Scheme">
            Scheme
          </option>
          <option value="Racket" id="Racket">
            Racket
          </option>
          <option value="OCaml" id="OCaml">
            OCaml
          </option>
          <option value="Elm" id="Elm">
            Elm
          </option>
          <option value="Haxe" id="Haxe">
            Haxe
          </option>
          <option value="Crystal" id="Crystal">
            Crystal
          </option>
          <option value="Fsharp" id="Fsharp">
            Fsharp
          </option>
          <option value="Tcl" id="Tcl">
            Tcl
          </option>
          <option value="VB.NET" id="VB.NET">
            VB.NET
          </option>
          <option value="Objective_C" id="Objective_C">
            Objective_C
          </option>
          <option value="Ada" id="Ada">
            Ada
          </option>
          <option value="Vala" id="Vala">
            Vala
          </option>
          <option value="Pyspark" id="Pyspark">
            Pyspark
          </option>
        </select>

        <button
          onClick={handleConversion}
          className={`${loading ? "bg-blue-400 cursor-not-allowed":"bg-blue-500"} text-white py-2 px-4 rounded`}
          disabled={loading}

        >
          Convert
        </button>
       <button onClick={handleCopyClick} className="bg-gray-500 text-white py-2 rounded">
        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
      </button>
      </div>

      <textarea
        className="w-[39%] border-2 border-gray-500 p-2 font-mono text-sm"
        name="converted-code"
        id="converted-code"
        cols="30"
        rows="22"
        value={loading ? "converting ...": convertedCode}
        readOnly
        placeholder={`Output code will appear here`}
      ></textarea>
    </div>
  );
}

export default CodeConverter;
