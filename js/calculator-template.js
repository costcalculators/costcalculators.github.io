// Template for calculator pages

class Calculator {
  constructor(config) {
    this.config = config
    this.inputs = {}
    this.result = 0
  }

  initialize() {
    this.setupEventListeners()
    this.loadComponents()
  }

  async loadComponents() {
    try {
      // Load header
      const headerContainer = document.getElementById("header-container")
      if (headerContainer) {
        const headerResponse = await fetch("../components/header.html")
        headerContainer.innerHTML = await headerResponse.text()
      }

      // Load sidebar
      const sidebarContainer = document.getElementById("sidebar-container")
      if (sidebarContainer) {
        const sidebarResponse = await fetch("../components/sidebar.html")
        sidebarContainer.innerHTML = await sidebarResponse.text()
      }

      // Load footer
      const footerContainer = document.getElementById("footer-container")
      if (footerContainer) {
        const footerResponse = await fetch("../components/footer.html")
        footerContainer.innerHTML = await footerResponse.text()
      }
    } catch (error) {
      console.error("Error loading components:", error)
    }
  }

  setupEventListeners() {
    const inputs = document.querySelectorAll("input[data-calculate]")
    inputs.forEach((input) => {
      input.addEventListener("input", () => this.calculate())
      input.addEventListener("change", () => this.calculate())
    })
  }

  calculate() {
    const inputs = document.querySelectorAll("input[data-calculate]")
    const values = {}

    inputs.forEach((input) => {
      values[input.name] = this.parseInput(input.value)
    })

    this.result = this.config.calculate(values)
    this.displayResult()
  }

  parseInput(value) {
    return Number.parseFloat(value.replace(/[^0-9.]/g, "")) || 0
  }

  displayResult() {
    const resultElement = document.getElementById("result")
    if (resultElement) {
      resultElement.innerHTML = this.formatNumber(this.result.toFixed(2))
      resultElement.parentElement.style.animation = "pulse 0.6s ease-out"
    }
  }

  formatNumber(num) {
    return Number.parseFloat(num).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }
}

window.Calculator = Calculator
