function checkResult(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let operator = document.getElementById('operator').value;
    let num2 = parseFloat(document.getElementById('num2').value);
    let userResult = parseFloat(document.getElementById('userResult').value);
    let correctAnswer;
 
    switch (operator) {
       case '+':
          correctAnswer = num1 + num2;
          break;
      case '-':
         correctAnswer = num1 - num2;
         break;
      case '*':
         correctAnswer = num1 * num2;
         break;
      case '/':
         correctAnswer = num1 / num2;
         break;
    }

   if (userResult == correctAnswer) {
      document.getElementById('output').innerHTML = "Correct! 🏆"
  } else {
      document.getElementById('output').innerHTML = "Incorrect! 😢"
  }
}