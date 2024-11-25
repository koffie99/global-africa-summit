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
