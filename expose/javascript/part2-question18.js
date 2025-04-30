function printTime(){
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

const everySec = setInterval(printTime, 1000);
