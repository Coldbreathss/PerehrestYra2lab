function calc(operation) {
  var num1, num2, result;

  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

 switch (operation) {
  case 1:  
      result = num1 + num2;
  break;
  case 2:  
      result = num1 - num2;
  break;
    
  case 3: 
      result = num1 * num2;
  break;

  case 4:  
      result = num1 / num2;
  break;

  case 5:  
      result = Math.sqrt(num1);
  break;

    case 6:
      result = 1;  
      while(num1) result *= num1--;
  break;
    
  }
  document.getElementById('out').innerHTML = result;
}