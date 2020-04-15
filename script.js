

	var countDownDate = new Date(2020, 3, 16, 17, 0, 0, 0).getTime();

	var countDownFunction = setInterval(function () {

		var now = new Date().getTime();
		var distance = countDownDate - now;

		var days = Math.floor(distance / (1000 * 60 *60 * 24));
		var hours = Math.floor((distance & (1000 * 60 *60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
	
		if (distance < 0) {
			clearInterval(countDownFunction);
		}
	}, 1000)

	/*function countdown(dateEnd) {
		var timer, days, hours, minutes, seconds;

		dateEnd = new Date(dateEnd);
		dateEnd = dateEnd.getTime();

		if (isNaN(dateEnd)) {
			return;
		}

		timer = setInterval(calculate, 1000);

		function calculate() {
			var dateStart = new Date();
			var dateStart = new Date(dateStart.getUTCFullYear(),
				dateStart.getUTCMonth(),
				dateStart.getUTCDate(),
				dateStart.getUTCHours(),
				dateStart.getUTCMinutes(),
				dateStart.getUTCSeconds());
			var timeRemaining = parseInt((dateEnd - dateStart.getTime())/1000);

			if (timeRemaining >= 0) {
				days = parseInt(timeRemaining / 86400);
				timeRemaining = (timeRemaining % 86400);
				hours = parseInt(timeRemaining / 3600);
				timeRemaining = (timeRemaining % 3600);
				minutes = parseInt(timeRemaining / 60);
				timeRemaining = (timeRemaining % 60);
				seconds = parseInt(timeRemaining);

				document.getElementById("days").innerHTML = parseInt(days, 10);
				document.getElementById("hours").innerHTML = ("0" + hours).slise(-2);
				document.getElementById("minutes").innerHTML = ("0" + hours).slise(-2);
				document.getElementById("seconds").innerHTML = ("0" + hours).slise(-2);
			} else {
				return;
			}
		}

			function display(days, hours, minutes, seconds) {}
	}

	countdown ("April 23, 2020 00:00:00");*/

