



function Hover(id) {
  var str = id + "txt";
  document.getElementById(str).style.display = "inline";
}

function Hide(id) {
  var str = id + "txt";
  document.getElementById(str).style.display = "none";
}

function goTo(id) {
  if(id == "K") {
    window.location.href = "https://www.kieranbondy.com/index.html";
  }
  if(id == "I") {
    window.location.href = "https://www.kieranbondy.com/Introduction.html";
  }
  if(id == "E") {
    window.location.href = "https://www.kieranbondy.com/Experience.html";
  }
  if(id == "R") {
    window.location.href = "https://www.kieranbondy.com/Resume.html";
  }
  if(id == "A") {
    window.location.href = "https://www.kieranbondy.com/Abilities.html";
  }
  if(id == "N") {
    window.location.href = "https://www.kieranbondy.com/NotableProjects.html";
  }

}
