// Instructions
// File to handle script to create or drop database on the differents environment
// First argument : The environment where we gonna run this
// Second argument : The action what it gonna be running in the environment
if (!process.argv[2] || !process.argv[3]) {
    console.error(new Error("You are missing commands"));
  } else {
    validateCmd(process.argv[2], process.argv[3]);
  }
  
  function validateCmd(environment, dbAction) {
    const _environments = ["development", "test"];
    if (!_environments.includes(environment)) {
      console.log("The environment you are trying to call doesn't exist");
      return;
    }
  
    let executeScript = `NODE_ENV=${environment} npm run db:${dbAction}`;
    executeCmd(executeScript);
  }
  
  function executeCmd(command) {
    const { exec } = require("child_process");
  
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(new Error(`error: ${error.message}`));
        return;
      }
  
      if (stderr) {
        console.error(new Error(`stderr: ${stderr}`));
        return;
      }
  
      console.log(`stdout:\n${stdout}`);
    });
  }
  