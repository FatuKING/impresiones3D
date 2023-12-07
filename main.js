import './style.css'

import './scroll.js'

import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    offset: 100, 
    duration: 800, 
    easing: 'ease-in-out', 
    delay: 200, 
    once: true, 
  });
});