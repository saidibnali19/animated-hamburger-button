const hamburgerButton = document.querySelector("[data-hamburger-button]");
const menu = document.querySelector("[data-menu]");

hamburgerButton.addEventListener("click", () => {
    const visibility = menu.getAttribute("data-visible");
    if (visibility === "false") {
        menu.setAttribute("data-visible", true);
        hamburgerButton.setAttribute("aria-expanded", true);
    } else {
        menu.setAttribute("data-visible", false);
        hamburgerButton.setAttribute("aria-expanded", false);
    }
});
