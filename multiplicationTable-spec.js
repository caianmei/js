const createMultiplyTable = require('../createMultiplyTable');

it ('should return multiply table from 2 to 4 when call createMultiplyTable given 2 and 4', () => {
    expect(createMultiplyTable(2, 4))
    .toBe("2*2=4\r\n2*3=6 3*3=9\r\n2*4=8 3*4=12 4*4=16");
    });