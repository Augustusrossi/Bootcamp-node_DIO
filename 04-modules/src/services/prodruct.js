const productTypes = {
    version: "digital",
    tax: "x1"
};

async function getFullName(codeId, productName) {
    console.log("prod: " + codeId + " - " + productName);
    await doBreakLine();
}

//hidden const
const apiURL = {
    url: "https://api.com.br",
}

async function doBreakLine(params) {
    console.log("\n");

}

async function getProductLabel(productName) {
    console.log("product: " + productName);

}


module.exports = {
    getFullName,
    getProductLabel,
    productTypes,
}
