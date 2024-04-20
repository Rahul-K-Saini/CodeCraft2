import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = (filepath) => {
    const jobId = path.basename(filepath).split(".")[0];
    const outPath = path.join(outputPath, `${jobId}`); // Remove .exe extension

    const promise1 = new Promise((resolve, reject) => {
        exec(`g++ ${filepath} -o ${outPath} && chmod +x ${outPath} && ${outPath}`, (error, stdout, stderr) => {
            if (error) {
                reject(error, stderr);
            } else {
                resolve(stdout.replace(/\n/g, '\n'));
            }
        });
    });

    promise1.catch((error) => {
        console.error(error);
    });

    return promise1;
};

export { executeCpp };