import path from 'path';
import fs from 'fs';
import {v4} from 'uuid';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirCodes = path.join(__dirname,"codes");
if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive:true});
}

export const generateFiles = async (format, code)=>{
    let jobId = v4();
    if(format == "java") {
        jobId = "CodeCraft";
    }
    const filename = `${jobId}.${format}`
    const filepath = path.join(dirCodes,filename)
    fs.writeFileSync(filepath,code)
    return filepath;
}

