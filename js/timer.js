window.addEventListener('load', function() {
    // alert('Hello!')
    setInterval(myTimer, 1000);
});

function myTimer() {
    const d = new Date();
    document.getElementById('timer').innerHTML = d.toLocaleTimeString();
    document.getElementById('timer_2').innerHTML = d.toLocaleTimeString();
}