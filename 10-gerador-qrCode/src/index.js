import prompt from "prompt";
import mainPrompt from "./prompts-schema/schema-main.js";

import creatQrCode from "./services/qrCode/create.js";
import createPassWord from "./services/password/createPassword.js";

async function main() {
    //arrow function
    prompt.get(mainPrompt , async(err, result) => {

        if (result.select == 1) {
            console.log("QRcode escolhido");          
            await creatQrCode();
        }

        if (result.select == 2) {
            console.log("Link escolhido");
            await createPassWord();
        }

        prompt.start();
    })
}


main();