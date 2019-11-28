var clockHTML = document.getElementById('clock');

function a() {
	let curr_date = new Date();
	let hours = curr_date.getHours();
	let minutes = curr_date.getMinutes();
	let seconds = curr_date.getSeconds();
	let date = curr_date.getDate();
	let month = curr_date.getMonth() + 1;
	let year = curr_date.getFullYear();

	switch (month) {
		case 1:
			month = 'JAN';
			break;
		case 2:
			month = 'FEB';
			break;
		case 3:
			month = 'MAR';
		case 4:
			month = 'APR';
			break;
		case 5:
			month = 'MAY';
			break;
		case 6:
			month = 'JUN';
			break;
		case 7:
			month = 'JUL';
			break;
		case 8:
			month = 'AUG';
			break;
		case 9:
			month = 'SEP';
			break;
		case 10:
			month = 'OCT';
			break;
		case 11:
			month = 'NOV';
			break;
		case 12:
			month = 'DEC';
			break;
	}

	if (hours < 10) hours = '0' + hours;
	if (minutes < 10) minutes = '0' + minutes;
	if (seconds < 10) seconds = '0' + seconds;
	var u = hours + ':' + minutes + ':' + seconds + '\n' + date + ' ' + month + ' ' + year;
	// clockHTML.setAttribute('class','move');
	clockHTML.innerText = u;
}

setInterval(a, 1000);
