function printReceipt(barcodes) {
    var countBarcode = countItemByBarcode(barcodes);
    var isValidResult = isValid(countBarcode);
    if (!(isValidResult == "success")) {
        return isValidResult;
    }

    var items = getItems(countBarcode);
    var sumPrice = countSumPrice(items);
    return print(items, sumPrice);
}

function isValid(countBarcode) {
    if (countBarcode.length == 0) {
        return "输入参数为空";
    }

    for (var i = 0; i < countBarcode.length; i++) {
        var item = findBybarcodeFromDB(countBarcode[i]);
        var objStr = JSON.stringify(item);
        if (objStr === '{}') {
            return `${countBarcode[i].barcode}编号商品不存在`;
        }
    }
    return "success";
}

function countItemByBarcode(barcodes) {
    var arr = [];
    barcodes.sort();    
    for (var i = 0; i < barcodes.length;) {
        var count = 0;
        for (var j = i; j < barcodes.length; j++) {
            if (barcodes[i] === barcodes[j]) {
                count++;
            }
        }
        arr.push({
            barcode: barcodes[i],
            count: count
        });
        i += count;
    }
    return arr;
}

function getItems(countBarcode) {
    var items = [];
    for (var i = 0; i < countBarcode.length; i++) {
        items.push(findBybarcodeFromDB(countBarcode[i]));
    }
    return items;
}

function countSumPrice(items) {
    var sumPrice = 0;
    for (var i = 0; i < items.length; i++) {
        sumPrice += Number(items[i].price) * Number(items[i].count);
    }
    return sumPrice;
}

function print(items, sumPrice) {
    var result = "";
    result += "Receipts\n------------------------------------------------------------\n";
    for (var i = 0; i < items.length; i++) {
        result += getLine(items[i]);
    }
    result += "------------------------------------------------------------\n";
    result += "Price: " + sumPrice;

    return result;
}

function getLine(item) {
    return item.name + '\t\t' + item.price + '\t' + item.count + '\n';
}

function findBybarcodeFromDB(good) {
    var database = [
        { "id": "0001", "name": "Coca Cola", "price": 3 },
        { "id": "0002", "name": "Diet Coke", "price": 4 },
        { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
        { "id": "0004", "name": "Mountain Dew", "price": 6 },
        { "id": "0005", "name": "Dr Pepper", "price": 7 },
        { "id": "0006", "name": "Sprite", "price": 8 },
        { "id": "0007", "name": "Diet Pepsi", "price": 9 },
        { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
        { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
        { "id": "0010", "name": "Fanta", "price": 12 }
    ];
    var item = {};
    for (var i = 0; i < database.length; i++) {
        var element = database[i];
        if (element.id === good.barcode) {
            item.barcode = element.id;
            item.count = good.count;
            item.name = element.name;
            item.price = element.price;
            break;
        }
    }
    return item;
}

module.exports = printReceipt;