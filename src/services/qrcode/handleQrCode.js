import qr from "qrcode-terminal";
import chalk from "chalk";

async function handlerQc(err, result) {
    if (err) {
        console.log(chalk.bgRedBright.bold('Error on application'));
        return;
    }
    const isSmall = result.type == 2;
    qr.generate(result.link, { small: isSmall }, (qrCode) => {
        console.log(chalk.greenBright('QRCode created!\n'));
        console.log(qrCode);
    });
    
}

export default handlerQc;