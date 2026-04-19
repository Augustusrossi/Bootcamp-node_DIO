import chalk from "chalk";

const promptQrCode = [
    {
        name: "link",
        description: chalk.yellow ("Digite o link para gerar o qr code: "),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre os tipo (1- imagem ou 2- Terminal"),
        patern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre 1 e 2"),
        required: true
    },
    


];

export default promptQrCode;