import prompt from "prompt";
import promptQrCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handleQrCode.js";

async function createQrCode() {
    prompt.get(promptQrCode, handle);
    prompt.start();
}

export default createQrCode; 


 