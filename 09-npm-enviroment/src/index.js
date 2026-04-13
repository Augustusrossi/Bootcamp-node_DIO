import connectToDatabase from "./database/data"

async function main() {
    console.log(process.env.userdatabase);
    
    await connectToDatabase(
        "augustus", '123'
    )
}

main()