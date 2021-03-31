let index = -1;
let images = ['images/h1.jpeg','images/h2.jpeg','images/h3.jpeg','images/h4.jpeg','images/h6.jpeg','images/h7.jpeg','images/h8.jpeg','images/h9.jpeg'];
showSlides();
function showSlides(){
  index++;
  if (index + 1 > images.length){
    index = 0;
  }
  
  document.getElementById("HomeBG").style.backgroundImage = "url("+images[index]+")";
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