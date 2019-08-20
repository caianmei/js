//function add (left, right) {
//   return left + right;
//}

//module.exports = add;
function createMultiplyTable(start, end) {
    var isCorrect = checkInput(start, end);
    var formateResult = formate(start, end, isCorrect);
    if (formateResult == null) {
        return null;
    }
    return createTableWithoutInputCheck(start, end);
}

function checkInput(start, end) {
    return Number.isInteger(start) && Number.isInteger(end) && start <= end;
}

function createTableWithoutInputCheck(start, end) {
    var result = "";
    for (var i = start; i < end + 1; i++) {
        for (var j = start; j <= i; j++) {
            var str = j + '*' + i + '=' + (i * j);
            result += str;
            if (j < i) {
               result += " ";
            }
        }
        if (i < end) {
            result += '\n';
        }
    }
    return result;
}

function formate(start, end, isCorrect) {
    if (!isCorrect || start < 1 || start > 1000 || end < 1 || end > 1000) {
        return null;
    }
    return true;
}

module.exports = createMultiplyTable;