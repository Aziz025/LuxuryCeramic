document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const currentSlide = document.getElementById("current-slide");
    const sliderImages = document.querySelectorAll(".slider-img img");
    let currentSlideIndex = 0;

    function updateSlideIndex() {
        currentSlide.textContent = `${currentSlideIndex + 1}/${sliderImages.length}`;
    }

    prevButton.addEventListener("click", function () {
        if (currentSlideIndex > 0) {
            sliderImages[currentSlideIndex].style.transform = "scale(1)";
            currentSlideIndex--;
            updateSlideIndex();
            sliderImages[currentSlideIndex].style.transform = "scale(1.2)";
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentSlideIndex < sliderImages.length - 1) {
            sliderImages[currentSlideIndex].style.transform = "scale(1)";
            currentSlideIndex++;
            updateSlideIndex();
            sliderImages[currentSlideIndex].style.transform = "scale(1.2)";
        }
    });

    function initializeSlider() {
        sliderImages.forEach((img, index) => {
            if (index === currentSlideIndex) {
                img.style.transform = "scale(1.2)";
            } else {
                img.style.transform = "scale(1)";
            }
        });
    }

    initializeSlider();
});