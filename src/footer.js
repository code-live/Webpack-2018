import { red, blue } from "./button-style";

const top = document.createElement("div");
top.innerText = "top";
top.style = red;
const bottom = document.createElement("div");
bottom.innerText = "bottom";
bottom.style = blue;
const footer = document.createElement("footer");

footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
