function valid(form) {
	var fail = false;
	var email = form.email.value;
	var password = form.password.value;
	var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
	var adr_password = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;

	if (adr_pattern.test(email) == false)
		fail = "Вы ввели не правильный емайл"

	//else if (password.length < 8 || password.length > 20)
	//	fail = "Вы ввели не правильный пароль"

	else if (adr_password.test(password) == false )
		fail = "Вы ввели не правильный пароль"

	if (fail)
		alert(fail);
	else 
		alert('вы вошли!') 
}
