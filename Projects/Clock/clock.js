setInterval(function() {
    document.getElementById("clockTime").innerHTML = new Date().toLocaleTimeString();
}, 1000);