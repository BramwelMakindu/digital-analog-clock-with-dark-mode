const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function updateClock() {
    const currentDate = new Date();
    const h = currentDate.getHours();
    const m = currentDate.getMinutes();
    const s = currentDate.getSeconds();

    const hourDeg = (h / 12) * 360;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    const minuteDeg = (m / 60) * 360;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    const secondDeg = (s / 60) * 360;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    setTimeout(updateClock, 1000);
};

updateClock();