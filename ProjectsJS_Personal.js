const track  = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

const slidePos = (slide, index) => {
  slide.style.left = slideWidth * index;
}

slides.forEach(slidePos);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prev, next, targetIndex) => {
  if (targetIndex === 0){
    prevButton.classList.add('is_hidden');
    nextButton.classList.remove('is_hidden');
  }
  else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is_hidden');
    nextButton.classList.add('is_hidden');
  }
  else {
    prevButton.classList.remove('is_hidden');
    nextButton.classList.remove('is_hidden');
  }
}

nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const targetIndex = slides.findIndex(slide => slide === nextSlide);
  moveToSlide(track, currentSlide, nextSlide)
  updateDots(currentDot, nextDot);

  hideShowArrows(slides, prevButton, nextButton, targetIndex)
})



prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const targetIndex = slides.findIndex(slide => slide === prevSlide);
  moveToSlide(track, currentSlide, prevSlide)
  updateDots(currentDot, prevDot);

  hideShowArrows(slides, prevButton, nextButton, targetIndex)
})


dotsNav.addEventListener('click',e => {
  const targetDot = e.target.closest('button');
  if(!targetDot) return;
  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex)

})




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
