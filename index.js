const reveals = document.querySelectorAll(".reveal")
const skillBars = document.querySelectorAll(".skills-bar")

function handleScrollAnimations() {
    const windowHeight = window.innerHeight

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top

        if (elementTop < windowHeight - 120) {
            el.classList.add("active")
        } else {
            el.classList.remove("active")
        }
    })

    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect().top

        if (rect < windowHeight - 120) {
            bar.style.width = bar.style.getPropertyValue("--width")
        } else {
            bar.style.width = "0"
        }
    })
}

window.addEventListener("scroll", handleScrollAnimations)
window.addEventListener("load", handleScrollAnimations)