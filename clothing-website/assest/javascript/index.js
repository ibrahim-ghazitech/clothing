
// Count Down  

const daysElem= document.getElementById('days');
const hoursElem = document.getElementById('hours');
const minsElem = document.getElementById('mins');
const secElem = document.getElementById('secs');

const salesTill = '19 November 2024';

function countdown() {
    const salesTillDate = new Date(salesTill);
    const currentDate = new Date();

    const totalSeconds = (salesTillDate - currentDate) /1000;
    const minutes = Math.floor(totalSeconds/ 60) % 60;
    const hours = Math.floor(totalSeconds /3600) % 24;
    const days = Math.floor(totalSeconds /3600/ 24);
    const seconds = Math.floor(totalSeconds) % 60;
    
    
daysElem.innerText = days;
hoursElem.innerText = hours;
minsElem.innerText = minutes;
secElem.innerText = seconds;

    
}

setInterval(countdown, 1000);