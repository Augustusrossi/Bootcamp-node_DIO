



// adicionar um item no carrinho
async function adddItem(userCart, item) {
    userCart.push(item);
}

// remover um item do carrinho
async function removeItem(userCart, item) {
    // verificar se tem item no carinho, e se tiver item verificar se o tem mais de um mesmo item, se tiver subtrai um, se não, ou seja, se tiver só um, tira do carrinho

    const indexFound = userCart.findIndex((product) => product.name === item.name);

    if (indexFound == -1) {
        console.log("Item not found! Try Again, ");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    } 
    
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return
    }
}

// deletar um item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((itemAtual) => itemAtual.name === name);

    if (index != -1) {
        userCart.splice(index, 1);
    }
}

// listar os itens do carrinho
async function listItems(userCart) { 

    userCart.forEach((item, index) => {
        console.log(`${index+1}. ${item.name} - R$ ${item.price} (${item.quantity}) | SubTotal: R$${item.subTotal()}`);
        
    });

    
}

// calcular o valor total do carrinho
async function calcTotal(userCart) {
    const result = userCart.reduce((total, itemAtual) => total + itemAtual.subTotal(), 0);
    console.log("\nTotal do carrinho:", result, "\n");
}

export { adddItem, removeItem, deleteItem, listItems, calcTotal };