// STEP 1: Select all slides and store them in the variable <slides>

// Loop through slides and set each slides translateX.
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

// STEP 2: Select next slide button into the variable <nextSlideButton>.

// Current slide counter
let curSlide = 0;

// STEP 3: Calculate the maximum number of slides.

// Add event listener and navigation functionality
nextSlideButton.addEventListener("click", function () {
    // STEP 4: Check if current slide is the last. If yes, reset to the first slide,
    // else go to the next slide.

    // STEP 5: Loop through the slides and move each slide by -100% by using
    // `translateX(${100 * (indx - curSlide)}%)`
});

// Select previous slide button
const prevSlideButton = document.querySelector(".btn-prev");

// STEP 6: Add event listener and navigation functionality.
// HINT: Use the code you wrote to add the functionality to the next slide button. 