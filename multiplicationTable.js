function createMultiplyTable(start, end) {
    var isCorrect = checkInput(start, end);
    if (!(isCorrect === "success")) {
        console.log(isCorrect);
        return isCorrect;
    }
    return createTableWithoutInputCheck(start, end);
}

function checkInput(start, end) {
    if (!isInt(start, end)) {
        return "参数不是整数";
    }
    if (!isStartLessThanEnd(start, end)) {
        return "开始值不小于等于结束值";
    }
    if (!isInScope(start, end)) {
        return "开始值与结束值不在1-1000以内";
    }
    return "success";
}

function isInt(start, end) {
    return Number.isInteger(start) && Number.isInteger(end);
}

function isStartLessThanEnd(start, end) {
    return start <= end;
}

function isInScope(start, end) {
    return start >= 1 && start <= 1000 && end >= 1 && end <= 1000;
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

module.exports = createMultiplyTable;