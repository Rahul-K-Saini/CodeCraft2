import { exec } from "child_process";
import fs from "fs";
import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = (filepath) => {

  const jobId = path.basename(filepath).split(".")[0];
  const outPath = path.join(outputPath, `${jobId}.exe`);

  const promise1 = new Promise((resolve, reject) => {
      exec(
          `g++ ${filepath} -o ${outPath} && cd ${outputPath} && .\\${jobId}.exe`,
          (error, stdout, stderr) => {
              error && reject(error,stderr);
              stderr && reject(stderr);
              resolve(stdout)
          }
      );
  });

  promise1.catch((error) => {
      console.error(error);
  });
  return promise1;
};

export { executeCpp };
