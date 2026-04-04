import createItem from "./services/item.js";
import * as carService from "./services/cart.js";

console.log("\nWelcame to the your Shoppe Cart! 🛒");


const carrinho = [];

const item1 = await createItem("Camiseta Preta", 50.98, 2);
const item2 = await createItem("Boné Louis Vuitton", 120.00, 1);


await carService.adddItem(carrinho, item1);
await carService.adddItem(carrinho, item2);


//exclusão de item do carrinho
//await carService.deleteItem(carrinho, item2.name);  
//await carService.deleteItem(carrinho, item1.name);

await carService.removeItem(carrinho, item1); // remove o item pelo index

await carService.calcTotal(carrinho)

await carService.listItems(carrinho);
