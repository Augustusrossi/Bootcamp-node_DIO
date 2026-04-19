import prompt from "prompt";
import promptQrCode from "../../prompts-schema/schema-qrcode.js";
import handle from "./handle.js"

async function creatQrCode() {
    prompt.get(promptQrCode, handle);

    prompt.start();
} 

export default creatQrCode;