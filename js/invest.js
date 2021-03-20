function doFV () {
    // Get input from the user.
    let principal = parseFloat(document.getElementById('principal').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let numberOfYears = parseFloat(document.getElementById('numberOfYears').value);
    let periodsPerYear = parseFloat(document.getElementById('periodsPerYear').value);
    // Call the computeFutureValue function.
    let fv = computeFutureValue(principal, annualRate, numberOfYears, periodsPerYear);
    // Display the result to the user.
    document.getElementById('output').innerHTML = `$${fv.toFixed(2)}`;
}

function computeFutureValue(principal, annualRate, years, periodsPerYear) {
    let futureValue = principal * Math.pow((1 + annualRate / periodsPerYear), periodsPerYear * years);
    return futureValue;
}
