function clock(){
  setInterval(function(){
    const date =new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let seconds=date.getSeconds();
    console.log(`HH:MM::SS => ${hour}:${minute}::${seconds}`);
    let am_pm=hour>=12?'PM':'AM'
    hour=hour%12==0?12:hour%12;
    
    console.log(`HH:MM::SS AM/PM=> ${hour}:${minute}::${seconds} ${am_pm}`);
    
  },1000)
}


clock();