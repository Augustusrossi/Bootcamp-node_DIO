//const prod = require("./services/prodruct");
const {getFullName, getProductLabel} = require("./services/prodruct");
const config = require("./services/config");
const database = require("./services/database");



async function main() {
    // prod.getFullName("777", "lâmpada");    
    // prod.getProductLabel("lâmpada");   
    
    
    //console.log(prod.productTypes.version);
    console.log(config.client);
    database.connect("my_database");
    getFullName("777", "lâmpada");
    getProductLabel("lâmpada");
}

main();


