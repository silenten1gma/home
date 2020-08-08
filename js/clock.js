
setInterval(() => {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds(); 

    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = ":"+minutes
    document.getElementById('seconds').innerHTML = ":"+seconds

    if (hours < 10){
    document.getElementById('hours').innerHTML = "0" + hours
    }
    if (minutes < 10){
        document.getElementById('minutes').innerHTML = ":"+ "0"+ minutes
    }
    if (seconds < 10){
        document.getElementById('seconds').innerHTML = ":" + "0" + seconds
    }    
}, 1000);