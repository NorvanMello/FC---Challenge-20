const popOver = document.querySelector(".popover");
const shareButtons = document.querySelectorAll(".share");

let activeTrigger = null;

function setExpandedState(isExpanded) {
  shareButtons.forEach(button => {
    button.setAttribute("aria-expanded", String(isExpanded));
  });
}

function openPopover(triggerButton) {
  if (!popOver) return;

  popOver.classList.add("active");
  setExpandedState(true);
  activeTrigger = triggerButton;

  const firstItem = popOver.querySelector("a, button");
  firstItem?.focus();
}

function closePopover() {
  if (!popOver) return;

  popOver.classList.remove("active");
  setExpandedState(false);

  activeTrigger?.focus();
  activeTrigger = null;
}

shareButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    if (!popOver) return;
    event.stopPropagation();

    const isOpen = popOver.classList.contains("active");

    if (isOpen) {
      closePopover();
    } else {
      openPopover(button);
    }
  });
});

document.addEventListener("click", (event) => {
  if (!popOver) return;

  const isClickInside =
    popOver.contains(event.target) ||
    [...shareButtons].some(button => button.contains(event.target));

  if (!isClickInside && popOver.classList.contains("active")) {
    closePopover();
  }
});

document.addEventListener("keydown", (event) => {
  if (!popOver) return;

  if (event.key === "Escape" && popOver.classList.contains("active")) {
    closePopover();
  }
});
