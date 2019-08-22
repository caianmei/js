const createMultiplyTable = require('../multiplicationTable');

it('should return multiply table from 2 to 4 when call createMultiplyTable given 2 and 4', () => {
    expect(createMultiplyTable(2, 4))
        .toBe("2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16");
});

it('should return multiply table from 2 to 4 when call createMultiplyTable given -1 and 4', () => {
    expect(createMultiplyTable(0.5, 4))
        .toBe("参数不是整数");
});
it('should return multiply table from 2 to 4 when call createMultiplyTable given -1 and 4', () => {
    expect(createMultiplyTable(5, 4))
        .toBe("开始值不小于等于结束值");
});
it('should return multiply table from 2 to 4 when call createMultiplyTable given -1 and 4', () => {
    expect(createMultiplyTable(0, 100001))
        .toBe("开始值与结束值不在1-1000以内");
});

 const printReceipt = require('../settleAndPrintReceipt');
it('should return receipt item sccsv编号商品不存在 when call settleAndPrintReceipt given ["sccsv"]', () => {
    expect(printReceipt(["sccsv"]))
        .toBe("sccsv编号商品不存在");
});

it('should return receipt item 输入参数为空 when call settleAndPrintReceipt given []', () => {
    expect(printReceipt([]))
        .toBe("输入参数为空");
});

it('should return receipt item ["0001", "0003", "0005", "0003"] when call settleAndPrintReceipt given ["0001", "0003", "0005", "0003"]', () => {
    expect(printReceipt(['0001', '0003', '0005', '0003']))
        .toBe("Receipts\n------------------------------------------------------------\nCoca Cola\t\t3\t1\nPepsi-Cola\t\t5\t2\nDr Pepper\t\t7\t1\n------------------------------------------------------------\nPrice: 20");
});