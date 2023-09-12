dragElement(document.getElementById("b2"));
//Code modified from W3Schools code.

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    //Block will check if its position is close to a preset position. If it is, then it will snap to the position.
    document.onmouseup = elementLockon;
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function elementLockon(e) {
    e = e || window.event;
    e.preventDefault();
    //defpos     : top 309   left 790   px
    //Oppositebox: top 309   left 367   px
    //Midpoint   :           left 625   px

    if (e.clientY < 308){               // Check if above tray
        pos2 = 309;                     // Reset to top of tray
      } else if(e.clientY > 450) {      // If not too close to asigned pos
        pos2 = e.clientY;               // Move to cursor
      } else {                          // If too close to asigned pos
        pos2 = 309;                     // Reset to pos
      }
    
    if (e.clientX > 1000){              // Check if more than halfway across right tray (Also covers going off the tray entirely)
        pos1 = 982;                     // Reset to rightmost of right tray
      } else if (e.clientX > 625){      // Check if to left or right of centre
        pos1 = 790;                     // Reset to leftmost of right tray
      } else if (e.clientX > 305){      // Check if more than halfway across left tray
        pos1 = 367;                     // Reset to rightmost of left tray
      } else {                          // If not halfway across left tray, including off the tray entirely
        pos1 = 175;                     // Reset to leftmost of left tray
      }

    elmnt.style.top = (pos2) + "px";
    elmnt.style.left = (pos1) + "px";
    document.onmouseup = null;
    document.onmousemove = null;
  }
}