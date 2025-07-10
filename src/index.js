import prompt from "prompt";
import mainPrompt from "./prompts/prompt.main.js";
import createQrCode from "./services/qrcode/createQrCode.js";
import createPassword from "./services/password/createPsw.js";



async function main() {
        prompt.get(mainPrompt, async (err, choice) =>{

        if(choice.select == 1) await createQrCode();
        if(choice.select == 2) await createPassword();
        
        prompt.start();
    })
}

main();