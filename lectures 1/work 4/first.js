function plus() {
	var dm = document.getElementById("val1").value; // берем дату с инпута
	dm = dm.split('.'); // используем метод
	dm = parseFloat(parseInt(dm[1])+'.'+parseInt(dm[0])); // меняем местами дату с месяцем
	var result = document.getElementById("result"); // вывод в хтмл


	if(dm < 1.20 || dm >= 12.23){

	result.innerText = "Козерог"; 
	document.getElementById("horoscope").src="img/Kozerog.jpg";
	
	} // перебираем
	else if(dm >= 1.20 && dm <= 2.18){
		result.innerText = "Водолей"; 
		document.getElementById("horoscope").src="img/vodoleu.jpg";
	}
	else if(dm >= 2.19 && dm <= 3.20){
		result.innerText = "Рыбы"; 
		document.getElementById("horoscope").src="img/fisher.jpg";
	}
	else if(dm >= 3.21 && dm <= 4.19){
		result.innerText = "Овен"; 
		document.getElementById("horoscope").src="img/oven.jpg";
	}
	else if(dm >= 4.20 && dm <= 5.20){
		result.innerText = "Телец"; 
		document.getElementById("horoscope").src="img/telec.jpg";
	}
	else if(dm >= 5.21 && dm <= 6.20){
		result.innerText = "Близнецы";
		document.getElementById("horoscope").src="img/clone.jpg";
	}
	else if(dm >= 6.21 && dm <= 7.22){
		result.innerText = "Рак"; 
		document.getElementById("horoscope").src="img/rak.jpg";
	}
	else if(dm >= 7.23 && dm <= 8.22){
		result.innerText = "Лев"; 
		document.getElementById("horoscope").src="img/lev.jpg";
	}
	else if(dm >= 8.23 && dm <= 9.22){
		result.innerText = "Дева"; 
		document.getElementById("horoscope").src="img/deva.jpg";
	}
	else if(dm >= 9.23 && dm <= 10.22){
		result.innerText = "Весы"; 
		ocument.getElementById("horoscope").src="img/vesu.jpg";
	}
	else if(dm >= 10.23 && dm <= 11.21){
		result.innerText = "Скорпион"; 
		document.getElementById("horoscope").src="img/skorpio.jpg";
	}
	else if(dm >= 11.22 && dm <= 12.21){
		result.innerText = "Стрелец"; 
		document.getElementById("horoscope").src="img/strelec.jpg";
	}

}