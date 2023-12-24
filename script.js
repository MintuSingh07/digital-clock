let hrs = document.getElementById("hr");
let mint = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();

hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours()
mint.innerHTML= (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes()
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds()
}, 1000);