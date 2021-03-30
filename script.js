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
  x.style.display = "block";
}else{
  x.style.display= "none";
  }
}

function featuredDiv2(){
let x =
document.getElementById("Section2Div");
if (x.style.display=== "none"){
  x.style.display = "block";
}else{
  x.style.display= "none";
  }
}

function featuredDiv3(){
let x =
document.getElementById("Section3Div");
if (x.style.display=== "none"){
  x.style.display = "block";
}else{
  x.style.display= "none";
  }
}

function featuredDiv4(){
let x =
document.getElementById("Section4Div");
if (x.style.display=== "none"){
  x.style.display = "block";
}else{
  x.style.display= "none";
  }
}

function displayInfo(){
  let cds = document.querySelectorAll('.card');
  for (let i = 0; i < cds.length; i++){
    cds[i].addEventListener('click', function(){
      let cardinfo = cds[i].querySelector('.hideInfo');
        if (cardinfo.classList.contains('showInfo')){
          cardinfo.classList.remove('showInfo');
        }
        else {
          cardinfo.classList.add('showInfo');
        }
    }, false);
  }
}