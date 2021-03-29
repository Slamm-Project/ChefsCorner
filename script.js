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

function clearFormInput(){
  let fm = document.getElementById("commentform");
  fm.clearForm;
  preventDefault();
  return false;
}