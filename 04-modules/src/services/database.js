//exportação default

exports.connect = (databaseName) => {
    console.log("se conectando ao: " + databaseName);
}

exports.disconnect = (databaseName) => {
    console.log("se desconectando do: " + databaseName);
}