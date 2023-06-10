const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minutes');
const secondEl = document.querySelector('.seconds');
const timeEl = document.querySelector('.time');

function showTime() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = 'AM';

    if (hours == 0){
        hours = 12
        session = 'AM';
    }

    if (hours > 12){
        hours -= 12
        session = 'PM'
    }

    if (hours < 10){
        hourEl.innerHTML = '0' + hours;
    } else {
        hourEl.innerHTML = hours;
    }

    if (minutes < 10){
        minuteEl.innerHTML = '0' + minutes;
    } else {
        minuteEl.innerHTML = minutes;
    }

    if (seconds < 10) {
        secondEl.innerHTML = '0' + seconds;
    } else {
        secondEl.innerHTML = seconds;
    }

    timeEl.innerHTML = session;

    setTimeout(showTime, 1000);
}

showTime();


//dark mode
const toggle = document.querySelector('.toggle');
const items = document.querySelectorAll('.body,.container,.analog-clock');

toggle.addEventListener('click', () => {
    items.forEach((item) => {
        item.classList.toggle('active');
    });
    toggle.classList.toggle('active');
})



