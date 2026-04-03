async function connectDatabase(dataName) {
    console.log('connect to database: ' +  dataName);   
}

async function disconnectDatabase() {
    console.log('disconnect database');
}

export { connectDatabase, disconnectDatabase };