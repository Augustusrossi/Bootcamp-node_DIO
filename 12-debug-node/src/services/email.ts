async function getBaseEmail(sendName: string){
    let base = await getHeaderText();

    base += "\n estou deixando meu curriculo ";
    return base;

}

async function getHeaderText():Promise<string> {
    return "Email to you"
}

export {
    getBaseEmail
} 