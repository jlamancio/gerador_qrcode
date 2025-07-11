import chalk from "chalk";
import permittedCharacters from "../password/utils/permited-characters.js";

async function handlerPsw(){
    let characters = [];
    let password = '';
    const passwordLength = parseInt(process.env.PASSWORD_LENGTH, 10);
    characters = await permittedCharacters();

    for(let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
  
    return password;

}

export default handlerPsw;
