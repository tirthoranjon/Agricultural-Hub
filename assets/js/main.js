function Time(){
    const now = new Date();
    const naw = document.getElementById("time").innerHTML = now.toLocaleString();

}
setInterval(Time, 1000);