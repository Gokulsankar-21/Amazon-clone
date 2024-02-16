// Interactive Design

const imgsArray = document.querySelectorAll(".header-slider ul img");
const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");

console.log(imgsArray, prevBtn, nextBtn);

// Logic - Logic can be anyway

let n = 0;

function changeSlide() {
  imgsArray.forEach((img) => {
    img.style.display = "none";
  });
  imgsArray[n].style.display = "block";
}
changeSlide();

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("prev click");
  if (n > 0) {
    n--;
  } else {
    n = imgsArray.length - 1;
  }

  changeSlide();
});

nextBtn.onclick = (e) => {
  e.preventDefault();
  console.log("prev click");
  if (n < imgsArray.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
};


const scrollContainer = document.querySelectorAll('.products');

for (const item of scrollContainer) {
  item.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}
