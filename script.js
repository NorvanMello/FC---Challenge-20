const popOver = document.querySelector(".popover")
const share = document.querySelector(".share")

share.addEventListener("click", () => {
    popOver.classList.toggle("active")
})
