import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        descprition: chalk.yellow("Escolha a ferramente (1- QRCODE OU 2- PASSWORD)"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre 1 e 2!"),
        required: true
    }
]

export default mainPrompt;