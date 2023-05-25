function TaxiQueue() {
	let queueCount = 0;
	let taxiCount = 0;

	function joinQueue() {
		queueCount += 1;
	}

	function leaveQueue() {
		if (queueLength() > 0) {
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

	function taxiDepart() {
		if (queueLength() >= 12 && taxiQueueLength() > 0) {
			queueCount -= 12;
			taxiCount -= 1;
		}
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}