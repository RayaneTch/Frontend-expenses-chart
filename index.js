document.addEventListener("DOMContentLoaded", function() {
    // Get current day of the week (0 for Sunday, 6 for Saturday)
    var today = new Date().getDay();

    // Map day index to corresponding class name (adjust as per your HTML structure)
    var dayClassMap = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    // Find the corresponding element and add the 'current-day' class
    var currentDayElement = document.querySelector('.' + dayClassMap[today]);
    if (currentDayElement) {
      currentDayElement.classList.add('current-day');
    }
  });