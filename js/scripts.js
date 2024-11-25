document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".fa-bars")
  const closeBtn = document.querySelector(".mobile-nav .close-btn")
  const mobileNav = document.querySelector(".mobile-nav")
  const navLinks = document.querySelectorAll(".mobile-nav ul li a")

  // Open the mobile nav
  menuIcon.addEventListener("click", () => {
    mobileNav.style.right = "0"
  })

  // Close the mobile nav
  closeBtn.addEventListener("click", () => {
    mobileNav.style.right = "-100%"
  })

  // Close the mobile nav when a nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.style.right = "-100%"
    })
  })
})

// counter
document.addEventListener("DOMContentLoaded", () => {
  const daysElement = document.getElementById("days")
  const hoursElement = document.getElementById("hours")
  const minutesElement = document.getElementById("minutes")
  const secondsElement = document.getElementById("seconds")

  const targetDate = new Date("March 25, 2025 00:00:00").getTime()

  function updateCountdown() {
    const now = new Date().getTime()
    const timeDifference = targetDate - now

    if (timeDifference <= 0) {
      daysElement.textContent = 0
      hoursElement.textContent = 0
      minutesElement.textContent = 0
      secondsElement.textContent = 0
      clearInterval(interval)
      return
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    )
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

    daysElement.textContent = days
    hoursElement.textContent = hours
    minutesElement.textContent = minutes
    secondsElement.textContent = seconds
  }

  updateCountdown()
  const interval = setInterval(updateCountdown, 1000)
})
