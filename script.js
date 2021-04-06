window.addEventListener('onload', preloader());
window.addEventListener('onload', cardEmbed());

const searchBar = document.getElementById("searchbar");
const searchArea = document.getElementById("searchArea");
let aside = document.getElementById('aside');
const mq = window.matchMedia('(max-width: 600px)');

function asideDisplay(){
  if (!mq.matches && aside.offsetWidth === 0){
    aside.style.maxWidth = "15em";
    aside.style.visibility = "visible";
    aside.style.transition = "all 500ms ease";
    aside.style.width = "15em";
  }
  else if (mq.matches && aside.offsetWidth === 0){
    aside.style.maxWidth = "100vw";
    aside.style.visibility = "visible";
    aside.style.transition = "all 500ms ease";
    aside.style.width = "100vw";
  }
  else {
    aside.style.maxWidth = "0";
  }
}

function searchAppear(){
  if (searchArea.classList.contains('appear')) {
    searchArea.classList.add('disappear');
    searchArea.classList.remove('appear');
  }
  else {
    searchArea.classList.add('appear');
    if (searchArea.classList.contains('disappear')) {
      searchArea.classList.remove('disappear');
    }
  }
}

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

function cardEmbed(){
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
}

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

//Code for API
searchBar.addEventListener('keyup', function(event){
  event.preventDefault();
  if (event.keyCode === 13){
    let searchValue = event.target.value;
    getRecipes(searchValue);
  }
});

const apiKey = "7806e858e7fd4ff48623955a8a5cd984";
const domain = "https://api.spoonacular.com/recipes/";
const additionalRequest = `&apiKey=${apiKey}&instructionsRequired=true&number=21`;

async function sendRequest(url, method, data){
  const options = {method};

  if (data){
    options.body = JSON.stringify(data);
    options.headers = {'Content-Type' : 'application/json'};
  }

  let response = await fetch(url, options);
  return response.json();
}

async function getRecipes(searchValue){
  let recipes = await sendRequest(`${domain}complexSearch?query=${searchValue+additionalRequest}`, 'GET');
  let ids = [];
  let idList = "";
  for (let result of recipes.results){
    ids.push(result.id);
  }
  for (let i = 0; i < ids.length; i++){
    if (i !== ids.length-1){
      idList += `${ids[i]},`;
    }
    else {
      idList += ids[i];
    }
  }

  let idBulkInfo = await sendRequest(`${domain}informationBulk?ids=${idList+additionalRequest}`);
  
  displayRecipes(recipes, idBulkInfo);
}

let searchResult = document.getElementById('searchResult');

function showResult(){
  if (searchResult.offsetHeight === 0){
    searchResult.style.transition = "all 500ms ease";
    searchResult.style.maxHeight = "33em";
    searchResult.style.height = "33em";
    searchResult.style.margin = "1em auto";
    searchResult.style.paddingTop = "2em";
  }
  else {
    searchResult.style.transition = "all 500ms ease";
    searchResult.style.maxHeight = "0";
    searchResult.style.height = "0";
    searchResult.style.margin = "0 auto";
    searchResult.style.paddingTop = "0";
  }
}

function displayRecipes(recipes, idBulkInfo){
  let html = "<span onclick='showResult()'>&#10005;</span>";
  for (let i = 0; i < recipes.results.length; i++){
    html += `
      <div class="card">
        <a>
          <img src="${recipes.results[i].image}" alt="${recipes.results[i].title}">
          <div class="dishName">${recipes.results[i].title}</div>
        </a>
        <div class="hideInfo">
          <span style="font-weight: bold;">Ingredients</span>
          <ul>`;
            for (let x = 0; x < idBulkInfo[i].extendedIngredients.length; x++){
              html += `
                <li>${idBulkInfo[i].extendedIngredients[x].original}</li>
              `;
            }
    html += `
          </ul>
          <span style="font-weight: bold">Method</span>
          ${idBulkInfo[i].instructions}
        </div>
      </div>
    `;
  }

  searchResult.innerHTML = html;
  cardEmbed();
  if (searchResult.offsetHeight === 0) {
    showResult();
  }
}