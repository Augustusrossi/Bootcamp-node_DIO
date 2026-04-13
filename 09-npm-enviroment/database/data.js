async function connectToDatabase(user, password) {
    if(user === ProcessingInstruction.env.userdatabase && password === ProcessingInstruction.env.password){
        console.log('conexão estabelecida com sucesso');
    } else{
        console.log('falha de longin'); 
    }
}

export default connectToDatabase;