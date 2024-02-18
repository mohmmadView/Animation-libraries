import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import gasp from "gasp";
import innerHtmlGsap from "./HtmlGsap";
export default function Gsap() {
  innerHtmlGsap()
 
  gsap.registerPlugin(ScrollTrigger,Draggable,MotionPathPlugin,TextPlugin);
  let elmGsap = document.querySelectorAll(".anmiateGsap");
  let words = gsap.utils.toArray(".anmiateGsap-1 .anmiateGsap-2"),
    tl = gsap.timeline({ delay: 0.5 }),
    timePerCharacter = 0.2;

  words.forEach((el) => {
    tl.from(el, {
      text: "",
      duration: el.innerHTML.length * timePerCharacter,
      ease: "none",
    });
  });

  // * ======> GSAP <======\\
  let btnGsap_1 = document.querySelector("#btnGsap-1");
  let btnGsap_2 = document.querySelector("#btnGsap-2");
  btnGsap_1.addEventListener("click", () => {
    gsap.to(".box-left", {
      x: "38vw",
      rotation: 360,
      duration: 5,
    });
    gsap.to(".box-right", {
      x: "-38vw",
      rotation: -360,
      duration: 5,
    });
  });

  btnGsap_2.addEventListener("click", () => {
    gsap.to(".box-left", {
      x: "0vw",
      rotation: -360,
      duration: 5,
    });
    gsap.to(".box-right", {
      x: "0vw",
      rotation: 360,
      duration: 5,
    });
  });
  
  gsap.to(".svgBox", {
    duration: 2,
    x: 300, // use transform shorthand (this is now using SVG units not px, the SVG viewBox is 100 units wide)
    xPercent: -80,
    // or target SVG attributes
    attr: {
      fill: "#8d3dae",
      rx: 50,
    },
  });
  //create an object
  let test = { myNum: 10, myColor: "red" };
  gsap.to("test", test, {
    myNum: 200,
    myColor: "blue",
    onUpdate: () => console.log(test.myNum, test.myColor),
  });

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#1A1A1A";

  let position = { x: 0, y: 0 };

  function draw() {
    // erase the canvas
    ctx.clearRect(0, 0, 320, 320);
    // redraw the square at it's new position
    ctx.fillRect(position.x, position.y, 100, 50);
  }
  //animate x and y of point
  gsap.to(position, {
    x: 120,
    y: 120,
    duration: 4,
    // unlike DOM elements, canvas needs to be redrawn and cleared on every tick
    onUpdate: draw,
  });
  gsap.to(".test", {
    rotation: 360,
    x: "-100vw",
    xPercent: 700,
    // special properties
    duration: 2, // how long the animation lasts
    repeat: 100, // the number of repeats - this will play 3 times
    yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
  });

  gsap.to(".red-left", {
    rotation: 360,
    duration: 1,
    repeat: 1,
    repeatDelay: 1,
  });

  gsap.to(".violet-right", {
    rotation: 360,
    duration: 1,
    delay: 1, // delay the start of this animation
  });

  gsap.to(".red-linear", {
    rotation: 360,
    duration: 2,
    repeat: -1,
    repeatDelay: 2,
    ease: "none",
  });

  gsap.to(".violet-bounce", {
    rotation: 360,
    duration: 2,
    repeat: -1,
    repeatDelay: 2,
    ease: "bounce.out",
  });


 gsap.timeline({ repeat: 2, repeatDelay: 1 });
tl.to(".racket", {
  duration: 1,
  rotation: 90,
});
tl.to(".racket", {
  duration: 1,
  x: "80vw",
  ease: "expo",
});
tl.to(".racket", {
  duration: 1,
  ease: "expo",
});

//register the plugin (just once)
// gsap.registerPlugin(MotionPathPlugin);

gsap.set(".astronaut", { scale: 0.5, autoAlpha: 1 });

gsap.to(".astronaut", {
  duration: 5,
  ease: "power1.inOut",
  immediateRender: true,
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90,
  },
});

