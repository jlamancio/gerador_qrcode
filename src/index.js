import prompt from "prompt";
import mainPrompt from "./prompts/prompt.main.js";
import createQrCode from "./qrcode/createQrCode.js";



async function main() {
        prompt.get(mainPrompt, async (err, choice) =>{

        if(choice.select == 1) await createQrCode();
        if(choice.select == 2) console.log('Escolheu a opção Geração de password');
        
        prompt.start();
    })
}

main();