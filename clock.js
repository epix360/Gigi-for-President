function printTime() {
  var d = new Date();
  var a_p = "";
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  if (hours < 12) {
            a_p = "<span>AM</span>";
            
        } else {
            a_p = "<span>PM</span>";

        }
        if (hours == 0) {
            hours = 12;
        }
        if (hours > 12) {
            hours = hours - 12;
        }

        mins = checkTime(mins);
        secs = checkTime(secs);
          
  document.getElementById('clock').innerHTML = hours+":"+mins+":"+secs + " " + a_p;

if ((a_p = "<span>AM</span>" && hours > 6) || (a_p = "<span>PM</span>" && hours < 8)) {
$("#clock-container").addClass('day');
$("#clock-container").removeClass('night');
}

else {
$("#clock-container").addClass('night');
$("#clock-container").removeClass('day');
}


}
function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

setInterval(printTime, 1000);


