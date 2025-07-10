import chalk from 'chalk';
import handlerPsw from './handlePsw';

async function createPassword() {
    const password = await handlerPsw
    console.log(chalk.green(password));
}

export default createPassword;