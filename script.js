const popOver = document.querySelector(".popover");
const shareButtons = document.querySelectorAll(".share");

let activeTrigger = null;


shareButtons.forEach(button => {
    button.addEventListener("click", (event) => {
         if (!popOver) return;

        event.stopPropagation();

        activeTrigger = button;
        
        const isOpen = popOver?.classList.toggle("active");
        button.setAttribute("aria-expanded", String(isOpen)) //Making sure it is a string of true or false

        if(isOpen) {
            const firstItem = popOver.querySelector("a, button");
            firstItem?.focus();
            
        } else {
            activeTrigger.focus();
            activeTrigger = null;
        }

    });
});

document.addEventListener("click", (event) => {
    if(!popOver) return

    const isClickInside = (popOver?.contains(event.target) || [...shareButtons].some(button => button.contains(event.target)));

    if (!isClickInside) {
        popOver.classList.remove("active");

        shareButtons.forEach(button => {
            button.setAttribute("aria-expanded", "false");
        });


        activeTrigger?.focus();
        activeTrigger = null;
    }
});

document.addEventListener("keydown", (event) => {
    if (!popOver) return;

    if (event.key === "Escape" && popOver.classList.contains("active")) {
        popOver.classList.remove("active");

        shareButtons.forEach(button => {
            button.setAttribute("aria-expanded", "false");
        });

        activeTrigger?.focus();
        activeTrigger = null;
    }
});
