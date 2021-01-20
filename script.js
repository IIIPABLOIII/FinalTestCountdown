	function fill(){
		document.getElementById("one").innerHTML = "ORAL EXAM";
	}
	
	var countDownDate = new Date("June 23, 2021 10:00:00").getTime();

	var countDownFunction = setInterval(calculate, 1000);

	function calculate(){
		
		var now = new Date().getTime();
		var distance = (countDownDate - now)/1000;

		if (distance < 0) {
			clearInterval(countDownFunction);
			document.getElementById("days").innerHTML = "00";
			document.getElementById("hours").innerHTML = "00";
			document.getElementById("minutes").innerHTML = "00";
			document.getElementById("seconds").innerHTML = "00";
			document.getElementById("message1").innerHTML = "GOOD LUCK!";
			return;
		}

		var days = parseInt(distance / (60 * 60 * 24));
		var hours = parseInt((distance % (60 * 60 * 24)) / (60 * 60));
		var minutes = parseInt((distance % (60 * 60)) / (60));
		var seconds = parseInt((distance % (60)));

		if (days <= 9) {
			document.getElementById("days").innerHTML = "0" + days;
		} else {
			document.getElementById("days").innerHTML = days;
		}
	
		if (hours <= 9) {
			document.getElementById("hours").innerHTML = "0" + hours;
		} else {
		document.getElementById("hours").innerHTML = hours;
		}

		if (minutes <= 9) {
			document.getElementById("minutes").innerHTML = "0" + minutes;
		} else {
		document.getElementById("minutes").innerHTML = minutes;
		}

		if (seconds <= 9) {
			document.getElementById("seconds").innerHTML = "0" + seconds;
		} else {
		document.getElementById("seconds").innerHTML = seconds;
		}		
	}
	
