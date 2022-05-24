// console.log('if you see this, it works');

// To Do List
// Ref: https://www.w3schools.com/howto/howto_js_todolist.asp?fbclid=IwAR3MiSrU5fKR_iG2yaaaknf-GohUZWEn1yG5p98aFDls5-7zQ6pDla4DDAs

// "close" button + append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    // u00D7 is the multiplication symbol
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// "checked" symbol when clicking on a list item
var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
// Change it from an alert to something else
        alert("You must write something!");
        } else {
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    // \u00D7 is a multiplication sign
    
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
// Ref: https://codepen.io/PaulinaSurazynska/pen/bGVpBOb

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('light');
})