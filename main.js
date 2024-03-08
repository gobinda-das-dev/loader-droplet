import { gsap } from 'gsap';
import imagesLoaded from 'imagesloaded';

const content = document.querySelectorAll('section');
const tl = gsap.timeline();

// get all images
const imgLoad = imagesLoaded(content)

imgLoad.on('done', instance => {


  tl
    .to('svg', {
      width: 0,
      delay: 1.5,
    })
    .to('.blinder', {
      height: 0,
      duration: 1,
      ease: 'power3.inOut',
      stagger: .04,
      onComplete: () => {gsap.to('.loader', {display: "none"})}
    })
    .from(".mask h1, .mask p", {
      opacity: 0,
      y: 100,
      stagger: .2
    })
})


const mobileNav = document.querySelector("#mobile-nav").style.display = "none";
document.querySelector('nav h3').addEventListener('click', function() {
  mobileNav.style.display = "flex";
})