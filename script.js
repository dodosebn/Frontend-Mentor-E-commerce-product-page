// Declarations
const logoItself = document.getElementById("logo-itself");
const previous = document.getElementById("previous");
const pageName = document.getElementById("Nammy");
const dropDown = document.querySelector(".menu-cont");
const closeBtn = document.querySelector(".close-btn");
const pops = document.querySelector(".pop-Cont");
const cartBtn = document.querySelector(".cart-img");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const imageChoiceContainer = document.querySelector('.image-choice');
const addToCartBtn = document.querySelector(".add-to-cart-btn");
const cartCount = document.querySelector('.cart-img sup');
const Clear = document.getElementById("delete");
const body = document.querySelector("body");

let selectedImage = null;
let currentIndex = 0;
let count = 0;

if (window.innerWidth <= 400) {
  const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
  const Images = [
    "./images/image-product-1-thumbnail.jpg",
    "./images/image-product-2-thumbnail.jpg",
    "./images/image-product-3-thumbnail.jpg",
    "./images/image-product-4-thumbnail.jpg"
  ];

  function transitImg() {
    const chosenImgSrc = Images[currentIndex];
    body.style.backgroundImage = `url(${chosenImgSrc})`;
  }

  previousBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + Images.length) % Images.length;
    transitImg();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % Images.length;
    transitImg();
});
} else {
  const imageWrapper = document.querySelector('.image-wrapper');

  imageChoiceContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      event.preventDefault();
      const selectedImageSrc = event.target.src;
      imageWrapper.style.backgroundImage = `url(${selectedImageSrc})`;
    }
  });

  function updateImageWrapper() {
    const images = imageChoiceContainer.querySelectorAll('img');
    const selectedImageSrc = images[currentIndex].src;
    imageWrapper.style.backgroundImage = `url(${selectedImageSrc})`;
  }
  
  previousBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageChoiceContainer.children.length) % imageChoiceContainer.children.length;
    updateImageWrapper();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageChoiceContainer.children.length;
    updateImageWrapper();
});
}

// Event Listeners
cartBtn.addEventListener("dblclick", () => {
  pops.style.display = "block";
  previousBtn.style.display = "none";
  nextBtn.style.display = "none";
  pageName.style.display = "block";
});

cartBtn.addEventListener("click", () => {
  pops.style.display = "none";
  previousBtn.style.display = "";
  nextBtn.style.display = "";
});

document.addEventListener("DOMContentLoaded", function () {
  logoItself.addEventListener("click", (e) => {
    e.preventDefault();
    dropDown.style.display = "block";
    logoItself.style.display = "none";
    // previousBtn.style.display = "none";
    // nextBtn.style.display = "none";
    pageName.style.display = "none";
    pops.style.display = "none";
  });

  closeBtn.addEventListener("click", () => {
    dropDown.style.display = "none";
    logoItself.style.display = "block";
    previous.style.display = "block";
    pageName.style.display = "block";
  });
});

imageChoiceContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    event.preventDefault();
    if (selectedImage !== null) {
      selectedImage.style.border = "";
      selectedImage.style.backgroundColor = "";
    }
    selectedImage = event.target;
    selectedImage.style.border = "2px solid var(--range)";
    selectedImage.style.backgroundColor = "var(--paleOrange)";
  }
});
if (window.innerWidth > 400) {
  const liDemItems = document.querySelectorAll('.li-dem li');
  liDemItems.forEach(liDem => {
    liDem.classList.add('bordered');
  });
} else {
  const liDemItems = document.querySelectorAll('.li-dem li');
  liDemItems.forEach(liDem => {
    liDem.classList.remove('bordered');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const imageWrapper = document.querySelector('.image-wrapper');
  const informateImg = document.getElementById('poping');
  const popCont = document.querySelector('.pop-Cont');
  const zeroCount = document.getElementById("zeroCount");
  const addToCartButton = document.querySelector('.add-to-cart-btn');
  addToCartButton.addEventListener('click', function () {
    if (window.innerWidth > 400) {
      informateImg.src = getComputedStyle(imageWrapper).backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
      Clear.addEventListener("click", () => {
        popCont.style.display = "none";
      });
    } else {
      informateImg.src = getComputedStyle(body).backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    }
    
    count++;
   
    cartCount.textContent = count;
    zeroCount.textContent = `${ cartCount.textContent }`;
    popCont.style.display = 'block';
  });

  Clear.addEventListener("click", () => {
    popCont.style.display = "none";
  });
});