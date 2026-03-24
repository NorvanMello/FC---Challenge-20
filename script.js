const popOver = document.querySelector(".popover");
const shareButtons = document.querySelectorAll(".share");


shareButtons.forEach(button => {
    button.addEventListener("click", (event) => {
         if (!popOver) return;

        event.stopPropagation();
        
        const isOpen = popOver?.classList.toggle("active");
        button.setAttribute("aria-expanded", String(isOpen)) //Making sure it is a string of true or false

        if(isOpen) {
            const firstItem = popOver.querySelector("a, button");
            firstItem?.focus();
        } else {
            button.focus();
        }

    });
});

document.addEventListener("click", (event) => {
    if(!popOver) return

    const isClickInside = (popOver?.contains(event.target) || [...shareButtons].some(button => button.contains(event.target)));

    if (!isClickInside) {
        popOver.classList.remove("active");

        shareButtons[0]?.focus();
    }
});
