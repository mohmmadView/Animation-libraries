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
  
  // gsap.to(".svgBox", {
  //   duration: 2,
  //   x: 300, // use transform shorthand (this is now using SVG units not px, the SVG viewBox is 100 units wide)
  //   xPercent: -80,
  //   // or target SVG attributes
  //   attr: {
  //     fill: "#8d3dae",
  //     rx: 50,
  //   },
  // });
  //create an object
  // let test = { myNum: 10, myColor: "red" };
  // gsap.to("test", test, {
  //   myNum: 200,
  //   myColor: "blue",
  //   onUpdate: () => console.log(test.myNum, test.myColor),
  // });

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



//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);


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
//? ==================================\\
//* ======bg-color-slider-gallery======\\
//? ==================================\\
const bgColorsGallery = [
  "#ffffff",  "#d2b48c", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ffa07a", "#008000",
 "#00ffff", "#808080", "#ff0bc0", "#7f00ff", "#08d3d3", "#800000", "#ff7f00","#ffa500", "#7fff00"
];
const stringSourceCode =
 [            // ? source code basketball
  ` gsap.to(".basket-left",
   { x:"200" ,rotation:-360 ,duration:1.5 ,yoyo:true })
  gsap.to(".basket-right",
   { x:"-200" ,rotation: 360 ,duration:1.5,yoyo:true  });`,
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
 ,
 `6`
 ,
 `  // ? source code racket
 gsap.timeline({ repeat: 5, repeatDelay: 1 });
         tl.to(".racket", {
        duration: 1,
        rotation: 90,
        ease: "expo",
      });
      tl.to(".racket", {
        duration: 1.5,
        x: 400,
        ease: "expo",
      });
      tl.to(".racket", {
        duration: 1,
        rotation: 180,
        ease: "expo",
      });
      tl.to(".racket", {
        duration: 1,
        y: 200,
        ease: "expo",
      });
         tl.to(".racket", {
        duration: 1,
        rotation: -90,
        ease: "expo",
      });
        tl.to(".racket", {
        duration: 1,
        x: 0,
        ease: "expo",
      });
          tl.to(".racket", {
        duration: 1,
        rotation: 0,
        ease: "expo",
      });
          tl.to(".racket", {
        duration: 1,
        y: 0,
        ease: "expo",
      });
 `
 ,
 ` gsap.to(".box", {
  duration: 1,
  rotation: 360,
  opacity: 1,
  delay: 0.5,
  stagger: 0.2,
  ease: "sine.out",
  force3D: true,
});`
,
`
gsap.to(".violet-bounce", {
  rotation: 360,
  duration: 2,
  repeat: -1,
  repeatDelay: 2,
  ease: "bounce.out",
});
9
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
    backgroundColor: (i) => bgColorsGallery[i],
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
      gsap.timeline({ repeat: 5, repeatDelay: 1 });
         tl.to(".racket", {
        duration: 1,
        rotation: 90,
        ease: "expo",
      });
      tl.to(".racket", {
        duration: 1.5,
        x: 400,
        ease: "expo",
      });
      tl.to(".racket", {
        duration: 1,
        rotation: 180,
        ease: "expo",
      });
      tl.to(".racket", {
        duration: 1,
        y: 200,
        ease: "expo",
      });
         tl.to(".racket", {
        duration: 1,
        rotation: -90,
        ease: "expo",
      });
        tl.to(".racket", {
        duration: 1,
        x: 0,
        ease: "expo",
      });
          tl.to(".racket", {
        duration: 1,
        rotation: 0,
        ease: "expo",
      });
          tl.to(".racket", {
        duration: 1,
        y: 0,
        ease: "expo",
      });

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
      gsap.to(".box", {
        duration: 1,
        rotation: 180,
        opacity: 1,
        delay: 0.5,
        stagger: 0.2,
        ease: "sine.out",
        force3D: true,
      });
          gsap.to(".astronaut", {
        duration: 5,
        ease: "power1.Out",
        immediateRender: true,
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate: 90,
        },
      });
   
      // tl.to(".racket", {
      //   duration: 1.5,
      //   rotation: -360,
      // });
      // tl.to(".racket", {
      //   duration: 1,
      //   y: "-100",
      //   ease: "expo",
      // });
      // tl.to(".racket", {
      //   duration: 1,
      //   ease: "expo",
      // });
      // gsap.to("rect", {duration: 1, rotation: 360, transformOrigin: "center center"});
      createElmcode.remove();
      onShow = false;
    })
    $(".img").on("click", (e) => {
        document.querySelectorAll(".box").forEach(function (box) {
    box.addEventListener("click", function () {
      gsap.to(".box", {
        duration: 0.5,
        opacity: 0,
        y: 0,
        stagger: 0.1,
        ease: "back.in",
      });
    });
  });
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

  })

 
 
  // elmShow[i].addEventListener("click", (e) => {
   
  // });

  // elmShow.addEventListener('click',(e)=>{
  //   console.log(e.target.parentNode);

  // })
// }

.set(".astronaut", { scale: 0.5, autoAlpha: 1 });


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