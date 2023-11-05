import { exec } from "child_process";

export const executeJava = (filepath) => {
  return new Promise((resolve, reject) => {
    exec(
      `javac ${filepath} && java ${filepath}`,
      (error, stdout, stderr) => {
        error && reject({ error, stderr });
        stderr && reject(stderr);
        resolve(stdout);
      }
    );
  });
};
