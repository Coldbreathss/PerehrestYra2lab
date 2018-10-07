function btn(){
	var	A = eval(document.getElementById('val1').value);
	var B = eval(document.getElementById('val2').value);
	var C = eval(document.getElementById('val3').value);
	var D = B * B - 4 * A * C;
	var x1, x2, x;
	var result = document.getElementById("result");

	if (D > 0) {
		x1 = (-B + Math.sqrt(D)) / (2*A);
		x2 = (-B - Math.sqrt(D)) / (2*A);
		result.innerText = "x1: " + x1 + ";  x2: " + x2;
	} 

	else if (D == 0) {
		x = -num2 / (2 * A);
		result.innerText = "x: " +x;
	}

	else if (D < 0) {
		result.innerText = "Уравнение решений не имеет. Дискриминант равен: " + D;
	}
}