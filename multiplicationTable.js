function createMultiplyTable (start, end) {
    var isCorrect = checkInput(start,end);
}

function checkInput (start, end) {
    return Number.isInteger(start)&&Number.isInteger(end);
}

function createTableWithoutInputCheck (start, end) {
    return left + right;
}

function formate (start, end,isCorrect) {
    if(!isCorrect || ((start< 1 && start > 100)||(end< 1 && end > 100))){
        return null;
    }    
    return true;
}

module.exports = createMultiplyTable;