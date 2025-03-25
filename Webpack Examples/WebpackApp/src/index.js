import { sayHello } from "./utils";
import './styles.css'
import Logo from "./logo.png";

console.log(sayHello('John'));

const img = document.createElement('img');
img.src = Logo;
img.alt = 'Logo Image';
document.body.appendChild(img);