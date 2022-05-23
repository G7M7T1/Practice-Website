import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let width = window.innerWidth
let speed = 350 //pixels per second
let endX = width  - 500

let circumference = document.querySelector("#wheel1").getBBox().width * Math.PI
let rotation = (endX / circumference) * 360
let duration = endX / speed
let ease = "sine.inOut"

let tl = gsap.timeline({scrollTrigger:{
        trigger:".carWrapper",
        start:"top 50%",
        end:"bottom 50%",
        scrub:1
    }})
    .to("svg", {duration:duration, x:endX, ease:ease})
    .to("#wheel1, #wheel2", {duration:duration, rotation:rotation, transformOrigin:"50% 50%", ease:ease}, 0)


const animation = gsap.timeline()
function init() {
        animation
            .from(".logo", {width:0, duration:0.8, ease:"power1.in"})
            .from(".tagline_text", {yPercent:-100, stagger:0.05, duration:0.3})
            .to(".tagline_text", {color:"#fff", stagger:0.05, duration:0.3})
            .to(".ad_wrapper", {duration:3, background:"#fff", opacity:0}, "+6")

        ScrollTrigger.create({
                trigger:".ad_wrapper",
                animation: animation,
                start:"top 0",
                end:"+=700px",
                pin:true,
                scrub:true,
                pinSpacing: true
        })
}

window.addEventListener('load', init);