import "./module/swiper-element-bundle.min.js";
import "./module/inputmask.min.js";
import "./module/accardeon.js";
import "./module/animation.js";
import './module/justValidate.js';
import "./module/slide.js";



const inputTel = document.querySelector(".modal__tel");
const telMask = new Inputmask('+7(999)-999-99-99');
telMask.mask(inputTel);

