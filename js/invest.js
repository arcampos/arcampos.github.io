// input: the user introduce the requiere information about the investment.
// process: The program calculate with the information provided by the user the future value of the investment.
// output: The program display to the user the future value of the investment.
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
