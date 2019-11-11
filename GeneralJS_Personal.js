



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
    window.location.href = "https://sad-galileo-416040.netlify.com/index.html";
  }
  if(id == "I") {
    window.location.href = "https://sad-galileo-416040.netlify.com/InterestsPage_Personal.html";
  }
  if(id == "E") {
    window.location.href = "https://sad-galileo-416040.netlify.com//ExperiencePage_Personal.html";
  }
  if(id == "R") {
    window.location.href = "https://sad-galileo-416040.netlify.com//ResumePage_Personal.html";
  }
  if(id == "A") {
    window.location.href = "https://sad-galileo-416040.netlify.com/AbilitiesPage_Personal.html";
  }
  if(id == "N") {
    window.location.href = "https://sad-galileo-416040.netlify.com/NotableProjectPage_Personal.html";
  }

}
