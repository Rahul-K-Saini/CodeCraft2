import { exec } from "child_process";
import path from "path";

export const executePy = (filepath) => {
  
  return new Promise((resolve, reject) => {
    exec(
      `python ${filepath}`,
      (error, stdout, stderr) => {
        error && reject({ error, stderr });
        stderr && reject(stderr);
        resolve(stdout);
      }
    );
  });
};
