function createItemStock(name, quantity, price) {
    var item = {
        name: name? name : 'unknown',
        quantity: quantity? quantity : 0,
        price: price? price : 1.00,
    }
    return item;
}

function makePurchase(item, moneyForPurchase) {
    if (item.price > moneyForPurchase){
        return `Sorry, you need at least $${item.price} to make that purchase`
    } 
    else if (item.quantity === 0){
        return `Sorry, there are none left`
    } 
    else {
        return `Here are your ${item.name}`
    }
}

function collectChange(looseChange) {
    var sum = 0; 
    for (var i = 0; i < looseChange.length; i++){
        sum += looseChange[i];
    }
    return sum;
}


module.exports = {
    createItemStock, 
    collectChange, 
    makePurchase 
    }
