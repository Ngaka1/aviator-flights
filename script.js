let flightTimes = [];

function addFlightTime() {
    const inputTime = parseFloat(document.getElementById('inputTime').value);
    if (!isNaN(inputTime) && inputTime > 0) {
        flightTimes.push(inputTime);
        updateFlightTimesList();
        document.getElementById('inputTime').value = '';
    } else {
        alert('Please enter a valid flight time.');
    }
}

function updateFlightTimesList() {
    const flightTimesList = document.getElementById('flightTimesList');
    flightTimesList.innerHTML = '';
    flightTimes.forEach((time, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = ${index + 1}. ${time.toFixed(2)}x;
        flightTimesList.appendChild(listItem);
    });
}

function calculateNextFlightTime() {
    if (flightTimes.length < 3) {
        alert('Please enter at least 3 flight times.');
        return;
    }
    
    const totalWeight = flightTimes.reduce((sum, time, index) => sum + (index + 1), 0);
    const weightedSum = flightTimes.reduce((sum, time, index) => sum + (time * (index + 1)), 0);
    const predictedTime = weightedSum / totalWeight;

    document.getElementById('predictedTime').textContent = predictedTime.toFixed(2) + 'x';
}