const buttons = document.querySelectorAll(".button");
const chars = document.querySelectorAll(".character");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        deselectButton();
        deselectChar();

        button.classList.add("selected");
        chars[index].classList.add("selected");
    });
});

function deselectChar() {
    const charSelected = document.querySelector(".character.selected");
    charSelected.classList.remove("selected");
}

function deselectButton() {
    const btnSelected = document.querySelector(".button.selected");
    btnSelected.classList.remove("selected");
}
