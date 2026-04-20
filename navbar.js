const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

const imageCount = 6; // Total images in /src/, e.g., image1.jpg to image10.jpg
const wrapper = document.getElementById("slides-wrapper");

// Add original slides
for (let i = 2; i <= imageCount; i++) {
  const slide = document.createElement("div");
  slide.className = "slide";
  slide.innerHTML = `<img src="src/image${i}.JPG" alt="Image ${i}">`;
  wrapper.appendChild(slide);
}

// Clone them for seamless infinite loop
for (let i = 2; i <= imageCount; i++) {
  const slide = document.createElement("div");
  slide.className = "slide";
  slide.innerHTML = `<img src="src/image${i}.JPG" alt="Image ${i}">`;
  wrapper.appendChild(slide);
}

let index = 0;
const slideWidth = 100; // Each slide is 100% width

function moveSlide() {
  index++;
  wrapper.style.transition = "transform 1s ease-in-out";
  wrapper.style.transform = `translateX(-${index * slideWidth}%)`;

  // When done with first round, snap back to beginning invisibly
  if (index === imageCount) {
    setTimeout(() => {
      wrapper.style.transition = "none";
      wrapper.style.transform = "translateX(0)";
      index = 0;
    }, 1000); // After slide finishes
  }
}

setInterval(moveSlide, 5000); // Change every 5 seconds