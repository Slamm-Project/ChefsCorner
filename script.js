// document.onload(function(){
//   document.querySelectorAll('.card').forEach(img => {
//     img.classList.add('lazyload');
//   });
// });

let images = ['images/h1.jpeg','images/h2.jpeg','images/h3.jpeg','images/h4.jpeg','images/h6.jpeg','images/h7.jpeg','images/h8.jpeg','images/h9.jpeg'];

let trial = new Array();

function preloader(){
  for (let image of images){
    let img = new Image(1000,1000);
    img = image;
    trial.push(img);
  }
  return trial;
}

trial = preloader();

console.log(trial);

let index = -1;
showSlides();
function showSlides(){
  index++;
  if (index + 1 > trial.length){
    index = 0;
  }
  
  document.getElementById("HomeBG").style.backgroundImage = "url("+trial[index]+")";
  document.getElementById("HomeBG").style.backgroundSize = "cover";
  document.getElementById("HomeBG").style.backgroundPosition = "center top";
  document.getElementById("HomeBG").classList.add("animate");
   
  setTimeout(function(){
    document.getElementById("HomeBG").classList.remove("animate");
    document.getElementById("HomeBG").offsetWidth;
    showSlides();
  }, 5000);
}

function clearData(){
  let fm = document.getElementById("commentform");
  fm.reset();
  document.getElementById("popup").classList.add("show");
  setTimeout(function(){
    document.getElementById("popup").classList.remove("show");
    document.getElementById("popup").offsetLeft;
  }, 4000);
}

function featuredDiv1(){
let x =
document.getElementById("Section1Div");
if (x.style.display=== "none"){
  document.getElementById("appz").classList.add('featured-active');
  x.style.display = "block";
}else{
  document.getElementById("appz").classList.remove('featured-active');
  x.style.display= "none";
  }
}

function featuredDiv2(){
let x =
document.getElementById("Section2Div");
if (x.style.display=== "none"){
  document.getElementById("entr").classList.add('featured-active');
  x.style.display = "block";
}else{
  document.getElementById("entr").classList.remove('featured-active');
  x.style.display= "none";
  }
}

function featuredDiv3(){
let x =
document.getElementById("Section3Div");
if (x.style.display=== "none"){
  document.getElementById("dess").classList.add('featured-active');
  x.style.display = "block";
}else{
  document.getElementById("dess").classList.remove('featured-active');
  x.style.display= "none";
  }
}

function featuredDiv4(){
let x =
document.getElementById("Section4Div");
if (x.style.display=== "none"){
  document.getElementById("drnk").classList.add('featured-active');
  x.style.display = "block";
}else{
  document.getElementById("drnk").classList.remove('featured-active');
  x.style.display= "none";
  }
}

document.querySelectorAll('.card').forEach(div => {
  div.addEventListener('click', () => {
    let cardinfo = div.querySelector('.hideInfo');
    if (!cardinfo.classList.contains('showInfo')){
      cardinfo.style.display = "block";
      cardinfo.classList.remove('rolldown');
      cardinfo.classList.toggle('showInfo');
    } 
    else {
      cardinfo.classList.remove('showInfo');
      cardinfo.classList.toggle('rolldown');
      setTimeout(function(){
        cardinfo.style.display = "none";
      }, 200);      
    }
  });
});

//  Code for Appetizer Slider
const prevS1 = document.getElementById("Section1Div").querySelector('.prev');
const nextS1 = document.getElementById("Section1Div").querySelector('.next');
const carouselS1 = document.getElementById("Section1Div").querySelector('.carousel');
const sliderS1 = document.getElementById("Section1Div").querySelector('.slider');
let s1direction = -1;

nextS1.addEventListener('click', function(){
  if (s1direction === 1){
    s1direction = -1;
    carouselS1.style.justifyContent = "flex-start";
    sliderS1.style.transform = "translate(-9.091%)";
    sliderS1.prepend(sliderS1.lastElementChild);
    sliderS1.prepend(sliderS1.lastElementChild);
    sliderS1.prepend(sliderS1.lastElementChild);
  }
  else {
    s1direction = -1;
    carouselS1.style.justifyContent = "flex-start";
    sliderS1.style.transform = "translate(-9.091%)";
  }  
});

prevS1.addEventListener('click', function(){
  if (s1direction === -1){
    s1direction = 1;
    carouselS1.style.justifyContent = "flex-end";
    sliderS1.style.transform = "translate(9.091%)";
    sliderS1.appendChild(sliderS1.firstElementChild);
    sliderS1.appendChild(sliderS1.firstElementChild);
    sliderS1.appendChild(sliderS1.firstElementChild);
  }
  else {
    s1direction = 1;
    carouselS1.style.justifyContent = "flex-end";
    sliderS1.style.transform = "translate(9.091%)";
  }
});

sliderS1.addEventListener('transitionend', function(){
  if (s1direction === -1){
    sliderS1.appendChild(sliderS1.firstElementChild);
  }
  else if (s1direction === 1){
    sliderS1.prepend(sliderS1.lastElementChild);
  }
  
  sliderS1.style.transition = "none";
  sliderS1.style.transform = "translate(0)";
  setTimeout(function(){
    sliderS1.style.transition = "transform 1000ms ease";
  });
});

//  Code for Entree Slider
const prevS2 = document.getElementById("Section2Div").querySelector('.prev');
const nextS2 = document.getElementById("Section2Div").querySelector('.next');
const carouselS2 = document.getElementById("Section2Div").querySelector('.carousel');
const sliderS2 = document.getElementById("Section2Div").querySelector('.slider');
let s2direction = -1;

