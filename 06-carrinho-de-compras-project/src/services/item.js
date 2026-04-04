

// create item with calc subtotal item
async function createItem(name, price, 
        quantity) {
    return {
        name, 
        price, 
        quantity,
        subTotal: function (s) {
            //quebra a ideia de valores fixos
            return this.price * this.quantity
        }
    }
}

export default createItem;