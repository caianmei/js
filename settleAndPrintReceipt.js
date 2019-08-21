function printReceipt(barcodes) {
    var countBarcode = countItemByBarcode(barcodes);
    return countAndPrint(countBarcode);
}
function countItemByBarcode(barcodes) {
    if (barcodes.length == 0) {
        return "输入参数为空";
    }
    var arr = [];
    barcodes.sort();
    for (var i = 0; i < barcodes.length;) {
        var count = 0;
        var object = {};
        for (var j = i; j < barcodes.length; j++) {
            if (barcodes[i] === barcodes[j]) {
                count++;
            }
        }
        object.barcode = barcodes[i];
        object.count = count;
        arr.push(object);
        i += count;
    }
    return arr;
}

function findBybarcodeFromDB(barcode) {
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
        if (element.id == barcode) {
            item.name = element.name;
            item.price = element.price;
            break;
        }
    }
    return item;
}

function countAndPrint(countBarcode) {
    var result = "";
    if (countBarcode == "输入参数为空") {
        return "输入参数为空";
    }
    result += "Receipts\n------------------------------------------------------------\n";
    var sum = 0;
    for (var i = 0; i < countBarcode.length; i++) {
        const element = countBarcode[i];
        var barcode = element.barcode;
        var count = element.count;
        var item = findBybarcodeFromDB(barcode);
        var objStr = JSON.stringify(item);
        if (objStr === '{}') {
            var a = barcode + "编号商品不存在"
            return a;
        }
    
    result = result + item.name + '\t\t' + item.price + '\t' + count + '\n';
    sum += item.price * count;
}
result += "------------------------------------------------------------\n";
result += "Price: " + sum;

return result;
}

module.exports = printReceipt;