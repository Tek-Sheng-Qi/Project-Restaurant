import "./styles.css";
import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menupage.js";
import { loadAboutPage } from "./aboutpage.js";

const buttons = document.querySelectorAll(".tabs button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const label = button.textContent;
        if (label === "Home") loadHomePage();
        else if (label === "Menu") loadMenuPage();
        else if (label === "About") loadAboutPage();
    });
});

loadHomePage();

