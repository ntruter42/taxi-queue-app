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
if (localStorage.getItem('queue') === undefined && localStorage.getItem('taxiQueue') === undefined) {	
	taxiQueue.setQueueLengths(localStorage.getItem('queue'), localStorage.getItem('taxiQueue'));
}
countElement.innerHTML = taxiQueue.queueLength();
taxiCountElement.innerHTML = taxiQueue.taxiQueueLength();

// EVENT LISTENERS
join.addEventListener('click', function () {
	taxiQueue.joinQueue();
	countElement.innerHTML = taxiQueue.queueLength();
	localStorage.setItem('queue', JSON.stringify(taxiQueue.queueLength()));
	localStorage.setItem('taxiQueue', JSON.stringify(taxiQueue.taxiQueueLength()));
})

leave.addEventListener('click', function () {
	taxiQueue.leaveQueue();
	countElement.innerHTML = taxiQueue.queueLength();
	localStorage.setItem('queue', JSON.stringify(taxiQueue.queueLength()));
	localStorage.setItem('taxiQueue', JSON.stringify(taxiQueue.taxiQueueLength()));
})

taxiJoin.addEventListener('click', function () {
	taxiQueue.joinTaxiQueue();
	taxiCountElement.innerHTML = taxiQueue.taxiQueueLength();
	localStorage.setItem('queue', JSON.stringify(taxiQueue.queueLength()));
	localStorage.setItem('taxiQueue', JSON.stringify(taxiQueue.taxiQueueLength()));
})

taxiLeave.addEventListener('click', function () {
	taxiQueue.taxiDepart();
	countElement.innerHTML = taxiQueue.queueLength();
	taxiCountElement.innerHTML = taxiQueue.taxiQueueLength();
	localStorage.setItem('queue', JSON.stringify(taxiQueue.queueLength()));
	localStorage.setItem('taxiQueue', JSON.stringify(taxiQueue.taxiQueueLength()));

})