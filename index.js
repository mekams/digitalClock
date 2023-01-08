function showClock() {
  const date = new Date();
  let hrs = date.getHours(); // 0 -23
  let min = date.getMinutes(); //0-59
  let sec = date.getSeconds(); //0-59
  let timeSplit = "am"; // and p.m
  let d =date.toDateString();

  if (hrs == 0) {
    hrs = 12; //
  }

  if (hrs > 12) {
    hrs = hrs - 12;
    timeSplit = "pm";
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let time =(`${hrs}:${min}:${sec} ${timeSplit}`);
  let fullDate =(`${d}`)
//   let time =console.log(`${hrs}:${min}:${sec} ${timeSplit} ${d}`);  //prints in console
  document.getElementById("clock").textContent= time;
  document.getElementById("date").textContent= fullDate;
  setTimeout(showClock,1000)
}

showClock()  //function call