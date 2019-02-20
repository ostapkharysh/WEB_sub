

function custSum(arr) {
    let mySum = 0;
    arr.forEach(function(element) {
        mySum += element;
    });
    return mySum;
}

function getMax(custArr) {
    // Max sum of sub-array combinations

    let allArrays  = [];
    for (var i = 0; i < custArr.length; i++) {
        allArrays.push(custSum(custArr.slice(i, custArr.length)));
        allArrays.push(custSum(custArr.slice(0, custArr.length-i)));
    }
    const indMaxVal = allArrays.reduce((maxInd, x, i, arr) => x > arr[maxInd] ? i : maxInd, 0);

    return allArrays[indMaxVal];
}