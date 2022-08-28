const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("toggle-menu"),
  closeMunu = document.getElementById("close-menu");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

closeMunu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// ----------------------------------

let previous = document.querySelector(".previous");

let next = document.querySelector(".next");
let slider_1_img = document.querySelector(".slider-1").childNodes[1];
let slider_2_img = document.querySelector(".slider-2").childNodes[1];
let slider_3_img = document.querySelector(".slider-3").childNodes[1];
let slider_4_img = document.querySelector(".slider-4").childNodes[1];
let slider_5_img = document.querySelector(".slider-5").childNodes[1];
let slider_txt_h2 = document.querySelector(".slider-txt").childNodes[3];
let slider_txt_p = document.querySelector(".slider-txt").childNodes[5];
// console.log(slider_1_img);

let counter = 0;
let nextCounter = 0;


let css = "background-color:#E7E9EB;color:#eee";
let style = document.createElement("style");




previous.addEventListener("click", function (e) {
  counter++;
  if (counter === 1) {
    slider_2_img.style.display = "none";
    slider_1_img.setAttribute("src", "images/slider-img-2.jpg");
    slider_1_img.setAttribute("class", "active-img");
    slider_txt_h2.textContent = "Berlin, Germany";
    slider_txt_p.textContent =
      "is the capital and largest city of Germany by both area and population. Its 3.7 million inhabitants make it the European Union's most populous city";
  }
  if (counter === 2) {
    slider_3_img.style.display = "none";
    slider_1_img.setAttribute("src", "images/slider-img-3.jpg");
    slider_1_img.setAttribute("class", "active-img");
    slider_txt_h2.textContent = "Canary Islands";
    slider_txt_p.textContent =
      "The Canary Islands, especially Tenerife, Gran Canaria, Fuerteventura, and Lanzarote, are a major tourist destination, with over 12 million visitors per year.";
  }
  if (counter === 3) {
    slider_4_img.style.display = "none";
    slider_2_img.style.display = "block";
    slider_2_img.style.backgroundSize = "100% 100%";
    slider_2_img.style.backgroundImage = "url(images/slider-img-5.jpg)";
    slider_5_img.style.display = "none";
    slider_1_img.setAttribute("src", "images/slider-img-4.jpg");
    slider_1_img.setAttribute("class", "active-img");
    slider_txt_h2.textContent = "Sagrada Familia,	Barcelona";
    slider_txt_p.textContent =
      "The Sagrada Familia  is the most iconic symbol of Barcelona and the most visited landmark in the whole of Spain.";
  }
  if (counter === 4) {
    slider_2_img.style.display = "none";
    slider_1_img.setAttribute("src", "images/slider-img-5.jpg");
    slider_1_img.setAttribute("class", "active-img");
    slider_txt_h2.textContent = "Eiffel Tower, France";
    slider_txt_p.textContent =
      "The Eiffel Tower was built by Gustave Eiffel for the 1889 Exposition Universelle, which was to celebrate the 100th year anniversary of the French Revolution.";
  }
  if (counter === 5) {
    counter = 0;
  }
});

next.addEventListener("click", function (e) {
  nextCounter++;
  if (nextCounter === 1) {
    slider_2_img.style.display = "block";
    slider_1_img.setAttribute("src", "images/slider-img-2.jpg");
    slider_1_img.setAttribute("class", "active-img");
    slider_txt_h2.textContent = "Berlin, Germany";
    slider_txt_p.textContent =
      "is the capital and largest city of Germany by both area and population. Its 3.7 million inhabitants make it the European Union's most populous city";
  }
  if (nextCounter === 2) {
    slider_3_img.style.display = "block";
    slider_1_img.setAttribute("src", "images/slider-img-3.jpg");
    slider_1_img.setAttribute("class", "active-img");
    slider_txt_h2.textContent = "Canary Islands";
    slider_txt_p.textContent =
      "The Canary Islands, especially Tenerife, Gran Canaria, Fuerteventura, and Lanzarote, are a major tourist destination, with over 12 million visitors per year.";
  }
  if (nextCounter === 3) {
    slider_4_img.style.display = "block";
    slider_2_img.style.display = "block";
    slider_2_img.style.backgroundSize = "100% 100%";
    slider_2_img.style.backgroundImage = "url(images/slider-img-2.jpg)";
    slider_5_img.style.display = "none";
    slider_1_img.setAttribute("src", "images/slider-img-4.jpg");
    slider_1_img.setAttribute("class", "active-img");
    slider_txt_h2.textContent = "Sagrada Familia,	Barcelona";
    slider_txt_p.textContent =
      "The Sagrada Familia  is the most iconic symbol of Barcelona and the most visited landmark in the whole of Spain.";
  }
  if (nextCounter === 4) {
    slider_2_img.style.display = "block";
    slider_1_img.setAttribute("src", "images/slider-img-5.jpg");
    slider_1_img.setAttribute("class", "active-img");
    slider_txt_h2.textContent = "Eiffel Tower, France";
    slider_txt_p.textContent =
      "The Eiffel Tower was built by Gustave Eiffel for the 1889 Exposition Universelle, which was to celebrate the 100th year anniversary of the French Revolution.";
  }
  if (nextCounter === 5) {
    nextCounter = 0;
  }
});
