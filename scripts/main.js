/* -----------------------------
------ Dark Mode Toggle --------
------------------------------ */
// "Close" button + append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
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