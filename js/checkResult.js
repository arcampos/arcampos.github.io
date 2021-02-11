function checkResult(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let ope = document.getElementById('ope').value;
    let num2 = parseFloat(document.getElementById('num2').value);
    let res = parseFloat(document.getElementById('res').value);
    
 switch (ope) {
     case '+':
         return num1 + num2
        document.getElementById('output').textContent = "Correct! 🏆"
         break;
     case '-':
        document.getElementById('output').textContent = "Correct! 🏆"
        break;
     case "*":
        document.getElementById('output').textContent = "Correct! 🏆"
        break;
     case "/":
        document.getElementById('output').textContent = "Correct! 🏆"
        break; 
     default:
        document.getElementById('output').textContent = "Incorrect 😢"
         break;
 }   
    

}