function TaxiQueue() {
	let queueCount = 0;
	let taxiCount = 0;
	let message = '';

	function joinQueue() {
		queueCount += 1;
	}

	function leaveQueue() {
		if (queueLength() <= 0) {
			setMessage('There are no more people');
		} else {
			queueCount -= 1;
		}
	}

	function joinTaxiQueue() {
		taxiCount += 1;
	}

	function queueLength() {
		return queueCount;
	}

	function taxiQueueLength() {
		return taxiCount;
	}

	function setQueueLengths(queue, taxiQueue) {
		queueCount = queue;
		taxiCount = taxiQueue;
	}

	function taxiDepart() {
		if (taxiQueueLength() <= 0) {
			setMessage('There are no taxis');
		} else if (queueLength() < 12) {
			setMessage('There are too few people (minimum: 12)');
		} else {
			queueCount -= 12;
			taxiCount -= 1;
		}
	}

	function setMessage(msg) {
		message = msg;
	}

	function getMessage() {
		let msg = message;
		message = '';

		return msg;
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		setQueueLengths,
		taxiDepart,
		setMessage,
		getMessage
	}
}