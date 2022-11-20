/* -----------------------------
------ Keyboard Access ---------
------------------------------ */
// function pressedEnterKey(event){
//   var key = 0; 

//   if (window.event) {
//     key = window.event.keyCode;
//   } else if (event) {
//     key = event.keyCode;
//   }

//   return true;
// }

// function setUpKeyboardAction(){

// }

/* -----------------------------
------ Pomodoro Timer ----------
------------------------------ */
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");

let play = document.querySelector(".fa-play");
let pause = document.querySelector(".fa-pause");
let stop = document.querySelector(".fa-stop");
let countdown = -1;
let pomodoroTimer = 25 * 60;
let timerValue = pomodoroTimer;

play.addEventListener("click", () => {
  if (countdown == -1 && timerValue > 0) {
    countdown = setInterval(() => {
      let rest = --timerValue;
      let min = Math.floor(rest / 60);
      let sec = Math.floor(rest % 60);
      seconds.textContent = sec.toString().padStart(2, "0");
      minutes.textContent = min.toString().padStart(2, "0");

      play.style.color = '#7c8dfb';
      pause.style.color = '#fff';
      stop.style.color = '#fff';

      if (rest == 0) {
        clearInterval(countdown);
      }

    }, 1000);
  }
});

pause.addEventListener("click", () => {
  clearInterval(countdown);
  countdown = -1;
  pause.style.color = '#ffcf4A';
  play.style.color = '#fff';
  stop.style.color = '#fff';
});

stop.addEventListener("click", () => {
  clearInterval(countdown);
  countdown = -1;
  timerValue = pomodoroTimer;
  let min = Math.floor(timerValue / 60);
  let sec = Math.floor(timerValue % 60);
  seconds.textContent = sec.toString().padStart(2, "0");
  minutes.textContent = min.toString().padStart(2, "0");
  stop.style.color = '#eb0000';
  play.style.color = '#fff';
  pause.style.color = '#fff';
});

/* -----------------------------
------ To Do List Field --------
------------------------------ */
// "Close" button + append it to each list item
var myToDolist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myToDolist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myToDolist[i].appendChild(span);
}

// Close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create unordered list section
var list = document.querySelector('ul');

// "Checked" symbol
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// New list item
function newItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myAnswer").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    var modal = document.getElementById("alertModal");
    var exit = document.getElementById("close-modal");

    // If user does not add input
    if (inputValue === '') {
        modal.style.display = "block";
      } else {
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myAnswer").value = "";

    // Close modal window via "x"
    exit.onclick = function() {
      modal.style.display = "none";
    }
    
    // If user clicks on modal window to close
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
    // Make each entry a list item via span tag.
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

/* -----------------------------
------ Dark Mode Toggle --------
------------------------------ */
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('light');
})
/* -----------------------------
------ AOS Library -------------
------------------------------ */
AOS.init({
  duration: 1200
});