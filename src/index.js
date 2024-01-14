import "./style.css";
import loadHome from "./home";
import loadAbout from "./about";
import loadContact from "./contact";

const body = document.querySelector("body");

const buttons = document.querySelectorAll("nav p");
console.log(buttons);
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    const pageName = this.id;

    if (pageName === body.id) {
      return;
    } else if (pageName === "home") {
      loadHome();
    } else if (pageName === "about") {
      loadAbout();
    } else if (pageName === "contact") {
      loadContact();
    }
  })
);

loadHome();
