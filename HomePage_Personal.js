function Hover(id) {
  var str = id + "txt"
  document.getElementById(str).style.display = "block";
}

function Hide(id) {
  var str = id + "txt"
  document.getElementById(str).style.display = "none";
}

function goTo(id) {
  if(id == "K") {
    window.location.href = "file:///Users/kieranbondy/Desktop/NORTHWESTERN/website/HomePage_Personal.html";
  }
  if(id == "I") {
    window.location.href = "https://sad-galileo-416040.netlify.com/InterestsPage_Personal.html";
  }
  if(id == "E") {
    window.location.href = "file:///Users/kieranbondy/Desktop/NORTHWESTERN/website/ExperiencePage_Personal.html";
  }
  if(id == "R") {
    window.location.href = "file:///Users/kieranbondy/Desktop/NORTHWESTERN/website/ResumePage_Personal.html";
  }
  if(id == "A") {
    window.location.href = "file:///Users/kieranbondy/Desktop/NORTHWESTERN/website/AbilitiesPage_Personal.html";
  }
  if(id == "N") {
    window.location.href = "file:///Users/kieranbondy/Desktop/NORTHWESTERN/website/NotableProjectPage_Personal.html";
  }
}
