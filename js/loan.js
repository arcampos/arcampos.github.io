// Input: The user introduce the requiere infomation about the loan.
// Process: The program use the information provided from the user to calculate how much the user needs to pay monthly, and after that also the program calculate how much you payd durint the loan time.
// output: The user receive the information about the monthly payment and how much the user paid.
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