window.addEventListener("scroll", gasp_scroll);
function gasp_scroll(e) {
  if (window.scrollY > 3662) {
    console.log("scroll");
    gsap.to("#miniBus", {
      x: -280,
      duration: 3,
      yoyo: true,
      repeat: 1,
    });
    gsap.to("#text-gsap", {
      x: -280,
      duration: 3,
    });
  } else {
    gsap.to("#miniBus", {
      x: 0,
      duration: 3,
      repeat: 1,
    });
    gsap.to("#text-gsap", {
      x: -0,
      duration: 3,
    });
  }
  
}
//? ==================================\\
//* ==========gsap-gallery=============\\
//? ==================================\\
let slider = document.querySelectorAll(".img");
let sliderArr = Array.from(slider);
let onShow = false;
let codeSourceAll = document.querySelectorAll("#sourceCode");
let codeSourceAllArray = Array.from(codeSourceAll);
let createElmcode = document.createElement("code");
let btnShow = document.querySelectorAll(".show");
const colors = [
  "#ffffff", // سیاه
  "#000000", // سفید
  "#ff0000", // قرمز
  "#00ff00", // سبز
  "#0000ff", // آبی
  "#ffff00", // زرد
  "#ff00ff", // بنفش
  "#00ffff", // فیروزه‌ای
  "#808080", // خاکستری
  "#c0c0c0", // نقره‌ای
  "#f0f0f0", // سفید دودی
  "#d3d3d3", // خاکستری روشن
  "#a9a9a9", // خاکستری تیره
  "#ff7f00", // نارنجی
  "#00ff7f", // سبز روشن
  "#7f00ff", // بنفش روشن
  "#ff7fff", // صورتی
  "#7fff00", // زرد لیمویی
  "#7fffff", // آبی آسمانی
  "#f000ff", // سرخابی
  "#00f0ff", // آبی لاجوردی
  "#ffff7f", // زرد کمرنگ
  "#d2b48c", // قهوه‌ای
  "#ffa500", // نارنجی تیره
  "#008000", // سبز تیره
  "#008080", // آبی تیره
  "#800000", // قهوه‌ای سوخته
  "#800080", // بنفش تیره
  "#ffa07a", // رنگ پوست
  "#ff4500", // نارنجی سوخته
  "#00ff80", // سبزآبی
  "#7f0080", // بنفش مایل به قرمز
  "#7f8000", // قهوه‌ای مایل به زرد
  "#7f8080", // خاکستری مایل به قهوه‌ای
];
const stringSourceCode =
 [
  ` gsap.to(".basket-left",
   { x:"200" ,rotation:-360 ,duration:1.5 ,yoyo:true })
  gsap.to(".basket-right",
   { x:"-200" ,rotation: 360 ,duration:1.5,yoyo:true  });`, // سیاه
  `
  gsap.to(".box", {
  duration: 1,
  rotation: 360,
  opacity: 1,
  delay: 0.5,
  stagger: 0.2,
  ease: "sine.out",
  force3D: true,
});
  `, // سفید
  `
  gsap.to(".violet-bounce", {
    rotation: 360,
    duration: 2,
    repeat: -1,
    repeatDelay: 2,
    ease: "bounce.out",
  });

  `
  ,
   // قرمز
  `
  gsap.to(".red-linear", {
    rotation: 360,
    duration: 2,
    repeat: -1,
    repeatDelay: 2,
    ease: "none",
  });

  `
  
  , // سبز
 `
 gsap.to(".box", {
  duration: 1,
  rotation: 360,
  opacity: 1,
  delay: 0.5,
  stagger: 0.2,
  ease: "sine.out",
  force3D: true,
});
 `
];
codeSourceAllArray.forEach((elm,i)=>{
 elm.innerHTML = stringSourceCode[i]
})
let xPos = 0;
gsap
  .timeline()
  .set(".ringGsap", { rotationY: 180, cursor: "grab" }) //set initial rotationY so the parallax jump happens off screen
  .set(".img", {
    // apply transform rotations to each image
    rotateY:(i)=>i*-36,
    transformOrigin: "50% 50% 1050",
    z: -1050,
    backgroundColor: (i) => colors[i],
    backgroundPosition: (i) => getBgPos(i),
     backfaceVisibility: "hidden"
    
  })
  .set(".source",{
    opacity: 0,
  })
  
  .from(".img", {
    duration: 1.5,
    y: 200,
    opacity: 0,
    stagger: 0.1,
    ease: "expo",
   
  })
  .add((e,i) => {
    $(".img").on("mouseenter", (e) => {
      let current = e.currentTarget;
      let target = e.target;
       gsap.to(".img > button", { opacity: 1 });
      gsap.to(".img", {
        opacity: (i, t) => (t == current ? 1 : 0.5),
        ease: "power3",
        scale:(i,t)=>(t == current ? 1.3 : 0.8),
        
    })
    //  gsap.to(e.target, { scale: 1.3, });
  
      gsap.to(".basket-left", { x:"200" ,rotation:-360 ,duration:1.5 ,yoyo:true });
      gsap.to(".basket-right", { x:"-200" ,rotation: 360 ,duration:1.5,yoyo:true  });
      
    });
    $(".img").on("mouseleave", (e) => {
      let current = e.currentTarget;
      gsap.to(".img", { opacity: 1, ease: "power1.inOut" });
      gsap.to(current, { scale: 0.8 });
  
      gsap.to(".img > .basket-left", { x:"0" ,rotation:360 ,duration:1.5 ,backfaceVisibility: "hidden",});
      gsap.to(".img > .basket-right", { x:"-0" ,rotation: -360 ,duration:1.5 ,backfaceVisibility: "hidden", });
      gsap.to(".img > button", { opacity: 0 });
      gsap.to(".source",{
        opacity: 0,
      })
      
      createElmcode.remove();
      onShow = false;
    })
  $(".show").on("click", (e) => {
let current = e.currentTarget;
let elmShowCode=e.target.nextElementSibling;
if(!onShow){
  gsap.to(elmShowCode,{
    opacity:1,
    ease:"power1.in"
  })
  onShow = true;
}else{
  gsap.to(elmShowCode,{
    opacity:0,
    ease:"power1.inOut"
  })
  onShow = false;
}

})
//  $(".source").click((e) =>{
// console.log("item", e.target._gsap.target._gsap.target.parentElement.parentElement._gsap.target
// );
// gsap.to(e.target,{
//   x:200
// })
//  })
   
//     if (!onShow) {
//       for (let index = 0; index < colors.length; index++) {
//       let element = colors[index];
//       console.log(element);

//       createElmcode.classList.add("flex", "justify-center", "w-full", "h-full");
//       createElmcode.innerHTML =element
//       }
//       onShow = true;
//     } else{ createElmcode.remove(), (onShow = false);
// }


 
    // $(".source").on("mouseleave",()=>{
   
    // })
  })

  console.log(document.querySelectorAll(".box"));
  gsap.to(".box", {
    duration: 1,
    rotation: 360,
    opacity: 1,
    delay: 0.5,
    stagger: 0.2,
    ease: "sine.out",
    force3D: true,
  });
  
  document.querySelectorAll(".box").forEach(function (box) {
    box.addEventListener("click", function () {
      gsap.to(".box", {
        duration: 0.5,
        opacity: 0,
        y: -100,
        stagger: 0.1,
        ease: "back.in",
      });
    });
  });
  // elmShow[i].addEventListener("click", (e) => {
   
  // });

  // elmShow.addEventListener('click',(e)=>{
  //   console.log(e.target.parentNode);

  // })
