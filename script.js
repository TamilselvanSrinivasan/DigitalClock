
let ampm= document.getElementById('ampm')
function displayTime()
{
    let dateTime =new Date()
    let hrs=dateTime.getHours();
    let mins=dateTime.getMinutes();
    let secs=dateTime.getSeconds();
    if(hrs>12)
    {
        hrs-=12
       ampm.innerHTML='PM'
    }
    document.getElementById('hour').innerHTML = hrs
   document.getElementById('min').innerHTML= mins
   document.getElementById('sec').innerHTML= secs
}
setInterval(displayTime,100)