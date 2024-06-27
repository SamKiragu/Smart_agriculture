document.addEventListener('DOMContentLoaded', function () {
  function updateReadings() {
      fetch('/api/sensor-data')
          .then(response => response.json())
          .then(data => {
              document.getElementById('temperature').innerText = data.temperature + ' °C';
              document.getElementById('humidity').innerText = data.humidity + ' %';
              document.getElementById('soil-moisture').innerText = data.soilMoisture;
          })
          .catch(error => console.error('Error fetching sensor data:', error));
  }

  // Update readings every 5 seconds
  setInterval(updateReadings, 5000);

  // Initial update
  updateReadings();
});
