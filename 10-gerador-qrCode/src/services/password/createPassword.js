import chalk from "chalk";
import handle from "./handlePassword.js";





async function createPassWord(params) {
    console.log(chalk.green("Password:"));
    const password = await handle()
    console.log(password);
    
}

export default createPassWord;