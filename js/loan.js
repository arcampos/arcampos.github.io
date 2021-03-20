function doPayment() {
    let principal = parseFloat(document.getElementById('principal').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let numberOfYears = parseFloat(document.getElementById('numberOfYears').value);
    let paymentsPerYear = parseFloat(document.getElementById('paymentsPerYear').value);
    
    let payment = computePayment(principal, annualRate, numberOfYears, paymentsPerYear);
    document.getElementById('payment').innerHTML = '$${payment.toFixed(2)}';
}

function doBalance() { 
    let principal = parseFloat(document.getElementById('principal').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let numberOfYears = parseFloat(document.getElementById('numberOfYears').value);
    let paymentsPerYear = parseFloat(document.getElementById('paymentsPerYear').value);
    let numberOfPayments = parseFloat(document.getElementById('numberOfPayments').value);

    let balance = computeBalance(principal, annualRate, numberOfYears, paymentsPerYear, numberOfPayments);
    document.getElementById('balance').innerHTML = '$${balance.toFixed(2)}';
}

function computePayment(principal, annualRate, years, periodsPerYear){
    let r = annualRate / periodsPerYear;
    let n = years * periodsPerYear;
    let payment = principal * r / (1 - (1 + r) ** -n); 
    return payment;
}

function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPayments) {
    let payment = computePayment(principal, annualRate, years, periodsPerYear);
    let r = annualRate / periodsPerYear;
    let balance = principal * Math.pow((1 + r), numberOfPayments) - (payment * (Math.pow((1 + r), numberOfPayments) -1) / r);
    return balance; 
}
