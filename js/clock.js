const clockTitle = document.querySelector("#clockTitle")

function clock(){
    const toDay = new Date();
    const strToDayHour = String(toDay.getHours());
    const strToDayMin = String(toDay.getMinutes());
    const strToDaySec = String(toDay.getSeconds());
    
    const hour = strToDayHour.padStart(2, 0);
    const min = strToDayMin.padStart(2, 0);
    const sec = strToDaySec.padStart(2, 0);
    clockTitle.innerHTML = `${hour}:${min}:${sec}`
}

clock()
setInterval(clock, 1000)