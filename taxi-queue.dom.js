// SECTION ELEMENTS
const passenger = document.querySelector('.passenger');
const taxi = document.querySelector('.taxi');
const depart = document.querySelector('.depart');

// INPUT ELEMENTS
const join = document.querySelector('.join_queue');
const leave = document.querySelector('.leave_queue');
const taxiJoin = document.querySelector('.join_taxi_queue');
const taxiLeave = document.querySelector('.depart');

// OUTPUT ELEMENTS
const countElement = document.querySelector('.passenger_queue_count');
const taxiCountElement = document.querySelector('.taxi_queue_count');

// FACTORY FUNCTION INSTANCE
const taxiQueue = TaxiQueue();
if (localStorage.getItem('queue') && localStorage.getItem('taxiQueue')) {
	taxiQueue.setQueueLengths(Number(localStorage.getItem('queue')), Number(localStorage.getItem('taxiQueue')));
}
localStorage.setItem('queue', JSON.stringify(taxiQueue.queueLength()));
localStorage.setItem('taxiQueue', JSON.stringify(taxiQueue.taxiQueueLength()));

countElement.innerHTML = taxiQueue.queueLength();
taxiCountElement.innerHTML = taxiQueue.taxiQueueLength();

function displayMessage(location) {
	let messageBox;
	let errorMessage;
	let messageTimeout;
	let message = taxiQueue.getMessage();
	console.log(message);

	if (message) {
		switch (location) {
			case 'passenger':
				messageBox = passenger.querySelector('.error-message-box');
				errorMessage = passenger.querySelector('.error-message');
				break;
			case 'taxi':
				messageBox = taxi.querySelector('.error-message-box');
				errorMessage = taxi.querySelector('.error-message');
				break;
			case 'depart':
				messageBox = depart.querySelector('.error-message-box');
				errorMessage = depart.querySelector('.error-message');
				break;
		}

		clearTimeout(messageTimeout);
		messageBox.style.display = 'flex';
		errorMessage.innerHTML = message;

		messageTimeout = setTimeout(function () {
			messageBox.style.display = 'none';
		}, 3000);
	} else {
		messageBox.style.display = 'none';
	}
}

// EVENT LISTENERS
join.addEventListener('click', function () {
	taxiQueue.joinQueue();
	countElement.innerHTML = taxiQueue.queueLength();
	localStorage.setItem('queue', JSON.stringify(taxiQueue.queueLength()));
	displayMessage('passenger');
})

leave.addEventListener('click', function () {
	taxiQueue.leaveQueue();
	countElement.innerHTML = taxiQueue.queueLength();
	localStorage.setItem('queue', JSON.stringify(taxiQueue.queueLength()));
	displayMessage('passenger');
})

taxiJoin.addEventListener('click', function () {
	taxiQueue.joinTaxiQueue();
	taxiCountElement.innerHTML = taxiQueue.taxiQueueLength();
	localStorage.setItem('taxiQueue', JSON.stringify(taxiQueue.taxiQueueLength()));
	displayMessage('taxi');
})

taxiLeave.addEventListener('click', function () {
	taxiQueue.taxiDepart();
	countElement.innerHTML = taxiQueue.queueLength();
	taxiCountElement.innerHTML = taxiQueue.taxiQueueLength();
	localStorage.setItem('queue', JSON.stringify(taxiQueue.queueLength()));
	localStorage.setItem('taxiQueue', JSON.stringify(taxiQueue.taxiQueueLength()));
	displayMessage('depart');
})