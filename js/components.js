// Component-specific functionality

// Initialize all page elements
document.addEventListener("DOMContentLoaded", () => {
  applyStaggeredAnimations()
  initializeCardHovers()
})

// Staggered animations for grid items
function applyStaggeredAnimations() {
  const cards = document.querySelectorAll(".calculator-card, .category-item, .feature-item")

  cards.forEach((card, index) => {
    card.style.animation = `slideInUp 0.8s ease-out ${index * 0.1}s both`
  })
}

// Enhanced card hover effects
function initializeCardHovers() {
  const cards = document.querySelectorAll(".calculator-card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.4)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.boxShadow = "none"
    })
  })
}

// Format numbers with commas
window.formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

// Parse user input for calculations
window.parseInput = (value) => Number.parseFloat(value.replace(/[^0-9.]/g, "")) || 0
