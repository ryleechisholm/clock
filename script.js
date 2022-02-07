function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let y = today.getFullYear();
    let mo = today.getMonth();
    let d = today.getDate();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
    document.getElementById('date').innerHTML = y + '-' + (mo+1) + '-' + d;
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }