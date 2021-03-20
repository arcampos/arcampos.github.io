function doFV () {
    let principal = parseFloat(document.getElementById('principal').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let numberOfYears = parseFloat(document.getElementById('numberOfYears').value);
    let periodsPerYear = parseFloat(document.getElementById('periodsPerYear').value);
    let future = computeFutureValue(principal, annualRate, numberOfYears, periodsPerYear);
    document.getElementById('output').innerHTML = `$${future.toFixed(2)}`;
}

function computeFutureValue(principal, annualRate, years, periodsPerYear) {
    let futureValue = principal * Math.pow((1 + annualRate / periodsPerYear), periodsPerYear * years);
    return futureValue;
}
