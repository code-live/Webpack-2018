import nav from "./nav";
import {
  footer
} from "./footer";
import makeBtn from "./button";
import {
  makeStyleColor
} from "./button-style";
import btnStyle from "./button.css";
import img from "./img.png"
import makeImg from "./imgMake"

console.log(img);
const imgCreate = makeImg(img);
const btn = makeBtn('my btn');
btn.style = makeStyleColor('red');
document.body.appendChild(btn);
document.body.appendChild(imgCreate);
document.body.appendChild(footer);

console.log(nav(), makeBtn('myBtn'), makeStyleColor('black'));