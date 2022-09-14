document.getElementsByTagName('body')[0].addEventListener('onload', setInterval);

let intervalIdDefault = setInterval(defaultjsClock,1000);
let intervalIdTwelve;

function defaultjsClock() {
    const clock = new Date();

    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    let day = clock.getDay();
    
    if(day === 0) {
        document.getElementById('daysOnMobile').innerText = "SUNDAY";
    } else if(day === 1) {
        document.getElementById('daysOnMobile').innerText = "MONDAY";
    } else if(day === 2) {
        document.getElementById('daysOnMobile').innerText = "TUESDAY";
    } else if(day === 3) {
        document.getElementById('daysOnMobile').innerText = "WEDNESDAY";
    } else if(day === 4) {
        document.getElementById('daysOnMobile').innerText = "THURSDAY";
    } else if(day === 5) {
        document.getElementById('daysOnMobile').innerText = "FRIDAY";
    } else if(day === 6) {
        document.getElementById('daysOnMobile').innerText = "SATURDAY";
    } 



    document.getElementById('12').classList.remove('text-greenish');

    document.getElementById(day).classList.add('text-greenish');
    document.getElementById('time').innerText = hours + ":" + minutes + ":" + seconds;
    document.getElementById('24').classList.add('text-greenish');
}

function jsTwelvehourClock() {
    const clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    let meridian = 'PM';

    hours = hours%12;

    if(hours === 0) meridian = 'AM';
    

    document.getElementById('time').innerText = hours + ':' + minutes + ':' + seconds + ' ' + meridian;

}

document.getElementById('12').addEventListener('click', () => {
    clearInterval(intervalIdDefault);
    document.getElementById('24').classList.remove('text-greenish');
    
    document.getElementById('12').classList.add('text-greenish');
    intervalIdTwelve = setInterval(jsTwelvehourClock,1000);
    
})

document.getElementById('24').addEventListener('click', () => {
    clearInterval(intervalIdTwelve);

    intervalIdDefault = setInterval(defaultjsClock,1000);
})