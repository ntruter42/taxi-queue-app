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

// EVENT LISTENERS
join.addEventListener('click', function () {
	taxiQueue.joinQueue();
	countElement.innerHTML = taxiQueue.queueLength();
})

leave.addEventListener('click', function () {
	taxiQueue.leaveQueue();
	countElement.innerHTML = taxiQueue.queueLength();
})

taxiJoin.addEventListener('click', function () {
	taxiQueue.joinTaxiQueue();
	taxiCountElement.innerHTML = taxiQueue.taxiQueueLength();
})

taxiLeave.addEventListener('click', function () {
	taxiQueue.taxiDepart();
	countElement.innerHTML = taxiQueue.queueLength();
	taxiCountElement.innerHTML = taxiQueue.taxiQueueLength();
})