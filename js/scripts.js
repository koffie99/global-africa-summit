document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides")
  const indicators = document.querySelectorAll(".indicator")
  let currentIndex = 0
  const totalSlides = document.querySelectorAll(".slide").length

  // Function to update the active indicator
  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex)
    })
  }

  // Function to show the current slide
  function showSlide(index) {
    // Ensure the index wraps around if it goes out of bounds
    currentIndex = (index + totalSlides) % totalSlides
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`
    updateIndicators()
  }

  // Function to move to the next slide
  function showNextSlide() {
    showSlide(currentIndex + 1)
  }

  // Event listeners for indicators
  indicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      const index = Number(indicator.getAttribute("data-index"))
      showSlide(index)
    })
  })

  // Automatically move to the next slide every 5 seconds
  setInterval(showNextSlide, 5000)
})
