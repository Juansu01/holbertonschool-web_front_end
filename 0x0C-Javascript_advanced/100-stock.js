
let stock = {
    macbook: 2,
    iphone: 4,
}

function processPayment(itemName) {
    stock[itemName] -= 1
    console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log('Payment is not being processed');
}

function processOrder(itemName, callbackPayment, callbackError) {
    let item = itemName.toLowerCase();
    console.log(`Verifying the stock of ${item}`);
    if (stock[item] <= 0) return callbackError(item)
    if (!stock.hasOwnProperty(item)) return callbackError(item)
    callbackPayment(item);
}

let item = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');
processOrder(item, processPayment, processError);
