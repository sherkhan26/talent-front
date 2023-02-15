let countDownDate = new Date("March 22, 2023 13:00:0").getTime();

let x = setInterval(function() {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.timer-count-day').innerHTML = days;
    document.querySelector('.timer-count-hour').innerHTML = hours;
    document.querySelector('.timer-count-min').innerHTML = minutes;
    document.querySelector('.timer-count-sec').innerHTML = seconds;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer-count").innerHTML = "EXPIRED";
    }
}, 1000);