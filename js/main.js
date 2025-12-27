// Main JavaScript for Cost Calculators Website
document.addEventListener("DOMContentLoaded", () => {
  initializeComponents()
  initializeMenuToggle()
  initializeScrollBehavior()
  loadAllCalculators()
})

// Load shared components
async function initializeComponents() {
  try {
    // Load header
    const headerContainer = document.getElementById("header-container")
    if (headerContainer) {
      const headerResponse = await fetch("components/header.html")
      headerContainer.innerHTML = await headerResponse.text()
    }

    // Load sidebar
    const sidebarContainer = document.getElementById("sidebar-container")
    if (sidebarContainer) {
      const sidebarResponse = await fetch("components/sidebar.html")
      sidebarContainer.innerHTML = await sidebarResponse.text()

      // Initialize sidebar functionality
      const menuToggle = document.getElementById("menu-toggle")
      const sidebar = document.querySelector(".sidebar")
      const sidebarClose = document.getElementById("sidebar-close")

      if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => {
          sidebar.classList.toggle("active")
        })

        if (sidebarClose) {
          sidebarClose.addEventListener("click", () => {
            sidebar.classList.remove("active")
          })
        }
      }
    }

    // Load footer
    const footerContainer = document.getElementById("footer-container")
    if (footerContainer) {
      const footerResponse = await fetch("components/footer.html")
      footerContainer.innerHTML = await footerResponse.text()
    }
  } catch (error) {
    console.error("Error loading components:", error)
  }
}

// Menu toggle functionality
function initializeMenuToggle() {
  const menuToggle = document.getElementById("menu-toggle")
  const sidebar = document.querySelector(".sidebar")

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active")
    })
  }

  // Close sidebar on link click
  document.addEventListener("click", (e) => {
    const sidebar = document.querySelector(".sidebar")
    const menuToggle = document.getElementById("menu-toggle")

    if (
      sidebar &&
      menuToggle &&
      !sidebar.contains(e.target) &&
      !menuToggle.contains(e.target) &&
      sidebar.classList.contains("active")
    ) {
      sidebar.classList.remove("active")
    }
  })
}

// Smooth scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

// Initialize scroll-based animations
function initializeScrollBehavior() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  document.querySelectorAll(".section-title, .feature-item, .category-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Load all calculators from external file
async function loadAllCalculators() {
  try {
    const container = document.getElementById("all-calculators-container")
    if (container) {
      const response = await fetch("components/all-calculators.html")
      container.innerHTML = await response.text()
    }
  } catch (error) {
    console.error("Error loading all calculators:", error)
  }
}

// Export for use in other files
window.scrollToSection = scrollToSection