nextS2.addEventListener('click', function(){
  if (s2direction === 1){
    s2direction = -1;
    carouselS2.style.justifyContent = "flex-start";
    sliderS2.style.transform = "translate(-8.33%)";
    sliderS2.prepend(sliderS2.lastElementChild);
    sliderS2.prepend(sliderS2.lastElementChild);
    sliderS2.prepend(sliderS2.lastElementChild);
  }
  else {
    s1direction = -1;
    carouselS2.style.justifyContent = "flex-start";
    sliderS2.style.transform = "translate(-8.33%)";
  }  
});

prevS2.addEventListener('click', function(){
  if (s2direction === -1){
    s2direction = 1;
    carouselS2.style.justifyContent = "flex-end";
    sliderS2.style.transform = "translate(8.33%)";
    sliderS2.appendChild(sliderS2.firstElementChild);
    sliderS2.appendChild(sliderS2.firstElementChild);
    sliderS2.appendChild(sliderS2.firstElementChild);
  }
  else {
    s2direction = 1;
    carouselS2.style.justifyContent = "flex-end";
    sliderS2.style.transform = "translate(8.33%)";
  }
});

sliderS2.addEventListener('transitionend', function(){
  if (s2direction === -1){
    sliderS2.appendChild(sliderS2.firstElementChild);
  }
  else if (s2direction === 1){
    sliderS2.prepend(sliderS2.lastElementChild);
  }
  
  sliderS2.style.transition = "none";
  sliderS2.style.transform = "translate(0)";
  setTimeout(function(){
    sliderS2.style.transition = "transform 1000ms ease";
  });
});

//  Code for Dessert Slider
const prevS3 = document.getElementById("Section3Div").querySelector('.prev');
const nextS3 = document.getElementById("Section3Div").querySelector('.next');
const carouselS3 = document.getElementById("Section3Div").querySelector('.carousel');
const sliderS3 = document.getElementById("Section3Div").querySelector('.slider');
let s3direction = -1;

nextS3.addEventListener('click', function(){
  if (s3direction === 1){
    s3direction = -1;
    carouselS3.style.justifyContent = "flex-start";
    sliderS3.style.transform = "translate(-8.33%)";
    sliderS3.prepend(sliderS3.lastElementChild);
    sliderS3.prepend(sliderS3.lastElementChild);
    sliderS3.prepend(sliderS3.lastElementChild);
  }
  else {
    s3direction = -1;
    carouselS3.style.justifyContent = "flex-start";
    sliderS3.style.transform = "translate(-8.33%)";
  }  
});

prevS3.addEventListener('click', function(){
  if (s3direction === -1){
    s3direction = 1;
    carouselS3.style.justifyContent = "flex-end";
    sliderS3.style.transform = "translate(8.33%)";
    sliderS3.appendChild(sliderS3.firstElementChild);
    sliderS3.appendChild(sliderS3.firstElementChild);
    sliderS3.appendChild(sliderS3.firstElementChild);
  }
  else {
    s3direction = 1;
    carouselS3.style.justifyContent = "flex-end";
    sliderS3.style.transform = "translate(8.33%)";
  }
});

sliderS3.addEventListener('transitionend', function(){
  if (s3direction === -1){
    sliderS3.appendChild(sliderS3.firstElementChild);
  }
  else if (s3direction === 1){
    sliderS3.prepend(sliderS3.lastElementChild);
  }
  
  sliderS3.style.transition = "none";
  sliderS3.style.transform = "translate(0)";
  setTimeout(function(){
    sliderS3.style.transition = "transform 1000ms ease";
  });
});

//  Code for Drink Slider
const prevS4 = document.getElementById("Section4Div").querySelector('.prev');
const nextS4 = document.getElementById("Section4Div").querySelector('.next');
const carouselS4 = document.getElementById("Section4Div").querySelector('.carousel');
const sliderS4 = document.getElementById("Section4Div").querySelector('.slider');
let s4direction = -1;

nextS4.addEventListener('click', function(){
  if (s4direction === 1){
    s4direction = -1;
    carouselS4.style.justifyContent = "flex-start";
    sliderS4.style.transform = "translate(-12.5%)";
    sliderS4.prepend(sliderS4.lastElementChild);
    sliderS4.prepend(sliderS4.lastElementChild);
    sliderS4.prepend(sliderS4.lastElementChild);
  }
  else {
    s4direction = -1;
    carouselS4.style.justifyContent = "flex-start";
    sliderS4.style.transform = "translate(-12.5%)";
  }  
});

prevS4.addEventListener('click', function(){
  if (s4direction === -1){
    s4direction = 1;
    carouselS4.style.justifyContent = "flex-end";
    sliderS4.style.transform = "translate(12.5%)";
    sliderS4.appendChild(sliderS4.firstElementChild);
    sliderS4.appendChild(sliderS4.firstElementChild);
    sliderS4.appendChild(sliderS4.firstElementChild);
  }
  else {
    s4direction = 1;
    carouselS4.style.justifyContent = "flex-end";
    sliderS4.style.transform = "translate(12.5%)";
  }
});

sliderS4.addEventListener('transitionend', function(){
  if (s4direction === -1){
    sliderS4.appendChild(sliderS4.firstElementChild);
  }
  else if (s4direction === 1){
    sliderS4.prepend(sliderS4.lastElementChild);
  }
  
  sliderS4.style.transition = "none";
  sliderS4.style.transform = "translate(0)";
  setTimeout(function(){
    sliderS4.style.transition = "transform 1000ms ease";
  });
});