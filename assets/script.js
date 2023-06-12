const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const slide = document.getElementById("slide");
const tagLine = document.querySelector(".tag_line");
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");


const navDots = document.querySelector('#dot');
console.log(navDots);


for (let i = 0; i < slides.length; i++){
  const dotsElement = document.createElement('span');
  dotsElement.classList.add('dot');
  navDots.appendChild(dotsElement);
}  


navDots.children[0].classList.add('dot_selected');



let i = 0;

arrowLeft.addEventListener("click", function prev() {


  if (i <= 0) {i = slides.length -1
    navDots.children[0].classList.remove('dot_selected');

    slide.src = "./assets/images/slideshow/" + slides[i].image;

    tagLine.innerHTML = slides[i].tagLine; 

    navDots.children[i].classList.add('dot_selected');
 }
  else {
    navDots.children[i].classList.remove('dot_selected');

    slide.src = "./assets/images/slideshow/" + slides[i-1].image;

    tagLine.innerHTML = slides[i-1].tagLine; 

    navDots.children[i-1].classList.add('dot_selected');

    i--;   

  }

});


arrowRight.addEventListener("click", function next() {
 

  navDots.children[i].classList.remove('dot_selected');

  if (i >= slides.length -1) {i = -1 
    navDots.children[0].classList.add('dot_selected');

    slide.src = "./assets/images/slideshow/" + slides[0].image;

    tagLine.innerHTML = slides[0].tagLine;
  }
    else {navDots.children[i+1].classList.add('dot_selected');
    
    slide.src = "./assets/images/slideshow/" + slides[i+1].image;

    tagLine.innerHTML = slides[i+1].tagLine;
  }
  
 i++; 
 
});

