import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ready } from '@utils'
gsap.registerPlugin(ScrollTrigger);

window.App.scrollBehavior = () => {
  const bgColors = ['#209FF3', '#37F227', '#FFED14', '#FF5106', '#7E2BF1'];
  let wght = 100;
  let scroll;
  return {
    init() {
      const windowH = document.documentElement.clientHeight;
      
      scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
      });

      scroll.on("scroll", ScrollTrigger.update);

      ready(() => {
         scroll.update();
      })
      
      ScrollTrigger.scrollerProxy("[data-scroll-container]", {
        scrollTop(value) {
          return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
        }, 
        getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
      });

      const animation = gsap.timeline({
        scrollTrigger: {
          start: `top+=${windowH} bottom`,
          end: `bottom-=${windowH} top`,
          scrub: true,
          onUpdate: ({progress}) => {
            if(progress < 0.5){
              wght = gsap.utils.mapRange(0, 0.5 , 100, 900, progress);
            }else{
              wght = gsap.utils.mapRange(0.5 , 0, 100, 900, progress - 0.5);
            }
            gsap.to('html', {"--font-weight": wght ,ease: "none"}, 0)
          }
        },
        defaults:{duration:1}
      })
      .set('html', {"--active-color": bgColors[0], ease: "none"})
      .to('html', {"--active-color": bgColors[1], ease: "none" })
      .to('html', {"--active-color": bgColors[2], ease: "none" })
      .to('html', {"--active-color": bgColors[3], ease: "none" })
      .to('html', {"--active-color": bgColors[4], ease: "none" })
    },
    scrollTo(target){
      scroll.scrollTo(target)
    }
  }
}
