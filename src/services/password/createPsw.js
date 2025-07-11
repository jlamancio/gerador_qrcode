import chalk from 'chalk';
import handlerPsw from './handlePsw.js';2

async function createPassword() {
    const password = await handlerPsw()
    
    return password;
   
}

export default createPassword;