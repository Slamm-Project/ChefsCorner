let index = -1;
let images = ['h1.jpeg','h2.jpeg','h3.jpeg','h4.jpeg','h5.jpeg','h6.jpeg','h7.jpeg',];
showSlides();

function showSlides(){
  index++;
  if (index + 1 > images.length){
    index = 0;
  }
  document.getElementById("HomeBG").style.backgroundImage = "url("+images[index]+")";
  document.getElementById("HomeBG").style.backgroundSize = "cover";
  document.getElementById("HomeBG").style.backgroundPosition = "top";
  
  setTimeout(showSlides, 5000);
}