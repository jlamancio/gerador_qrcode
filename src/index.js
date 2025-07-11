import prompt from "prompt";
import dotenv from "dotenv/config";
import mainPrompt from "./prompts-schema/prompt-schema-main.js";
import createQrCode from "./services/qrcode/createQrCode.js";
import createPassword from "./services/password/createPsw.js";
import chalk from "chalk";

async function main() {
        prompt.get(mainPrompt, async (err, choice) =>{

        if(choice.select == 1) await createQrCode();
        if(choice.select == 2) {
            const generatedPassword = await createPassword(); 
            console.log(chalk.greenBright.bold(generatedPassword));
        }
        
        prompt.start();
   
    })
}

main();