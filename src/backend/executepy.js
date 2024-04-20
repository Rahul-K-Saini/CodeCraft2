import { exec } from "child_process";

export const executePy = (filepath) => {
  
  return new Promise((resolve, reject) => {
    exec(
      `python3 ${filepath}`,
      (error, stdout, stderr) => {
        error && reject({ error, stderr });
        stderr && reject(stderr);
        resolve(stdout);
      } 
    );
    });
};