// }

$(window).on("mousedown touchstart", dragStart);
$(window).on("mouseup touchend", dragEnd);

function dragStart(e) {
  if (e.touches) e.clientX = e.touches[0].clientX;
  xPos = Math.round(e.clientX);
  gsap.set(".ringGsap", { cursor: "grabbing" });

  $(window).on("mousemove touchmove", drag);
}
/**
 * Function for handling drag events.
 *
 * @param {object} e - The event object containing drag information
 * @return {void} This function does not return anything
 */
function drag(e) {
  if (e.touches) e.clientX = e.touches[0].clientX;

  gsap.to(".ringGsap", {
    rotationY: "-=" + ((Math.round(e.clientX) - xPos) % 360),
    onUpdate: () => {
      gsap.set(".img", { backgroundPosition: (i) => getBgPos(i) });
    },
  });
  // gsap.to('#text-gsap-2', { rotation: '-=' +( (Math.round(e.clientX)-xPos)%360 ),});
  xPos = Math.round(e.clientX);
}
/**
 * Function to handle the end of a drag event.
 *
 * @param {Event} e - the drag event object
 * @return {void}
 */
function dragEnd(e) {
  $(window).off("mousemove touchmove", drag);
  gsap.set(".ringGsap", { cursor: "grab" });
}
/**
 * Returns the background-position string to create parallax movement in each image.
 *
 * @param {number} i - the parameter for parallax movement calculation
 * @return {string} the background-position string
 */
function getBgPos(i) {
  //returns the background-position string to create parallax movement in each image
  return (
    100 -
    (gsap.utils.wrap(
      0,
      360,
      gsap.getProperty(".ringGsap", "rotationY") - 180 - i * 36,
    ) /
      360) *
      500 +
    "px 0px"
  );
}
}