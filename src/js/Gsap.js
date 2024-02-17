import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import gasp from "gasp";
export default function Gsap() {
  htmlInnerGsap()
 
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
// console.log(document.querySelectorAll(".img"));
//gsap.globalTimeline.timeScale(0.25)
// for (let i = 0; i < sliderArr.length; i++) {
//   const elementSlide = sliderArr[i];
  // elementSlide.insertAdjacentHTML(
  //   "beforeend",
  //   `<button  class="show p-3  bg-red-400">show</button>`,
  // );


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
function htmlInnerGsap(){
   document.querySelector("#ContainerGsap").innerHTML = `
  <!--? ----------------------------------------------------------------------- -->
  <!--* ---------------------------- Install GSAP ----------------------------- -->
  <!--?----------------------------------------------------------------------- --> 
<div class="flex justify-center ">
<div class="w-3/4 m-2 p-3 border border-dashed bg-white bg-opacity-10">

<h2 class="text-rose-500 p-2 text-2xl">installing GSAP</h2> 
<h2 class="text-white ">npm install gsap</h2>
<h2 class="text-rose-300 text-2xl">or</h2> 
<h2 class="text-white">yarn add gasp </h2>
<h2 class="text-white">import { gsap } from "gsap"</h2>
<h2 class="text-rose-300 text-2xl">or</h2> 
</div>
</div>
<div class="w-full h-screen flex justify-center">
<div class="container-gsapAll w-full h-full  flex  flex-col">
<div class="titleGsap-Animate mt-10 mx-auto w-4/5 h-1/4 ">
  <div class="flex justify-end">
  
    <div id="" class="w-3/6 flex">
    
     <div class="w-3/5">
       
          <svg id="text-gsap" viewBox="0 0 160 70" xmlns="http://www.w3.org/2000/svg">
            
            <style>
              .small {
                font: italic 13px sans-serif;
                fill: red;
              }
              .heavy {
                font: 600 25px sans-serif;
                fill:rgb(229, 245, 7)
              }
          
              .Rrrrr {
                font: italic bold 35px serif;
                fill: rgb(0, 255, 13);
              }
            </style>
          
            <text x="8" y="15" class="small">Animate</text>
            <text x="20" y="65" class="heavy">library</text>
            <text x="51" y="45" class="Rrrrr">GASP</text>
            
          </svg>
     </div>
   
     <div id="container-txt-gsap" class="flex items-center ">
    
    
      
     </div>
    </div>
  </div>
  
</div>


<div class="stage">
<div class="container-gsap">
  <div class="ringGsap">
    
    <div class="img  absolute"><button  class="show p-3  bg-red-400">show</button>
     <div  class="h-full w-[95%] m-3 absolute source z-10" >
      <pre class="h-full m-0 p-0 language-js" tabindex="0"><code id="sourceCode" class="language-js"><span class="token keyword">undefined</span></code> </pre>
     </div>
      <svg class=" w-24 h-24  absolute basket-left " version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
  <g>
    <path fill="#394240" d="M54.627,9.372c-12.496-12.494-32.758-12.494-45.254,0c-12.497,12.496-12.497,32.758,0,45.256
      c12.496,12.496,32.758,12.496,45.254,0C67.124,42.13,67.124,21.868,54.627,9.372z M53.213,10.786
      c4.428,4.428,7.179,9.895,8.261,15.615c-9.549-0.729-19.344,2.539-26.646,9.84c-1.283,1.283-2.437,2.646-3.471,4.066
      c-2.487-1.861-4.873-3.926-7.136-6.188c-0.568-0.568-1.106-1.156-1.648-1.74c1.785-2.346,3.748-4.602,5.892-6.744
      c7.077-7.078,15.369-12.184,24.198-15.373C52.847,10.437,53.033,10.606,53.213,10.786z M50.973,8.759
      c-8.719,3.309-16.901,8.441-23.922,15.463c-2.117,2.117-4.065,4.34-5.845,6.65c-2.224-2.543-4.227-5.211-5.993-7.986
      c4.333-5.684,6.633-12.416,6.904-19.217C31.742,0.319,42.732,2.015,50.973,8.759z M10.787,10.786
      c2.755-2.756,5.915-4.854,9.285-6.312c-0.395,5.848-2.387,11.605-5.978,16.566c-1.728-2.922-3.208-5.945-4.448-9.047
      C10.014,11.585,10.393,11.181,10.787,10.786z M8.193,13.755c1.291,3.084,2.818,6.086,4.582,8.988
      c-0.625,0.75-1.285,1.482-1.988,2.186c-2.626,2.625-5.599,4.686-8.766,6.207C2.196,24.985,4.254,18.882,8.193,13.755z
       M2.031,33.339c3.688-1.645,7.145-3.971,10.17-6.996c0.588-0.588,1.142-1.199,1.678-1.818c1.809,2.777,3.848,5.447,6.104,7.992
      c-4.463,6.176-7.752,12.934-9.889,19.967C5.03,47.075,2.34,40.253,2.031,33.339z M11.712,54.093
      c2.021-7.07,5.231-13.871,9.654-20.074c0.479,0.506,0.945,1.021,1.441,1.516c2.351,2.352,4.832,4.488,7.419,6.422
      c-3.73,5.818-5.498,12.527-5.329,19.193C20.114,59.989,15.563,57.634,11.712,54.093z M53.213,53.212
      c-7.156,7.158-17.028,9.934-26.299,8.348c-0.253-6.389,1.382-12.836,4.933-18.424c6.625,4.654,13.896,7.979,21.445,9.994
      C53.265,53.157,53.24,53.187,53.213,53.212z M32.979,41.481c0.974-1.336,2.057-2.619,3.263-3.826
      c6.99-6.988,16.407-10.049,25.538-9.219c0.961,8.076-1.356,16.463-6.953,23.016C47.13,49.53,39.712,46.212,32.979,41.481z"/>
    <g>
      <path fill="#F76D57" d="M22.573,32.38c0.542,0.584,1.08,1.172,1.648,1.74c2.263,2.262,4.648,4.326,7.136,6.188
        c1.034-1.42,2.188-2.783,3.471-4.066c7.302-7.301,17.097-10.568,26.646-9.84c-1.082-5.721-3.833-11.188-8.261-15.615
        c-0.18-0.18-0.366-0.35-0.55-0.523c-8.829,3.189-17.121,8.295-24.198,15.373C26.321,27.778,24.358,30.034,22.573,32.38z"/>
      <path fill="#F76D57" d="M21.206,30.872c1.779-2.311,3.728-4.533,5.845-6.65C34.071,17.2,42.254,12.067,50.973,8.759
        c-8.24-6.744-19.23-8.439-28.855-5.09c-0.271,6.801-2.571,13.533-6.904,19.217C16.979,25.661,18.982,28.329,21.206,30.872z"/>
      <path fill="#F76D57" d="M20.072,4.474c-3.37,1.459-6.53,3.557-9.285,6.312c-0.395,0.395-0.773,0.799-1.141,1.207
        c1.24,3.102,2.721,6.125,4.448,9.047C17.686,16.079,19.678,10.321,20.072,4.474z"/>
      <path fill="#F76D57" d="M12.775,22.743c-1.764-2.902-3.291-5.904-4.582-8.988c-3.939,5.127-5.997,11.23-6.172,17.381
        c3.167-1.521,6.14-3.582,8.766-6.207C11.49,24.226,12.15,23.493,12.775,22.743z"/>
      <path fill="#F76D57" d="M13.879,24.524c-0.536,0.619-1.09,1.23-1.678,1.818c-3.025,3.025-6.482,5.352-10.17,6.996
        c0.309,6.914,2.999,13.736,8.062,19.145c2.137-7.033,5.426-13.791,9.889-19.967C17.727,29.972,15.688,27.302,13.879,24.524z"/>
      <path fill="#F76D57" d="M22.808,35.534c-0.496-0.494-0.963-1.01-1.441-1.516c-4.423,6.203-7.633,13.004-9.654,20.074
        c3.852,3.541,8.402,5.896,13.186,7.057c-0.169-6.666,1.599-13.375,5.329-19.193C27.64,40.022,25.158,37.886,22.808,35.534z"/>
      <path fill="#F76D57" d="M26.914,61.56c9.271,1.586,19.143-1.189,26.299-8.348c0.027-0.025,0.052-0.055,0.079-0.082
        c-7.549-2.016-14.82-5.34-21.445-9.994C28.296,48.724,26.661,55.171,26.914,61.56z"/>
      <path fill="#F76D57" d="M61.78,28.437c-9.131-0.83-18.548,2.23-25.538,9.219c-1.206,1.207-2.289,2.49-3.263,3.826
        c6.732,4.73,14.15,8.049,21.848,9.971C60.424,44.899,62.741,36.513,61.78,28.437z"/>
    </g>
    <path opacity="0.2" fill="#231F20" d="M26.914,61.56c9.271,1.586,19.143-1.189,26.299-8.348c0.027-0.025,0.052-0.055,0.079-0.082
      c-7.549-2.016-14.82-5.34-21.445-9.994C28.296,48.724,26.661,55.171,26.914,61.56z"/>
    <path opacity="0.2" fill="#231F20" d="M61.78,28.437c-9.131-0.83-18.548,2.23-25.538,9.219c-1.206,1.207-2.289,2.49-3.263,3.826
      c6.732,4.73,14.15,8.049,21.848,9.971C60.424,44.899,62.741,36.513,61.78,28.437z"/>
    <g opacity="0.2">
      <path fill="#FFFFFF" d="M10.787,10.786c-0.395,0.395-0.773,0.799-1.141,1.207c1.24,3.102,2.721,6.125,4.448,9.047
        c3.591-4.961,5.583-10.719,5.978-16.566C16.702,5.933,13.542,8.03,10.787,10.786z"/>
      <path fill="#FFFFFF" d="M2.021,31.136c3.167-1.521,6.14-3.582,8.766-6.207c0.703-0.703,1.363-1.436,1.988-2.186
        c-1.764-2.902-3.291-5.904-4.582-8.988C4.254,18.882,2.196,24.985,2.021,31.136z"/>
    </g>
  </g>
  </svg>
        <svg  class="w-24 h-24 absolute basket-right" version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
      <g>
        <path fill="#394240" d="M54.627,9.372c-12.496-12.494-32.758-12.494-45.254,0c-12.497,12.496-12.497,32.758,0,45.256
          c12.496,12.496,32.758,12.496,45.254,0C67.124,42.13,67.124,21.868,54.627,9.372z M53.213,10.786
          c4.428,4.428,7.179,9.895,8.261,15.615c-9.549-0.729-19.344,2.539-26.646,9.84c-1.283,1.283-2.437,2.646-3.471,4.066
          c-2.487-1.861-4.873-3.926-7.136-6.188c-0.568-0.568-1.106-1.156-1.648-1.74c1.785-2.346,3.748-4.602,5.892-6.744
          c7.077-7.078,15.369-12.184,24.198-15.373C52.847,10.437,53.033,10.606,53.213,10.786z M50.973,8.759
          c-8.719,3.309-16.901,8.441-23.922,15.463c-2.117,2.117-4.065,4.34-5.845,6.65c-2.224-2.543-4.227-5.211-5.993-7.986
          c4.333-5.684,6.633-12.416,6.904-19.217C31.742,0.319,42.732,2.015,50.973,8.759z M10.787,10.786
          c2.755-2.756,5.915-4.854,9.285-6.312c-0.395,5.848-2.387,11.605-5.978,16.566c-1.728-2.922-3.208-5.945-4.448-9.047
          C10.014,11.585,10.393,11.181,10.787,10.786z M8.193,13.755c1.291,3.084,2.818,6.086,4.582,8.988
          c-0.625,0.75-1.285,1.482-1.988,2.186c-2.626,2.625-5.599,4.686-8.766,6.207C2.196,24.985,4.254,18.882,8.193,13.755z
           M2.031,33.339c3.688-1.645,7.145-3.971,10.17-6.996c0.588-0.588,1.142-1.199,1.678-1.818c1.809,2.777,3.848,5.447,6.104,7.992
          c-4.463,6.176-7.752,12.934-9.889,19.967C5.03,47.075,2.34,40.253,2.031,33.339z M11.712,54.093
          c2.021-7.07,5.231-13.871,9.654-20.074c0.479,0.506,0.945,1.021,1.441,1.516c2.351,2.352,4.832,4.488,7.419,6.422
          c-3.73,5.818-5.498,12.527-5.329,19.193C20.114,59.989,15.563,57.634,11.712,54.093z M53.213,53.212
          c-7.156,7.158-17.028,9.934-26.299,8.348c-0.253-6.389,1.382-12.836,4.933-18.424c6.625,4.654,13.896,7.979,21.445,9.994
          C53.265,53.157,53.24,53.187,53.213,53.212z M32.979,41.481c0.974-1.336,2.057-2.619,3.263-3.826
          c6.99-6.988,16.407-10.049,25.538-9.219c0.961,8.076-1.356,16.463-6.953,23.016C47.13,49.53,39.712,46.212,32.979,41.481z"/>
        <g>
          <path fill="#F76D57" d="M22.573,32.38c0.542,0.584,1.08,1.172,1.648,1.74c2.263,2.262,4.648,4.326,7.136,6.188
            c1.034-1.42,2.188-2.783,3.471-4.066c7.302-7.301,17.097-10.568,26.646-9.84c-1.082-5.721-3.833-11.188-8.261-15.615
            c-0.18-0.18-0.366-0.35-0.55-0.523c-8.829,3.189-17.121,8.295-24.198,15.373C26.321,27.778,24.358,30.034,22.573,32.38z"/>
          <path fill="#F76D57" d="M21.206,30.872c1.779-2.311,3.728-4.533,5.845-6.65C34.071,17.2,42.254,12.067,50.973,8.759
            c-8.24-6.744-19.23-8.439-28.855-5.09c-0.271,6.801-2.571,13.533-6.904,19.217C16.979,25.661,18.982,28.329,21.206,30.872z"/>
          <path fill="#F76D57" d="M20.072,4.474c-3.37,1.459-6.53,3.557-9.285,6.312c-0.395,0.395-0.773,0.799-1.141,1.207
            c1.24,3.102,2.721,6.125,4.448,9.047C17.686,16.079,19.678,10.321,20.072,4.474z"/>
          <path fill="#F76D57" d="M12.775,22.743c-1.764-2.902-3.291-5.904-4.582-8.988c-3.939,5.127-5.997,11.23-6.172,17.381
            c3.167-1.521,6.14-3.582,8.766-6.207C11.49,24.226,12.15,23.493,12.775,22.743z"/>
          <path fill="#F76D57" d="M13.879,24.524c-0.536,0.619-1.09,1.23-1.678,1.818c-3.025,3.025-6.482,5.352-10.17,6.996
            c0.309,6.914,2.999,13.736,8.062,19.145c2.137-7.033,5.426-13.791,9.889-19.967C17.727,29.972,15.688,27.302,13.879,24.524z"/>
          <path fill="#F76D57" d="M22.808,35.534c-0.496-0.494-0.963-1.01-1.441-1.516c-4.423,6.203-7.633,13.004-9.654,20.074
            c3.852,3.541,8.402,5.896,13.186,7.057c-0.169-6.666,1.599-13.375,5.329-19.193C27.64,40.022,25.158,37.886,22.808,35.534z"/>
          <path fill="#F76D57" d="M26.914,61.56c9.271,1.586,19.143-1.189,26.299-8.348c0.027-0.025,0.052-0.055,0.079-0.082
            c-7.549-2.016-14.82-5.34-21.445-9.994C28.296,48.724,26.661,55.171,26.914,61.56z"/>
          <path fill="#F76D57" d="M61.78,28.437c-9.131-0.83-18.548,2.23-25.538,9.219c-1.206,1.207-2.289,2.49-3.263,3.826
            c6.732,4.73,14.15,8.049,21.848,9.971C60.424,44.899,62.741,36.513,61.78,28.437z"/>
        </g>
        <path opacity="0.2" fill="#231F20" d="M26.914,61.56c9.271,1.586,19.143-1.189,26.299-8.348c0.027-0.025,0.052-0.055,0.079-0.082
          c-7.549-2.016-14.82-5.34-21.445-9.994C28.296,48.724,26.661,55.171,26.914,61.56z"/>
        <path opacity="0.2" fill="#231F20" d="M61.78,28.437c-9.131-0.83-18.548,2.23-25.538,9.219c-1.206,1.207-2.289,2.49-3.263,3.826
          c6.732,4.73,14.15,8.049,21.848,9.971C60.424,44.899,62.741,36.513,61.78,28.437z"/>
        <g opacity="0.2">
          <path fill="#FFFFFF" d="M10.787,10.786c-0.395,0.395-0.773,0.799-1.141,1.207c1.24,3.102,2.721,6.125,4.448,9.047
            c3.591-4.961,5.583-10.719,5.978-16.566C16.702,5.933,13.542,8.03,10.787,10.786z"/>
          <path fill="#FFFFFF" d="M2.021,31.136c3.167-1.521,6.14-3.582,8.766-6.207c0.703-0.703,1.363-1.436,1.988-2.186
            c-1.764-2.902-3.291-5.904-4.582-8.988C4.254,18.882,2.196,24.985,2.021,31.136z"/>
        </g>
      </g>
      </svg>
     
    </div>
    <div class="img  absolute ">
<button  class="show p-3  bg-red-400">show</button>
<div  class=" h-full absolute source" style="opacity: 0;">
      <pre class="h-full m-0 p-0 language-js" tabindex="0"><code id="sourceCode" class="language-js"><span class="token keyword">undefined</span></code> </pre>
     </div>
<svg id="toggleGsap" class="w-full h-full absolute " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
<g id="whole">
      <g id="togglePanel">
        <path d="M331.5,328.5a45.5,45.5,0,0,1,0-91h115a45.5,45.5,0,0,1,0,91Z" fill="#f2f2f2"/>
        <path d="M446.5,241a42,42,0,0,1,0,84h-115a42,42,0,0,1,0-84h115m0-7h-115a49.14,49.14,0,0,0-49,49h0a49.14,49.14,0,0,0,49,49h115a49.14,49.14,0,0,0,49-49h0a49.14,49.14,0,0,0-49-49Z" fill="#f4f9f6"/>
      </g>
     <line id="fillLine2" x1="331" y1="283" x2="446" y2="283" fill="none" stroke="#ED4D6E" stroke-linecap="round" stroke-linejoin="round" stroke-width="84"/>
      <line id="fillLine1" x1="331" y1="283" x2="446" y2="283" fill="none" stroke="#A0CA4C" stroke-linecap="round" stroke-linejoin="round" stroke-width="84"/>
      <g id="dragger">
        <ellipse cx="330" cy="283" rx="40.5" ry="41" fill="#fcfcfc"/>
        <path d="M330,243c21.78,0,39.5,17.94,39.5,40s-17.72,40-39.5,40-39.5-17.94-39.5-40,17.72-40,39.5-40m0-2c-22.92,0-41.5,18.8-41.5,42s18.58,42,41.5,42,41.5-18.8,41.5-42-18.58-42-41.5-42Z" fill="#e1e5e1"/>
      </g>
  </g>
</svg>
    </div>
    <div class="img  absolute ">
       <button  class="show p-3  bg-red-400">show</button>
       <div class="w-2/3 h-full opacity-0 bg-red-400 source"></div>
    </div>
    <div class="img  absolute ">
<button  class="show p-3  bg-red-400">show</button>
       <div class=" h-full  source">
        <pre  class="h-full m-0 p-0 "><code id="sourceCode" class="language-js">
        </code> </pre>
       </div>
    </div>
    <div class="img  absolute "> <button  class="show p-3  bg-red-400">show</button>
       <div class=" h-full  source">
        <pre  class="h-full m-0 p-0 "><code id="sourceCode" class="language-js">

        </code> </pre>
       </div>
    
    </div>
    <div class="img  absolute ">
<button  class="show p-3  bg-red-400">show</button>
       <div class=" h-full  source">
        <pre  class="h-full m-0 p-0 "><code id="sourceCode" class="language-js">

        </code> </pre>
       </div>
    </div>
    <div class="img  absolute "> 
       <button  class="show p-3  bg-red-400">show</button>
       <div class=" h-full  source">
        <pre  class="h-full m-0 p-0 "><code id="sourceCode" class="language-js">

        </code> </pre></div>
    </div>
    <div class="img  absolute ">
       <button  class="show p-3  bg-red-400">show</button>
       <div class=" h-full  source">
        <pre  class="h-full m-0 p-0 "><code id="sourceCode" class="language-js">

        </code> </pre></div>
    </div>
    <div class="img  absolute ">
       <button  class="show p-3  bg-red-400">show</button>
       <div class=" h-full  source">
        <pre  class="h-full m-0 p-0 "><code id="sourceCode" class="language-js">

        </code> </pre>
        </div>
    </div>
    <div class="img  absolute ">
       <button  class="show p-3  bg-red-400">show</button>
       <div class=" h-full  source">
        <pre  class="h-full m-0 p-0 "><code id="sourceCode" class="language-js">
        </code> </pre>
       </div>
    </div>
  </div>
</div>

</div>
</div>
</div>
<div class=" mx-auto w-5/6">
  
  <button class="p-3 bg-orange-300" id="btnGsap-1">Gsap-1</button>
  <button class="p-3 bg-orange-300" id="btnGsap-2">Gsap-2</button>
  <div class="w-11/12 flex items-center justify-between h-48 mt-5 p-5 bg-zinc-50/15 overflow-hidden">
    <div class="block box-left w-32 h-32 ">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  	  viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
  <g>
  	<path fill="#394240" d="M54.627,9.372c-12.496-12.494-32.758-12.494-45.254,0c-12.497,12.496-12.497,32.758,0,45.256
  		c12.496,12.496,32.758,12.496,45.254,0C67.124,42.13,67.124,21.868,54.627,9.372z M53.213,10.786
  		c4.428,4.428,7.179,9.895,8.261,15.615c-9.549-0.729-19.344,2.539-26.646,9.84c-1.283,1.283-2.437,2.646-3.471,4.066
  		c-2.487-1.861-4.873-3.926-7.136-6.188c-0.568-0.568-1.106-1.156-1.648-1.74c1.785-2.346,3.748-4.602,5.892-6.744
  		c7.077-7.078,15.369-12.184,24.198-15.373C52.847,10.437,53.033,10.606,53.213,10.786z M50.973,8.759
  		c-8.719,3.309-16.901,8.441-23.922,15.463c-2.117,2.117-4.065,4.34-5.845,6.65c-2.224-2.543-4.227-5.211-5.993-7.986
  		c4.333-5.684,6.633-12.416,6.904-19.217C31.742,0.319,42.732,2.015,50.973,8.759z M10.787,10.786
  		c2.755-2.756,5.915-4.854,9.285-6.312c-0.395,5.848-2.387,11.605-5.978,16.566c-1.728-2.922-3.208-5.945-4.448-9.047
  		C10.014,11.585,10.393,11.181,10.787,10.786z M8.193,13.755c1.291,3.084,2.818,6.086,4.582,8.988
  		c-0.625,0.75-1.285,1.482-1.988,2.186c-2.626,2.625-5.599,4.686-8.766,6.207C2.196,24.985,4.254,18.882,8.193,13.755z
  		 M2.031,33.339c3.688-1.645,7.145-3.971,10.17-6.996c0.588-0.588,1.142-1.199,1.678-1.818c1.809,2.777,3.848,5.447,6.104,7.992
  		c-4.463,6.176-7.752,12.934-9.889,19.967C5.03,47.075,2.34,40.253,2.031,33.339z M11.712,54.093
  		c2.021-7.07,5.231-13.871,9.654-20.074c0.479,0.506,0.945,1.021,1.441,1.516c2.351,2.352,4.832,4.488,7.419,6.422
  		c-3.73,5.818-5.498,12.527-5.329,19.193C20.114,59.989,15.563,57.634,11.712,54.093z M53.213,53.212
  		c-7.156,7.158-17.028,9.934-26.299,8.348c-0.253-6.389,1.382-12.836,4.933-18.424c6.625,4.654,13.896,7.979,21.445,9.994
  		C53.265,53.157,53.24,53.187,53.213,53.212z M32.979,41.481c0.974-1.336,2.057-2.619,3.263-3.826
  		c6.99-6.988,16.407-10.049,25.538-9.219c0.961,8.076-1.356,16.463-6.953,23.016C47.13,49.53,39.712,46.212,32.979,41.481z"/>
  	<g>
  		<path fill="#F76D57" d="M22.573,32.38c0.542,0.584,1.08,1.172,1.648,1.74c2.263,2.262,4.648,4.326,7.136,6.188
  			c1.034-1.42,2.188-2.783,3.471-4.066c7.302-7.301,17.097-10.568,26.646-9.84c-1.082-5.721-3.833-11.188-8.261-15.615
  			c-0.18-0.18-0.366-0.35-0.55-0.523c-8.829,3.189-17.121,8.295-24.198,15.373C26.321,27.778,24.358,30.034,22.573,32.38z"/>
  		<path fill="#F76D57" d="M21.206,30.872c1.779-2.311,3.728-4.533,5.845-6.65C34.071,17.2,42.254,12.067,50.973,8.759
  			c-8.24-6.744-19.23-8.439-28.855-5.09c-0.271,6.801-2.571,13.533-6.904,19.217C16.979,25.661,18.982,28.329,21.206,30.872z"/>
  		<path fill="#F76D57" d="M20.072,4.474c-3.37,1.459-6.53,3.557-9.285,6.312c-0.395,0.395-0.773,0.799-1.141,1.207
  			c1.24,3.102,2.721,6.125,4.448,9.047C17.686,16.079,19.678,10.321,20.072,4.474z"/>
  		<path fill="#F76D57" d="M12.775,22.743c-1.764-2.902-3.291-5.904-4.582-8.988c-3.939,5.127-5.997,11.23-6.172,17.381
  			c3.167-1.521,6.14-3.582,8.766-6.207C11.49,24.226,12.15,23.493,12.775,22.743z"/>
  		<path fill="#F76D57" d="M13.879,24.524c-0.536,0.619-1.09,1.23-1.678,1.818c-3.025,3.025-6.482,5.352-10.17,6.996
  			c0.309,6.914,2.999,13.736,8.062,19.145c2.137-7.033,5.426-13.791,9.889-19.967C17.727,29.972,15.688,27.302,13.879,24.524z"/>
  		<path fill="#F76D57" d="M22.808,35.534c-0.496-0.494-0.963-1.01-1.441-1.516c-4.423,6.203-7.633,13.004-9.654,20.074
  			c3.852,3.541,8.402,5.896,13.186,7.057c-0.169-6.666,1.599-13.375,5.329-19.193C27.64,40.022,25.158,37.886,22.808,35.534z"/>
  		<path fill="#F76D57" d="M26.914,61.56c9.271,1.586,19.143-1.189,26.299-8.348c0.027-0.025,0.052-0.055,0.079-0.082
  			c-7.549-2.016-14.82-5.34-21.445-9.994C28.296,48.724,26.661,55.171,26.914,61.56z"/>
  		<path fill="#F76D57" d="M61.78,28.437c-9.131-0.83-18.548,2.23-25.538,9.219c-1.206,1.207-2.289,2.49-3.263,3.826
  			c6.732,4.73,14.15,8.049,21.848,9.971C60.424,44.899,62.741,36.513,61.78,28.437z"/>
  	</g>
  	<path opacity="0.2" fill="#231F20" d="M26.914,61.56c9.271,1.586,19.143-1.189,26.299-8.348c0.027-0.025,0.052-0.055,0.079-0.082
  		c-7.549-2.016-14.82-5.34-21.445-9.994C28.296,48.724,26.661,55.171,26.914,61.56z"/>
  	<path opacity="0.2" fill="#231F20" d="M61.78,28.437c-9.131-0.83-18.548,2.23-25.538,9.219c-1.206,1.207-2.289,2.49-3.263,3.826
  		c6.732,4.73,14.15,8.049,21.848,9.971C60.424,44.899,62.741,36.513,61.78,28.437z"/>
  	<g opacity="0.2">
  		<path fill="#FFFFFF" d="M10.787,10.786c-0.395,0.395-0.773,0.799-1.141,1.207c1.24,3.102,2.721,6.125,4.448,9.047
  			c3.591-4.961,5.583-10.719,5.978-16.566C16.702,5.933,13.542,8.03,10.787,10.786z"/>
  		<path fill="#FFFFFF" d="M2.021,31.136c3.167-1.521,6.14-3.582,8.766-6.207c0.703-0.703,1.363-1.436,1.988-2.186
  			c-1.764-2.902-3.291-5.904-4.582-8.988C4.254,18.882,2.196,24.985,2.021,31.136z"/>
  	</g>
  </g>
  </svg>
    </div>
    <div class="block box-right w-32 h-32 ">
       <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  	  viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
  <g>
  	<path fill="#394240" d="M54.627,9.372c-12.496-12.494-32.758-12.494-45.254,0c-12.497,12.496-12.497,32.758,0,45.256
  		c12.496,12.496,32.758,12.496,45.254,0C67.124,42.13,67.124,21.868,54.627,9.372z M53.213,10.786
  		c4.428,4.428,7.179,9.895,8.261,15.615c-9.549-0.729-19.344,2.539-26.646,9.84c-1.283,1.283-2.437,2.646-3.471,4.066
  		c-2.487-1.861-4.873-3.926-7.136-6.188c-0.568-0.568-1.106-1.156-1.648-1.74c1.785-2.346,3.748-4.602,5.892-6.744
  		c7.077-7.078,15.369-12.184,24.198-15.373C52.847,10.437,53.033,10.606,53.213,10.786z M50.973,8.759
  		c-8.719,3.309-16.901,8.441-23.922,15.463c-2.117,2.117-4.065,4.34-5.845,6.65c-2.224-2.543-4.227-5.211-5.993-7.986
  		c4.333-5.684,6.633-12.416,6.904-19.217C31.742,0.319,42.732,2.015,50.973,8.759z M10.787,10.786
  		c2.755-2.756,5.915-4.854,9.285-6.312c-0.395,5.848-2.387,11.605-5.978,16.566c-1.728-2.922-3.208-5.945-4.448-9.047
  		C10.014,11.585,10.393,11.181,10.787,10.786z M8.193,13.755c1.291,3.084,2.818,6.086,4.582,8.988
  		c-0.625,0.75-1.285,1.482-1.988,2.186c-2.626,2.625-5.599,4.686-8.766,6.207C2.196,24.985,4.254,18.882,8.193,13.755z
  		 M2.031,33.339c3.688-1.645,7.145-3.971,10.17-6.996c0.588-0.588,1.142-1.199,1.678-1.818c1.809,2.777,3.848,5.447,6.104,7.992
  		c-4.463,6.176-7.752,12.934-9.889,19.967C5.03,47.075,2.34,40.253,2.031,33.339z M11.712,54.093
  		c2.021-7.07,5.231-13.871,9.654-20.074c0.479,0.506,0.945,1.021,1.441,1.516c2.351,2.352,4.832,4.488,7.419,6.422
  		c-3.73,5.818-5.498,12.527-5.329,19.193C20.114,59.989,15.563,57.634,11.712,54.093z M53.213,53.212
  		c-7.156,7.158-17.028,9.934-26.299,8.348c-0.253-6.389,1.382-12.836,4.933-18.424c6.625,4.654,13.896,7.979,21.445,9.994
  		C53.265,53.157,53.24,53.187,53.213,53.212z M32.979,41.481c0.974-1.336,2.057-2.619,3.263-3.826
  		c6.99-6.988,16.407-10.049,25.538-9.219c0.961,8.076-1.356,16.463-6.953,23.016C47.13,49.53,39.712,46.212,32.979,41.481z"/>
  	<g>
  		<path fill="#F76D57" d="M22.573,32.38c0.542,0.584,1.08,1.172,1.648,1.74c2.263,2.262,4.648,4.326,7.136,6.188
  			c1.034-1.42,2.188-2.783,3.471-4.066c7.302-7.301,17.097-10.568,26.646-9.84c-1.082-5.721-3.833-11.188-8.261-15.615
  			c-0.18-0.18-0.366-0.35-0.55-0.523c-8.829,3.189-17.121,8.295-24.198,15.373C26.321,27.778,24.358,30.034,22.573,32.38z"/>
  		<path fill="#F76D57" d="M21.206,30.872c1.779-2.311,3.728-4.533,5.845-6.65C34.071,17.2,42.254,12.067,50.973,8.759
  			c-8.24-6.744-19.23-8.439-28.855-5.09c-0.271,6.801-2.571,13.533-6.904,19.217C16.979,25.661,18.982,28.329,21.206,30.872z"/>
  		<path fill="#F76D57" d="M20.072,4.474c-3.37,1.459-6.53,3.557-9.285,6.312c-0.395,0.395-0.773,0.799-1.141,1.207
  			c1.24,3.102,2.721,6.125,4.448,9.047C17.686,16.079,19.678,10.321,20.072,4.474z"/>
  		<path fill="#F76D57" d="M12.775,22.743c-1.764-2.902-3.291-5.904-4.582-8.988c-3.939,5.127-5.997,11.23-6.172,17.381
  			c3.167-1.521,6.14-3.582,8.766-6.207C11.49,24.226,12.15,23.493,12.775,22.743z"/>
  		<path fill="#F76D57" d="M13.879,24.524c-0.536,0.619-1.09,1.23-1.678,1.818c-3.025,3.025-6.482,5.352-10.17,6.996
  			c0.309,6.914,2.999,13.736,8.062,19.145c2.137-7.033,5.426-13.791,9.889-19.967C17.727,29.972,15.688,27.302,13.879,24.524z"/>
  		<path fill="#F76D57" d="M22.808,35.534c-0.496-0.494-0.963-1.01-1.441-1.516c-4.423,6.203-7.633,13.004-9.654,20.074
  			c3.852,3.541,8.402,5.896,13.186,7.057c-0.169-6.666,1.599-13.375,5.329-19.193C27.64,40.022,25.158,37.886,22.808,35.534z"/>
  		<path fill="#F76D57" d="M26.914,61.56c9.271,1.586,19.143-1.189,26.299-8.348c0.027-0.025,0.052-0.055,0.079-0.082
  			c-7.549-2.016-14.82-5.34-21.445-9.994C28.296,48.724,26.661,55.171,26.914,61.56z"/>
  		<path fill="#F76D57" d="M61.78,28.437c-9.131-0.83-18.548,2.23-25.538,9.219c-1.206,1.207-2.289,2.49-3.263,3.826
  			c6.732,4.73,14.15,8.049,21.848,9.971C60.424,44.899,62.741,36.513,61.78,28.437z"/>
  	</g>
  	<path opacity="0.2" fill="#231F20" d="M26.914,61.56c9.271,1.586,19.143-1.189,26.299-8.348c0.027-0.025,0.052-0.055,0.079-0.082
  		c-7.549-2.016-14.82-5.34-21.445-9.994C28.296,48.724,26.661,55.171,26.914,61.56z"/>
  	<path opacity="0.2" fill="#231F20" d="M61.78,28.437c-9.131-0.83-18.548,2.23-25.538,9.219c-1.206,1.207-2.289,2.49-3.263,3.826
  		c6.732,4.73,14.15,8.049,21.848,9.971C60.424,44.899,62.741,36.513,61.78,28.437z"/>
  	<g opacity="0.2">
  		<path fill="#FFFFFF" d="M10.787,10.786c-0.395,0.395-0.773,0.799-1.141,1.207c1.24,3.102,2.721,6.125,4.448,9.047
  			c3.591-4.961,5.583-10.719,5.978-16.566C16.702,5.933,13.542,8.03,10.787,10.786z"/>
  		<path fill="#FFFFFF" d="M2.021,31.136c3.167-1.521,6.14-3.582,8.766-6.207c0.703-0.703,1.363-1.436,1.988-2.186
  			c-1.764-2.902-3.291-5.904-4.582-8.988C4.254,18.882,2.196,24.985,2.021,31.136z"/>
  	</g>
  </g>
  </svg>
    </div>
    </div>
  <div class=" flex items-center justify-end h-44 mt-5 bg-zinc-50/15 overflow-hidden">
  <div class="block test w-32 h-32 rounded-full bg-orange-400"></div>
  </div>
  
  <div class="flex items-center justify-around h-44 mt-5  overflow-hidden">
    
    <canvas class=" overflow-visible bg-zinc-50/15 border-2" width="320px" height="320px" id="canvas" ></canvas>
    
    
  </div>
  <div class=" flex items-center justify-around h-44 mt-5 bg-zinc-50/15 overflow-hidden">
    <div class="block red-left w-32 h-32 rounded-2xl ring-2 ring-red-950 bg-rose-600"></div>
    <div class="block violet-right w-32 h-32 rounded-2xl ring-2 ring-violet-950 bg-violet-700"></div>
    </div>
  
    <div class=" flex items-center justify-around h-44 mt-5 bg-zinc-50/15 overflow-hidden">
    <div class="block red-linear w-32 h-32 rounded-2xl ">
  <!-- Created with Inkscape (http://www.inkscape.org/) -->
  <svg
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:cc="http://creativecommons.org/ns#"
     xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:svg="http://www.w3.org/2000/svg"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
     xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    
     viewBox="0 0 651.06208 651.06202"
     id="svg3715"
     version="1.1"
     inkscape:version="0.91 r13725"
     sodipodi:docname="corner-curves-swirl.svg"
     inkscape:export-filename="/home/algot/Documents/runeman.org/clipart/corner-curves-swirl.png"
     inkscape:export-xdpi="82.941399"
     inkscape:export-ydpi="82.941399">
    <title
       id="title3885">CornerCurves Cage Swirl</title>
    <defs
       id="defs3717">
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3360"
         is_visible="true"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         fuse_tolerance="0"
         vertical_pattern="false"
         prop_units="false"
         tang_offset="0"
         normal_offset="0"
         spacing="0"
         scale_y_rel="false"
         prop_scale="1"
         copytype="single_stretched"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         is_visible="true"
         id="path-effect3369"
         effect="skeletal" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3504"
         is_visible="true"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         fuse_tolerance="0"
         vertical_pattern="false"
         prop_units="false"
         tang_offset="0"
         normal_offset="0"
         spacing="0"
         scale_y_rel="false"
         prop_scale="1"
         copytype="single_stretched"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         is_visible="true"
         id="path-effect3536"
         effect="skeletal" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3540"
         is_visible="true"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         fuse_tolerance="0"
         vertical_pattern="false"
         prop_units="false"
         tang_offset="0"
         normal_offset="0"
         spacing="0"
         scale_y_rel="false"
         prop_scale="1"
         copytype="single_stretched"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         is_visible="true"
         id="path-effect3544"
         effect="skeletal" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3548"
         is_visible="true"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         fuse_tolerance="0"
         vertical_pattern="false"
         prop_units="false"
         tang_offset="0"
         normal_offset="0"
         spacing="0"
         scale_y_rel="false"
         prop_scale="1"
         copytype="single_stretched"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         is_visible="true"
         id="path-effect3552"
         effect="skeletal" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3556"
         is_visible="true"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         fuse_tolerance="0"
         vertical_pattern="false"
         prop_units="false"
         tang_offset="0"
         normal_offset="0"
         spacing="0"
         scale_y_rel="false"
         prop_scale="1"
         copytype="single_stretched"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         is_visible="true"
         id="path-effect3560"
         effect="skeletal" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3564"
         is_visible="true"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         fuse_tolerance="0"
         vertical_pattern="false"
         prop_units="false"
         tang_offset="0"
         normal_offset="0"
         spacing="0"
         scale_y_rel="false"
         prop_scale="1"
         copytype="single_stretched"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         is_visible="true"
         id="path-effect3568"
         effect="skeletal" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3572"
         is_visible="true"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         fuse_tolerance="0"
         vertical_pattern="false"
         prop_units="false"
         tang_offset="0"
         normal_offset="0"
         spacing="0"
         scale_y_rel="false"
         prop_scale="1"
         copytype="single_stretched"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         is_visible="true"
         id="path-effect3576"
         effect="skeletal" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3580"
         is_visible="true"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         fuse_tolerance="0"
         vertical_pattern="false"
         prop_units="false"
         tang_offset="0"
         normal_offset="0"
         spacing="0"
         scale_y_rel="false"
         prop_scale="1"
         copytype="single_stretched"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         is_visible="true"
         id="path-effect3584"
         effect="skeletal" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3588"
         is_visible="true"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         fuse_tolerance="0"
         vertical_pattern="false"
         prop_units="false"
         tang_offset="0"
         normal_offset="0"
         spacing="0"
         scale_y_rel="false"
         prop_scale="1"
         copytype="single_stretched"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         is_visible="true"
         id="path-effect3592"
         effect="skeletal" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3596"
         is_visible="true"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         fuse_tolerance="0"
         vertical_pattern="false"
         prop_units="false"
         tang_offset="0"
         normal_offset="0"
         spacing="0"
         scale_y_rel="false"
         prop_scale="1"
         copytype="single_stretched"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         is_visible="true"
         id="path-effect3600"
         effect="skeletal" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3604"
         is_visible="true"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         fuse_tolerance="0"
         vertical_pattern="false"
         prop_units="false"
         tang_offset="0"
         normal_offset="0"
         spacing="0"
         scale_y_rel="false"
         prop_scale="1"
         copytype="single_stretched"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         is_visible="true"
         id="path-effect3608"
         effect="skeletal" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3612"
         is_visible="true"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         fuse_tolerance="0"
         vertical_pattern="false"
         prop_units="false"
         tang_offset="0"
         normal_offset="0"
         spacing="0"
         scale_y_rel="false"
         prop_scale="1"
         copytype="single_stretched"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         is_visible="true"
         id="path-effect3616"
         effect="skeletal" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3620"
         is_visible="true"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         fuse_tolerance="0"
         vertical_pattern="false"
         prop_units="false"
         tang_offset="0"
         normal_offset="0"
         spacing="0"
         scale_y_rel="false"
         prop_scale="1"
         copytype="single_stretched"
         pattern="M 0.70710678,71.064233 71.417787,0.35355339 c 0,0 -41.96847,43.22712961 -42.4264,70.71067961 -0.4043,24.26365 35.35533,63.639607 35.35533,63.639607 z"
         is_visible="true"
         id="path-effect3624"
         effect="skeletal" />
    </defs>
    <sodipodi:namedview
       id="base"
       pagecolor="#ffffff"
       bordercolor="#666666"
       borderopacity="1.0"
       inkscape:pageopacity="0.0"
       inkscape:pageshadow="2"
       inkscape:zoom="0.98994949"
       inkscape:cx="191.09727"
       inkscape:cy="315.74725"
       inkscape:document-units="px"
       inkscape:current-layer="layer1"
       showgrid="false"
       fit-margin-top="0"
       fit-margin-left="0"
       fit-margin-right="0"
       fit-margin-bottom="0"
       inkscape:window-width="1366"
       inkscape:window-height="712"
       inkscape:window-x="0"
       inkscape:window-y="0"
       inkscape:window-maximized="1" />
    <metadata
       id="metadata3720">
      <rdf:RDF>
        <cc:Work
           rdf:about="">
          <dc:format>image/svg+xml</dc:format>
          <dc:type
             rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
          <dc:title>CornerCurves Cage Swirl</dc:title>
          <dc:creator>
            <cc:Agent>
              <dc:title>Algot Runeman</dc:title>
            </cc:Agent>
          </dc:creator>
          <dc:rights>
            <cc:Agent>
              <dc:title>Algot Runeman</dc:title>
            </cc:Agent>
          </dc:rights>
          <dc:publisher>
            <cc:Agent>
              <dc:title>runeman.org</dc:title>
            </cc:Agent>
          </dc:publisher>
          <dc:date>2016-01-29</dc:date>
          <dc:identifier>corner-curves-swirl.svg</dc:identifier>
          <cc:license
             rdf:resource="http://creativecommons.org/publicdomain/zero/1.0/" />
        </cc:Work>
        <cc:License
           rdf:about="http://creativecommons.org/publicdomain/zero/1.0/">
          <cc:permits
             rdf:resource="http://creativecommons.org/ns#Reproduction" />
          <cc:permits
             rdf:resource="http://creativecommons.org/ns#Distribution" />
          <cc:permits
             rdf:resource="http://creativecommons.org/ns#DerivativeWorks" />
        </cc:License>
      </rdf:RDF>
    </metadata>
    <g
       inkscape:label="Layer 1"
       inkscape:groupmode="layer"
       id="layer1"
       transform="translate(814.10248,-35.402625)">
      <g
         id="g3859"
         style="fill:#000080;stroke:#000080"
         inkscape:export-xdpi="82.941399"
         inkscape:export-ydpi="82.941399">
        <path
           inkscape:transform-center-y="-163.00008"
           inkscape:transform-center-x="30.000289"
           transform="matrix(-1,0,0,1,-580.97734,-356.85283)"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           id="path3367"
           inkscape:path-effect="#path-effect3369"
           sodipodi:type="arc"
           sodipodi:cx="-80"
           sodipodi:cy="572.36218"
           sodipodi:rx="130"
           sodipodi:ry="130"
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z" />
        <path
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z"
           sodipodi:ry="130"
           sodipodi:rx="130"
           sodipodi:cy="572.36218"
           sodipodi:cx="-80"
           sodipodi:type="arc"
           inkscape:path-effect="#path-effect3504"
           id="path3502"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           transform="matrix(-0.96592583,0.25881905,0.25881905,0.96592583,-763.60549,-308.47843)"
           inkscape:transform-center-x="67.059196"
           inkscape:transform-center-y="-154.69084" />
        <path
           inkscape:transform-center-y="-137.20989"
           inkscape:transform-center-x="100.94248"
           transform="matrix(-0.86602541,0.50000001,0.50000001,0.86602541,-927.49052,-214.48471)"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           id="path3534"
           inkscape:path-effect="#path-effect3536"
           sodipodi:type="arc"
           sodipodi:cx="-80"
           sodipodi:cy="572.36218"
           sodipodi:rx="130"
           sodipodi:ry="130"
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z" />
        <path
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z"
           sodipodi:ry="130"
           sodipodi:rx="130"
           sodipodi:cy="572.36218"
           sodipodi:cx="-80"
           sodipodi:type="arc"
           inkscape:path-effect="#path-effect3540"
           id="path3538"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           transform="matrix(-0.70710678,0.70710679,0.70710679,0.70710678,-1061.4639,-81.27718)"
           inkscape:transform-center-x="129.18283"
           inkscape:transform-center-y="-108.82584" />
        <path
           inkscape:transform-center-y="-59.662506"
           inkscape:transform-center-x="149.67571"
           transform="matrix(-0.5,0.86602541,0.86602541,0.5,-1156.3957,82.06629)"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           id="path3542"
           inkscape:path-effect="#path-effect3544"
           sodipodi:type="arc"
           sodipodi:cx="-80"
           sodipodi:cy="572.36218"
           sodipodi:rx="130"
           sodipodi:ry="130"
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z" />
        <path
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z"
           sodipodi:ry="130"
           sodipodi:rx="130"
           sodipodi:cy="572.36218"
           sodipodi:cx="-80"
           sodipodi:type="arc"
           inkscape:path-effect="#path-effect3548"
           id="path3546"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           transform="matrix(-0.25881904,0.96592583,0.96592583,0.25881904,-1205.8163,264.41411)"
           inkscape:transform-center-x="161.1051"
           inkscape:transform-center-y="-12.38919" />
        <path
           inkscape:transform-center-y="30.00027"
           inkscape:transform-center-x="163.00008"
           transform="matrix(0,1,1,0,-1206.3579,453.33957)"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           id="path3550"
           inkscape:path-effect="#path-effect3552"
           sodipodi:type="arc"
           sodipodi:cx="-80"
           sodipodi:cy="572.36218"
           sodipodi:rx="130"
           sodipodi:ry="130"
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z" />
        <path
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z"
           sodipodi:ry="130"
           sodipodi:rx="130"
           sodipodi:cy="572.36218"
           sodipodi:cx="-80"
           sodipodi:type="arc"
           inkscape:path-effect="#path-effect3556"
           id="path3554"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           transform="matrix(0.25881905,0.96592583,0.96592583,-0.25881905,-1157.9835,635.96772)"
           inkscape:transform-center-x="154.69085"
           inkscape:transform-center-y="67.059177" />
        <path
           inkscape:transform-center-y="100.94248"
           inkscape:transform-center-x="137.2099"
           transform="matrix(0.50000001,0.86602541,0.86602541,-0.50000001,-1063.9898,799.85277)"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           id="path3558"
           inkscape:path-effect="#path-effect3560"
           sodipodi:type="arc"
           sodipodi:cx="-80"
           sodipodi:cy="572.36218"
           sodipodi:rx="130"
           sodipodi:ry="130"
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z" />
        <path
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z"
           sodipodi:ry="130"
           sodipodi:rx="130"
           sodipodi:cy="572.36218"
           sodipodi:cx="-80"
           sodipodi:type="arc"
           inkscape:path-effect="#path-effect3564"
           id="path3562"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           transform="matrix(0.70710679,0.70710678,0.70710678,-0.70710679,-930.78223,933.82617)"
           inkscape:transform-center-x="108.82585"
           inkscape:transform-center-y="129.18281" />
        <path
           inkscape:transform-center-y="149.67565"
           inkscape:transform-center-x="59.662526"
           transform="matrix(0.86602541,0.5,0.5,-0.86602541,-767.43877,1028.7579)"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           id="path3566"
           inkscape:path-effect="#path-effect3568"
           sodipodi:type="arc"
           sodipodi:cx="-80"
           sodipodi:cy="572.36218"
           sodipodi:rx="130"
           sodipodi:ry="130"
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z" />
        <path
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z"
           sodipodi:ry="130"
           sodipodi:rx="130"
           sodipodi:cy="572.36218"
           sodipodi:cx="-80"
           sodipodi:type="arc"
           inkscape:path-effect="#path-effect3572"
           id="path3570"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           transform="matrix(0.96592583,0.25881904,0.25881904,-0.96592583,-585.09097,1078.1785)"
           inkscape:transform-center-x="12.38923"
           inkscape:transform-center-y="161.10502" />
        <path
           inkscape:transform-center-y="163.00003"
           inkscape:transform-center-x="-30.000214"
           transform="matrix(1,0,0,-1,-396.16553,1078.7201)"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           id="path3574"
           inkscape:path-effect="#path-effect3576"
           sodipodi:type="arc"
           sodipodi:cx="-80"
           sodipodi:cy="572.36218"
           sodipodi:rx="130"
           sodipodi:ry="130"
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z" />
        <path
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z"
           sodipodi:ry="130"
           sodipodi:rx="130"
           sodipodi:cy="572.36218"
           sodipodi:cx="-80"
           sodipodi:type="arc"
           inkscape:path-effect="#path-effect3580"
           id="path3578"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           transform="matrix(0.96592583,-0.25881905,-0.25881905,-0.96592583,-213.53738,1030.3457)"
           inkscape:transform-center-x="-67.059117"
           inkscape:transform-center-y="154.69079" />
        <path
           inkscape:transform-center-y="137.20986"
           inkscape:transform-center-x="-100.94239"
           transform="matrix(0.86602541,-0.50000001,-0.50000001,-0.86602541,-49.65236,936.35197)"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           id="path3582"
           inkscape:path-effect="#path-effect3584"
           sodipodi:type="arc"
           sodipodi:cx="-80"
           sodipodi:cy="572.36218"
           sodipodi:rx="130"
           sodipodi:ry="130"
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z" />
        <path
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z"
           sodipodi:ry="130"
           sodipodi:rx="130"
           sodipodi:cy="572.36218"
           sodipodi:cx="-80"
           sodipodi:type="arc"
           inkscape:path-effect="#path-effect3588"
           id="path3586"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           transform="matrix(0.70710678,-0.70710679,-0.70710679,-0.70710678,84.32106,803.14447)"
           inkscape:transform-center-x="-129.18274"
           inkscape:transform-center-y="108.82584" />
        <path
           inkscape:transform-center-y="59.662526"
           inkscape:transform-center-x="-149.67563"
           transform="matrix(0.5,-0.86602541,-0.86602541,-0.5,179.25281,639.80102)"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           id="path3590"
           inkscape:path-effect="#path-effect3592"
           sodipodi:type="arc"
           sodipodi:cx="-80"
           sodipodi:cy="572.36218"
           sodipodi:rx="130"
           sodipodi:ry="130"
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z" />
        <path
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z"
           sodipodi:ry="130"
           sodipodi:rx="130"
           sodipodi:cy="572.36218"
           sodipodi:cx="-80"
           sodipodi:type="arc"
           inkscape:path-effect="#path-effect3596"
           id="path3594"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           transform="matrix(0.25881904,-0.96592583,-0.96592583,-0.25881904,228.67344,457.45322)"
           inkscape:transform-center-x="-161.10503"
           inkscape:transform-center-y="12.38923" />
        <path
           inkscape:transform-center-y="-30.00022"
           inkscape:transform-center-x="-163.00002"
           transform="matrix(0,-1,-1,0,229.21502,268.52777)"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           id="path3598"
           inkscape:path-effect="#path-effect3600"
           sodipodi:type="arc"
           sodipodi:cx="-80"
           sodipodi:cy="572.36218"
           sodipodi:rx="130"
           sodipodi:ry="130"
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z" />
        <path
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z"
           sodipodi:ry="130"
           sodipodi:rx="130"
           sodipodi:cy="572.36218"
           sodipodi:cx="-80"
           sodipodi:type="arc"
           inkscape:path-effect="#path-effect3604"
           id="path3602"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           transform="matrix(-0.25881905,-0.96592583,-0.96592583,0.25881905,180.84064,85.89963)"
           inkscape:transform-center-x="-154.6908"
           inkscape:transform-center-y="-67.059117" />
        <path
           inkscape:transform-center-y="-100.9424"
           inkscape:transform-center-x="-137.20987"
           transform="matrix(-0.50000001,-0.86602541,-0.86602541,0.50000001,86.84694,-77.9854)"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           id="path3606"
           inkscape:path-effect="#path-effect3608"
           sodipodi:type="arc"
           sodipodi:cx="-80"
           sodipodi:cy="572.36218"
           sodipodi:rx="130"
           sodipodi:ry="130"
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z" />
        <path
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z"
           sodipodi:ry="130"
           sodipodi:rx="130"
           sodipodi:cy="572.36218"
           sodipodi:cx="-80"
           sodipodi:type="arc"
           inkscape:path-effect="#path-effect3612"
           id="path3610"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           transform="matrix(-0.70710679,-0.70710678,-0.70710678,0.70710679,-46.36057,-211.95882)"
           inkscape:transform-center-x="-108.82584"
           inkscape:transform-center-y="-129.18275" />
        <path
           inkscape:transform-center-y="-149.67564"
           inkscape:transform-center-x="-59.662526"
           transform="matrix(-0.86602541,-0.5,-0.5,0.86602541,-209.70402,-306.89057)"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           id="path3614"
           inkscape:path-effect="#path-effect3616"
           sodipodi:type="arc"
           sodipodi:cx="-80"
           sodipodi:cy="572.36218"
           sodipodi:rx="130"
           sodipodi:ry="130"
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z" />
        <path
           d="M 46.464464,572.36218 C 52.569484,638.28546 -3.3539245,709.76191 -80,716.50432 c -76.64608,5.0427 -154.01507,-56.77327 -161.8198,-144.14214 -3.98039,-87.36885 63.72811,-170.63039 161.819741,-179.49747 3.3e-5,4e-5 5.9e-5,0 5.9e-5,0 98.091666,-2.91807 187.24578,70.68301 197.17514,179.49747 0,0 -0.46993,-9.82327 -4.0964,-26.09158 C 109.4454,529.97144 102.40886,507.77073 87.946061,484.6203 73.473477,461.45421 52.161838,438.44158 22.922976,421.26981 -6.1447281,404.19857 -41.65481,393.89225 -80,395.80136 c -51.56028,5.56291 -93.08968,32.25979 -119.31324,67.64774 -26.39759,35.62278 -34.57754,75.71283 -30.28372,108.91308 4.43246,27.91417 16.68967,47.62418 26.69038,58.90524 10.26249,11.57636 18.91889,15.60746 21.87986,14.15023 3.38391,-1.66534 1.09331,-10.05335 -1.38581,-23.20582 -2.43415,-12.91391 -5.08506,-31.30739 -0.35537,-49.84965 4.34636,-22.68639 18.68585,-44.20703 40.23233,-59.68594 21.26766,-15.2786 45.207439,-21.36583 62.535571,-15.98248 17.698087,2.20686 31.855793,15.2623 39.470953,24.36294 8.025073,9.59052 10.851959,16.22576 10.851959,16.22576 C -39.998748,518.27119 -59.747066,500.42661 -80,498.93073 c -33.7549,-9.29198 -87.55367,28.95376 -91.10913,73.43145 -8.22965,44.47769 35.90863,104.169 91.1091,108.78679 7e-6,-2e-5 3e-5,1e-5 3e-5,1e-5 55.200486,7.16734 120.784371,-42.86352 126.464464,-108.7868 z"
           sodipodi:ry="130"
           sodipodi:rx="130"
           sodipodi:cy="572.36218"
           sodipodi:cx="-80"
           sodipodi:type="arc"
           inkscape:path-effect="#path-effect3620"
           id="path3618"
           style="opacity:1;fill:#000080;fill-opacity:1;stroke:#000080;stroke-width:1;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
           transform="matrix(-0.96592583,-0.25881904,-0.25881904,0.96592583,-392.05182,-356.3112)"
           inkscape:transform-center-x="-12.389231"
           inkscape:transform-center-y="-161.10504" />
      </g>
    </g>
  </svg>
  
    </div>
    <div class="block violet-bounce w-32 h-32 rounded-2xl ">
  <!-- Created with Inkscape (http://www.inkscape.org/) -->
  
  <svg
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:cc="http://creativecommons.org/ns#"
     xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:svg="http://www.w3.org/2000/svg"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
     xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
     viewBox="0 0 1199.9328 1199.9997"
     id="svg2"
     version="1.1"
     inkscape:version="0.91 r13725"
     sodipodi:docname="corner-curves-path04.svg"
     inkscape:export-filename="/home/algot/Documents/runeman.org/clipart/corner-curves-path04.png"
     inkscape:export-xdpi="55.101543"
     inkscape:export-ydpi="55.101543">
    <title
       id="title3830">Corner Curves Path 04</title>
    <defs
       id="defs4">
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3850"
         is_visible="true"
         pattern="m 93.90174,93.909084 0,-93.90174952 -93.90174,0 c 0,0 61.7546,-0.84656 78.25145,15.65028952 16.49685,16.49685 15.65029,78.25146 15.65029,78.25146 z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3479"
         is_visible="true"
         pattern="m 240.01875,0.01874627 -240.00000388,0 0,239.99999373 c 0,0 -2.16370002,-157.836299 39.99999988,-199.999999 C 82.182446,-2.1449597 240.01875,0.01874627 240.01875,0.01874627 Z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3384"
         is_visible="true"
         pattern="m 240.01875,0.01874627 -240.00000388,0 0,239.99999373 c 0,0 -2.16370002,-157.836299 39.99999988,-199.999999 C 82.182446,-2.1449597 240.01875,0.01874627 240.01875,0.01874627 Z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         fuse_tolerance="0"
         vertical_pattern="false"
         prop_units="false"
         tang_offset="0"
         normal_offset="0"
         spacing="0"
         scale_y_rel="false"
         prop_scale="1"
         copytype="single_stretched"
         pattern="m 240.01875,0.01874627 -240.00000388,0 0,239.99999373 c 0,0 -2.16370002,-157.836299 39.99999988,-199.999999 C 82.182446,-2.1449597 240.01875,0.01874627 240.01875,0.01874627 Z"
         is_visible="true"
         id="path-effect3380"
         effect="skeletal" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3376"
         is_visible="true"
         pattern="m 239.85216,0.20501769 -240.00001044,0 0,239.99999231 c 0,0 -2.16369996,-157.836295 40.00000044,-199.999995 C 82.01585,-1.9586883 239.85216,0.20501769 239.85216,0.20501769 Z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
      <inkscape:path-effect
         fuse_tolerance="0"
         vertical_pattern="false"
         prop_units="false"
         tang_offset="0"
         normal_offset="0"
         spacing="0"
         scale_y_rel="false"
         prop_scale="1"
         copytype="single_stretched"
         pattern="m 240.01875,0.01874627 -240.00000388,0 0,239.99999373 c 0,0 -2.16370002,-157.836299 39.99999988,-199.999999 C 82.182446,-2.1449597 240.01875,0.01874627 240.01875,0.01874627 Z"
         is_visible="true"
         id="path-effect3364"
         effect="skeletal" />
      <inkscape:path-effect
         effect="skeletal"
         id="path-effect3355"
         is_visible="true"
         pattern="m 240.01875,0.01874627 -240.00000388,0 0,239.99999373 c 0,0 -2.16370002,-157.836299 39.99999988,-199.999999 C 82.182446,-2.1449597 240.01875,0.01874627 240.01875,0.01874627 Z"
         copytype="single_stretched"
         prop_scale="1"
         scale_y_rel="false"
         spacing="0"
         normal_offset="0"
         tang_offset="0"
         prop_units="false"
         vertical_pattern="false"
         fuse_tolerance="0" />
    </defs>
    <sodipodi:namedview
       id="base"
       pagecolor="#ffffff"
       bordercolor="#666666"
       borderopacity="1.0"
       inkscape:pageopacity="0.0"
       inkscape:pageshadow="2"
       inkscape:zoom="0.35"
       inkscape:cx="528.81925"
       inkscape:cy="719.37423"
       inkscape:document-units="px"
       inkscape:current-layer="layer1"
       showgrid="false"
       fit-margin-top="0"
       fit-margin-left="0"
       fit-margin-right="0"
       fit-margin-bottom="0"
       inkscape:window-width="1366"
       inkscape:window-height="712"
       inkscape:window-x="0"
       inkscape:window-y="0"
       inkscape:window-maximized="1">
      <inkscape:grid
         type="xygrid"
         id="grid3336"
         originx="679.53351"
         originy="199.37422" />
    </sodipodi:namedview>
    <metadata
       id="metadata7">
      <rdf:RDF>
        <cc:Work
           rdf:about="">
          <dc:format>image/svg+xml</dc:format>
          <dc:type
             rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
          <dc:title>Corner Curves Path 04</dc:title>
          <dc:creator>
            <cc:Agent>
              <dc:title>Algot Runeman</dc:title>
            </cc:Agent>
          </dc:creator>
          <dc:rights>
            <cc:Agent>
              <dc:title>Algot Runeman</dc:title>
            </cc:Agent>
          </dc:rights>
          <dc:publisher>
            <cc:Agent>
              <dc:title>runeman.org</dc:title>
            </cc:Agent>
          </dc:publisher>
          <dc:date>2016-01-29</dc:date>
          <dc:identifier>corner-curves-path04.svg</dc:identifier>
          <cc:license
             rdf:resource="http://creativecommons.org/publicdomain/zero/1.0/" />
        </cc:Work>
        <cc:License
           rdf:about="http://creativecommons.org/publicdomain/zero/1.0/">
          <cc:permits
             rdf:resource="http://creativecommons.org/ns#Reproduction" />
          <cc:permits
             rdf:resource="http://creativecommons.org/ns#Distribution" />
          <cc:permits
             rdf:resource="http://creativecommons.org/ns#DerivativeWorks" />
        </cc:License>
      </rdf:RDF>
    </metadata>
    <g
       inkscape:label="Layer 1"
       inkscape:groupmode="layer"
       id="layer1"
       transform="translate(679.53354,-51.736666)">
      <g
         id="g3790">
        <g
           id="g3399">
          <g
             id="g3386"
             style="fill:#ff0000">
            <path
               inkscape:original-d="m -495.69227,892.11145 c 63.68506,110.30575 168.58082,190.79485 291.61091,223.76065 123.030094,32.9659 254.117026,15.7081 364.42279,-47.9769 C 270.64719,1004.2101 351.13799,899.31337 384.10381,776.28327 417.06958,653.2532 399.81017,522.16723 336.12511,411.86147 272.44005,301.55571 167.54597,221.06563 44.515918,188.09979 -78.514177,155.13398 -209.60281,172.39269 -319.90857,236.07775 c -110.30576,63.68507 -190.79487,168.58082 -223.76068,291.61091 -32.96581,123.03009 -15.70808,254.11703 47.97698,364.42279 z m 0.43302,-0.25 c -63.61886,-110.19108 -80.85863,-241.14121 -47.9271,-364.0434 32.93155,-122.90218 113.3367,-227.68843 223.52778,-291.30728 110.19109,-63.61886 241.141217,-80.85863 364.043397,-47.92709 122.902153,32.93157 227.688413,113.3367 291.307273,223.52779 63.61885,110.19109 80.85861,241.14122 47.92711,364.04339 -32.93154,122.90218 -113.33669,227.68844 -223.52778,291.30724 -110.191085,63.6189 -241.141208,80.8587 -364.0434,47.9271 -122.90218,-32.9315 -227.68843,-113.3367 -291.30728,-223.52775 z"
               inkscape:path-effect="#path-effect3355"
               inkscape:connector-curvature="0"
               id="path3351"
               d="m -391.76922,832.11145 c -23.50671,-40.65081 -39.0847,-86.54229 -45.18222,-133.10282 -6.16095,-46.55221 -2.99126,-94.91191 9.19329,-140.26169 l 2e-5,-5e-5 c 12.12275,-45.36631 33.55757,-88.83186 62.16919,-126.06677 l 9e-5,-7e-5 c 28.56085,-37.27383 64.9975,-69.22799 105.68028,-92.67926 40.65108,-23.50688 86.54297,-39.08499 133.10403,-45.18275 46.552646,-6.16108 94.912533,-2.99172 140.262105,9.19283 l 5.4e-5,10e-6 c 45.365724,12.12257 88.830781,33.5575 126.065281,62.1692 37.27358,28.56102 69.22754,64.99812 92.67916,105.68139 23.50693,40.65133 39.0854,86.54282 45.18318,133.1032 6.16122,46.55187 2.99188,94.91118 -9.19253,140.26033 -12.12264,45.36614 -33.55783,88.8317 -62.16978,126.06694 l -7e-5,9e-5 c -28.56134,37.27419 -64.99832,69.22867 -105.68142,92.68012 -40.650803,23.50667 -86.542239,39.08465 -133.10272,45.18215 l -1.11e-4,0 c -46.552174,6.161 -94.911829,2.9913 -140.261539,-9.19326 l -1.1e-4,-3e-5 c -45.36635,-12.12275 -88.83194,-33.55758 -126.06687,-62.16921 -37.22727,-28.52518 -69.14816,-64.9065 -92.59136,-105.52786 L -599.46749,952.3671 c 0,0 4.05782,-3.62626 12.92259,-6.23486 9.08022,-2.672 22.2729,-4.11675 41.41596,-1.31343 19.65797,2.87873 42.41721,9.62093 73.89783,21.54511 18.30002,6.93166 80.90858,32.59619 115.71636,44.96228 43.99528,15.6411 102.90213,33.4588 168.66305,40.244 32.71937,3.3972 69.00644,4.2915 107.263229,0.6453 15.877249,-1.5132 33.204168,-3.9163 51.476538,-7.7448 43.361539,-9.046 93.44032,-26.452 141.712523,-57.53302 39.35365,-25.28381 77.68647,-59.88104 108.56037,-103.2624 27.56974,-38.65127 49.35595,-84.59315 61.19829,-134.38645 11.0961,-46.42162 13.61758,-96.63399 5.97957,-145.89795 -7.27498,-47.29269 -24.00328,-94.23753 -49.23025,-136.09424 -24.69938,-41.09505 -57.88476,-77.80605 -96.47269,-106.47663 -38.55601,-28.72243 -83.020777,-49.79947 -128.927922,-61.47545 -46.789274,-11.9647 -95.718148,-14.35338 -141.940898,-7.78047 -48.18351,6.78732 -94.10676,23.35408 -133.70547,46.65292 -42.51799,24.94029 -78.37924,57.90586 -105.54694,93.77527 -30.55249,40.22582 -50.65804,84.57702 -61.72854,126.63255 0,0 -1e-5,9e-5 -1e-5,9e-5 -13.69062,51.72421 -14.1395,100.72853 -8.81774,140.39426 5.76792,43.43965 18.61106,78.00492 28.27494,99.71228 9.89366,22.22347 16.98748,33.37999 16.98748,33.37999 z m -207.41307,119.75001 c 39.38064,68.14524 91.87196,128.00014 154.29411,175.93864 62.46109,47.8877 133.86221,83.0988 209.87792,103.5002 l 9e-5,0 c 76.03222,20.3397 155.472909,25.5466 233.5096526,15.3052 78.0284244,-10.3049 153.4146774,-35.8951 221.5919474,-75.2204 68.14531,-39.3806 128.00019,-91.8719 175.93865,-154.294 47.8877,-62.46112 83.09875,-133.86222 103.50021,-209.87788 l 2e-5,-9e-5 C 519.86996,731.18089 525.07684,651.74019 514.83542,573.70343 504.53056,495.67502 478.94039,420.28876 439.61515,352.11147 400.2345,283.96617 347.74317,224.11129 285.32102,176.17282 222.85991,128.28511 151.4588,93.074053 75.443128,72.672588 -0.58906043,52.332928 -80.02971,47.12603 -158.06642,57.367412 l -1.9e-4,2.4e-5 c -78.02841,10.304861 -153.41467,35.895044 -221.59196,75.220294 -68.14525,39.3806 -128.00008,91.87187 -175.93853,154.29396 l -1.2e-4,1.5e-4 c -47.88767,62.46106 -83.09872,133.86212 -103.50018,209.87774 l -5e-5,1.9e-4 c -20.33966,76.03224 -25.54655,155.47296 -15.30513,233.50973 10.29198,77.9309 35.83111,153.22625 75.07293,221.33633 l 207.90548,-119.8966 c 0,0 -4.26127,3.29997 -12.73235,6.55943 -8.27939,3.1857 -21.3827,6.56741 -38.37988,5.17485 -16.81814,-1.3779 -39.27936,-7.65253 -64.05026,-25.62896 -24.20248,-17.56392 -53.7784,-48.9835 -75.9209,-99.6432 -20.99983,-48.07193 -37.46983,-119.85367 -24.98071,-207.58295 6.14804,-43.03605 19.44747,-90.41665 43.06958,-138.63729 9.77921,-19.96265 21.97479,-41.37927 37.08158,-63.38455 35.88786,-52.20812 88.42683,-107.94176 160.93768,-153.01333 59.20797,-36.74838 130.52092,-65.493815 210.98793,-78.018151 C -83.576698,66.40572 -6.1969318,68.55202 71.379305,87.839152 143.76028,105.89039 214.4976,138.46493 277.98133,185.73807 c 60.92469,45.43828 113.62249,103.31259 153.72731,170.93823 39.30432,66.39118 65.486,140.50369 76.42833,217.90899 10.88392,77.42557 6.25507,156.16548 -13.27298,231.3775 -19.96687,76.65427 -54.86833,147.64554 -101.43771,209.13031 -48.5683,64.0181 -108.44948,116.0154 -174.36469,154.5083 -70.7051,41.2141 -146.30349,65.8032 -220.7095888,75.8838 -83.4425632,11.2364 -162.8618712,4.0188 -233.2401512,-14.6406 0,0 -1.4e-4,-10e-5 -1.4e-4,-10e-5 -86.3944,-22.9806 -156.5884,-62.2872 -209.95065,-103.1086 -58.24735,-44.6335 -97.00693,-91.3651 -120.3095,-123.449 -23.7799,-32.74111 -34.03385,-52.42544 -34.03385,-52.42544 z"
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
            <path
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
               d="m 232.20207,832.11145 c -23.45128,40.6828 -55.40548,77.11948 -92.67932,105.68035 -37.23492,28.61163 -80.700491,50.04645 -126.066819,62.1692 l -1.12e-4,10e-6 c -45.349753,12.18459 -93.709426,15.35419 -140.261609,9.19329 -46.56053,-6.0975 -92.452,-21.67547 -133.10281,-45.18215 -40.6831,-23.45144 -77.12008,-55.40593 -105.68142,-92.68012 -28.61199,-37.23526 -50.0472,-80.70085 -62.16985,-126.06703 -12.18441,-45.34915 -15.35374,-93.70846 -9.19253,-140.26033 6.09778,-46.56038 21.67626,-92.45187 45.18319,-133.10321 23.45162,-40.68326 55.40558,-77.12036 92.67916,-105.68138 37.23449,-28.6117 80.69955,-50.04663 126.06527,-62.1692 45.34959,-12.18456 93.709504,-15.35392 140.262178,-9.19284 46.56106,6.09775 92.452951,21.67586 133.104042,45.18273 40.68278,23.45129 77.11943,55.40545 105.68028,92.67925 l 7e-5,9e-5 c 28.61161,37.2349 50.04641,80.70043 62.16914,126.06671 l 3e-5,1.1e-4 c 12.18455,45.34978 15.35425,93.7095 9.19331,140.26171 -6.0899,46.50235 -21.63659,92.33731 -45.09412,132.95039 l 207.90549,119.89658 c 0,0 -5.16935,-1.70105 -11.86084,-8.07387 -6.85413,-6.5277 -14.70166,-17.23052 -21.84544,-35.21056 -7.33594,-18.46366 -12.87664,-41.54484 -18.2903,-74.76995 C 385.05204,814.48712 375.9739,747.43425 369.27934,711.10679 360.82731,665.1852 346.80445,605.26153 319.80017,544.91829 306.38254,514.88388 289.01351,483.0112 266.7274,451.70296 257.47826,438.70948 246.73365,424.90548 234.28192,410.99538 204.76706,377.9662 164.65362,343.29971 113.6006,317.03525 72.027358,295.59589 22.898871,279.69731 -30.107438,274.65041 c -47.257862,-4.55046 -97.937802,-0.44694 -146.981232,14.19395 -45.75035,13.6013 -90.49628,36.52383 -129.34111,67.77051 -37.31918,29.94666 -69.61045,67.90621 -93.24594,110.68176 -23.23968,41.93782 -38.43965,89.03271 -43.97513,136.78613 -5.59635,47.75169 -1.61722,96.79783 11.22466,142.39258 13.0329,46.50305 35.42868,90.07104 64.23237,126.81466 29.96974,38.3345 67.2786,69.82183 107.25534,92.46591 42.85791,24.35149 89.33755,38.92539 133.98521,44.51859 50.112842,6.3464 98.574897,1.5827 140.531316,-9.8578 0,0 8.3e-5,0 8.3e-5,0 51.639788,-14.00567 94.303211,-38.11909 125.993861,-62.56073 34.73587,-26.71498 58.24871,-55.1201 72.21589,-74.34295 14.29926,-19.67988 20.41419,-31.40157 20.41419,-31.40157 z m 207.41307,119.74999 c 39.32523,-68.17728 64.91541,-143.56353 75.22028,-221.59194 10.24142,-78.03674 5.03454,-157.47746 -15.30516,-233.50971 l -8e-5,-1.7e-4 C 479.12879,420.74396 443.91775,349.3429 396.03006,286.88183 348.09158,224.45967 288.23669,171.96836 220.09138,132.58775 151.91411,93.262478 76.527862,67.672289 -1.5005404,57.367431 -79.537315,47.126011 -158.97803,52.332901 -235.01028,72.672578 -311.02596,93.074042 -382.42706,128.2851 -444.88817,176.17281 c -62.42216,47.93847 -114.91348,107.79335 -154.29412,175.93865 -39.32525,68.17729 -64.91543,143.56355 -75.22029,221.59196 -10.24141,78.03676 -5.03453,157.47746 15.30512,233.5097 20.40143,76.01563 55.61245,147.41671 103.5001,209.87778 l 1.2e-4,2e-4 c 47.93846,62.4221 107.79334,114.9134 175.93867,154.294 68.1772,39.3253 143.56339,64.9155 221.59175,75.2204 l 1.8e-4,0 c 78.036713,10.2414 157.47736965,5.0345 233.50956,-15.3052 l 1.83e-4,0 c 76.015707,-20.4014 147.416827,-55.6125 209.877917,-103.5002 62.34415,-47.8786 114.78227,-107.6438 154.14642,-175.68321 L 231.68121,832.01373 c 0,0 4.98848,2.04038 12.0468,7.74683 6.89859,5.57731 16.3789,15.23425 23.67149,30.65052 7.21577,15.25389 13.01239,37.84319 9.8298,68.28364 -3.10957,29.74192 -15.53176,71.06518 -48.3331,115.57098 -31.13158,42.2224 -85.06139,92.3767 -167.281738,125.4254 -40.344336,16.1937 -88.02686,28.3664 -141.598224,32.0194 -22.177768,1.5122 -46.822888,1.6589 -73.433408,-0.4214 -63.1575,-4.9757 -137.69373,-22.609 -212.98226,-62.8695 -61.42904,-32.9013 -121.97979,-80.2874 -173.05967,-143.7118 -45.55572,-56.64604 -82.38685,-124.73203 -104.47182,-201.55859 -20.55765,-71.70938 -27.71594,-149.25697 -18.51806,-227.87206 8.88836,-75.48147 32.66008,-150.05626 71.1732,-218.60087 37.84428,-67.23413 88.93676,-126.96438 150.50055,-175.14338 61.61055,-48.13853 132.11574,-83.499785 207.01529,-104.194006 C -157.39197,56.303583 -78.460993,51.033494 -1.9289287,60.621375 77.796522,70.673715 152.76812,96.533674 219.06149,134.3715 c 71.04501,40.62537 130.13901,93.80093 176.07216,153.19817 51.45227,66.64519 84.91125,139.03316 103.94087,209.31224 0,0 10e-6,1.5e-4 10e-6,1.5e-4 23.29542,86.31005 24.35195,166.75311 15.68069,233.37689 -9.53008,72.76043 -30.62105,129.69302 -46.75524,165.91559 -16.46468,36.96456 -28.38484,55.6869 -28.38484,55.6869 z"
               id="path3378"
               inkscape:connector-curvature="0"
               inkscape:path-effect="#path-effect3380"
               inkscape:original-d="M 336.12511,892.11145 C 399.81016,781.8057 417.06789,650.71876 384.10206,527.68867 351.13632,404.65854 270.64716,299.76282 160.34145,236.07773 50.035657,172.39269 -81.052976,155.13398 -204.08308,188.09979 -327.11313,221.06563 -432.0072,301.5557 -495.69226,411.86146 c -63.68506,110.30576 -80.94448,241.39174 -47.97871,364.42181 32.96582,123.03009 113.45662,227.92683 223.76238,291.61193 110.30577,63.685 241.392707,80.9427 364.422795,47.9769 C 167.54429,1082.9063 272.44005,1002.4172 336.12511,892.11145 Z m -0.43302,-0.25 c -63.61884,110.19105 -168.4051,190.59625 -291.30728,223.52775 -122.902185,32.9316 -253.85231,15.6918 -364.04339,-47.9271 -110.1911,-63.6188 -190.59624,-168.40507 -223.52778,-291.30725 -32.9315,-122.90217 -15.69175,-253.8523 47.92711,-364.04339 63.61886,-110.19109 168.40511,-190.59622 291.30727,-223.52779 122.902176,-32.93154 253.852314,-15.69177 364.04336,47.92712 110.19112,63.61883 190.59629,168.40506 223.52778,291.30728 32.93158,122.90216 15.69176,253.85231 -47.92707,364.04338 z" />
            <path
               inkscape:original-d="m -79.783575,171.73647 c -127.370105,0 -249.523595,50.59784 -339.587855,140.66213 -90.06435,90.06423 -140.66213,212.21775 -140.66218,339.58784 3e-5,127.37014 50.59787,249.52558 140.66215,339.58987 90.06428,90.06419 212.21776,140.66009 339.587879,140.66009 127.37012,0 249.523621,-50.5959 339.587901,-140.66009 C 349.86859,901.51203 400.46643,779.35658 400.46647,651.98644 400.46641,524.61634 349.86855,402.46288 259.80428,312.39859 169.74002,222.33432 47.586537,171.73647 -79.783575,171.73647 Z m 4e-6,0.5 c 127.237668,1e-5 249.263741,50.54497 339.234351,140.51563 89.97069,89.97062 140.51565,211.99665 140.51561,339.23438 5e-5,127.23769 -50.54495,249.26372 -140.51559,339.23436 -89.97065,89.97056 -211.996667,140.51556 -339.23438,140.51556 -127.23771,0 -249.26372,-50.545 -339.23438,-140.51556 -89.97064,-89.97064 -140.51563,-211.99667 -140.51558,-339.23436 -3e-5,-127.23772 50.54492,-249.26376 140.51562,-339.23438 89.9706,-89.97066 211.99667,-140.51561 339.234349,-140.51563 z"
               inkscape:path-effect="#path-effect3384"
               inkscape:connector-curvature="0"
               id="path3382"
               d="m -79.783575,291.73647 c 46.957977,-0.032 94.490157,9.4228 137.86152,27.42246 43.395855,17.94057 83.691745,44.86545 116.873515,78.09246 l 6e-5,10e-5 c 33.22701,33.18177 60.15187,73.47763 78.09244,116.87347 17.99967,43.37135 27.45449,90.90352 27.42251,137.86149 0.032,46.95832 -9.42291,94.49092 -27.42263,137.86285 l -6e-5,10e-5 c -17.94067,43.3963 -44.86535,83.6925 -78.09225,116.87408 -33.18132,33.22657 -73.47704,60.15094 -116.872751,78.0911 -43.371369,17.99932 -90.903806,27.45372 -137.86236,27.42182 -46.958549,0.032 -94.490979,-9.4225 -137.862349,-27.42182 -43.3957,-17.94016 -83.69142,-44.86453 -116.87274,-78.0911 -33.22691,-33.18159 -60.15159,-73.47778 -78.09227,-116.87408 l -5e-5,-10e-5 c -17.99972,-43.37194 -27.45463,-90.90453 -27.42262,-137.86285 -0.032,-46.95796 9.42281,-94.4901 27.42244,-137.86143 l 4e-5,-10e-5 c 17.94057,-43.39583 44.86542,-83.69168 78.09241,-116.87341 l 8e-5,-8e-5 c 33.18178,-33.22703 73.47768,-60.15192 116.87355,-78.0925 43.31716,-17.97717 90.78475,-27.43082 137.68547,-27.42254 L -80.078881,51.736666 c 0,0 1.111522,5.327313 -1.061749,14.30872 -2.226095,9.199708 -7.571244,21.347272 -19.57053,36.523994 -12.32203,15.58493 -29.54056,31.92392 -55.60752,53.22484 -15.15301,12.38246 -68.68341,53.77078 -96.79664,77.73217 -35.54325,30.28047 -80.42724,72.38646 -119.18387,125.94447 -19.30175,26.63721 -38.21979,57.61557 -54.19046,92.57003 -6.62812,14.50673 -13.21043,30.71383 -19.03107,48.4524 -13.84668,42.07521 -23.81202,94.14772 -21.0312,151.49316 2.21959,46.72316 13.01526,97.21896 35.14767,145.64722 19.68812,43.20174 48.58184,85.04009 85.78293,120.1925 34.65425,32.82031 76.87871,60.11014 123.36154,78.12741 44.59417,17.34602 93.61374,26.33132 142.4762,25.41252 47.939053,-0.8428 96.324404,-11.2267 140.447824,-30.30953 44.152356,-19.02926 84.637996,-46.99835 117.703266,-80.9171 33.75637,-34.53835 60.28946,-75.71766 77.70853,-119.0342 18.21377,-45.12179 26.82817,-93.17588 26.45016,-139.1188 -0.33995,-49.29178 -10.95836,-96.8313 -28.43835,-138.29391 -19.56035,-46.57215 -47.91686,-86.15967 -78.80277,-116.77479 0,0 -7e-5,-5e-5 -7e-5,-5e-5 C 137.33585,359.19919 95.121305,334.30829 58.108898,319.0842 17.605109,302.35955 -18.750857,296.19939 -42.381921,293.71488 c -24.192913,-2.54358 -37.401654,-1.97841 -37.401654,-1.97841 z m -1.5e-5,-239.499997 c -78.70587,0.032 -156.78736,15.563375 -229.51437,45.653303 -72.70252,30.149034 -138.89675,74.378684 -194.57277,130.009504 l -1e-4,1.6e-4 c -55.6308,55.67595 -99.86042,121.87014 -130.00944,194.57263 l -4e-5,1.8e-4 c -30.08992,72.72697 -45.62126,150.80841 -45.65323,229.51422 0.032,78.70589 15.56333,156.78739 45.65326,229.5144 30.14906,72.70254 74.37873,138.89683 130.00953,194.57283 55.67604,55.6307 121.87026,99.8604 194.57277,130.0094 72.72701,30.0899 150.80851,45.6213 229.5144,45.6533 78.7058879,-0.032 156.787389,-15.5634 229.5144,-45.6533 72.70251,-30.149 138.89674,-74.3787 194.57277,-130.0094 55.6308,-55.676 99.86047,-121.87029 130.00953,-194.57283 30.08994,-72.727 45.62131,-150.80851 45.65327,-229.51439 -0.032,-78.70582 -15.5633,-156.78726 -45.65319,-229.51424 l -7e-5,-1.8e-4 C 444.1641,349.76958 399.93448,283.57539 344.30372,227.89942 l -1.3e-4,-1.4e-4 C 288.62757,172.26846 222.43334,128.03881 149.73082,97.889773 77.094688,67.837446 -0.88254879,52.307303 -79.488502,52.236666 L -79.60778,292.23639 c 0,0 -0.727218,-5.34034 0.685551,-14.30625 1.380799,-8.76301 5.003801,-21.80166 14.708389,-35.82537 9.602366,-13.87598 26.266967,-30.19066 54.2204625,-42.65467 27.3120445,-12.178 69.3101525,-22.0817 124.2539875,-15.92782 52.13141,5.84957 122.53124,27.47699 192.26244,82.15754 34.19631,26.84238 68.57942,62.05032 98.52867,106.61799 12.39856,18.45037 24.8481,39.72036 36.35184,63.80586 27.26963,57.18388 49.26688,130.55078 52.04454,215.88281 2.22108,69.64979 -8.54111,145.78133 -37.92823,221.72996 -26.27909,67.77545 -66.82773,133.71516 -122.319,191.25456 -51.82332,53.6581 -115.40236,98.6312 -188.08395,129.9731 -69.813058,30.0432 -146.282571,46.7437 -224.900502,47.6626 -77.148608,0.843 -154.422768,-13.5393 -226.928888,-42.7656 -72.49446,-29.287 -138.3708,-72.6656 -193.7423,-127.1834 -56.4011,-55.619 -100.43063,-121.34015 -130.39331,-192.41281 -31.15715,-74.07044 -46.24757,-151.92773 -46.62573,-228.25838 -0.33991,-81.83947 16.16449,-159.60415 44.63743,-229.08205 31.99029,-77.88157 77.95062,-143.05187 129.29928,-194.67155 0,0 1.2e-4,-9e-5 1.2e-4,-9e-5 63.09899,-63.32945 132.23646,-104.46596 194.26997,-130.268317 67.77743,-28.126922 127.62797,-38.327902 167.06473,-42.466572 40.24459,-4.223447 62.41869,-3.261458 62.41869,-3.261458 z"
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
          </g>
          <g
             style="fill:#338000"
             id="g3391"
             transform="matrix(-1,0,0,-1,-159.13429,1303.4731)">
            <path
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000080;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
               d="m -391.76922,832.11145 c -23.50671,-40.65081 -39.0847,-86.54229 -45.18222,-133.10282 -6.16095,-46.55221 -2.99126,-94.91191 9.19329,-140.26169 l 2e-5,-5e-5 c 12.12275,-45.36631 33.55757,-88.83186 62.16919,-126.06677 l 9e-5,-7e-5 c 28.56085,-37.27383 64.9975,-69.22799 105.68028,-92.67926 40.65108,-23.50688 86.54297,-39.08499 133.10403,-45.18275 46.552646,-6.16108 94.912533,-2.99172 140.262105,9.19283 l 5.4e-5,10e-6 c 45.365724,12.12257 88.830781,33.5575 126.065281,62.1692 37.27358,28.56102 69.22754,64.99812 92.67916,105.68139 23.50693,40.65133 39.0854,86.54282 45.18318,133.1032 6.16122,46.55187 2.99188,94.91118 -9.19253,140.26033 -12.12264,45.36614 -33.55783,88.8317 -62.16978,126.06694 l -7e-5,9e-5 c -28.56134,37.27419 -64.99832,69.22867 -105.68142,92.68012 -40.650803,23.50667 -86.542239,39.08465 -133.10272,45.18215 l -1.11e-4,0 c -46.552174,6.161 -94.911829,2.9913 -140.261539,-9.19326 l -1.1e-4,-3e-5 c -45.36635,-12.12275 -88.83194,-33.55758 -126.06687,-62.16921 -37.22727,-28.52518 -69.14816,-64.9065 -92.59136,-105.52786 L -599.46749,952.3671 c 0,0 4.05782,-3.62626 12.92259,-6.23486 9.08022,-2.672 22.2729,-4.11675 41.41596,-1.31343 19.65797,2.87873 42.41721,9.62093 73.89783,21.54511 18.30002,6.93166 80.90858,32.59619 115.71636,44.96228 43.99528,15.6411 102.90213,33.4588 168.66305,40.244 32.71937,3.3972 69.00644,4.2915 107.263229,0.6453 15.877249,-1.5132 33.204168,-3.9163 51.476538,-7.7448 43.361539,-9.046 93.44032,-26.452 141.712523,-57.53302 39.35365,-25.28381 77.68647,-59.88104 108.56037,-103.2624 27.56974,-38.65127 49.35595,-84.59315 61.19829,-134.38645 11.0961,-46.42162 13.61758,-96.63399 5.97957,-145.89795 -7.27498,-47.29269 -24.00328,-94.23753 -49.23025,-136.09424 -24.69938,-41.09505 -57.88476,-77.80605 -96.47269,-106.47663 -38.55601,-28.72243 -83.020777,-49.79947 -128.927922,-61.47545 -46.789274,-11.9647 -95.718148,-14.35338 -141.940898,-7.78047 -48.18351,6.78732 -94.10676,23.35408 -133.70547,46.65292 -42.51799,24.94029 -78.37924,57.90586 -105.54694,93.77527 -30.55249,40.22582 -50.65804,84.57702 -61.72854,126.63255 0,0 -1e-5,9e-5 -1e-5,9e-5 -13.69062,51.72421 -14.1395,100.72853 -8.81774,140.39426 5.76792,43.43965 18.61106,78.00492 28.27494,99.71228 9.89366,22.22347 16.98748,33.37999 16.98748,33.37999 z m -207.41307,119.75001 c 39.38064,68.14524 91.87196,128.00014 154.29411,175.93864 62.46109,47.8877 133.86221,83.0988 209.87792,103.5002 l 9e-5,0 c 76.03222,20.3397 155.472909,25.5466 233.5096526,15.3052 78.0284244,-10.3049 153.4146774,-35.8951 221.5919474,-75.2204 68.14531,-39.3806 128.00019,-91.8719 175.93865,-154.294 47.8877,-62.46112 83.09875,-133.86222 103.50021,-209.87788 l 2e-5,-9e-5 C 519.86996,731.18089 525.07684,651.74019 514.83542,573.70343 504.53056,495.67502 478.94039,420.28876 439.61515,352.11147 400.2345,283.96617 347.74317,224.11129 285.32102,176.17282 222.85991,128.28511 151.4588,93.074053 75.443128,72.672588 -0.58906043,52.332928 -80.02971,47.12603 -158.06642,57.367412 l -1.9e-4,2.4e-5 c -78.02841,10.304861 -153.41467,35.895044 -221.59196,75.220294 -68.14525,39.3806 -128.00008,91.87187 -175.93853,154.29396 l -1.2e-4,1.5e-4 c -47.88767,62.46106 -83.09872,133.86212 -103.50018,209.87774 l -5e-5,1.9e-4 c -20.33966,76.03224 -25.54655,155.47296 -15.30513,233.50973 10.29198,77.9309 35.83111,153.22625 75.07293,221.33633 l 207.90548,-119.8966 c 0,0 -4.26127,3.29997 -12.73235,6.55943 -8.27939,3.1857 -21.3827,6.56741 -38.37988,5.17485 -16.81814,-1.3779 -39.27936,-7.65253 -64.05026,-25.62896 -24.20248,-17.56392 -53.7784,-48.9835 -75.9209,-99.6432 -20.99983,-48.07193 -37.46983,-119.85367 -24.98071,-207.58295 6.14804,-43.03605 19.44747,-90.41665 43.06958,-138.63729 9.77921,-19.96265 21.97479,-41.37927 37.08158,-63.38455 35.88786,-52.20812 88.42683,-107.94176 160.93768,-153.01333 59.20797,-36.74838 130.52092,-65.493815 210.98793,-78.018151 C -83.576698,66.40572 -6.1969318,68.55202 71.379305,87.839152 143.76028,105.89039 214.4976,138.46493 277.98133,185.73807 c 60.92469,45.43828 113.62249,103.31259 153.72731,170.93823 39.30432,66.39118 65.486,140.50369 76.42833,217.90899 10.88392,77.42557 6.25507,156.16548 -13.27298,231.3775 -19.96687,76.65427 -54.86833,147.64554 -101.43771,209.13031 -48.5683,64.0181 -108.44948,116.0154 -174.36469,154.5083 -70.7051,41.2141 -146.30349,65.8032 -220.7095888,75.8838 -83.4425632,11.2364 -162.8618712,4.0188 -233.2401512,-14.6406 0,0 -1.4e-4,-10e-5 -1.4e-4,-10e-5 -86.3944,-22.9806 -156.5884,-62.2872 -209.95065,-103.1086 -58.24735,-44.6335 -97.00693,-91.3651 -120.3095,-123.449 -23.7799,-32.74111 -34.03385,-52.42544 -34.03385,-52.42544 z"
               id="path3393"
               inkscape:connector-curvature="0"
               inkscape:path-effect="#path-effect3355"
               inkscape:original-d="m -495.69227,892.11145 c 63.68506,110.30575 168.58082,190.79485 291.61091,223.76065 123.030094,32.9659 254.117026,15.7081 364.42279,-47.9769 C 270.64719,1004.2101 351.13799,899.31337 384.10381,776.28327 417.06958,653.2532 399.81017,522.16723 336.12511,411.86147 272.44005,301.55571 167.54597,221.06563 44.515918,188.09979 -78.514177,155.13398 -209.60281,172.39269 -319.90857,236.07775 c -110.30576,63.68507 -190.79487,168.58082 -223.76068,291.61091 -32.96581,123.03009 -15.70808,254.11703 47.97698,364.42279 z m 0.43302,-0.25 c -63.61886,-110.19108 -80.85863,-241.14121 -47.9271,-364.0434 32.93155,-122.90218 113.3367,-227.68843 223.52778,-291.30728 110.19109,-63.61886 241.141217,-80.85863 364.043397,-47.92709 122.902153,32.93157 227.688413,113.3367 291.307273,223.52779 63.61885,110.19109 80.85861,241.14122 47.92711,364.04339 -32.93154,122.90218 -113.33669,227.68844 -223.52778,291.30724 -110.191085,63.6189 -241.141208,80.8587 -364.0434,47.9271 -122.90218,-32.9315 -227.68843,-113.3367 -291.30728,-223.52775 z" />
            <path
               inkscape:original-d="M 336.12511,892.11145 C 399.81016,781.8057 417.06789,650.71876 384.10206,527.68867 351.13632,404.65854 270.64716,299.76282 160.34145,236.07773 50.035657,172.39269 -81.052976,155.13398 -204.08308,188.09979 -327.11313,221.06563 -432.0072,301.5557 -495.69226,411.86146 c -63.68506,110.30576 -80.94448,241.39174 -47.97871,364.42181 32.96582,123.03009 113.45662,227.92683 223.76238,291.61193 110.30577,63.685 241.392707,80.9427 364.422795,47.9769 C 167.54429,1082.9063 272.44005,1002.4172 336.12511,892.11145 Z m -0.43302,-0.25 c -63.61884,110.19105 -168.4051,190.59625 -291.30728,223.52775 -122.902185,32.9316 -253.85231,15.6918 -364.04339,-47.9271 -110.1911,-63.6188 -190.59624,-168.40507 -223.52778,-291.30725 -32.9315,-122.90217 -15.69175,-253.8523 47.92711,-364.04339 63.61886,-110.19109 168.40511,-190.59622 291.30727,-223.52779 122.902176,-32.93154 253.852314,-15.69177 364.04336,47.92712 110.19112,63.61883 190.59629,168.40506 223.52778,291.30728 32.93158,122.90216 15.69176,253.85231 -47.92707,364.04338 z"
               inkscape:path-effect="#path-effect3380"
               inkscape:connector-curvature="0"
               id="path3395"
               d="m 232.20207,832.11145 c -23.45128,40.6828 -55.40548,77.11948 -92.67932,105.68035 -37.23492,28.61163 -80.700491,50.04645 -126.066819,62.1692 l -1.12e-4,10e-6 c -45.349753,12.18459 -93.709426,15.35419 -140.261609,9.19329 -46.56053,-6.0975 -92.452,-21.67547 -133.10281,-45.18215 -40.6831,-23.45144 -77.12008,-55.40593 -105.68142,-92.68012 -28.61199,-37.23526 -50.0472,-80.70085 -62.16985,-126.06703 -12.18441,-45.34915 -15.35374,-93.70846 -9.19253,-140.26033 6.09778,-46.56038 21.67626,-92.45187 45.18319,-133.10321 23.45162,-40.68326 55.40558,-77.12036 92.67916,-105.68138 37.23449,-28.6117 80.69955,-50.04663 126.06527,-62.1692 45.34959,-12.18456 93.709504,-15.35392 140.262178,-9.19284 46.56106,6.09775 92.452951,21.67586 133.104042,45.18273 40.68278,23.45129 77.11943,55.40545 105.68028,92.67925 l 7e-5,9e-5 c 28.61161,37.2349 50.04641,80.70043 62.16914,126.06671 l 3e-5,1.1e-4 c 12.18455,45.34978 15.35425,93.7095 9.19331,140.26171 -6.0899,46.50235 -21.63659,92.33731 -45.09412,132.95039 l 207.90549,119.89658 c 0,0 -5.16935,-1.70105 -11.86084,-8.07387 -6.85413,-6.5277 -14.70166,-17.23052 -21.84544,-35.21056 -7.33594,-18.46366 -12.87664,-41.54484 -18.2903,-74.76995 C 385.05204,814.48712 375.9739,747.43425 369.27934,711.10679 360.82731,665.1852 346.80445,605.26153 319.80017,544.91829 306.38254,514.88388 289.01351,483.0112 266.7274,451.70296 257.47826,438.70948 246.73365,424.90548 234.28192,410.99538 204.76706,377.9662 164.65362,343.29971 113.6006,317.03525 72.027358,295.59589 22.898871,279.69731 -30.107438,274.65041 c -47.257862,-4.55046 -97.937802,-0.44694 -146.981232,14.19395 -45.75035,13.6013 -90.49628,36.52383 -129.34111,67.77051 -37.31918,29.94666 -69.61045,67.90621 -93.24594,110.68176 -23.23968,41.93782 -38.43965,89.03271 -43.97513,136.78613 -5.59635,47.75169 -1.61722,96.79783 11.22466,142.39258 13.0329,46.50305 35.42868,90.07104 64.23237,126.81466 29.96974,38.3345 67.2786,69.82183 107.25534,92.46591 42.85791,24.35149 89.33755,38.92539 133.98521,44.51859 50.112842,6.3464 98.574897,1.5827 140.531316,-9.8578 0,0 8.3e-5,0 8.3e-5,0 51.639788,-14.00567 94.303211,-38.11909 125.993861,-62.56073 34.73587,-26.71498 58.24871,-55.1201 72.21589,-74.34295 14.29926,-19.67988 20.41419,-31.40157 20.41419,-31.40157 z m 207.41307,119.74999 c 39.32523,-68.17728 64.91541,-143.56353 75.22028,-221.59194 10.24142,-78.03674 5.03454,-157.47746 -15.30516,-233.50971 l -8e-5,-1.7e-4 C 479.12879,420.74396 443.91775,349.3429 396.03006,286.88183 348.09158,224.45967 288.23669,171.96836 220.09138,132.58775 151.91411,93.262478 76.527862,67.672289 -1.5005404,57.367431 -79.537315,47.126011 -158.97803,52.332901 -235.01028,72.672578 -311.02596,93.074042 -382.42706,128.2851 -444.88817,176.17281 c -62.42216,47.93847 -114.91348,107.79335 -154.29412,175.93865 -39.32525,68.17729 -64.91543,143.56355 -75.22029,221.59196 -10.24141,78.03676 -5.03453,157.47746 15.30512,233.5097 20.40143,76.01563 55.61245,147.41671 103.5001,209.87778 l 1.2e-4,2e-4 c 47.93846,62.4221 107.79334,114.9134 175.93867,154.294 68.1772,39.3253 143.56339,64.9155 221.59175,75.2204 l 1.8e-4,0 c 78.036713,10.2414 157.47736965,5.0345 233.50956,-15.3052 l 1.83e-4,0 c 76.015707,-20.4014 147.416827,-55.6125 209.877917,-103.5002 62.34415,-47.8786 114.78227,-107.6438 154.14642,-175.68321 L 231.68121,832.01373 c 0,0 4.98848,2.04038 12.0468,7.74683 6.89859,5.57731 16.3789,15.23425 23.67149,30.65052 7.21577,15.25389 13.01239,37.84319 9.8298,68.28364 -3.10957,29.74192 -15.53176,71.06518 -48.3331,115.57098 -31.13158,42.2224 -85.06139,92.3767 -167.281738,125.4254 -40.344336,16.1937 -88.02686,28.3664 -141.598224,32.0194 -22.177768,1.5122 -46.822888,1.6589 -73.433408,-0.4214 -63.1575,-4.9757 -137.69373,-22.609 -212.98226,-62.8695 -61.42904,-32.9013 -121.97979,-80.2874 -173.05967,-143.7118 -45.55572,-56.64604 -82.38685,-124.73203 -104.47182,-201.55859 -20.55765,-71.70938 -27.71594,-149.25697 -18.51806,-227.87206 8.88836,-75.48147 32.66008,-150.05626 71.1732,-218.60087 37.84428,-67.23413 88.93676,-126.96438 150.50055,-175.14338 61.61055,-48.13853 132.11574,-83.499785 207.01529,-104.194006 C -157.39197,56.303583 -78.460993,51.033494 -1.9289287,60.621375 77.796522,70.673715 152.76812,96.533674 219.06149,134.3715 c 71.04501,40.62537 130.13901,93.80093 176.07216,153.19817 51.45227,66.64519 84.91125,139.03316 103.94087,209.31224 0,0 10e-6,1.5e-4 10e-6,1.5e-4 23.29542,86.31005 24.35195,166.75311 15.68069,233.37689 -9.53008,72.76043 -30.62105,129.69302 -46.75524,165.91559 -16.46468,36.96456 -28.38484,55.6869 -28.38484,55.6869 z"
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000080;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
            <path
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000080;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
               d="m -79.783575,291.73647 c 46.957977,-0.032 94.490157,9.4228 137.86152,27.42246 43.395855,17.94057 83.691745,44.86545 116.873515,78.09246 l 6e-5,10e-5 c 33.22701,33.18177 60.15187,73.47763 78.09244,116.87347 17.99967,43.37135 27.45449,90.90352 27.42251,137.86149 0.032,46.95832 -9.42291,94.49092 -27.42263,137.86285 l -6e-5,10e-5 c -17.94067,43.3963 -44.86535,83.6925 -78.09225,116.87408 -33.18132,33.22657 -73.47704,60.15094 -116.872751,78.0911 -43.371369,17.99932 -90.903806,27.45372 -137.86236,27.42182 -46.958549,0.032 -94.490979,-9.4225 -137.862349,-27.42182 -43.3957,-17.94016 -83.69142,-44.86453 -116.87274,-78.0911 -33.22691,-33.18159 -60.15159,-73.47778 -78.09227,-116.87408 l -5e-5,-10e-5 c -17.99972,-43.37194 -27.45463,-90.90453 -27.42262,-137.86285 -0.032,-46.95796 9.42281,-94.4901 27.42244,-137.86143 l 4e-5,-10e-5 c 17.94057,-43.39583 44.86542,-83.69168 78.09241,-116.87341 l 8e-5,-8e-5 c 33.18178,-33.22703 73.47768,-60.15192 116.87355,-78.0925 43.31716,-17.97717 90.78475,-27.43082 137.68547,-27.42254 L -80.078881,51.736666 c 0,0 1.111522,5.327313 -1.061749,14.30872 -2.226095,9.199708 -7.571244,21.347272 -19.57053,36.523994 -12.32203,15.58493 -29.54056,31.92392 -55.60752,53.22484 -15.15301,12.38246 -68.68341,53.77078 -96.79664,77.73217 -35.54325,30.28047 -80.42724,72.38646 -119.18387,125.94447 -19.30175,26.63721 -38.21979,57.61557 -54.19046,92.57003 -6.62812,14.50673 -13.21043,30.71383 -19.03107,48.4524 -13.84668,42.07521 -23.81202,94.14772 -21.0312,151.49316 2.21959,46.72316 13.01526,97.21896 35.14767,145.64722 19.68812,43.20174 48.58184,85.04009 85.78293,120.1925 34.65425,32.82031 76.87871,60.11014 123.36154,78.12741 44.59417,17.34602 93.61374,26.33132 142.4762,25.41252 47.939053,-0.8428 96.324404,-11.2267 140.447824,-30.30953 44.152356,-19.02926 84.637996,-46.99835 117.703266,-80.9171 33.75637,-34.53835 60.28946,-75.71766 77.70853,-119.0342 18.21377,-45.12179 26.82817,-93.17588 26.45016,-139.1188 -0.33995,-49.29178 -10.95836,-96.8313 -28.43835,-138.29391 -19.56035,-46.57215 -47.91686,-86.15967 -78.80277,-116.77479 0,0 -7e-5,-5e-5 -7e-5,-5e-5 C 137.33585,359.19919 95.121305,334.30829 58.108898,319.0842 17.605109,302.35955 -18.750857,296.19939 -42.381921,293.71488 c -24.192913,-2.54358 -37.401654,-1.97841 -37.401654,-1.97841 z m -1.5e-5,-239.499997 c -78.70587,0.032 -156.78736,15.563375 -229.51437,45.653303 -72.70252,30.149034 -138.89675,74.378684 -194.57277,130.009504 l -1e-4,1.6e-4 c -55.6308,55.67595 -99.86042,121.87014 -130.00944,194.57263 l -4e-5,1.8e-4 c -30.08992,72.72697 -45.62126,150.80841 -45.65323,229.51422 0.032,78.70589 15.56333,156.78739 45.65326,229.5144 30.14906,72.70254 74.37873,138.89683 130.00953,194.57283 55.67604,55.6307 121.87026,99.8604 194.57277,130.0094 72.72701,30.0899 150.80851,45.6213 229.5144,45.6533 78.7058879,-0.032 156.787389,-15.5634 229.5144,-45.6533 72.70251,-30.149 138.89674,-74.3787 194.57277,-130.0094 55.6308,-55.676 99.86047,-121.87029 130.00953,-194.57283 30.08994,-72.727 45.62131,-150.80851 45.65327,-229.51439 -0.032,-78.70582 -15.5633,-156.78726 -45.65319,-229.51424 l -7e-5,-1.8e-4 C 444.1641,349.76958 399.93448,283.57539 344.30372,227.89942 l -1.3e-4,-1.4e-4 C 288.62757,172.26846 222.43334,128.03881 149.73082,97.889773 77.094688,67.837446 -0.88254879,52.307303 -79.488502,52.236666 L -79.60778,292.23639 c 0,0 -0.727218,-5.34034 0.685551,-14.30625 1.380799,-8.76301 5.003801,-21.80166 14.708389,-35.82537 9.602366,-13.87598 26.266967,-30.19066 54.2204625,-42.65467 27.3120445,-12.178 69.3101525,-22.0817 124.2539875,-15.92782 52.13141,5.84957 122.53124,27.47699 192.26244,82.15754 34.19631,26.84238 68.57942,62.05032 98.52867,106.61799 12.39856,18.45037 24.8481,39.72036 36.35184,63.80586 27.26963,57.18388 49.26688,130.55078 52.04454,215.88281 2.22108,69.64979 -8.54111,145.78133 -37.92823,221.72996 -26.27909,67.77545 -66.82773,133.71516 -122.319,191.25456 -51.82332,53.6581 -115.40236,98.6312 -188.08395,129.9731 -69.813058,30.0432 -146.282571,46.7437 -224.900502,47.6626 -77.148608,0.843 -154.422768,-13.5393 -226.928888,-42.7656 -72.49446,-29.287 -138.3708,-72.6656 -193.7423,-127.1834 -56.4011,-55.619 -100.43063,-121.34015 -130.39331,-192.41281 -31.15715,-74.07044 -46.24757,-151.92773 -46.62573,-228.25838 -0.33991,-81.83947 16.16449,-159.60415 44.63743,-229.08205 31.99029,-77.88157 77.95062,-143.05187 129.29928,-194.67155 0,0 1.2e-4,-9e-5 1.2e-4,-9e-5 63.09899,-63.32945 132.23646,-104.46596 194.26997,-130.268317 67.77743,-28.126922 127.62797,-38.327902 167.06473,-42.466572 40.24459,-4.223447 62.41869,-3.261458 62.41869,-3.261458 z"
               id="path3397"
               inkscape:connector-curvature="0"
               inkscape:path-effect="#path-effect3384"
               inkscape:original-d="m -79.783575,171.73647 c -127.370105,0 -249.523595,50.59784 -339.587855,140.66213 -90.06435,90.06423 -140.66213,212.21775 -140.66218,339.58784 3e-5,127.37014 50.59787,249.52558 140.66215,339.58987 90.06428,90.06419 212.21776,140.66009 339.587879,140.66009 127.37012,0 249.523621,-50.5959 339.587901,-140.66009 C 349.86859,901.51203 400.46643,779.35658 400.46647,651.98644 400.46641,524.61634 349.86855,402.46288 259.80428,312.39859 169.74002,222.33432 47.586537,171.73647 -79.783575,171.73647 Z m 4e-6,0.5 c 127.237668,1e-5 249.263741,50.54497 339.234351,140.51563 89.97069,89.97062 140.51565,211.99665 140.51561,339.23438 5e-5,127.23769 -50.54495,249.26372 -140.51559,339.23436 -89.97065,89.97056 -211.996667,140.51556 -339.23438,140.51556 -127.23771,0 -249.26372,-50.545 -339.23438,-140.51556 -89.97064,-89.97064 -140.51563,-211.99667 -140.51558,-339.23436 -3e-5,-127.23772 50.54492,-249.26376 140.51562,-339.23438 89.9706,-89.97066 211.99667,-140.51561 339.234349,-140.51563 z" />
          </g>
        </g>
        <g
           transform="matrix(-0.6119047,0,0,-0.6119047,-126.83908,1054.8229)"
           id="g3409">
          <g
             style="fill:#ff0000"
             id="g3411">
            <path
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
               d="m -391.76922,832.11145 c -23.50671,-40.65081 -39.0847,-86.54229 -45.18222,-133.10282 -6.16095,-46.55221 -2.99126,-94.91191 9.19329,-140.26169 l 2e-5,-5e-5 c 12.12275,-45.36631 33.55757,-88.83186 62.16919,-126.06677 l 9e-5,-7e-5 c 28.56085,-37.27383 64.9975,-69.22799 105.68028,-92.67926 40.65108,-23.50688 86.54297,-39.08499 133.10403,-45.18275 46.552646,-6.16108 94.912533,-2.99172 140.262105,9.19283 l 5.4e-5,10e-6 c 45.365724,12.12257 88.830781,33.5575 126.065281,62.1692 37.27358,28.56102 69.22754,64.99812 92.67916,105.68139 23.50693,40.65133 39.0854,86.54282 45.18318,133.1032 6.16122,46.55187 2.99188,94.91118 -9.19253,140.26033 -12.12264,45.36614 -33.55783,88.8317 -62.16978,126.06694 l -7e-5,9e-5 c -28.56134,37.27419 -64.99832,69.22867 -105.68142,92.68012 -40.650803,23.50667 -86.542239,39.08465 -133.10272,45.18215 l -1.11e-4,0 c -46.552174,6.161 -94.911829,2.9913 -140.261539,-9.19326 l -1.1e-4,-3e-5 c -45.36635,-12.12275 -88.83194,-33.55758 -126.06687,-62.16921 -37.22727,-28.52518 -69.14816,-64.9065 -92.59136,-105.52786 L -599.46749,952.3671 c 0,0 4.05782,-3.62626 12.92259,-6.23486 9.08022,-2.672 22.2729,-4.11675 41.41596,-1.31343 19.65797,2.87873 42.41721,9.62093 73.89783,21.54511 18.30002,6.93166 80.90858,32.59619 115.71636,44.96228 43.99528,15.6411 102.90213,33.4588 168.66305,40.244 32.71937,3.3972 69.00644,4.2915 107.263229,0.6453 15.877249,-1.5132 33.204168,-3.9163 51.476538,-7.7448 43.361539,-9.046 93.44032,-26.452 141.712523,-57.53302 39.35365,-25.28381 77.68647,-59.88104 108.56037,-103.2624 27.56974,-38.65127 49.35595,-84.59315 61.19829,-134.38645 11.0961,-46.42162 13.61758,-96.63399 5.97957,-145.89795 -7.27498,-47.29269 -24.00328,-94.23753 -49.23025,-136.09424 -24.69938,-41.09505 -57.88476,-77.80605 -96.47269,-106.47663 -38.55601,-28.72243 -83.020777,-49.79947 -128.927922,-61.47545 -46.789274,-11.9647 -95.718148,-14.35338 -141.940898,-7.78047 -48.18351,6.78732 -94.10676,23.35408 -133.70547,46.65292 -42.51799,24.94029 -78.37924,57.90586 -105.54694,93.77527 -30.55249,40.22582 -50.65804,84.57702 -61.72854,126.63255 0,0 -1e-5,9e-5 -1e-5,9e-5 -13.69062,51.72421 -14.1395,100.72853 -8.81774,140.39426 5.76792,43.43965 18.61106,78.00492 28.27494,99.71228 9.89366,22.22347 16.98748,33.37999 16.98748,33.37999 z m -207.41307,119.75001 c 39.38064,68.14524 91.87196,128.00014 154.29411,175.93864 62.46109,47.8877 133.86221,83.0988 209.87792,103.5002 l 9e-5,0 c 76.03222,20.3397 155.472909,25.5466 233.5096526,15.3052 78.0284244,-10.3049 153.4146774,-35.8951 221.5919474,-75.2204 68.14531,-39.3806 128.00019,-91.8719 175.93865,-154.294 47.8877,-62.46112 83.09875,-133.86222 103.50021,-209.87788 l 2e-5,-9e-5 C 519.86996,731.18089 525.07684,651.74019 514.83542,573.70343 504.53056,495.67502 478.94039,420.28876 439.61515,352.11147 400.2345,283.96617 347.74317,224.11129 285.32102,176.17282 222.85991,128.28511 151.4588,93.074053 75.443128,72.672588 -0.58906043,52.332928 -80.02971,47.12603 -158.06642,57.367412 l -1.9e-4,2.4e-5 c -78.02841,10.304861 -153.41467,35.895044 -221.59196,75.220294 -68.14525,39.3806 -128.00008,91.87187 -175.93853,154.29396 l -1.2e-4,1.5e-4 c -47.88767,62.46106 -83.09872,133.86212 -103.50018,209.87774 l -5e-5,1.9e-4 c -20.33966,76.03224 -25.54655,155.47296 -15.30513,233.50973 10.29198,77.9309 35.83111,153.22625 75.07293,221.33633 l 207.90548,-119.8966 c 0,0 -4.26127,3.29997 -12.73235,6.55943 -8.27939,3.1857 -21.3827,6.56741 -38.37988,5.17485 -16.81814,-1.3779 -39.27936,-7.65253 -64.05026,-25.62896 -24.20248,-17.56392 -53.7784,-48.9835 -75.9209,-99.6432 -20.99983,-48.07193 -37.46983,-119.85367 -24.98071,-207.58295 6.14804,-43.03605 19.44747,-90.41665 43.06958,-138.63729 9.77921,-19.96265 21.97479,-41.37927 37.08158,-63.38455 35.88786,-52.20812 88.42683,-107.94176 160.93768,-153.01333 59.20797,-36.74838 130.52092,-65.493815 210.98793,-78.018151 C -83.576698,66.40572 -6.1969318,68.55202 71.379305,87.839152 143.76028,105.89039 214.4976,138.46493 277.98133,185.73807 c 60.92469,45.43828 113.62249,103.31259 153.72731,170.93823 39.30432,66.39118 65.486,140.50369 76.42833,217.90899 10.88392,77.42557 6.25507,156.16548 -13.27298,231.3775 -19.96687,76.65427 -54.86833,147.64554 -101.43771,209.13031 -48.5683,64.0181 -108.44948,116.0154 -174.36469,154.5083 -70.7051,41.2141 -146.30349,65.8032 -220.7095888,75.8838 -83.4425632,11.2364 -162.8618712,4.0188 -233.2401512,-14.6406 0,0 -1.4e-4,-10e-5 -1.4e-4,-10e-5 -86.3944,-22.9806 -156.5884,-62.2872 -209.95065,-103.1086 -58.24735,-44.6335 -97.00693,-91.3651 -120.3095,-123.449 -23.7799,-32.74111 -34.03385,-52.42544 -34.03385,-52.42544 z"
               id="path3413"
               inkscape:connector-curvature="0"
               inkscape:path-effect="#path-effect3355"
               inkscape:original-d="m -495.69227,892.11145 c 63.68506,110.30575 168.58082,190.79485 291.61091,223.76065 123.030094,32.9659 254.117026,15.7081 364.42279,-47.9769 C 270.64719,1004.2101 351.13799,899.31337 384.10381,776.28327 417.06958,653.2532 399.81017,522.16723 336.12511,411.86147 272.44005,301.55571 167.54597,221.06563 44.515918,188.09979 -78.514177,155.13398 -209.60281,172.39269 -319.90857,236.07775 c -110.30576,63.68507 -190.79487,168.58082 -223.76068,291.61091 -32.96581,123.03009 -15.70808,254.11703 47.97698,364.42279 z m 0.43302,-0.25 c -63.61886,-110.19108 -80.85863,-241.14121 -47.9271,-364.0434 32.93155,-122.90218 113.3367,-227.68843 223.52778,-291.30728 110.19109,-63.61886 241.141217,-80.85863 364.043397,-47.92709 122.902153,32.93157 227.688413,113.3367 291.307273,223.52779 63.61885,110.19109 80.85861,241.14122 47.92711,364.04339 -32.93154,122.90218 -113.33669,227.68844 -223.52778,291.30724 -110.191085,63.6189 -241.141208,80.8587 -364.0434,47.9271 -122.90218,-32.9315 -227.68843,-113.3367 -291.30728,-223.52775 z" />
            <path
               inkscape:original-d="M 336.12511,892.11145 C 399.81016,781.8057 417.06789,650.71876 384.10206,527.68867 351.13632,404.65854 270.64716,299.76282 160.34145,236.07773 50.035657,172.39269 -81.052976,155.13398 -204.08308,188.09979 -327.11313,221.06563 -432.0072,301.5557 -495.69226,411.86146 c -63.68506,110.30576 -80.94448,241.39174 -47.97871,364.42181 32.96582,123.03009 113.45662,227.92683 223.76238,291.61193 110.30577,63.685 241.392707,80.9427 364.422795,47.9769 C 167.54429,1082.9063 272.44005,1002.4172 336.12511,892.11145 Z m -0.43302,-0.25 c -63.61884,110.19105 -168.4051,190.59625 -291.30728,223.52775 -122.902185,32.9316 -253.85231,15.6918 -364.04339,-47.9271 -110.1911,-63.6188 -190.59624,-168.40507 -223.52778,-291.30725 -32.9315,-122.90217 -15.69175,-253.8523 47.92711,-364.04339 63.61886,-110.19109 168.40511,-190.59622 291.30727,-223.52779 122.902176,-32.93154 253.852314,-15.69177 364.04336,47.92712 110.19112,63.61883 190.59629,168.40506 223.52778,291.30728 32.93158,122.90216 15.69176,253.85231 -47.92707,364.04338 z"
               inkscape:path-effect="#path-effect3380"
               inkscape:connector-curvature="0"
               id="path3415"
               d="m 232.20207,832.11145 c -23.45128,40.6828 -55.40548,77.11948 -92.67932,105.68035 -37.23492,28.61163 -80.700491,50.04645 -126.066819,62.1692 l -1.12e-4,10e-6 c -45.349753,12.18459 -93.709426,15.35419 -140.261609,9.19329 -46.56053,-6.0975 -92.452,-21.67547 -133.10281,-45.18215 -40.6831,-23.45144 -77.12008,-55.40593 -105.68142,-92.68012 -28.61199,-37.23526 -50.0472,-80.70085 -62.16985,-126.06703 -12.18441,-45.34915 -15.35374,-93.70846 -9.19253,-140.26033 6.09778,-46.56038 21.67626,-92.45187 45.18319,-133.10321 23.45162,-40.68326 55.40558,-77.12036 92.67916,-105.68138 37.23449,-28.6117 80.69955,-50.04663 126.06527,-62.1692 45.34959,-12.18456 93.709504,-15.35392 140.262178,-9.19284 46.56106,6.09775 92.452951,21.67586 133.104042,45.18273 40.68278,23.45129 77.11943,55.40545 105.68028,92.67925 l 7e-5,9e-5 c 28.61161,37.2349 50.04641,80.70043 62.16914,126.06671 l 3e-5,1.1e-4 c 12.18455,45.34978 15.35425,93.7095 9.19331,140.26171 -6.0899,46.50235 -21.63659,92.33731 -45.09412,132.95039 l 207.90549,119.89658 c 0,0 -5.16935,-1.70105 -11.86084,-8.07387 -6.85413,-6.5277 -14.70166,-17.23052 -21.84544,-35.21056 -7.33594,-18.46366 -12.87664,-41.54484 -18.2903,-74.76995 C 385.05204,814.48712 375.9739,747.43425 369.27934,711.10679 360.82731,665.1852 346.80445,605.26153 319.80017,544.91829 306.38254,514.88388 289.01351,483.0112 266.7274,451.70296 257.47826,438.70948 246.73365,424.90548 234.28192,410.99538 204.76706,377.9662 164.65362,343.29971 113.6006,317.03525 72.027358,295.59589 22.898871,279.69731 -30.107438,274.65041 c -47.257862,-4.55046 -97.937802,-0.44694 -146.981232,14.19395 -45.75035,13.6013 -90.49628,36.52383 -129.34111,67.77051 -37.31918,29.94666 -69.61045,67.90621 -93.24594,110.68176 -23.23968,41.93782 -38.43965,89.03271 -43.97513,136.78613 -5.59635,47.75169 -1.61722,96.79783 11.22466,142.39258 13.0329,46.50305 35.42868,90.07104 64.23237,126.81466 29.96974,38.3345 67.2786,69.82183 107.25534,92.46591 42.85791,24.35149 89.33755,38.92539 133.98521,44.51859 50.112842,6.3464 98.574897,1.5827 140.531316,-9.8578 0,0 8.3e-5,0 8.3e-5,0 51.639788,-14.00567 94.303211,-38.11909 125.993861,-62.56073 34.73587,-26.71498 58.24871,-55.1201 72.21589,-74.34295 14.29926,-19.67988 20.41419,-31.40157 20.41419,-31.40157 z m 207.41307,119.74999 c 39.32523,-68.17728 64.91541,-143.56353 75.22028,-221.59194 10.24142,-78.03674 5.03454,-157.47746 -15.30516,-233.50971 l -8e-5,-1.7e-4 C 479.12879,420.74396 443.91775,349.3429 396.03006,286.88183 348.09158,224.45967 288.23669,171.96836 220.09138,132.58775 151.91411,93.262478 76.527862,67.672289 -1.5005404,57.367431 -79.537315,47.126011 -158.97803,52.332901 -235.01028,72.672578 -311.02596,93.074042 -382.42706,128.2851 -444.88817,176.17281 c -62.42216,47.93847 -114.91348,107.79335 -154.29412,175.93865 -39.32525,68.17729 -64.91543,143.56355 -75.22029,221.59196 -10.24141,78.03676 -5.03453,157.47746 15.30512,233.5097 20.40143,76.01563 55.61245,147.41671 103.5001,209.87778 l 1.2e-4,2e-4 c 47.93846,62.4221 107.79334,114.9134 175.93867,154.294 68.1772,39.3253 143.56339,64.9155 221.59175,75.2204 l 1.8e-4,0 c 78.036713,10.2414 157.47736965,5.0345 233.50956,-15.3052 l 1.83e-4,0 c 76.015707,-20.4014 147.416827,-55.6125 209.877917,-103.5002 62.34415,-47.8786 114.78227,-107.6438 154.14642,-175.68321 L 231.68121,832.01373 c 0,0 4.98848,2.04038 12.0468,7.74683 6.89859,5.57731 16.3789,15.23425 23.67149,30.65052 7.21577,15.25389 13.01239,37.84319 9.8298,68.28364 -3.10957,29.74192 -15.53176,71.06518 -48.3331,115.57098 -31.13158,42.2224 -85.06139,92.3767 -167.281738,125.4254 -40.344336,16.1937 -88.02686,28.3664 -141.598224,32.0194 -22.177768,1.5122 -46.822888,1.6589 -73.433408,-0.4214 -63.1575,-4.9757 -137.69373,-22.609 -212.98226,-62.8695 -61.42904,-32.9013 -121.97979,-80.2874 -173.05967,-143.7118 -45.55572,-56.64604 -82.38685,-124.73203 -104.47182,-201.55859 -20.55765,-71.70938 -27.71594,-149.25697 -18.51806,-227.87206 8.88836,-75.48147 32.66008,-150.05626 71.1732,-218.60087 37.84428,-67.23413 88.93676,-126.96438 150.50055,-175.14338 61.61055,-48.13853 132.11574,-83.499785 207.01529,-104.194006 C -157.39197,56.303583 -78.460993,51.033494 -1.9289287,60.621375 77.796522,70.673715 152.76812,96.533674 219.06149,134.3715 c 71.04501,40.62537 130.13901,93.80093 176.07216,153.19817 51.45227,66.64519 84.91125,139.03316 103.94087,209.31224 0,0 10e-6,1.5e-4 10e-6,1.5e-4 23.29542,86.31005 24.35195,166.75311 15.68069,233.37689 -9.53008,72.76043 -30.62105,129.69302 -46.75524,165.91559 -16.46468,36.96456 -28.38484,55.6869 -28.38484,55.6869 z"
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
            <path
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
               d="m -79.783575,291.73647 c 46.957977,-0.032 94.490157,9.4228 137.86152,27.42246 43.395855,17.94057 83.691745,44.86545 116.873515,78.09246 l 6e-5,10e-5 c 33.22701,33.18177 60.15187,73.47763 78.09244,116.87347 17.99967,43.37135 27.45449,90.90352 27.42251,137.86149 0.032,46.95832 -9.42291,94.49092 -27.42263,137.86285 l -6e-5,10e-5 c -17.94067,43.3963 -44.86535,83.6925 -78.09225,116.87408 -33.18132,33.22657 -73.47704,60.15094 -116.872751,78.0911 -43.371369,17.99932 -90.903806,27.45372 -137.86236,27.42182 -46.958549,0.032 -94.490979,-9.4225 -137.862349,-27.42182 -43.3957,-17.94016 -83.69142,-44.86453 -116.87274,-78.0911 -33.22691,-33.18159 -60.15159,-73.47778 -78.09227,-116.87408 l -5e-5,-10e-5 c -17.99972,-43.37194 -27.45463,-90.90453 -27.42262,-137.86285 -0.032,-46.95796 9.42281,-94.4901 27.42244,-137.86143 l 4e-5,-10e-5 c 17.94057,-43.39583 44.86542,-83.69168 78.09241,-116.87341 l 8e-5,-8e-5 c 33.18178,-33.22703 73.47768,-60.15192 116.87355,-78.0925 43.31716,-17.97717 90.78475,-27.43082 137.68547,-27.42254 L -80.078881,51.736666 c 0,0 1.111522,5.327313 -1.061749,14.30872 -2.226095,9.199708 -7.571244,21.347272 -19.57053,36.523994 -12.32203,15.58493 -29.54056,31.92392 -55.60752,53.22484 -15.15301,12.38246 -68.68341,53.77078 -96.79664,77.73217 -35.54325,30.28047 -80.42724,72.38646 -119.18387,125.94447 -19.30175,26.63721 -38.21979,57.61557 -54.19046,92.57003 -6.62812,14.50673 -13.21043,30.71383 -19.03107,48.4524 -13.84668,42.07521 -23.81202,94.14772 -21.0312,151.49316 2.21959,46.72316 13.01526,97.21896 35.14767,145.64722 19.68812,43.20174 48.58184,85.04009 85.78293,120.1925 34.65425,32.82031 76.87871,60.11014 123.36154,78.12741 44.59417,17.34602 93.61374,26.33132 142.4762,25.41252 47.939053,-0.8428 96.324404,-11.2267 140.447824,-30.30953 44.152356,-19.02926 84.637996,-46.99835 117.703266,-80.9171 33.75637,-34.53835 60.28946,-75.71766 77.70853,-119.0342 18.21377,-45.12179 26.82817,-93.17588 26.45016,-139.1188 -0.33995,-49.29178 -10.95836,-96.8313 -28.43835,-138.29391 -19.56035,-46.57215 -47.91686,-86.15967 -78.80277,-116.77479 0,0 -7e-5,-5e-5 -7e-5,-5e-5 C 137.33585,359.19919 95.121305,334.30829 58.108898,319.0842 17.605109,302.35955 -18.750857,296.19939 -42.381921,293.71488 c -24.192913,-2.54358 -37.401654,-1.97841 -37.401654,-1.97841 z m -1.5e-5,-239.499997 c -78.70587,0.032 -156.78736,15.563375 -229.51437,45.653303 -72.70252,30.149034 -138.89675,74.378684 -194.57277,130.009504 l -1e-4,1.6e-4 c -55.6308,55.67595 -99.86042,121.87014 -130.00944,194.57263 l -4e-5,1.8e-4 c -30.08992,72.72697 -45.62126,150.80841 -45.65323,229.51422 0.032,78.70589 15.56333,156.78739 45.65326,229.5144 30.14906,72.70254 74.37873,138.89683 130.00953,194.57283 55.67604,55.6307 121.87026,99.8604 194.57277,130.0094 72.72701,30.0899 150.80851,45.6213 229.5144,45.6533 78.7058879,-0.032 156.787389,-15.5634 229.5144,-45.6533 72.70251,-30.149 138.89674,-74.3787 194.57277,-130.0094 55.6308,-55.676 99.86047,-121.87029 130.00953,-194.57283 30.08994,-72.727 45.62131,-150.80851 45.65327,-229.51439 -0.032,-78.70582 -15.5633,-156.78726 -45.65319,-229.51424 l -7e-5,-1.8e-4 C 444.1641,349.76958 399.93448,283.57539 344.30372,227.89942 l -1.3e-4,-1.4e-4 C 288.62757,172.26846 222.43334,128.03881 149.73082,97.889773 77.094688,67.837446 -0.88254879,52.307303 -79.488502,52.236666 L -79.60778,292.23639 c 0,0 -0.727218,-5.34034 0.685551,-14.30625 1.380799,-8.76301 5.003801,-21.80166 14.708389,-35.82537 9.602366,-13.87598 26.266967,-30.19066 54.2204625,-42.65467 27.3120445,-12.178 69.3101525,-22.0817 124.2539875,-15.92782 52.13141,5.84957 122.53124,27.47699 192.26244,82.15754 34.19631,26.84238 68.57942,62.05032 98.52867,106.61799 12.39856,18.45037 24.8481,39.72036 36.35184,63.80586 27.26963,57.18388 49.26688,130.55078 52.04454,215.88281 2.22108,69.64979 -8.54111,145.78133 -37.92823,221.72996 -26.27909,67.77545 -66.82773,133.71516 -122.319,191.25456 -51.82332,53.6581 -115.40236,98.6312 -188.08395,129.9731 -69.813058,30.0432 -146.282571,46.7437 -224.900502,47.6626 -77.148608,0.843 -154.422768,-13.5393 -226.928888,-42.7656 -72.49446,-29.287 -138.3708,-72.6656 -193.7423,-127.1834 -56.4011,-55.619 -100.43063,-121.34015 -130.39331,-192.41281 -31.15715,-74.07044 -46.24757,-151.92773 -46.62573,-228.25838 -0.33991,-81.83947 16.16449,-159.60415 44.63743,-229.08205 31.99029,-77.88157 77.95062,-143.05187 129.29928,-194.67155 0,0 1.2e-4,-9e-5 1.2e-4,-9e-5 63.09899,-63.32945 132.23646,-104.46596 194.26997,-130.268317 67.77743,-28.126922 127.62797,-38.327902 167.06473,-42.466572 40.24459,-4.223447 62.41869,-3.261458 62.41869,-3.261458 z"
               id="path3417"
               inkscape:connector-curvature="0"
               inkscape:path-effect="#path-effect3384"
               inkscape:original-d="m -79.783575,171.73647 c -127.370105,0 -249.523595,50.59784 -339.587855,140.66213 -90.06435,90.06423 -140.66213,212.21775 -140.66218,339.58784 3e-5,127.37014 50.59787,249.52558 140.66215,339.58987 90.06428,90.06419 212.21776,140.66009 339.587879,140.66009 127.37012,0 249.523621,-50.5959 339.587901,-140.66009 C 349.86859,901.51203 400.46643,779.35658 400.46647,651.98644 400.46641,524.61634 349.86855,402.46288 259.80428,312.39859 169.74002,222.33432 47.586537,171.73647 -79.783575,171.73647 Z m 4e-6,0.5 c 127.237668,1e-5 249.263741,50.54497 339.234351,140.51563 89.97069,89.97062 140.51565,211.99665 140.51561,339.23438 5e-5,127.23769 -50.54495,249.26372 -140.51559,339.23436 -89.97065,89.97056 -211.996667,140.51556 -339.23438,140.51556 -127.23771,0 -249.26372,-50.545 -339.23438,-140.51556 -89.97064,-89.97064 -140.51563,-211.99667 -140.51558,-339.23436 -3e-5,-127.23772 50.54492,-249.26376 140.51562,-339.23438 89.9706,-89.97066 211.99667,-140.51561 339.234349,-140.51563 z" />
          </g>
          <g
             transform="matrix(-1,0,0,-1,-159.13429,1303.4731)"
             id="g3419"
             style="fill:#236804">
            <path
               inkscape:original-d="m -495.69227,892.11145 c 63.68506,110.30575 168.58082,190.79485 291.61091,223.76065 123.030094,32.9659 254.117026,15.7081 364.42279,-47.9769 C 270.64719,1004.2101 351.13799,899.31337 384.10381,776.28327 417.06958,653.2532 399.81017,522.16723 336.12511,411.86147 272.44005,301.55571 167.54597,221.06563 44.515918,188.09979 -78.514177,155.13398 -209.60281,172.39269 -319.90857,236.07775 c -110.30576,63.68507 -190.79487,168.58082 -223.76068,291.61091 -32.96581,123.03009 -15.70808,254.11703 47.97698,364.42279 z m 0.43302,-0.25 c -63.61886,-110.19108 -80.85863,-241.14121 -47.9271,-364.0434 32.93155,-122.90218 113.3367,-227.68843 223.52778,-291.30728 110.19109,-63.61886 241.141217,-80.85863 364.043397,-47.92709 122.902153,32.93157 227.688413,113.3367 291.307273,223.52779 63.61885,110.19109 80.85861,241.14122 47.92711,364.04339 -32.93154,122.90218 -113.33669,227.68844 -223.52778,291.30724 -110.191085,63.6189 -241.141208,80.8587 -364.0434,47.9271 -122.90218,-32.9315 -227.68843,-113.3367 -291.30728,-223.52775 z"
               inkscape:path-effect="#path-effect3355"
               inkscape:connector-curvature="0"
               id="path3421"
               d="m -391.76922,832.11145 c -23.50671,-40.65081 -39.0847,-86.54229 -45.18222,-133.10282 -6.16095,-46.55221 -2.99126,-94.91191 9.19329,-140.26169 l 2e-5,-5e-5 c 12.12275,-45.36631 33.55757,-88.83186 62.16919,-126.06677 l 9e-5,-7e-5 c 28.56085,-37.27383 64.9975,-69.22799 105.68028,-92.67926 40.65108,-23.50688 86.54297,-39.08499 133.10403,-45.18275 46.552646,-6.16108 94.912533,-2.99172 140.262105,9.19283 l 5.4e-5,10e-6 c 45.365724,12.12257 88.830781,33.5575 126.065281,62.1692 37.27358,28.56102 69.22754,64.99812 92.67916,105.68139 23.50693,40.65133 39.0854,86.54282 45.18318,133.1032 6.16122,46.55187 2.99188,94.91118 -9.19253,140.26033 -12.12264,45.36614 -33.55783,88.8317 -62.16978,126.06694 l -7e-5,9e-5 c -28.56134,37.27419 -64.99832,69.22867 -105.68142,92.68012 -40.650803,23.50667 -86.542239,39.08465 -133.10272,45.18215 l -1.11e-4,0 c -46.552174,6.161 -94.911829,2.9913 -140.261539,-9.19326 l -1.1e-4,-3e-5 c -45.36635,-12.12275 -88.83194,-33.55758 -126.06687,-62.16921 -37.22727,-28.52518 -69.14816,-64.9065 -92.59136,-105.52786 L -599.46749,952.3671 c 0,0 4.05782,-3.62626 12.92259,-6.23486 9.08022,-2.672 22.2729,-4.11675 41.41596,-1.31343 19.65797,2.87873 42.41721,9.62093 73.89783,21.54511 18.30002,6.93166 80.90858,32.59619 115.71636,44.96228 43.99528,15.6411 102.90213,33.4588 168.66305,40.244 32.71937,3.3972 69.00644,4.2915 107.263229,0.6453 15.877249,-1.5132 33.204168,-3.9163 51.476538,-7.7448 43.361539,-9.046 93.44032,-26.452 141.712523,-57.53302 39.35365,-25.28381 77.68647,-59.88104 108.56037,-103.2624 27.56974,-38.65127 49.35595,-84.59315 61.19829,-134.38645 11.0961,-46.42162 13.61758,-96.63399 5.97957,-145.89795 -7.27498,-47.29269 -24.00328,-94.23753 -49.23025,-136.09424 -24.69938,-41.09505 -57.88476,-77.80605 -96.47269,-106.47663 -38.55601,-28.72243 -83.020777,-49.79947 -128.927922,-61.47545 -46.789274,-11.9647 -95.718148,-14.35338 -141.940898,-7.78047 -48.18351,6.78732 -94.10676,23.35408 -133.70547,46.65292 -42.51799,24.94029 -78.37924,57.90586 -105.54694,93.77527 -30.55249,40.22582 -50.65804,84.57702 -61.72854,126.63255 0,0 -1e-5,9e-5 -1e-5,9e-5 -13.69062,51.72421 -14.1395,100.72853 -8.81774,140.39426 5.76792,43.43965 18.61106,78.00492 28.27494,99.71228 9.89366,22.22347 16.98748,33.37999 16.98748,33.37999 z m -207.41307,119.75001 c 39.38064,68.14524 91.87196,128.00014 154.29411,175.93864 62.46109,47.8877 133.86221,83.0988 209.87792,103.5002 l 9e-5,0 c 76.03222,20.3397 155.472909,25.5466 233.5096526,15.3052 78.0284244,-10.3049 153.4146774,-35.8951 221.5919474,-75.2204 68.14531,-39.3806 128.00019,-91.8719 175.93865,-154.294 47.8877,-62.46112 83.09875,-133.86222 103.50021,-209.87788 l 2e-5,-9e-5 C 519.86996,731.18089 525.07684,651.74019 514.83542,573.70343 504.53056,495.67502 478.94039,420.28876 439.61515,352.11147 400.2345,283.96617 347.74317,224.11129 285.32102,176.17282 222.85991,128.28511 151.4588,93.074053 75.443128,72.672588 -0.58906043,52.332928 -80.02971,47.12603 -158.06642,57.367412 l -1.9e-4,2.4e-5 c -78.02841,10.304861 -153.41467,35.895044 -221.59196,75.220294 -68.14525,39.3806 -128.00008,91.87187 -175.93853,154.29396 l -1.2e-4,1.5e-4 c -47.88767,62.46106 -83.09872,133.86212 -103.50018,209.87774 l -5e-5,1.9e-4 c -20.33966,76.03224 -25.54655,155.47296 -15.30513,233.50973 10.29198,77.9309 35.83111,153.22625 75.07293,221.33633 l 207.90548,-119.8966 c 0,0 -4.26127,3.29997 -12.73235,6.55943 -8.27939,3.1857 -21.3827,6.56741 -38.37988,5.17485 -16.81814,-1.3779 -39.27936,-7.65253 -64.05026,-25.62896 -24.20248,-17.56392 -53.7784,-48.9835 -75.9209,-99.6432 -20.99983,-48.07193 -37.46983,-119.85367 -24.98071,-207.58295 6.14804,-43.03605 19.44747,-90.41665 43.06958,-138.63729 9.77921,-19.96265 21.97479,-41.37927 37.08158,-63.38455 35.88786,-52.20812 88.42683,-107.94176 160.93768,-153.01333 59.20797,-36.74838 130.52092,-65.493815 210.98793,-78.018151 C -83.576698,66.40572 -6.1969318,68.55202 71.379305,87.839152 143.76028,105.89039 214.4976,138.46493 277.98133,185.73807 c 60.92469,45.43828 113.62249,103.31259 153.72731,170.93823 39.30432,66.39118 65.486,140.50369 76.42833,217.90899 10.88392,77.42557 6.25507,156.16548 -13.27298,231.3775 -19.96687,76.65427 -54.86833,147.64554 -101.43771,209.13031 -48.5683,64.0181 -108.44948,116.0154 -174.36469,154.5083 -70.7051,41.2141 -146.30349,65.8032 -220.7095888,75.8838 -83.4425632,11.2364 -162.8618712,4.0188 -233.2401512,-14.6406 0,0 -1.4e-4,-10e-5 -1.4e-4,-10e-5 -86.3944,-22.9806 -156.5884,-62.2872 -209.95065,-103.1086 -58.24735,-44.6335 -97.00693,-91.3651 -120.3095,-123.449 -23.7799,-32.74111 -34.03385,-52.42544 -34.03385,-52.42544 z"
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000080;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
            <path
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000080;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
               d="m 232.20207,832.11145 c -23.45128,40.6828 -55.40548,77.11948 -92.67932,105.68035 -37.23492,28.61163 -80.700491,50.04645 -126.066819,62.1692 l -1.12e-4,10e-6 c -45.349753,12.18459 -93.709426,15.35419 -140.261609,9.19329 -46.56053,-6.0975 -92.452,-21.67547 -133.10281,-45.18215 -40.6831,-23.45144 -77.12008,-55.40593 -105.68142,-92.68012 -28.61199,-37.23526 -50.0472,-80.70085 -62.16985,-126.06703 -12.18441,-45.34915 -15.35374,-93.70846 -9.19253,-140.26033 6.09778,-46.56038 21.67626,-92.45187 45.18319,-133.10321 23.45162,-40.68326 55.40558,-77.12036 92.67916,-105.68138 37.23449,-28.6117 80.69955,-50.04663 126.06527,-62.1692 45.34959,-12.18456 93.709504,-15.35392 140.262178,-9.19284 46.56106,6.09775 92.452951,21.67586 133.104042,45.18273 40.68278,23.45129 77.11943,55.40545 105.68028,92.67925 l 7e-5,9e-5 c 28.61161,37.2349 50.04641,80.70043 62.16914,126.06671 l 3e-5,1.1e-4 c 12.18455,45.34978 15.35425,93.7095 9.19331,140.26171 -6.0899,46.50235 -21.63659,92.33731 -45.09412,132.95039 l 207.90549,119.89658 c 0,0 -5.16935,-1.70105 -11.86084,-8.07387 -6.85413,-6.5277 -14.70166,-17.23052 -21.84544,-35.21056 -7.33594,-18.46366 -12.87664,-41.54484 -18.2903,-74.76995 C 385.05204,814.48712 375.9739,747.43425 369.27934,711.10679 360.82731,665.1852 346.80445,605.26153 319.80017,544.91829 306.38254,514.88388 289.01351,483.0112 266.7274,451.70296 257.47826,438.70948 246.73365,424.90548 234.28192,410.99538 204.76706,377.9662 164.65362,343.29971 113.6006,317.03525 72.027358,295.59589 22.898871,279.69731 -30.107438,274.65041 c -47.257862,-4.55046 -97.937802,-0.44694 -146.981232,14.19395 -45.75035,13.6013 -90.49628,36.52383 -129.34111,67.77051 -37.31918,29.94666 -69.61045,67.90621 -93.24594,110.68176 -23.23968,41.93782 -38.43965,89.03271 -43.97513,136.78613 -5.59635,47.75169 -1.61722,96.79783 11.22466,142.39258 13.0329,46.50305 35.42868,90.07104 64.23237,126.81466 29.96974,38.3345 67.2786,69.82183 107.25534,92.46591 42.85791,24.35149 89.33755,38.92539 133.98521,44.51859 50.112842,6.3464 98.574897,1.5827 140.531316,-9.8578 0,0 8.3e-5,0 8.3e-5,0 51.639788,-14.00567 94.303211,-38.11909 125.993861,-62.56073 34.73587,-26.71498 58.24871,-55.1201 72.21589,-74.34295 14.29926,-19.67988 20.41419,-31.40157 20.41419,-31.40157 z m 207.41307,119.74999 c 39.32523,-68.17728 64.91541,-143.56353 75.22028,-221.59194 10.24142,-78.03674 5.03454,-157.47746 -15.30516,-233.50971 l -8e-5,-1.7e-4 C 479.12879,420.74396 443.91775,349.3429 396.03006,286.88183 348.09158,224.45967 288.23669,171.96836 220.09138,132.58775 151.91411,93.262478 76.527862,67.672289 -1.5005404,57.367431 -79.537315,47.126011 -158.97803,52.332901 -235.01028,72.672578 -311.02596,93.074042 -382.42706,128.2851 -444.88817,176.17281 c -62.42216,47.93847 -114.91348,107.79335 -154.29412,175.93865 -39.32525,68.17729 -64.91543,143.56355 -75.22029,221.59196 -10.24141,78.03676 -5.03453,157.47746 15.30512,233.5097 20.40143,76.01563 55.61245,147.41671 103.5001,209.87778 l 1.2e-4,2e-4 c 47.93846,62.4221 107.79334,114.9134 175.93867,154.294 68.1772,39.3253 143.56339,64.9155 221.59175,75.2204 l 1.8e-4,0 c 78.036713,10.2414 157.47736965,5.0345 233.50956,-15.3052 l 1.83e-4,0 c 76.015707,-20.4014 147.416827,-55.6125 209.877917,-103.5002 62.34415,-47.8786 114.78227,-107.6438 154.14642,-175.68321 L 231.68121,832.01373 c 0,0 4.98848,2.04038 12.0468,7.74683 6.89859,5.57731 16.3789,15.23425 23.67149,30.65052 7.21577,15.25389 13.01239,37.84319 9.8298,68.28364 -3.10957,29.74192 -15.53176,71.06518 -48.3331,115.57098 -31.13158,42.2224 -85.06139,92.3767 -167.281738,125.4254 -40.344336,16.1937 -88.02686,28.3664 -141.598224,32.0194 -22.177768,1.5122 -46.822888,1.6589 -73.433408,-0.4214 -63.1575,-4.9757 -137.69373,-22.609 -212.98226,-62.8695 -61.42904,-32.9013 -121.97979,-80.2874 -173.05967,-143.7118 -45.55572,-56.64604 -82.38685,-124.73203 -104.47182,-201.55859 -20.55765,-71.70938 -27.71594,-149.25697 -18.51806,-227.87206 8.88836,-75.48147 32.66008,-150.05626 71.1732,-218.60087 37.84428,-67.23413 88.93676,-126.96438 150.50055,-175.14338 61.61055,-48.13853 132.11574,-83.499785 207.01529,-104.194006 C -157.39197,56.303583 -78.460993,51.033494 -1.9289287,60.621375 77.796522,70.673715 152.76812,96.533674 219.06149,134.3715 c 71.04501,40.62537 130.13901,93.80093 176.07216,153.19817 51.45227,66.64519 84.91125,139.03316 103.94087,209.31224 0,0 10e-6,1.5e-4 10e-6,1.5e-4 23.29542,86.31005 24.35195,166.75311 15.68069,233.37689 -9.53008,72.76043 -30.62105,129.69302 -46.75524,165.91559 -16.46468,36.96456 -28.38484,55.6869 -28.38484,55.6869 z"
               id="path3423"
               inkscape:connector-curvature="0"
               inkscape:path-effect="#path-effect3380"
               inkscape:original-d="M 336.12511,892.11145 C 399.81016,781.8057 417.06789,650.71876 384.10206,527.68867 351.13632,404.65854 270.64716,299.76282 160.34145,236.07773 50.035657,172.39269 -81.052976,155.13398 -204.08308,188.09979 -327.11313,221.06563 -432.0072,301.5557 -495.69226,411.86146 c -63.68506,110.30576 -80.94448,241.39174 -47.97871,364.42181 32.96582,123.03009 113.45662,227.92683 223.76238,291.61193 110.30577,63.685 241.392707,80.9427 364.422795,47.9769 C 167.54429,1082.9063 272.44005,1002.4172 336.12511,892.11145 Z m -0.43302,-0.25 c -63.61884,110.19105 -168.4051,190.59625 -291.30728,223.52775 -122.902185,32.9316 -253.85231,15.6918 -364.04339,-47.9271 -110.1911,-63.6188 -190.59624,-168.40507 -223.52778,-291.30725 -32.9315,-122.90217 -15.69175,-253.8523 47.92711,-364.04339 63.61886,-110.19109 168.40511,-190.59622 291.30727,-223.52779 122.902176,-32.93154 253.852314,-15.69177 364.04336,47.92712 110.19112,63.61883 190.59629,168.40506 223.52778,291.30728 32.93158,122.90216 15.69176,253.85231 -47.92707,364.04338 z" />
            <path
               inkscape:original-d="m -79.783575,171.73647 c -127.370105,0 -249.523595,50.59784 -339.587855,140.66213 -90.06435,90.06423 -140.66213,212.21775 -140.66218,339.58784 3e-5,127.37014 50.59787,249.52558 140.66215,339.58987 90.06428,90.06419 212.21776,140.66009 339.587879,140.66009 127.37012,0 249.523621,-50.5959 339.587901,-140.66009 C 349.86859,901.51203 400.46643,779.35658 400.46647,651.98644 400.46641,524.61634 349.86855,402.46288 259.80428,312.39859 169.74002,222.33432 47.586537,171.73647 -79.783575,171.73647 Z m 4e-6,0.5 c 127.237668,1e-5 249.263741,50.54497 339.234351,140.51563 89.97069,89.97062 140.51565,211.99665 140.51561,339.23438 5e-5,127.23769 -50.54495,249.26372 -140.51559,339.23436 -89.97065,89.97056 -211.996667,140.51556 -339.23438,140.51556 -127.23771,0 -249.26372,-50.545 -339.23438,-140.51556 -89.97064,-89.97064 -140.51563,-211.99667 -140.51558,-339.23436 -3e-5,-127.23772 50.54492,-249.26376 140.51562,-339.23438 89.9706,-89.97066 211.99667,-140.51561 339.234349,-140.51563 z"
               inkscape:path-effect="#path-effect3384"
               inkscape:connector-curvature="0"
               id="path3425"
               d="m -79.783575,291.73647 c 46.957977,-0.032 94.490157,9.4228 137.86152,27.42246 43.395855,17.94057 83.691745,44.86545 116.873515,78.09246 l 6e-5,10e-5 c 33.22701,33.18177 60.15187,73.47763 78.09244,116.87347 17.99967,43.37135 27.45449,90.90352 27.42251,137.86149 0.032,46.95832 -9.42291,94.49092 -27.42263,137.86285 l -6e-5,10e-5 c -17.94067,43.3963 -44.86535,83.6925 -78.09225,116.87408 -33.18132,33.22657 -73.47704,60.15094 -116.872751,78.0911 -43.371369,17.99932 -90.903806,27.45372 -137.86236,27.42182 -46.958549,0.032 -94.490979,-9.4225 -137.862349,-27.42182 -43.3957,-17.94016 -83.69142,-44.86453 -116.87274,-78.0911 -33.22691,-33.18159 -60.15159,-73.47778 -78.09227,-116.87408 l -5e-5,-10e-5 c -17.99972,-43.37194 -27.45463,-90.90453 -27.42262,-137.86285 -0.032,-46.95796 9.42281,-94.4901 27.42244,-137.86143 l 4e-5,-10e-5 c 17.94057,-43.39583 44.86542,-83.69168 78.09241,-116.87341 l 8e-5,-8e-5 c 33.18178,-33.22703 73.47768,-60.15192 116.87355,-78.0925 43.31716,-17.97717 90.78475,-27.43082 137.68547,-27.42254 L -80.078881,51.736666 c 0,0 1.111522,5.327313 -1.061749,14.30872 -2.226095,9.199708 -7.571244,21.347272 -19.57053,36.523994 -12.32203,15.58493 -29.54056,31.92392 -55.60752,53.22484 -15.15301,12.38246 -68.68341,53.77078 -96.79664,77.73217 -35.54325,30.28047 -80.42724,72.38646 -119.18387,125.94447 -19.30175,26.63721 -38.21979,57.61557 -54.19046,92.57003 -6.62812,14.50673 -13.21043,30.71383 -19.03107,48.4524 -13.84668,42.07521 -23.81202,94.14772 -21.0312,151.49316 2.21959,46.72316 13.01526,97.21896 35.14767,145.64722 19.68812,43.20174 48.58184,85.04009 85.78293,120.1925 34.65425,32.82031 76.87871,60.11014 123.36154,78.12741 44.59417,17.34602 93.61374,26.33132 142.4762,25.41252 47.939053,-0.8428 96.324404,-11.2267 140.447824,-30.30953 44.152356,-19.02926 84.637996,-46.99835 117.703266,-80.9171 33.75637,-34.53835 60.28946,-75.71766 77.70853,-119.0342 18.21377,-45.12179 26.82817,-93.17588 26.45016,-139.1188 -0.33995,-49.29178 -10.95836,-96.8313 -28.43835,-138.29391 -19.56035,-46.57215 -47.91686,-86.15967 -78.80277,-116.77479 0,0 -7e-5,-5e-5 -7e-5,-5e-5 C 137.33585,359.19919 95.121305,334.30829 58.108898,319.0842 17.605109,302.35955 -18.750857,296.19939 -42.381921,293.71488 c -24.192913,-2.54358 -37.401654,-1.97841 -37.401654,-1.97841 z m -1.5e-5,-239.499997 c -78.70587,0.032 -156.78736,15.563375 -229.51437,45.653303 -72.70252,30.149034 -138.89675,74.378684 -194.57277,130.009504 l -1e-4,1.6e-4 c -55.6308,55.67595 -99.86042,121.87014 -130.00944,194.57263 l -4e-5,1.8e-4 c -30.08992,72.72697 -45.62126,150.80841 -45.65323,229.51422 0.032,78.70589 15.56333,156.78739 45.65326,229.5144 30.14906,72.70254 74.37873,138.89683 130.00953,194.57283 55.67604,55.6307 121.87026,99.8604 194.57277,130.0094 72.72701,30.0899 150.80851,45.6213 229.5144,45.6533 78.7058879,-0.032 156.787389,-15.5634 229.5144,-45.6533 72.70251,-30.149 138.89674,-74.3787 194.57277,-130.0094 55.6308,-55.676 99.86047,-121.87029 130.00953,-194.57283 30.08994,-72.727 45.62131,-150.80851 45.65327,-229.51439 -0.032,-78.70582 -15.5633,-156.78726 -45.65319,-229.51424 l -7e-5,-1.8e-4 C 444.1641,349.76958 399.93448,283.57539 344.30372,227.89942 l -1.3e-4,-1.4e-4 C 288.62757,172.26846 222.43334,128.03881 149.73082,97.889773 77.094688,67.837446 -0.88254879,52.307303 -79.488502,52.236666 L -79.60778,292.23639 c 0,0 -0.727218,-5.34034 0.685551,-14.30625 1.380799,-8.76301 5.003801,-21.80166 14.708389,-35.82537 9.602366,-13.87598 26.266967,-30.19066 54.2204625,-42.65467 27.3120445,-12.178 69.3101525,-22.0817 124.2539875,-15.92782 52.13141,5.84957 122.53124,27.47699 192.26244,82.15754 34.19631,26.84238 68.57942,62.05032 98.52867,106.61799 12.39856,18.45037 24.8481,39.72036 36.35184,63.80586 27.26963,57.18388 49.26688,130.55078 52.04454,215.88281 2.22108,69.64979 -8.54111,145.78133 -37.92823,221.72996 -26.27909,67.77545 -66.82773,133.71516 -122.319,191.25456 -51.82332,53.6581 -115.40236,98.6312 -188.08395,129.9731 -69.813058,30.0432 -146.282571,46.7437 -224.900502,47.6626 -77.148608,0.843 -154.422768,-13.5393 -226.928888,-42.7656 -72.49446,-29.287 -138.3708,-72.6656 -193.7423,-127.1834 -56.4011,-55.619 -100.43063,-121.34015 -130.39331,-192.41281 -31.15715,-74.07044 -46.24757,-151.92773 -46.62573,-228.25838 -0.33991,-81.83947 16.16449,-159.60415 44.63743,-229.08205 31.99029,-77.88157 77.95062,-143.05187 129.29928,-194.67155 0,0 1.2e-4,-9e-5 1.2e-4,-9e-5 63.09899,-63.32945 132.23646,-104.46596 194.26997,-130.268317 67.77743,-28.126922 127.62797,-38.327902 167.06473,-42.466572 40.24459,-4.223447 62.41869,-3.261458 62.41869,-3.261458 z"
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000080;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
          </g>
        </g>
        <g
           id="g3427"
           transform="matrix(-0.18751051,0.32477772,-0.32477772,-0.18751051,118.59827,804.07133)">
          <g
             id="g3429"
             style="fill:#ff0000">
            <path
               inkscape:original-d="m -495.69227,892.11145 c 63.68506,110.30575 168.58082,190.79485 291.61091,223.76065 123.030094,32.9659 254.117026,15.7081 364.42279,-47.9769 C 270.64719,1004.2101 351.13799,899.31337 384.10381,776.28327 417.06958,653.2532 399.81017,522.16723 336.12511,411.86147 272.44005,301.55571 167.54597,221.06563 44.515918,188.09979 -78.514177,155.13398 -209.60281,172.39269 -319.90857,236.07775 c -110.30576,63.68507 -190.79487,168.58082 -223.76068,291.61091 -32.96581,123.03009 -15.70808,254.11703 47.97698,364.42279 z m 0.43302,-0.25 c -63.61886,-110.19108 -80.85863,-241.14121 -47.9271,-364.0434 32.93155,-122.90218 113.3367,-227.68843 223.52778,-291.30728 110.19109,-63.61886 241.141217,-80.85863 364.043397,-47.92709 122.902153,32.93157 227.688413,113.3367 291.307273,223.52779 63.61885,110.19109 80.85861,241.14122 47.92711,364.04339 -32.93154,122.90218 -113.33669,227.68844 -223.52778,291.30724 -110.191085,63.6189 -241.141208,80.8587 -364.0434,47.9271 -122.90218,-32.9315 -227.68843,-113.3367 -291.30728,-223.52775 z"
               inkscape:path-effect="#path-effect3355"
               inkscape:connector-curvature="0"
               id="path3431"
               d="m -391.76922,832.11145 c -23.50671,-40.65081 -39.0847,-86.54229 -45.18222,-133.10282 -6.16095,-46.55221 -2.99126,-94.91191 9.19329,-140.26169 l 2e-5,-5e-5 c 12.12275,-45.36631 33.55757,-88.83186 62.16919,-126.06677 l 9e-5,-7e-5 c 28.56085,-37.27383 64.9975,-69.22799 105.68028,-92.67926 40.65108,-23.50688 86.54297,-39.08499 133.10403,-45.18275 46.552646,-6.16108 94.912533,-2.99172 140.262105,9.19283 l 5.4e-5,10e-6 c 45.365724,12.12257 88.830781,33.5575 126.065281,62.1692 37.27358,28.56102 69.22754,64.99812 92.67916,105.68139 23.50693,40.65133 39.0854,86.54282 45.18318,133.1032 6.16122,46.55187 2.99188,94.91118 -9.19253,140.26033 -12.12264,45.36614 -33.55783,88.8317 -62.16978,126.06694 l -7e-5,9e-5 c -28.56134,37.27419 -64.99832,69.22867 -105.68142,92.68012 -40.650803,23.50667 -86.542239,39.08465 -133.10272,45.18215 l -1.11e-4,0 c -46.552174,6.161 -94.911829,2.9913 -140.261539,-9.19326 l -1.1e-4,-3e-5 c -45.36635,-12.12275 -88.83194,-33.55758 -126.06687,-62.16921 -37.22727,-28.52518 -69.14816,-64.9065 -92.59136,-105.52786 L -599.46749,952.3671 c 0,0 4.05782,-3.62626 12.92259,-6.23486 9.08022,-2.672 22.2729,-4.11675 41.41596,-1.31343 19.65797,2.87873 42.41721,9.62093 73.89783,21.54511 18.30002,6.93166 80.90858,32.59619 115.71636,44.96228 43.99528,15.6411 102.90213,33.4588 168.66305,40.244 32.71937,3.3972 69.00644,4.2915 107.263229,0.6453 15.877249,-1.5132 33.204168,-3.9163 51.476538,-7.7448 43.361539,-9.046 93.44032,-26.452 141.712523,-57.53302 39.35365,-25.28381 77.68647,-59.88104 108.56037,-103.2624 27.56974,-38.65127 49.35595,-84.59315 61.19829,-134.38645 11.0961,-46.42162 13.61758,-96.63399 5.97957,-145.89795 -7.27498,-47.29269 -24.00328,-94.23753 -49.23025,-136.09424 -24.69938,-41.09505 -57.88476,-77.80605 -96.47269,-106.47663 -38.55601,-28.72243 -83.020777,-49.79947 -128.927922,-61.47545 -46.789274,-11.9647 -95.718148,-14.35338 -141.940898,-7.78047 -48.18351,6.78732 -94.10676,23.35408 -133.70547,46.65292 -42.51799,24.94029 -78.37924,57.90586 -105.54694,93.77527 -30.55249,40.22582 -50.65804,84.57702 -61.72854,126.63255 0,0 -1e-5,9e-5 -1e-5,9e-5 -13.69062,51.72421 -14.1395,100.72853 -8.81774,140.39426 5.76792,43.43965 18.61106,78.00492 28.27494,99.71228 9.89366,22.22347 16.98748,33.37999 16.98748,33.37999 z m -207.41307,119.75001 c 39.38064,68.14524 91.87196,128.00014 154.29411,175.93864 62.46109,47.8877 133.86221,83.0988 209.87792,103.5002 l 9e-5,0 c 76.03222,20.3397 155.472909,25.5466 233.5096526,15.3052 78.0284244,-10.3049 153.4146774,-35.8951 221.5919474,-75.2204 68.14531,-39.3806 128.00019,-91.8719 175.93865,-154.294 47.8877,-62.46112 83.09875,-133.86222 103.50021,-209.87788 l 2e-5,-9e-5 C 519.86996,731.18089 525.07684,651.74019 514.83542,573.70343 504.53056,495.67502 478.94039,420.28876 439.61515,352.11147 400.2345,283.96617 347.74317,224.11129 285.32102,176.17282 222.85991,128.28511 151.4588,93.074053 75.443128,72.672588 -0.58906043,52.332928 -80.02971,47.12603 -158.06642,57.367412 l -1.9e-4,2.4e-5 c -78.02841,10.304861 -153.41467,35.895044 -221.59196,75.220294 -68.14525,39.3806 -128.00008,91.87187 -175.93853,154.29396 l -1.2e-4,1.5e-4 c -47.88767,62.46106 -83.09872,133.86212 -103.50018,209.87774 l -5e-5,1.9e-4 c -20.33966,76.03224 -25.54655,155.47296 -15.30513,233.50973 10.29198,77.9309 35.83111,153.22625 75.07293,221.33633 l 207.90548,-119.8966 c 0,0 -4.26127,3.29997 -12.73235,6.55943 -8.27939,3.1857 -21.3827,6.56741 -38.37988,5.17485 -16.81814,-1.3779 -39.27936,-7.65253 -64.05026,-25.62896 -24.20248,-17.56392 -53.7784,-48.9835 -75.9209,-99.6432 -20.99983,-48.07193 -37.46983,-119.85367 -24.98071,-207.58295 6.14804,-43.03605 19.44747,-90.41665 43.06958,-138.63729 9.77921,-19.96265 21.97479,-41.37927 37.08158,-63.38455 35.88786,-52.20812 88.42683,-107.94176 160.93768,-153.01333 59.20797,-36.74838 130.52092,-65.493815 210.98793,-78.018151 C -83.576698,66.40572 -6.1969318,68.55202 71.379305,87.839152 143.76028,105.89039 214.4976,138.46493 277.98133,185.73807 c 60.92469,45.43828 113.62249,103.31259 153.72731,170.93823 39.30432,66.39118 65.486,140.50369 76.42833,217.90899 10.88392,77.42557 6.25507,156.16548 -13.27298,231.3775 -19.96687,76.65427 -54.86833,147.64554 -101.43771,209.13031 -48.5683,64.0181 -108.44948,116.0154 -174.36469,154.5083 -70.7051,41.2141 -146.30349,65.8032 -220.7095888,75.8838 -83.4425632,11.2364 -162.8618712,4.0188 -233.2401512,-14.6406 0,0 -1.4e-4,-10e-5 -1.4e-4,-10e-5 -86.3944,-22.9806 -156.5884,-62.2872 -209.95065,-103.1086 -58.24735,-44.6335 -97.00693,-91.3651 -120.3095,-123.449 -23.7799,-32.74111 -34.03385,-52.42544 -34.03385,-52.42544 z"
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
            <path
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
               d="m 232.20207,832.11145 c -23.45128,40.6828 -55.40548,77.11948 -92.67932,105.68035 -37.23492,28.61163 -80.700491,50.04645 -126.066819,62.1692 l -1.12e-4,10e-6 c -45.349753,12.18459 -93.709426,15.35419 -140.261609,9.19329 -46.56053,-6.0975 -92.452,-21.67547 -133.10281,-45.18215 -40.6831,-23.45144 -77.12008,-55.40593 -105.68142,-92.68012 -28.61199,-37.23526 -50.0472,-80.70085 -62.16985,-126.06703 -12.18441,-45.34915 -15.35374,-93.70846 -9.19253,-140.26033 6.09778,-46.56038 21.67626,-92.45187 45.18319,-133.10321 23.45162,-40.68326 55.40558,-77.12036 92.67916,-105.68138 37.23449,-28.6117 80.69955,-50.04663 126.06527,-62.1692 45.34959,-12.18456 93.709504,-15.35392 140.262178,-9.19284 46.56106,6.09775 92.452951,21.67586 133.104042,45.18273 40.68278,23.45129 77.11943,55.40545 105.68028,92.67925 l 7e-5,9e-5 c 28.61161,37.2349 50.04641,80.70043 62.16914,126.06671 l 3e-5,1.1e-4 c 12.18455,45.34978 15.35425,93.7095 9.19331,140.26171 -6.0899,46.50235 -21.63659,92.33731 -45.09412,132.95039 l 207.90549,119.89658 c 0,0 -5.16935,-1.70105 -11.86084,-8.07387 -6.85413,-6.5277 -14.70166,-17.23052 -21.84544,-35.21056 -7.33594,-18.46366 -12.87664,-41.54484 -18.2903,-74.76995 C 385.05204,814.48712 375.9739,747.43425 369.27934,711.10679 360.82731,665.1852 346.80445,605.26153 319.80017,544.91829 306.38254,514.88388 289.01351,483.0112 266.7274,451.70296 257.47826,438.70948 246.73365,424.90548 234.28192,410.99538 204.76706,377.9662 164.65362,343.29971 113.6006,317.03525 72.027358,295.59589 22.898871,279.69731 -30.107438,274.65041 c -47.257862,-4.55046 -97.937802,-0.44694 -146.981232,14.19395 -45.75035,13.6013 -90.49628,36.52383 -129.34111,67.77051 -37.31918,29.94666 -69.61045,67.90621 -93.24594,110.68176 -23.23968,41.93782 -38.43965,89.03271 -43.97513,136.78613 -5.59635,47.75169 -1.61722,96.79783 11.22466,142.39258 13.0329,46.50305 35.42868,90.07104 64.23237,126.81466 29.96974,38.3345 67.2786,69.82183 107.25534,92.46591 42.85791,24.35149 89.33755,38.92539 133.98521,44.51859 50.112842,6.3464 98.574897,1.5827 140.531316,-9.8578 0,0 8.3e-5,0 8.3e-5,0 51.639788,-14.00567 94.303211,-38.11909 125.993861,-62.56073 34.73587,-26.71498 58.24871,-55.1201 72.21589,-74.34295 14.29926,-19.67988 20.41419,-31.40157 20.41419,-31.40157 z m 207.41307,119.74999 c 39.32523,-68.17728 64.91541,-143.56353 75.22028,-221.59194 10.24142,-78.03674 5.03454,-157.47746 -15.30516,-233.50971 l -8e-5,-1.7e-4 C 479.12879,420.74396 443.91775,349.3429 396.03006,286.88183 348.09158,224.45967 288.23669,171.96836 220.09138,132.58775 151.91411,93.262478 76.527862,67.672289 -1.5005404,57.367431 -79.537315,47.126011 -158.97803,52.332901 -235.01028,72.672578 -311.02596,93.074042 -382.42706,128.2851 -444.88817,176.17281 c -62.42216,47.93847 -114.91348,107.79335 -154.29412,175.93865 -39.32525,68.17729 -64.91543,143.56355 -75.22029,221.59196 -10.24141,78.03676 -5.03453,157.47746 15.30512,233.5097 20.40143,76.01563 55.61245,147.41671 103.5001,209.87778 l 1.2e-4,2e-4 c 47.93846,62.4221 107.79334,114.9134 175.93867,154.294 68.1772,39.3253 143.56339,64.9155 221.59175,75.2204 l 1.8e-4,0 c 78.036713,10.2414 157.47736965,5.0345 233.50956,-15.3052 l 1.83e-4,0 c 76.015707,-20.4014 147.416827,-55.6125 209.877917,-103.5002 62.34415,-47.8786 114.78227,-107.6438 154.14642,-175.68321 L 231.68121,832.01373 c 0,0 4.98848,2.04038 12.0468,7.74683 6.89859,5.57731 16.3789,15.23425 23.67149,30.65052 7.21577,15.25389 13.01239,37.84319 9.8298,68.28364 -3.10957,29.74192 -15.53176,71.06518 -48.3331,115.57098 -31.13158,42.2224 -85.06139,92.3767 -167.281738,125.4254 -40.344336,16.1937 -88.02686,28.3664 -141.598224,32.0194 -22.177768,1.5122 -46.822888,1.6589 -73.433408,-0.4214 -63.1575,-4.9757 -137.69373,-22.609 -212.98226,-62.8695 -61.42904,-32.9013 -121.97979,-80.2874 -173.05967,-143.7118 -45.55572,-56.64604 -82.38685,-124.73203 -104.47182,-201.55859 -20.55765,-71.70938 -27.71594,-149.25697 -18.51806,-227.87206 8.88836,-75.48147 32.66008,-150.05626 71.1732,-218.60087 37.84428,-67.23413 88.93676,-126.96438 150.50055,-175.14338 61.61055,-48.13853 132.11574,-83.499785 207.01529,-104.194006 C -157.39197,56.303583 -78.460993,51.033494 -1.9289287,60.621375 77.796522,70.673715 152.76812,96.533674 219.06149,134.3715 c 71.04501,40.62537 130.13901,93.80093 176.07216,153.19817 51.45227,66.64519 84.91125,139.03316 103.94087,209.31224 0,0 10e-6,1.5e-4 10e-6,1.5e-4 23.29542,86.31005 24.35195,166.75311 15.68069,233.37689 -9.53008,72.76043 -30.62105,129.69302 -46.75524,165.91559 -16.46468,36.96456 -28.38484,55.6869 -28.38484,55.6869 z"
               id="path3433"
               inkscape:connector-curvature="0"
               inkscape:path-effect="#path-effect3380"
               inkscape:original-d="M 336.12511,892.11145 C 399.81016,781.8057 417.06789,650.71876 384.10206,527.68867 351.13632,404.65854 270.64716,299.76282 160.34145,236.07773 50.035657,172.39269 -81.052976,155.13398 -204.08308,188.09979 -327.11313,221.06563 -432.0072,301.5557 -495.69226,411.86146 c -63.68506,110.30576 -80.94448,241.39174 -47.97871,364.42181 32.96582,123.03009 113.45662,227.92683 223.76238,291.61193 110.30577,63.685 241.392707,80.9427 364.422795,47.9769 C 167.54429,1082.9063 272.44005,1002.4172 336.12511,892.11145 Z m -0.43302,-0.25 c -63.61884,110.19105 -168.4051,190.59625 -291.30728,223.52775 -122.902185,32.9316 -253.85231,15.6918 -364.04339,-47.9271 -110.1911,-63.6188 -190.59624,-168.40507 -223.52778,-291.30725 -32.9315,-122.90217 -15.69175,-253.8523 47.92711,-364.04339 63.61886,-110.19109 168.40511,-190.59622 291.30727,-223.52779 122.902176,-32.93154 253.852314,-15.69177 364.04336,47.92712 110.19112,63.61883 190.59629,168.40506 223.52778,291.30728 32.93158,122.90216 15.69176,253.85231 -47.92707,364.04338 z" />
            <path
               inkscape:original-d="m -79.783575,171.73647 c -127.370105,0 -249.523595,50.59784 -339.587855,140.66213 -90.06435,90.06423 -140.66213,212.21775 -140.66218,339.58784 3e-5,127.37014 50.59787,249.52558 140.66215,339.58987 90.06428,90.06419 212.21776,140.66009 339.587879,140.66009 127.37012,0 249.523621,-50.5959 339.587901,-140.66009 C 349.86859,901.51203 400.46643,779.35658 400.46647,651.98644 400.46641,524.61634 349.86855,402.46288 259.80428,312.39859 169.74002,222.33432 47.586537,171.73647 -79.783575,171.73647 Z m 4e-6,0.5 c 127.237668,1e-5 249.263741,50.54497 339.234351,140.51563 89.97069,89.97062 140.51565,211.99665 140.51561,339.23438 5e-5,127.23769 -50.54495,249.26372 -140.51559,339.23436 -89.97065,89.97056 -211.996667,140.51556 -339.23438,140.51556 -127.23771,0 -249.26372,-50.545 -339.23438,-140.51556 -89.97064,-89.97064 -140.51563,-211.99667 -140.51558,-339.23436 -3e-5,-127.23772 50.54492,-249.26376 140.51562,-339.23438 89.9706,-89.97066 211.99667,-140.51561 339.234349,-140.51563 z"
               inkscape:path-effect="#path-effect3384"
               inkscape:connector-curvature="0"
               id="path3435"
               d="m -79.783575,291.73647 c 46.957977,-0.032 94.490157,9.4228 137.86152,27.42246 43.395855,17.94057 83.691745,44.86545 116.873515,78.09246 l 6e-5,10e-5 c 33.22701,33.18177 60.15187,73.47763 78.09244,116.87347 17.99967,43.37135 27.45449,90.90352 27.42251,137.86149 0.032,46.95832 -9.42291,94.49092 -27.42263,137.86285 l -6e-5,10e-5 c -17.94067,43.3963 -44.86535,83.6925 -78.09225,116.87408 -33.18132,33.22657 -73.47704,60.15094 -116.872751,78.0911 -43.371369,17.99932 -90.903806,27.45372 -137.86236,27.42182 -46.958549,0.032 -94.490979,-9.4225 -137.862349,-27.42182 -43.3957,-17.94016 -83.69142,-44.86453 -116.87274,-78.0911 -33.22691,-33.18159 -60.15159,-73.47778 -78.09227,-116.87408 l -5e-5,-10e-5 c -17.99972,-43.37194 -27.45463,-90.90453 -27.42262,-137.86285 -0.032,-46.95796 9.42281,-94.4901 27.42244,-137.86143 l 4e-5,-10e-5 c 17.94057,-43.39583 44.86542,-83.69168 78.09241,-116.87341 l 8e-5,-8e-5 c 33.18178,-33.22703 73.47768,-60.15192 116.87355,-78.0925 43.31716,-17.97717 90.78475,-27.43082 137.68547,-27.42254 L -80.078881,51.736666 c 0,0 1.111522,5.327313 -1.061749,14.30872 -2.226095,9.199708 -7.571244,21.347272 -19.57053,36.523994 -12.32203,15.58493 -29.54056,31.92392 -55.60752,53.22484 -15.15301,12.38246 -68.68341,53.77078 -96.79664,77.73217 -35.54325,30.28047 -80.42724,72.38646 -119.18387,125.94447 -19.30175,26.63721 -38.21979,57.61557 -54.19046,92.57003 -6.62812,14.50673 -13.21043,30.71383 -19.03107,48.4524 -13.84668,42.07521 -23.81202,94.14772 -21.0312,151.49316 2.21959,46.72316 13.01526,97.21896 35.14767,145.64722 19.68812,43.20174 48.58184,85.04009 85.78293,120.1925 34.65425,32.82031 76.87871,60.11014 123.36154,78.12741 44.59417,17.34602 93.61374,26.33132 142.4762,25.41252 47.939053,-0.8428 96.324404,-11.2267 140.447824,-30.30953 44.152356,-19.02926 84.637996,-46.99835 117.703266,-80.9171 33.75637,-34.53835 60.28946,-75.71766 77.70853,-119.0342 18.21377,-45.12179 26.82817,-93.17588 26.45016,-139.1188 -0.33995,-49.29178 -10.95836,-96.8313 -28.43835,-138.29391 -19.56035,-46.57215 -47.91686,-86.15967 -78.80277,-116.77479 0,0 -7e-5,-5e-5 -7e-5,-5e-5 C 137.33585,359.19919 95.121305,334.30829 58.108898,319.0842 17.605109,302.35955 -18.750857,296.19939 -42.381921,293.71488 c -24.192913,-2.54358 -37.401654,-1.97841 -37.401654,-1.97841 z m -1.5e-5,-239.499997 c -78.70587,0.032 -156.78736,15.563375 -229.51437,45.653303 -72.70252,30.149034 -138.89675,74.378684 -194.57277,130.009504 l -1e-4,1.6e-4 c -55.6308,55.67595 -99.86042,121.87014 -130.00944,194.57263 l -4e-5,1.8e-4 c -30.08992,72.72697 -45.62126,150.80841 -45.65323,229.51422 0.032,78.70589 15.56333,156.78739 45.65326,229.5144 30.14906,72.70254 74.37873,138.89683 130.00953,194.57283 55.67604,55.6307 121.87026,99.8604 194.57277,130.0094 72.72701,30.0899 150.80851,45.6213 229.5144,45.6533 78.7058879,-0.032 156.787389,-15.5634 229.5144,-45.6533 72.70251,-30.149 138.89674,-74.3787 194.57277,-130.0094 55.6308,-55.676 99.86047,-121.87029 130.00953,-194.57283 30.08994,-72.727 45.62131,-150.80851 45.65327,-229.51439 -0.032,-78.70582 -15.5633,-156.78726 -45.65319,-229.51424 l -7e-5,-1.8e-4 C 444.1641,349.76958 399.93448,283.57539 344.30372,227.89942 l -1.3e-4,-1.4e-4 C 288.62757,172.26846 222.43334,128.03881 149.73082,97.889773 77.094688,67.837446 -0.88254879,52.307303 -79.488502,52.236666 L -79.60778,292.23639 c 0,0 -0.727218,-5.34034 0.685551,-14.30625 1.380799,-8.76301 5.003801,-21.80166 14.708389,-35.82537 9.602366,-13.87598 26.266967,-30.19066 54.2204625,-42.65467 27.3120445,-12.178 69.3101525,-22.0817 124.2539875,-15.92782 52.13141,5.84957 122.53124,27.47699 192.26244,82.15754 34.19631,26.84238 68.57942,62.05032 98.52867,106.61799 12.39856,18.45037 24.8481,39.72036 36.35184,63.80586 27.26963,57.18388 49.26688,130.55078 52.04454,215.88281 2.22108,69.64979 -8.54111,145.78133 -37.92823,221.72996 -26.27909,67.77545 -66.82773,133.71516 -122.319,191.25456 -51.82332,53.6581 -115.40236,98.6312 -188.08395,129.9731 -69.813058,30.0432 -146.282571,46.7437 -224.900502,47.6626 -77.148608,0.843 -154.422768,-13.5393 -226.928888,-42.7656 -72.49446,-29.287 -138.3708,-72.6656 -193.7423,-127.1834 -56.4011,-55.619 -100.43063,-121.34015 -130.39331,-192.41281 -31.15715,-74.07044 -46.24757,-151.92773 -46.62573,-228.25838 -0.33991,-81.83947 16.16449,-159.60415 44.63743,-229.08205 31.99029,-77.88157 77.95062,-143.05187 129.29928,-194.67155 0,0 1.2e-4,-9e-5 1.2e-4,-9e-5 63.09899,-63.32945 132.23646,-104.46596 194.26997,-130.268317 67.77743,-28.126922 127.62797,-38.327902 167.06473,-42.466572 40.24459,-4.223447 62.41869,-3.261458 62.41869,-3.261458 z"
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
          </g>
          <g
             style="fill:#037e1e"
             id="g3437"
             transform="matrix(-1,0,0,-1,-159.13429,1303.4731)">
            <path
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000080;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
               d="m -391.76922,832.11145 c -23.50671,-40.65081 -39.0847,-86.54229 -45.18222,-133.10282 -6.16095,-46.55221 -2.99126,-94.91191 9.19329,-140.26169 l 2e-5,-5e-5 c 12.12275,-45.36631 33.55757,-88.83186 62.16919,-126.06677 l 9e-5,-7e-5 c 28.56085,-37.27383 64.9975,-69.22799 105.68028,-92.67926 40.65108,-23.50688 86.54297,-39.08499 133.10403,-45.18275 46.552646,-6.16108 94.912533,-2.99172 140.262105,9.19283 l 5.4e-5,10e-6 c 45.365724,12.12257 88.830781,33.5575 126.065281,62.1692 37.27358,28.56102 69.22754,64.99812 92.67916,105.68139 23.50693,40.65133 39.0854,86.54282 45.18318,133.1032 6.16122,46.55187 2.99188,94.91118 -9.19253,140.26033 -12.12264,45.36614 -33.55783,88.8317 -62.16978,126.06694 l -7e-5,9e-5 c -28.56134,37.27419 -64.99832,69.22867 -105.68142,92.68012 -40.650803,23.50667 -86.542239,39.08465 -133.10272,45.18215 l -1.11e-4,0 c -46.552174,6.161 -94.911829,2.9913 -140.261539,-9.19326 l -1.1e-4,-3e-5 c -45.36635,-12.12275 -88.83194,-33.55758 -126.06687,-62.16921 -37.22727,-28.52518 -69.14816,-64.9065 -92.59136,-105.52786 L -599.46749,952.3671 c 0,0 4.05782,-3.62626 12.92259,-6.23486 9.08022,-2.672 22.2729,-4.11675 41.41596,-1.31343 19.65797,2.87873 42.41721,9.62093 73.89783,21.54511 18.30002,6.93166 80.90858,32.59619 115.71636,44.96228 43.99528,15.6411 102.90213,33.4588 168.66305,40.244 32.71937,3.3972 69.00644,4.2915 107.263229,0.6453 15.877249,-1.5132 33.204168,-3.9163 51.476538,-7.7448 43.361539,-9.046 93.44032,-26.452 141.712523,-57.53302 39.35365,-25.28381 77.68647,-59.88104 108.56037,-103.2624 27.56974,-38.65127 49.35595,-84.59315 61.19829,-134.38645 11.0961,-46.42162 13.61758,-96.63399 5.97957,-145.89795 -7.27498,-47.29269 -24.00328,-94.23753 -49.23025,-136.09424 -24.69938,-41.09505 -57.88476,-77.80605 -96.47269,-106.47663 -38.55601,-28.72243 -83.020777,-49.79947 -128.927922,-61.47545 -46.789274,-11.9647 -95.718148,-14.35338 -141.940898,-7.78047 -48.18351,6.78732 -94.10676,23.35408 -133.70547,46.65292 -42.51799,24.94029 -78.37924,57.90586 -105.54694,93.77527 -30.55249,40.22582 -50.65804,84.57702 -61.72854,126.63255 0,0 -1e-5,9e-5 -1e-5,9e-5 -13.69062,51.72421 -14.1395,100.72853 -8.81774,140.39426 5.76792,43.43965 18.61106,78.00492 28.27494,99.71228 9.89366,22.22347 16.98748,33.37999 16.98748,33.37999 z m -207.41307,119.75001 c 39.38064,68.14524 91.87196,128.00014 154.29411,175.93864 62.46109,47.8877 133.86221,83.0988 209.87792,103.5002 l 9e-5,0 c 76.03222,20.3397 155.472909,25.5466 233.5096526,15.3052 78.0284244,-10.3049 153.4146774,-35.8951 221.5919474,-75.2204 68.14531,-39.3806 128.00019,-91.8719 175.93865,-154.294 47.8877,-62.46112 83.09875,-133.86222 103.50021,-209.87788 l 2e-5,-9e-5 C 519.86996,731.18089 525.07684,651.74019 514.83542,573.70343 504.53056,495.67502 478.94039,420.28876 439.61515,352.11147 400.2345,283.96617 347.74317,224.11129 285.32102,176.17282 222.85991,128.28511 151.4588,93.074053 75.443128,72.672588 -0.58906043,52.332928 -80.02971,47.12603 -158.06642,57.367412 l -1.9e-4,2.4e-5 c -78.02841,10.304861 -153.41467,35.895044 -221.59196,75.220294 -68.14525,39.3806 -128.00008,91.87187 -175.93853,154.29396 l -1.2e-4,1.5e-4 c -47.88767,62.46106 -83.09872,133.86212 -103.50018,209.87774 l -5e-5,1.9e-4 c -20.33966,76.03224 -25.54655,155.47296 -15.30513,233.50973 10.29198,77.9309 35.83111,153.22625 75.07293,221.33633 l 207.90548,-119.8966 c 0,0 -4.26127,3.29997 -12.73235,6.55943 -8.27939,3.1857 -21.3827,6.56741 -38.37988,5.17485 -16.81814,-1.3779 -39.27936,-7.65253 -64.05026,-25.62896 -24.20248,-17.56392 -53.7784,-48.9835 -75.9209,-99.6432 -20.99983,-48.07193 -37.46983,-119.85367 -24.98071,-207.58295 6.14804,-43.03605 19.44747,-90.41665 43.06958,-138.63729 9.77921,-19.96265 21.97479,-41.37927 37.08158,-63.38455 35.88786,-52.20812 88.42683,-107.94176 160.93768,-153.01333 59.20797,-36.74838 130.52092,-65.493815 210.98793,-78.018151 C -83.576698,66.40572 -6.1969318,68.55202 71.379305,87.839152 143.76028,105.89039 214.4976,138.46493 277.98133,185.73807 c 60.92469,45.43828 113.62249,103.31259 153.72731,170.93823 39.30432,66.39118 65.486,140.50369 76.42833,217.90899 10.88392,77.42557 6.25507,156.16548 -13.27298,231.3775 -19.96687,76.65427 -54.86833,147.64554 -101.43771,209.13031 -48.5683,64.0181 -108.44948,116.0154 -174.36469,154.5083 -70.7051,41.2141 -146.30349,65.8032 -220.7095888,75.8838 -83.4425632,11.2364 -162.8618712,4.0188 -233.2401512,-14.6406 0,0 -1.4e-4,-10e-5 -1.4e-4,-10e-5 -86.3944,-22.9806 -156.5884,-62.2872 -209.95065,-103.1086 -58.24735,-44.6335 -97.00693,-91.3651 -120.3095,-123.449 -23.7799,-32.74111 -34.03385,-52.42544 -34.03385,-52.42544 z"
               id="path3439"
               inkscape:connector-curvature="0"
               inkscape:path-effect="#path-effect3355"
               inkscape:original-d="m -495.69227,892.11145 c 63.68506,110.30575 168.58082,190.79485 291.61091,223.76065 123.030094,32.9659 254.117026,15.7081 364.42279,-47.9769 C 270.64719,1004.2101 351.13799,899.31337 384.10381,776.28327 417.06958,653.2532 399.81017,522.16723 336.12511,411.86147 272.44005,301.55571 167.54597,221.06563 44.515918,188.09979 -78.514177,155.13398 -209.60281,172.39269 -319.90857,236.07775 c -110.30576,63.68507 -190.79487,168.58082 -223.76068,291.61091 -32.96581,123.03009 -15.70808,254.11703 47.97698,364.42279 z m 0.43302,-0.25 c -63.61886,-110.19108 -80.85863,-241.14121 -47.9271,-364.0434 32.93155,-122.90218 113.3367,-227.68843 223.52778,-291.30728 110.19109,-63.61886 241.141217,-80.85863 364.043397,-47.92709 122.902153,32.93157 227.688413,113.3367 291.307273,223.52779 63.61885,110.19109 80.85861,241.14122 47.92711,364.04339 -32.93154,122.90218 -113.33669,227.68844 -223.52778,291.30724 -110.191085,63.6189 -241.141208,80.8587 -364.0434,47.9271 -122.90218,-32.9315 -227.68843,-113.3367 -291.30728,-223.52775 z" />
            <path
               inkscape:original-d="M 336.12511,892.11145 C 399.81016,781.8057 417.06789,650.71876 384.10206,527.68867 351.13632,404.65854 270.64716,299.76282 160.34145,236.07773 50.035657,172.39269 -81.052976,155.13398 -204.08308,188.09979 -327.11313,221.06563 -432.0072,301.5557 -495.69226,411.86146 c -63.68506,110.30576 -80.94448,241.39174 -47.97871,364.42181 32.96582,123.03009 113.45662,227.92683 223.76238,291.61193 110.30577,63.685 241.392707,80.9427 364.422795,47.9769 C 167.54429,1082.9063 272.44005,1002.4172 336.12511,892.11145 Z m -0.43302,-0.25 c -63.61884,110.19105 -168.4051,190.59625 -291.30728,223.52775 -122.902185,32.9316 -253.85231,15.6918 -364.04339,-47.9271 -110.1911,-63.6188 -190.59624,-168.40507 -223.52778,-291.30725 -32.9315,-122.90217 -15.69175,-253.8523 47.92711,-364.04339 63.61886,-110.19109 168.40511,-190.59622 291.30727,-223.52779 122.902176,-32.93154 253.852314,-15.69177 364.04336,47.92712 110.19112,63.61883 190.59629,168.40506 223.52778,291.30728 32.93158,122.90216 15.69176,253.85231 -47.92707,364.04338 z"
               inkscape:path-effect="#path-effect3380"
               inkscape:connector-curvature="0"
               id="path3441"
               d="m 232.20207,832.11145 c -23.45128,40.6828 -55.40548,77.11948 -92.67932,105.68035 -37.23492,28.61163 -80.700491,50.04645 -126.066819,62.1692 l -1.12e-4,10e-6 c -45.349753,12.18459 -93.709426,15.35419 -140.261609,9.19329 -46.56053,-6.0975 -92.452,-21.67547 -133.10281,-45.18215 -40.6831,-23.45144 -77.12008,-55.40593 -105.68142,-92.68012 -28.61199,-37.23526 -50.0472,-80.70085 -62.16985,-126.06703 -12.18441,-45.34915 -15.35374,-93.70846 -9.19253,-140.26033 6.09778,-46.56038 21.67626,-92.45187 45.18319,-133.10321 23.45162,-40.68326 55.40558,-77.12036 92.67916,-105.68138 37.23449,-28.6117 80.69955,-50.04663 126.06527,-62.1692 45.34959,-12.18456 93.709504,-15.35392 140.262178,-9.19284 46.56106,6.09775 92.452951,21.67586 133.104042,45.18273 40.68278,23.45129 77.11943,55.40545 105.68028,92.67925 l 7e-5,9e-5 c 28.61161,37.2349 50.04641,80.70043 62.16914,126.06671 l 3e-5,1.1e-4 c 12.18455,45.34978 15.35425,93.7095 9.19331,140.26171 -6.0899,46.50235 -21.63659,92.33731 -45.09412,132.95039 l 207.90549,119.89658 c 0,0 -5.16935,-1.70105 -11.86084,-8.07387 -6.85413,-6.5277 -14.70166,-17.23052 -21.84544,-35.21056 -7.33594,-18.46366 -12.87664,-41.54484 -18.2903,-74.76995 C 385.05204,814.48712 375.9739,747.43425 369.27934,711.10679 360.82731,665.1852 346.80445,605.26153 319.80017,544.91829 306.38254,514.88388 289.01351,483.0112 266.7274,451.70296 257.47826,438.70948 246.73365,424.90548 234.28192,410.99538 204.76706,377.9662 164.65362,343.29971 113.6006,317.03525 72.027358,295.59589 22.898871,279.69731 -30.107438,274.65041 c -47.257862,-4.55046 -97.937802,-0.44694 -146.981232,14.19395 -45.75035,13.6013 -90.49628,36.52383 -129.34111,67.77051 -37.31918,29.94666 -69.61045,67.90621 -93.24594,110.68176 -23.23968,41.93782 -38.43965,89.03271 -43.97513,136.78613 -5.59635,47.75169 -1.61722,96.79783 11.22466,142.39258 13.0329,46.50305 35.42868,90.07104 64.23237,126.81466 29.96974,38.3345 67.2786,69.82183 107.25534,92.46591 42.85791,24.35149 89.33755,38.92539 133.98521,44.51859 50.112842,6.3464 98.574897,1.5827 140.531316,-9.8578 0,0 8.3e-5,0 8.3e-5,0 51.639788,-14.00567 94.303211,-38.11909 125.993861,-62.56073 34.73587,-26.71498 58.24871,-55.1201 72.21589,-74.34295 14.29926,-19.67988 20.41419,-31.40157 20.41419,-31.40157 z m 207.41307,119.74999 c 39.32523,-68.17728 64.91541,-143.56353 75.22028,-221.59194 10.24142,-78.03674 5.03454,-157.47746 -15.30516,-233.50971 l -8e-5,-1.7e-4 C 479.12879,420.74396 443.91775,349.3429 396.03006,286.88183 348.09158,224.45967 288.23669,171.96836 220.09138,132.58775 151.91411,93.262478 76.527862,67.672289 -1.5005404,57.367431 -79.537315,47.126011 -158.97803,52.332901 -235.01028,72.672578 -311.02596,93.074042 -382.42706,128.2851 -444.88817,176.17281 c -62.42216,47.93847 -114.91348,107.79335 -154.29412,175.93865 -39.32525,68.17729 -64.91543,143.56355 -75.22029,221.59196 -10.24141,78.03676 -5.03453,157.47746 15.30512,233.5097 20.40143,76.01563 55.61245,147.41671 103.5001,209.87778 l 1.2e-4,2e-4 c 47.93846,62.4221 107.79334,114.9134 175.93867,154.294 68.1772,39.3253 143.56339,64.9155 221.59175,75.2204 l 1.8e-4,0 c 78.036713,10.2414 157.47736965,5.0345 233.50956,-15.3052 l 1.83e-4,0 c 76.015707,-20.4014 147.416827,-55.6125 209.877917,-103.5002 62.34415,-47.8786 114.78227,-107.6438 154.14642,-175.68321 L 231.68121,832.01373 c 0,0 4.98848,2.04038 12.0468,7.74683 6.89859,5.57731 16.3789,15.23425 23.67149,30.65052 7.21577,15.25389 13.01239,37.84319 9.8298,68.28364 -3.10957,29.74192 -15.53176,71.06518 -48.3331,115.57098 -31.13158,42.2224 -85.06139,92.3767 -167.281738,125.4254 -40.344336,16.1937 -88.02686,28.3664 -141.598224,32.0194 -22.177768,1.5122 -46.822888,1.6589 -73.433408,-0.4214 -63.1575,-4.9757 -137.69373,-22.609 -212.98226,-62.8695 -61.42904,-32.9013 -121.97979,-80.2874 -173.05967,-143.7118 -45.55572,-56.64604 -82.38685,-124.73203 -104.47182,-201.55859 -20.55765,-71.70938 -27.71594,-149.25697 -18.51806,-227.87206 8.88836,-75.48147 32.66008,-150.05626 71.1732,-218.60087 37.84428,-67.23413 88.93676,-126.96438 150.50055,-175.14338 61.61055,-48.13853 132.11574,-83.499785 207.01529,-104.194006 C -157.39197,56.303583 -78.460993,51.033494 -1.9289287,60.621375 77.796522,70.673715 152.76812,96.533674 219.06149,134.3715 c 71.04501,40.62537 130.13901,93.80093 176.07216,153.19817 51.45227,66.64519 84.91125,139.03316 103.94087,209.31224 0,0 10e-6,1.5e-4 10e-6,1.5e-4 23.29542,86.31005 24.35195,166.75311 15.68069,233.37689 -9.53008,72.76043 -30.62105,129.69302 -46.75524,165.91559 -16.46468,36.96456 -28.38484,55.6869 -28.38484,55.6869 z"
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000080;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
            <path
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000080;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
               d="m -79.783575,291.73647 c 46.957977,-0.032 94.490157,9.4228 137.86152,27.42246 43.395855,17.94057 83.691745,44.86545 116.873515,78.09246 l 6e-5,10e-5 c 33.22701,33.18177 60.15187,73.47763 78.09244,116.87347 17.99967,43.37135 27.45449,90.90352 27.42251,137.86149 0.032,46.95832 -9.42291,94.49092 -27.42263,137.86285 l -6e-5,10e-5 c -17.94067,43.3963 -44.86535,83.6925 -78.09225,116.87408 -33.18132,33.22657 -73.47704,60.15094 -116.872751,78.0911 -43.371369,17.99932 -90.903806,27.45372 -137.86236,27.42182 -46.958549,0.032 -94.490979,-9.4225 -137.862349,-27.42182 -43.3957,-17.94016 -83.69142,-44.86453 -116.87274,-78.0911 -33.22691,-33.18159 -60.15159,-73.47778 -78.09227,-116.87408 l -5e-5,-10e-5 c -17.99972,-43.37194 -27.45463,-90.90453 -27.42262,-137.86285 -0.032,-46.95796 9.42281,-94.4901 27.42244,-137.86143 l 4e-5,-10e-5 c 17.94057,-43.39583 44.86542,-83.69168 78.09241,-116.87341 l 8e-5,-8e-5 c 33.18178,-33.22703 73.47768,-60.15192 116.87355,-78.0925 43.31716,-17.97717 90.78475,-27.43082 137.68547,-27.42254 L -80.078881,51.736666 c 0,0 1.111522,5.327313 -1.061749,14.30872 -2.226095,9.199708 -7.571244,21.347272 -19.57053,36.523994 -12.32203,15.58493 -29.54056,31.92392 -55.60752,53.22484 -15.15301,12.38246 -68.68341,53.77078 -96.79664,77.73217 -35.54325,30.28047 -80.42724,72.38646 -119.18387,125.94447 -19.30175,26.63721 -38.21979,57.61557 -54.19046,92.57003 -6.62812,14.50673 -13.21043,30.71383 -19.03107,48.4524 -13.84668,42.07521 -23.81202,94.14772 -21.0312,151.49316 2.21959,46.72316 13.01526,97.21896 35.14767,145.64722 19.68812,43.20174 48.58184,85.04009 85.78293,120.1925 34.65425,32.82031 76.87871,60.11014 123.36154,78.12741 44.59417,17.34602 93.61374,26.33132 142.4762,25.41252 47.939053,-0.8428 96.324404,-11.2267 140.447824,-30.30953 44.152356,-19.02926 84.637996,-46.99835 117.703266,-80.9171 33.75637,-34.53835 60.28946,-75.71766 77.70853,-119.0342 18.21377,-45.12179 26.82817,-93.17588 26.45016,-139.1188 -0.33995,-49.29178 -10.95836,-96.8313 -28.43835,-138.29391 -19.56035,-46.57215 -47.91686,-86.15967 -78.80277,-116.77479 0,0 -7e-5,-5e-5 -7e-5,-5e-5 C 137.33585,359.19919 95.121305,334.30829 58.108898,319.0842 17.605109,302.35955 -18.750857,296.19939 -42.381921,293.71488 c -24.192913,-2.54358 -37.401654,-1.97841 -37.401654,-1.97841 z m -1.5e-5,-239.499997 c -78.70587,0.032 -156.78736,15.563375 -229.51437,45.653303 -72.70252,30.149034 -138.89675,74.378684 -194.57277,130.009504 l -1e-4,1.6e-4 c -55.6308,55.67595 -99.86042,121.87014 -130.00944,194.57263 l -4e-5,1.8e-4 c -30.08992,72.72697 -45.62126,150.80841 -45.65323,229.51422 0.032,78.70589 15.56333,156.78739 45.65326,229.5144 30.14906,72.70254 74.37873,138.89683 130.00953,194.57283 55.67604,55.6307 121.87026,99.8604 194.57277,130.0094 72.72701,30.0899 150.80851,45.6213 229.5144,45.6533 78.7058879,-0.032 156.787389,-15.5634 229.5144,-45.6533 72.70251,-30.149 138.89674,-74.3787 194.57277,-130.0094 55.6308,-55.676 99.86047,-121.87029 130.00953,-194.57283 30.08994,-72.727 45.62131,-150.80851 45.65327,-229.51439 -0.032,-78.70582 -15.5633,-156.78726 -45.65319,-229.51424 l -7e-5,-1.8e-4 C 444.1641,349.76958 399.93448,283.57539 344.30372,227.89942 l -1.3e-4,-1.4e-4 C 288.62757,172.26846 222.43334,128.03881 149.73082,97.889773 77.094688,67.837446 -0.88254879,52.307303 -79.488502,52.236666 L -79.60778,292.23639 c 0,0 -0.727218,-5.34034 0.685551,-14.30625 1.380799,-8.76301 5.003801,-21.80166 14.708389,-35.82537 9.602366,-13.87598 26.266967,-30.19066 54.2204625,-42.65467 27.3120445,-12.178 69.3101525,-22.0817 124.2539875,-15.92782 52.13141,5.84957 122.53124,27.47699 192.26244,82.15754 34.19631,26.84238 68.57942,62.05032 98.52867,106.61799 12.39856,18.45037 24.8481,39.72036 36.35184,63.80586 27.26963,57.18388 49.26688,130.55078 52.04454,215.88281 2.22108,69.64979 -8.54111,145.78133 -37.92823,221.72996 -26.27909,67.77545 -66.82773,133.71516 -122.319,191.25456 -51.82332,53.6581 -115.40236,98.6312 -188.08395,129.9731 -69.813058,30.0432 -146.282571,46.7437 -224.900502,47.6626 -77.148608,0.843 -154.422768,-13.5393 -226.928888,-42.7656 -72.49446,-29.287 -138.3708,-72.6656 -193.7423,-127.1834 -56.4011,-55.619 -100.43063,-121.34015 -130.39331,-192.41281 -31.15715,-74.07044 -46.24757,-151.92773 -46.62573,-228.25838 -0.33991,-81.83947 16.16449,-159.60415 44.63743,-229.08205 31.99029,-77.88157 77.95062,-143.05187 129.29928,-194.67155 0,0 1.2e-4,-9e-5 1.2e-4,-9e-5 63.09899,-63.32945 132.23646,-104.46596 194.26997,-130.268317 67.77743,-28.126922 127.62797,-38.327902 167.06473,-42.466572 40.24459,-4.223447 62.41869,-3.261458 62.41869,-3.261458 z"
               id="path3443"
               inkscape:connector-curvature="0"
               inkscape:path-effect="#path-effect3384"
               inkscape:original-d="m -79.783575,171.73647 c -127.370105,0 -249.523595,50.59784 -339.587855,140.66213 -90.06435,90.06423 -140.66213,212.21775 -140.66218,339.58784 3e-5,127.37014 50.59787,249.52558 140.66215,339.58987 90.06428,90.06419 212.21776,140.66009 339.587879,140.66009 127.37012,0 249.523621,-50.5959 339.587901,-140.66009 C 349.86859,901.51203 400.46643,779.35658 400.46647,651.98644 400.46641,524.61634 349.86855,402.46288 259.80428,312.39859 169.74002,222.33432 47.586537,171.73647 -79.783575,171.73647 Z m 4e-6,0.5 c 127.237668,1e-5 249.263741,50.54497 339.234351,140.51563 89.97069,89.97062 140.51565,211.99665 140.51561,339.23438 5e-5,127.23769 -50.54495,249.26372 -140.51559,339.23436 -89.97065,89.97056 -211.996667,140.51556 -339.23438,140.51556 -127.23771,0 -249.26372,-50.545 -339.23438,-140.51556 -89.97064,-89.97064 -140.51563,-211.99667 -140.51558,-339.23436 -3e-5,-127.23772 50.54492,-249.26376 140.51562,-339.23438 89.9706,-89.97066 211.99667,-140.51561 339.234349,-140.51563 z" />
          </g>
        </g>
        <g
           transform="matrix(0.11669425,0.20212037,-0.20212037,0.11669425,61.447115,590.34795)"
           id="g3445">
          <g
             style="fill:#ff0000"
             id="g3447">
            <path
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
               d="m -391.76922,832.11145 c -23.50671,-40.65081 -39.0847,-86.54229 -45.18222,-133.10282 -6.16095,-46.55221 -2.99126,-94.91191 9.19329,-140.26169 l 2e-5,-5e-5 c 12.12275,-45.36631 33.55757,-88.83186 62.16919,-126.06677 l 9e-5,-7e-5 c 28.56085,-37.27383 64.9975,-69.22799 105.68028,-92.67926 40.65108,-23.50688 86.54297,-39.08499 133.10403,-45.18275 46.552646,-6.16108 94.912533,-2.99172 140.262105,9.19283 l 5.4e-5,10e-6 c 45.365724,12.12257 88.830781,33.5575 126.065281,62.1692 37.27358,28.56102 69.22754,64.99812 92.67916,105.68139 23.50693,40.65133 39.0854,86.54282 45.18318,133.1032 6.16122,46.55187 2.99188,94.91118 -9.19253,140.26033 -12.12264,45.36614 -33.55783,88.8317 -62.16978,126.06694 l -7e-5,9e-5 c -28.56134,37.27419 -64.99832,69.22867 -105.68142,92.68012 -40.650803,23.50667 -86.542239,39.08465 -133.10272,45.18215 l -1.11e-4,0 c -46.552174,6.161 -94.911829,2.9913 -140.261539,-9.19326 l -1.1e-4,-3e-5 c -45.36635,-12.12275 -88.83194,-33.55758 -126.06687,-62.16921 -37.22727,-28.52518 -69.14816,-64.9065 -92.59136,-105.52786 L -599.46749,952.3671 c 0,0 4.05782,-3.62626 12.92259,-6.23486 9.08022,-2.672 22.2729,-4.11675 41.41596,-1.31343 19.65797,2.87873 42.41721,9.62093 73.89783,21.54511 18.30002,6.93166 80.90858,32.59619 115.71636,44.96228 43.99528,15.6411 102.90213,33.4588 168.66305,40.244 32.71937,3.3972 69.00644,4.2915 107.263229,0.6453 15.877249,-1.5132 33.204168,-3.9163 51.476538,-7.7448 43.361539,-9.046 93.44032,-26.452 141.712523,-57.53302 39.35365,-25.28381 77.68647,-59.88104 108.56037,-103.2624 27.56974,-38.65127 49.35595,-84.59315 61.19829,-134.38645 11.0961,-46.42162 13.61758,-96.63399 5.97957,-145.89795 -7.27498,-47.29269 -24.00328,-94.23753 -49.23025,-136.09424 -24.69938,-41.09505 -57.88476,-77.80605 -96.47269,-106.47663 -38.55601,-28.72243 -83.020777,-49.79947 -128.927922,-61.47545 -46.789274,-11.9647 -95.718148,-14.35338 -141.940898,-7.78047 -48.18351,6.78732 -94.10676,23.35408 -133.70547,46.65292 -42.51799,24.94029 -78.37924,57.90586 -105.54694,93.77527 -30.55249,40.22582 -50.65804,84.57702 -61.72854,126.63255 0,0 -1e-5,9e-5 -1e-5,9e-5 -13.69062,51.72421 -14.1395,100.72853 -8.81774,140.39426 5.76792,43.43965 18.61106,78.00492 28.27494,99.71228 9.89366,22.22347 16.98748,33.37999 16.98748,33.37999 z m -207.41307,119.75001 c 39.38064,68.14524 91.87196,128.00014 154.29411,175.93864 62.46109,47.8877 133.86221,83.0988 209.87792,103.5002 l 9e-5,0 c 76.03222,20.3397 155.472909,25.5466 233.5096526,15.3052 78.0284244,-10.3049 153.4146774,-35.8951 221.5919474,-75.2204 68.14531,-39.3806 128.00019,-91.8719 175.93865,-154.294 47.8877,-62.46112 83.09875,-133.86222 103.50021,-209.87788 l 2e-5,-9e-5 C 519.86996,731.18089 525.07684,651.74019 514.83542,573.70343 504.53056,495.67502 478.94039,420.28876 439.61515,352.11147 400.2345,283.96617 347.74317,224.11129 285.32102,176.17282 222.85991,128.28511 151.4588,93.074053 75.443128,72.672588 -0.58906043,52.332928 -80.02971,47.12603 -158.06642,57.367412 l -1.9e-4,2.4e-5 c -78.02841,10.304861 -153.41467,35.895044 -221.59196,75.220294 -68.14525,39.3806 -128.00008,91.87187 -175.93853,154.29396 l -1.2e-4,1.5e-4 c -47.88767,62.46106 -83.09872,133.86212 -103.50018,209.87774 l -5e-5,1.9e-4 c -20.33966,76.03224 -25.54655,155.47296 -15.30513,233.50973 10.29198,77.9309 35.83111,153.22625 75.07293,221.33633 l 207.90548,-119.8966 c 0,0 -4.26127,3.29997 -12.73235,6.55943 -8.27939,3.1857 -21.3827,6.56741 -38.37988,5.17485 -16.81814,-1.3779 -39.27936,-7.65253 -64.05026,-25.62896 -24.20248,-17.56392 -53.7784,-48.9835 -75.9209,-99.6432 -20.99983,-48.07193 -37.46983,-119.85367 -24.98071,-207.58295 6.14804,-43.03605 19.44747,-90.41665 43.06958,-138.63729 9.77921,-19.96265 21.97479,-41.37927 37.08158,-63.38455 35.88786,-52.20812 88.42683,-107.94176 160.93768,-153.01333 59.20797,-36.74838 130.52092,-65.493815 210.98793,-78.018151 C -83.576698,66.40572 -6.1969318,68.55202 71.379305,87.839152 143.76028,105.89039 214.4976,138.46493 277.98133,185.73807 c 60.92469,45.43828 113.62249,103.31259 153.72731,170.93823 39.30432,66.39118 65.486,140.50369 76.42833,217.90899 10.88392,77.42557 6.25507,156.16548 -13.27298,231.3775 -19.96687,76.65427 -54.86833,147.64554 -101.43771,209.13031 -48.5683,64.0181 -108.44948,116.0154 -174.36469,154.5083 -70.7051,41.2141 -146.30349,65.8032 -220.7095888,75.8838 -83.4425632,11.2364 -162.8618712,4.0188 -233.2401512,-14.6406 0,0 -1.4e-4,-10e-5 -1.4e-4,-10e-5 -86.3944,-22.9806 -156.5884,-62.2872 -209.95065,-103.1086 -58.24735,-44.6335 -97.00693,-91.3651 -120.3095,-123.449 -23.7799,-32.74111 -34.03385,-52.42544 -34.03385,-52.42544 z"
               id="path3449"
               inkscape:connector-curvature="0"
               inkscape:path-effect="#path-effect3355"
               inkscape:original-d="m -495.69227,892.11145 c 63.68506,110.30575 168.58082,190.79485 291.61091,223.76065 123.030094,32.9659 254.117026,15.7081 364.42279,-47.9769 C 270.64719,1004.2101 351.13799,899.31337 384.10381,776.28327 417.06958,653.2532 399.81017,522.16723 336.12511,411.86147 272.44005,301.55571 167.54597,221.06563 44.515918,188.09979 -78.514177,155.13398 -209.60281,172.39269 -319.90857,236.07775 c -110.30576,63.68507 -190.79487,168.58082 -223.76068,291.61091 -32.96581,123.03009 -15.70808,254.11703 47.97698,364.42279 z m 0.43302,-0.25 c -63.61886,-110.19108 -80.85863,-241.14121 -47.9271,-364.0434 32.93155,-122.90218 113.3367,-227.68843 223.52778,-291.30728 110.19109,-63.61886 241.141217,-80.85863 364.043397,-47.92709 122.902153,32.93157 227.688413,113.3367 291.307273,223.52779 63.61885,110.19109 80.85861,241.14122 47.92711,364.04339 -32.93154,122.90218 -113.33669,227.68844 -223.52778,291.30724 -110.191085,63.6189 -241.141208,80.8587 -364.0434,47.9271 -122.90218,-32.9315 -227.68843,-113.3367 -291.30728,-223.52775 z" />
            <path
               inkscape:original-d="M 336.12511,892.11145 C 399.81016,781.8057 417.06789,650.71876 384.10206,527.68867 351.13632,404.65854 270.64716,299.76282 160.34145,236.07773 50.035657,172.39269 -81.052976,155.13398 -204.08308,188.09979 -327.11313,221.06563 -432.0072,301.5557 -495.69226,411.86146 c -63.68506,110.30576 -80.94448,241.39174 -47.97871,364.42181 32.96582,123.03009 113.45662,227.92683 223.76238,291.61193 110.30577,63.685 241.392707,80.9427 364.422795,47.9769 C 167.54429,1082.9063 272.44005,1002.4172 336.12511,892.11145 Z m -0.43302,-0.25 c -63.61884,110.19105 -168.4051,190.59625 -291.30728,223.52775 -122.902185,32.9316 -253.85231,15.6918 -364.04339,-47.9271 -110.1911,-63.6188 -190.59624,-168.40507 -223.52778,-291.30725 -32.9315,-122.90217 -15.69175,-253.8523 47.92711,-364.04339 63.61886,-110.19109 168.40511,-190.59622 291.30727,-223.52779 122.902176,-32.93154 253.852314,-15.69177 364.04336,47.92712 110.19112,63.61883 190.59629,168.40506 223.52778,291.30728 32.93158,122.90216 15.69176,253.85231 -47.92707,364.04338 z"
               inkscape:path-effect="#path-effect3380"
               inkscape:connector-curvature="0"
               id="path3451"
               d="m 232.20207,832.11145 c -23.45128,40.6828 -55.40548,77.11948 -92.67932,105.68035 -37.23492,28.61163 -80.700491,50.04645 -126.066819,62.1692 l -1.12e-4,10e-6 c -45.349753,12.18459 -93.709426,15.35419 -140.261609,9.19329 -46.56053,-6.0975 -92.452,-21.67547 -133.10281,-45.18215 -40.6831,-23.45144 -77.12008,-55.40593 -105.68142,-92.68012 -28.61199,-37.23526 -50.0472,-80.70085 -62.16985,-126.06703 -12.18441,-45.34915 -15.35374,-93.70846 -9.19253,-140.26033 6.09778,-46.56038 21.67626,-92.45187 45.18319,-133.10321 23.45162,-40.68326 55.40558,-77.12036 92.67916,-105.68138 37.23449,-28.6117 80.69955,-50.04663 126.06527,-62.1692 45.34959,-12.18456 93.709504,-15.35392 140.262178,-9.19284 46.56106,6.09775 92.452951,21.67586 133.104042,45.18273 40.68278,23.45129 77.11943,55.40545 105.68028,92.67925 l 7e-5,9e-5 c 28.61161,37.2349 50.04641,80.70043 62.16914,126.06671 l 3e-5,1.1e-4 c 12.18455,45.34978 15.35425,93.7095 9.19331,140.26171 -6.0899,46.50235 -21.63659,92.33731 -45.09412,132.95039 l 207.90549,119.89658 c 0,0 -5.16935,-1.70105 -11.86084,-8.07387 -6.85413,-6.5277 -14.70166,-17.23052 -21.84544,-35.21056 -7.33594,-18.46366 -12.87664,-41.54484 -18.2903,-74.76995 C 385.05204,814.48712 375.9739,747.43425 369.27934,711.10679 360.82731,665.1852 346.80445,605.26153 319.80017,544.91829 306.38254,514.88388 289.01351,483.0112 266.7274,451.70296 257.47826,438.70948 246.73365,424.90548 234.28192,410.99538 204.76706,377.9662 164.65362,343.29971 113.6006,317.03525 72.027358,295.59589 22.898871,279.69731 -30.107438,274.65041 c -47.257862,-4.55046 -97.937802,-0.44694 -146.981232,14.19395 -45.75035,13.6013 -90.49628,36.52383 -129.34111,67.77051 -37.31918,29.94666 -69.61045,67.90621 -93.24594,110.68176 -23.23968,41.93782 -38.43965,89.03271 -43.97513,136.78613 -5.59635,47.75169 -1.61722,96.79783 11.22466,142.39258 13.0329,46.50305 35.42868,90.07104 64.23237,126.81466 29.96974,38.3345 67.2786,69.82183 107.25534,92.46591 42.85791,24.35149 89.33755,38.92539 133.98521,44.51859 50.112842,6.3464 98.574897,1.5827 140.531316,-9.8578 0,0 8.3e-5,0 8.3e-5,0 51.639788,-14.00567 94.303211,-38.11909 125.993861,-62.56073 34.73587,-26.71498 58.24871,-55.1201 72.21589,-74.34295 14.29926,-19.67988 20.41419,-31.40157 20.41419,-31.40157 z m 207.41307,119.74999 c 39.32523,-68.17728 64.91541,-143.56353 75.22028,-221.59194 10.24142,-78.03674 5.03454,-157.47746 -15.30516,-233.50971 l -8e-5,-1.7e-4 C 479.12879,420.74396 443.91775,349.3429 396.03006,286.88183 348.09158,224.45967 288.23669,171.96836 220.09138,132.58775 151.91411,93.262478 76.527862,67.672289 -1.5005404,57.367431 -79.537315,47.126011 -158.97803,52.332901 -235.01028,72.672578 -311.02596,93.074042 -382.42706,128.2851 -444.88817,176.17281 c -62.42216,47.93847 -114.91348,107.79335 -154.29412,175.93865 -39.32525,68.17729 -64.91543,143.56355 -75.22029,221.59196 -10.24141,78.03676 -5.03453,157.47746 15.30512,233.5097 20.40143,76.01563 55.61245,147.41671 103.5001,209.87778 l 1.2e-4,2e-4 c 47.93846,62.4221 107.79334,114.9134 175.93867,154.294 68.1772,39.3253 143.56339,64.9155 221.59175,75.2204 l 1.8e-4,0 c 78.036713,10.2414 157.47736965,5.0345 233.50956,-15.3052 l 1.83e-4,0 c 76.015707,-20.4014 147.416827,-55.6125 209.877917,-103.5002 62.34415,-47.8786 114.78227,-107.6438 154.14642,-175.68321 L 231.68121,832.01373 c 0,0 4.98848,2.04038 12.0468,7.74683 6.89859,5.57731 16.3789,15.23425 23.67149,30.65052 7.21577,15.25389 13.01239,37.84319 9.8298,68.28364 -3.10957,29.74192 -15.53176,71.06518 -48.3331,115.57098 -31.13158,42.2224 -85.06139,92.3767 -167.281738,125.4254 -40.344336,16.1937 -88.02686,28.3664 -141.598224,32.0194 -22.177768,1.5122 -46.822888,1.6589 -73.433408,-0.4214 -63.1575,-4.9757 -137.69373,-22.609 -212.98226,-62.8695 -61.42904,-32.9013 -121.97979,-80.2874 -173.05967,-143.7118 -45.55572,-56.64604 -82.38685,-124.73203 -104.47182,-201.55859 -20.55765,-71.70938 -27.71594,-149.25697 -18.51806,-227.87206 8.88836,-75.48147 32.66008,-150.05626 71.1732,-218.60087 37.84428,-67.23413 88.93676,-126.96438 150.50055,-175.14338 61.61055,-48.13853 132.11574,-83.499785 207.01529,-104.194006 C -157.39197,56.303583 -78.460993,51.033494 -1.9289287,60.621375 77.796522,70.673715 152.76812,96.533674 219.06149,134.3715 c 71.04501,40.62537 130.13901,93.80093 176.07216,153.19817 51.45227,66.64519 84.91125,139.03316 103.94087,209.31224 0,0 10e-6,1.5e-4 10e-6,1.5e-4 23.29542,86.31005 24.35195,166.75311 15.68069,233.37689 -9.53008,72.76043 -30.62105,129.69302 -46.75524,165.91559 -16.46468,36.96456 -28.38484,55.6869 -28.38484,55.6869 z"
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
            <path
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
               d="m -79.783575,291.73647 c 46.957977,-0.032 94.490157,9.4228 137.86152,27.42246 43.395855,17.94057 83.691745,44.86545 116.873515,78.09246 l 6e-5,10e-5 c 33.22701,33.18177 60.15187,73.47763 78.09244,116.87347 17.99967,43.37135 27.45449,90.90352 27.42251,137.86149 0.032,46.95832 -9.42291,94.49092 -27.42263,137.86285 l -6e-5,10e-5 c -17.94067,43.3963 -44.86535,83.6925 -78.09225,116.87408 -33.18132,33.22657 -73.47704,60.15094 -116.872751,78.0911 -43.371369,17.99932 -90.903806,27.45372 -137.86236,27.42182 -46.958549,0.032 -94.490979,-9.4225 -137.862349,-27.42182 -43.3957,-17.94016 -83.69142,-44.86453 -116.87274,-78.0911 -33.22691,-33.18159 -60.15159,-73.47778 -78.09227,-116.87408 l -5e-5,-10e-5 c -17.99972,-43.37194 -27.45463,-90.90453 -27.42262,-137.86285 -0.032,-46.95796 9.42281,-94.4901 27.42244,-137.86143 l 4e-5,-10e-5 c 17.94057,-43.39583 44.86542,-83.69168 78.09241,-116.87341 l 8e-5,-8e-5 c 33.18178,-33.22703 73.47768,-60.15192 116.87355,-78.0925 43.31716,-17.97717 90.78475,-27.43082 137.68547,-27.42254 L -80.078881,51.736666 c 0,0 1.111522,5.327313 -1.061749,14.30872 -2.226095,9.199708 -7.571244,21.347272 -19.57053,36.523994 -12.32203,15.58493 -29.54056,31.92392 -55.60752,53.22484 -15.15301,12.38246 -68.68341,53.77078 -96.79664,77.73217 -35.54325,30.28047 -80.42724,72.38646 -119.18387,125.94447 -19.30175,26.63721 -38.21979,57.61557 -54.19046,92.57003 -6.62812,14.50673 -13.21043,30.71383 -19.03107,48.4524 -13.84668,42.07521 -23.81202,94.14772 -21.0312,151.49316 2.21959,46.72316 13.01526,97.21896 35.14767,145.64722 19.68812,43.20174 48.58184,85.04009 85.78293,120.1925 34.65425,32.82031 76.87871,60.11014 123.36154,78.12741 44.59417,17.34602 93.61374,26.33132 142.4762,25.41252 47.939053,-0.8428 96.324404,-11.2267 140.447824,-30.30953 44.152356,-19.02926 84.637996,-46.99835 117.703266,-80.9171 33.75637,-34.53835 60.28946,-75.71766 77.70853,-119.0342 18.21377,-45.12179 26.82817,-93.17588 26.45016,-139.1188 -0.33995,-49.29178 -10.95836,-96.8313 -28.43835,-138.29391 -19.56035,-46.57215 -47.91686,-86.15967 -78.80277,-116.77479 0,0 -7e-5,-5e-5 -7e-5,-5e-5 C 137.33585,359.19919 95.121305,334.30829 58.108898,319.0842 17.605109,302.35955 -18.750857,296.19939 -42.381921,293.71488 c -24.192913,-2.54358 -37.401654,-1.97841 -37.401654,-1.97841 z m -1.5e-5,-239.499997 c -78.70587,0.032 -156.78736,15.563375 -229.51437,45.653303 -72.70252,30.149034 -138.89675,74.378684 -194.57277,130.009504 l -1e-4,1.6e-4 c -55.6308,55.67595 -99.86042,121.87014 -130.00944,194.57263 l -4e-5,1.8e-4 c -30.08992,72.72697 -45.62126,150.80841 -45.65323,229.51422 0.032,78.70589 15.56333,156.78739 45.65326,229.5144 30.14906,72.70254 74.37873,138.89683 130.00953,194.57283 55.67604,55.6307 121.87026,99.8604 194.57277,130.0094 72.72701,30.0899 150.80851,45.6213 229.5144,45.6533 78.7058879,-0.032 156.787389,-15.5634 229.5144,-45.6533 72.70251,-30.149 138.89674,-74.3787 194.57277,-130.0094 55.6308,-55.676 99.86047,-121.87029 130.00953,-194.57283 30.08994,-72.727 45.62131,-150.80851 45.65327,-229.51439 -0.032,-78.70582 -15.5633,-156.78726 -45.65319,-229.51424 l -7e-5,-1.8e-4 C 444.1641,349.76958 399.93448,283.57539 344.30372,227.89942 l -1.3e-4,-1.4e-4 C 288.62757,172.26846 222.43334,128.03881 149.73082,97.889773 77.094688,67.837446 -0.88254879,52.307303 -79.488502,52.236666 L -79.60778,292.23639 c 0,0 -0.727218,-5.34034 0.685551,-14.30625 1.380799,-8.76301 5.003801,-21.80166 14.708389,-35.82537 9.602366,-13.87598 26.266967,-30.19066 54.2204625,-42.65467 27.3120445,-12.178 69.3101525,-22.0817 124.2539875,-15.92782 52.13141,5.84957 122.53124,27.47699 192.26244,82.15754 34.19631,26.84238 68.57942,62.05032 98.52867,106.61799 12.39856,18.45037 24.8481,39.72036 36.35184,63.80586 27.26963,57.18388 49.26688,130.55078 52.04454,215.88281 2.22108,69.64979 -8.54111,145.78133 -37.92823,221.72996 -26.27909,67.77545 -66.82773,133.71516 -122.319,191.25456 -51.82332,53.6581 -115.40236,98.6312 -188.08395,129.9731 -69.813058,30.0432 -146.282571,46.7437 -224.900502,47.6626 -77.148608,0.843 -154.422768,-13.5393 -226.928888,-42.7656 -72.49446,-29.287 -138.3708,-72.6656 -193.7423,-127.1834 -56.4011,-55.619 -100.43063,-121.34015 -130.39331,-192.41281 -31.15715,-74.07044 -46.24757,-151.92773 -46.62573,-228.25838 -0.33991,-81.83947 16.16449,-159.60415 44.63743,-229.08205 31.99029,-77.88157 77.95062,-143.05187 129.29928,-194.67155 0,0 1.2e-4,-9e-5 1.2e-4,-9e-5 63.09899,-63.32945 132.23646,-104.46596 194.26997,-130.268317 67.77743,-28.126922 127.62797,-38.327902 167.06473,-42.466572 40.24459,-4.223447 62.41869,-3.261458 62.41869,-3.261458 z"
               id="path3453"
               inkscape:connector-curvature="0"
               inkscape:path-effect="#path-effect3384"
               inkscape:original-d="m -79.783575,171.73647 c -127.370105,0 -249.523595,50.59784 -339.587855,140.66213 -90.06435,90.06423 -140.66213,212.21775 -140.66218,339.58784 3e-5,127.37014 50.59787,249.52558 140.66215,339.58987 90.06428,90.06419 212.21776,140.66009 339.587879,140.66009 127.37012,0 249.523621,-50.5959 339.587901,-140.66009 C 349.86859,901.51203 400.46643,779.35658 400.46647,651.98644 400.46641,524.61634 349.86855,402.46288 259.80428,312.39859 169.74002,222.33432 47.586537,171.73647 -79.783575,171.73647 Z m 4e-6,0.5 c 127.237668,1e-5 249.263741,50.54497 339.234351,140.51563 89.97069,89.97062 140.51565,211.99665 140.51561,339.23438 5e-5,127.23769 -50.54495,249.26372 -140.51559,339.23436 -89.97065,89.97056 -211.996667,140.51556 -339.23438,140.51556 -127.23771,0 -249.26372,-50.545 -339.23438,-140.51556 -89.97064,-89.97064 -140.51563,-211.99667 -140.51558,-339.23436 -3e-5,-127.23772 50.54492,-249.26376 140.51562,-339.23438 89.9706,-89.97066 211.99667,-140.51561 339.234349,-140.51563 z" />
          </g>
          <g
             transform="matrix(-1,0,0,-1,-159.13429,1303.4731)"
             id="g3455"
             style="fill:#1c8003">
            <path
               inkscape:original-d="m -495.69227,892.11145 c 63.68506,110.30575 168.58082,190.79485 291.61091,223.76065 123.030094,32.9659 254.117026,15.7081 364.42279,-47.9769 C 270.64719,1004.2101 351.13799,899.31337 384.10381,776.28327 417.06958,653.2532 399.81017,522.16723 336.12511,411.86147 272.44005,301.55571 167.54597,221.06563 44.515918,188.09979 -78.514177,155.13398 -209.60281,172.39269 -319.90857,236.07775 c -110.30576,63.68507 -190.79487,168.58082 -223.76068,291.61091 -32.96581,123.03009 -15.70808,254.11703 47.97698,364.42279 z m 0.43302,-0.25 c -63.61886,-110.19108 -80.85863,-241.14121 -47.9271,-364.0434 32.93155,-122.90218 113.3367,-227.68843 223.52778,-291.30728 110.19109,-63.61886 241.141217,-80.85863 364.043397,-47.92709 122.902153,32.93157 227.688413,113.3367 291.307273,223.52779 63.61885,110.19109 80.85861,241.14122 47.92711,364.04339 -32.93154,122.90218 -113.33669,227.68844 -223.52778,291.30724 -110.191085,63.6189 -241.141208,80.8587 -364.0434,47.9271 -122.90218,-32.9315 -227.68843,-113.3367 -291.30728,-223.52775 z"
               inkscape:path-effect="#path-effect3355"
               inkscape:connector-curvature="0"
               id="path3457"
               d="m -391.76922,832.11145 c -23.50671,-40.65081 -39.0847,-86.54229 -45.18222,-133.10282 -6.16095,-46.55221 -2.99126,-94.91191 9.19329,-140.26169 l 2e-5,-5e-5 c 12.12275,-45.36631 33.55757,-88.83186 62.16919,-126.06677 l 9e-5,-7e-5 c 28.56085,-37.27383 64.9975,-69.22799 105.68028,-92.67926 40.65108,-23.50688 86.54297,-39.08499 133.10403,-45.18275 46.552646,-6.16108 94.912533,-2.99172 140.262105,9.19283 l 5.4e-5,10e-6 c 45.365724,12.12257 88.830781,33.5575 126.065281,62.1692 37.27358,28.56102 69.22754,64.99812 92.67916,105.68139 23.50693,40.65133 39.0854,86.54282 45.18318,133.1032 6.16122,46.55187 2.99188,94.91118 -9.19253,140.26033 -12.12264,45.36614 -33.55783,88.8317 -62.16978,126.06694 l -7e-5,9e-5 c -28.56134,37.27419 -64.99832,69.22867 -105.68142,92.68012 -40.650803,23.50667 -86.542239,39.08465 -133.10272,45.18215 l -1.11e-4,0 c -46.552174,6.161 -94.911829,2.9913 -140.261539,-9.19326 l -1.1e-4,-3e-5 c -45.36635,-12.12275 -88.83194,-33.55758 -126.06687,-62.16921 -37.22727,-28.52518 -69.14816,-64.9065 -92.59136,-105.52786 L -599.46749,952.3671 c 0,0 4.05782,-3.62626 12.92259,-6.23486 9.08022,-2.672 22.2729,-4.11675 41.41596,-1.31343 19.65797,2.87873 42.41721,9.62093 73.89783,21.54511 18.30002,6.93166 80.90858,32.59619 115.71636,44.96228 43.99528,15.6411 102.90213,33.4588 168.66305,40.244 32.71937,3.3972 69.00644,4.2915 107.263229,0.6453 15.877249,-1.5132 33.204168,-3.9163 51.476538,-7.7448 43.361539,-9.046 93.44032,-26.452 141.712523,-57.53302 39.35365,-25.28381 77.68647,-59.88104 108.56037,-103.2624 27.56974,-38.65127 49.35595,-84.59315 61.19829,-134.38645 11.0961,-46.42162 13.61758,-96.63399 5.97957,-145.89795 -7.27498,-47.29269 -24.00328,-94.23753 -49.23025,-136.09424 -24.69938,-41.09505 -57.88476,-77.80605 -96.47269,-106.47663 -38.55601,-28.72243 -83.020777,-49.79947 -128.927922,-61.47545 -46.789274,-11.9647 -95.718148,-14.35338 -141.940898,-7.78047 -48.18351,6.78732 -94.10676,23.35408 -133.70547,46.65292 -42.51799,24.94029 -78.37924,57.90586 -105.54694,93.77527 -30.55249,40.22582 -50.65804,84.57702 -61.72854,126.63255 0,0 -1e-5,9e-5 -1e-5,9e-5 -13.69062,51.72421 -14.1395,100.72853 -8.81774,140.39426 5.76792,43.43965 18.61106,78.00492 28.27494,99.71228 9.89366,22.22347 16.98748,33.37999 16.98748,33.37999 z m -207.41307,119.75001 c 39.38064,68.14524 91.87196,128.00014 154.29411,175.93864 62.46109,47.8877 133.86221,83.0988 209.87792,103.5002 l 9e-5,0 c 76.03222,20.3397 155.472909,25.5466 233.5096526,15.3052 78.0284244,-10.3049 153.4146774,-35.8951 221.5919474,-75.2204 68.14531,-39.3806 128.00019,-91.8719 175.93865,-154.294 47.8877,-62.46112 83.09875,-133.86222 103.50021,-209.87788 l 2e-5,-9e-5 C 519.86996,731.18089 525.07684,651.74019 514.83542,573.70343 504.53056,495.67502 478.94039,420.28876 439.61515,352.11147 400.2345,283.96617 347.74317,224.11129 285.32102,176.17282 222.85991,128.28511 151.4588,93.074053 75.443128,72.672588 -0.58906043,52.332928 -80.02971,47.12603 -158.06642,57.367412 l -1.9e-4,2.4e-5 c -78.02841,10.304861 -153.41467,35.895044 -221.59196,75.220294 -68.14525,39.3806 -128.00008,91.87187 -175.93853,154.29396 l -1.2e-4,1.5e-4 c -47.88767,62.46106 -83.09872,133.86212 -103.50018,209.87774 l -5e-5,1.9e-4 c -20.33966,76.03224 -25.54655,155.47296 -15.30513,233.50973 10.29198,77.9309 35.83111,153.22625 75.07293,221.33633 l 207.90548,-119.8966 c 0,0 -4.26127,3.29997 -12.73235,6.55943 -8.27939,3.1857 -21.3827,6.56741 -38.37988,5.17485 -16.81814,-1.3779 -39.27936,-7.65253 -64.05026,-25.62896 -24.20248,-17.56392 -53.7784,-48.9835 -75.9209,-99.6432 -20.99983,-48.07193 -37.46983,-119.85367 -24.98071,-207.58295 6.14804,-43.03605 19.44747,-90.41665 43.06958,-138.63729 9.77921,-19.96265 21.97479,-41.37927 37.08158,-63.38455 35.88786,-52.20812 88.42683,-107.94176 160.93768,-153.01333 59.20797,-36.74838 130.52092,-65.493815 210.98793,-78.018151 C -83.576698,66.40572 -6.1969318,68.55202 71.379305,87.839152 143.76028,105.89039 214.4976,138.46493 277.98133,185.73807 c 60.92469,45.43828 113.62249,103.31259 153.72731,170.93823 39.30432,66.39118 65.486,140.50369 76.42833,217.90899 10.88392,77.42557 6.25507,156.16548 -13.27298,231.3775 -19.96687,76.65427 -54.86833,147.64554 -101.43771,209.13031 -48.5683,64.0181 -108.44948,116.0154 -174.36469,154.5083 -70.7051,41.2141 -146.30349,65.8032 -220.7095888,75.8838 -83.4425632,11.2364 -162.8618712,4.0188 -233.2401512,-14.6406 0,0 -1.4e-4,-10e-5 -1.4e-4,-10e-5 -86.3944,-22.9806 -156.5884,-62.2872 -209.95065,-103.1086 -58.24735,-44.6335 -97.00693,-91.3651 -120.3095,-123.449 -23.7799,-32.74111 -34.03385,-52.42544 -34.03385,-52.42544 z"
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000080;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
            <path
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000080;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
               d="m 232.20207,832.11145 c -23.45128,40.6828 -55.40548,77.11948 -92.67932,105.68035 -37.23492,28.61163 -80.700491,50.04645 -126.066819,62.1692 l -1.12e-4,10e-6 c -45.349753,12.18459 -93.709426,15.35419 -140.261609,9.19329 -46.56053,-6.0975 -92.452,-21.67547 -133.10281,-45.18215 -40.6831,-23.45144 -77.12008,-55.40593 -105.68142,-92.68012 -28.61199,-37.23526 -50.0472,-80.70085 -62.16985,-126.06703 -12.18441,-45.34915 -15.35374,-93.70846 -9.19253,-140.26033 6.09778,-46.56038 21.67626,-92.45187 45.18319,-133.10321 23.45162,-40.68326 55.40558,-77.12036 92.67916,-105.68138 37.23449,-28.6117 80.69955,-50.04663 126.06527,-62.1692 45.34959,-12.18456 93.709504,-15.35392 140.262178,-9.19284 46.56106,6.09775 92.452951,21.67586 133.104042,45.18273 40.68278,23.45129 77.11943,55.40545 105.68028,92.67925 l 7e-5,9e-5 c 28.61161,37.2349 50.04641,80.70043 62.16914,126.06671 l 3e-5,1.1e-4 c 12.18455,45.34978 15.35425,93.7095 9.19331,140.26171 -6.0899,46.50235 -21.63659,92.33731 -45.09412,132.95039 l 207.90549,119.89658 c 0,0 -5.16935,-1.70105 -11.86084,-8.07387 -6.85413,-6.5277 -14.70166,-17.23052 -21.84544,-35.21056 -7.33594,-18.46366 -12.87664,-41.54484 -18.2903,-74.76995 C 385.05204,814.48712 375.9739,747.43425 369.27934,711.10679 360.82731,665.1852 346.80445,605.26153 319.80017,544.91829 306.38254,514.88388 289.01351,483.0112 266.7274,451.70296 257.47826,438.70948 246.73365,424.90548 234.28192,410.99538 204.76706,377.9662 164.65362,343.29971 113.6006,317.03525 72.027358,295.59589 22.898871,279.69731 -30.107438,274.65041 c -47.257862,-4.55046 -97.937802,-0.44694 -146.981232,14.19395 -45.75035,13.6013 -90.49628,36.52383 -129.34111,67.77051 -37.31918,29.94666 -69.61045,67.90621 -93.24594,110.68176 -23.23968,41.93782 -38.43965,89.03271 -43.97513,136.78613 -5.59635,47.75169 -1.61722,96.79783 11.22466,142.39258 13.0329,46.50305 35.42868,90.07104 64.23237,126.81466 29.96974,38.3345 67.2786,69.82183 107.25534,92.46591 42.85791,24.35149 89.33755,38.92539 133.98521,44.51859 50.112842,6.3464 98.574897,1.5827 140.531316,-9.8578 0,0 8.3e-5,0 8.3e-5,0 51.639788,-14.00567 94.303211,-38.11909 125.993861,-62.56073 34.73587,-26.71498 58.24871,-55.1201 72.21589,-74.34295 14.29926,-19.67988 20.41419,-31.40157 20.41419,-31.40157 z m 207.41307,119.74999 c 39.32523,-68.17728 64.91541,-143.56353 75.22028,-221.59194 10.24142,-78.03674 5.03454,-157.47746 -15.30516,-233.50971 l -8e-5,-1.7e-4 C 479.12879,420.74396 443.91775,349.3429 396.03006,286.88183 348.09158,224.45967 288.23669,171.96836 220.09138,132.58775 151.91411,93.262478 76.527862,67.672289 -1.5005404,57.367431 -79.537315,47.126011 -158.97803,52.332901 -235.01028,72.672578 -311.02596,93.074042 -382.42706,128.2851 -444.88817,176.17281 c -62.42216,47.93847 -114.91348,107.79335 -154.29412,175.93865 -39.32525,68.17729 -64.91543,143.56355 -75.22029,221.59196 -10.24141,78.03676 -5.03453,157.47746 15.30512,233.5097 20.40143,76.01563 55.61245,147.41671 103.5001,209.87778 l 1.2e-4,2e-4 c 47.93846,62.4221 107.79334,114.9134 175.93867,154.294 68.1772,39.3253 143.56339,64.9155 221.59175,75.2204 l 1.8e-4,0 c 78.036713,10.2414 157.47736965,5.0345 233.50956,-15.3052 l 1.83e-4,0 c 76.015707,-20.4014 147.416827,-55.6125 209.877917,-103.5002 62.34415,-47.8786 114.78227,-107.6438 154.14642,-175.68321 L 231.68121,832.01373 c 0,0 4.98848,2.04038 12.0468,7.74683 6.89859,5.57731 16.3789,15.23425 23.67149,30.65052 7.21577,15.25389 13.01239,37.84319 9.8298,68.28364 -3.10957,29.74192 -15.53176,71.06518 -48.3331,115.57098 -31.13158,42.2224 -85.06139,92.3767 -167.281738,125.4254 -40.344336,16.1937 -88.02686,28.3664 -141.598224,32.0194 -22.177768,1.5122 -46.822888,1.6589 -73.433408,-0.4214 -63.1575,-4.9757 -137.69373,-22.609 -212.98226,-62.8695 -61.42904,-32.9013 -121.97979,-80.2874 -173.05967,-143.7118 -45.55572,-56.64604 -82.38685,-124.73203 -104.47182,-201.55859 -20.55765,-71.70938 -27.71594,-149.25697 -18.51806,-227.87206 8.88836,-75.48147 32.66008,-150.05626 71.1732,-218.60087 37.84428,-67.23413 88.93676,-126.96438 150.50055,-175.14338 61.61055,-48.13853 132.11574,-83.499785 207.01529,-104.194006 C -157.39197,56.303583 -78.460993,51.033494 -1.9289287,60.621375 77.796522,70.673715 152.76812,96.533674 219.06149,134.3715 c 71.04501,40.62537 130.13901,93.80093 176.07216,153.19817 51.45227,66.64519 84.91125,139.03316 103.94087,209.31224 0,0 10e-6,1.5e-4 10e-6,1.5e-4 23.29542,86.31005 24.35195,166.75311 15.68069,233.37689 -9.53008,72.76043 -30.62105,129.69302 -46.75524,165.91559 -16.46468,36.96456 -28.38484,55.6869 -28.38484,55.6869 z"
               id="path3459"
               inkscape:connector-curvature="0"
               inkscape:path-effect="#path-effect3380"
               inkscape:original-d="M 336.12511,892.11145 C 399.81016,781.8057 417.06789,650.71876 384.10206,527.68867 351.13632,404.65854 270.64716,299.76282 160.34145,236.07773 50.035657,172.39269 -81.052976,155.13398 -204.08308,188.09979 -327.11313,221.06563 -432.0072,301.5557 -495.69226,411.86146 c -63.68506,110.30576 -80.94448,241.39174 -47.97871,364.42181 32.96582,123.03009 113.45662,227.92683 223.76238,291.61193 110.30577,63.685 241.392707,80.9427 364.422795,47.9769 C 167.54429,1082.9063 272.44005,1002.4172 336.12511,892.11145 Z m -0.43302,-0.25 c -63.61884,110.19105 -168.4051,190.59625 -291.30728,223.52775 -122.902185,32.9316 -253.85231,15.6918 -364.04339,-47.9271 -110.1911,-63.6188 -190.59624,-168.40507 -223.52778,-291.30725 -32.9315,-122.90217 -15.69175,-253.8523 47.92711,-364.04339 63.61886,-110.19109 168.40511,-190.59622 291.30727,-223.52779 122.902176,-32.93154 253.852314,-15.69177 364.04336,47.92712 110.19112,63.61883 190.59629,168.40506 223.52778,291.30728 32.93158,122.90216 15.69176,253.85231 -47.92707,364.04338 z" />
            <path
               inkscape:original-d="m -79.783575,171.73647 c -127.370105,0 -249.523595,50.59784 -339.587855,140.66213 -90.06435,90.06423 -140.66213,212.21775 -140.66218,339.58784 3e-5,127.37014 50.59787,249.52558 140.66215,339.58987 90.06428,90.06419 212.21776,140.66009 339.587879,140.66009 127.37012,0 249.523621,-50.5959 339.587901,-140.66009 C 349.86859,901.51203 400.46643,779.35658 400.46647,651.98644 400.46641,524.61634 349.86855,402.46288 259.80428,312.39859 169.74002,222.33432 47.586537,171.73647 -79.783575,171.73647 Z m 4e-6,0.5 c 127.237668,1e-5 249.263741,50.54497 339.234351,140.51563 89.97069,89.97062 140.51565,211.99665 140.51561,339.23438 5e-5,127.23769 -50.54495,249.26372 -140.51559,339.23436 -89.97065,89.97056 -211.996667,140.51556 -339.23438,140.51556 -127.23771,0 -249.26372,-50.545 -339.23438,-140.51556 -89.97064,-89.97064 -140.51563,-211.99667 -140.51558,-339.23436 -3e-5,-127.23772 50.54492,-249.26376 140.51562,-339.23438 89.9706,-89.97066 211.99667,-140.51561 339.234349,-140.51563 z"
               inkscape:path-effect="#path-effect3384"
               inkscape:connector-curvature="0"
               id="path3461"
               d="m -79.783575,291.73647 c 46.957977,-0.032 94.490157,9.4228 137.86152,27.42246 43.395855,17.94057 83.691745,44.86545 116.873515,78.09246 l 6e-5,10e-5 c 33.22701,33.18177 60.15187,73.47763 78.09244,116.87347 17.99967,43.37135 27.45449,90.90352 27.42251,137.86149 0.032,46.95832 -9.42291,94.49092 -27.42263,137.86285 l -6e-5,10e-5 c -17.94067,43.3963 -44.86535,83.6925 -78.09225,116.87408 -33.18132,33.22657 -73.47704,60.15094 -116.872751,78.0911 -43.371369,17.99932 -90.903806,27.45372 -137.86236,27.42182 -46.958549,0.032 -94.490979,-9.4225 -137.862349,-27.42182 -43.3957,-17.94016 -83.69142,-44.86453 -116.87274,-78.0911 -33.22691,-33.18159 -60.15159,-73.47778 -78.09227,-116.87408 l -5e-5,-10e-5 c -17.99972,-43.37194 -27.45463,-90.90453 -27.42262,-137.86285 -0.032,-46.95796 9.42281,-94.4901 27.42244,-137.86143 l 4e-5,-10e-5 c 17.94057,-43.39583 44.86542,-83.69168 78.09241,-116.87341 l 8e-5,-8e-5 c 33.18178,-33.22703 73.47768,-60.15192 116.87355,-78.0925 43.31716,-17.97717 90.78475,-27.43082 137.68547,-27.42254 L -80.078881,51.736666 c 0,0 1.111522,5.327313 -1.061749,14.30872 -2.226095,9.199708 -7.571244,21.347272 -19.57053,36.523994 -12.32203,15.58493 -29.54056,31.92392 -55.60752,53.22484 -15.15301,12.38246 -68.68341,53.77078 -96.79664,77.73217 -35.54325,30.28047 -80.42724,72.38646 -119.18387,125.94447 -19.30175,26.63721 -38.21979,57.61557 -54.19046,92.57003 -6.62812,14.50673 -13.21043,30.71383 -19.03107,48.4524 -13.84668,42.07521 -23.81202,94.14772 -21.0312,151.49316 2.21959,46.72316 13.01526,97.21896 35.14767,145.64722 19.68812,43.20174 48.58184,85.04009 85.78293,120.1925 34.65425,32.82031 76.87871,60.11014 123.36154,78.12741 44.59417,17.34602 93.61374,26.33132 142.4762,25.41252 47.939053,-0.8428 96.324404,-11.2267 140.447824,-30.30953 44.152356,-19.02926 84.637996,-46.99835 117.703266,-80.9171 33.75637,-34.53835 60.28946,-75.71766 77.70853,-119.0342 18.21377,-45.12179 26.82817,-93.17588 26.45016,-139.1188 -0.33995,-49.29178 -10.95836,-96.8313 -28.43835,-138.29391 -19.56035,-46.57215 -47.91686,-86.15967 -78.80277,-116.77479 0,0 -7e-5,-5e-5 -7e-5,-5e-5 C 137.33585,359.19919 95.121305,334.30829 58.108898,319.0842 17.605109,302.35955 -18.750857,296.19939 -42.381921,293.71488 c -24.192913,-2.54358 -37.401654,-1.97841 -37.401654,-1.97841 z m -1.5e-5,-239.499997 c -78.70587,0.032 -156.78736,15.563375 -229.51437,45.653303 -72.70252,30.149034 -138.89675,74.378684 -194.57277,130.009504 l -1e-4,1.6e-4 c -55.6308,55.67595 -99.86042,121.87014 -130.00944,194.57263 l -4e-5,1.8e-4 c -30.08992,72.72697 -45.62126,150.80841 -45.65323,229.51422 0.032,78.70589 15.56333,156.78739 45.65326,229.5144 30.14906,72.70254 74.37873,138.89683 130.00953,194.57283 55.67604,55.6307 121.87026,99.8604 194.57277,130.0094 72.72701,30.0899 150.80851,45.6213 229.5144,45.6533 78.7058879,-0.032 156.787389,-15.5634 229.5144,-45.6533 72.70251,-30.149 138.89674,-74.3787 194.57277,-130.0094 55.6308,-55.676 99.86047,-121.87029 130.00953,-194.57283 30.08994,-72.727 45.62131,-150.80851 45.65327,-229.51439 -0.032,-78.70582 -15.5633,-156.78726 -45.65319,-229.51424 l -7e-5,-1.8e-4 C 444.1641,349.76958 399.93448,283.57539 344.30372,227.89942 l -1.3e-4,-1.4e-4 C 288.62757,172.26846 222.43334,128.03881 149.73082,97.889773 77.094688,67.837446 -0.88254879,52.307303 -79.488502,52.236666 L -79.60778,292.23639 c 0,0 -0.727218,-5.34034 0.685551,-14.30625 1.380799,-8.76301 5.003801,-21.80166 14.708389,-35.82537 9.602366,-13.87598 26.266967,-30.19066 54.2204625,-42.65467 27.3120445,-12.178 69.3101525,-22.0817 124.2539875,-15.92782 52.13141,5.84957 122.53124,27.47699 192.26244,82.15754 34.19631,26.84238 68.57942,62.05032 98.52867,106.61799 12.39856,18.45037 24.8481,39.72036 36.35184,63.80586 27.26963,57.18388 49.26688,130.55078 52.04454,215.88281 2.22108,69.64979 -8.54111,145.78133 -37.92823,221.72996 -26.27909,67.77545 -66.82773,133.71516 -122.319,191.25456 -51.82332,53.6581 -115.40236,98.6312 -188.08395,129.9731 -69.813058,30.0432 -146.282571,46.7437 -224.900502,47.6626 -77.148608,0.843 -154.422768,-13.5393 -226.928888,-42.7656 -72.49446,-29.287 -138.3708,-72.6656 -193.7423,-127.1834 -56.4011,-55.619 -100.43063,-121.34015 -130.39331,-192.41281 -31.15715,-74.07044 -46.24757,-151.92773 -46.62573,-228.25838 -0.33991,-81.83947 16.16449,-159.60415 44.63743,-229.08205 31.99029,-77.88157 77.95062,-143.05187 129.29928,-194.67155 0,0 1.2e-4,-9e-5 1.2e-4,-9e-5 63.09899,-63.32945 132.23646,-104.46596 194.26997,-130.268317 67.77743,-28.126922 127.62797,-38.327902 167.06473,-42.466572 40.24459,-4.223447 62.41869,-3.261458 62.41869,-3.261458 z"
               style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000080;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
          </g>
        </g>
      </g>
      <path
         style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.5;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:40;stroke-opacity:1"
         id="path3843"
         inkscape:path-effect="#path-effect3850"
         sodipodi:type="arc"
         sodipodi:cx="-1040.0001"
         sodipodi:cy="212.3622"
         sodipodi:rx="280"
         sodipodi:ry="280"
         d="m -806.95205,212.25149 93.89645,-0.0534 c -2.91168,-175.013581 -151.91466,-323.96277 -326.9445,-326.78312 -175.0846,2.82124 -324.126,151.862648 -326.9472,326.94721 2.8212,175.08452 151.8626,324.12591 326.9471,326.9472 0,-6e-5 10e-5,10e-6 10e-5,10e-6 175.08454,-2.82124 324.12595,-151.86265 326.94719,-326.94721 0,0 0.49128,14.44108 -3.1839,39.88058 -3.6523,25.2811 -12.05025,61.74206 -32.90721,102.20953 -20.80847,40.37338 -54.09126,84.49998 -103.43868,120.46983 -48.8686,35.62083 -113.32136,62.64186 -187.4174,63.58138 -82.1193,-1.56707 -162.035,-35.81121 -223.1969,-95.87147 -60.8875,-59.79088 -99.5479,-142.0155 -100.1783,-230.26985 0,0 10e-5,-7e-5 10e-5,-7e-5 2.2334,-97.08541 49.7756,-180.806822 113.1521,-236.223471 64.3726,-56.287522 140.6773,-81.004879 210.223,-80.348199 67.56778,2.39753 120.32154,27.50129 153.77729,49.954276 35.09193,23.551067 60.42997,51.5806862 77.70848,77.365826 17.40031,25.96692 27.60024,50.964475 33.22452,72.031621 11.21103,41.993737 5.78183,72.270227 -0.41781,88.348957 -6.54232,16.96745 -15.5962,24.03661 -21.31415,26.76448 -6.0533,2.88786 -9.93028,1.99587 -9.93028,1.99587 z"
         transform="matrix(0.21847287,0,0,0.21847287,147.6423,605.34096)" />
      <g
         id="g3875"
         transform="translate(4.2410005,-7.13888)">
        <path
           style="fill:#ff0000;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
           d="m -36.860914,705.82996 0,-93.90172 -93.901796,0 c 0,0 61.754596,-0.84656 78.251496,15.65029 16.4968,16.49685 15.6503,78.25143 15.6503,78.25143 z"
           id="path3765"
           inkscape:connector-curvature="0"
           sodipodi:nodetypes="ccczc" />
        <path
           sodipodi:nodetypes="ccczc"
           inkscape:connector-curvature="0"
           id="path3863"
           d="m -130.75531,611.9209 0,93.90166 93.901696,0 c 0,0 -61.7545,0.8466 -78.251396,-15.6503 -16.4968,-16.4968 -15.6503,-78.25136 -15.6503,-78.25136 z"
           style="fill:#054117;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
      </g>
    </g>
  </svg>
  
    </div>
    </div>
    
   <h3 class="text-center  mt-5 bg-slate-200">Click a box to transition out</h3>
    <div class=" flex justify-between items-center  h-48 bg-zinc-50/15 overflow-hidden">
      <div class="box w-1/5 h-1/2 cursor-pointer opacity-0 bg-green-500 green">1</div>
      <div class="box w-1/5 h-1/2 cursor-pointer opacity-0 bg-purple-500 purple">2</div>
      <div class="box w-1/5 h-1/2 cursor-pointer opacity-0 bg-orange-500 orange">3</div>
      <div class="box w-1/5 h-1/2 cursor-pointer opacity-0 bg-purple-500 purple">4</div>
      <div class="box w-1/5 h-1/2 cursor-pointer opacity-0 bg-green-500 green">5</div>
            </div>
            <div class=" flex justify-between items-center  h-48  overflow-hidden">
                <svg class="racket w-20" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 301.2m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37" /><path d="M400.3 744.5c2.1-0.7 4.1-1.4 6.2-2-2 0.6-4.1 1.3-6.2 2z m0 0c2.1-0.7 4.1-1.4 6.2-2-2 0.6-4.1 1.3-6.2 2z" fill="#39393A" /><path d="M511.8 256.6c24.4 0 44.2 19.8 44.2 44.2S536.2 345 511.8 345s-44.2-19.8-44.2-44.2 19.9-44.2 44.2-44.2m0-20c-35.5 0-64.2 28.7-64.2 64.2s28.7 64.2 64.2 64.2 64.2-28.7 64.2-64.2-28.7-64.2-64.2-64.2z" fill="#E73B37" /><path d="M730.7 529.5c0.4-8.7 0.6-17.4 0.6-26.2 0-179.6-86.1-339.1-219.3-439.5-133.1 100.4-219.2 259.9-219.2 439.5 0 8.8 0.2 17.5 0.6 26.1-56 56-90.6 133.3-90.6 218.7 0 61.7 18 119.1 49.1 167.3 30.3-49.8 74.7-90.1 127.7-115.3 39-18.6 82.7-29 128.8-29 48.3 0 93.9 11.4 134.3 31.7 52.5 26.3 96.3 67.7 125.6 118.4 33.4-49.4 52.9-108.9 52.9-173.1 0-85.4-34.6-162.6-90.5-218.6zM351.1 383.4c9.2-37.9 22.9-74.7 40.6-109.5a502.1 502.1 0 0 1 63.6-95.9c17.4-20.6 36.4-39.9 56.8-57.5 20.4 17.6 39.4 36.9 56.8 57.5 24.8 29.5 46.2 61.8 63.6 95.9 17.7 34.8 31.4 71.6 40.6 109.5 8.7 35.8 13.5 72.7 14.2 109.9C637.4 459 577 438.9 512 438.9c-65 0-125.3 20.1-175.1 54.4 0.7-37.2 5.5-74.1 14.2-109.9z m-90.6 449.2c-9.1-27-13.7-55.5-13.7-84.4 0-35.8 7-70.6 20.8-103.2 8.4-19.8 19-38.4 31.9-55.5 9.7 61.5 29.5 119.7 57.8 172.6-36.4 17.8-69 41.6-96.8 70.5z m364.2-85.3c-0.7-0.3-1.5-0.5-2.2-0.8-0.4-0.2-0.9-0.3-1.3-0.5-0.6-0.2-1.3-0.5-1.9-0.7-0.8-0.3-1.5-0.5-2.3-0.8-0.8-0.3-1.5-0.5-2.3-0.7l-0.9-0.3c-1-0.3-2.1-0.7-3.1-1-1.2-0.4-2.4-0.7-3.5-1.1l-3-0.9c-0.2-0.1-0.4-0.1-0.7-0.2-1.1-0.3-2.3-0.7-3.4-1-1.2-0.3-2.4-0.6-3.5-0.9l-3.6-0.9-3.6-0.9c-1-0.3-2.1-0.5-3.1-0.7-1.2-0.3-2.4-0.5-3.6-0.8-1.3-0.3-2.5-0.6-3.8-0.8h-0.3c-0.9-0.2-1.9-0.4-2.8-0.6-0.4-0.1-0.7-0.1-1.1-0.2-1.1-0.2-2.2-0.4-3.4-0.6-1.2-0.2-2.4-0.4-3.6-0.7l-5.4-0.9c-0.9-0.1-1.9-0.3-2.8-0.4-0.8-0.1-1.6-0.3-2.5-0.4-2.6-0.4-5.1-0.7-7.7-1-1.2-0.1-2.3-0.3-3.5-0.4h-0.4c-0.9-0.1-1.8-0.2-2.8-0.3-1.1-0.1-2.1-0.2-3.2-0.3-1.7-0.2-3.4-0.3-5.1-0.4-0.8-0.1-1.5-0.1-2.3-0.2-0.9-0.1-1.9-0.1-2.8-0.2-0.4 0-0.8 0-1.2-0.1-1.1-0.1-2.1-0.1-3.2-0.2-0.5 0-1-0.1-1.5-0.1-1.3-0.1-2.6-0.1-3.9-0.1-0.8 0-1.5-0.1-2.3-0.1-1.2 0-2.4 0-3.5-0.1h-13.9c-2.3 0-4.6 0.1-6.9 0.2-0.9 0-1.9 0.1-2.8 0.1-0.8 0-1.5 0.1-2.3 0.1-1.4 0.1-2.8 0.2-4.1 0.3-1.4 0.1-2.7 0.2-4.1 0.3-1.4 0.1-2.7 0.2-4.1 0.4-0.6 0-1.2 0.1-1.8 0.2l-7.8 0.9c-1.1 0.1-2.1 0.3-3.2 0.4-1 0.1-2.1 0.3-3.1 0.4-3.2 0.5-6.4 0.9-9.5 1.5-0.7 0.1-1.4 0.2-2.1 0.4-0.9 0.1-1.7 0.3-2.6 0.5-1.1 0.2-2.3 0.4-3.4 0.6-0.9 0.2-1.7 0.3-2.6 0.5-0.4 0.1-0.8 0.1-1.1 0.2-0.7 0.1-1.4 0.3-2.1 0.4-1.2 0.3-2.4 0.5-3.6 0.8-1.2 0.3-2.4 0.5-3.6 0.8-0.2 0-0.4 0.1-0.6 0.1-0.5 0.1-1 0.2-1.5 0.4-1.1 0.3-2.3 0.6-3.5 0.9-1.3 0.3-2.5 0.6-3.8 1-0.4 0.1-0.9 0.2-1.4 0.4-1.3 0.4-2.7 0.7-4 1.1-1.5 0.4-3 0.9-4.6 1.3-1 0.3-2.1 0.6-3.1 1-2.1 0.6-4.1 1.3-6.2 2-0.7 0.2-1.4 0.5-2.1 0.7-15-27.5-27.4-56.4-37-86.2-11.7-36.1-19.2-73.6-22.5-111.6-0.6-6.7-1-13.3-1.3-20-0.1-1.2-0.1-2.4-0.1-3.6-0.1-1.2-0.1-2.4-0.1-3.6 0-1.2-0.1-2.4-0.1-3.6 0-1.2-0.1-2.4-0.1-3.7 18.8-14 39.2-25.8 61-35 36.1-15.3 74.5-23 114.1-23 39.6 0 78 7.8 114.1 23 21.8 9.2 42.2 20.9 61 35v0.1c0 1 0 1.9-0.1 2.9 0 1.4-0.1 2.8-0.1 4.3 0 0.7 0 1.3-0.1 2-0.1 1.8-0.1 3.5-0.2 5.3-0.3 6.7-0.8 13.3-1.3 20-3.3 38.5-11 76.5-23 113-9.7 30.3-22.3 59.4-37.6 87.1z m136.8 90.9a342.27 342.27 0 0 0-96.3-73.2c29.1-53.7 49.5-112.8 59.4-175.5 12.8 17.1 23.4 35.6 31.8 55.5 13.8 32.7 20.8 67.4 20.8 103.2 0 31-5.3 61.3-15.7 90z" fill="#39393A" /><path d="M512 819.3c8.7 0 24.7 22.9 24.7 60.4s-16 60.4-24.7 60.4-24.7-22.9-24.7-60.4 16-60.4 24.7-60.4m0-20c-24.7 0-44.7 36-44.7 80.4 0 44.4 20 80.4 44.7 80.4s44.7-36 44.7-80.4c0-44.4-20-80.4-44.7-80.4z" fill="#E73B37" /></svg>
               
              <div class="bg-blue-600 w-28 h-full mr-32 wall">2</div>
                    </div>
   <!-- <div class="bg-slate-400 h-28"> </div>
   <div id="mojs-div" class="bg-slate-600/20 h-44">5</div>
   <div class="bg-slate-600/20 h-44">6</div>
   <div class="bg-slate-600/20 h-44">7</div>
   <div class="bg-slate-600 h-44">7</div>
   <div class="bg-slate-600 h-44">7</div>
    <div>09</div>
  </div>
  <div class="w-full h-80">3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div> -->
  
  <div class=" flex justify-between items-center  h-48  overflow-hidden">
    <svg id="motionPath" class="w-2/6" viewBox="-20 0 557 190">
    <path id="path" fill="none" d="M8,102 C15,83 58,25 131,24 206,24 233,63 259,91 292,125 328,155 377,155 464,155 497,97 504,74"/>
    <g class="astronaut">
      <path fill="#CCC" d="M25 127.7h.5v-16.1H4.1c.9 3.7 2.8 6.9 5.6 9.8 4.3 4.2 9.4 6.3 15.3 6.3m69.9 0h.1c5.9 0 11-2.1 15.2-6.3 2.9-2.9 4.7-6.1 5.6-9.8H94.4v16.1h.5M31.8 31.4c-4.3.9-8.1 2.9-11.4 6.2-4.5 4.5-6.7 9.9-6.7 16.2v13.6c3.3-2.1 7.1-3.2 11.3-3.2.9 0 1.7 0 2.6.1-1.5-3.9-2.3-8.2-2.3-12.7 0-7.6 2.2-14.3 6.5-20.2m74.5 36V53.8c0-6.3-2.2-11.7-6.7-16.2-3-3-6.5-5.1-10.4-6l-.2.8c3.9 5.6 5.8 12 5.8 19.2 0 4.2-.7 8.1-2 11.8l.1.8c.7-.1 1.4-.1 2.2-.1 4.1.1 7.8 1.2 11.2 3.3z"/>
      <path fill="#FFF" d="M59.9 17.1h-.1c-9.5 0-17.6 3.4-24.3 10.1-1.3 1.3-2.5 2.7-3.6 4.2-4.3 5.9-6.5 12.6-6.5 20.3 0 4.6.8 8.8 2.3 12.7.2.6.5 1.2.8 1.8 1.7 3.6 4 6.9 7.1 9.9 3.3 3.3 6.8 5.7 10.7 7.4.1 0 .2.1.2.1.8.3 1.6.7 2.5.9 3.4 1.1 7.1 1.7 11 1.7 9.5 0 17.7-3.4 24.4-10.1 3.6-3.6 6.2-7.5 7.9-11.8l.3-.9c1.3-3.6 1.9-7.6 1.9-11.7 0-7.2-1.9-13.5-5.7-19.1l-.2-.2s0-.1-.1-.1l-.1-.1-.1-.1-.1-.1c0-.1-.1-.1-.1-.2 0 0 0-.1-.1-.1-1.1-1.5-2.3-2.9-3.7-4.3-6.8-6.9-14.9-10.3-24.4-10.3m50.2 53.4c-1.2-1.2-2.5-2.3-3.9-3.1-3.3-2.1-7.1-3.2-11.3-3.2-.7 0-1.5 0-2.2.1h-.4l-.3-.1c-1.7 4.3-4.3 8.3-7.9 11.8-6.7 6.7-14.9 10.1-24.4 10.1-3.9 0-7.6-.6-11-1.7-.8-.3-1.7-.6-2.5-.9-.1 0-.2-.1-.2-.1-3.9-1.7-7.5-4.2-10.7-7.4-3-3-5.4-6.3-7.1-9.9-.3-.6-.5-1.2-.8-1.8-.8-.1-1.7-.1-2.6-.1-4.2 0-8 1.1-11.3 3.2-1.4.9-2.7 1.9-3.9 3.1-4.2 4.2-6.3 9.2-6.3 15.2v20.6c0 1.9.2 3.7.6 5.4h21.4V89.1 145c.6 3.3 2.2 6.2 4.7 8.7 3.3 3.4 7.3 5 12 5s8.9-1.8 12.7-5.3c2.8-2.6 4.5-5.5 5-8.7v-15.9H47h26-13v15.9c.5 3.2 2.2 6.1 5 8.7 3.8 3.5 8 5.3 12.7 5.3 4.7 0 8.7-1.7 12-5 2.5-2.5 4-5.4 4.7-8.7V89v22.6h21.4c.4-1.7.6-3.5.6-5.4V85.6c0-5.8-2.1-10.9-6.3-15.1M60 118.1V88v30.1z"/>
      <path fill="#2D2D2D" d="M59.7 2.5c-1.1 0-2 .4-2.7 1.1-.7.7-1.1 1.6-1.1 2.7s.4 2 1.1 2.7c.7.7 1.6 1.1 2.7 1.1s2-.4 2.7-1.1c.7-.7 1.1-1.6 1.1-2.7s-.4-2-1.1-2.7c-.7-.8-1.6-1.1-2.7-1.1z"/>
      <path fill="none" stroke="#2D2D2D" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M115.8 111.6c.4-1.7.6-3.5.6-5.4V85.6c0-5.9-2.1-11-6.3-15.2-1.2-1.2-2.5-2.3-3.9-3.1-3.3-2.1-7.1-3.2-11.3-3.2h0c-.7 0-1.5 0-2.2.1h-.4m-.2.1c-1.7 4.3-4.3 8.3-7.9 11.8-6.7 6.7-14.9 10.1-24.4 10.1-3.9 0-7.6-.6-11-1.7-.8-.3-1.7-.6-2.5-.9-.1 0-.2-.1-.2-.1-3.9-1.7-7.5-4.2-10.7-7.4-3-3-5.4-6.3-7.1-9.9-.3-.6-.5-1.2-.8-1.8-.8-.1-1.7-.1-2.6-.1h0c-4.2 0-8 1.1-11.3 3.2-1.4.9-2.7 1.9-3.9 3.1-4.2 4.2-6.3 9.2-6.3 15.2v20.6c0 1.9.2 3.7.6 5.4h21.4V89.2m80.9-21.8V53.8c0-6.3-2.2-11.7-6.7-16.2-3-3-6.5-5.1-10.4-6m-.3.8c3.9 5.6 5.8 12 5.8 19.2 0 4.2-.7 8.1-2 11.8m-33-53.3c-1.1 0-2-.4-2.7-1.1-.7-.7-1.1-1.6-1.1-2.7s.4-2 1.1-2.7c.7-.7 1.6-1.1 2.7-1.1s2 .4 2.7 1.1c.7.7 1.1 1.6 1.1 2.7s-.4 2-1.1 2.7c-.7.7-1.6 1.1-2.7 1.1v7.1h.1c9.5 0 17.7 3.4 24.4 10.1 1.4 1.4 2.6 2.8 3.7 4.3 0 0 0 .1.1.1 0 .1.1.1.1.2l.1.1s0 0 0 0l.1.1s0 0 0 0 0 0 0 0l.1.1h0l.1.1.2.2c3.8 5.6 5.7 12 5.7 19.1 0 4.2-.6 8.1-1.9 11.7l-.3.9m-3-32.6h0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.3-.1-.6-.1-.8-.2h-.2s0 .1.1.1v.1c.1.1.2.3.3.4 0 0 0 0 0 0h0c.1.1.2.3.3.4 0 0 0 0 0 0m-57.1-1c1.1-1.4 2.3-2.8 3.6-4.2 6.7-6.7 14.8-10.1 24.3-10.1m-46 50.3V53.8c0-6.3 2.2-11.7 6.7-16.2 3.3-3.3 7.1-5.4 11.4-6.2-4.3 5.9-6.5 12.6-6.5 20.3 0 4.6.8 8.8 2.3 12.7m65.1-.9s0 0 0 0h0v.2l-.2.5c0 .1-.1.1-.1.2m2.3 63.3h.3c5.9 0 11-2.1 15.2-6.3 2.9-2.9 4.7-6.1 5.6-9.8H94.4v16.1h.2m0 0h0m-47.3 1.1H73m-13 16c.5 3.2 2.2 6.1 5 8.7 3.8 3.5 8 5.3 12.7 5.3 4.7 0 8.7-1.7 12-5 2.5-2.5 4-5.4 4.7-8.7v-17.3m-68.8-.1V145c.6 3.3 2.2 6.2 4.7 8.7 3.3 3.4 7.3 5 12 5s8.9-1.8 12.7-5.3c2.8-2.6 4.5-5.5 5-8.7v-15.9m-34.4-1.1s0 0 0 0h-.3s0 0 0 0H25c-5.9 0-11-2.1-15.2-6.3-2.9-2.9-4.7-6.1-5.6-9.8m21.4 0v16.1m68.8-38.6v22.6M60 118.1V88"/>
      <path fill="#7592A0" d="M84.5 68.6c6.8-4.3 10.2-9.5 10.2-15.5 0-5.1-2.4-9.6-7.2-13.4H32c-4.8 3.8-7.3 8.3-7.3 13.4 0 6.1 3.4 11.2 10.2 15.5C41.7 72.9 50 75 59.6 75c9.8 0 18-2.1 24.9-6.4z"/>
      <path fill="none" stroke="#2D2D2D" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M94.7 53.1c0 6.1-3.4 11.2-10.2 15.5-6.8 4.3-15.1 6.4-24.7 6.4-9.7 0-17.9-2.1-24.7-6.4-6.8-4.3-10.2-9.5-10.2-15.5 0-5.1 2.4-9.6 7.3-13.4h55.5c4.6 3.8 7 8.3 7 13.4z"/>
      <path fill="none" stroke="#E6E6E6" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M83.5 47.6c2.4 3.5 2.4 7.8 0 12.7M35.8 47.6c-2.4 3.5-2.4 7.8 0 12.7"/>
      <path fill="#1668B2" stroke="#EF3D43" stroke-miterlimit="10" stroke-width="1.439" d="M70.9 95.9c0-4.807 3.893-8.7 8.7-8.7 4.807 0 8.7 3.893 8.7 8.7 0 4.807-3.893 8.7-8.7 8.7a8.698 8.698 0 0 1-8.7-8.7z"/>
      <path fill="#FFF" d="M79.6 101.7c-1.7 0-2.8-.9-2.6-1.9.5-2.6.9-5.2 1.4-7.8.2-1 .4-2.8 1.2-2.8.8 0 1 1.8 1.2 2.8.5 2.6.9 5.2 1.4 7.8.3 1-.9 1.8-2.6 1.9z"/>
      <path fill="#FFF" d="M76.4 101.2c-.4 0-.8-.3-.8-.8v-3.3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v3.3c0 .5-.3.8-.8.8zm6.4 0c-.4 0-.7-.3-.7-.7v-3.3c0-.4.3-.7.7-.7.4 0 .7.3.7.7v3.3c.1.4-.3.7-.7.7z"/>
      <g fill="#FFF">
        <path d="M73.3 95.3a.7.7 0 1 1 1.4 0 .7.7 0 0 1-1.4 0z"/>
        <path d="M73.9 95.3c0-.663.045-1.2.1-1.2.055 0 .1.537.1 1.2 0 .663-.045 1.2-.1 1.2-.055 0-.1-.537-.1-1.2z"/>
        <path d="M72.7 95.3c0-.055.582-.1 1.3-.1.718 0 1.3.045 1.3.1 0 .055-.582.1-1.3.1-.718 0-1.3-.045-1.3-.1z"/>
      </g>
      <g fill="#FFF">
        <path d="M84.1 93.4a.7.7 0 1 1 1.4 0 .7.7 0 0 1-1.4 0z"/>
        <path d="M84.7 93.4c0-.663.045-1.2.1-1.2.055 0 .1.537.1 1.2 0 .663-.045 1.2-.1 1.2-.055 0-.1-.537-.1-1.2z"/>
        <path d="M83.5 93.4c0-.055.582-.1 1.3-.1.718 0 1.3.045 1.3.1 0 .055-.582.1-1.3.1-.718 0-1.3-.045-1.3-.1z"/>
      </g>
    </g>
  </svg>
   
        </div>
  
  `
}

function svg_miniBus() {
    return (` 
  <svg id="miniBus" viewBox="0 0 915.7 402.85" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-36 h-20 " version="1.1">
   <defs id="defs6030">
    <linearGradient id="linearGradient4036">
     <stop id="stop4038" offset="0" stop-color="#c4daea"/>
     <stop id="stop4040" offset="1" stop-color="#6781e4"/>
    </linearGradient>
    <pattern height="5.18" id="Wavy" patternUnits="userSpaceOnUse" width="30.07">
     <path d="m7.6,0.06c-2.52,-0.25 -4.94,0.24 -7.61,1.73l0,1.27c2.78,-1.63 5.18,-2.01 7.48,-1.78c2.3,0.23 4.5,1.08 6.78,1.94c4.57,1.71 9.55,3.46 15.82,-0.16l-0.01,-1.27c-6.44,3.71 -10.81,1.98 -15.37,0.27c-2.28,-0.85 -4.57,-1.75 -7.09,-2z" id="path5321"/>
    </pattern>
    <linearGradient id="linearGradient6701">
     <stop id="stop6703" offset="0" stop-color="#545454"/>
     <stop id="stop6705" offset="1" stop-color="#b1b1b1"/>
    </linearGradient>
    <linearGradient id="linearGradient6691" x1="0.57" x2="0.5" y1="0.2" y2="1">
     <stop id="stop6687" offset="0" stop-color="#e6e6e6"/>
     <stop id="stop6689" offset="1" stop-color="#545454"/>
    </linearGradient>
    <radialGradient cx="997.51" cy="622.1" gradientTransform="matrix(1 0 0 1.4145 0 -257.87)" gradientUnits="userSpaceOnUse" id="radialGradient6699" r="6.01">
     <stop id="stop6695" offset="0" stop-color="#cfcfcf"/>
     <stop id="stop6697" offset="1" stop-color="#1c1c1c"/>
    </radialGradient>
    <linearGradient id="linearGradient6707" x1="-0.02" x2="1.02" xlink:href="#linearGradient6701" y1="0.5" y2="0.5"/>
    <radialGradient cx="96.03" cy="598.28" gradientTransform="matrix(1.6582 1.6582 -.94574 .94574 506.58 -120.97)" gradientUnits="userSpaceOnUse" id="radialGradient6715" r="18.09" xlink:href="#linearGradient6701"/>
    <linearGradient id="linearGradient3690" x1="1.01" x2="-0.01" xlink:href="#linearGradient6701" y1="0.5" y2="0.5"/>
    <linearGradient id="linearGradient4014" x1="0" x2="1" xlink:href="#linearGradient6701" y1="0.5" y2="0.5"/>
    <linearGradient id="linearGradient4024" x1="-0.03" x2="0.69" xlink:href="#linearGradient6701" y1="0.5" y2="0.5"/>
    <linearGradient id="linearGradient4034" x1="-0.09" x2="1.09" xlink:href="#linearGradient6701" y1="0.5" y2="0.5"/>
    <radialGradient cx="168.15" cy="370.32" gradientTransform="matrix(1 0 0 2.0091 0 -373.68)" gradientUnits="userSpaceOnUse" id="radialGradient4042" r="34.27" xlink:href="#linearGradient4036"/>
    <linearGradient id="linearGradient4050" x1="0" x2="1" xlink:href="#linearGradient4036" y1="0.5" y2="0.5"/>
    <radialGradient cx="440" cy="344.97" gradientTransform="matrix(1 0 0 .70276 0 111.67)" gradientUnits="userSpaceOnUse" id="radialGradient4062" r="98.18" xlink:href="#linearGradient4036"/>
    <radialGradient cx="660" cy="351.56" gradientTransform="matrix(.52627 .21051 -.39770 .99425 452.48 -129.38)" gradientUnits="userSpaceOnUse" id="radialGradient4074" r="100.58" xlink:href="#linearGradient4036"/>
    <radialGradient cx="855" cy="322.06" gradientTransform="matrix(1 0 0 .96161 0 14.404)" gradientUnits="userSpaceOnUse" id="radialGradient4082" r="71.21" xlink:href="#linearGradient4036"/>
    <linearGradient id="linearGradient4850" x1="-0.01" x2="1.01" y1="0.5" y2="0.5">
     <stop id="stop4846" offset="0" stop-color="#eae92f"/>
     <stop id="stop4848" offset="1" stop-color="#eae92f" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="linearGradient4868" x1="0" x2="1.09" y1="0.5" y2="0.92">
     <stop id="stop4864" offset="0" stop-color="#ea2f32"/>
     <stop id="stop4866" offset="1" stop-color="#ea2f32" stop-opacity="0"/>
    </linearGradient>
    <radialGradient cx="664.1" cy="538.17" gradientTransform="matrix(.63292 -.29165 .316 .68577 98.067 364.52)" gradientUnits="userSpaceOnUse" id="radialGradient4876" r="196.97" spreadMethod="reflect">
     <stop id="stop4872" offset="0" stop-color="#ae2fea"/>
     <stop id="stop4874" offset="1" stop-color="#ae2fea" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="linearGradient4992" x1="-0.01" x2="1.01" y1="0.5" y2="0.5">
     <stop id="stop6703-6" offset="0" stop-color="#545454"/>
     <stop id="stop6705-0" offset="1" stop-color="#b1b1b1"/>
    </linearGradient>
    <radialGradient cx="265.64" cy="426.91" gradientTransform="matrix(1 0 0 1.3403 0 -145.29)" gradientUnits="userSpaceOnUse" id="radialGradient5023" r="98.32" spreadMethod="reflect">
     <stop id="stop5019" offset="0" stop-color="#07d400"/>
     <stop id="stop5021" offset="1" stop-color="#a6f4a3" stop-opacity="0.75"/>
    </radialGradient>
    <linearGradient id="linearGradient5071" x1="-0.04" x2="2.95" y1="0.5" y2="0.98">
     <stop id="stop5067" offset="0" stop-color="#330080"/>
     <stop id="stop5069" offset="1" stop-color="#330080" stop-opacity="0"/>
    </linearGradient>
   </defs>
   <metadata>image/svg+xmlOpenclipartHippie Van2010-03-21T14:29:00Colorful van that reminds of the hippie days, similar to an old VW vanhttp://openclipart.org/detail/32869/hippie-van-by-pflueglpflueglbusclip artclipartcolorfulhippieminivanpsychedelicvan</metadata>
   <g class="layer">
    <title>Layer 1</title>
    <g id="layer1" transform="translate(-85.834 -292.72)">
     <g id="g6073">
      <path d="m355.86,623.17c0,39.44 -33,71.4 -73.71,71.4s-73.7,-31.96 -73.7,-71.4s33,-71.4 73.7,-71.4s73.71,31.96 73.71,71.4z" id="path6039"/>
      <path d="m300.58,622.02c0,15.9 -12.38,28.79 -27.64,28.79s-27.64,-12.89 -27.64,-28.79s12.38,-28.79 27.64,-28.79s27.64,12.89 27.64,28.79z" fill="#ccc" id="path6041" transform="matrix(1.7185 0 0 1.563 -186.56 -348.1)"/>
      <path d="m295,625.66c0,7.42 -6.87,13.43 -15.35,13.43c-8.47,0 -15.35,-6.01 -15.35,-13.43c0,-7.42 6.88,-13.43 15.35,-13.43c8.48,0 15.35,6.01 15.35,13.43z" fill="#917c6f" id="path6047" transform="matrix(1.1629 0 0 1.2555 -43.053 -161.44)"/>
      <path d="m257.24,624.62c-0.32,0.05 -0.64,0.11 -0.97,0.15c-0.4,0.07 -0.81,0.1 -1.22,0.11c-0.53,0.02 -1.06,0.04 -1.59,0.04c-0.4,0 -0.8,-0.01 -1.2,-0.02l2.31,-1.68c0.4,0.01 0.8,0.02 1.2,0.02c0.53,-0.02 1.06,-0.03 1.59,-0.05c0.41,-0.03 0.81,-0.08 1.21,-0.14c0.33,-0.05 0.65,-0.11 0.98,-0.14l-2.31,1.71z" fill="#fc0" id="path6049"/>
      <path d="m251.81,598.85c0.25,0.14 0.5,0.28 0.74,0.41c0.31,0.17 0.62,0.34 0.92,0.52c0.33,0.2 0.66,0.38 0.99,0.57c0.38,0.21 0.75,0.41 1.11,0.63c0.39,0.23 0.77,0.47 1.15,0.7c0.4,0.25 0.8,0.51 1.19,0.77c0.42,0.26 0.82,0.55 1.2,0.86c0.38,0.31 0.76,0.63 1.15,0.93c0.39,0.32 0.78,0.62 1.16,0.94c0.38,0.31 0.75,0.63 1.12,0.95c0.37,0.32 0.74,0.65 1.11,0.98c0.19,0.16 0.38,0.34 0.56,0.51l-2.44,1.51c-0.18,-0.17 -0.37,-0.35 -0.56,-0.51c-0.37,-0.33 -0.74,-0.65 -1.11,-0.97c-0.36,-0.32 -0.73,-0.64 -1.11,-0.95c-0.38,-0.31 -0.77,-0.62 -1.16,-0.93c-0.39,-0.31 -0.76,-0.62 -1.15,-0.93c-0.38,-0.3 -0.77,-0.58 -1.18,-0.85c-0.39,-0.25 -0.79,-0.51 -1.19,-0.75c-0.38,-0.24 -0.76,-0.48 -1.15,-0.7c-0.36,-0.22 -0.73,-0.42 -1.1,-0.62c-0.33,-0.19 -0.66,-0.38 -0.99,-0.58c-0.31,-0.17 -0.62,-0.34 -0.92,-0.51c-0.25,-0.14 -0.51,-0.27 -0.75,-0.42l2.41,-1.56z" fill="#fc0" id="path6051"/>
      <path d="m271.36,588.63c0.1,0.28 0.21,0.55 0.31,0.83c0.1,0.32 0.2,0.64 0.32,0.95c0.14,0.35 0.27,0.71 0.39,1.07c0.15,0.43 0.3,0.85 0.46,1.27c0.15,0.44 0.31,0.88 0.46,1.32c0.18,0.46 0.35,0.91 0.54,1.36c0.19,0.45 0.37,0.9 0.54,1.35c0.16,0.45 0.32,0.91 0.49,1.36c0.14,0.37 0.28,0.75 0.41,1.14l-2.51,1.38c-0.13,-0.37 -0.27,-0.75 -0.41,-1.13c-0.17,-0.45 -0.33,-0.9 -0.49,-1.35c-0.17,-0.45 -0.35,-0.9 -0.53,-1.35c-0.19,-0.45 -0.37,-0.91 -0.54,-1.37c-0.16,-0.43 -0.32,-0.87 -0.47,-1.31c-0.16,-0.43 -0.31,-0.85 -0.46,-1.28c-0.13,-0.35 -0.25,-0.71 -0.39,-1.07c-0.12,-0.31 -0.22,-0.63 -0.33,-0.95c-0.1,-0.28 -0.2,-0.56 -0.31,-0.83l2.52,-1.39z" fill="#fc0" id="path6053"/>
      <path d="m284.88,604.65c-0.08,-0.36 -0.13,-0.72 -0.18,-1.08c-0.05,-0.41 -0.1,-0.83 -0.13,-1.24c-0.03,-0.44 -0.01,-0.88 0,-1.32c0.02,-0.48 0.03,-0.97 0.07,-1.45c0.06,-0.56 0.18,-1.12 0.29,-1.67c0.12,-0.56 0.25,-1.12 0.38,-1.68c0.12,-0.59 0.26,-1.18 0.41,-1.77c0.15,-0.62 0.33,-1.22 0.54,-1.81c0.22,-0.59 0.47,-1.17 0.73,-1.74c0.24,-0.56 0.5,-1.1 0.77,-1.65c0.05,-0.08 0.09,-0.17 0.13,-0.26l2.61,-1.18c-0.04,0.09 -0.08,0.17 -0.13,0.26c-0.26,0.54 -0.53,1.08 -0.78,1.63c-0.25,0.57 -0.51,1.14 -0.73,1.72c-0.21,0.59 -0.41,1.18 -0.56,1.79c-0.15,0.59 -0.29,1.17 -0.41,1.76c-0.12,0.56 -0.26,1.12 -0.38,1.68c-0.11,0.55 -0.24,1.09 -0.3,1.64c-0.06,0.48 -0.06,0.96 -0.08,1.44c-0.01,0.43 -0.04,0.86 -0.01,1.29c0.03,0.41 0.08,0.82 0.13,1.22c0.04,0.36 0.08,0.71 0.16,1.06l-2.53,1.36z" fill="#fc0" id="path6055"/>
      <path d="m297.81,604.35c0.34,-0.17 0.68,-0.34 1.03,-0.49c0.44,-0.18 0.88,-0.36 1.32,-0.52c0.49,-0.18 0.99,-0.34 1.47,-0.54c0.49,-0.2 0.99,-0.39 1.49,-0.57c0.51,-0.2 1.01,-0.42 1.5,-0.66c0.52,-0.26 1.03,-0.54 1.53,-0.83c2.73,-1.55 -3.06,1.87 -0.98,0.56c0.47,-0.3 0.93,-0.61 1.39,-0.93c0.46,-0.31 0.93,-0.63 1.39,-0.94c0.07,-0.05 0.15,-0.1 0.22,-0.15l2.67,-1.05c-0.07,0.05 -0.15,0.1 -0.22,0.15c-0.46,0.31 -0.93,0.63 -1.39,0.94c-0.46,0.32 -0.91,0.64 -1.39,0.94c-1.27,0.81 -2.59,1.55 -3.92,2.28c-0.5,0.29 -1.02,0.56 -1.54,0.81c-0.5,0.23 -1,0.46 -1.52,0.64c-0.5,0.19 -0.99,0.38 -1.49,0.58c-0.48,0.18 -0.98,0.35 -1.47,0.53c-0.44,0.18 -0.88,0.35 -1.31,0.54c-0.34,0.17 -0.68,0.33 -1.02,0.5l2.24,-1.79z" fill="#fc0" id="path6057"/>
      <path d="m304.79,614.37c0.32,0.15 0.66,0.27 1,0.38c0.42,0.13 0.83,0.27 1.25,0.4c0.45,0.13 0.91,0.25 1.37,0.34c0.5,0.09 1.01,0.16 1.52,0.23c0.54,0.06 1.09,0.09 1.64,0.13c0.59,0.04 1.18,0.07 1.77,0.1c0.64,0.05 1.29,0.05 1.94,0.06c0.65,0.01 1.3,-0.01 1.95,-0.04c0.64,-0.02 1.27,-0.05 1.89,-0.1c0.62,-0.05 1.24,-0.13 1.86,-0.2l-2.3,1.71c-0.62,0.07 -1.24,0.15 -1.86,0.19c-0.63,0.05 -1.26,0.07 -1.9,0.1c-0.65,0.02 -1.31,0.03 -1.96,0.02c-0.65,-0.01 -1.3,-0.02 -1.95,-0.06c-0.59,-0.04 -1.18,-0.07 -1.77,-0.11c-0.55,-0.04 -1.11,-0.07 -1.65,-0.14c-0.52,-0.08 -1.03,-0.15 -1.53,-0.25c-0.47,-0.1 -0.93,-0.23 -1.39,-0.37c-0.42,-0.13 -0.83,-0.27 -1.25,-0.4c-0.35,-0.12 -0.69,-0.24 -1.02,-0.4l2.39,-1.59z" fill="#fc0" id="path6059"/>
      <path d="m304.79,628.69c0.4,0.03 0.8,0.05 1.2,0.08c0.45,0.02 0.91,0.04 1.36,0.06c0.52,0.03 1.03,0.04 1.55,0.06c0.58,0.02 1.16,0.04 1.74,0.05c0.58,0.02 1.15,0.02 1.73,0.05c0.59,0.04 1.18,0.08 1.77,0.12c0.59,0.03 1.17,0.07 1.76,0.1c0.59,0.03 1.18,0.06 1.76,0.08c0.6,0.02 1.2,0.08 1.8,0.15c0.31,0.04 0.62,0.09 0.93,0.14l-2.35,1.65c-0.3,-0.05 -0.61,-0.1 -0.92,-0.13c-0.59,-0.07 -1.19,-0.11 -1.78,-0.13c-0.59,-0.03 -1.18,-0.06 -1.77,-0.09c-0.58,-0.03 -1.17,-0.07 -1.75,-0.1c-0.59,-0.04 -1.18,-0.08 -1.78,-0.11c-0.57,-0.02 -1.15,-0.03 -1.72,-0.05c-0.59,-0.02 -1.17,-0.03 -1.75,-0.05c-0.51,-0.02 -1.03,-0.04 -1.55,-0.06c-0.45,-0.02 -0.91,-0.04 -1.36,-0.07c-0.4,-0.02 -0.81,-0.05 -1.21,-0.08l2.34,-1.67z" fill="#fc0" id="path6061"/>
      <path d="m301.33,638.68c0.2,0.3 0.43,0.58 0.66,0.86c0.28,0.34 0.54,0.69 0.82,1.03c0.29,0.38 0.58,0.75 0.86,1.13c0.3,0.39 0.61,0.77 0.91,1.17c0.32,0.43 0.62,0.87 0.93,1.32c0.32,0.46 0.63,0.93 0.94,1.4c0.32,0.47 0.6,0.96 0.9,1.44c0.29,0.46 0.58,0.92 0.87,1.38c0.2,0.31 0.1,0.15 0.3,0.46l-2.47,1.45c-0.2,-0.31 -0.1,-0.16 -0.3,-0.46c-0.29,-0.47 -0.59,-0.93 -0.88,-1.39c-0.29,-0.48 -0.58,-0.96 -0.89,-1.43c-0.31,-0.46 -0.62,-0.94 -0.94,-1.4c-0.31,-0.44 -0.6,-0.88 -0.93,-1.31c-0.3,-0.39 -0.61,-0.78 -0.91,-1.17c-0.28,-0.38 -0.57,-0.75 -0.85,-1.12c-0.28,-0.34 -0.55,-0.69 -0.83,-1.03c-0.23,-0.28 -0.46,-0.57 -0.66,-0.87l2.47,-1.46z" fill="#fc0" id="path6063"/>
      <path d="m289.76,645.75c-0.03,0.42 -0.06,0.85 -0.08,1.27c-0.03,0.47 -0.05,0.93 -0.04,1.4c-0.01,0.51 0.03,1.03 0.08,1.55c0.05,0.52 0.11,1.04 0.18,1.56c0.07,0.51 0.15,1.01 0.25,1.51c0.09,0.48 0.18,0.96 0.28,1.44c0.1,0.48 0.23,0.95 0.38,1.41c0.17,0.47 0.34,0.93 0.53,1.39c0.19,0.46 0.39,0.92 0.6,1.38c0.19,0.45 0.4,0.9 0.61,1.36c0.1,0.22 0.2,0.44 0.31,0.66l-2.5,1.41c-0.1,-0.22 -0.21,-0.44 -0.31,-0.66c-0.21,-0.46 -0.42,-0.91 -0.61,-1.37c-0.21,-0.45 -0.41,-0.92 -0.6,-1.38c-0.2,-0.46 -0.37,-0.93 -0.54,-1.4c-0.16,-0.47 -0.3,-0.95 -0.39,-1.44c-0.11,-0.48 -0.2,-0.96 -0.29,-1.45c-0.1,-0.5 -0.19,-1.01 -0.26,-1.52c-0.07,-0.53 -0.13,-1.05 -0.18,-1.57c-0.06,-0.53 -0.1,-1.05 -0.1,-1.58c0,-0.47 0,-0.94 0.03,-1.41c0.03,-0.43 0.05,-0.85 0.08,-1.28l2.57,-1.28z" fill="#fc0" id="path6065"/>
      <path d="m277.64,645.74c-0.15,0.25 -0.28,0.51 -0.42,0.76c-0.18,0.31 -0.34,0.62 -0.5,0.93c-0.19,0.36 -0.42,0.69 -0.65,1.03c-0.27,0.38 -0.57,0.73 -0.88,1.08c-0.36,0.39 -0.75,0.75 -1.15,1.1c-0.42,0.37 -0.86,0.73 -1.31,1.08c-0.44,0.35 -0.88,0.71 -1.33,1.06c-0.45,0.34 -0.92,0.66 -1.4,0.98c-0.33,0.21 -0.16,0.1 -0.49,0.31l-2.68,1.03c0.34,-0.2 0.17,-0.1 0.5,-0.3c0.48,-0.31 0.95,-0.62 1.4,-0.96c0.46,-0.34 0.9,-0.7 1.34,-1.06c0.44,-0.35 0.89,-0.69 1.31,-1.06c0.4,-0.34 0.79,-0.7 1.16,-1.08c0.32,-0.33 0.63,-0.67 0.9,-1.04c0.23,-0.32 0.46,-0.65 0.66,-1c0.17,-0.3 0.32,-0.62 0.49,-0.93c0.15,-0.25 0.28,-0.51 0.42,-0.76l2.63,-1.17z" fill="#fc0" id="path6067"/>
      <path d="m263.05,639.09c-0.33,0.16 -0.65,0.34 -0.98,0.51c-0.41,0.19 -0.8,0.42 -1.19,0.63c-0.46,0.26 -0.93,0.51 -1.4,0.77c0.25,-0.15 -1.02,0.58 -0.76,0.43c4.74,-2.73 0.83,-0.45 -0.81,0.46c-0.58,0.3 -1.17,0.61 -1.76,0.92c-0.62,0.31 -1.27,0.55 -1.92,0.78c-0.65,0.23 -1.31,0.43 -1.97,0.64c-0.63,0.21 -1.27,0.4 -1.92,0.55c-0.63,0.18 -1.26,0.34 -1.89,0.48c-0.61,0.14 -1.22,0.3 -1.83,0.41c-0.44,0.1 -0.89,0.16 -1.33,0.23l2.29,-1.72c0.44,-0.07 0.89,-0.15 1.33,-0.24c0.6,-0.13 1.21,-0.27 1.81,-0.41c0.64,-0.16 1.27,-0.32 1.9,-0.49c0.64,-0.17 1.28,-0.35 1.91,-0.56c0.65,-0.21 1.31,-0.42 1.95,-0.65c0.65,-0.24 1.29,-0.49 1.9,-0.82c0.59,-0.3 1.18,-0.6 1.76,-0.92c0.1,-0.06 0.37,-0.21 0.28,-0.16c-0.73,0.42 -2.91,1.68 -2.18,1.27c1.16,-0.67 2.3,-1.35 3.47,-2c0.47,-0.26 0.94,-0.51 1.4,-0.77c0.4,-0.22 0.79,-0.43 1.2,-0.63c0.32,-0.17 0.65,-0.34 0.99,-0.49l-2.25,1.78z" fill="#fc0" id="path6069"/>
      <path d="m254.89,624.6c-0.53,0.03 -1.06,0.05 -1.59,0.05c-0.62,0.01 -1.24,-0.01 -1.87,-0.04c-0.62,-0.02 -1.24,-0.08 -1.87,-0.13c-0.6,-0.06 -1.21,-0.11 -1.82,-0.16c-0.61,-0.04 -1.21,-0.1 -1.82,-0.16c-0.62,-0.07 -1.24,-0.13 -1.86,-0.18c-0.62,-0.06 -1.24,-0.11 -1.86,-0.14c-0.59,-0.03 -1.17,-0.05 -1.75,-0.02c-0.55,0.04 -1.1,0.1 -1.65,0.18c-0.53,0.07 -1.05,0.22 -1.57,0.35c-0.41,0.1 -0.81,0.21 -1.21,0.31l2.27,-1.75c0.41,-0.1 0.81,-0.2 1.22,-0.3c0.52,-0.14 1.05,-0.27 1.59,-0.33c0.55,-0.07 1.11,-0.13 1.66,-0.15c0.59,-0.01 1.18,0.01 1.76,0.04c0.63,0.03 1.25,0.09 1.87,0.14c0.62,0.06 1.24,0.12 1.86,0.19c0.61,0.06 1.22,0.11 1.83,0.15c0.6,0.05 1.21,0.11 1.82,0.16c0.62,0.06 1.24,0.11 1.86,0.13c0.62,0.02 1.24,0.03 1.86,0.02c0.53,0 1.06,-0.03 1.59,-0.06l-2.32,1.7z" fill="#fc0" id="path6071"/>
     </g>
     <g id="g6073-1" transform="translate(540 1)">
      <path d="m355.86,623.17c0,39.44 -33,71.4 -73.71,71.4s-73.7,-31.96 -73.7,-71.4s33,-71.4 73.7,-71.4s73.71,31.96 73.71,71.4z" id="path6039-2"/>
      <path d="m300.58,622.02c0,15.9 -12.38,28.79 -27.64,28.79s-27.64,-12.89 -27.64,-28.79s12.38,-28.79 27.64,-28.79s27.64,12.89 27.64,28.79z" fill="#ccc" id="path6041-6" transform="matrix(1.7185 0 0 1.563 -186.56 -348.1)"/>
      <path d="m295,625.66c0,7.42 -6.87,13.43 -15.35,13.43c-8.47,0 -15.35,-6.01 -15.35,-13.43c0,-7.42 6.88,-13.43 15.35,-13.43c8.48,0 15.35,6.01 15.35,13.43z" fill="#917c6f" id="path6047-9" transform="matrix(1.1629 0 0 1.2555 -43.053 -161.44)"/>
      <path d="m257.24,624.62c-0.32,0.05 -0.64,0.11 -0.97,0.15c-0.4,0.07 -0.81,0.1 -1.22,0.11c-0.53,0.02 -1.06,0.04 -1.59,0.04c-0.4,0 -0.8,-0.01 -1.2,-0.02l2.31,-1.68c0.4,0.01 0.8,0.02 1.2,0.02c0.53,-0.02 1.06,-0.03 1.59,-0.05c0.41,-0.03 0.81,-0.08 1.21,-0.14c0.33,-0.05 0.65,-0.11 0.98,-0.14l-2.31,1.71z" fill="#fc0" id="path6049-7"/>
      <path d="m251.81,598.85c0.25,0.14 0.5,0.28 0.74,0.41c0.31,0.17 0.62,0.34 0.92,0.52c0.33,0.2 0.66,0.38 0.99,0.57c0.38,0.21 0.75,0.41 1.11,0.63c0.39,0.23 0.77,0.47 1.15,0.7c0.4,0.25 0.8,0.51 1.19,0.77c0.42,0.26 0.82,0.55 1.2,0.86c0.38,0.31 0.76,0.63 1.15,0.93c0.39,0.32 0.78,0.62 1.16,0.94c0.38,0.31 0.75,0.63 1.12,0.95c0.37,0.32 0.74,0.65 1.11,0.98c0.19,0.16 0.38,0.34 0.56,0.51l-2.44,1.51c-0.18,-0.17 -0.37,-0.35 -0.56,-0.51c-0.37,-0.33 -0.74,-0.65 -1.11,-0.97c-0.36,-0.32 -0.73,-0.64 -1.11,-0.95c-0.38,-0.31 -0.77,-0.62 -1.16,-0.93c-0.39,-0.31 -0.76,-0.62 -1.15,-0.93c-0.38,-0.3 -0.77,-0.58 -1.18,-0.85c-0.39,-0.25 -0.79,-0.51 -1.19,-0.75c-0.38,-0.24 -0.76,-0.48 -1.15,-0.7c-0.36,-0.22 -0.73,-0.42 -1.1,-0.62c-0.33,-0.19 -0.66,-0.38 -0.99,-0.58c-0.31,-0.17 -0.62,-0.34 -0.92,-0.51c-0.25,-0.14 -0.51,-0.27 -0.75,-0.42l2.41,-1.56z" fill="#fc0" id="path6051-1"/>
      <path d="m271.36,588.63c0.1,0.28 0.21,0.55 0.31,0.83c0.1,0.32 0.2,0.64 0.32,0.95c0.14,0.35 0.27,0.71 0.39,1.07c0.15,0.43 0.3,0.85 0.46,1.27c0.15,0.44 0.31,0.88 0.46,1.32c0.18,0.46 0.35,0.91 0.54,1.36c0.19,0.45 0.37,0.9 0.54,1.35c0.16,0.45 0.32,0.91 0.49,1.36c0.14,0.37 0.28,0.75 0.41,1.14l-2.51,1.38c-0.13,-0.37 -0.27,-0.75 -0.41,-1.13c-0.17,-0.45 -0.33,-0.9 -0.49,-1.35c-0.17,-0.45 -0.35,-0.9 -0.53,-1.35c-0.19,-0.45 -0.37,-0.91 -0.54,-1.37c-0.16,-0.43 -0.32,-0.87 -0.47,-1.31c-0.16,-0.43 -0.31,-0.85 -0.46,-1.28c-0.13,-0.35 -0.25,-0.71 -0.39,-1.07c-0.12,-0.31 -0.22,-0.63 -0.33,-0.95c-0.1,-0.28 -0.2,-0.56 -0.31,-0.83l2.52,-1.39z" fill="#fc0" id="path6053-3"/>
      <path d="m284.88,604.65c-0.08,-0.36 -0.13,-0.72 -0.18,-1.08c-0.05,-0.41 -0.1,-0.83 -0.13,-1.24c-0.03,-0.44 -0.01,-0.88 0,-1.32c0.02,-0.48 0.03,-0.97 0.07,-1.45c0.06,-0.56 0.18,-1.12 0.29,-1.67c0.12,-0.56 0.25,-1.12 0.38,-1.68c0.12,-0.59 0.26,-1.18 0.41,-1.77c0.15,-0.62 0.33,-1.22 0.54,-1.81c0.22,-0.59 0.47,-1.17 0.73,-1.74c0.24,-0.56 0.5,-1.1 0.77,-1.65c0.05,-0.08 0.09,-0.17 0.13,-0.26l2.61,-1.18c-0.04,0.09 -0.08,0.17 -0.13,0.26c-0.26,0.54 -0.53,1.08 -0.78,1.63c-0.25,0.57 -0.51,1.14 -0.73,1.72c-0.21,0.59 -0.41,1.18 -0.56,1.79c-0.15,0.59 -0.29,1.17 -0.41,1.76c-0.12,0.56 -0.26,1.12 -0.38,1.68c-0.11,0.55 -0.24,1.09 -0.3,1.64c-0.06,0.48 -0.06,0.96 -0.08,1.44c-0.01,0.43 -0.04,0.86 -0.01,1.29c0.03,0.41 0.08,0.82 0.13,1.22c0.04,0.36 0.08,0.71 0.16,1.06l-2.53,1.36z" fill="#fc0" id="path6055-4"/>
      <path d="m297.81,604.35c0.34,-0.17 0.68,-0.34 1.03,-0.49c0.44,-0.18 0.88,-0.36 1.32,-0.52c0.49,-0.18 0.99,-0.34 1.47,-0.54c0.49,-0.2 0.99,-0.39 1.49,-0.57c0.51,-0.2 1.01,-0.42 1.5,-0.66c0.52,-0.26 1.03,-0.54 1.53,-0.83c2.73,-1.55 -3.06,1.87 -0.98,0.56c0.47,-0.3 0.93,-0.61 1.39,-0.93c0.46,-0.31 0.93,-0.63 1.39,-0.94c0.07,-0.05 0.15,-0.1 0.22,-0.15l2.67,-1.05c-0.07,0.05 -0.15,0.1 -0.22,0.15c-0.46,0.31 -0.93,0.63 -1.39,0.94c-0.46,0.32 -0.91,0.64 -1.39,0.94c-1.27,0.81 -2.59,1.55 -3.92,2.28c-0.5,0.29 -1.02,0.56 -1.54,0.81c-0.5,0.23 -1,0.46 -1.52,0.64c-0.5,0.19 -0.99,0.38 -1.49,0.58c-0.48,0.18 -0.98,0.35 -1.47,0.53c-0.44,0.18 -0.88,0.35 -1.31,0.54c-0.34,0.17 -0.68,0.33 -1.02,0.5l2.24,-1.79z" fill="#fc0" id="path6057-1"/>
      <path d="m304.79,614.37c0.32,0.15 0.66,0.27 1,0.38c0.42,0.13 0.83,0.27 1.25,0.4c0.45,0.13 0.91,0.25 1.37,0.34c0.5,0.09 1.01,0.16 1.52,0.23c0.54,0.06 1.09,0.09 1.64,0.13c0.59,0.04 1.18,0.07 1.77,0.1c0.64,0.05 1.29,0.05 1.94,0.06c0.65,0.01 1.3,-0.01 1.95,-0.04c0.64,-0.02 1.27,-0.05 1.89,-0.1c0.62,-0.05 1.24,-0.13 1.86,-0.2l-2.3,1.71c-0.62,0.07 -1.24,0.15 -1.86,0.19c-0.63,0.05 -1.26,0.07 -1.9,0.1c-0.65,0.02 -1.31,0.03 -1.96,0.02c-0.65,-0.01 -1.3,-0.02 -1.95,-0.06c-0.59,-0.04 -1.18,-0.07 -1.77,-0.11c-0.55,-0.04 -1.11,-0.07 -1.65,-0.14c-0.52,-0.08 -1.03,-0.15 -1.53,-0.25c-0.47,-0.1 -0.93,-0.23 -1.39,-0.37c-0.42,-0.13 -0.83,-0.27 -1.25,-0.4c-0.35,-0.12 -0.69,-0.24 -1.02,-0.4l2.39,-1.59z" fill="#fc0" id="path6059-1"/>
      <path d="m304.79,628.69c0.4,0.03 0.8,0.05 1.2,0.08c0.45,0.02 0.91,0.04 1.36,0.06c0.52,0.03 1.03,0.04 1.55,0.06c0.58,0.02 1.16,0.04 1.74,0.05c0.58,0.02 1.15,0.02 1.73,0.05c0.59,0.04 1.18,0.08 1.77,0.12c0.59,0.03 1.17,0.07 1.76,0.1c0.59,0.03 1.18,0.06 1.76,0.08c0.6,0.02 1.2,0.08 1.8,0.15c0.31,0.04 0.62,0.09 0.93,0.14l-2.35,1.65c-0.3,-0.05 -0.61,-0.1 -0.92,-0.13c-0.59,-0.07 -1.19,-0.11 -1.78,-0.13c-0.59,-0.03 -1.18,-0.06 -1.77,-0.09c-0.58,-0.03 -1.17,-0.07 -1.75,-0.1c-0.59,-0.04 -1.18,-0.08 -1.78,-0.11c-0.57,-0.02 -1.15,-0.03 -1.72,-0.05c-0.59,-0.02 -1.17,-0.03 -1.75,-0.05c-0.51,-0.02 -1.03,-0.04 -1.55,-0.06c-0.45,-0.02 -0.91,-0.04 -1.36,-0.07c-0.4,-0.02 -0.81,-0.05 -1.21,-0.08l2.34,-1.67z" fill="#fc0" id="path6061-9"/>
      <path d="m301.33,638.68c0.2,0.3 0.43,0.58 0.66,0.86c0.28,0.34 0.54,0.69 0.82,1.03c0.29,0.38 0.58,0.75 0.86,1.13c0.3,0.39 0.61,0.77 0.91,1.17c0.32,0.43 0.62,0.87 0.93,1.32c0.32,0.46 0.63,0.93 0.94,1.4c0.32,0.47 0.6,0.96 0.9,1.44c0.29,0.46 0.58,0.92 0.87,1.38c0.2,0.31 0.1,0.15 0.3,0.46l-2.47,1.45c-0.2,-0.31 -0.1,-0.16 -0.3,-0.46c-0.29,-0.47 -0.59,-0.93 -0.88,-1.39c-0.29,-0.48 -0.58,-0.96 -0.89,-1.43c-0.31,-0.46 -0.62,-0.94 -0.94,-1.4c-0.31,-0.44 -0.6,-0.88 -0.93,-1.31c-0.3,-0.39 -0.61,-0.78 -0.91,-1.17c-0.28,-0.38 -0.57,-0.75 -0.85,-1.12c-0.28,-0.34 -0.55,-0.69 -0.83,-1.03c-0.23,-0.28 -0.46,-0.57 -0.66,-0.87l2.47,-1.46z" fill="#fc0" id="path6063-1"/>
      <path d="m289.76,645.75c-0.03,0.42 -0.06,0.85 -0.08,1.27c-0.03,0.47 -0.05,0.93 -0.04,1.4c-0.01,0.51 0.03,1.03 0.08,1.55c0.05,0.52 0.11,1.04 0.18,1.56c0.07,0.51 0.15,1.01 0.25,1.51c0.09,0.48 0.18,0.96 0.28,1.44c0.1,0.48 0.23,0.95 0.38,1.41c0.17,0.47 0.34,0.93 0.53,1.39c0.19,0.46 0.39,0.92 0.6,1.38c0.19,0.45 0.4,0.9 0.61,1.36c0.1,0.22 0.2,0.44 0.31,0.66l-2.5,1.41c-0.1,-0.22 -0.21,-0.44 -0.31,-0.66c-0.21,-0.46 -0.42,-0.91 -0.61,-1.37c-0.21,-0.45 -0.41,-0.92 -0.6,-1.38c-0.2,-0.46 -0.37,-0.93 -0.54,-1.4c-0.16,-0.47 -0.3,-0.95 -0.39,-1.44c-0.11,-0.48 -0.2,-0.96 -0.29,-1.45c-0.1,-0.5 -0.19,-1.01 -0.26,-1.52c-0.07,-0.53 -0.13,-1.05 -0.18,-1.57c-0.06,-0.53 -0.1,-1.05 -0.1,-1.58c0,-0.47 0,-0.94 0.03,-1.41c0.03,-0.43 0.05,-0.85 0.08,-1.28l2.57,-1.28z" fill="#fc0" id="path6065-2"/>
      <path d="m277.64,645.74c-0.15,0.25 -0.28,0.51 -0.42,0.76c-0.18,0.31 -0.34,0.62 -0.5,0.93c-0.19,0.36 -0.42,0.69 -0.65,1.03c-0.27,0.38 -0.57,0.73 -0.88,1.08c-0.36,0.39 -0.75,0.75 -1.15,1.1c-0.42,0.37 -0.86,0.73 -1.31,1.08c-0.44,0.35 -0.88,0.71 -1.33,1.06c-0.45,0.34 -0.92,0.66 -1.4,0.98c-0.33,0.21 -0.16,0.1 -0.49,0.31l-2.68,1.03c0.34,-0.2 0.17,-0.1 0.5,-0.3c0.48,-0.31 0.95,-0.62 1.4,-0.96c0.46,-0.34 0.9,-0.7 1.34,-1.06c0.44,-0.35 0.89,-0.69 1.31,-1.06c0.4,-0.34 0.79,-0.7 1.16,-1.08c0.32,-0.33 0.63,-0.67 0.9,-1.04c0.23,-0.32 0.46,-0.65 0.66,-1c0.17,-0.3 0.32,-0.62 0.49,-0.93c0.15,-0.25 0.28,-0.51 0.42,-0.76l2.63,-1.17z" fill="#fc0" id="path6067-8"/>
      <path d="m263.05,639.09c-0.33,0.16 -0.65,0.34 -0.98,0.51c-0.41,0.19 -0.8,0.42 -1.19,0.63c-0.46,0.26 -0.93,0.51 -1.4,0.77c0.25,-0.15 -1.02,0.58 -0.76,0.43c4.74,-2.73 0.83,-0.45 -0.81,0.46c-0.58,0.3 -1.17,0.61 -1.76,0.92c-0.62,0.31 -1.27,0.55 -1.92,0.78c-0.65,0.23 -1.31,0.43 -1.97,0.64c-0.63,0.21 -1.27,0.4 -1.92,0.55c-0.63,0.18 -1.26,0.34 -1.89,0.48c-0.61,0.14 -1.22,0.3 -1.83,0.41c-0.44,0.1 -0.89,0.16 -1.33,0.23l2.29,-1.72c0.44,-0.07 0.89,-0.15 1.33,-0.24c0.6,-0.13 1.21,-0.27 1.81,-0.41c0.64,-0.16 1.27,-0.32 1.9,-0.49c0.64,-0.17 1.28,-0.35 1.91,-0.56c0.65,-0.21 1.31,-0.42 1.95,-0.65c0.65,-0.24 1.29,-0.49 1.9,-0.82c0.59,-0.3 1.18,-0.6 1.76,-0.92c0.1,-0.06 0.37,-0.21 0.28,-0.16c-0.73,0.42 -2.91,1.68 -2.18,1.27c1.16,-0.67 2.3,-1.35 3.47,-2c0.47,-0.26 0.94,-0.51 1.4,-0.77c0.4,-0.22 0.79,-0.43 1.2,-0.63c0.32,-0.17 0.65,-0.34 0.99,-0.49l-2.25,1.78z" fill="#fc0" id="path6069-6"/>
      <path d="m254.89,624.6c-0.53,0.03 -1.06,0.05 -1.59,0.05c-0.62,0.01 -1.24,-0.01 -1.87,-0.04c-0.62,-0.02 -1.24,-0.08 -1.87,-0.13c-0.6,-0.06 -1.21,-0.11 -1.82,-0.16c-0.61,-0.04 -1.21,-0.1 -1.82,-0.16c-0.62,-0.07 -1.24,-0.13 -1.86,-0.18c-0.62,-0.06 -1.24,-0.11 -1.86,-0.14c-0.59,-0.03 -1.17,-0.05 -1.75,-0.02c-0.55,0.04 -1.1,0.1 -1.65,0.18c-0.53,0.07 -1.05,0.22 -1.57,0.35c-0.41,0.1 -0.81,0.21 -1.21,0.31l2.27,-1.75c0.41,-0.1 0.81,-0.2 1.22,-0.3c0.52,-0.14 1.05,-0.27 1.59,-0.33c0.55,-0.07 1.11,-0.13 1.66,-0.15c0.59,-0.01 1.18,0.01 1.76,0.04c0.63,0.03 1.25,0.09 1.87,0.14c0.62,0.06 1.24,0.12 1.86,0.19c0.61,0.06 1.22,0.11 1.83,0.15c0.6,0.05 1.21,0.11 1.82,0.16c0.62,0.06 1.24,0.11 1.86,0.13c0.62,0.02 1.24,0.03 1.86,0.02c0.53,0 1.06,-0.03 1.59,-0.06l-2.32,1.7z" fill="#fc0" id="path6071-5"/>
     </g>
     <path d="m110,654.09c19.14,0.02 61.72,-0.01 80,0c18.32,0.01 -20,-110 90,-110c120,0 72.99,109.68 100,110c156.06,1.83 255.54,0.9 340,0c33.63,-0.36 -10,-110 100,-110s75.41,105.69 96.96,104.91c68.61,-2.49 48.34,-4.91 53.04,-4.91c10,0 10,-30 10,-30l0,-310s7.08,-10.59 -11.46,-10.3c-18.54,0.3 -718.54,0.3 -718.54,0.3l-65,0c-20,5 -25,5 -47.95,83.78c-66.98,229.86 -25.7,278.34 -27.05,276.23l0,-0.01z" fill="none" id="path6157" stroke="#000" stroke-width="1px"/>
     <path d="m960,566.09s-1.41,27.33 -0.71,28.66c0.71,1.34 30.71,21.34 30.71,1.34s2.37,-62.36 -20,-40c-10,10 -10.7,10.98 -10,10z" fill="url(#linearGradient6707)" id="path6159" stroke="#000" stroke-width="1px"/>
     <path d="m90,589.09c-8.25,8.25 0,35 0,35s20,20 28.04,4.26c11.13,-21.77 -8.04,-39.26 -8.04,-39.26s-15.28,-4.72 -20,0z" fill="url(#radialGradient6715)" id="path6161" stroke="#000" stroke-width="1px"/>
     <path d="m979.48,615.11l15.52,-1.02l0,15l-20,0l4.48,-13.98z" fill="url(#linearGradient6691)" id="path6163" stroke="#000" stroke-width="1px"/>
     <path d="m1003,622.1c0,4.42 -2.47,8.01 -5.51,8.01s-5.52,-3.59 -5.52,-8.01s2.47,-8.01 5.52,-8.01c3.04,0 5.51,3.59 5.51,8.01z" fill="url(#radialGradient6699)" id="path6165" stroke="#000" transform="translate(-2)"/>
     <path d="m114.01,469.66c5.99,-35.57 15.99,-15.57 15.99,4.43c0,12.21 -10,60 -10,60c-20.3,53.36 -20,30 -20,30l0.98,-23.59l13.03,-70.84z" fill="url(#Wavy)" id="path6738" stroke="#000" stroke-width="1px"/>
     <path d="m172.63,312.45c-7.63,11.64 -22.63,46.64 -27.63,66.64c-11.75,38.62 -15,55 -3.35,58.66c9.54,3 36.86,-2.3 36.86,-2.3s31.35,-116.5 21.49,-126.36c-10,-10 -20,-10 -27.37,3.35l0,0.01z" fill="url(#radialGradient4042)" id="path6922" stroke="#000" stroke-width="1px"/>
     <path d="m220,309.09c-7.63,11.65 -15,55 -20,75c-11.75,38.62 -6.65,51.34 5,55c9.54,3 130,0 130,0s9.86,-115.14 0,-125c-10,-10 -107.63,-18.35 -115,-5z" fill="url(#linearGradient4050)" id="path6922-1" stroke="#000" stroke-width="1px"/>
     <path d="m365,294.09l0,200s-20,15 -30,25c-8.8,8.8 -15,30 -15,30" fill="none" id="path6946" stroke="#000" stroke-width="1px"/>
     <path d="m215.36,293.22l-45.36,200.87s-10,40 0,55c9.74,14.61 55,10 55,10" fill="none" id="path6948" stroke="#000" stroke-width="1px"/>
     <path d="m386.83,314.16c-10.09,11.64 -6.61,39.96 -6.61,69.92c0,44.95 4.42,52.29 19.84,55.94c12.62,3 89.94,4.07 159.94,4.07c13.26,0 18.62,-119.94 12,-129.93c-5.55,-8.39 -178.56,-9.99 -185.18,0l0.01,0z" fill="url(#radialGradient4062)" id="path6922-1-1" stroke="#000" stroke-width="1.15px"/>
     <path d="m346.45,454.09l0,10s-45,5 -35,-5s34.63,-5.79 35,-5z" fill="url(#linearGradient3690)" id="path2896" stroke="#000" stroke-width="1px"/>
     <path d="m320,460.43c0,2.03 -1.51,3.67 -3.38,3.67s-3.37,-1.64 -3.37,-3.67s1.51,-3.67 3.37,-3.67s3.38,1.64 3.38,3.67z" fill="#520" id="path3674" stroke="#000" transform="matrix(-1,0,0,1,656.45,-2)"/>
     <path d="m599.83,314.16c-10.09,11.64 -6.61,39.96 -6.61,69.92c0,44.95 4.42,52.29 19.84,55.94c12.62,2.99 105.93,4.99 171.95,0c13.22,-1 6.61,-115.87 0,-125.86c-5.56,-8.39 -178.56,-9.99 -185.18,0z" fill="url(#radialGradient4074)" id="path6922-1-1-0" stroke="#000" stroke-width="1.15px"/>
     <path d="m816.37,314.08c-7.14,11.65 -4.68,40.01 -4.68,70.02c0,45.01 3.13,52.35 14.03,56.01c8.93,3 74.93,4.99 121.61,0c9.36,-1 4.68,-116.03 0,-126.03c-3.92,-8.4 -126.29,-10 -130.97,0l0.01,0z" fill="url(#radialGradient4082)" id="path6922-1-1-0-0" stroke="#000" stroke-width="0.97px"/>
     <path d="m965.09,294.37s-10.09,129.72 -0.09,239.72c0.55,5.98 15,10 15,10" fill="none" id="path3736" stroke="#000" stroke-width="1px"/>
     <path d="m585,294.09l0,345" fill="none" id="path3738" stroke="#000" stroke-width="1px"/>
     <path d="m370.53,639.04l364.47,0.05" fill="none" id="path4004" stroke="#000" stroke-width="1px"/>
     <path d="m600,459.09l0,10l330,0s6.73,-2.64 6.73,-5s-6.73,-5 -6.73,-5l-330,0z" fill="url(#linearGradient4014)" id="path4006" stroke="#000" stroke-width="1.16px"/>
     <rect fill="url(#linearGradient4034)" height="10" id="rect4026" stroke="#000" stroke-linecap="round" stroke-width="1.06" width="10" x="150" y="444.09"/>
     <path d="m165,404.09c-11.74,-2.77 -10,20 -10,20l0,30l10,0s11.74,-47.23 0,-50z" fill="url(#linearGradient4024)" id="path4016" stroke="#000" stroke-width="1px"/>
     <path d="m195.44,629.27c9.77,17.1 18.73,20.36 18.73,20.36" fill="none" id="path4818" stroke="#000" stroke-width="1px"/>
     <path d="m352.61,644.74l10.59,-4.89l5.7,-17.1" fill="none" id="path4820" stroke="#000" stroke-width="1px"/>
     <path d="m207.06,642.96c-2.39,-2.4 -5.52,-6.07 -6.94,-8.14l-2.58,-3.78l0.83,-9.66c4.04,-47.21 23.48,-69.77 64.9,-75.3c10.23,-1.36 35.93,-0.48 45.41,1.56c30.11,6.48 47.43,22.12 54.44,49.17c1.13,4.34 2.64,11.94 3.37,16.87l1.31,8.98l-2.7,8.3l-2.71,8.3l-4.07,1.81c-2.24,1 -4.18,1.72 -4.32,1.59c-0.14,-0.12 0.37,-3.47 1.12,-7.44c4.59,-24.35 -5.5,-51.04 -25.35,-67.01c-6.96,-5.59 -20.08,-12.32 -27.87,-14.3c-11.63,-2.94 -27.79,-2.94 -39.44,0c-8.36,2.11 -22.25,9.41 -29.25,15.38c-10.9,9.28 -19.01,22.06 -22.83,35.95c-2.49,9.07 -2.53,26.52 -0.09,35.38c0.93,3.36 1.56,6.25 1.4,6.41c-0.15,0.16 -2.24,-1.67 -4.63,-4.07l0,0z" fill="#808080" id="path4822" stroke="#000" stroke-linecap="round" stroke-width="0.87"/>
     <path d="m734.94,630.49l6.11,13.84l15.06,11.41" fill="none" id="path4824" stroke="#000" stroke-width="1px"/>
     <path d="m891.3,648.82l8.96,-4.89l7.73,-13.84" fill="none" id="path4826" stroke="#000" stroke-width="1px"/>
     <path d="m747.97,648.66l-6.16,-4.58l-2.84,-6.34l-2.84,-6.34l1.98,-11.78c2.37,-14.13 3.91,-20.99 6.28,-28.09c10.6,-31.71 34.6,-46.55 75.35,-46.59c34.14,-0.02 57.39,9.87 71.15,30.27c7.65,11.35 11.63,23.7 14.96,46.42l1.25,8.5l-3.69,6.64l-3.69,6.64l-3.49,1.89c-1.91,1.04 -3.57,1.8 -3.67,1.7c-0.1,-0.1 0.29,-1.93 0.87,-4.07c1.84,-6.75 2.36,-10.89 2.36,-18.8c0,-12.56 -1.98,-20.78 -7.71,-31.96c-3.62,-7.08 -7.23,-12.01 -12.95,-17.72c-7.44,-7.41 -15.15,-12.52 -24.64,-16.33c-38.63,-15.51 -83.12,3.22 -97.57,41.08c-3.1,8.15 -4.39,15.37 -4.41,24.73c-0.02,9.79 1.31,17.2 4.64,25.85c0.67,1.76 1.17,3.26 1.1,3.33s-2.89,-1.93 -6.28,-4.45l0,0z" fill="#808080" id="path4830" stroke="#000" stroke-linecap="round" stroke-width="0.43"/>
     <path d="m109.71,651.08c-1.15,-2.15 -5.7,-14.61 -5.7,-15.61c0,-0.22 2.01,-0.4 4.45,-0.4c6.03,0 9.91,-3.33 12.31,-10.54c3.47,-10.47 0.65,-24.02 -6.86,-32.91c-2.5,-2.95 -4.33,-3.87 -8.96,-4.48l-5.81,-0.77l0.71,-5.18c0.39,-2.85 0.71,-6.66 0.71,-8.47s0.56,-3.17 1.25,-3.01c2.39,0.56 7.83,-7.87 13.17,-20.44c5.52,-12.97 8.62,-25.38 13.25,-52.98c4.38,-26.17 1.9,-45.5 -5.95,-46.41l-3.05,-0.36l5.52,-21.52c14.5,-56.59 27.46,-98.11 35.63,-114.12c4.04,-7.92 9.98,-13.61 16.89,-16.2c5.16,-1.92 9.01,-2.35 21.31,-2.35l15.02,0l-0.79,3.74c-0.44,2.06 -10.8,48.06 -23.03,102.22c-12.22,54.16 -22.85,102.78 -23.62,108.05c-2,13.72 -1.03,33.28 1.91,38.31c5.12,8.77 16.71,12.56 38.4,12.56l13.89,0l-5.22,6.4c-12.53,15.39 -17.18,31.1 -20.01,67.62c-0.71,9.08 -1.67,14.5 -2.93,16.41l-1.87,2.86l-39.66,0c-39.1,0 -39.68,-0.04 -40.96,-2.42zm57.45,-201.51c0.74,-3.22 1.34,-6.82 1.34,-8.02c0,-2.57 3.26,-4.56 7.44,-4.56c2.06,0 3.3,-0.83 3.99,-2.65c2.16,-5.67 16.32,-67.94 19.13,-84.1c1.64,-9.39 3.07,-22.27 3.19,-28.62l0.23,-11.55l-4.49,-3.89c-7.76,-6.73 -15.71,-6.65 -22.18,0.21c-4.5,4.77 -16.85,29.54 -23.41,46.95c-2.6,6.88 -7.61,22.43 -11.14,34.55c-5.18,17.78 -6.54,24.19 -7.01,33.2l-0.6,11.17l3.52,3.52c3.08,3.08 4.31,3.51 9.94,3.51c4.94,0 6.42,0.4 6.42,1.73c0,0.96 -1.02,1.73 -2.3,1.73c-2.02,0 -2.3,0.77 -2.3,6.33l0,6.34l16.88,0l1.34,-5.85l0.01,0z" fill="url(#linearGradient4850)" id="path4832" stroke="#000" stroke-linecap="round" stroke-width="1.22"/>
     <path d="m370.73,633.63c-0.33,-2.69 -0.91,-8 -1.27,-11.8c-3.63,-37.49 -16.19,-59.08 -40.78,-70.12c-8.26,-3.7 -8.21,-2.76 -0.92,-18.36c5.23,-11.21 10.34,-16.73 28.89,-31.21l9.94,-7.76l0,-199.04l217.66,0l0,343.2l-212.92,0l-0.61,-4.9l0,0l0.01,-0.01zm194.32,-193.46c5.67,-11.6 10.15,-49.71 10.39,-88.4c0.19,-30.2 -0.53,-37.38 -3.97,-39.22c-8.04,-4.3 -76.6,-7.34 -127.72,-5.67c-34.72,1.14 -50.31,2.59 -55.26,5.15c-8.84,4.57 -10.74,18.7 -9.25,68.53c1.1,37.06 1.77,42.81 5.88,50.87c2.93,5.75 10.86,9.64 22,10.78c13.08,1.35 67.34,2.49 112.64,2.38l43.18,-0.11l2.11,-4.31l0,0z" fill="url(#linearGradient4868)" id="path4836" stroke="#000" stroke-linecap="round" stroke-width="1.22"/>
     <path d="m913.83,646.26c-2.37,-2.86 -3.61,-7.85 -6.44,-25.94c-2.79,-17.89 -5.64,-28.44 -10.17,-37.65c-9.13,-18.6 -25.18,-30.9 -47.51,-36.42c-14.06,-3.48 -42.65,-3.79 -56.44,-0.62c-18.69,4.3 -33.28,13.86 -42.2,27.66c-7.19,11.11 -10.93,22.77 -14.83,46.23c-1.27,7.6 -2.57,14.99 -2.89,16.41l-0.58,2.59l-146.22,0l0,-343.2l377.92,0l-0.65,3.17c-0.35,1.74 -1.49,23.12 -2.54,47.51c-3,70.31 -0.47,186.17 4.19,191.79c0.75,0.89 4.15,3 7.57,4.67c6.63,3.24 7.83,5.66 3.63,7.28c-1.43,0.54 -6.09,4.2 -10.37,8.13l-7.77,7.14l0,30.94l5.23,3.32c2.87,1.82 7.54,4 10.36,4.83c4.65,1.38 5.14,1.85 5.14,5.1c0,1.96 -1.3,7.38 -2.88,12.04c-3.41,10.03 -3.32,9.21 -1.03,9.21c2.29,0 1.4,4.89 -1.67,9.12c-3.11,4.3 -9.18,5.71 -29.95,6.97c-24.96,1.51 -28.44,1.48 -29.91,-0.29l0,0l0.01,0.01zm21.55,-178.65c3.37,-3.05 3.04,-4.95 -1.32,-7.61c-3.68,-2.24 -6.28,-2.28 -169.29,-2.28l-165.55,-0.01l0,12.69l166.87,-0.3c162.25,-0.29 166.94,-0.36 169.29,-2.49l0,0zm-178.02,-24.89c14.06,-0.65 26.66,-1.42 28.02,-1.72c4.15,-0.91 6.23,-8.53 7.64,-28c1.94,-26.74 -1.77,-86.18 -6.08,-97.52c-1.93,-5.09 -16.6,-7.01 -65.52,-8.59c-51.95,-1.67 -111.67,0.89 -119.88,5.13c-8.36,4.32 -10.67,19.05 -9.75,62.2c0.76,35.59 1.97,47.36 5.72,55.61c5.66,12.43 13.22,13.59 90.75,13.89c23.95,0.1 55.05,-0.35 69.1,-1l0,0zm183.89,-0.88c9.71,-1.07 10.05,-1.8 11.78,-25.61c2.02,-27.73 -1.23,-95.69 -4.9,-102.55c-2.44,-4.56 -27.8,-7.08 -70.78,-7.03c-32.16,0.03 -53.7,1.8 -59.44,4.87c-6.89,3.69 -8.6,21.34 -7.02,72.49c1.27,41.21 2.21,47.87 7.41,52.61c4.57,4.16 7.91,5.23 19.22,6.18c12.46,1.03 92.28,0.3 103.74,-0.96l0,0l-0.01,0z" fill="url(#radialGradient4876)" id="path4838" stroke="#000" stroke-linecap="round" stroke-width="1.22"/>
     <path d="m972.94,539.99c-1.9,-0.98 -4.23,-2.55 -5.18,-3.48c-4.84,-4.77 -7.3,-122.47 -4.08,-195.08c1.08,-24.38 2.21,-44.72 2.51,-45.21c1.07,-1.72 9.35,-0.91 11.52,1.13c2.06,1.94 2.13,6.31 1.84,123.23c-0.24,95.33 -0.61,121.21 -1.73,121.2c-0.78,-0.01 -2.98,-0.81 -4.88,-1.8l0,0.01z" fill="url(#linearGradient5071)" id="path4840" stroke="#000" stroke-linecap="round" stroke-width="1.22"/>
     <path d="m377.38,652.36c-1.92,-0.77 -6.18,-9.27 -6.18,-12.31c0,-0.21 81.1,-0.37 180.23,-0.37c115.17,0 180.23,0.4 180.23,1.11c0,0.61 -0.87,2.93 -1.93,5.14c-3.87,8.12 9.22,7.57 -179.64,7.49c-93.65,-0.04 -171.37,-0.52 -172.72,-1.06l0.01,0z" fill="#2f2fea" id="path4842" stroke="#000" stroke-linecap="round" stroke-width="1.22"/>
     <path d="m124.98,575.15c0.76,-0.02 1.52,0.02 2.28,0.05c0.97,0.03 1.93,0.12 2.89,0.21c1.14,0.12 2.27,0.3 3.4,0.48c1.21,0.16 2.28,0.56 3.34,0.94c1.11,0.4 2.16,0.85 3.18,1.33c1.05,0.53 2.03,1.12 2.96,1.74c1.16,0.79 2.22,1.64 3.3,2.48c1.16,0.93 2.32,1.85 3.5,2.76c1.19,0.92 2.39,1.83 3.6,2.74c1.22,0.89 2.46,1.78 3.75,2.64c1.27,0.84 2.67,1.58 4.07,2.33c1.29,0.67 2.62,1.31 4.03,1.88c1.41,0.55 2.95,0.94 4.48,1.34c1.4,0.39 2.84,0.69 4.35,0.87c1.39,0.15 2.8,0.18 4.22,0.19c1.4,-0.01 2.75,-0.25 4.1,-0.46c1.37,-0.22 2.64,-0.6 3.85,-1.05c-9.32,3.67 -3.74,1.4 -1.76,0.34c1.13,-0.59 2.11,-1.28 3,-2.01c0.85,-0.71 1.51,-1.51 2.15,-2.31c0.59,-0.77 1.04,-1.58 1.45,-2.4c0.43,-0.83 0.6,-1.68 0.68,-2.55c0.1,-0.92 -0.05,-1.84 -0.29,-2.75c-0.26,-0.97 -0.76,-1.9 -1.3,-2.82c-0.54,-0.93 -1.24,-1.83 -2.06,-2.67c-0.78,-0.79 -1.72,-1.51 -2.72,-2.18c-0.89,-0.6 -1.95,-1.07 -3.03,-1.5c-0.94,-0.37 -1.91,-0.7 -2.95,-0.94c-0.85,-0.18 -1.75,-0.21 -2.64,-0.23c-0.79,0.01 -1.56,0.1 -2.31,0.25c-0.7,0.13 -1.36,0.32 -2,0.53c-1.97,0.65 -1.09,0.36 4.68,-1.72c0.11,-0.05 -0.23,0.09 -0.34,0.14c-0.29,0.13 -0.56,0.28 -0.82,0.43c-0.47,0.27 -0.83,0.6 -1.13,0.96c-0.27,0.36 -0.45,0.75 -0.59,1.14c-0.16,0.43 -0.22,0.86 -0.28,1.3c-0.07,0.45 -0.09,0.9 -0.08,1.36c0,0.47 0.08,0.94 0.19,1.41c0.09,0.46 0.3,0.91 0.57,1.34c0.29,0.45 0.63,0.87 1.09,1.25c0.51,0.4 1.09,0.76 1.68,1.1c0.55,0.34 1.17,0.63 1.83,0.88c0.7,0.26 1.42,0.49 2.15,0.71c0.38,0.11 0.77,0.21 1.16,0.32l-5.25,2.25c-0.39,-0.11 -0.78,-0.21 -1.17,-0.33c-0.75,-0.23 -1.49,-0.47 -2.2,-0.75c-0.67,-0.28 -1.31,-0.58 -1.89,-0.94c-0.61,-0.37 -1.21,-0.74 -1.73,-1.16c-0.49,-0.41 -0.87,-0.87 -1.18,-1.35c-0.29,-0.46 -0.53,-0.93 -0.64,-1.42c-0.12,-0.49 -0.22,-0.97 -0.23,-1.46c-0.02,-0.47 -0.02,-0.93 0.05,-1.39c0.06,-0.46 0.09,-0.91 0.25,-1.35c0.13,-0.42 0.27,-0.83 0.53,-1.22c0.24,-0.41 0.59,-0.78 1.03,-1.1c1.97,-1.35 4.76,-2.08 7.25,-2.93c0.67,-0.19 1.36,-0.36 2.08,-0.47c0.79,-0.11 1.6,-0.18 2.42,-0.15c0.94,0.04 1.87,0.11 2.75,0.34c1.05,0.27 2.05,0.62 3.01,1.01c1.12,0.46 2.2,0.96 3.12,1.58c1.02,0.7 1.98,1.44 2.78,2.26c0.84,0.86 1.56,1.78 2.11,2.74c0.56,0.94 1.09,1.89 1.36,2.88c0.26,0.94 0.44,1.89 0.37,2.84c-0.07,0.89 -0.19,1.77 -0.62,2.63c-0.38,0.84 -0.84,1.67 -1.41,2.46c-0.63,0.82 -1.27,1.64 -2.1,2.38c-0.87,0.76 -1.82,1.48 -2.94,2.1c-2.75,1.5 -5.66,2.68 -8.98,3.71c-1.26,0.42 -2.56,0.77 -3.95,0.96c-1.38,0.21 -2.77,0.42 -4.2,0.39c-1.44,-0.03 -2.87,-0.08 -4.29,-0.26c-1.52,-0.21 -2.98,-0.54 -4.41,-0.94c-1.55,-0.41 -3.12,-0.82 -4.54,-1.39c-1.41,-0.6 -2.77,-1.24 -4.07,-1.93c-1.41,-0.76 -2.82,-1.52 -4.1,-2.37c-1.3,-0.86 -2.54,-1.76 -3.77,-2.66c-1.21,-0.91 -2.41,-1.82 -3.6,-2.74c-1.18,-0.91 -2.35,-1.83 -3.51,-2.76c-1.07,-0.83 -2.12,-1.67 -3.28,-2.45c-0.91,-0.6 -1.87,-1.17 -2.91,-1.68c-1.01,-0.47 -2.05,-0.9 -3.14,-1.28c-1.03,-0.37 -2.07,-0.71 -3.24,-0.86c-1.12,-0.17 -2.24,-0.34 -3.38,-0.44c-0.94,-0.09 -1.9,-0.15 -2.85,-0.18c-0.76,-0.03 -1.51,-0.04 -2.27,-0.03l5.11,-2.39z" fill="#d4aa00" id="path4888"/>
     <path d="m135.35,619.08c0.43,-0.04 0.86,-0.07 1.29,-0.1c0.53,-0.03 1.06,-0.08 1.59,-0.08c0.62,-0.01 1.24,0.1 1.85,0.22c0.67,0.13 1.3,0.37 1.93,0.61c0.63,0.27 1.23,0.57 1.83,0.9c0.58,0.31 1.13,0.69 1.67,1.08c0.53,0.37 1.05,0.77 1.55,1.19c0.51,0.42 0.98,0.87 1.47,1.31c0.49,0.47 0.99,0.93 1.49,1.4c0.52,0.49 1.03,0.99 1.53,1.5c0.52,0.53 1.04,1.06 1.55,1.59c0.52,0.53 1.02,1.09 1.56,1.61c0.53,0.53 1.1,1.03 1.68,1.52c0.6,0.49 1.24,0.9 1.9,1.31c0.64,0.37 1.31,0.71 2.01,0.98c0.65,0.25 1.33,0.43 2.02,0.61c0.65,0.17 1.32,0.29 1.99,0.39c0.63,0.08 1.26,0.12 1.9,0.1c0.63,-0.01 1.26,-0.1 1.88,-0.2c0.64,-0.07 1.24,-0.3 1.84,-0.53c1.48,-0.61 4.41,-2.4 -1.66,1.09c0.63,-0.37 1.18,-0.84 1.72,-1.33c0.56,-0.52 1.04,-1.11 1.52,-1.7c0.5,-0.62 0.91,-1.3 1.3,-1.99c0.41,-0.77 0.74,-1.58 0.98,-2.41c0.28,-0.98 0.32,-2 0.36,-3.01c0.04,-1.09 -0.04,-2.17 -0.19,-3.24c-0.14,-1.08 -0.37,-2.14 -0.65,-3.19c-0.26,-1.03 -0.65,-2.02 -1.1,-2.99c-0.45,-0.95 -0.98,-1.86 -1.54,-2.75c-0.51,-0.83 -1.1,-1.61 -1.71,-2.37c-0.57,-0.74 -1.24,-1.37 -1.99,-1.92c-0.73,-0.5 -1.5,-0.93 -2.29,-1.31c-0.76,-0.34 -1.55,-0.57 -2.34,-0.79c-0.74,-0.18 -1.5,-0.26 -2.26,-0.29c-0.75,-0.04 -1.48,0.01 -2.21,0.17c-0.71,0.13 -1.37,0.38 -2.03,0.66c-1.26,0.62 -3.12,1.74 2.57,-1.51c0.1,-0.06 -0.2,0.12 -0.29,0.18c-0.26,0.17 -0.3,0.21 -0.54,0.4c-0.51,0.42 -0.98,0.89 -1.4,1.39c-0.4,0.48 -0.69,1.03 -0.94,1.6c-0.24,0.58 -0.38,1.19 -0.5,1.81c-0.11,0.6 -0.17,1.21 -0.18,1.82c-0.02,0.58 0.06,1.16 0.19,1.73c0.14,0.58 0.34,1.13 0.52,1.7c0.21,0.56 0.45,1.12 0.7,1.67c0.27,0.56 0.56,1.11 0.86,1.65c0.31,0.57 0.7,1.09 1.09,1.6c0.41,0.54 0.85,1.06 1.31,1.56c0.47,0.48 0.98,0.92 1.51,1.33c0.52,0.41 1.07,0.76 1.66,1.07c0.52,0.26 1.09,0.39 1.66,0.52c0.53,0.1 1.06,0.19 1.6,0.19c0.52,-0.02 1.03,-0.07 1.53,-0.2c1.42,-0.46 4,-2.13 -1.93,1.26c0.5,-0.31 0.92,-0.72 1.31,-1.16c0.35,-0.38 0.55,-0.84 0.74,-1.31c0.18,-0.45 0.3,-0.91 0.37,-1.38c0.06,-0.48 -0.02,-0.95 -0.12,-1.42c-0.1,-0.45 -0.3,-0.87 -0.52,-1.27c-0.21,-0.41 -0.53,-0.73 -0.88,-1.03c-0.37,-0.3 -0.79,-0.49 -1.26,-0.57c-0.51,-0.08 -1.02,-0.08 -1.53,-0.07c-0.48,0.04 -0.96,0.12 -1.42,0.25c-0.23,0.07 -0.46,0.11 -0.69,0.16l3.24,-2.46c0.22,-0.05 0.45,-0.1 0.67,-0.16c0.49,-0.1 0.98,-0.18 1.48,-0.18c0.53,0 1.06,0.03 1.58,0.15c0.51,0.15 0.98,0.39 1.38,0.74c0.37,0.33 0.71,0.7 0.94,1.15c0.25,0.43 0.46,0.88 0.59,1.37c0.11,0.5 0.21,1.02 0.17,1.54c-0.04,0.5 -0.14,0.99 -0.31,1.47c-0.19,0.5 -0.37,1.01 -0.7,1.43c-0.37,0.47 -0.77,0.93 -1.27,1.28c-1.49,0.87 -3.22,2.25 -5.07,2.66c-0.53,0.09 -1.06,0.15 -1.6,0.13c-0.55,-0.05 -1.1,-0.14 -1.64,-0.26c-0.59,-0.15 -1.18,-0.32 -1.71,-0.61c-0.6,-0.33 -1.17,-0.71 -1.7,-1.13c-0.54,-0.43 -1.06,-0.89 -1.54,-1.39c-0.47,-0.51 -0.92,-1.04 -1.34,-1.59c-0.4,-0.53 -0.8,-1.06 -1.11,-1.65c-0.31,-0.55 -0.61,-1.11 -0.88,-1.68c-0.26,-0.56 -0.5,-1.13 -0.72,-1.71c-0.19,-0.57 -0.39,-1.14 -0.54,-1.72c-0.15,-0.6 -0.25,-1.21 -0.24,-1.83c0,-0.63 0.05,-1.26 0.15,-1.88c0.12,-0.64 0.25,-1.27 0.47,-1.88c0.23,-0.6 0.5,-1.19 0.89,-1.71c0.41,-0.53 0.86,-1.02 1.37,-1.47c1.51,-1.34 3.37,-2.26 5.21,-3.09c0.67,-0.26 1.36,-0.47 2.07,-0.59c0.75,-0.12 1.51,-0.14 2.27,-0.09c0.78,0.06 1.55,0.15 2.31,0.36c0.81,0.23 1.62,0.48 2.38,0.85c0.81,0.4 1.59,0.85 2.33,1.38c0.77,0.58 1.45,1.24 2.04,2c0.62,0.78 1.22,1.57 1.74,2.42c0.56,0.9 1.1,1.83 1.56,2.79c0.46,0.99 0.87,2 1.14,3.06c0.28,1.06 0.52,2.13 0.67,3.22c0.16,1.1 0.26,2.2 0.21,3.31c-0.02,1.03 -0.05,2.08 -0.3,3.09c-0.23,0.86 -0.54,1.69 -0.94,2.49c-0.38,0.71 -0.78,1.42 -1.28,2.05c-0.47,0.61 -0.95,1.21 -1.49,1.76c-0.53,0.51 -1.09,1 -1.69,1.42c-1.73,1 -3.43,2.15 -5.32,2.86c-0.61,0.21 -1.23,0.39 -1.88,0.46c-0.64,0.09 -1.28,0.16 -1.92,0.16c-0.65,-0.01 -1.3,-0.06 -1.94,-0.16c-0.67,-0.11 -1.35,-0.25 -2.01,-0.43c-0.69,-0.18 -1.38,-0.38 -2.05,-0.65c-0.71,-0.29 -1.39,-0.64 -2.04,-1.04c-0.67,-0.42 -1.33,-0.85 -1.93,-1.36c-0.59,-0.49 -1.16,-1 -1.71,-1.54c-0.53,-0.53 -1.03,-1.08 -1.55,-1.62c-0.52,-0.53 -1.03,-1.06 -1.55,-1.58c-0.51,-0.5 -1.01,-1.01 -1.53,-1.49c-0.5,-0.47 -0.99,-0.93 -1.49,-1.39c-0.48,-0.44 -0.95,-0.89 -1.46,-1.3c-0.5,-0.4 -1,-0.8 -1.53,-1.17c-0.53,-0.37 -1.07,-0.73 -1.65,-1.04c-0.58,-0.31 -1.18,-0.6 -1.8,-0.85c-0.61,-0.23 -1.23,-0.44 -1.88,-0.55c-0.6,-0.1 -1.2,-0.18 -1.81,-0.15c-0.53,0.02 -1.05,0.06 -1.57,0.1c-0.43,0.03 -0.86,0.06 -1.29,0.12l3.26,-2.43z" fill="#d4aa00" id="path4890"/>
     <path d="m137.84,541.09c0.37,0.19 0.72,0.42 1.07,0.65c0.45,0.29 0.86,0.64 1.28,0.98c0.48,0.39 0.91,0.82 1.33,1.27c0.46,0.51 0.93,1.02 1.38,1.53c0.52,0.58 1.05,1.16 1.58,1.73c0.58,0.59 1.18,1.16 1.79,1.71c0.61,0.55 1.26,1.04 1.91,1.52c0.66,0.46 1.33,0.9 2.03,1.29c0.62,0.36 1.26,0.67 1.91,0.97c0.56,0.26 1.16,0.37 1.76,0.47c0.53,0.08 1.07,0.14 1.61,0.14c0.52,-0.03 1.04,-0.2 1.51,-0.43c1.37,-0.8 -1.22,0.71 -2.91,1.65c-0.1,0.05 0.18,-0.12 0.27,-0.19c0.22,-0.16 0.42,-0.33 0.62,-0.52c0.35,-0.3 0.63,-0.64 0.87,-1.02c0.2,-0.33 0.33,-0.7 0.4,-1.08c0.07,-0.32 0,-0.62 -0.1,-0.92c-0.11,-0.3 -0.3,-0.55 -0.51,-0.79c-0.23,-0.21 -0.53,-0.29 -0.81,-0.39c-0.3,-0.1 -0.62,-0.13 -0.93,-0.15c-0.33,-0.02 -0.67,0.1 -0.98,0.22c-0.37,0.13 -0.72,0.3 -1.06,0.49c5.88,-3.37 3.54,-2.17 2.34,-1.24c-0.29,0.24 -0.55,0.51 -0.82,0.77c-0.15,0.15 -0.31,0.28 -0.47,0.41l-3.78,1.49c0.18,-0.1 0.33,-0.23 0.49,-0.35c0.28,-0.26 0.54,-0.53 0.81,-0.79c1.32,-1.23 3.2,-1.81 4.6,-2.83c0.35,-0.18 0.72,-0.33 1.1,-0.44c0.36,-0.08 0.71,-0.16 1.08,-0.09c0.34,0.04 0.67,0.12 0.99,0.24c0.34,0.13 0.67,0.29 0.92,0.57c0.23,0.28 0.45,0.58 0.59,0.92c0.12,0.35 0.22,0.71 0.19,1.09c-0.05,0.42 -0.14,0.83 -0.34,1.21c-0.21,0.43 -0.47,0.82 -0.82,1.14c-1.39,1.37 -3.12,2.36 -4.93,3.11c-0.52,0.18 -1.06,0.33 -1.61,0.29c-0.55,-0.03 -1.1,-0.09 -1.64,-0.19c-0.63,-0.11 -1.25,-0.27 -1.82,-0.55c-0.66,-0.31 -1.3,-0.64 -1.93,-1c-0.7,-0.41 -1.38,-0.86 -2.04,-1.33c-0.67,-0.49 -1.32,-1 -1.94,-1.56c-0.62,-0.56 -1.23,-1.13 -1.81,-1.73c-0.53,-0.58 -1.06,-1.16 -1.58,-1.74c-0.46,-0.51 -0.93,-1.02 -1.39,-1.52c-0.41,-0.44 -0.83,-0.85 -1.29,-1.23c-0.41,-0.32 -0.82,-0.66 -1.27,-0.94c-0.34,-0.21 -0.67,-0.43 -1.04,-0.6l3.39,-2.24z" fill="#d4aa00" id="path4892"/>
     <path d="m130.45,519.71c0.34,-0.1 0.69,-0.11 1.04,-0.14c0.42,-0.03 0.84,-0.08 1.26,-0.07c0.47,0 0.94,0.03 1.41,0.07c0.52,0.04 1.02,0.17 1.53,0.28c0.55,0.11 1.09,0.25 1.63,0.39c0.55,0.14 1.08,0.33 1.62,0.52c0.58,0.19 1.15,0.43 1.72,0.67c0.59,0.24 1.19,0.49 1.77,0.77c0.61,0.29 1.24,0.54 1.86,0.81c0.6,0.29 1.23,0.51 1.88,0.69c0.64,0.19 1.29,0.3 1.95,0.42c0.63,0.1 1.28,0.17 1.92,0.2c0.6,0.05 1.21,0.01 1.81,-0.05c0.58,-0.07 1.15,-0.19 1.71,-0.38c1.49,-0.56 4.34,-2.33 -1.72,1.14c0.59,-0.36 1.13,-0.78 1.65,-1.22c0.53,-0.47 0.98,-1.01 1.43,-1.55c0.42,-0.51 0.8,-1.05 1.14,-1.61c0.34,-0.59 0.56,-1.23 0.77,-1.86c0.2,-0.62 0.33,-1.25 0.42,-1.89c0.09,-0.57 0.04,-1.15 -0.03,-1.71c-0.08,-0.53 -0.22,-1.05 -0.42,-1.54c-0.18,-0.44 -0.45,-0.82 -0.78,-1.15c-0.35,-0.31 -0.74,-0.55 -1.14,-0.77c-0.44,-0.19 -0.91,-0.28 -1.38,-0.36c-0.47,-0.07 -0.94,-0.05 -1.42,-0.01c-0.49,0.05 -0.96,0.15 -1.44,0.27c-0.5,0.13 -0.96,0.35 -1.41,0.61c5.84,-3.44 2.96,-1.77 1.73,-0.81c-0.46,0.37 -0.89,0.78 -1.3,1.2c-0.39,0.4 -0.76,0.84 -1.1,1.29c-0.34,0.44 -0.64,0.9 -0.91,1.39c-0.26,0.48 -0.49,0.96 -0.69,1.47c-0.19,0.47 -0.32,0.95 -0.43,1.44c-0.1,0.41 -0.12,0.83 -0.1,1.25c0.02,0.37 0.11,0.73 0.25,1.07c0.14,0.3 0.34,0.57 0.57,0.82c0.22,0.26 0.51,0.45 0.81,0.63c0.29,0.16 0.6,0.28 0.92,0.4c0.22,0.08 0.45,0.11 0.68,0.15l-3.33,2.33c-0.25,-0.06 -0.49,-0.12 -0.72,-0.22c-0.34,-0.13 -0.67,-0.27 -0.97,-0.46c-0.32,-0.21 -0.62,-0.44 -0.87,-0.73c-0.25,-0.28 -0.48,-0.59 -0.64,-0.94c-0.15,-0.38 -0.27,-0.77 -0.31,-1.18c-0.04,-0.45 -0.03,-0.9 0.06,-1.35c0.09,-0.51 0.22,-1.01 0.4,-1.5c0.19,-0.52 0.4,-1.03 0.67,-1.52c0.26,-0.5 0.53,-0.99 0.88,-1.44c0.34,-0.47 0.69,-0.92 1.09,-1.34c0.41,-0.43 0.82,-0.86 1.27,-1.25c1.56,-1.33 3.46,-2.21 5.2,-3.24c0.47,-0.23 0.96,-0.42 1.48,-0.53c0.49,-0.1 0.98,-0.19 1.48,-0.22c0.49,-0.02 0.99,0 1.48,0.1c0.5,0.1 1,0.22 1.45,0.47c0.42,0.25 0.84,0.52 1.2,0.86c0.36,0.38 0.66,0.8 0.86,1.28c0.22,0.53 0.37,1.07 0.47,1.64c0.08,0.6 0.15,1.2 0.08,1.81c-0.08,0.66 -0.19,1.31 -0.39,1.95c-0.2,0.66 -0.43,1.32 -0.73,1.94c-0.34,0.59 -0.7,1.15 -1.12,1.67c-0.44,0.56 -0.91,1.1 -1.4,1.61c-0.51,0.47 -1.06,0.9 -1.63,1.29c-1.68,0.97 -3.37,2.19 -5.27,2.8c-0.57,0.16 -1.17,0.26 -1.76,0.32c-0.62,0.04 -1.23,0.04 -1.85,0c-0.65,-0.06 -1.3,-0.12 -1.94,-0.25c-0.67,-0.12 -1.33,-0.25 -1.98,-0.45c-0.65,-0.2 -1.29,-0.45 -1.91,-0.73c-0.62,-0.27 -1.25,-0.53 -1.86,-0.83c-0.58,-0.26 -1.17,-0.51 -1.76,-0.75c-0.57,-0.24 -1.13,-0.46 -1.71,-0.65c-0.53,-0.18 -1.06,-0.36 -1.6,-0.49c-0.54,-0.14 -1.08,-0.26 -1.62,-0.37c-0.5,-0.11 -1,-0.21 -1.51,-0.24c-0.46,-0.03 -0.92,-0.04 -1.38,-0.04c-0.42,0.03 -0.83,0.06 -1.24,0.1c-0.35,0.03 -0.69,0.09 -1.02,0.17l3.24,-2.45z" fill="#d4aa00" id="path4894"/>
     <path d="m135.05,497.2c0.24,-0.29 0.51,-0.57 0.77,-0.84c1.31,-1.26 3.03,-1.94 4.6,-2.84c0.5,-0.18 1.03,-0.27 1.56,-0.3c0.52,-0.05 1.05,0.03 1.56,0.13c0.53,0.09 1.05,0.23 1.56,0.42c0.55,0.2 1.1,0.37 1.65,0.57c0.56,0.22 1.12,0.42 1.7,0.6c0.6,0.19 1.2,0.36 1.81,0.52c0.63,0.16 1.27,0.3 1.9,0.44c0.64,0.12 1.28,0.2 1.93,0.25c0.63,0.05 1.27,0.04 1.91,0c0.58,-0.05 1.13,-0.21 1.68,-0.39c1.45,-0.48 4.03,-2.13 -1.83,1.21c0.48,-0.3 0.9,-0.68 1.29,-1.1c0.34,-0.36 0.6,-0.78 0.82,-1.22c0.21,-0.42 0.35,-0.86 0.45,-1.32c0.08,-0.42 0.11,-0.85 0.09,-1.28c-0.01,-0.2 -0.04,-0.39 -0.08,-0.59l3.59,-1.9c0.04,0.21 0.07,0.42 0.1,0.63c0.03,0.45 0.03,0.91 -0.05,1.36c-0.08,0.49 -0.2,0.97 -0.41,1.42c-0.21,0.47 -0.44,0.93 -0.77,1.33c-0.38,0.44 -0.78,0.87 -1.26,1.2c-1.72,1 -3.26,2.17 -5.15,2.74c-0.57,0.16 -1.15,0.29 -1.74,0.31c-0.65,0.02 -1.3,0.01 -1.94,-0.05c-0.66,-0.06 -1.31,-0.15 -1.96,-0.29c-0.64,-0.14 -1.28,-0.29 -1.91,-0.46c-0.61,-0.16 -1.22,-0.33 -1.83,-0.53c-0.57,-0.19 -1.14,-0.4 -1.7,-0.61c-0.55,-0.19 -1.1,-0.38 -1.65,-0.57c-0.49,-0.16 -1,-0.28 -1.52,-0.36c-0.5,-0.08 -1,-0.11 -1.5,-0.05c-0.51,0.07 -1.01,0.18 -1.47,0.42c5.87,-3.42 3.46,-2.2 2.33,-1.23c-0.29,0.24 -0.54,0.52 -0.79,0.79l-3.74,1.59z" fill="#d4aa00" id="path4896"/>
     <path d="m137.84,477.5c0.4,0.11 0.76,0.31 1.12,0.51c0.45,0.26 0.9,0.51 1.36,0.75c0.55,0.29 1.12,0.5 1.71,0.66c0.66,0.14 1.35,0.12 2.02,0.07c0.68,-0.05 1.35,-0.16 2.02,-0.29c0.7,-0.19 1.39,-0.45 2.04,-0.78c3.02,-1.77 -5.07,3.33 -1.36,0.72c0.71,-0.5 1.37,-1.07 2.02,-1.65c0.75,-0.69 1.52,-1.36 2.29,-2.03c0.8,-0.71 1.62,-1.4 2.45,-2.07c0.84,-0.66 1.71,-1.27 2.61,-1.82c2.19,-1.5 3.96,-2.51 6.42,-2.85c0.92,-0.12 1.83,-0.07 2.73,0.1c0.82,0.2 1.59,0.53 2.35,0.89c0.71,0.33 1.32,0.8 1.89,1.32c0.56,0.53 1.02,1.15 1.41,1.82c0.4,0.73 0.51,1.56 0.56,2.38c0.04,0.84 -0.02,1.68 -0.17,2.51c-0.15,0.81 -0.41,1.6 -0.75,2.35c-0.34,0.71 -0.76,1.38 -1.21,2.02c-0.47,0.62 -1.02,1.18 -1.58,1.71c-0.54,0.51 -1.16,0.91 -1.79,1.29c-1.79,1.02 -3.35,2.34 -5.36,2.69c-0.61,0.11 -1.23,0.13 -1.85,0.07c-0.6,-0.05 -1.18,-0.19 -1.74,-0.4c-0.54,-0.23 -1.06,-0.51 -1.52,-0.87c-0.47,-0.35 -0.86,-0.77 -1.24,-1.21c-0.36,-0.43 -0.64,-0.91 -0.88,-1.41c-0.24,-0.48 -0.42,-0.98 -0.56,-1.5c-0.15,-0.51 -0.21,-1.03 -0.21,-1.56c0.01,-0.26 0.05,-0.53 0.1,-0.79l3.64,-1.78c-0.04,0.25 -0.09,0.49 -0.12,0.74c-0.03,0.5 0.02,0.98 0.16,1.46c0.12,0.49 0.29,0.97 0.51,1.43c0.23,0.47 0.49,0.92 0.83,1.32c0.36,0.41 0.75,0.81 1.19,1.13c0.45,0.31 0.94,0.58 1.46,0.77c0.54,0.17 1.11,0.28 1.68,0.31c0.6,0.02 1.19,-0.03 1.78,-0.16c1.56,-0.35 4.37,-2.37 -1.65,1.22c0.63,-0.37 1.26,-0.74 1.82,-1.21c0.57,-0.51 1.11,-1.06 1.61,-1.64c0.47,-0.62 0.89,-1.27 1.25,-1.95c0.35,-0.72 0.63,-1.47 0.78,-2.26c0.18,-0.8 0.25,-1.61 0.22,-2.42c-0.03,-0.76 -0.11,-1.53 -0.47,-2.22c-0.37,-0.62 -0.8,-1.21 -1.34,-1.7c-0.55,-0.49 -1.15,-0.93 -1.83,-1.22c-0.73,-0.34 -1.48,-0.66 -2.28,-0.81c-0.88,-0.12 -1.77,-0.13 -2.65,0.01c-1.72,0.3 -5.41,2.07 0.59,-1.04c-0.92,0.53 -1.8,1.13 -2.63,1.78c-0.84,0.66 -1.67,1.34 -2.47,2.04c-0.77,0.67 -1.54,1.34 -2.28,2.03c-0.65,0.59 -1.3,1.17 -2.01,1.69c-1.73,1.29 -3.63,2.35 -5.57,3.29c-0.68,0.3 -1.37,0.56 -2.11,0.7c-0.67,0.12 -1.36,0.22 -2.05,0.25c-0.7,0.02 -1.41,0.02 -2.09,-0.18c-0.61,-0.19 -1.2,-0.42 -1.76,-0.73c-0.46,-0.24 -0.92,-0.49 -1.37,-0.75c-0.34,-0.18 -0.68,-0.34 -1.06,-0.42l3.34,-2.31z" fill="#d4aa00" id="path4902"/>
     <path d="m354.37,548.15c0.53,-0.2 1.08,-0.3 1.63,-0.4c0.94,-0.16 1.88,-0.28 2.82,-0.37c1.12,-0.1 2.25,-0.11 3.38,-0.08c1.25,0.04 2.49,0.18 3.73,0.38c1.34,0.22 2.65,0.58 3.94,1.01c1.4,0.47 2.74,1.08 4.05,1.75c1.45,0.77 2.83,1.64 4.19,2.56c1.57,1.07 3.01,2.3 4.4,3.58c1.57,1.48 3.1,3 4.63,4.52c1.53,1.59 3.07,3.18 4.64,4.72c1.63,1.63 3.39,3.1 5.19,4.53c1.94,1.54 4.08,2.78 6.3,3.86c2.66,1.21 5.46,2.06 8.29,2.77c3.2,0.78 6.47,1.12 9.75,1.3c3.56,0.16 7.12,-0.01 10.64,-0.48c3.75,-0.53 7.37,-1.61 10.88,-2.98c1.57,-0.69 1.9,-0.8 3.42,-1.6c0.55,-0.29 2.2,-1.15 1.62,-0.91c-0.64,0.27 -1.14,1.04 -1.83,1c-0.6,-0.04 1,-0.67 1.49,-1.02c0.47,-0.35 0.93,-0.72 1.39,-1.08c2.61,-2.06 4.51,-4.73 6.14,-7.58c1.48,-2.66 2.13,-5.56 2.35,-8.56c0.13,-2.91 -0.4,-5.76 -1.29,-8.52c-0.96,-2.8 -2.59,-5.26 -4.42,-7.56c-1.94,-2.31 -4.18,-4.33 -6.53,-6.2c-2.22,-1.76 -4.64,-3.21 -7.13,-4.53c-2.34,-1.22 -4.82,-2.12 -7.38,-2.76c-2.28,-0.56 -4.62,-0.81 -6.97,-0.96c-2,-0.15 -3.95,0.05 -5.86,0.67c1.25,-1.04 -3.98,2.08 -2.44,1.2c5.17,-2.93 2.45,-1.4 1.31,-0.49c-1.33,1.1 -2.23,2.55 -3.05,4.05c-0.81,1.51 -1.39,3.12 -1.88,4.76c-0.48,1.6 -0.74,3.25 -0.83,4.92c-0.04,1.74 0.38,3.42 0.99,5.04c0.77,1.89 2.1,3.43 3.5,4.88c1.54,1.56 3.27,2.89 5.09,4.09c1.73,1.14 3.56,2.11 5.39,3.06c1.65,0.92 3.42,1.52 5.27,1.89c1.71,0.36 3.44,0.45 5.18,0.31c1.57,-0.15 3.05,-0.66 4.49,-1.27c-1.68,1.2 3.82,-2.11 1.95,-1.04c-5.35,3.03 -2.89,1.69 -1.72,0.85c1.01,-0.73 1.85,-1.63 2.57,-2.64c0.61,-0.87 1.02,-1.85 1.27,-2.88c0.2,-0.96 0.12,-1.94 -0.07,-2.9c-0.21,-0.98 -0.71,-1.82 -1.29,-2.61c-0.67,-0.85 -1.5,-1.54 -2.34,-2.2c-0.79,-0.66 -1.68,-1.13 -2.63,-1.51c-0.92,-0.33 -1.88,-0.48 -2.85,-0.54c-0.84,-0.03 -1.68,0.04 -2.52,0.17c-0.7,0.12 -1.37,0.34 -2.01,0.65c-1.23,0.69 -3.06,1.71 2.65,-1.52c0.25,-0.15 -0.47,0.34 -0.68,0.54c-0.37,0.37 -0.62,0.82 -0.83,1.3c-0.18,0.46 -0.25,0.96 -0.29,1.45c-0.03,0.5 0.16,0.94 0.41,1.36c0.34,0.54 0.76,1.03 1.18,1.52c0.48,0.54 1.05,1.01 1.63,1.45c0.61,0.45 1.24,0.88 1.9,1.25c0.11,0.06 0.22,0.12 0.32,0.18l-3.39,2.21c-0.11,-0.06 -0.22,-0.12 -0.33,-0.18c-0.66,-0.4 -1.31,-0.83 -1.92,-1.3c-0.6,-0.46 -1.18,-0.95 -1.68,-1.52c-0.44,-0.51 -0.87,-1.01 -1.22,-1.58c-0.29,-0.49 -0.52,-0.99 -0.52,-1.57c0.02,-0.53 0.07,-1.06 0.23,-1.56c0.17,-0.53 0.43,-1.02 0.77,-1.45c1.31,-1.47 3.2,-2.24 4.95,-3.09c0.66,-0.27 1.36,-0.47 2.08,-0.57c0.85,-0.1 1.71,-0.16 2.56,-0.1c1,0.1 1.99,0.28 2.93,0.65c0.96,0.42 1.87,0.93 2.68,1.61c0.87,0.69 1.72,1.41 2.4,2.28c0.61,0.85 1.14,1.74 1.38,2.77c0.21,1.01 0.31,2.03 0.14,3.06c-0.22,1.07 -0.6,2.09 -1.2,3.02c-0.7,1.05 -1.52,2 -2.53,2.77c-2.21,1.64 -4.66,2.98 -7.15,4.16c-1.46,0.59 -2.98,1.06 -4.56,1.17c-1.76,0.09 -3.52,-0.03 -5.25,-0.4c-1.86,-0.41 -3.65,-1.05 -5.32,-1.98c-1.84,-0.97 -3.68,-1.95 -5.41,-3.1c-1.83,-1.24 -3.58,-2.59 -5.13,-4.17c-1.44,-1.49 -2.79,-3.08 -3.6,-5.01c-0.63,-1.67 -1.07,-3.4 -1.07,-5.19c0.07,-1.69 0.32,-3.37 0.79,-5c0.48,-1.66 1.05,-3.3 1.85,-4.84c0.81,-1.53 1.68,-3.03 2.99,-4.2c2.36,-2.01 5.17,-3.51 8.04,-4.67c1.94,-0.56 3.93,-0.71 5.94,-0.55c2.36,0.17 4.71,0.44 7.01,1.03c2.57,0.68 5.07,1.6 7.43,2.84c2.5,1.35 4.93,2.82 7.16,4.59c2.37,1.9 4.62,3.95 6.57,6.29c1.86,2.34 3.52,4.83 4.5,7.68c0.91,2.8 1.47,5.69 1.36,8.65c-0.19,3.05 -0.81,6.01 -2.28,8.72c-1.61,2.9 -3.49,5.62 -6.09,7.73c-3.91,3.11 -8.31,5.58 -12.9,7.54c-3.54,1.34 -7.18,2.4 -10.94,2.9c-3.54,0.45 -7.12,0.61 -10.69,0.43c-3.3,-0.2 -6.59,-0.56 -9.81,-1.36c-2.84,-0.72 -5.66,-1.59 -8.34,-2.83c-2.24,-1.1 -4.4,-2.36 -6.35,-3.93c-1.81,-1.43 -3.58,-2.92 -5.22,-4.56c-1.57,-1.55 -3.11,-3.13 -4.65,-4.72c-1.52,-1.52 -3.04,-3.04 -4.62,-4.51c-1.38,-1.26 -2.82,-2.47 -4.37,-3.52c-1.35,-0.91 -2.73,-1.77 -4.17,-2.52c-1.3,-0.65 -2.63,-1.24 -4.02,-1.69c-1.28,-0.41 -2.58,-0.75 -3.91,-0.96c-1.22,-0.18 -2.45,-0.31 -3.69,-0.33c-1.12,-0.01 -2.25,0 -3.36,0.12c-0.94,0.1 -1.87,0.22 -2.8,0.4c-0.54,0.12 -1.08,0.25 -1.6,0.46l3.2,-2.5z" fill="#f00" id="path4922"/>
     <path d="m347.63,525.66c0.42,-0.47 0.88,-0.91 1.35,-1.34c0.53,-0.5 1.12,-0.93 1.73,-1.33c1.86,-1.14 3.71,-2.33 5.73,-3.18c0.8,-0.36 1.63,-0.61 2.48,-0.83c0.87,-0.22 1.77,-0.3 2.67,-0.34c0.83,-0.02 1.65,0.06 2.47,0.21c0.81,0.17 1.59,0.43 2.35,0.75c0.77,0.31 1.5,0.7 2.23,1.11c0.73,0.43 1.44,0.91 2.13,1.4c0.72,0.5 1.42,1.02 2.13,1.51c0.82,0.62 1.7,1.05 2.67,1.37c1.28,0.41 2.59,0.61 3.93,0.61c1.48,-0.06 2.92,-0.34 4.33,-0.76c0.74,-0.27 1.47,-0.58 2.16,-0.96c0.24,-0.13 0.94,-0.55 0.7,-0.41c-2.78,1.54 -3.66,2.19 -2.04,1.05c1.61,-1.17 2.95,-2.63 4.23,-4.13c1.48,-1.78 2.74,-3.73 3.97,-5.69c1.43,-2.39 2.73,-4.85 4.06,-7.3c1.53,-2.77 3.07,-5.54 4.69,-8.26c1.62,-2.69 3.37,-5.29 5.15,-7.87c1.66,-2.42 3.41,-4.77 5.19,-7.11c1.63,-2.12 3.34,-4.19 5.05,-6.24c1.6,-1.92 3.25,-3.8 4.98,-5.6c1.7,-1.75 3.52,-3.37 5.37,-4.95c2.94,-2.48 6.36,-4.25 9.69,-6.14c2.44,-1.19 5.04,-1.99 7.67,-2.63c2.77,-0.67 5.61,-0.87 8.45,-0.97c2.76,-0.09 5.52,0.05 8.27,0.27c2.61,0.16 5.11,0.69 7.53,1.63c2.34,1.04 4.46,2.48 6.49,4.03c1.84,1.45 3.52,3.09 5.13,4.8c1.42,1.49 2.65,3.15 3.79,4.86c0.99,1.54 1.75,3.21 2.4,4.92c0.59,1.53 0.9,3.12 1.07,4.74c0.13,1.5 0.02,3 -0.22,4.47c-0.23,1.44 -0.71,2.81 -1.26,4.14c-0.56,1.37 -1.38,2.6 -2.25,3.79c-0.86,1.2 -1.85,2.3 -2.9,3.33c-1.07,1.04 -2.23,1.97 -3.43,2.85c-1.15,0.84 -2.35,1.61 -3.57,2.35c-2.34,1.42 -4.69,2.82 -7.27,3.74c-1.45,0.55 -2.98,0.79 -4.5,1.03c-1.59,0.24 -3.2,0.4 -4.81,0.48c-1.66,0.07 -3.31,-0.02 -4.95,-0.23c-1.72,-0.31 -3.39,-0.8 -5.04,-1.38c-1.59,-0.56 -3.12,-1.3 -4.61,-2.09c-1.47,-0.79 -2.81,-1.77 -4.07,-2.85c-1.31,-1.16 -2.39,-2.54 -3.41,-3.95c-1.01,-1.41 -1.84,-2.93 -2.58,-4.49c-0.74,-1.55 -1.22,-3.19 -1.54,-4.87c-0.25,-1.69 -0.17,-3.4 0,-5.09c0.15,-1.65 0.6,-3.24 1.15,-4.8c0.55,-1.46 1.27,-2.84 2.07,-4.17c0.74,-1.23 1.69,-2.31 2.71,-3.31c2,-1.79 4.42,-3.1 6.84,-4.25c1.18,-0.55 2.44,-0.9 3.73,-1.13c1.25,-0.22 2.53,-0.2 3.79,-0.13c1.23,0.08 2.43,0.33 3.6,0.69c1.19,0.37 2.3,0.93 3.4,1.5c1.05,0.57 2.06,1.22 3,1.96c0.9,0.76 1.69,1.65 2.46,2.55c0.75,0.83 1.35,1.78 1.9,2.76c0.52,0.92 1,1.88 1.43,2.85c0.44,0.97 0.7,2 0.93,3.03c0.23,1.02 0.38,2.05 0.44,3.1c0.06,1.03 -0.05,2.05 -0.22,3.07c-0.16,1.06 -0.54,2.04 -1.05,2.98c-0.6,1.04 -1.4,1.94 -2.23,2.8c-0.81,0.8 -1.68,1.54 -2.6,2.22c-1.95,1.3 -3.94,2.59 -6.14,3.4c-0.88,0.3 -1.79,0.48 -2.72,0.53c-0.9,0.04 -1.79,-0.05 -2.68,-0.23c-0.88,-0.2 -1.72,-0.54 -2.52,-0.94c-0.85,-0.39 -1.6,-0.93 -2.32,-1.51c-0.78,-0.63 -1.47,-1.35 -2.12,-2.12c-0.68,-0.8 -1.24,-1.68 -1.77,-2.58c-0.55,-0.94 -0.93,-1.96 -1.23,-3c-0.27,-1.04 -0.41,-2.11 -0.48,-3.19c-0.06,-1.02 0.03,-2.03 0.21,-3.04c0.16,-0.87 0.44,-1.71 0.78,-2.53c0.31,-0.67 0.66,-1.33 1.06,-1.95c1.28,-1.53 3.21,-2.61 5.16,-3.03c0.54,-0.08 1.09,-0.07 1.63,0c0.56,0.11 1.08,0.32 1.58,0.58c0.56,0.32 1.08,0.68 1.59,1.06c0.53,0.39 1.02,0.82 1.48,1.29c0.47,0.46 0.9,0.96 1.32,1.46c0.4,0.52 0.78,1.05 1.12,1.61c0.32,0.52 0.58,1.07 0.81,1.64c0.04,0.1 0.07,0.21 0.11,0.31l-3.54,1.96c-0.04,-0.09 -0.07,-0.19 -0.11,-0.29c-0.22,-0.55 -0.46,-1.09 -0.78,-1.59c-0.33,-0.54 -0.7,-1.06 -1.09,-1.55c-0.41,-0.5 -0.83,-0.98 -1.29,-1.43c-0.46,-0.45 -0.94,-0.87 -1.46,-1.24c-0.49,-0.36 -1,-0.71 -1.55,-1c-0.47,-0.22 -0.97,-0.41 -1.49,-0.46c-0.52,-0.03 -1.04,-0.02 -1.54,0.12c-2.82,0.95 4.77,-3.07 1.77,-1.06c-0.43,0.59 -0.77,1.23 -1.09,1.88c-0.36,0.79 -0.67,1.6 -0.83,2.45c-0.19,0.98 -0.31,1.96 -0.26,2.96c0.05,1.05 0.18,2.09 0.44,3.11c0.29,1.01 0.65,1.99 1.18,2.9c0.52,0.88 1.07,1.75 1.73,2.53c0.64,0.74 1.32,1.44 2.08,2.05c0.71,0.55 1.45,1.06 2.27,1.43c0.79,0.37 1.61,0.68 2.47,0.85c0.86,0.15 1.74,0.21 2.62,0.15c0.9,-0.1 1.79,-0.3 2.64,-0.63c0.39,-0.16 0.5,-0.19 0.89,-0.38c0.14,-0.08 0.57,-0.32 0.43,-0.24c-5.58,3.29 -3.31,1.97 -2.12,1.2c0.94,-0.64 1.81,-1.37 2.63,-2.16c0.84,-0.82 1.63,-1.69 2.27,-2.69c0.53,-0.89 0.94,-1.82 1.11,-2.86c0.18,-0.98 0.3,-1.98 0.26,-2.99c-0.05,-1.02 -0.19,-2.03 -0.41,-3.03c-0.22,-1.02 -0.47,-2.02 -0.9,-2.97c-0.42,-0.96 -0.89,-1.9 -1.4,-2.81c-0.54,-0.96 -1.13,-1.88 -1.86,-2.7c-0.76,-0.87 -1.53,-1.74 -2.42,-2.47c-0.93,-0.72 -1.92,-1.35 -2.96,-1.9c-1.08,-0.57 -2.18,-1.1 -3.35,-1.44c-1.16,-0.33 -2.34,-0.55 -3.55,-0.61c-1.25,-0.06 -2.5,-0.05 -3.73,0.2c-1.27,0.27 -2.51,0.64 -3.67,1.22c-1.57,0.79 -0.84,0.44 2.28,-1.38c1.28,-0.75 -3.6,2.06 -2.23,1.57c-1.03,0.97 -2,2.01 -2.75,3.22c-0.81,1.31 -1.55,2.66 -2.11,4.1c-0.57,1.52 -1.03,3.08 -1.2,4.71c-0.18,1.66 -0.27,3.33 -0.04,4.98c0.29,1.65 0.76,3.26 1.48,4.78c0.73,1.54 1.55,3.04 2.55,4.43c1,1.38 2.06,2.74 3.35,3.87c1.25,1.05 2.58,2.01 4.03,2.78c1.48,0.77 2.99,1.49 4.58,2.03c1.62,0.56 3.28,1.05 4.99,1.31c1.63,0.19 3.27,0.26 4.91,0.17c1.6,-0.09 3.2,-0.26 4.78,-0.51c1.51,-0.25 3.02,-0.53 4.46,-1.09c1.53,-0.59 6.48,-3.15 0.33,0.19c1.22,-0.73 2.42,-1.49 3.58,-2.31c1.21,-0.86 2.37,-1.78 3.45,-2.8c1.06,-1.02 2.06,-2.08 2.93,-3.27c0.87,-1.16 1.71,-2.36 2.29,-3.7c0.56,-1.31 1.05,-2.65 1.3,-4.05c0.25,-1.45 0.38,-2.92 0.27,-4.38c-0.16,-1.59 -0.44,-3.16 -1.01,-4.65c-0.64,-1.69 -1.38,-3.33 -2.36,-4.85c-1.13,-1.69 -2.34,-3.33 -3.75,-4.81c-1.59,-1.69 -3.26,-3.31 -5.09,-4.75c-2,-1.51 -4.1,-2.93 -6.42,-3.93c-2.41,-0.9 -4.89,-1.38 -7.46,-1.53c-2.74,-0.21 -5.49,-0.35 -8.25,-0.24c-2.82,0.12 -5.64,0.34 -8.4,1.04c-2.61,0.66 -5.2,1.48 -7.61,2.71c0.77,-0.45 1.53,-0.9 2.29,-1.36c0.37,-0.22 -0.74,0.42 -1.1,0.64c-1.41,0.86 -2.76,1.82 -4.05,2.85c-1.85,1.57 -3.67,3.18 -5.38,4.91c-1.74,1.79 -3.39,3.66 -4.99,5.57c-1.72,2.06 -3.44,4.12 -5.07,6.24c-1.79,2.32 -3.54,4.67 -5.2,7.09c-1.79,2.57 -3.54,5.16 -5.17,7.84c-1.63,2.71 -3.17,5.48 -4.69,8.25c-1.33,2.45 -2.62,4.92 -4.04,7.31c-1.22,1.98 -2.47,3.94 -3.94,5.74c-1.26,1.53 -2.59,3.01 -4.17,4.22c-2.37,1.75 -4.99,3.27 -7.77,4.26c-1.43,0.38 -2.9,0.65 -4.39,0.66c-1.37,-0.04 -2.71,-0.27 -4.01,-0.71c-0.99,-0.35 -1.9,-0.82 -2.74,-1.45c-0.72,-0.5 -1.42,-1.01 -2.13,-1.51c-0.69,-0.49 -1.39,-0.96 -2.12,-1.37c-0.71,-0.39 -1.44,-0.77 -2.2,-1.07c-0.74,-0.29 -1.51,-0.53 -2.3,-0.67c-0.8,-0.13 -1.61,-0.18 -2.42,-0.14c-0.88,0.06 -1.76,0.16 -2.61,0.4c-0.84,0.24 -1.66,0.53 -2.45,0.89c-0.36,0.16 -0.43,0.19 -0.79,0.37c-0.12,0.07 -0.5,0.28 -0.38,0.2c5.59,-3.26 3.61,-2.09 2.39,-1.38c-0.61,0.39 -1.22,0.78 -1.75,1.27c-0.47,0.41 -0.92,0.85 -1.36,1.29l-3.74,1.58z" fill="#f00" id="path4924"/>
     <path d="m414.4,512.63c1.6,-1.19 3.37,-2.22 5.25,-2.9c0.75,-0.28 1.53,-0.44 2.32,-0.57c0.88,-0.16 1.77,-0.18 2.66,-0.16c0.98,0.05 1.95,0.18 2.92,0.33c1.05,0.18 2.07,0.44 3.09,0.73c1.11,0.33 2.21,0.72 3.29,1.13c1.14,0.43 2.28,0.88 3.39,1.4c1.36,0.66 2.7,1.38 4.04,2.08c1.57,0.82 3.11,1.7 4.64,2.58c1.66,0.96 3.31,1.93 4.96,2.91c1.8,1.05 3.58,2.14 5.37,3.23c1.83,1.11 3.68,2.2 5.52,3.3c1.94,1.16 3.91,2.26 5.89,3.37c2.1,1.17 4.24,2.28 6.39,3.36c2.21,1.12 4.45,2.19 6.69,3.25c2.28,1.08 4.6,2.08 6.94,3.05c2.39,0.99 4.83,1.88 7.27,2.75c2.48,0.9 5,1.68 7.53,2.42c2.58,0.75 5.19,1.38 7.82,1.9c2.7,0.57 5.44,0.89 8.19,1.17c2.69,0.28 5.38,0.45 8.09,0.5c2.66,0.01 5.32,-0.18 7.98,-0.42c2.52,-0.24 5.02,-0.63 7.51,-1.11c2.32,-0.46 4.61,-1.09 6.85,-1.85c0.36,-0.14 0.71,-0.26 1.06,-0.4c0.68,-0.27 1.38,-0.57 2.04,-0.9c0.33,-0.16 1.29,-0.71 0.97,-0.52c-4.01,2.36 -2.8,1.61 -1.54,0.81c1.9,-1.2 3.55,-2.7 5.06,-4.34c1.5,-1.73 2.75,-3.65 3.9,-5.62c1.13,-1.98 2.04,-4.07 2.84,-6.2c0.85,-2.27 1.29,-4.65 1.67,-7.04c0.41,-2.52 0.53,-5.06 0.46,-7.6c-0.1,-2.6 -0.52,-5.18 -1.09,-7.71c-0.58,-2.53 -1.57,-4.91 -2.73,-7.21c-1.22,-2.35 -2.74,-4.51 -4.33,-6.61c-1.63,-2.16 -3.56,-4.05 -5.58,-5.83c-2.1,-1.83 -4.41,-3.37 -6.76,-4.85c-2.2,-1.39 -4.48,-2.67 -6.79,-3.87c-2.07,-1.08 -4.23,-1.98 -6.42,-2.79c-1.93,-0.71 -3.91,-1.26 -5.92,-1.69c-1.81,-0.39 -3.63,-0.55 -5.47,-0.58c-1.77,-0.06 -3.48,0.32 -5.16,0.85c-1.61,0.36 -7.15,3.64 -1.15,0.21c-1.47,0.89 -2.79,2 -4.05,3.16c-1.26,1.19 -2.35,2.52 -3.36,3.92c-1.08,1.49 -1.92,3.11 -2.68,4.78c-0.78,1.81 -1.38,3.69 -1.93,5.58c-0.57,1.9 -0.94,3.84 -1.23,5.79c-0.29,1.98 -0.34,3.98 -0.29,5.98c0.07,1.94 0.37,3.86 0.82,5.75c0.47,1.89 1.3,3.64 2.24,5.33c0.97,1.7 2.15,3.27 3.38,4.79c1.22,1.51 2.63,2.83 4.09,4.1c1.42,1.22 2.93,2.32 4.48,3.37c1.43,1 2.98,1.82 4.57,2.56c1.54,0.68 3.12,1.25 4.72,1.77c1.5,0.52 3.06,0.83 4.62,1.11c1.5,0.26 3.02,0.35 4.53,0.36c1.48,0.02 2.93,-0.19 4.37,-0.51c-1.03,0.91 3.89,-1.74 2.75,-1.07c-3.94,2.32 -3.46,2.03 -2.14,1.16c1.38,-0.95 2.5,-2.19 3.54,-3.49c1.16,-1.46 1.98,-3.15 2.7,-4.86c0.77,-1.93 1.23,-3.95 1.63,-5.98c0.36,-2.01 0.52,-4.05 0.6,-6.09c0.05,-1.99 -0.13,-3.98 -0.39,-5.95c-0.28,-1.93 -0.8,-3.81 -1.41,-5.66c-0.6,-1.78 -1.4,-3.48 -2.27,-5.14c-0.81,-1.54 -1.76,-3 -2.74,-4.44c-0.9,-1.38 -2.03,-2.57 -3.27,-3.66c-1.18,-1 -2.4,-1.97 -3.68,-2.85c-1.12,-0.78 -2.36,-1.35 -3.63,-1.85c-1.15,-0.47 -2.37,-0.7 -3.6,-0.85c-1.13,-0.11 -2.27,-0.01 -3.39,0.15c-1.07,0.15 -2.05,0.55 -3,1.04c-0.16,0.09 -0.32,0.18 -0.47,0.26c0.99,-0.57 1.99,-1.15 2.99,-1.71c0.15,-0.09 -0.31,0.18 -0.46,0.28c-0.46,0.29 -0.89,0.61 -1.32,0.93c-0.84,0.64 -1.57,1.41 -2.23,2.23c-0.68,0.83 -1.19,1.77 -1.63,2.75c-0.45,1.07 -0.71,2.2 -0.93,3.33c-0.22,1.21 -0.25,2.44 -0.25,3.66c0,1.29 0.13,2.56 0.3,3.84c0.17,1.26 0.44,2.51 0.77,3.75c0.32,1.19 0.71,2.35 1.19,3.49c0.5,1.13 1.16,2.17 1.85,3.18c0.7,1.03 1.5,1.98 2.36,2.88c0.89,0.89 1.86,1.7 2.85,2.49c0.93,0.76 1.92,1.44 2.93,2.09c0.92,0.58 1.87,1.12 2.88,1.53c0.9,0.36 1.84,0.51 2.8,0.53c0.85,-0.03 1.67,-0.22 2.46,-0.52c3.94,-2.09 -4.25,2.9 -1.38,0.81c0.64,-0.48 1.13,-1.07 1.53,-1.76c0.4,-0.78 0.62,-1.63 0.76,-2.5c0.15,-1 0.1,-2.01 0,-3.01c-0.13,-1.06 -0.38,-2.11 -0.66,-3.15c-0.29,-1.04 -0.72,-2.04 -1.18,-3.01c-0.45,-0.95 -1,-1.84 -1.57,-2.72c-0.52,-0.8 -1.08,-1.59 -1.7,-2.31c-0.59,-0.64 -1.22,-1.21 -1.88,-1.77c-0.5,-0.45 -1.09,-0.76 -1.7,-1.02c-0.47,-0.19 -0.95,-0.25 -1.44,-0.2c-0.41,0.03 -0.74,0.21 -1.08,0.43c5.45,-3.23 3.24,-2.31 2.49,-0.86c-0.2,0.39 -0.27,0.82 -0.31,1.26c-0.05,0.52 0.01,1.03 0.1,1.55c0.11,0.55 0.26,1.09 0.44,1.63c0.21,0.6 0.48,1.18 0.75,1.76c0.19,0.43 0.4,0.86 0.63,1.27l-3.52,2.02c-0.23,-0.42 -0.45,-0.85 -0.64,-1.29c-0.28,-0.59 -0.55,-1.19 -0.77,-1.8c-0.19,-0.56 -0.35,-1.12 -0.47,-1.69c-0.1,-0.54 -0.19,-1.08 -0.15,-1.63c0.02,-0.47 0.07,-0.95 0.25,-1.39c0.75,-1.86 2.41,-2.33 4.36,-3.38c0.37,-0.18 0.78,-0.28 1.2,-0.28c0.53,0.02 1.05,0.13 1.53,0.36c0.64,0.29 1.24,0.64 1.76,1.12c0.67,0.57 1.32,1.17 1.91,1.82c0.64,0.75 1.2,1.54 1.74,2.36c0.57,0.89 1.12,1.8 1.58,2.76c0.48,1 0.92,2.01 1.22,3.08c0.29,1.05 0.55,2.12 0.69,3.21c0.12,1.03 0.18,2.07 0.05,3.1c-0.12,0.9 -0.33,1.79 -0.7,2.63c-0.36,0.73 -0.82,1.39 -1.46,1.9c-1.65,1.37 -3.6,2.38 -5.58,3.19c-0.82,0.25 -1.67,0.42 -2.54,0.4c-1,-0.07 -1.97,-0.27 -2.89,-0.65c-1.02,-0.45 -1.98,-1 -2.91,-1.59c-1.02,-0.67 -2.01,-1.37 -2.95,-2.13c-1,-0.8 -1.98,-1.63 -2.88,-2.54c-0.87,-0.92 -1.68,-1.88 -2.39,-2.93c-0.71,-1.04 -1.38,-2.1 -1.89,-3.26c-0.49,-1.15 -0.89,-2.33 -1.22,-3.54c-0.33,-1.25 -0.62,-2.51 -0.8,-3.8c-0.17,-1.28 -0.31,-2.57 -0.32,-3.87c-0.01,-1.25 0.02,-2.5 0.22,-3.73c0.2,-1.16 0.45,-2.31 0.89,-3.41c0.42,-1.01 0.92,-1.98 1.58,-2.85c0.66,-0.85 1.36,-1.65 2.2,-2.32c1.92,-1.47 3.99,-2.72 6.17,-3.78c0.98,-0.46 2,-0.82 3.08,-0.94c1.14,-0.13 2.3,-0.2 3.45,-0.06c1.25,0.18 2.48,0.44 3.66,0.93c1.28,0.53 2.53,1.13 3.67,1.93c1.29,0.9 2.51,1.88 3.7,2.9c1.25,1.11 2.4,2.33 3.32,3.74c0.98,1.45 1.94,2.93 2.76,4.48c0.88,1.69 1.69,3.4 2.3,5.2c0.62,1.87 1.15,3.78 1.44,5.73c0.28,1.99 0.46,4 0.42,6.01c-0.06,2.06 -0.22,4.12 -0.57,6.15c-0.39,2.05 -0.84,4.09 -1.59,6.05c-0.71,1.73 -1.51,3.45 -2.65,4.96c-1.02,1.33 -2.14,2.6 -3.49,3.6c-2.32,1.62 -4.8,3.17 -7.58,3.82c-1.45,0.29 -2.93,0.48 -4.41,0.44c-1.53,-0.04 -3.06,-0.15 -4.57,-0.42c-1.57,-0.29 -3.14,-0.63 -4.65,-1.16c-1.61,-0.53 -3.2,-1.11 -4.75,-1.81c-1.6,-0.76 -3.16,-1.59 -4.6,-2.61c-1.55,-1.07 -3.08,-2.19 -4.5,-3.42c-1.48,-1.28 -2.9,-2.63 -4.12,-4.15c-1.25,-1.54 -2.44,-3.13 -3.42,-4.86c-0.96,-1.71 -1.81,-3.5 -2.29,-5.42c-0.48,-1.91 -0.79,-3.86 -0.86,-5.83c-0.06,-2.02 -0.03,-4.03 0.25,-6.03c0.28,-1.98 0.65,-3.93 1.21,-5.85c0.54,-1.9 1.14,-3.8 1.91,-5.63c0.73,-1.69 1.57,-3.33 2.63,-4.85c1,-1.42 2.09,-2.78 3.33,-3.99c1.26,-1.19 2.56,-2.32 4.03,-3.24c2.62,-1.52 5.16,-3.22 8.09,-4.12c1.7,-0.5 3.44,-0.83 5.23,-0.75c1.85,0.06 3.69,0.25 5.51,0.65c2.02,0.45 4.01,1.01 5.95,1.74c2.2,0.83 4.36,1.74 6.44,2.83c2.32,1.22 4.59,2.51 6.8,3.91c2.36,1.5 4.69,3.05 6.79,4.9c2.04,1.8 3.98,3.71 5.63,5.89c1.6,2.13 3.14,4.31 4.36,6.68c1.18,2.33 2.19,4.74 2.78,7.29c0.59,2.56 1.01,5.15 1.13,7.78c0.08,2.57 -0.02,5.13 -0.43,7.67c-0.37,2.4 -0.79,4.81 -1.63,7.11c-0.78,2.15 -1.69,4.26 -2.81,6.26c-1.14,1.99 -2.38,3.93 -3.86,5.69c-1.49,1.68 -3.13,3.21 -5.02,4.44c-2.97,1.95 -6.06,3.78 -9.43,4.93c-2.26,0.74 -4.55,1.35 -6.89,1.8c-2.49,0.48 -5,0.85 -7.53,1.08c-2.66,0.23 -5.33,0.41 -8,0.38c-2.71,-0.06 -5.42,-0.24 -8.11,-0.52c-2.75,-0.29 -5.5,-0.63 -8.21,-1.2c-2.64,-0.54 -5.25,-1.18 -7.84,-1.93c-2.54,-0.74 -5.06,-1.54 -7.55,-2.44c-2.44,-0.87 -4.88,-1.77 -7.28,-2.77c-2.34,-0.97 -4.67,-1.97 -6.95,-3.07c-2.24,-1.06 -4.48,-2.12 -6.7,-3.25c-2.15,-1.09 -4.29,-2.2 -6.4,-3.38c-1.98,-1.1 -3.95,-2.21 -5.9,-3.37c-1.84,-1.1 -3.69,-2.19 -5.53,-3.3c-1.78,-1.09 -3.56,-2.17 -5.37,-3.23c-1.65,-0.97 -3.3,-1.94 -4.96,-2.9c-1.53,-0.88 -3.06,-1.75 -4.63,-2.56c-1.34,-0.7 -2.67,-1.41 -4.04,-2.06c-1.1,-0.5 -2.23,-0.95 -3.37,-1.37c-1.08,-0.4 -2.17,-0.79 -3.27,-1.1c-1.01,-0.28 -2.03,-0.53 -3.06,-0.69c-0.96,-0.14 -1.93,-0.26 -2.9,-0.28c-0.87,0 -1.75,0.04 -2.61,0.21c-0.78,0.16 -1.55,0.34 -2.28,0.64c-0.29,0.12 -0.37,0.14 -0.65,0.28c-0.11,0.06 -0.43,0.23 -0.33,0.17c5.43,-3.2 3.85,-2.23 2.69,-1.57l-3.77,1.52z" fill="#f00" id="path4926"/>
     <path d="m379.64,605.2c0.42,-0.08 0.84,-0.16 1.27,-0.19c0.57,-0.06 1.15,-0.02 1.73,0.02c0.73,0.07 1.45,0.21 2.17,0.35c0.8,0.18 1.6,0.39 2.39,0.6c0.9,0.24 1.79,0.48 2.68,0.75c1,0.29 1.98,0.63 2.97,0.95c1.07,0.35 2.17,0.65 3.27,0.93c1.17,0.27 2.37,0.45 3.57,0.57c1.25,0.14 2.51,0.12 3.76,0.03c1.31,-0.08 2.58,-0.36 3.84,-0.69c1.32,-0.35 2.61,-0.83 3.87,-1.35c1.29,-0.57 2.51,-1.25 3.73,-1.96c2.07,-1.19 -1.46,0.85 -2.2,1.27c-0.21,0.12 0.43,-0.25 0.64,-0.37c0.64,-0.38 1.28,-0.76 1.92,-1.13c2.49,-1.48 5,-2.91 7.51,-4.35c1.52,-0.86 3.1,-1.61 4.69,-2.32c1.76,-0.75 3.56,-1.39 5.37,-2.01c1.82,-0.63 3.68,-1.12 5.54,-1.6c1.78,-0.45 3.59,-0.79 5.41,-1.03c1.69,-0.21 3.4,-0.28 5.11,-0.22c1.55,0.05 3.09,0.3 4.61,0.65c1.37,0.31 2.67,0.87 3.93,1.49c1.17,0.61 2.25,1.36 3.3,2.16c1.03,0.78 1.96,1.67 2.88,2.56c0.94,0.94 1.85,1.91 2.77,2.87c0.98,1.07 2.03,2.06 3.11,3.03c1.19,1.06 2.46,2.02 3.76,2.94c1.31,0.92 2.68,1.76 4.08,2.54c1.33,0.71 2.68,1.36 4.05,1.98c1.18,0.58 2.36,1.01 3.68,1.06c1.83,0.04 5.67,-2.46 -0.28,0.88c1.27,-0.94 1.96,-2.35 2.59,-3.75c0.86,-2.11 1.48,-4.31 2.09,-6.5c0.74,-2.64 1.46,-5.28 2.2,-7.91c0.77,-2.67 1.65,-5.29 2.59,-7.9c0.88,-2.49 1.96,-4.9 3.15,-7.26c1.14,-2.28 2.5,-4.44 3.92,-6.55c1.37,-2.04 2.98,-3.9 4.63,-5.73c1.6,-1.75 3.31,-3.41 5.09,-4.98c1.75,-1.53 3.62,-2.9 5.53,-4.2c3.01,-1.94 6.13,-3.71 9.34,-5.29c1.95,-0.96 3.99,-1.69 6.06,-2.33c1.96,-0.61 4.01,-0.86 6.06,-0.94c1.9,-0.08 3.79,0.12 5.65,0.52c1.83,0.44 3.53,1.28 5.13,2.25c1.69,1.06 3.1,2.45 4.44,3.9c1.44,1.6 2.64,3.36 3.8,5.16c1.23,1.91 2.26,3.93 3.22,5.99c0.96,2.12 1.77,4.31 2.5,6.53c0.71,2.13 1.25,4.32 1.66,6.52c0.39,2.13 0.48,4.29 0.48,6.45c-0.03,2.04 -0.26,4.07 -0.57,6.08c-0.31,1.94 -0.8,3.84 -1.4,5.71c-0.6,1.85 -1.42,3.6 -2.35,5.29c-1.02,1.79 -2.33,3.36 -3.75,4.84c-1.43,1.48 -3.05,2.75 -4.74,3.93c-2.72,1.79 -5.56,3.42 -8.52,4.77c-1.63,0.72 -3.34,1.22 -5.09,1.54c-1.68,0.27 -3.39,0.26 -5.09,0.19c-1.58,-0.08 -3.13,-0.38 -4.67,-0.75c-1.45,-0.36 -2.84,-0.92 -4.19,-1.57c-1.32,-0.64 -2.54,-1.43 -3.7,-2.32c-1.14,-0.9 -2.13,-1.95 -3.07,-3.05c-0.95,-1.1 -1.76,-2.31 -2.49,-3.57c-0.76,-1.34 -1.31,-2.79 -1.83,-4.24c-0.51,-1.48 -0.87,-3.01 -1.14,-4.55c-0.26,-1.53 -0.37,-3.08 -0.41,-4.64c-0.04,-1.54 0.11,-3.08 0.34,-4.61c0.23,-1.49 0.62,-2.95 1.11,-4.38c0.5,-1.4 1.18,-2.73 1.9,-4.02c0.68,-1.2 1.49,-2.33 2.37,-3.38c0.87,-1.04 1.95,-1.86 3.08,-2.59c2.29,-1.44 4.58,-2.78 7.14,-3.65c1.21,-0.42 2.47,-0.68 3.74,-0.86c1.2,-0.16 2.42,-0.14 3.62,-0.06c1.21,0.13 2.39,0.4 3.55,0.76c1.14,0.38 2.24,0.88 3.29,1.47c1.06,0.61 1.96,1.44 2.84,2.26c0.85,0.77 1.56,1.68 2.22,2.62c0.63,0.9 1.14,1.88 1.62,2.87c0.45,0.95 0.79,1.96 1.1,2.97c0.31,0.96 0.53,1.94 0.7,2.93c0.15,1.01 0.17,2.03 0.12,3.05c-0.07,1.02 -0.36,2.01 -0.67,2.98c-0.29,0.97 -0.7,1.88 -1.22,2.75c-0.54,0.87 -1.2,1.67 -1.86,2.45c-1.51,1.82 -3.55,2.6 -5.65,3.79c-0.86,0.37 -1.76,0.61 -2.67,0.83c-0.8,0.22 -1.62,0.35 -2.46,0.35c-0.79,-0.04 -1.58,-0.14 -2.35,-0.3c-0.77,-0.17 -1.48,-0.48 -2.15,-0.88c-0.72,-0.42 -1.32,-0.95 -1.88,-1.56c-0.59,-0.68 -1.16,-1.39 -1.69,-2.11c-0.56,-0.76 -0.97,-1.6 -1.34,-2.46c-0.34,-0.84 -0.58,-1.72 -0.81,-2.59c-0.24,-0.8 -0.33,-1.62 -0.41,-2.44c-0.08,-0.74 -0.02,-1.49 0.1,-2.22c0.12,-0.64 0.31,-1.27 0.53,-1.88c0.19,-0.52 0.5,-0.99 0.84,-1.42c1.27,-1.44 3.09,-2.29 4.85,-2.98c0.49,-0.21 1.02,-0.26 1.55,-0.26c0.56,0 1.09,0.14 1.63,0.29c0.65,0.19 1.22,0.55 1.75,0.97c0.66,0.58 1.22,1.26 1.68,2.01c0.45,0.79 0.77,1.63 1.07,2.49c0.29,0.82 0.48,1.67 0.71,2.51l-3.55,1.93c-0.24,-0.82 -0.42,-1.67 -0.71,-2.49c-0.28,-0.82 -0.59,-1.64 -1.01,-2.41c-0.45,-0.7 -0.98,-1.34 -1.62,-1.88c-0.51,-0.37 -1.05,-0.69 -1.67,-0.83c-0.51,-0.13 -1.02,-0.23 -1.55,-0.19c-0.51,0.04 -1,0.15 -1.46,0.37c-1.83,0.84 4.97,-3.26 2.07,-1.12c-0.36,0.4 -0.68,0.82 -0.9,1.3c-0.24,0.59 -0.43,1.19 -0.57,1.81c-0.13,0.7 -0.22,1.41 -0.15,2.13c0.07,0.8 0.15,1.6 0.38,2.38c0.22,0.85 0.45,1.71 0.78,2.53c0.35,0.84 0.75,1.66 1.29,2.38c0.53,0.72 1.08,1.42 1.67,2.08c0.54,0.57 1.13,1.07 1.82,1.45c0.65,0.36 1.34,0.63 2.08,0.77c0.75,0.14 1.52,0.24 2.29,0.23c0.82,-0.04 1.62,-0.2 2.41,-0.42c0.89,-0.23 1.78,-0.49 2.61,-0.89c-6,3.51 -2.32,1.63 -1.23,0.3c0.67,-0.76 1.31,-1.54 1.88,-2.38c0.54,-0.84 0.98,-1.72 1.26,-2.67c0.31,-0.94 0.63,-1.89 0.71,-2.89c0.08,-0.99 0.06,-1.98 -0.08,-2.96c-0.15,-0.98 -0.37,-1.95 -0.67,-2.89c-0.3,-0.99 -0.62,-1.98 -1.07,-2.92c-0.46,-0.97 -0.97,-1.92 -1.58,-2.81c-0.65,-0.91 -1.34,-1.8 -2.17,-2.55c-0.87,-0.8 -1.75,-1.6 -2.8,-2.17c-1.03,-0.57 -2.11,-1.05 -3.24,-1.4c-1.14,-0.34 -2.3,-0.59 -3.49,-0.68c-1.19,-0.07 -2.39,-0.06 -3.57,0.12c-1.26,0.2 -2.5,0.49 -3.7,0.92c-1.55,0.57 -6.33,3.03 -0.18,-0.28c-1.15,0.69 -2.24,1.45 -3.13,2.46c-0.9,1.03 -1.72,2.13 -2.4,3.32c-0.74,1.27 -1.42,2.57 -1.94,3.95c-0.5,1.4 -0.9,2.84 -1.14,4.32c-0.24,1.5 -0.41,3.02 -0.38,4.55c0.03,1.53 0.14,3.06 0.39,4.58c0.26,1.52 0.6,3.03 1.11,4.49c0.5,1.43 1.05,2.85 1.8,4.17c0.71,1.24 1.5,2.43 2.44,3.51c0.93,1.07 1.91,2.1 3.03,2.98c1.14,0.86 2.35,1.63 3.66,2.24c1.33,0.63 2.7,1.17 4.14,1.51c1.52,0.35 3.06,0.63 4.62,0.69c1.68,0.05 3.37,0.03 5.03,-0.27c1.73,-0.35 3.42,-0.88 5.02,-1.61c0.78,-0.37 0.93,-0.43 1.7,-0.82c0.28,-0.15 1.12,-0.62 0.84,-0.45c-5.26,3.2 -2.03,1.16 -0.9,0.47c1.7,-1.15 3.33,-2.4 4.78,-3.86c1.42,-1.45 2.74,-2.98 3.78,-4.74c0.95,-1.67 1.77,-3.39 2.38,-5.21c0.61,-1.85 1.11,-3.74 1.43,-5.66c0.33,-2 0.56,-4.01 0.6,-6.03c0.01,-2.14 -0.06,-4.27 -0.44,-6.38c-0.4,-2.19 -0.94,-4.36 -1.63,-6.48c-0.72,-2.2 -1.53,-4.38 -2.48,-6.49c-0.95,-2.03 -1.97,-4.04 -3.19,-5.93c-1.15,-1.78 -2.35,-3.53 -3.77,-5.1c-1.32,-1.42 -2.72,-2.79 -4.38,-3.81c-1.59,-0.93 -3.25,-1.74 -5.07,-2.13c-1.84,-0.36 -3.7,-0.54 -5.58,-0.44c-2.03,0.11 -4.05,0.39 -6,1.02c-2.06,0.65 -4.08,1.4 -6.01,2.37c-0.81,0.41 -1.18,0.59 -1.98,1.01c-0.33,0.18 -1.31,0.74 -0.99,0.54c5.15,-3.12 1.58,-0.87 0.49,-0.23c-1.92,1.28 -3.79,2.65 -5.55,4.16c-1.78,1.56 -3.5,3.2 -5.11,4.94c-1.65,1.81 -3.27,3.65 -4.65,5.68c-1.43,2.09 -2.79,4.24 -3.94,6.5c-1.2,2.34 -2.29,4.74 -3.18,7.22c-0.94,2.6 -1.83,5.22 -2.6,7.87c-0.75,2.63 -1.46,5.27 -2.19,7.91c-0.61,2.2 -1.23,4.41 -2.06,6.54c-0.61,1.44 -1.27,2.9 -2.48,3.95c-2.23,1.32 -4.13,3.02 -6.77,2.95c-1.33,-0.12 -2.55,-0.6 -3.75,-1.18c-1.37,-0.63 -2.74,-1.29 -4.07,-2.01c-1.4,-0.8 -2.78,-1.65 -4.1,-2.58c-1.31,-0.93 -2.59,-1.9 -3.78,-2.98c-1.09,-0.97 -2.15,-1.98 -3.14,-3.05c-0.91,-0.96 -1.82,-1.92 -2.76,-2.85c-0.91,-0.88 -1.83,-1.76 -2.85,-2.53c-1.03,-0.77 -2.1,-1.5 -3.26,-2.08c-1.24,-0.6 -2.52,-1.14 -3.88,-1.43c-1.5,-0.32 -3.02,-0.55 -4.56,-0.58c-1.69,-0.03 -3.38,0.04 -5.06,0.27c-1.81,0.26 -3.61,0.6 -5.38,1.06c-1.86,0.49 -3.71,1 -5.52,1.63c-1.81,0.63 -3.6,1.27 -5.35,2.04c-1.59,0.72 -3.16,1.48 -4.67,2.35c5.97,-3.47 0.76,-0.45 -0.61,0.37c-2.42,1.41 -4.82,2.85 -7.27,4.22c-1.22,0.7 -2.46,1.37 -3.76,1.91c-1.28,0.51 -2.57,0.98 -3.9,1.31c-1.28,0.32 -2.57,0.57 -3.89,0.64c-1.27,0.06 -2.54,0.06 -3.8,-0.09c-1.22,-0.14 -2.42,-0.33 -3.61,-0.62c-1.1,-0.29 -2.2,-0.59 -3.29,-0.94c-0.98,-0.33 -1.97,-0.66 -2.96,-0.95c-0.89,-0.26 -1.78,-0.5 -2.67,-0.74c-0.79,-0.2 -1.58,-0.41 -2.38,-0.57c-0.71,-0.14 -1.43,-0.26 -2.15,-0.31c-0.56,-0.03 -1.13,-0.03 -1.69,0.04c-0.42,0.06 -0.83,0.13 -1.24,0.23l3.23,-2.46z" fill="#f00" id="path4930"/>
     <path d="m385.03,471.98c0.17,-0.37 0.37,-0.72 0.58,-1.07c0.25,-0.41 0.56,-0.78 0.88,-1.14c0.36,-0.41 0.76,-0.78 1.2,-1.1c1.65,-1.19 3.46,-2.12 5.33,-2.91c0.66,-0.29 1.34,-0.51 2.04,-0.72c0.68,-0.19 1.37,-0.3 2.08,-0.34c0.64,-0.04 1.28,0.03 1.91,0.09c0.6,0.04 1.19,0.16 1.75,0.36c0.59,0.21 1.06,0.6 1.47,1.05c0.44,0.49 0.72,1.09 0.99,1.7c0.29,0.67 0.42,1.39 0.49,2.11c0.05,0.8 -0.02,1.59 -0.15,2.37c-0.17,0.89 -0.51,1.73 -0.9,2.54c-0.43,0.87 -0.93,1.69 -1.49,2.47c-0.57,0.78 -1.19,1.52 -1.82,2.24c-0.6,0.72 -1.27,1.37 -2.02,1.93c-1.92,1.23 -3.87,2.46 -5.99,3.32c-0.8,0.31 -1.64,0.51 -2.49,0.66c-0.81,0.13 -1.63,0.1 -2.44,0.07c-0.78,-0.03 -1.51,-0.19 -2.21,-0.53c-0.76,-0.4 -1.43,-0.94 -2.08,-1.49c-0.63,-0.55 -1.18,-1.18 -1.66,-1.86c-0.47,-0.67 -0.85,-1.4 -1.14,-2.17c-0.28,-0.74 -0.5,-1.51 -0.66,-2.29c-0.16,-0.83 -0.17,-1.68 -0.16,-2.52c0.01,-0.9 0.2,-1.78 0.42,-2.64c0.23,-0.86 0.48,-1.71 0.77,-2.55c0.29,-0.84 0.7,-1.63 1.15,-2.4c0.45,-0.78 0.98,-1.5 1.56,-2.18c0.59,-0.69 1.25,-1.32 1.94,-1.92c0.68,-0.58 1.4,-1.1 2.15,-1.59c1.88,-1.14 3.75,-2.31 5.73,-3.27c0.77,-0.37 1.56,-0.68 2.35,-0.97c0.81,-0.28 1.63,-0.57 2.45,-0.8c0.86,-0.24 1.74,-0.37 2.62,-0.53c0.85,-0.11 1.71,-0.23 2.57,-0.29c0.93,-0.08 1.86,-0.03 2.79,0c0.99,0.03 1.97,0.06 2.95,0.12c1.05,0.07 2.09,0.13 3.14,0.19c1.05,0.07 2.11,0.1 3.16,0.12c1.05,0.01 2.1,0.03 3.14,-0.01c1.06,-0.05 2.13,-0.13 3.18,-0.25c1.07,-0.15 2.12,-0.35 3.17,-0.57c0.73,-0.17 0.36,-0.08 1.1,-0.25l-3.21,2.45c-0.74,0.17 -0.38,0.08 -1.11,0.24c-1.06,0.21 -2.12,0.42 -3.19,0.54c-1.07,0.11 -2.13,0.18 -3.2,0.22c-1.05,0.03 -2.1,0.01 -3.15,0c-1.06,-0.02 -2.12,-0.06 -3.17,-0.13c-1.05,-0.06 -2.1,-0.13 -3.14,-0.19c-0.98,-0.05 -1.97,-0.08 -2.95,-0.11c-0.92,-0.02 -1.85,-0.06 -2.77,0.04c-0.85,0.08 -1.7,0.18 -2.54,0.32c-0.87,0.15 -1.75,0.3 -2.59,0.56c-0.82,0.26 -1.63,0.53 -2.44,0.82c-0.78,0.31 -1.56,0.63 -2.32,1.01c-4.1,2.13 4.45,-2.55 1.2,-0.73c-0.75,0.47 -1.48,0.98 -2.16,1.55c-0.7,0.57 -1.37,1.18 -1.97,1.85c-0.59,0.66 -1.14,1.36 -1.59,2.11c-0.45,0.75 -0.88,1.51 -1.19,2.33c-0.29,0.83 -0.55,1.68 -0.78,2.52c-0.23,0.84 -0.42,1.69 -0.46,2.56c-0.02,0.81 -0.01,1.64 0.12,2.44c0.15,0.76 0.36,1.51 0.63,2.23c0.28,0.74 0.64,1.44 1.09,2.09c0.47,0.65 1,1.24 1.6,1.76c0.63,0.53 1.28,1.05 2.02,1.4c0.68,0.28 1.39,0.38 2.13,0.4c0.79,0.02 1.59,0.02 2.38,-0.14c0.83,-0.17 1.66,-0.39 2.44,-0.73c0.39,-0.17 0.44,-0.19 0.83,-0.38c0.14,-0.07 0.55,-0.3 0.42,-0.22c-5.57,3.29 -3.43,1.99 -2.2,1.28c0.77,-0.52 1.46,-1.13 2.05,-1.85c0.64,-0.71 1.26,-1.44 1.84,-2.2c0.56,-0.76 1.08,-1.56 1.52,-2.41c0.4,-0.77 0.74,-1.58 0.94,-2.43c0.15,-0.75 0.23,-1.51 0.19,-2.28c-0.04,-0.68 -0.16,-1.36 -0.43,-2c-0.24,-0.56 -0.5,-1.12 -0.91,-1.57c-0.39,-0.4 -0.83,-0.72 -1.36,-0.87c-0.56,-0.17 -1.13,-0.26 -1.7,-0.3c-0.62,-0.05 -1.25,-0.09 -1.87,-0.03c-0.69,0.07 -1.37,0.2 -2.03,0.41c-0.68,0.22 -1.36,0.46 -2.01,0.76c-0.33,0.14 -0.66,0.28 -0.99,0.44c-0.1,0.05 -0.41,0.22 -0.3,0.16c7.27,-4.28 3.9,-2.28 2.91,-1.69c-0.45,0.29 -0.88,0.6 -1.23,1.01c-0.32,0.34 -0.64,0.69 -0.9,1.08c-0.23,0.32 -0.41,0.67 -0.6,1.02l-3.7,1.68z" fill="#f00" id="path4932"/>
     <path d="m494.95,475.28c0.06,-0.42 0.14,-0.83 0.23,-1.24c0.14,-0.57 0.4,-1.09 0.66,-1.61c0.33,-0.77 0.83,-1.42 1.39,-2.04c0.82,-0.86 1.77,-1.57 2.71,-2.3c0.97,-0.76 1.95,-1.5 2.95,-2.21c2.31,-1.56 4.75,-2.92 7.27,-4.12c1.41,-0.67 2.86,-1.25 4.33,-1.79c1.43,-0.5 2.86,-1 4.3,-1.44c1.39,-0.43 2.8,-0.79 4.23,-1.11c1.38,-0.32 2.77,-0.6 4.17,-0.84c1.33,-0.23 2.66,-0.39 4.01,-0.52c1.31,-0.13 2.63,-0.19 3.95,-0.26c1.31,-0.07 2.62,-0.04 3.93,-0.02c1.33,0.04 2.65,0.14 3.98,0.24c1.31,0.09 2.62,0.18 3.93,0.29c1.36,0.12 2.73,0.27 4.09,0.42c1.37,0.14 2.74,0.28 4.12,0.38c1.32,0.09 2.65,0.12 3.98,0.15c1.25,0.02 2.5,-0.01 3.75,-0.09c1.12,-0.05 2.24,-0.23 3.34,-0.45c1.02,-0.19 2.04,-0.41 3.05,-0.69c0.89,-0.26 1.77,-0.55 2.62,-0.91c0.82,-0.34 1.59,-0.75 2.35,-1.19c1.67,-0.95 -1.83,1.06 -2.74,1.59c-0.12,0.06 0.23,-0.15 0.34,-0.22c0.34,-0.22 0.66,-0.47 0.97,-0.73c0.61,-0.52 1.14,-1.12 1.63,-1.75c0.49,-0.65 0.85,-1.39 1.14,-2.14c0.33,-0.87 0.52,-1.78 0.66,-2.7c0.17,-1.11 0.15,-2.24 0.08,-3.36c-0.08,-0.92 -0.03,-0.45 -0.13,-1.41l3.57,-1.87c0.11,0.97 0.06,0.5 0.15,1.43c0.07,1.14 0.12,2.29 -0.04,3.43c-0.13,0.94 -0.3,1.87 -0.61,2.77c-0.29,0.79 -0.63,1.55 -1.1,2.24c-0.48,0.66 -0.99,1.29 -1.59,1.84c-1.61,1.45 -3.6,2.36 -5.48,3.43c-0.77,0.42 -1.56,0.82 -2.38,1.15c-0.87,0.33 -1.75,0.62 -2.65,0.86c-1.02,0.26 -2.04,0.48 -3.06,0.67c-1.12,0.2 -2.24,0.36 -3.38,0.4c-1.25,0.06 -2.5,0.1 -3.76,0.07c-1.33,-0.04 -2.67,-0.07 -4,-0.17c-1.37,-0.11 -2.75,-0.25 -4.12,-0.39c-1.36,-0.15 -2.72,-0.31 -4.09,-0.42c-1.31,-0.11 -2.62,-0.19 -3.92,-0.28c-1.32,-0.1 -2.64,-0.2 -3.97,-0.22c-1.3,-0.02 -2.61,-0.04 -3.91,0.04c-1.32,0.07 -2.64,0.14 -3.95,0.28c-1.33,0.13 -2.66,0.3 -3.98,0.54c-1.4,0.24 -2.78,0.53 -4.16,0.85c-1.42,0.33 -2.82,0.7 -4.21,1.13c-1.44,0.46 -2.86,0.95 -4.28,1.46c-1.46,0.55 -2.91,1.14 -4.31,1.83c-0.23,0.11 -0.47,0.22 -0.7,0.33c-0.22,0.11 -0.45,0.23 -0.67,0.35c-2.78,1.46 4.13,-2.54 1.56,-0.93c-0.18,0.12 -0.37,0.25 -0.55,0.37c-1.01,0.7 -2,1.43 -2.96,2.19c-0.93,0.73 -1.89,1.42 -2.73,2.25c-0.57,0.57 -1.11,1.17 -1.43,1.92c-0.25,0.5 -0.52,0.99 -0.69,1.53c-0.11,0.39 -0.17,0.79 -0.25,1.19l-3.64,1.8z" fill="#f00" id="path4934"/>
     <path d="m381.87,453.85l0,10s45,5 35,-5s-34.63,-5.79 -35,-5z" fill="url(#linearGradient4992)" id="path2896-9" stroke="#000" stroke-width="1px"/>
     <path d="m320,460.43c0,2.03 -1.51,3.67 -3.38,3.67s-3.37,-1.64 -3.37,-3.67s1.51,-3.67 3.37,-3.67s3.38,1.64 3.38,3.67z" fill="#520" id="path3674-6" stroke="#000" transform="translate(71.87 -2.2396)"/>
     <path d="m198.24,558.51c-19.02,-2.56 -25.61,-5.57 -29.18,-13.32c-1.53,-3.33 -1.71,-5.24 -1.74,-18.38c-0.02,-9.22 0.39,-16.77 1.09,-20.36c0.62,-3.13 11.52,-51.82 24.23,-108.2c12.71,-56.37 23.11,-102.64 23.11,-102.81c0,-0.17 33.35,-0.31 74.1,-0.31l74.11,0l0,198.46l-5.09,3.95c-24.75,19.22 -30.64,26.2 -37.3,44.24c-1.26,3.41 -2.63,6.13 -3.04,6.04c-17.84,-3.9 -17.25,-3.84 -37.23,-3.87c-15.99,-0.03 -20.77,0.23 -26.3,1.45c-10.15,2.23 -17.77,5.04 -24.99,9.24l-6.51,3.77l-11.41,0.21c-6.27,0.12 -12.51,0.07 -13.85,-0.11zm148.65,-93.61c0.43,-0.27 0.78,-3 0.78,-6.09l0,-5.6l-3.87,-0.66c-6.38,-1.09 -18.09,-0.63 -23.53,0.93c-5.95,1.7 -10.88,5.41 -10.88,8.19c0,2.23 0.88,2.92 4.86,3.78c3.18,0.69 31.4,0.21 32.64,-0.55zm-32.11,-24.54l21.26,-0.53l0.5,-7.82c2.64,-40.72 3.23,-54.53 3.29,-77.43c0.09,-34.04 -0.89,-39.72 -7.5,-43.09c-10.43,-5.32 -45.01,-9.85 -75.05,-9.83c-24.51,0.02 -34.45,1.91 -38.04,7.24c-3.83,5.67 -7.99,20.22 -15.64,54.63c-2.24,10.08 -5.38,23.43 -6.98,29.66c-3.45,13.4 -4.58,23.02 -3.61,30.71c0.84,6.65 2.12,9.37 6.01,12.79c2.78,2.44 3.94,2.93 8.58,3.66c3.54,0.56 85,0.57 107.18,0.01l0,0z" fill="url(#radialGradient5023)" id="path5015"/>
     <path d="m188.34,518.04c0.61,-0.04 1.22,-0.07 1.84,-0.1c0.84,-0.06 1.68,0 2.52,0.07c1,0.09 1.99,0.26 2.98,0.43c1.09,0.21 2.17,0.48 3.23,0.77c1.11,0.29 2.2,0.65 3.3,1c1.1,0.37 2.2,0.75 3.29,1.17c1.09,0.42 2.16,0.88 3.25,1.32c1.05,0.45 2.1,0.92 3.15,1.39c1.05,0.51 2.11,0.98 3.17,1.47c1.1,0.5 2.21,0.98 3.33,1.42c1.16,0.45 2.3,0.92 3.46,1.35c1.26,0.46 2.55,0.84 3.85,1.19c1.44,0.39 2.91,0.67 4.37,0.95c1.5,0.29 3.01,0.46 4.53,0.6c1.55,0.12 3.12,0.17 4.68,0.18c1.63,0.03 3.25,-0.07 4.86,-0.24c1.59,-0.19 3.18,-0.45 4.74,-0.84c1.57,-0.44 3.02,-1.16 4.42,-1.99c-5.86,3.68 -0.79,0.24 0.48,-0.77c1.18,-0.9 2.26,-1.91 3.28,-3c0.97,-1.02 1.76,-2.17 2.48,-3.38c0.68,-1.17 1.18,-2.44 1.61,-3.72c0.42,-1.24 0.63,-2.52 0.73,-3.82c0.11,-1.28 0,-2.56 -0.2,-3.82c-0.21,-1.33 -0.73,-2.55 -1.34,-3.74c-0.69,-1.31 -1.59,-2.49 -2.5,-3.64c-0.97,-1.2 -2.05,-2.28 -3.2,-3.29c-1.22,-1.06 -2.6,-1.9 -4,-2.67c-1.43,-0.77 -2.89,-1.44 -4.39,-2.04c-1.41,-0.54 -2.86,-0.96 -4.31,-1.34c-1.31,-0.35 -2.63,-0.65 -3.98,-0.8c-1.21,-0.12 -2.43,-0.07 -3.63,0.06c-1.1,0.12 -2.15,0.45 -3.18,0.84c0.89,-0.71 -2.84,1.5 -1.81,0.91c3.05,-1.73 4.05,-2.41 2.65,-1.48c-0.75,0.5 -1.44,1.09 -2.08,1.73c-0.58,0.6 -1.05,1.3 -1.46,2.03c-0.37,0.69 -0.6,1.44 -0.78,2.21c-0.18,0.76 -0.11,1.53 -0.01,2.3c0.12,0.8 0.36,1.57 0.62,2.33c0.28,0.76 0.63,1.5 1.02,2.21c0.4,0.74 0.88,1.43 1.4,2.09c0.56,0.71 1.21,1.34 1.9,1.91c0.79,0.66 1.64,1.24 2.49,1.8c0.89,0.59 1.82,1.08 2.75,1.57c0.99,0.52 2.05,0.9 3.1,1.28c1.01,0.37 2.04,0.72 3.09,0.99c1,0.26 2.02,0.46 3.04,0.58c0.92,0.07 1.81,-0.14 2.68,-0.43c0.8,-0.23 1.52,-0.63 2.23,-1.04c-5.94,3.55 -2.99,1.86 -1.8,0.77c0.44,-0.43 0.79,-0.93 1.09,-1.46c0.27,-0.51 0.44,-1.06 0.52,-1.63c0.07,-0.58 -0.04,-1.15 -0.19,-1.72c-0.14,-0.58 -0.43,-1.12 -0.75,-1.63c-0.36,-0.57 -0.83,-1.04 -1.32,-1.5c-0.5,-0.47 -1.03,-0.91 -1.62,-1.26c-0.64,-0.36 -1.3,-0.7 -2,-0.95c-0.66,-0.19 -1.35,-0.3 -2.03,-0.4c-0.62,-0.07 -1.23,-0.08 -1.84,-0.09c-0.55,0.02 -1.08,0.08 -1.62,0.17c-0.44,0.08 -0.86,0.22 -1.29,0.37c-1.33,0.6 -3.49,1.95 2.35,-1.39c-0.29,0.18 -0.53,0.41 -0.72,0.71c-0.12,0.22 -0.19,0.46 -0.22,0.7c-0.01,0.13 -0.01,0.26 -0.02,0.39l-3.62,1.84c0,-0.14 0,-0.27 0.01,-0.41c0.01,-0.29 0.05,-0.57 0.15,-0.84c0.14,-0.36 0.34,-0.67 0.65,-0.91c1.43,-0.84 2.97,-2.01 4.63,-2.58c0.43,-0.14 0.88,-0.26 1.33,-0.32c0.55,-0.07 1.1,-0.11 1.65,-0.11c0.63,0.02 1.25,0.05 1.87,0.14c0.7,0.11 1.41,0.23 2.08,0.47c0.71,0.28 1.39,0.63 2.04,1.01c0.61,0.39 1.15,0.85 1.68,1.34c0.5,0.48 0.99,0.99 1.37,1.58c0.34,0.55 0.64,1.12 0.81,1.74c0.16,0.61 0.3,1.22 0.25,1.85c-0.05,0.61 -0.19,1.2 -0.46,1.76c-0.27,0.58 -0.61,1.1 -1.03,1.58c-1.42,1.47 -3.36,2.32 -5.1,3.32c-0.73,0.4 -1.48,0.76 -2.28,0.98c-0.91,0.25 -1.84,0.41 -2.78,0.28c-1.04,-0.14 -2.06,-0.35 -3.07,-0.62c-1.05,-0.29 -2.09,-0.64 -3.11,-1.02c-1.07,-0.39 -2.13,-0.79 -3.13,-1.32c-0.94,-0.5 -1.88,-1.01 -2.77,-1.61c-0.87,-0.57 -1.72,-1.17 -2.52,-1.83c-0.71,-0.6 -1.38,-1.25 -1.95,-1.99c-0.53,-0.67 -1.02,-1.39 -1.43,-2.15c-0.41,-0.73 -0.77,-1.48 -1.05,-2.27c-0.27,-0.78 -0.53,-1.57 -0.66,-2.39c-0.12,-0.81 -0.21,-1.62 -0.06,-2.44c0.17,-0.79 0.38,-1.57 0.74,-2.3c0.38,-0.77 0.85,-1.49 1.42,-2.13c0.62,-0.67 1.29,-1.29 2.05,-1.81c1.89,-1.35 3.95,-2.53 6.11,-3.4c1.05,-0.37 2.12,-0.66 3.23,-0.76c1.23,-0.1 2.46,-0.13 3.69,0.02c1.35,0.18 2.68,0.49 4,0.84c1.46,0.4 2.92,0.83 4.33,1.39c1.51,0.61 2.99,1.3 4.42,2.08c1.42,0.8 2.82,1.66 4.05,2.74c1.16,1.04 2.26,2.13 3.24,3.35c0.93,1.18 1.84,2.38 2.55,3.71c0.63,1.22 1.17,2.48 1.4,3.85c0.22,1.29 0.34,2.59 0.24,3.9c-0.09,1.33 -0.28,2.64 -0.69,3.91c-0.42,1.31 -0.91,2.6 -1.57,3.8c-0.71,1.24 -1.49,2.42 -2.45,3.47c-1.01,1.1 -2.08,2.14 -3.26,3.05c-2.29,1.86 -4.69,3.49 -7.35,4.81c-1.42,0.8 -2.91,1.5 -4.49,1.89c-1.58,0.37 -3.17,0.63 -4.77,0.8c-1.63,0.15 -3.26,0.24 -4.89,0.2c-1.57,-0.02 -3.14,-0.07 -4.71,-0.21c-1.52,-0.14 -3.04,-0.33 -4.54,-0.62c-1.47,-0.29 -2.95,-0.58 -4.39,-0.97c-1.31,-0.36 -2.61,-0.76 -3.88,-1.23c-1.16,-0.43 -2.31,-0.9 -3.46,-1.35c-1.13,-0.45 -2.25,-0.93 -3.35,-1.44c-1.06,-0.49 -2.11,-0.97 -3.16,-1.47c-1.05,-0.47 -2.1,-0.93 -3.15,-1.37c-1.08,-0.45 -2.16,-0.9 -3.25,-1.32c-1.08,-0.41 -2.17,-0.79 -3.27,-1.15c-1.09,-0.35 -2.18,-0.69 -3.29,-0.98c-1.06,-0.29 -2.13,-0.55 -3.21,-0.74c-0.98,-0.17 -1.97,-0.32 -2.96,-0.4c-0.83,-0.06 -1.67,-0.09 -2.5,-0.02c-0.61,0.03 -1.22,0.06 -1.83,0.12l3.26,-2.42z" fill="#450" id="path4904"/>
     <path d="m188.28,489.09c0.4,0.01 0.79,-0.01 1.19,0.02c0.48,0.03 0.95,0.16 1.41,0.3c0.48,0.12 0.93,0.32 1.38,0.52c0.48,0.22 0.93,0.49 1.38,0.74c0.48,0.29 0.95,0.59 1.41,0.9c0.48,0.32 0.97,0.65 1.46,0.96c0.51,0.33 1.04,0.63 1.58,0.9c0.53,0.29 1.08,0.52 1.64,0.73c0.57,0.19 1.15,0.28 1.74,0.35c0.58,0.1 1.15,0.07 1.73,0.01c0.59,-0.03 1.13,-0.21 1.68,-0.41c0.57,-0.22 1.11,-0.48 1.66,-0.74c2.55,-1.54 -5.04,3.27 -1.8,0.98c0.59,-0.41 1.15,-0.86 1.73,-1.29c0.61,-0.47 1.23,-0.92 1.85,-1.38c1.7,-1.32 3.59,-2.28 5.46,-3.35c0.78,-0.45 1.59,-0.86 2.4,-1.26c0.8,-0.41 1.63,-0.76 2.47,-1.09c0.92,-0.36 1.86,-0.65 2.81,-0.9c0.97,-0.25 1.94,-0.5 2.92,-0.69c0.95,-0.19 1.91,-0.31 2.86,-0.43c0.92,-0.13 1.84,-0.18 2.76,-0.18c0.93,0.02 1.86,0.09 2.79,0.15c0.96,0.08 1.92,0.18 2.88,0.26c1.16,0.12 2.31,0.18 3.47,0.17l-3.26,2.37c-1.17,0 -2.34,-0.08 -3.5,-0.19c-0.96,-0.09 -1.92,-0.18 -2.87,-0.26c-0.93,-0.05 -1.85,-0.12 -2.78,-0.11c-0.92,0.01 -1.83,0.08 -2.73,0.21c-0.95,0.12 -1.9,0.25 -2.84,0.45c-0.97,0.21 -1.94,0.45 -2.9,0.71c-0.95,0.26 -1.88,0.58 -2.79,0.94c-0.84,0.34 -1.65,0.71 -2.45,1.12c-0.81,0.4 -1.61,0.82 -2.39,1.27c6.02,-3.49 2.72,-1.69 1.46,-0.68c-0.63,0.45 -1.24,0.91 -1.86,1.37c-0.57,0.43 -1.13,0.88 -1.72,1.3c-1.6,1.19 -3.35,2.16 -5.14,3.03c-0.55,0.26 -1.11,0.52 -1.69,0.71c-0.57,0.18 -1.15,0.3 -1.74,0.33c-0.6,0.04 -1.19,0.01 -1.78,-0.08c-0.61,-0.09 -1.21,-0.21 -1.79,-0.43c-0.57,-0.22 -1.13,-0.47 -1.67,-0.76c-0.55,-0.29 -1.09,-0.59 -1.6,-0.93c-0.5,-0.32 -0.98,-0.65 -1.47,-0.98c-0.46,-0.3 -0.91,-0.59 -1.39,-0.86c-0.44,-0.26 -0.89,-0.5 -1.36,-0.71c-0.44,-0.19 -0.89,-0.36 -1.35,-0.48c-0.44,-0.12 -0.9,-0.21 -1.36,-0.22c-0.38,0 -0.77,-0.01 -1.15,0.04l3.26,-2.43z" fill="#450" id="path4906"/>
     <path d="m212.79,470.08c0.55,0 1.11,0.02 1.66,-0.01c0.75,-0.05 1.5,-0.13 2.25,-0.2c1.04,-0.14 2.08,-0.27 3.13,-0.38c1.41,-0.15 2.83,-0.27 4.24,-0.38c1.5,-0.14 3,-0.16 4.5,-0.16c1.44,0 2.89,0.02 4.33,0.09c1.39,0.06 2.77,0.22 4.14,0.41c1.33,0.18 2.65,0.45 3.95,0.76c1.25,0.33 2.48,0.7 3.7,1.09c1.15,0.37 2.3,0.76 3.44,1.18c1.1,0.38 2.16,0.85 3.22,1.33c1.03,0.48 2.05,0.98 3.06,1.49c1.01,0.52 2.01,1.09 2.99,1.67c1,0.57 1.97,1.2 2.93,1.82c0.95,0.6 1.9,1.21 2.84,1.81c0.94,0.6 1.89,1.18 2.87,1.72c0.96,0.52 1.93,1.02 2.92,1.49c0.94,0.45 1.91,0.84 2.89,1.19c0.9,0.32 1.8,0.61 2.74,0.8c0.91,0.15 1.83,0.23 2.75,0.23c0.86,-0.02 1.71,-0.1 2.56,-0.23c0.77,-0.12 1.5,-0.4 2.19,-0.73c1.23,-0.71 3.19,-1.78 -2.48,1.42c-0.1,0.06 0.21,-0.14 0.31,-0.21c0.27,-0.18 0.32,-0.23 0.58,-0.43c0.56,-0.46 1.04,-0.99 1.49,-1.56c0.46,-0.6 0.79,-1.28 1.13,-1.95c0.32,-0.65 0.61,-1.31 0.85,-1.99c0.24,-0.69 0.41,-1.41 0.54,-2.13c0.13,-0.78 0.09,-1.58 0.05,-2.37c-0.08,-0.91 -0.28,-1.8 -0.5,-2.68c-0.25,-0.92 -0.55,-1.82 -0.89,-2.71c-0.35,-0.91 -0.76,-1.81 -1.24,-2.67c-0.51,-0.89 -1.12,-1.73 -1.74,-2.55c-0.62,-0.82 -1.32,-1.58 -2.05,-2.3c-0.73,-0.72 -1.53,-1.37 -2.35,-2c-0.79,-0.63 -1.65,-1.16 -2.54,-1.65c-0.87,-0.46 -1.78,-0.84 -2.71,-1.18c-0.81,-0.33 -1.64,-0.57 -2.5,-0.71c-0.77,-0.14 -1.54,-0.19 -2.32,-0.25c-0.66,-0.04 -1.32,0.05 -1.97,0.15c-1.49,0.33 -4.25,2.18 1.71,-1.23c-0.51,0.3 -0.96,0.67 -1.35,1.12c-0.35,0.42 -0.62,0.89 -0.85,1.38c-0.23,0.5 -0.39,1.02 -0.52,1.55c-0.12,0.52 -0.1,1.05 -0.07,1.57c0.04,0.52 0.14,1.04 0.28,1.54c0.13,0.5 0.34,0.97 0.61,1.41c0.29,0.43 0.63,0.83 0.99,1.21c0.39,0.41 0.85,0.73 1.32,1.04c0.5,0.33 1.03,0.63 1.56,0.9c0.57,0.3 1.18,0.53 1.76,0.79c0.61,0.28 1.23,0.55 1.84,0.81c0.66,0.31 1.33,0.59 1.97,0.93c0.65,0.34 1.3,0.68 1.94,1.06c0.63,0.38 1.25,0.79 1.85,1.22c0.59,0.43 1.13,0.92 1.66,1.43c0.33,0.33 0.65,0.67 0.99,1l-3.46,2.12c-0.33,-0.33 -0.65,-0.67 -0.99,-1c-0.51,-0.49 -1.04,-0.96 -1.62,-1.37c-0.59,-0.43 -1.2,-0.83 -1.83,-1.2c-0.63,-0.36 -1.28,-0.7 -1.92,-1.03c-0.65,-0.33 -1.3,-0.62 -1.96,-0.91c-0.62,-0.27 -1.23,-0.54 -1.85,-0.81c-0.59,-0.26 -1.2,-0.51 -1.77,-0.82c-0.54,-0.29 -1.08,-0.59 -1.59,-0.94c-0.48,-0.33 -0.96,-0.68 -1.37,-1.11c-0.37,-0.41 -0.73,-0.83 -1.03,-1.29c-0.29,-0.47 -0.52,-0.97 -0.67,-1.5c-0.15,-0.52 -0.27,-1.06 -0.31,-1.61c-0.05,-0.55 -0.07,-1.12 0.02,-1.67c0.11,-0.56 0.25,-1.11 0.48,-1.63c0.22,-0.52 0.46,-1.03 0.81,-1.48c0.37,-0.49 0.78,-0.92 1.3,-1.25c1.7,-0.98 3.32,-2.35 5.31,-2.66c0.67,-0.09 1.35,-0.14 2.03,-0.07c0.78,0.06 1.56,0.13 2.33,0.27c0.88,0.18 1.72,0.45 2.55,0.78c0.93,0.36 1.86,0.75 2.74,1.24c0.89,0.5 1.77,1.05 2.58,1.69c0.82,0.65 1.63,1.31 2.37,2.05c0.74,0.74 1.44,1.51 2.08,2.34c0.63,0.84 1.24,1.69 1.77,2.61c0.49,0.87 0.91,1.78 1.27,2.72c0.34,0.9 0.65,1.82 0.9,2.74c0.24,0.91 0.45,1.82 0.54,2.75c0.06,0.82 0.11,1.64 0,2.45c-0.12,0.74 -0.28,1.48 -0.51,2.19c-0.22,0.7 -0.51,1.38 -0.83,2.04c-0.34,0.68 -0.67,1.38 -1.1,2.02c-0.44,0.59 -0.89,1.16 -1.45,1.64c-1.58,1.37 -3.48,2.32 -5.34,3.25c-0.72,0.31 -1.48,0.55 -2.26,0.65c-0.86,0.11 -1.73,0.18 -2.6,0.18c-0.94,-0.03 -1.87,-0.13 -2.79,-0.3c-0.95,-0.22 -1.86,-0.52 -2.77,-0.85c-0.99,-0.36 -1.97,-0.76 -2.91,-1.22c-0.99,-0.48 -1.98,-0.98 -2.94,-1.52c-0.98,-0.54 -1.93,-1.13 -2.87,-1.73c-0.95,-0.6 -1.9,-1.21 -2.85,-1.81c-0.96,-0.62 -1.93,-1.24 -2.92,-1.82c-0.98,-0.57 -1.97,-1.13 -2.98,-1.64c-1.01,-0.51 -2.02,-1.01 -3.05,-1.48c-1.05,-0.46 -2.11,-0.92 -3.2,-1.3c-1.14,-0.41 -2.28,-0.8 -3.43,-1.17c-1.22,-0.38 -2.44,-0.76 -3.67,-1.06c-1.3,-0.3 -2.61,-0.56 -3.93,-0.74c-1.37,-0.18 -2.74,-0.32 -4.12,-0.37c-1.44,-0.07 -2.88,-0.08 -4.32,-0.08c-1.5,0.01 -2.99,0.04 -4.48,0.18c-1.41,0.12 -2.83,0.24 -4.24,0.39c-1.05,0.13 -2.1,0.28 -3.15,0.39c-0.75,0.07 -1.51,0.15 -2.26,0.18c-0.57,0.01 -1.14,0.02 -1.71,-0.04l3.32,-2.34z" fill="#450" id="path4908"/>
     <path d="m272.19,496.9c0.43,0.01 0.87,-0.01 1.3,0.02c0.55,0.01 1.08,0.19 1.6,0.35c0.61,0.19 1.19,0.46 1.74,0.8c0.61,0.33 1.14,0.79 1.64,1.28c0.52,0.53 0.99,1.1 1.46,1.67c0.56,0.66 1,1.39 1.45,2.13c0.49,0.83 0.92,1.69 1.36,2.55c0.46,0.92 0.92,1.85 1.38,2.77c0.48,0.95 0.98,1.89 1.48,2.82c0.52,0.99 1.05,1.97 1.61,2.93c0.59,0.99 1.21,1.96 1.83,2.93c0.64,0.96 1.26,1.93 1.93,2.87c0.7,0.96 1.49,1.85 2.29,2.73c0.78,0.85 1.58,1.67 2.44,2.44c0.87,0.74 1.83,1.38 2.8,1.99c0.95,0.58 1.93,1.11 2.93,1.59c0.95,0.46 1.94,0.83 2.94,1.16c0.93,0.32 1.87,0.61 2.85,0.66c1,0.02 1.94,-0.3 2.85,-0.66c1.27,-0.6 3.51,-1.87 -2.11,1.27c-0.15,0.08 0.3,-0.19 0.45,-0.29c0.38,-0.27 0.49,-0.36 0.85,-0.66c0.87,-0.73 1.66,-1.55 2.41,-2.39c0.78,-0.9 1.46,-1.88 2.1,-2.88c0.74,-1.14 1.27,-2.38 1.77,-3.64c0.53,-1.35 0.9,-2.75 1.24,-4.15c0.34,-1.38 0.51,-2.79 0.6,-4.21c0.07,-1.41 0.02,-2.82 -0.09,-4.23c-0.1,-1.43 -0.47,-2.81 -0.9,-4.17c-0.44,-1.43 -1.08,-2.78 -1.77,-4.09c-0.7,-1.32 -1.54,-2.56 -2.43,-3.75c-0.88,-1.18 -1.88,-2.27 -2.91,-3.33c-0.95,-0.98 -1.97,-1.9 -3.04,-2.76c-0.96,-0.79 -2,-1.46 -3.08,-2.06c-0.95,-0.56 -1.99,-0.92 -3.03,-1.23c-0.91,-0.29 -1.84,-0.33 -2.79,-0.24c-0.79,0.07 -1.57,0.27 -2.31,0.59c-1.46,0.9 0.56,-0.35 2.82,-1.59c0.11,-0.06 -0.21,0.15 -0.31,0.24c-0.31,0.24 -0.58,0.53 -0.84,0.82c-0.54,0.6 -0.94,1.29 -1.29,2c-0.36,0.73 -0.63,1.48 -0.83,2.26c-0.22,0.87 -0.35,1.76 -0.44,2.66c-0.1,0.92 -0.06,1.85 0.01,2.77c0.11,0.96 0.29,1.91 0.51,2.85c0.24,0.99 0.5,1.99 0.78,2.97c0.3,1 0.64,1.98 1,2.95c0.35,1 0.74,1.97 1.17,2.93c0.46,0.97 1.02,1.89 1.58,2.81c0.52,0.84 1.07,1.66 1.66,2.45c0.53,0.68 1.09,1.32 1.67,1.96c0.44,0.5 0.95,0.94 1.55,1.24c0.49,0.23 1,0.38 1.53,0.44c0.47,0.03 0.89,-0.17 1.29,-0.4c-5.78,3.43 -3.2,2.05 -2.11,0.89c0.38,-0.39 0.66,-0.85 0.9,-1.33c0.24,-0.51 0.41,-1.05 0.55,-1.59c0.16,-0.58 0.2,-1.18 0.22,-1.78c0.01,-0.74 -0.11,-1.47 -0.25,-2.2c-0.16,-0.8 -0.36,-1.59 -0.6,-2.37c-0.23,-0.81 -0.57,-1.58 -0.92,-2.34c-0.37,-0.79 -0.72,-1.58 -1.07,-2.37c-0.23,-0.48 -0.12,-0.24 -0.34,-0.72l3.53,-2c0.22,0.49 0.1,0.24 0.34,0.73c0.35,0.79 0.69,1.58 1.06,2.37c0.36,0.78 0.72,1.56 0.95,2.38c0.25,0.79 0.46,1.6 0.62,2.41c0.15,0.75 0.28,1.51 0.29,2.28c0,0.62 -0.03,1.25 -0.17,1.86c-0.13,0.56 -0.3,1.12 -0.52,1.66c-0.22,0.51 -0.48,1.01 -0.85,1.43c-1.29,1.54 -2.87,2.26 -4.8,3.22c-0.47,0.19 -0.93,0.3 -1.44,0.2c-0.56,-0.11 -1.1,-0.29 -1.6,-0.55c-0.62,-0.36 -1.16,-0.82 -1.63,-1.36c-0.58,-0.65 -1.15,-1.31 -1.68,-2c-0.59,-0.8 -1.15,-1.63 -1.67,-2.48c-0.58,-0.93 -1.14,-1.87 -1.6,-2.85c-0.45,-0.97 -0.85,-1.95 -1.19,-2.95c-0.37,-0.99 -0.71,-1.98 -1.02,-2.98c-0.28,-0.99 -0.55,-1.99 -0.79,-2.99c-0.23,-0.96 -0.42,-1.92 -0.53,-2.9c-0.1,-0.95 -0.14,-1.9 -0.06,-2.85c0.09,-0.9 0.21,-1.81 0.41,-2.7c0.2,-0.8 0.45,-1.58 0.8,-2.34c0.34,-0.74 0.73,-1.46 1.25,-2.09c1.37,-1.66 3.22,-2.74 5.25,-3.55c0.77,-0.27 1.57,-0.45 2.38,-0.49c0.98,-0.05 1.94,0.05 2.87,0.36c1.06,0.34 2.11,0.73 3.07,1.3c1.1,0.63 2.15,1.32 3.12,2.13c1.07,0.87 2.1,1.8 3.07,2.8c1.03,1.08 2.04,2.18 2.93,3.37c0.9,1.22 1.75,2.47 2.46,3.81c0.71,1.33 1.36,2.7 1.81,4.15c0.43,1.39 0.82,2.79 0.93,4.25c0.13,1.42 0.19,2.85 0.13,4.28c-0.08,1.44 -0.24,2.87 -0.58,4.28c-0.33,1.41 -0.69,2.83 -1.21,4.19c-0.49,1.28 -1.01,2.55 -1.74,3.71c-0.63,1.02 -1.3,2.01 -2.06,2.94c-0.75,0.86 -1.53,1.7 -2.39,2.45c-1.8,1.57 -3.93,2.75 -6.13,3.69c-0.95,0.33 -1.93,0.59 -2.95,0.51c-1,-0.12 -1.96,-0.41 -2.9,-0.74c-1.01,-0.35 -2.01,-0.73 -2.97,-1.21c-1.01,-0.49 -2.01,-1.03 -2.96,-1.62c-0.98,-0.63 -1.95,-1.29 -2.83,-2.05c-0.87,-0.78 -1.68,-1.62 -2.46,-2.48c-0.81,-0.89 -1.61,-1.79 -2.32,-2.76c-0.67,-0.95 -1.3,-1.92 -1.93,-2.9c-0.63,-0.97 -1.25,-1.94 -1.84,-2.94c-0.57,-0.97 -1.1,-1.95 -1.63,-2.94c-0.5,-0.94 -1.01,-1.88 -1.48,-2.83c-0.46,-0.92 -0.92,-1.84 -1.38,-2.76c-0.44,-0.85 -0.86,-1.71 -1.36,-2.53c-0.43,-0.72 -0.86,-1.44 -1.41,-2.07c-0.47,-0.56 -0.93,-1.12 -1.45,-1.64c-0.48,-0.47 -0.99,-0.88 -1.59,-1.2c-0.53,-0.3 -1.09,-0.54 -1.68,-0.71c-0.5,-0.15 -1.02,-0.27 -1.54,-0.27c-0.44,-0.01 -0.87,0 -1.3,0l3.29,-2.39z" fill="#450" id="path4910"/>
     <path d="m319.44,482.34c0.4,0.14 0.79,0.32 1.16,0.5c0.46,0.25 0.9,0.51 1.32,0.81c0.5,0.35 0.96,0.75 1.41,1.17c0.48,0.46 0.92,0.95 1.37,1.43c0.47,0.53 0.92,1.06 1.36,1.62c0.45,0.61 0.91,1.21 1.36,1.82c0.47,0.62 0.96,1.23 1.46,1.84c0.53,0.64 1.06,1.27 1.66,1.85c0.62,0.61 1.3,1.16 1.99,1.71c0.57,0.48 1.23,0.78 1.94,1c0.61,0.16 1.23,0.2 1.84,0.1c0.6,-0.09 1.15,-0.32 1.7,-0.54c0.53,-0.23 1.03,-0.49 1.54,-0.75c0.54,-0.29 1.08,-0.56 1.61,-0.86c0.56,-0.32 1.14,-0.59 1.73,-0.85c0.63,-0.27 1.26,-0.51 1.9,-0.74c0.61,-0.23 1.24,-0.39 1.87,-0.53c0.55,-0.1 1.11,-0.14 1.67,-0.18c0.44,-0.02 0.87,0.08 1.3,0.18c0.38,0.11 0.65,0.36 0.88,0.67c0.19,0.28 0.32,0.6 0.37,0.93c0.04,0.36 -0.02,0.7 -0.09,1.05c-0.08,0.41 -0.26,0.78 -0.47,1.13c-0.3,0.44 -0.66,0.85 -1.02,1.24c-0.44,0.48 -0.94,0.9 -1.45,1.31c-0.6,0.44 -1.19,0.9 -1.77,1.37c-0.65,0.52 -1.28,1.08 -1.87,1.66c-0.47,0.46 -0.86,0.98 -1.21,1.53l-3.7,1.64c0.33,-0.58 0.7,-1.13 1.17,-1.61c0.58,-0.61 1.2,-1.18 1.86,-1.7c0.57,-0.48 1.16,-0.95 1.76,-1.39c0.51,-0.39 1.02,-0.78 1.46,-1.25c0.37,-0.37 0.72,-0.76 1.04,-1.18c0.24,-0.3 0.44,-0.62 0.54,-0.99c0.09,-0.3 0.14,-0.62 0.15,-0.93c0.01,-0.27 -0.12,-0.52 -0.27,-0.74c-0.19,-0.24 -0.42,-0.37 -0.72,-0.42c-0.4,-0.09 -0.81,-0.13 -1.23,-0.09c-0.54,0.04 -1.09,0.11 -1.63,0.23c-0.62,0.15 -1.23,0.33 -1.83,0.56c-0.64,0.24 -1.27,0.49 -1.88,0.77c-0.59,0.27 -1.16,0.56 -1.72,0.88c-0.53,0.28 -1.07,0.57 -1.61,0.84c-0.51,0.26 -1.04,0.51 -1.57,0.72c-0.57,0.22 -1.15,0.4 -1.76,0.45c-0.66,0.04 -1.31,-0.03 -1.94,-0.24c-0.74,-0.25 -1.42,-0.61 -2.02,-1.12c-0.69,-0.55 -1.38,-1.12 -2.01,-1.74c-0.6,-0.6 -1.15,-1.24 -1.68,-1.89c-0.5,-0.61 -1,-1.22 -1.47,-1.86c-0.45,-0.6 -0.91,-1.2 -1.36,-1.81c-0.43,-0.54 -0.88,-1.07 -1.34,-1.58c-0.45,-0.48 -0.89,-0.96 -1.36,-1.41c-0.44,-0.4 -0.89,-0.78 -1.39,-1.12c-0.4,-0.28 -0.83,-0.53 -1.27,-0.75c-0.37,-0.17 -0.74,-0.34 -1.13,-0.45l3.35,-2.29z" fill="#450" id="path4912"/>
     <path d="m343,443.92c0.34,-0.02 0.65,0.09 0.96,0.2c0.33,0.12 0.62,0.31 0.93,0.48c0.33,0.22 0.66,0.45 1,0.66c0.35,0.22 0.75,0.38 1.13,0.53c0.4,0.15 0.81,0.26 1.22,0.32c0.44,0.06 0.86,-0.04 1.28,-0.13c0.45,-0.07 0.84,-0.31 1.23,-0.54c-6,3.38 -3.09,2.1 -2.08,0.9c0.38,-0.49 0.7,-1.01 1,-1.54c0.32,-0.59 0.6,-1.19 0.86,-1.8c0.29,-0.67 0.51,-1.35 0.7,-2.05c0.19,-0.74 0.3,-1.49 0.39,-2.25c0.08,-0.72 0.1,-1.45 0.06,-2.18c-0.05,-0.67 -0.24,-1.31 -0.46,-1.94c-0.18,-0.51 -0.46,-0.98 -0.76,-1.43c-0.22,-0.33 -0.47,-0.66 -0.73,-0.96c-0.17,-0.18 -0.37,-0.32 -0.59,-0.42c-0.11,0.02 -0.18,0.09 -0.26,0.18l3.19,-2.53c0.17,0 0.32,0.01 0.47,0.12c0.25,0.15 0.47,0.34 0.66,0.55c0.28,0.32 0.53,0.66 0.77,1.01c0.31,0.48 0.6,0.98 0.8,1.52c0.23,0.66 0.44,1.33 0.51,2.03c0.06,0.75 0.05,1.51 -0.03,2.26c-0.09,0.77 -0.19,1.54 -0.36,2.29c-0.19,0.71 -0.38,1.42 -0.68,2.1c-0.25,0.62 -0.52,1.24 -0.84,1.84c-0.29,0.55 -0.61,1.09 -0.98,1.6c-1.17,1.62 -3.03,2.24 -4.8,3.25c-0.42,0.21 -0.85,0.37 -1.31,0.44c-0.45,0.08 -0.91,0.11 -1.36,0c-0.44,-0.09 -0.86,-0.21 -1.27,-0.38c-0.4,-0.17 -0.81,-0.35 -1.17,-0.59c-0.34,-0.22 -0.66,-0.45 -1,-0.65c-0.28,-0.16 -0.57,-0.32 -0.88,-0.41c-0.28,-0.08 -0.57,-0.11 -0.86,-0.05l3.26,-2.43z" fill="#450" id="path4914"/>
     <path d="m342.66,415.73c0,-0.6 0,-1.21 0,-1.81c0,-0.69 0,-1.38 0.02,-2.07c0.01,-0.68 0.12,-1.34 0.3,-1.99c0.16,-0.59 0.39,-1.15 0.68,-1.69c0.23,-0.44 0.53,-0.83 0.88,-1.19c1.27,-1.23 3.16,-1.98 4.57,-2.77c0.39,-0.15 0.77,-0.08 1.15,0.06c0.32,0.14 0.6,0.35 0.85,0.59c0.29,0.28 0.5,0.62 0.72,0.95c0.23,0.36 0.42,0.74 0.6,1.13c0.22,0.44 0.42,0.9 0.63,1.34c0.24,0.53 0.49,1.06 0.75,1.59c0.26,0.59 0.59,1.14 0.94,1.68c0.4,0.59 0.8,1.18 1.24,1.74c0.32,0.38 0.67,0.93 1.23,0.79c1.25,-0.78 -0.69,0.43 -3.01,1.64c-0.1,0.06 0.18,-0.14 0.26,-0.23c0.26,-0.26 0.43,-0.56 0.61,-0.88c0.45,-0.83 0.61,-1.76 0.75,-2.69c0.17,-1.22 0.21,-2.45 0.22,-3.69c0.03,-1.76 -0.09,-3.51 -0.23,-5.27c-0.19,-2.41 -0.45,-4.81 -0.79,-7.21c-0.38,-2.8 -0.88,-5.58 -1.44,-8.35c-0.72,-3.44 -1.61,-6.84 -2.43,-10.26c-1.1,-4.78 -2.25,-9.54 -3.41,-14.3l3.45,-1.86c1.17,4.75 2.33,9.51 3.45,14.28c0.83,3.41 1.73,6.82 2.46,10.26c0.57,2.77 1.07,5.56 1.46,8.36c0.35,2.4 0.62,4.81 0.81,7.23c0.15,1.76 0.28,3.53 0.27,5.3c-0.01,1.24 -0.04,2.49 -0.2,3.73c-0.12,0.95 -0.26,1.93 -0.67,2.81c-0.89,1.81 -2.64,3.45 -4.85,3.5c-0.63,-0.14 -1.04,-0.58 -1.42,-1.08c-0.44,-0.58 -0.85,-1.17 -1.26,-1.78c-0.35,-0.55 -0.7,-1.12 -0.97,-1.72c-0.25,-0.53 -0.51,-1.06 -0.75,-1.59c-0.21,-0.45 -0.41,-0.9 -0.63,-1.34c-0.17,-0.37 -0.36,-0.74 -0.58,-1.08c-0.19,-0.31 -0.39,-0.61 -0.66,-0.86c-0.22,-0.19 -0.46,-0.36 -0.75,-0.43c-0.35,-0.06 -0.66,0 -0.98,0.16c5.85,-3.43 3.52,-2.21 2.36,-1.3c-0.35,0.33 -0.69,0.66 -0.93,1.08c-0.29,0.52 -0.55,1.04 -0.72,1.61c-0.19,0.62 -0.34,1.25 -0.34,1.9c-0.03,0.69 -0.03,1.37 -0.03,2.06c0,0.6 0.01,1.2 0.01,1.81l-3.62,1.84z" fill="#450" id="path4918"/>
     <path d="m192.31,450.31c0.42,-0.24 0.88,-0.37 1.35,-0.46c0.65,-0.09 1.3,-0.07 1.95,-0.05c0.76,0.05 1.51,0.2 2.25,0.4c0.75,0.17 1.43,0.5 2.12,0.84c0.71,0.37 1.38,0.81 2.04,1.26c0.69,0.49 1.39,0.97 2.08,1.45c0.71,0.49 1.43,0.97 2.15,1.44c0.74,0.47 1.48,0.94 2.24,1.38c0.81,0.44 1.62,0.87 2.45,1.28c1.07,0.48 2.19,0.86 3.31,1.21c1.23,0.4 2.49,0.74 3.75,1.02c1.3,0.28 2.63,0.37 3.95,0.39c1.4,0 2.78,-0.19 4.15,-0.43c1.51,-0.27 2.99,-0.66 4.47,-1.09c1.58,-0.47 3.15,-1.01 4.71,-1.55c1.61,-0.55 3.19,-1.14 4.78,-1.72c1.63,-0.59 3.27,-1.15 4.92,-1.65c1.58,-0.48 3.17,-0.85 4.82,-0.66c1.08,0.34 0.55,0.12 1.58,0.68l-3.37,2.21c-0.97,-0.47 -0.47,-0.29 -1.49,-0.55c-1.62,-0.09 -3.18,0.31 -4.72,0.78c-1.65,0.52 -3.29,1.07 -4.91,1.67c-1.59,0.58 -3.18,1.17 -4.79,1.71c-1.56,0.54 -3.13,1.07 -4.72,1.54c-1.49,0.42 -2.98,0.8 -4.51,1.06c-1.38,0.22 -2.78,0.39 -4.19,0.37c-1.34,-0.05 -2.69,-0.15 -4,-0.46c-1.27,-0.3 -2.53,-0.64 -3.77,-1.05c-1.13,-0.37 -2.27,-0.75 -3.35,-1.26c-0.83,-0.41 -1.66,-0.84 -2.47,-1.3c-0.76,-0.44 -1.5,-0.92 -2.25,-1.39c-0.72,-0.47 -1.44,-0.96 -2.15,-1.46c-0.7,-0.47 -1.39,-0.96 -2.08,-1.44c-0.65,-0.44 -1.31,-0.86 -2.02,-1.21c-0.66,-0.32 -1.34,-0.61 -2.07,-0.77c-0.72,-0.17 -1.45,-0.31 -2.19,-0.33c-0.64,-0.01 -1.27,0 -1.89,0.14c-0.46,0.13 -0.89,0.31 -1.3,0.54l3.17,-2.54z" fill="#450" id="path4920"/>
     <path d="m598.76,608.74c0.27,0.21 0.55,0.38 0.85,0.53c0.36,0.18 0.74,0.32 1.11,0.47c0.38,0.16 0.79,0.26 1.2,0.31c0.46,0.06 0.93,0.09 1.4,0.06c0.5,-0.05 1.01,-0.11 1.52,-0.21c0.57,-0.1 1.13,-0.26 1.69,-0.42c0.6,-0.19 1.19,-0.41 1.78,-0.63c0.65,-0.25 1.29,-0.51 1.93,-0.77c0.64,-0.31 1.3,-0.57 1.94,-0.89c0.7,-0.35 1.39,-0.71 2.08,-1.07c0.77,-0.41 1.54,-0.82 2.32,-1.2c0.79,-0.42 1.6,-0.81 2.41,-1.2c0.86,-0.41 1.74,-0.8 2.62,-1.16c0.91,-0.38 1.85,-0.7 2.79,-1c1.02,-0.33 2.05,-0.59 3.1,-0.79c1.08,-0.21 2.18,-0.34 3.27,-0.46c1.06,-0.11 2.12,-0.17 3.18,-0.18c1.02,-0.02 2.03,0.09 3.04,0.21c0.96,0.12 1.9,0.33 2.83,0.61c0.9,0.27 1.76,0.64 2.59,1.09c0.88,0.48 1.68,1.08 2.45,1.72c0.76,0.64 1.44,1.37 2.12,2.11c0.66,0.71 1.17,1.54 1.67,2.36c0.47,0.78 0.89,1.6 1.27,2.43c0.35,0.78 0.66,1.58 0.93,2.4c0.26,0.85 0.4,1.73 0.51,2.61c0.13,0.91 0.16,1.82 0.14,2.74c-0.03,0.99 -0.14,1.96 -0.32,2.93c-0.17,0.98 -0.46,1.92 -0.8,2.85c-0.31,0.92 -0.72,1.78 -1.22,2.6c-0.52,0.81 -1.16,1.5 -1.82,2.18c-1.6,1.58 -3.65,2.61 -5.66,3.58c-0.84,0.4 -1.7,0.78 -2.62,0.96c-1.04,0.16 -2.09,0.12 -3.14,0.04c-1.11,-0.11 -2.2,-0.35 -3.28,-0.59c-1.08,-0.25 -2.15,-0.55 -3.2,-0.91c-1.01,-0.34 -1.99,-0.75 -2.97,-1.16c-0.92,-0.38 -1.78,-0.9 -2.61,-1.45c-0.83,-0.57 -1.6,-1.23 -2.33,-1.92c-0.7,-0.66 -1.3,-1.43 -1.85,-2.22c-0.52,-0.74 -0.98,-1.51 -1.36,-2.33c-0.35,-0.77 -0.57,-1.58 -0.73,-2.41c-0.14,-0.79 -0.12,-1.59 -0.03,-2.38c0.09,-0.76 0.34,-1.48 0.66,-2.17c0.31,-0.66 0.76,-1.23 1.24,-1.76c0.47,-0.51 1.01,-0.95 1.57,-1.35c1.69,-1.1 3.38,-2.26 5.27,-2.97c0.7,-0.26 1.43,-0.39 2.16,-0.53c0.77,-0.12 1.55,-0.14 2.32,-0.15c0.82,0.02 1.64,0.09 2.46,0.2c0.83,0.11 1.66,0.24 2.47,0.47c0.86,0.29 1.65,0.79 2.42,1.27c0.76,0.46 1.47,0.99 2.15,1.56c0.63,0.53 1.2,1.13 1.73,1.77c0.5,0.56 0.87,1.22 1.22,1.88c0.35,0.58 0.54,1.21 0.63,1.88c0.05,0.61 0.03,1.22 -0.01,1.83c-0.04,0.59 -0.2,1.15 -0.4,1.7c-0.21,0.51 -0.48,1 -0.77,1.47c-1.04,1.52 -3.3,2.25 -4.67,3.02c-0.43,0.16 -0.88,0.33 -1.35,0.33c-0.4,0.01 -0.78,-0.09 -1.16,-0.18c-0.4,-0.11 -0.73,-0.38 -1.03,-0.66c-0.32,-0.29 -0.64,-0.58 -0.93,-0.9c-0.33,-0.4 -0.59,-0.85 -0.84,-1.3c-0.27,-0.48 -0.51,-0.98 -0.72,-1.49c-0.22,-0.57 -0.42,-1.14 -0.59,-1.73l3.56,-1.94c0.17,0.57 0.36,1.13 0.57,1.69c0.2,0.5 0.43,0.98 0.69,1.45c0.24,0.42 0.48,0.84 0.8,1.21c0.29,0.3 0.6,0.59 0.91,0.87c0.27,0.23 0.56,0.43 0.92,0.49c0.35,0.07 0.72,0.13 1.08,0.07c0.44,-0.09 0.86,-0.24 1.26,-0.43c-6.28,3.66 -3.15,2.16 -2.22,1.13c0.31,-0.44 0.57,-0.91 0.81,-1.4c0.21,-0.51 0.4,-1.03 0.45,-1.58c0.05,-0.59 0.07,-1.18 0.05,-1.77c-0.06,-0.62 -0.23,-1.21 -0.55,-1.75c-0.34,-0.63 -0.7,-1.26 -1.18,-1.8c-0.52,-0.62 -1.07,-1.2 -1.69,-1.72c-0.67,-0.55 -1.37,-1.06 -2.12,-1.51c-0.75,-0.46 -1.51,-0.93 -2.36,-1.17c-0.8,-0.19 -1.62,-0.32 -2.43,-0.42c-0.81,-0.09 -1.62,-0.16 -2.43,-0.15c-0.77,0.01 -1.53,0.06 -2.28,0.21c-0.72,0.14 -1.43,0.3 -2.11,0.59c-3.77,1.68 4.44,-2.59 1.69,-1.02c-0.57,0.37 -1.12,0.78 -1.61,1.27c-0.49,0.5 -0.95,1.03 -1.29,1.65c-0.33,0.65 -0.6,1.32 -0.72,2.05c-0.11,0.75 -0.15,1.51 -0.02,2.27c0.14,0.8 0.34,1.58 0.68,2.32c0.36,0.8 0.81,1.55 1.31,2.27c0.54,0.77 1.12,1.5 1.81,2.15c0.72,0.67 1.47,1.31 2.29,1.86c0.82,0.53 1.67,1.02 2.58,1.39c0.97,0.41 1.94,0.8 2.95,1.13c1.04,0.34 2.09,0.64 3.17,0.87c1.07,0.24 2.15,0.46 3.25,0.54c1.03,0.06 2.06,0.09 3.07,-0.13c0.89,-0.25 1.73,-0.62 2.56,-1.04c1.42,-0.75 0.76,-0.41 -2.65,1.57c-0.58,0.33 2.09,-1.31 1.41,-1.07c0.66,-0.66 1.32,-1.33 1.85,-2.1c0.53,-0.78 0.95,-1.62 1.27,-2.51c0.33,-0.92 0.65,-1.84 0.82,-2.8c0.19,-0.95 0.32,-1.91 0.34,-2.88c0.04,-0.89 0.02,-1.79 -0.1,-2.68c-0.11,-0.85 -0.23,-1.71 -0.48,-2.54c-0.26,-0.8 -0.56,-1.59 -0.9,-2.36c-0.37,-0.82 -0.79,-1.62 -1.25,-2.39c-0.49,-0.8 -0.98,-1.6 -1.63,-2.29c-0.66,-0.72 -1.34,-1.44 -2.09,-2.07c-0.75,-0.61 -1.54,-1.19 -2.41,-1.64c-0.81,-0.42 -1.66,-0.77 -2.54,-1.03c-0.91,-0.26 -1.84,-0.44 -2.78,-0.55c-1.01,-0.11 -2.01,-0.19 -3.02,-0.16c-1.05,0.02 -2.1,0.08 -3.15,0.2c-1.09,0.13 -2.18,0.27 -3.25,0.49c-1.04,0.22 -2.07,0.5 -3.08,0.83c-0.93,0.31 -1.86,0.64 -2.77,1.03c-0.87,0.37 -1.75,0.75 -2.61,1.17c-0.8,0.39 -1.6,0.8 -2.4,1.2c-0.78,0.4 -1.55,0.81 -2.31,1.21c-0.7,0.37 -1.39,0.72 -2.1,1.06c-0.64,0.3 -1.3,0.59 -1.95,0.87c-0.64,0.27 -1.29,0.52 -1.94,0.77c-0.6,0.22 -1.2,0.43 -1.81,0.6c-0.56,0.16 -1.14,0.3 -1.72,0.39c-0.51,0.08 -1.03,0.16 -1.55,0.17c-0.48,-0.01 -0.97,-0.05 -1.44,-0.13c-0.43,-0.09 -0.85,-0.2 -1.25,-0.38c-0.39,-0.15 -0.77,-0.31 -1.13,-0.5c-0.32,-0.18 -0.62,-0.37 -0.9,-0.59l3.44,-2.17z" fill="#330080" id="path5033"/>
     <path d="m615.85,596.4c0.39,0.11 0.79,0.13 1.2,0.16c0.51,0.02 1.01,0.07 1.52,0.06c0.6,-0.01 1.2,-0.07 1.8,-0.12c0.7,-0.06 1.4,-0.15 2.09,-0.26c0.78,-0.1 1.55,-0.26 2.32,-0.39c0.96,-0.19 1.91,-0.43 2.86,-0.64c1.04,-0.24 2.09,-0.49 3.13,-0.74c1.15,-0.27 2.29,-0.56 3.43,-0.83c1.21,-0.28 2.42,-0.57 3.63,-0.84c1.29,-0.3 2.58,-0.59 3.87,-0.87c1.32,-0.27 2.64,-0.57 3.96,-0.84c1.33,-0.28 2.67,-0.52 4.01,-0.73c1.3,-0.21 2.62,-0.35 3.94,-0.48c1.23,-0.15 2.47,-0.19 3.71,-0.23c1.16,-0.02 2.31,-0.01 3.47,0.07c1.05,0.04 2.09,0.18 3.12,0.39c1.04,0.23 2,0.67 2.96,1.14c0.91,0.45 1.75,1.02 2.58,1.61c0.83,0.58 1.59,1.25 2.32,1.94c0.7,0.66 1.38,1.35 2.02,2.07c0.67,0.76 1.25,1.58 1.83,2.41c0.6,0.86 1.11,1.77 1.61,2.69c0.52,0.99 1.01,1.99 1.52,2.98c0.49,1.04 1.07,2.03 1.62,3.04c0.56,1 1.16,1.97 1.78,2.93c0.59,0.94 1.25,1.82 1.91,2.7c0.66,0.85 1.37,1.65 2.09,2.44c0.72,0.8 1.5,1.54 2.31,2.25c0.83,0.7 1.68,1.36 2.54,2.01c0.84,0.64 1.76,1.16 2.7,1.64c0.95,0.47 1.93,0.87 2.92,1.24c0.94,0.35 1.9,0.63 2.89,0.82c1,0.17 2.02,0.25 3.03,0.32c0.94,0.09 1.89,0.11 2.83,0.09c0.9,-0.05 1.79,-0.22 2.68,-0.39c0.81,-0.16 1.61,-0.35 2.4,-0.6c0.13,-0.05 0.26,-0.09 0.38,-0.15c0.25,-0.11 0.51,-0.25 0.75,-0.39c0.12,-0.07 0.5,-0.29 0.37,-0.22c-3.06,1.76 -4.12,2.41 -2.71,1.55c0.74,-0.47 1.44,-1.01 2.12,-1.58c0.67,-0.59 1.31,-1.21 1.92,-1.85c0.67,-0.73 1.3,-1.5 1.89,-2.29c0.64,-0.84 1.17,-1.74 1.68,-2.66c0.56,-1.02 1.01,-2.09 1.45,-3.16c0.45,-1.08 0.85,-2.18 1.24,-3.28c0.38,-1.06 0.67,-2.14 0.88,-3.24c0.22,-1.12 0.3,-2.25 0.33,-3.39c0,-1.17 -0.15,-2.33 -0.39,-3.47c-0.29,-1.21 -0.79,-2.36 -1.33,-3.48c-0.57,-1.22 -1.26,-2.37 -1.99,-3.5c-0.74,-1.14 -1.59,-2.19 -2.47,-3.22c-0.89,-1.04 -1.87,-1.99 -2.88,-2.9c-0.94,-0.83 -1.92,-1.6 -2.97,-2.27c-1.01,-0.6 -2.11,-1 -3.21,-1.37c-1.02,-0.37 -2.08,-0.59 -3.16,-0.69c-0.99,-0.08 -1.97,0.01 -2.94,0.17c-0.91,0.17 -1.8,0.47 -2.64,0.87c-1.25,0.66 -3.4,1.87 2.24,-1.31c0.13,-0.08 -0.27,0.16 -0.4,0.25c-0.36,0.24 -0.4,0.28 -0.74,0.54c-0.74,0.57 -1.37,1.26 -1.94,1.99c-0.57,0.75 -1.07,1.55 -1.5,2.38c-0.45,0.9 -0.77,1.85 -1.05,2.81c-0.27,0.98 -0.48,1.97 -0.66,2.97c-0.19,1.21 -0.2,2.44 -0.2,3.66c0,1.38 0.08,2.75 0.22,4.12c0.14,1.35 0.39,2.67 0.69,3.99c0.28,1.28 0.67,2.53 1.15,3.76c0.44,1.16 0.96,2.3 1.53,3.4c0.52,1.04 1.24,1.94 2.03,2.78c0.77,0.79 1.67,1.44 2.56,2.08c0.82,0.64 1.76,1.04 2.74,1.36c0.97,0.27 1.96,0.5 2.97,0.49c1.71,-0.11 5.52,-2.6 -0.49,0.84c1.03,-0.58 1.92,-1.35 2.77,-2.15c0.87,-0.81 1.6,-1.73 2.28,-2.7c0.66,-0.96 1.18,-2.01 1.65,-3.08c0.47,-1.04 0.79,-2.14 1.06,-3.25c0.24,-1.09 0.4,-2.19 0.48,-3.3c0.08,-1.09 0.03,-2.19 -0.09,-3.28c-0.13,-1.07 -0.41,-2.11 -0.72,-3.14c-0.31,-1 -0.74,-1.95 -1.2,-2.88c-0.45,-0.9 -1.01,-1.72 -1.63,-2.51c-0.6,-0.79 -1.36,-1.42 -2.14,-2.04c-0.74,-0.55 -1.49,-1.1 -2.28,-1.58c-0.71,-0.4 -1.47,-0.7 -2.25,-0.94c-0.69,-0.24 -1.42,-0.29 -2.15,-0.26c-0.68,0.04 -1.34,0.18 -1.97,0.4c-3.48,1.82 4.25,-2.84 1.76,-1.03c-0.53,0.42 -0.99,0.91 -1.42,1.42c-0.43,0.53 -0.78,1.12 -1.1,1.73c-0.3,0.62 -0.57,1.25 -0.82,1.89c-0.27,0.62 -0.4,1.29 -0.51,1.96c-0.11,0.69 -0.15,1.39 -0.13,2.09c0.04,0.8 0.21,1.59 0.37,2.38c0.18,0.84 0.44,1.65 0.69,2.46c0.25,0.8 0.56,1.57 0.91,2.33c0.36,0.79 0.86,1.49 1.37,2.18c0.48,0.65 1.05,1.21 1.65,1.75c0.53,0.46 1.08,0.88 1.67,1.25c0.5,0.27 1.05,0.42 1.6,0.55c0.51,0.14 1.02,0.06 1.52,-0.08c3.39,-1.57 -3.58,2.32 -1.9,1.16c0.47,-0.33 0.9,-0.69 1.26,-1.14c0.37,-0.5 0.59,-1.08 0.78,-1.67c0.19,-0.6 0.26,-1.24 0.29,-1.87c0.03,-0.67 -0.06,-1.34 -0.19,-2c-0.14,-0.7 -0.42,-1.36 -0.73,-2c-0.32,-0.63 -0.67,-1.24 -1.08,-1.8c-0.36,-0.47 -0.77,-0.89 -1.17,-1.31l3.46,-2.11c0.41,0.44 0.84,0.87 1.2,1.35c0.42,0.59 0.79,1.22 1.11,1.87c0.33,0.67 0.62,1.36 0.78,2.09c0.14,0.68 0.26,1.38 0.23,2.08c-0.01,0.66 -0.06,1.33 -0.24,1.97c-0.18,0.62 -0.39,1.23 -0.71,1.79c-0.34,0.5 -0.73,0.92 -1.22,1.26c-1.57,1.13 -3.21,2.32 -5.1,2.79c-0.55,0.09 -1.09,0.09 -1.63,-0.08c-0.58,-0.16 -1.16,-0.34 -1.67,-0.66c-0.6,-0.39 -1.16,-0.83 -1.7,-1.31c-0.62,-0.55 -1.2,-1.14 -1.7,-1.82c-0.52,-0.71 -1.03,-1.44 -1.4,-2.25c-0.36,-0.77 -0.68,-1.56 -0.94,-2.37c-0.26,-0.83 -0.52,-1.65 -0.71,-2.5c-0.16,-0.81 -0.34,-1.62 -0.4,-2.44c-0.04,-0.72 -0.01,-1.44 0.09,-2.16c0.11,-0.69 0.22,-1.38 0.47,-2.04c0.25,-0.65 0.52,-1.29 0.81,-1.92c0.3,-0.63 0.64,-1.25 1.06,-1.81c0.42,-0.54 0.88,-1.05 1.39,-1.5c1.53,-1.28 3.33,-2.27 5.2,-2.96c0.67,-0.19 1.35,-0.3 2.04,-0.31c0.76,0.01 1.51,0.11 2.23,0.37c0.8,0.27 1.58,0.59 2.3,1.02c0.8,0.51 1.56,1.06 2.3,1.63c0.8,0.64 1.58,1.31 2.2,2.12c0.62,0.81 1.21,1.66 1.66,2.58c0.48,0.95 0.92,1.92 1.24,2.94c0.32,1.05 0.61,2.11 0.75,3.2c0.13,1.11 0.2,2.23 0.12,3.35c-0.07,1.13 -0.22,2.25 -0.45,3.36c-0.25,1.13 -0.56,2.25 -1.03,3.31c-0.46,1.09 -0.97,2.16 -1.62,3.16c-0.67,0.99 -1.38,1.94 -2.24,2.77c-0.85,0.83 -1.72,1.62 -2.73,2.24c-2,1.15 -4.12,2.9 -6.57,2.98c-1.03,-0.06 -2.04,-0.28 -3.03,-0.59c-1.01,-0.35 -1.97,-0.8 -2.81,-1.47c-0.91,-0.66 -1.82,-1.33 -2.6,-2.14c-0.81,-0.87 -1.55,-1.8 -2.08,-2.87c-0.59,-1.12 -1.11,-2.27 -1.56,-3.45c-0.48,-1.24 -0.88,-2.51 -1.18,-3.81c-0.3,-1.33 -0.56,-2.67 -0.7,-4.03c-0.16,-1.38 -0.24,-2.77 -0.24,-4.16c-0.01,-1.24 0,-2.49 0.16,-3.72c0.16,-1.01 0.37,-2.01 0.64,-3c0.27,-0.98 0.57,-1.95 1.01,-2.88c0.41,-0.86 0.9,-1.68 1.48,-2.45c0.56,-0.76 1.16,-1.48 1.89,-2.09c1.75,-1.44 3.8,-2.5 5.83,-3.5c0.87,-0.35 1.77,-0.64 2.71,-0.77c0.99,-0.14 1.99,-0.2 2.99,-0.09c1.1,0.13 2.17,0.38 3.21,0.76c1.13,0.39 2.25,0.82 3.27,1.45c1.05,0.7 2.05,1.49 3,2.33c1.02,0.93 2,1.9 2.9,2.95c0.89,1.04 1.76,2.11 2.51,3.26c0.73,1.15 1.44,2.32 2.02,3.55c0.54,1.15 1.07,2.32 1.37,3.56c0.26,1.17 0.42,2.36 0.44,3.56c-0.02,1.15 -0.1,2.3 -0.3,3.44c-0.2,1.12 -0.48,2.22 -0.86,3.3c-0.39,1.11 -0.79,2.21 -1.23,3.3c-0.44,1.08 -0.88,2.16 -1.43,3.2c-0.5,0.93 -1.02,1.86 -1.66,2.71c-0.58,0.81 -1.2,1.58 -1.86,2.32c-0.61,0.66 -1.25,1.3 -1.91,1.9c-0.67,0.59 -1.37,1.13 -2.1,1.64c-1.83,1.18 -3.71,2.4 -5.77,3.15c-0.79,0.22 -1.6,0.41 -2.42,0.56c-0.9,0.16 -1.8,0.32 -2.72,0.34c-0.95,0 -1.9,-0.04 -2.85,-0.12c-1.02,-0.08 -2.05,-0.17 -3.06,-0.37c-1,-0.22 -1.97,-0.51 -2.92,-0.87c-1,-0.39 -1.99,-0.8 -2.95,-1.28c-0.95,-0.5 -1.88,-1.05 -2.74,-1.7c-0.86,-0.66 -1.72,-1.33 -2.55,-2.04c-0.82,-0.72 -1.61,-1.47 -2.34,-2.28c-0.73,-0.8 -1.44,-1.62 -2.1,-2.48c-0.68,-0.88 -1.34,-1.78 -1.93,-2.72c-0.62,-0.97 -1.23,-1.95 -1.79,-2.96c-0.56,-1.01 -1.13,-2.01 -1.64,-3.05c-0.5,-0.99 -0.99,-1.99 -1.51,-2.97c-0.49,-0.91 -0.99,-1.8 -1.59,-2.65c-0.57,-0.81 -1.14,-1.62 -1.8,-2.36c-0.64,-0.71 -1.31,-1.39 -2,-2.05c-0.72,-0.67 -1.47,-1.32 -2.29,-1.89c-0.82,-0.57 -1.65,-1.13 -2.55,-1.56c-0.93,-0.44 -1.88,-0.85 -2.9,-1.05c-1.02,-0.19 -2.04,-0.3 -3.08,-0.35c-1.15,-0.05 -2.3,-0.07 -3.45,-0.04c-1.23,0.05 -2.47,0.11 -3.69,0.25c-1.31,0.14 -2.63,0.29 -3.93,0.5c-1.34,0.21 -2.67,0.47 -3.99,0.75c-1.32,0.27 -2.64,0.57 -3.96,0.84c-1.3,0.28 -2.59,0.58 -3.87,0.88c-1.21,0.27 -2.42,0.55 -3.63,0.84c-1.14,0.27 -2.28,0.56 -3.43,0.83c-1.04,0.25 -2.09,0.5 -3.14,0.74c-0.95,0.21 -1.91,0.45 -2.87,0.62c-0.78,0.15 -1.55,0.29 -2.33,0.39c-0.7,0.1 -1.4,0.19 -2.11,0.24c-0.61,0.05 -1.21,0.11 -1.82,0.09c-0.52,-0.01 -1.03,-0.04 -1.54,-0.08c-0.42,-0.04 -0.83,-0.1 -1.24,-0.21l3.34,-2.31z" fill="#330080" id="path5035"/>
     <path d="m678.19,585.19c0.11,-0.39 0.31,-0.74 0.51,-1.09c0.28,-0.41 0.61,-0.79 0.97,-1.14c0.46,-0.47 1,-0.84 1.54,-1.2c1.78,-1.14 3.61,-2.2 5.51,-3.12c0.78,-0.38 1.6,-0.67 2.41,-0.95c0.91,-0.32 1.84,-0.57 2.78,-0.82c1.04,-0.27 2.09,-0.48 3.14,-0.71c1.22,-0.25 2.44,-0.53 3.66,-0.8c1.35,-0.31 2.69,-0.65 4.02,-1.04c1.32,-0.39 2.6,-0.85 3.84,-1.43c1.24,-0.65 3.89,-2.09 -1.65,0.99c-0.2,0.11 0.38,-0.24 0.58,-0.37c0.47,-0.31 0.65,-0.45 1.11,-0.79c1.1,-0.81 2.09,-1.77 3.02,-2.77c0.96,-1.05 1.8,-2.21 2.61,-3.38c0.87,-1.27 1.68,-2.56 2.49,-3.87c0.84,-1.39 1.7,-2.78 2.55,-4.17c0.82,-1.38 1.69,-2.72 2.61,-4.03c1.08,-1.48 2.23,-2.89 3.41,-4.29c1.2,-1.42 2.45,-2.81 3.73,-4.17c1.27,-1.36 2.61,-2.66 3.95,-3.96c1.29,-1.27 2.64,-2.47 4,-3.66c1.26,-1.09 2.57,-2.09 3.93,-3.05c2.34,-1.54 4.74,-3 7.29,-4.17c1.16,-0.53 2.39,-0.91 3.63,-1.2c1.05,-0.19 2.11,-0.3 3.17,-0.27c0.93,0.03 1.81,0.25 2.66,0.59c0.74,0.3 1.38,0.76 1.99,1.27c0.56,0.48 1,1.06 1.35,1.71c0.36,0.69 0.54,1.44 0.71,2.2c0.16,0.79 0.19,1.6 0.2,2.4c0.01,0.87 -0.06,1.73 -0.16,2.59c-0.11,0.9 -0.28,1.79 -0.46,2.67c-0.19,0.92 -0.47,1.82 -0.79,2.7c-0.36,0.89 -0.76,1.77 -1.18,2.63c-0.43,0.84 -0.89,1.66 -1.39,2.45c-0.56,0.83 -1.24,1.57 -1.93,2.29c-0.67,0.73 -1.43,1.37 -2.25,1.93c-1.95,1.27 -3.99,2.37 -6.1,3.34c-0.78,0.36 -1.58,0.68 -2.42,0.9c-0.71,0.18 -1.44,0.32 -2.17,0.38c-0.64,0.04 -1.27,-0.08 -1.89,-0.23c-0.57,-0.16 -1.07,-0.48 -1.57,-0.8c-0.45,-0.27 -0.85,-0.6 -1.21,-0.98c-0.33,-0.35 -0.58,-0.76 -0.79,-1.19c-0.23,-0.43 -0.37,-0.89 -0.47,-1.36c-0.09,-0.51 -0.1,-1.02 -0.07,-1.54c0.04,-0.51 0.14,-1.01 0.27,-1.5c0.14,-0.5 0.32,-0.98 0.53,-1.45c0.23,-0.53 0.56,-1 0.89,-1.46c0.34,-0.48 0.72,-0.92 1.13,-1.34c0.42,-0.43 0.87,-0.82 1.34,-1.19c1.53,-1.19 3.25,-2.13 4.97,-3.01c0.53,-0.26 1.09,-0.46 1.65,-0.63c0.53,-0.12 1.07,-0.22 1.61,-0.28c0.49,-0.05 0.98,0.05 1.45,0.19c0.43,0.13 0.83,0.32 1.23,0.53c0.4,0.22 0.72,0.53 1.03,0.86c0.3,0.34 0.49,0.75 0.64,1.17c0.15,0.44 0.19,0.89 0.16,1.34c-0.05,0.45 -0.17,0.88 -0.31,1.31c-0.16,0.49 -0.46,0.89 -0.78,1.28c-0.36,0.44 -0.76,0.82 -1.21,1.15c-1.64,1.14 -3.43,2.02 -5.16,2.99l3.16,-2.54c2.67,-1.45 -4.78,2.83 -1.77,1.05c0.45,-0.32 0.89,-0.64 1.24,-1.06c0.31,-0.36 0.66,-0.71 0.84,-1.15c0.15,-0.4 0.28,-0.8 0.35,-1.22c0.06,-0.41 0.05,-0.79 -0.08,-1.18c-0.12,-0.38 -0.28,-0.74 -0.55,-1.03c-0.28,-0.3 -0.59,-0.56 -0.96,-0.74c-0.37,-0.19 -0.77,-0.36 -1.18,-0.46c-0.44,-0.1 -0.9,-0.15 -1.35,-0.06c-0.53,0.07 -1.06,0.18 -1.57,0.34c-0.55,0.18 -1.09,0.4 -1.6,0.68c-1.65,0.93 5.33,-3.27 1.95,-1.04c-0.47,0.36 -0.93,0.74 -1.35,1.15c-0.41,0.4 -0.81,0.82 -1.16,1.28c-0.33,0.44 -0.66,0.89 -0.92,1.38c-0.23,0.45 -0.41,0.92 -0.55,1.4c-0.15,0.46 -0.25,0.94 -0.31,1.42c-0.04,0.48 -0.06,0.97 0.02,1.44c0.09,0.44 0.2,0.87 0.41,1.27c0.2,0.39 0.42,0.77 0.73,1.09c0.35,0.34 0.74,0.65 1.16,0.9c0.47,0.28 0.95,0.57 1.49,0.68c0.6,0.12 1.2,0.2 1.81,0.12c0.72,-0.09 1.43,-0.23 2.13,-0.43c0.82,-0.25 1.6,-0.59 2.38,-0.94c0.44,-0.21 0.87,-0.41 1.3,-0.64c0.15,-0.07 0.58,-0.31 0.44,-0.23c-2.23,1.31 -4.17,2.4 -2.58,1.51c0.84,-0.51 1.61,-1.12 2.29,-1.84c0.69,-0.71 1.37,-1.43 1.95,-2.23c0.52,-0.77 0.98,-1.58 1.41,-2.4c0.44,-0.85 0.83,-1.72 1.2,-2.6c0.33,-0.86 0.62,-1.73 0.81,-2.64c0.2,-0.87 0.37,-1.75 0.48,-2.64c0.1,-0.84 0.19,-1.68 0.19,-2.53c-0.01,-0.79 -0.02,-1.57 -0.18,-2.34c-0.14,-0.72 -0.31,-1.44 -0.64,-2.1c-0.33,-0.6 -0.75,-1.13 -1.28,-1.57c-0.58,-0.47 -1.2,-0.89 -1.91,-1.16c-0.83,-0.3 -1.69,-0.47 -2.57,-0.47c-1.05,0.01 -2.09,0.11 -3.11,0.35c-1.23,0.31 -2.43,0.7 -3.58,1.25c-1.27,0.61 -3.79,2.11 1.56,-1.01c2,-1.17 -3.94,2.14 -1.94,1.2c-1.37,0.93 -2.69,1.93 -3.95,3.01c-1.36,1.18 -2.72,2.37 -4.02,3.64c-1.33,1.29 -2.67,2.59 -3.95,3.94c-1.29,1.35 -2.53,2.73 -3.74,4.15c-1.18,1.39 -2.33,2.79 -3.41,4.26c-0.94,1.29 -1.81,2.63 -2.63,4c-0.84,1.39 -1.7,2.78 -2.54,4.17c-0.81,1.31 -1.62,2.61 -2.48,3.89c-0.81,1.18 -1.64,2.35 -2.59,3.43c-0.92,1.03 -1.89,2 -2.99,2.84c-2.16,1.64 -4.52,2.98 -6.95,4.17c-1.25,0.55 -2.55,1 -3.87,1.38c-1.34,0.38 -2.69,0.72 -4.05,1.02c-1.21,0.28 -2.43,0.54 -3.65,0.8c-1.05,0.23 -2.1,0.45 -3.14,0.73c-0.93,0.26 -1.85,0.52 -2.76,0.85c-0.81,0.29 -1.62,0.6 -2.39,0.99c-3.95,1.96 4.36,-2.53 1.44,-0.89c-0.54,0.35 -1.09,0.69 -1.57,1.13c-0.36,0.33 -0.69,0.68 -1,1.06c-0.22,0.31 -0.42,0.63 -0.56,0.99l-3.67,1.73z" fill="#330080" id="path5037"/>
     <path d="m601.16,578.4c0.39,0 0.78,0 1.16,0c0.62,0.01 1.24,-0.01 1.86,0.02c0.74,0.04 1.48,0.07 2.22,0.11c0.92,0.02 1.83,0.08 2.74,0.14c1.04,0.07 2.08,0.13 3.12,0.19c1.1,0.06 2.19,0.12 3.29,0.17c1.16,0.05 2.32,0.1 3.47,0.14c1.28,0.05 2.56,0.09 3.84,0.12c1.31,0.04 2.62,0.09 3.93,0.1c1.33,0.01 2.65,-0.02 3.98,-0.1c1.22,-0.05 2.43,-0.16 3.64,-0.34c1.15,-0.21 2.28,-0.52 3.38,-0.93c-1.1,0.87 2.82,-1.52 1.56,-0.81c-5.47,3.12 -3.15,1.84 -1.96,1.05c0.91,-0.64 1.81,-1.32 2.7,-1.99c0.89,-0.67 1.71,-1.41 2.54,-2.13c0.87,-0.78 1.78,-1.5 2.72,-2.19c0.93,-0.68 1.88,-1.33 2.86,-1.94c2.06,-1.39 4.16,-2.49 6.47,-3.33c1,-0.33 2.02,-0.63 3.05,-0.85c1.04,-0.2 2.08,-0.39 3.13,-0.52c1.01,-0.13 2.02,-0.24 3.03,-0.35c1,-0.11 2.01,-0.18 3.01,-0.3c0.98,-0.11 1.96,-0.29 2.92,-0.5c0.97,-0.19 1.91,-0.46 2.84,-0.78c0.94,-0.37 1.86,-0.78 2.77,-1.2c1.25,-0.65 3.49,-1.91 -2.1,1.24c-0.15,0.09 0.3,-0.18 0.45,-0.28c0.34,-0.23 0.55,-0.37 0.89,-0.61c0.93,-0.64 1.77,-1.38 2.57,-2.17c0.84,-0.82 1.55,-1.76 2.22,-2.73c0.72,-1.06 1.32,-2.2 1.9,-3.34c0.59,-1.18 1.08,-2.42 1.52,-3.67c0.45,-1.29 0.8,-2.61 1.1,-3.94c0.33,-1.41 0.52,-2.84 0.69,-4.28c0.18,-1.47 0.25,-2.95 0.25,-4.43c-0.02,-1.52 -0.19,-3.03 -0.43,-4.52c-0.24,-1.5 -0.58,-2.98 -1,-4.44c-0.44,-1.45 -1.05,-2.83 -1.67,-4.21c-0.59,-1.31 -1.33,-2.54 -2.11,-3.75c-0.79,-1.18 -1.73,-2.26 -2.72,-3.28c-0.98,-1 -2.07,-1.87 -3.19,-2.69c-1.12,-0.81 -2.33,-1.45 -3.58,-2.03c-1.2,-0.53 -2.46,-0.9 -3.72,-1.26c-1.19,-0.35 -2.39,-0.59 -3.61,-0.73c-1.23,-0.1 -2.46,0.03 -3.66,0.24c-1.27,0.22 -2.48,0.63 -3.67,1.09c-0.2,0.09 -0.4,0.16 -0.59,0.25c-0.37,0.16 -0.81,0.38 -1.17,0.57c-0.19,0.1 -0.75,0.42 -0.56,0.31c3.67,-2.13 3.72,-2.17 2.33,-1.32c-1.11,0.7 -2.15,1.49 -3.15,2.33c-1.01,0.82 -1.92,1.75 -2.75,2.74c-0.88,1.03 -1.52,2.21 -2.11,3.41c-0.63,1.25 -1.07,2.58 -1.47,3.92c-0.4,1.28 -0.62,2.61 -0.78,3.94c-0.18,1.29 -0.18,2.59 -0.1,3.89c0.08,1.26 0.27,2.5 0.53,3.73c0.25,1.2 0.68,2.35 1.17,3.47c0.5,1.09 1.16,2.1 1.84,3.09c0.68,0.97 1.45,1.87 2.23,2.75c0.74,0.83 1.54,1.61 2.36,2.37c0.79,0.72 1.66,1.38 2.52,2.02c0.85,0.64 1.75,1.2 2.66,1.74c0.89,0.57 1.85,0.99 2.82,1.38c0.91,0.34 1.82,0.67 2.76,0.93c0.86,0.23 1.73,0.35 2.61,0.46c0.9,0.12 1.73,-0.15 2.55,-0.51c-1.2,0.84 2.62,-1.44 1.34,-0.71c-5.55,3.19 -3.32,1.95 -2.13,1.17c0.88,-0.6 1.67,-1.33 2.42,-2.09c0.74,-0.77 1.42,-1.6 2.07,-2.45c0.61,-0.78 1.2,-1.58 1.73,-2.42c0.49,-0.81 0.89,-1.66 1.28,-2.52c0.37,-0.84 0.61,-1.72 0.79,-2.61c0.19,-0.93 0.28,-1.88 0.33,-2.82c0.05,-0.96 0,-1.92 -0.11,-2.87c-0.1,-0.98 -0.32,-1.93 -0.56,-2.88c-0.25,-0.94 -0.6,-1.85 -0.96,-2.75c-0.33,-0.84 -0.71,-1.65 -1.12,-2.45c-0.35,-0.78 -0.87,-1.45 -1.44,-2.07c-0.6,-0.59 -1.27,-1.12 -1.92,-1.66c-0.62,-0.51 -1.33,-0.88 -2.05,-1.22c-0.77,-0.34 -1.55,-0.62 -2.35,-0.87c-0.72,-0.26 -1.47,-0.39 -2.23,-0.49c-0.7,-0.12 -1.4,-0.07 -2.09,0c-0.65,0.05 -1.26,0.23 -1.84,0.49c-3.64,1.87 3.47,-2.18 1.87,-1.13c-0.53,0.36 -0.98,0.82 -1.4,1.28c-0.44,0.48 -0.83,1 -1.19,1.53c-0.38,0.54 -0.64,1.14 -0.87,1.75c-0.25,0.59 -0.43,1.21 -0.56,1.84c-0.13,0.68 -0.13,1.37 -0.13,2.06c-0.02,0.68 0.07,1.34 0.22,1.99c0.18,0.7 0.41,1.39 0.67,2.06c0.26,0.67 0.58,1.32 0.94,1.95c0.36,0.6 0.76,1.18 1.2,1.73c0.38,0.49 0.8,0.96 1.25,1.38c0.4,0.39 0.84,0.72 1.29,1.04c0.37,0.28 0.8,0.49 1.23,0.67c0.39,0.17 0.82,0.15 1.24,0.16c1.26,-0.21 4.46,-2.39 -2.23,1.43c0.49,-0.27 0.85,-0.66 1.2,-1.08c0.33,-0.43 0.64,-0.87 0.91,-1.34c0.24,-0.48 0.42,-0.99 0.57,-1.51c0.16,-0.49 0.23,-1.01 0.26,-1.53c0.02,-0.53 -0.02,-1.07 -0.09,-1.6c-0.06,-0.53 -0.21,-1.05 -0.37,-1.56c-0.12,-0.35 -0.24,-0.7 -0.36,-1.04l3.54,-1.97c0.14,0.35 0.25,0.7 0.37,1.05c0.18,0.53 0.34,1.07 0.41,1.63c0.08,0.55 0.13,1.11 0.12,1.66c-0.01,0.55 -0.06,1.1 -0.22,1.62c-0.14,0.54 -0.31,1.07 -0.53,1.59c-0.25,0.49 -0.55,0.96 -0.88,1.4c-0.33,0.45 -0.68,0.9 -1.15,1.22c-1,0.57 -3.1,2.42 -4.84,2.4c-0.46,-0.02 -0.91,-0.08 -1.33,-0.28c-0.45,-0.21 -0.88,-0.44 -1.28,-0.75c-0.46,-0.33 -0.91,-0.68 -1.32,-1.08c-0.45,-0.45 -0.88,-0.93 -1.27,-1.43c-0.45,-0.57 -0.86,-1.16 -1.23,-1.79c-0.37,-0.64 -0.7,-1.3 -0.97,-2c-0.27,-0.69 -0.5,-1.39 -0.69,-2.1c-0.17,-0.69 -0.29,-1.37 -0.28,-2.08c0.01,-0.71 -0.01,-1.42 0.11,-2.12c0.1,-0.66 0.27,-1.3 0.52,-1.92c0.24,-0.62 0.47,-1.26 0.83,-1.82c0.35,-0.56 0.74,-1.09 1.17,-1.58c0.43,-0.49 0.86,-0.97 1.36,-1.38c1.55,-1.17 3.3,-2.11 5.09,-2.86c0.62,-0.21 1.26,-0.35 1.91,-0.39c0.72,-0.06 1.44,-0.05 2.15,0.08c0.77,0.11 1.53,0.28 2.27,0.54c0.81,0.27 1.61,0.56 2.38,0.92c0.74,0.36 1.47,0.77 2.1,1.3c0.67,0.55 1.35,1.09 1.95,1.71c0.59,0.65 1.13,1.36 1.5,2.16c0.41,0.81 0.8,1.64 1.13,2.49c0.37,0.91 0.72,1.84 0.98,2.79c0.26,0.97 0.49,1.94 0.6,2.93c0.11,0.97 0.18,1.95 0.13,2.92c-0.03,0.97 -0.12,1.93 -0.29,2.88c-0.18,0.92 -0.4,1.83 -0.76,2.69c-0.38,0.88 -0.78,1.74 -1.26,2.57c-0.51,0.86 -1.09,1.68 -1.71,2.47c-0.66,0.85 -1.32,1.7 -2.06,2.49c-0.74,0.77 -1.52,1.52 -2.39,2.16c-1.94,1.35 -4,2.54 -6.15,3.52c-0.87,0.32 -1.75,0.51 -2.68,0.35c-0.89,-0.13 -1.77,-0.27 -2.64,-0.52c-0.94,-0.27 -1.87,-0.61 -2.79,-0.96c-0.98,-0.41 -1.94,-0.85 -2.84,-1.43c-0.92,-0.56 -1.83,-1.13 -2.68,-1.77c-0.88,-0.66 -1.75,-1.33 -2.55,-2.07c-0.83,-0.77 -1.63,-1.56 -2.38,-2.4c-0.79,-0.9 -1.56,-1.81 -2.25,-2.79c-0.7,-1.01 -1.37,-2.04 -1.88,-3.16c-0.5,-1.15 -0.95,-2.31 -1.21,-3.54c-0.27,-1.25 -0.47,-2.51 -0.56,-3.79c-0.08,-1.31 -0.1,-2.64 0.07,-3.95c0.16,-1.35 0.36,-2.7 0.75,-4.01c0.4,-1.35 0.82,-2.7 1.44,-3.97c0.59,-1.22 1.2,-2.44 2.08,-3.5c0.82,-1.02 1.71,-1.97 2.72,-2.81c1,-0.85 2.03,-1.66 3.13,-2.38c2.21,-1.41 4.48,-2.79 6.93,-3.76c1.21,-0.44 2.44,-0.82 3.72,-1.02c1.23,-0.18 2.48,-0.3 3.72,-0.15c1.24,0.16 2.45,0.42 3.65,0.78c1.27,0.37 2.55,0.76 3.76,1.32c1.26,0.59 2.49,1.26 3.62,2.09c1.13,0.84 2.24,1.73 3.23,2.74c1,1.05 1.95,2.15 2.75,3.36c0.8,1.22 1.54,2.47 2.14,3.8c0.63,1.39 1.24,2.8 1.7,4.26c0.43,1.47 0.77,2.97 1.03,4.48c0.24,1.51 0.42,3.04 0.45,4.58c0.02,1.49 -0.04,2.99 -0.22,4.48c-0.17,1.44 -0.35,2.89 -0.67,4.31c-0.3,1.35 -0.64,2.68 -1.09,3.98c-0.43,1.27 -0.91,2.52 -1.49,3.72c-0.58,1.15 -1.18,2.3 -1.88,3.39c-0.65,0.99 -1.35,1.95 -2.19,2.79c-0.78,0.81 -1.61,1.59 -2.53,2.23c-1.95,1.39 -4.02,2.62 -6.17,3.66c-0.93,0.41 -1.85,0.82 -2.8,1.16c-0.94,0.31 -1.9,0.55 -2.87,0.74c-0.97,0.2 -1.96,0.37 -2.95,0.47c-1,0.11 -2,0.19 -3,0.3c-1.01,0.11 -2.02,0.22 -3.02,0.36c-1.05,0.15 -2.09,0.33 -3.12,0.55c-1.02,0.24 -2.03,0.54 -3.02,0.89c-1.54,0.59 -5.68,2.7 0.49,-0.62c-0.99,0.59 -1.94,1.24 -2.87,1.91c-0.94,0.68 -1.87,1.38 -2.73,2.16c-0.84,0.72 -1.66,1.47 -2.53,2.15c-0.89,0.68 -1.79,1.35 -2.7,2.02c-2.06,1.42 -4.23,2.75 -6.55,3.71c-1.11,0.38 -2.26,0.69 -3.43,0.87c-1.21,0.16 -2.43,0.26 -3.65,0.31c-1.33,0.06 -2.67,0.09 -4,0.08c-1.31,-0.02 -2.62,-0.07 -3.93,-0.1c-1.28,-0.04 -2.56,-0.08 -3.84,-0.13c-1.16,-0.04 -2.32,-0.09 -3.48,-0.14c-1.1,-0.05 -2.2,-0.11 -3.3,-0.17c-1.04,-0.06 -2.08,-0.12 -3.12,-0.19c-0.91,-0.06 -1.82,-0.11 -2.74,-0.14c-0.73,-0.03 -1.47,-0.07 -2.21,-0.1c-0.62,-0.01 -1.24,0 -1.86,0c-0.39,0 -0.78,0 -1.17,0l3.29,-2.39z" fill="#330080" id="path5039"/>
     <path d="m595.96,555.84c0.18,-0.36 0.38,-0.72 0.58,-1.07c0.23,-0.41 0.5,-0.79 0.82,-1.13c0.4,-0.41 0.86,-0.76 1.32,-1.09c1.85,-1.18 3.46,-2.29 5.53,-2.71c0.66,-0.12 1.33,-0.15 1.99,-0.12c0.71,0.02 1.4,0.17 2.08,0.35c0.71,0.17 1.39,0.41 2.06,0.71c0.71,0.33 1.4,0.71 2.07,1.12c0.71,0.47 1.41,0.95 2.11,1.43c0.75,0.51 1.51,1.01 2.28,1.5c0.79,0.5 1.6,1 2.42,1.46c0.86,0.48 1.75,0.89 2.65,1.29c0.88,0.39 1.78,0.75 2.69,1.08c0.84,0.3 1.69,0.56 2.55,0.79c0.79,0.26 1.58,0.2 2.38,0.09c0.75,-0.1 1.47,-0.29 2.16,-0.6c3.66,-2.07 -4.35,2.66 -1.6,0.91c0.55,-0.34 1.03,-0.75 1.46,-1.23c0.38,-0.45 0.74,-0.91 1.02,-1.43c0.25,-0.46 0.44,-0.96 0.56,-1.47c0.13,-0.53 0.13,-1.07 0.09,-1.61c-0.05,-0.54 -0.15,-1.07 -0.33,-1.58c-0.17,-0.49 -0.4,-0.96 -0.65,-1.42c-0.25,-0.43 -0.55,-0.82 -0.87,-1.2c-0.26,-0.31 -0.55,-0.61 -0.85,-0.88c-0.27,-0.22 -0.57,-0.41 -0.86,-0.59c-0.2,-0.12 -0.1,-0.05 -0.29,-0.18l3.42,-2.19c0.18,0.11 0.09,0.05 0.28,0.17c0.32,0.2 0.62,0.4 0.9,0.65c0.31,0.29 0.61,0.6 0.88,0.93c0.33,0.4 0.65,0.82 0.91,1.27c0.26,0.48 0.5,0.97 0.68,1.48c0.2,0.54 0.32,1.1 0.37,1.67c0.06,0.57 0.09,1.15 -0.02,1.72c-0.11,0.54 -0.27,1.07 -0.52,1.57c-0.27,0.54 -0.59,1.05 -0.99,1.51c-0.4,0.51 -0.85,0.98 -1.41,1.33c-1.7,1.16 -3.5,2.2 -5.36,3.08c-0.72,0.26 -1.47,0.43 -2.23,0.51c-0.84,0.08 -1.66,0.05 -2.47,-0.22c-0.86,-0.24 -1.72,-0.51 -2.56,-0.82c-0.92,-0.34 -1.82,-0.71 -2.71,-1.11c-0.9,-0.4 -1.81,-0.82 -2.67,-1.31c-0.83,-0.47 -1.63,-0.97 -2.44,-1.48c-0.77,-0.49 -1.53,-1 -2.28,-1.52c-0.7,-0.47 -1.39,-0.95 -2.1,-1.4c-0.67,-0.39 -1.34,-0.76 -2.05,-1.07c-0.65,-0.28 -1.33,-0.49 -2.02,-0.66c-0.66,-0.16 -1.34,-0.28 -2.02,-0.28c-0.65,0.01 -1.3,0.06 -1.94,0.21c-1.55,0.38 -4.39,2.06 1.48,-1.22c-0.48,0.29 -0.92,0.64 -1.35,1.01c-0.33,0.3 -0.64,0.63 -0.86,1.04c-0.2,0.34 -0.4,0.68 -0.59,1.04l-3.7,1.67z" fill="#330080" id="path5041"/>
     <path d="m603.64,525.55c0.41,0.08 0.81,0.18 1.21,0.27c0.57,0.11 1.14,0.2 1.71,0.29c0.74,0.1 1.48,0.17 2.22,0.22c0.86,0.06 1.71,0 2.57,-0.07c0.93,-0.09 1.85,-0.24 2.78,-0.39c0.9,-0.12 1.74,-0.43 2.54,-0.86c-6.01,3.66 -2.35,1.39 -1.08,0.32c0.76,-0.65 1.43,-1.39 2.06,-2.16c0.66,-0.8 1.23,-1.66 1.78,-2.55c0.57,-0.92 1.1,-1.88 1.61,-2.84c0.53,-0.98 1.06,-1.96 1.58,-2.93c0.55,-1 1.08,-1.99 1.63,-2.99c0.59,-1.07 1.2,-2.14 1.8,-3.21c0.63,-1.1 1.29,-2.18 1.97,-3.25c0.71,-1.14 1.53,-2.19 2.37,-3.22c0.86,-1.03 1.76,-2.02 2.7,-2.97c0.94,-0.94 1.94,-1.79 2.96,-2.63c1.01,-0.82 2.08,-1.58 3.19,-2.27c2.2,-1.35 4.45,-2.62 6.75,-3.78c1.04,-0.52 2.11,-0.98 3.19,-1.39c1.05,-0.37 2.13,-0.64 3.21,-0.87c1.06,-0.24 2.13,-0.38 3.2,-0.48c1.09,-0.09 2.18,-0.1 3.27,-0.09c1.11,0.01 2.22,0.12 3.33,0.23c1.1,0.14 2.2,0.33 3.3,0.54c1.09,0.21 2.17,0.47 3.24,0.76c1.05,0.29 2.09,0.64 3.11,1.01c1.09,0.39 2.11,0.93 3.14,1.45c1.11,0.55 2.19,1.17 3.28,1.79c1.12,0.64 2.2,1.34 3.26,2.08c1.12,0.77 2.19,1.61 3.25,2.45c1.09,0.87 2.13,1.79 3.17,2.73c1.08,0.96 2.1,2.01 3.1,3.05c1.02,1.09 2.02,2.18 3.05,3.26c1.06,1.13 2.16,2.22 3.29,3.28c1.17,1.09 2.39,2.12 3.63,3.13c1.2,0.96 2.43,1.86 3.69,2.75c1.14,0.8 2.33,1.54 3.55,2.23c1.14,0.63 2.34,1.14 3.56,1.59c1.15,0.4 2.34,0.65 3.54,0.84c1.24,0.16 2.48,0.04 3.71,-0.07c1.26,-0.12 2.5,-0.39 3.71,-0.73c1.25,-0.37 2.45,-0.86 3.63,-1.4c0.2,-0.1 0.39,-0.19 0.58,-0.29c0.43,-0.21 0.72,-0.37 1.14,-0.61c0.18,-0.1 0.74,-0.42 0.55,-0.32c-3,1.72 -3.86,2.27 -2.36,1.33c1.09,-0.68 2.11,-1.46 3.09,-2.28c0.96,-0.82 1.83,-1.74 2.67,-2.68c0.8,-0.9 1.52,-1.86 2.19,-2.86c0.64,-0.98 1.14,-2.03 1.53,-3.13c0.4,-1.11 0.53,-2.28 0.61,-3.45c0.09,-1.19 0.07,-2.39 -0.03,-3.57c-0.1,-1.2 -0.37,-2.36 -0.71,-3.51c-0.36,-1.16 -0.85,-2.27 -1.38,-3.36c-0.54,-1.15 -1.25,-2.2 -1.99,-3.22c-0.8,-1.07 -1.71,-2.04 -2.66,-2.96c-1.01,-0.96 -2.1,-1.82 -3.25,-2.6c-1.19,-0.77 -2.44,-1.43 -3.73,-2.02c-1.21,-0.57 -2.48,-1 -3.78,-1.36c-1.21,-0.31 -2.45,-0.52 -3.69,-0.66c-1.19,-0.13 -2.38,-0.09 -3.57,0.02c-1.11,0.11 -2.2,0.38 -3.26,0.72c-1,0.31 -1.93,0.8 -2.85,1.3c6,-3.62 2.3,-1.33 1,-0.34c-0.78,0.59 -1.47,1.27 -2.13,1.99c-0.65,0.73 -1.21,1.54 -1.71,2.39c-0.49,0.83 -0.86,1.73 -1.16,2.64c-0.31,0.95 -0.5,1.94 -0.66,2.92c-0.17,0.98 -0.25,1.97 -0.28,2.96c-0.03,0.97 0.01,1.95 0.07,2.92c0.07,0.95 0.2,1.89 0.39,2.83c0.17,0.89 0.42,1.75 0.76,2.59c0.36,0.84 0.88,1.59 1.42,2.32c0.54,0.73 1.18,1.39 1.84,2c0.65,0.59 1.38,1.09 2.13,1.54c0.73,0.44 1.52,0.77 2.32,1.08c0.74,0.3 1.51,0.53 2.29,0.67c0.81,0.14 1.62,0.2 2.44,0.24c0.8,0.01 1.6,-0.06 2.4,-0.18c0.78,-0.09 1.55,-0.28 2.31,-0.53c0.75,-0.26 1.49,-0.6 2.21,-0.94c1.28,-0.61 3.25,-1.76 -2.43,1.45c-0.12,0.06 0.23,-0.15 0.34,-0.23c0.32,-0.21 0.4,-0.3 0.68,-0.55c0.69,-0.65 1.28,-1.38 1.85,-2.13c0.6,-0.78 1.08,-1.63 1.52,-2.5c0.44,-0.88 0.79,-1.79 1.11,-2.71c0.32,-0.88 0.52,-1.78 0.66,-2.71c0.13,-0.93 0.16,-1.87 0.09,-2.8c-0.08,-0.99 -0.38,-1.94 -0.71,-2.87c-0.37,-0.96 -0.85,-1.87 -1.38,-2.76c-0.54,-0.93 -1.26,-1.72 -2.02,-2.46c-0.82,-0.8 -1.73,-1.49 -2.69,-2.09c-1.01,-0.63 -2.13,-1.03 -3.25,-1.42c-1.07,-0.37 -2.15,-0.7 -3.26,-0.91c-0.98,-0.19 -1.97,-0.19 -2.96,-0.16c-0.88,0.02 -1.72,0.25 -2.55,0.51c-1.54,0.54 -4.67,2.49 1.47,-1.04c-0.55,0.33 -1.05,0.72 -1.53,1.13c-0.44,0.36 -0.82,0.78 -1.14,1.24c-0.31,0.48 -0.49,1.02 -0.65,1.56c-0.17,0.58 -0.21,1.18 -0.2,1.78c0.04,0.65 0.18,1.29 0.33,1.92c0.14,0.62 0.35,1.23 0.61,1.81c0.28,0.6 0.67,1.12 1.12,1.6c0.47,0.47 0.98,0.9 1.5,1.3c0.5,0.39 1.08,0.66 1.66,0.93c0.57,0.24 1.15,0.46 1.74,0.64c0.56,0.19 1.15,0.24 1.74,0.27c0.56,0.04 1.12,0 1.66,-0.14c0.51,-0.11 0.98,-0.31 1.43,-0.58c-5.99,3.3 -3.18,2.07 -2.07,1.01c0.31,-0.33 0.59,-0.7 0.83,-1.08c0.24,-0.37 0.36,-0.79 0.47,-1.2c0.12,-0.4 0.18,-0.8 0.18,-1.21c0,-0.37 -0.05,-0.74 -0.18,-1.09c-0.13,-0.32 -0.32,-0.6 -0.5,-0.89l3.5,-2.04c0.2,0.3 0.4,0.61 0.55,0.95c0.16,0.39 0.24,0.8 0.25,1.22c0.01,0.44 -0.01,0.88 -0.14,1.31c-0.11,0.44 -0.22,0.89 -0.42,1.3c-0.23,0.41 -0.5,0.8 -0.8,1.16c-1.2,1.49 -3.53,1.97 -4.83,3.1c-0.48,0.23 -0.98,0.4 -1.5,0.49c-0.57,0.09 -1.15,0.1 -1.73,0.05c-0.61,-0.04 -1.21,-0.14 -1.79,-0.35c-0.61,-0.2 -1.2,-0.42 -1.78,-0.68c-0.59,-0.29 -1.18,-0.59 -1.7,-1.01c-0.53,-0.42 -1.06,-0.86 -1.54,-1.35c-0.46,-0.52 -0.88,-1.08 -1.18,-1.72c-0.27,-0.6 -0.5,-1.23 -0.65,-1.87c-0.16,-0.66 -0.31,-1.32 -0.36,-1.99c-0.04,-0.64 -0.01,-1.28 0.13,-1.9c0.16,-0.57 0.32,-1.14 0.61,-1.66c0.29,-0.51 0.65,-0.97 1.09,-1.35c0.48,-0.43 0.97,-0.84 1.51,-1.19c1.8,-1.05 3.52,-2.28 5.52,-2.9c0.85,-0.24 1.71,-0.43 2.6,-0.43c1.01,-0.02 2.02,0.03 3.01,0.24c1.12,0.24 2.22,0.57 3.3,0.96c1.14,0.4 2.27,0.83 3.29,1.49c0.98,0.63 1.91,1.34 2.74,2.16c0.78,0.78 1.52,1.6 2.08,2.56c0.54,0.9 1.03,1.84 1.41,2.82c0.36,0.96 0.67,1.94 0.77,2.96c0.09,0.96 0.07,1.93 -0.05,2.89c-0.13,0.94 -0.31,1.88 -0.62,2.78c-0.32,0.93 -0.67,1.86 -1.09,2.75c-0.43,0.89 -0.91,1.77 -1.49,2.57c-0.57,0.76 -1.16,1.51 -1.82,2.2c-1.55,1.52 -3.56,2.46 -5.51,3.38c-0.73,0.34 -1.48,0.66 -2.25,0.9c-0.77,0.22 -1.55,0.39 -2.35,0.48c-0.81,0.09 -1.62,0.15 -2.44,0.11c-0.83,-0.05 -1.66,-0.12 -2.47,-0.28c-0.8,-0.18 -1.57,-0.43 -2.33,-0.74c-0.81,-0.32 -1.61,-0.67 -2.36,-1.13c-0.77,-0.48 -1.51,-1 -2.17,-1.61c-0.68,-0.64 -1.33,-1.31 -1.88,-2.06c-0.56,-0.76 -1.1,-1.54 -1.47,-2.41c-0.35,-0.86 -0.62,-1.75 -0.8,-2.67c-0.19,-0.94 -0.33,-1.9 -0.41,-2.86c-0.07,-0.99 -0.11,-1.98 -0.09,-2.97c0.02,-1 0.1,-2.01 0.25,-3c0.16,-1 0.34,-2 0.64,-2.97c0.28,-0.94 0.64,-1.86 1.12,-2.72c0.49,-0.88 1.04,-1.71 1.68,-2.47c0.65,-0.74 1.33,-1.45 2.1,-2.06c1.83,-1.45 3.83,-2.61 5.91,-3.7c0.93,-0.49 1.88,-0.94 2.9,-1.23c1.08,-0.32 2.18,-0.56 3.31,-0.65c1.21,-0.09 2.42,-0.11 3.62,0.04c1.25,0.16 2.5,0.39 3.72,0.72c1.31,0.38 2.59,0.83 3.82,1.41c1.29,0.61 2.56,1.29 3.75,2.08c1.17,0.8 2.27,1.68 3.3,2.65c0.96,0.95 1.88,1.94 2.69,3.02c0.76,1.05 1.48,2.12 2.03,3.28c0.54,1.11 1.04,2.24 1.41,3.43c0.35,1.16 0.64,2.35 0.75,3.57c0.11,1.21 0.15,2.42 0.07,3.63c-0.09,1.2 -0.19,2.4 -0.57,3.55c-0.38,1.13 -0.85,2.21 -1.49,3.22c-0.66,1.02 -1.38,1.99 -2.17,2.91c-0.84,0.95 -1.7,1.89 -2.65,2.73c-0.97,0.84 -1.98,1.64 -3.07,2.33c-2.19,1.43 -4.47,2.73 -6.83,3.87c-1.2,0.52 -2.41,1 -3.67,1.35c-1.23,0.32 -2.48,0.57 -3.76,0.67c-1.25,0.11 -2.51,0.19 -3.76,-0.01c-1.22,-0.21 -2.43,-0.48 -3.59,-0.91c-1.23,-0.46 -2.44,-0.99 -3.6,-1.64c-1.22,-0.7 -2.41,-1.45 -3.57,-2.27c-1.25,-0.89 -2.49,-1.8 -3.69,-2.77c-1.25,-1.02 -2.48,-2.06 -3.65,-3.15c-1.13,-1.07 -2.24,-2.17 -3.31,-3.3c-1.02,-1.08 -2.02,-2.17 -3.04,-3.26c-1,-1.04 -2.01,-2.07 -3.09,-3.03c-1.03,-0.93 -2.07,-1.84 -3.16,-2.7c-1.05,-0.84 -2.12,-1.66 -3.23,-2.43c-1.05,-0.73 -2.13,-1.42 -3.25,-2.05c-1.08,-0.61 -2.16,-1.22 -3.27,-1.77c-1.01,-0.51 -2.03,-1.04 -3.11,-1.41c-1.02,-0.36 -2.05,-0.7 -3.09,-0.98c-1.07,-0.28 -2.14,-0.54 -3.23,-0.74c-1.09,-0.2 -2.18,-0.38 -3.28,-0.5c-1.1,-0.12 -2.2,-0.2 -3.3,-0.21c-1.09,0 -2.17,0.02 -3.25,0.13c-1.06,0.11 -2.12,0.27 -3.16,0.51c-1.08,0.25 -2.15,0.53 -3.17,0.93c-1.08,0.42 -2.14,0.89 -3.17,1.41c-0.55,0.28 -1.1,0.57 -1.64,0.86c-0.19,0.1 -0.73,0.41 -0.55,0.3c1.08,-0.63 4.25,-2.46 2.35,-1.36c-1.11,0.67 -2.19,1.41 -3.2,2.23c-1.03,0.82 -2.04,1.66 -2.98,2.58c-0.95,0.94 -1.85,1.92 -2.71,2.94c-0.86,1.02 -1.68,2.05 -2.39,3.17c-0.68,1.06 -1.35,2.14 -1.98,3.23c-0.6,1.07 -1.22,2.14 -1.81,3.21c-0.54,0.99 -1.08,1.99 -1.62,2.98c-0.53,0.98 -1.05,1.96 -1.58,2.93c-0.51,0.97 -1.03,1.93 -1.61,2.87c-0.53,0.9 -1.1,1.78 -1.75,2.6c-0.62,0.78 -1.29,1.54 -2.04,2.22c-1.74,1.55 -3.71,2.67 -5.82,3.73c-0.83,0.39 -1.71,0.64 -2.62,0.76c-0.93,0.14 -1.86,0.29 -2.8,0.36c-0.86,0.06 -1.74,0.1 -2.6,0.03c-0.75,-0.06 -1.5,-0.14 -2.25,-0.25c-0.57,-0.09 -1.15,-0.18 -1.72,-0.31c-0.41,-0.09 -0.82,-0.18 -1.22,-0.27l3.34,-2.31z" fill="#330080" id="path5043"/>
     <path d="m601.13,496.85c0.47,-0.2 0.94,-0.38 1.4,-0.6c0.68,-0.33 1.36,-0.67 2.03,-1.01c0.83,-0.4 1.66,-0.79 2.48,-1.2c0.87,-0.44 1.76,-0.84 2.68,-1.18c0.95,-0.37 1.95,-0.55 2.95,-0.7c0.95,-0.14 1.92,-0.12 2.87,-0.02c0.89,0.06 1.72,0.31 2.53,0.64c0.73,0.29 1.4,0.69 2.06,1.11c0.59,0.42 1.04,0.98 1.49,1.55c0.41,0.51 0.71,1.09 0.94,1.7c0.2,0.57 0.32,1.16 0.39,1.75c0.05,0.54 0.07,1.08 0.04,1.61c-0.04,0.52 -0.21,1.02 -0.39,1.5c-0.18,0.51 -0.52,0.9 -0.91,1.27c-0.38,0.36 -0.77,0.71 -1.19,1.02c-1.8,1.2 -3.19,2.19 -5.16,2.53c-0.47,0.07 -0.94,0.12 -1.42,0.11c-0.47,-0.02 -0.92,-0.13 -1.37,-0.25c-0.42,-0.12 -0.83,-0.28 -1.21,-0.5c-0.4,-0.28 -0.77,-0.59 -1.12,-0.92c-0.39,-0.35 -0.7,-0.77 -1,-1.19c-0.32,-0.43 -0.59,-0.9 -0.81,-1.38c-0.2,-0.47 -0.38,-0.95 -0.53,-1.44c-0.13,-0.42 -0.19,-0.86 -0.21,-1.3c-0.02,-0.43 0.07,-0.86 0.17,-1.28c0.09,-0.4 0.24,-0.78 0.43,-1.15c0.18,-0.36 0.43,-0.68 0.69,-0.99c0.19,-0.22 0.42,-0.41 0.65,-0.6l3.77,-1.52c-0.22,0.19 -0.46,0.36 -0.67,0.56c-0.29,0.26 -0.52,0.57 -0.74,0.89c-0.19,0.33 -0.37,0.67 -0.47,1.05c-0.1,0.39 -0.21,0.79 -0.21,1.19c-0.01,0.41 0.04,0.81 0.15,1.2c0.14,0.47 0.32,0.93 0.5,1.39c0.21,0.46 0.47,0.9 0.77,1.32c0.29,0.4 0.59,0.79 0.96,1.11c0.33,0.3 0.68,0.6 1.07,0.84c0.37,0.18 0.76,0.32 1.16,0.42c0.42,0.1 0.86,0.17 1.3,0.16c0.46,-0.03 0.93,-0.06 1.38,-0.17c1.54,-0.34 3.97,-1.91 -1.86,1.4c0.44,-0.28 0.84,-0.61 1.22,-0.96c0.37,-0.33 0.77,-0.65 0.97,-1.12c0.21,-0.43 0.36,-0.9 0.45,-1.37c0.06,-0.52 0.03,-1.03 0,-1.54c-0.06,-0.57 -0.16,-1.13 -0.34,-1.67c-0.22,-0.58 -0.49,-1.12 -0.88,-1.6c-0.42,-0.52 -0.85,-1.06 -1.42,-1.42c-0.64,-0.4 -1.3,-0.78 -2.01,-1.05c-0.79,-0.3 -1.61,-0.5 -2.46,-0.55c-0.94,-0.07 -1.88,-0.06 -2.82,0.1c-0.99,0.16 -1.96,0.38 -2.89,0.77c-0.91,0.36 -1.8,0.76 -2.66,1.2c-0.83,0.41 -1.66,0.8 -2.48,1.21c-0.68,0.34 -1.36,0.68 -2.04,1c-0.47,0.21 -0.95,0.4 -1.43,0.58l3.2,-2.5z" fill="#330080" id="path5045"/>
     <path d="m732.78,525.7c0.3,-0.28 0.61,-0.56 0.92,-0.83c0.43,-0.34 0.87,-0.66 1.31,-0.99c0.53,-0.4 1.08,-0.76 1.64,-1.13c1.82,-1.09 3.62,-2.22 5.55,-3.12c0.85,-0.4 1.72,-0.76 2.6,-1.09c1.02,-0.38 2.08,-0.68 3.13,-0.97c1.15,-0.32 2.31,-0.59 3.48,-0.81c1.22,-0.24 2.45,-0.37 3.69,-0.46c1.22,-0.09 2.45,-0.1 3.68,-0.06c1.16,0.05 2.31,0.21 3.45,0.44c1.1,0.23 2.18,0.55 3.24,0.93c1.05,0.4 2.07,0.91 3.08,1.42c1.02,0.5 1.99,1.08 2.97,1.66c0.99,0.6 1.98,1.19 2.97,1.78c1.05,0.61 2.1,1.22 3.16,1.82c1.08,0.58 2.16,1.17 3.25,1.73c1.12,0.59 2.26,1.12 3.42,1.64c1.13,0.5 2.28,0.97 3.44,1.43c1.13,0.46 2.31,0.81 3.49,1.15c1.2,0.33 2.41,0.59 3.63,0.81c1.2,0.22 2.42,0.34 3.63,0.46c1.23,0.1 2.46,0.13 3.69,0.09c1.26,-0.05 2.51,-0.2 3.76,-0.38c1.25,-0.18 2.48,-0.47 3.69,-0.81c1.27,-0.35 2.51,-0.79 3.74,-1.26c1.18,-0.44 2.35,-0.89 3.48,-1.45c1.22,-0.69 3.78,-2.09 -1.74,1.01c-0.19,0.11 0.39,-0.23 0.58,-0.35c0.52,-0.33 0.61,-0.4 1.12,-0.75c1.14,-0.75 2.14,-1.66 3.05,-2.66c0.93,-1.09 1.65,-2.33 2.32,-3.6c0.68,-1.28 1.19,-2.64 1.64,-4.01c0.51,-1.46 0.75,-2.98 0.93,-4.52c0.18,-1.58 0.2,-3.17 0.18,-4.76c-0.02,-1.57 -0.18,-3.14 -0.43,-4.69c-0.26,-1.57 -0.74,-3.08 -1.23,-4.58c-0.48,-1.46 -1.1,-2.87 -1.78,-4.25c-0.66,-1.33 -1.52,-2.54 -2.44,-3.7c-0.94,-1.15 -2.01,-2.19 -3.13,-3.16c-1.09,-0.94 -2.29,-1.76 -3.51,-2.52c-1.2,-0.72 -2.48,-1.28 -3.79,-1.78c-1.25,-0.48 -2.55,-0.82 -3.87,-1.07c-1.33,-0.27 -2.69,-0.33 -4.04,-0.32c-1.35,0 -2.7,0.15 -4.04,0.34c-1.36,0.2 -2.68,0.61 -3.99,1.03c-1.28,0.42 -2.53,0.95 -3.76,1.51c0.7,-0.55 -3.15,1.73 -2.37,1.28c3.09,-1.77 3.83,-2.23 2.33,-1.32c-1.14,0.65 -2.14,1.49 -3.04,2.42c-0.9,0.97 -1.62,2.07 -2.29,3.2c-0.61,1.07 -1.1,2.19 -1.56,3.33c-0.41,1.04 -0.72,2.11 -0.97,3.2c-0.24,1.07 -0.3,2.17 -0.34,3.27c-0.05,1.08 0.11,2.16 0.29,3.22c0.18,1.04 0.49,2.05 0.82,3.06c0.33,0.94 0.7,1.87 1.12,2.78c0.41,0.9 0.91,1.76 1.44,2.59c0.55,0.84 1.17,1.62 1.81,2.38c0.63,0.75 1.35,1.42 2.09,2.05c0.74,0.64 1.55,1.19 2.37,1.71c0.8,0.5 1.65,0.91 2.51,1.29c0.84,0.37 1.72,0.64 2.6,0.88c0.86,0.22 1.73,0.4 2.61,0.5c0.89,0.08 1.79,0.05 2.68,-0.02c0.88,-0.06 1.76,-0.18 2.63,-0.29c0.86,-0.13 1.72,-0.32 2.56,-0.55c0.86,-0.25 1.7,-0.59 2.54,-0.93c0.82,-0.35 1.61,-0.74 2.37,-1.19c-6.02,3.65 -2.49,1.45 -1.19,0.43c0.73,-0.58 1.38,-1.25 1.99,-1.95c0.61,-0.71 1.16,-1.47 1.7,-2.24c0.52,-0.75 0.95,-1.57 1.37,-2.38c0.42,-0.8 0.74,-1.66 1.01,-2.53c0.25,-0.86 0.49,-1.72 0.65,-2.6c0.15,-0.92 0.15,-1.85 0.1,-2.77c-0.04,-0.93 -0.16,-1.84 -0.35,-2.74c-0.21,-0.89 -0.54,-1.75 -0.94,-2.57c-0.41,-0.82 -0.9,-1.61 -1.41,-2.37c-0.5,-0.74 -1.07,-1.42 -1.68,-2.06c-0.64,-0.65 -1.35,-1.22 -2.07,-1.77c-0.69,-0.54 -1.43,-1 -2.2,-1.41c-0.78,-0.4 -1.62,-0.64 -2.46,-0.87c-0.81,-0.24 -1.62,-0.42 -2.45,-0.52c-0.82,-0.07 -1.64,-0.03 -2.45,0.04c-0.77,0.03 -1.51,0.22 -2.25,0.45c-0.71,0.24 -1.41,0.52 -2.08,0.86c-2.85,1.78 5.01,-3.23 1.63,-0.86c-0.57,0.42 -1.12,0.86 -1.65,1.33c-0.52,0.46 -1,0.95 -1.47,1.46c-0.46,0.51 -0.88,1.05 -1.27,1.61c-0.4,0.57 -0.73,1.19 -1.03,1.81c-0.3,0.64 -0.51,1.31 -0.7,1.98c-0.2,0.7 -0.27,1.42 -0.3,2.14c-0.04,0.73 0.04,1.47 0.13,2.19c0.1,0.73 0.29,1.44 0.51,2.13c0.23,0.71 0.52,1.4 0.83,2.07c0.3,0.69 0.72,1.31 1.18,1.9c0.49,0.61 1.04,1.17 1.61,1.7c0.54,0.49 1.13,0.91 1.75,1.28c0.54,0.34 1.12,0.61 1.73,0.81c0.54,0.19 1.11,0.32 1.68,0.41c0.57,0.09 1.15,0.02 1.72,-0.1c0.58,-0.1 1.15,-0.23 1.71,-0.42c0.56,-0.2 1.07,-0.46 1.59,-0.75c-5.8,3.45 -2.95,1.87 -1.84,0.72c0.46,-0.47 0.81,-1.02 1.14,-1.59c0.32,-0.61 0.55,-1.25 0.77,-1.89c0.21,-0.63 0.32,-1.28 0.37,-1.93c0.04,-0.68 -0.02,-1.36 -0.09,-2.03c-0.06,-0.65 -0.21,-1.28 -0.4,-1.9c-0.2,-0.61 -0.47,-1.18 -0.78,-1.74c-0.29,-0.53 -0.67,-0.99 -1.06,-1.44c-0.36,-0.41 -0.79,-0.74 -1.23,-1.06c-0.38,-0.27 -0.8,-0.49 -1.24,-0.66c-0.34,-0.13 -0.71,-0.2 -1.08,-0.24c-0.3,-0.01 -0.61,0.02 -0.91,0.1c-1.28,0.5 -3.5,1.96 2.57,-1.52c-0.3,0.19 -0.56,0.44 -0.81,0.7c-0.22,0.25 -0.4,0.52 -0.58,0.79c-0.2,0.28 -0.32,0.6 -0.43,0.92c-0.13,0.33 -0.19,0.68 -0.25,1.02c-0.07,0.33 -0.09,0.65 -0.06,0.98c0.03,0.33 0.11,0.64 0.25,0.94c0.17,0.31 0.35,0.62 0.55,0.91c0.22,0.31 0.45,0.63 0.7,0.92c0.17,0.19 0.08,0.09 0.25,0.28l-3.47,2.11c-0.18,-0.2 -0.09,-0.1 -0.26,-0.3c-0.26,-0.31 -0.49,-0.63 -0.72,-0.95c-0.21,-0.31 -0.41,-0.63 -0.58,-0.97c-0.16,-0.33 -0.28,-0.68 -0.32,-1.05c-0.06,-0.36 -0.06,-0.73 0.01,-1.09c0.06,-0.36 0.11,-0.73 0.22,-1.08c0.11,-0.33 0.21,-0.69 0.39,-1c0.17,-0.29 0.35,-0.57 0.56,-0.84c0.22,-0.3 0.48,-0.58 0.78,-0.81c1.13,-0.66 2.82,-2.09 4.45,-2.41c0.33,-0.03 0.66,-0.06 0.99,0.01c0.38,0.07 0.77,0.17 1.13,0.33c0.45,0.2 0.89,0.44 1.29,0.74c0.45,0.34 0.89,0.7 1.27,1.13c0.41,0.48 0.8,0.97 1.11,1.52c0.32,0.58 0.6,1.18 0.81,1.81c0.21,0.64 0.37,1.29 0.44,1.97c0.09,0.69 0.14,1.39 0.13,2.09c-0.04,0.69 -0.13,1.37 -0.33,2.02c-0.21,0.67 -0.44,1.33 -0.75,1.96c-0.31,0.59 -0.64,1.18 -1.09,1.69c-1.36,1.57 -3.19,2.39 -5.06,3.39c-0.53,0.27 -1.07,0.51 -1.64,0.68c-0.57,0.16 -1.16,0.29 -1.75,0.38c-0.59,0.08 -1.2,0.11 -1.79,-0.01c-0.59,-0.12 -1.17,-0.26 -1.72,-0.47c-0.62,-0.24 -1.22,-0.52 -1.78,-0.88c-0.63,-0.4 -1.23,-0.84 -1.78,-1.35c-0.59,-0.55 -1.15,-1.13 -1.65,-1.76c-0.48,-0.61 -0.91,-1.26 -1.22,-1.97c-0.33,-0.69 -0.63,-1.39 -0.86,-2.12c-0.23,-0.71 -0.43,-1.44 -0.55,-2.19c-0.1,-0.75 -0.18,-1.5 -0.16,-2.25c0.02,-0.75 0.08,-1.5 0.26,-2.22c0.19,-0.7 0.38,-1.39 0.67,-2.05c0.3,-0.64 0.6,-1.28 1,-1.86c0.38,-0.59 0.8,-1.14 1.25,-1.67c0.46,-0.53 0.95,-1.02 1.45,-1.5c0.53,-0.48 1.08,-0.93 1.64,-1.36c1.66,-1.23 3.49,-2.2 5.31,-3.16c0.69,-0.32 1.39,-0.6 2.12,-0.82c0.75,-0.21 1.52,-0.33 2.3,-0.37c0.83,-0.06 1.67,-0.08 2.5,0.03c0.84,0.12 1.66,0.32 2.48,0.56c0.86,0.25 1.71,0.52 2.51,0.95c0.78,0.42 1.53,0.91 2.23,1.46c0.74,0.57 1.46,1.15 2.11,1.82c0.62,0.67 1.2,1.37 1.71,2.12c0.52,0.78 1.02,1.58 1.44,2.42c0.41,0.85 0.76,1.74 0.98,2.66c0.21,0.92 0.34,1.85 0.39,2.79c0.06,0.95 0.07,1.91 -0.06,2.85c-0.15,0.9 -0.38,1.78 -0.63,2.65c-0.26,0.89 -0.57,1.77 -0.98,2.6c-0.42,0.82 -0.84,1.65 -1.35,2.42c-0.54,0.78 -1.09,1.55 -1.69,2.29c-0.6,0.72 -1.23,1.41 -1.96,2.02c-1.74,1.44 -3.7,2.55 -5.7,3.61c-0.78,0.43 -1.58,0.82 -2.41,1.15c-0.84,0.34 -1.7,0.66 -2.58,0.9c-0.85,0.21 -1.71,0.39 -2.58,0.5c-0.88,0.11 -1.76,0.21 -2.65,0.27c-0.9,0.05 -1.82,0.07 -2.72,-0.04c-0.9,-0.13 -1.78,-0.31 -2.65,-0.55c-0.89,-0.26 -1.78,-0.55 -2.63,-0.93c-0.87,-0.39 -1.73,-0.82 -2.54,-1.34c-0.84,-0.54 -1.65,-1.11 -2.4,-1.76c-0.76,-0.65 -1.49,-1.34 -2.13,-2.1c-0.65,-0.78 -1.28,-1.58 -1.83,-2.43c-0.55,-0.85 -1.05,-1.73 -1.48,-2.64c-0.42,-0.92 -0.8,-1.87 -1.13,-2.82c-0.34,-1.02 -0.66,-2.05 -0.85,-3.11c-0.2,-1.09 -0.36,-2.19 -0.33,-3.3c0.04,-1.12 0.09,-2.24 0.31,-3.34c0.23,-1.1 0.55,-2.19 0.94,-3.26c0.46,-1.15 0.95,-2.29 1.54,-3.38c0.66,-1.15 1.37,-2.28 2.25,-3.28c0.89,-0.97 1.86,-1.86 3,-2.52c2.27,-1.4 4.57,-2.77 6.97,-3.93c1.24,-0.54 2.5,-1.06 3.79,-1.47c1.32,-0.42 2.66,-0.79 4.04,-0.97c1.35,-0.18 2.7,-0.31 4.07,-0.3c1.37,0 2.73,0.1 4.08,0.39c1.33,0.27 2.64,0.63 3.91,1.13c1.32,0.51 2.62,1.09 3.83,1.84c1.24,0.78 2.44,1.61 3.55,2.57c1.13,0.99 2.21,2.05 3.16,3.22c0.94,1.18 1.81,2.42 2.48,3.78c0.69,1.39 1.32,2.82 1.82,4.3c0.49,1.52 0.97,3.05 1.25,4.63c0.26,1.57 0.43,3.16 0.46,4.75c0.02,1.6 0.01,3.21 -0.17,4.81c-0.16,1.55 -0.38,3.1 -0.88,4.58c-0.45,1.4 -0.95,2.78 -1.62,4.08c-0.65,1.28 -1.37,2.55 -2.28,3.68c-0.88,1.04 -1.87,1.98 -3,2.76c-2.19,1.52 -4.51,2.84 -6.88,4.08c-1.14,0.53 -2.32,0.98 -3.5,1.42c-1.24,0.46 -2.49,0.89 -3.76,1.23c-1.23,0.32 0,4629 0.6,-3.72c0.77,-1.26 0.17,-2.52 0.32,-3.79c0.34,-1.25 0.02,-2.49 -0.02,-3.72c-0.13,-1.22 -0.12,-2.44 -0.26,-3.65c-0.48,-1.23 -0.23,-2.45 -0.5,-3.66c-0.85,-1.18 -0.35,-2.36 -0.72,-3.51c-1.19,-1.16 -0.46,-2.31 -0.93,-3.45c-1.45,-1.15 -0.53,-2.3 -1.07,-3.42c-1.66,-1.1 -0.56,-2.19 -1.15,-3.27c-1.75,-1.06 -0.6,-2.11 -1.21,-3.16c-1.83,-1 -0.59,-1.98 -1.19,-2.98c-1.77,-0.97 -0.57,-1.94 -1.15,-2.95c-1.64,-1 -0.49,-2 -0.99,-3.05c-1.37,-1.05 -0.36,-2.11 -0.67,-3.2c-0.89,-1.13 -0.21,-2.27 -0.36,-3.42c-0.39,-1.22 -0.02,-2.44 -0.01,-3.65c0.1,-1.23 0.11,-2.45 0.24,-3.66c0.49,-1.16 0.24,-2.32 0.52,-3.46c0.83,-1.05 0.29,-2.1 0.61,-3.12c1,-0.87 0.34,-1.73 0.71,-2.58c1.12,-0.37 0.18,-0.74 0.37,-1.11c0.58,-0.11 0.07,-0.44 0.26,-0.33c0.19,3.55 -2.06,4.16 -2.42,2.83c-1.64,-0.56 0.35,-1.11 0.71,-1.64c1.1,-0.44 0.32,-0.87 0.65,-1.31c0.97,-0.32 0.26,-0.64 0.51,-0.93c0.8,0 0,0 0,0l-3.76,1.54l-62.76,61.2z" fill="#330080" id="path5047"/>
     <path d="m836.48,526.99c0.53,-0.14 1.06,-0.23 1.6,-0.31c0.79,-0.13 1.58,-0.19 2.38,-0.22c0.98,-0.01 1.95,0.08 2.92,0.2c1.11,0.15 2.19,0.43 3.26,0.74c1.24,0.37 2.45,0.83 3.63,1.36c1.39,0.63 2.71,1.38 4.04,2.12c1.39,0.8 2.77,1.62 4.15,2.46c1.43,0.87 2.88,1.73 4.32,2.59c1.42,0.83 2.82,1.68 4.23,2.53c1.37,0.84 2.74,1.67 4.1,2.51c1.3,0.82 2.61,1.62 3.93,2.4c1.34,0.78 2.69,1.53 4.04,2.28c1.31,0.74 2.64,1.44 3.98,2.11c1.35,0.67 2.73,1.25 4.12,1.8c1.36,0.55 2.74,1.07 4.13,1.53c1.35,0.47 2.75,0.78 4.16,1.02c1.44,0.24 2.9,0.33 4.36,0.38c1.41,0.06 2.81,0.01 4.2,-0.21c1.43,-0.24 2.8,-0.7 4.12,-1.27c1.23,-0.63 4.06,-2.05 -1.46,0.9c-0.23,0.12 0.44,-0.29 0.65,-0.45c0.6,-0.43 0.73,-0.55 1.3,-1.03c1.36,-1.14 2.47,-2.52 3.45,-3.99c1,-1.54 1.79,-3.22 2.53,-4.9c0.71,-1.63 1.27,-3.32 1.77,-5.03c0.45,-1.57 0.75,-3.18 0.89,-4.81c0.14,-1.57 0,-3.15 -0.21,-4.71c-0.22,-1.51 -0.65,-2.98 -1.14,-4.42c-0.48,-1.36 -1.14,-2.63 -1.85,-3.87c-0.7,-1.18 -1.53,-2.27 -2.41,-3.32c-0.82,-0.98 -1.72,-1.89 -2.65,-2.76c-0.83,-0.82 -1.79,-1.46 -2.78,-2.06c-0.93,-0.55 -1.88,-1.02 -2.91,-1.33c-0.94,-0.28 -1.91,-0.41 -2.88,-0.47c-0.94,-0.05 -1.86,0.13 -2.75,0.42c0.99,-0.73 -2.64,1.33 -1.66,0.76c3.46,-1.99 4.04,-2.37 2.69,-1.51c-0.8,0.53 -1.51,1.19 -2.18,1.87c-0.75,0.74 -1.32,1.64 -1.86,2.55c-0.55,0.98 -1.01,2 -1.4,3.06c-0.42,1.15 -0.65,2.37 -0.82,3.58c-0.18,1.27 -0.24,2.55 -0.22,3.83c0.05,1.29 0.27,2.57 0.5,3.84c0.23,1.23 0.51,2.45 0.86,3.64c0.38,1.18 0.94,2.28 1.54,3.35c0.55,1.02 1.19,1.99 1.87,2.94c0.62,0.85 1.34,1.62 2.11,2.33c0.72,0.63 1.53,1.12 2.38,1.55c0.75,0.37 1.54,0.63 2.35,0.79c0.75,0.13 1.5,0.16 2.25,0.09c-0.41,0.52 1.87,-0.87 1.27,-0.54c-3.09,1.75 -4.16,2.53 -2.86,1.6c0.59,-0.46 1.07,-1.04 1.49,-1.66c0.39,-0.61 0.68,-1.29 0.9,-1.98c0.21,-0.65 0.28,-1.33 0.29,-2.02c-0.01,-0.73 -0.13,-1.46 -0.28,-2.18c-0.16,-0.74 -0.37,-1.47 -0.63,-2.19c-0.26,-0.68 -0.61,-1.34 -0.97,-1.97c-0.35,-0.61 -0.79,-1.17 -1.24,-1.7c-0.42,-0.5 -0.87,-0.97 -1.35,-1.41c-0.41,-0.35 -0.85,-0.68 -1.31,-0.96c-0.34,-0.21 -0.71,-0.32 -1.11,-0.35c-0.33,-0.04 -0.64,0.05 -0.95,0.16c-2,1.21 4.24,-2.75 2.41,-1.3c-0.26,0.21 -0.46,0.48 -0.65,0.75c-0.12,0.19 -0.23,0.39 -0.32,0.6l-3.7,1.69c0.1,-0.22 0.18,-0.45 0.31,-0.65c0.17,-0.3 0.36,-0.6 0.6,-0.86c1.26,-1.25 2.89,-2.16 4.57,-2.71c0.35,-0.08 0.7,-0.08 1.05,-0.02c0.43,0.09 0.83,0.25 1.2,0.49c0.47,0.32 0.93,0.65 1.35,1.03c0.49,0.45 0.95,0.93 1.37,1.45c0.47,0.56 0.92,1.13 1.28,1.76c0.38,0.66 0.73,1.33 1,2.04c0.27,0.73 0.49,1.48 0.66,2.24c0.17,0.73 0.29,1.49 0.31,2.24c0.02,0.73 -0.03,1.44 -0.22,2.14c-0.21,0.73 -0.49,1.42 -0.86,2.08c-0.39,0.66 -0.88,1.26 -1.44,1.79c-1.55,1.26 -3.4,2.54 -5.43,2.84c-0.78,0.03 -1.55,-0.02 -2.31,-0.18c-0.84,-0.2 -1.65,-0.48 -2.42,-0.88c-0.86,-0.46 -1.7,-0.98 -2.43,-1.64c-0.79,-0.74 -1.52,-1.53 -2.15,-2.41c-0.69,-0.96 -1.33,-1.94 -1.9,-2.97c-0.6,-1.11 -1.18,-2.23 -1.57,-3.43c-0.37,-1.21 -0.65,-2.44 -0.88,-3.68c-0.24,-1.29 -0.47,-2.59 -0.53,-3.9c-0.03,-1.3 0.02,-2.6 0.19,-3.88c0.17,-1.24 0.37,-2.48 0.77,-3.67c0.38,-1.07 0.83,-2.11 1.38,-3.11c0.52,-0.94 1.08,-1.87 1.82,-2.65c0.66,-0.7 1.36,-1.38 2.14,-1.95c1.84,-1.28 3.81,-2.47 5.95,-3.2c0.92,-0.24 1.87,-0.38 2.83,-0.29c0.99,0.08 1.98,0.24 2.94,0.54c1.04,0.35 2.01,0.85 2.95,1.42c1.01,0.62 1.99,1.29 2.83,2.13c0.94,0.89 1.84,1.81 2.68,2.8c0.88,1.08 1.73,2.18 2.44,3.38c0.72,1.27 1.39,2.56 1.87,3.94c0.52,1.46 0.95,2.96 1.18,4.5c0.22,1.58 0.38,3.18 0.26,4.79c-0.13,1.65 -0.41,3.28 -0.86,4.88c-0.49,1.72 -1.05,3.42 -1.75,5.07c-0.73,1.7 -1.52,3.39 -2.51,4.97c-0.96,1.5 -2.04,2.92 -3.4,4.09c-2.19,1.92 -4.73,3.39 -7.39,4.58c-1.35,0.55 -2.74,0.98 -4.18,1.19c-1.41,0.19 -2.82,0.22 -4.24,0.16c-1.47,-0.06 -2.94,-0.17 -4.39,-0.43c-1.42,-0.26 -2.83,-0.59 -4.2,-1.07c-1.39,-0.47 -2.77,-0.99 -4.14,-1.54c-1.39,-0.57 -2.78,-1.16 -4.13,-1.84c-1.35,-0.67 -2.68,-1.37 -4,-2.12c-1.35,-0.76 -2.7,-1.5 -4.04,-2.29c-1.32,-0.78 -2.63,-1.59 -3.93,-2.41c-1.37,-0.84 -2.74,-1.67 -4.11,-2.5c-1.4,-0.85 -2.81,-1.7 -4.22,-2.53c-1.44,-0.86 -2.89,-1.72 -4.32,-2.6c-1.38,-0.83 -2.75,-1.65 -4.15,-2.44c-1.32,-0.74 -2.64,-1.48 -4.02,-2.09c-1.17,-0.51 -2.37,-0.96 -3.6,-1.31c-1.06,-0.29 -2.13,-0.56 -3.23,-0.68c-0.96,-0.1 -1.92,-0.18 -2.89,-0.14c-0.79,0.04 -1.57,0.12 -2.35,0.26c-0.53,0.09 -1.06,0.19 -1.57,0.36l3.21,-2.49z" fill="#330080" id="path5049"/>
     <path d="m843.01,509.09c0.43,-0.16 0.85,-0.34 1.27,-0.53c0.47,-0.26 0.95,-0.5 1.42,-0.77c-6.09,3.55 -3.16,1.87 -1.82,0.97c0.59,-0.39 1.16,-0.8 1.73,-1.22c0.58,-0.42 1.15,-0.85 1.7,-1.3c0.58,-0.51 1.12,-1.08 1.67,-1.65c0.6,-0.64 1.23,-1.26 1.86,-1.89c0.7,-0.71 1.41,-1.42 2.15,-2.11c0.81,-0.73 1.65,-1.44 2.49,-2.16c0.83,-0.71 1.67,-1.42 2.52,-2.11c0.86,-0.69 1.76,-1.34 2.68,-1.96c2.05,-1.31 4.17,-2.51 6.31,-3.67c0.95,-0.5 1.88,-1.02 2.84,-1.51c0.88,-0.47 1.85,-0.75 2.82,-0.99c0.92,-0.22 1.86,-0.33 2.8,-0.35c0.88,-0.04 1.74,0.07 2.59,0.29c0.83,0.22 1.61,0.6 2.37,1c0.76,0.4 1.45,0.9 2.09,1.46c0.62,0.56 1.17,1.19 1.64,1.89c0.45,0.72 0.8,1.5 1.09,2.3c0.3,0.82 0.47,1.68 0.6,2.54c0.12,0.94 0.1,1.88 0.06,2.82c-0.04,0.97 -0.15,1.94 -0.32,2.9c-0.2,1 -0.45,1.98 -0.73,2.96c-0.3,0.99 -0.66,1.96 -1.02,2.92c-0.36,0.97 -0.84,1.88 -1.38,2.74c-0.56,0.89 -1.26,1.67 -1.99,2.41c-0.74,0.74 -1.59,1.37 -2.45,1.97c-1.98,1.24 -3.95,2.53 -6.12,3.41c-0.96,0.34 -1.95,0.59 -2.95,0.8c-0.96,0.23 -1.95,0.27 -2.94,0.29c-0.92,0.03 -1.83,-0.06 -2.72,-0.24c-0.82,-0.16 -1.6,-0.42 -2.36,-0.77c-0.75,-0.35 -1.39,-0.88 -2,-1.43c-0.61,-0.55 -1.08,-1.22 -1.47,-1.93c-0.37,-0.72 -0.59,-1.49 -0.75,-2.27c-0.16,-0.79 -0.2,-1.58 -0.19,-2.38c0,-0.78 0.1,-1.56 0.26,-2.32c0.16,-0.76 0.45,-1.49 0.76,-2.2c0.31,-0.73 0.73,-1.4 1.18,-2.04c0.46,-0.64 0.98,-1.23 1.52,-1.8c0.54,-0.58 1.13,-1.12 1.73,-1.64c1.6,-1.37 3.51,-2.28 5.33,-3.33c0.62,-0.31 1.29,-0.47 1.97,-0.6c0.62,-0.12 1.25,-0.13 1.88,-0.09c0.56,0.05 1.12,0.13 1.66,0.3c0.46,0.13 0.9,0.36 1.3,0.63c0.38,0.23 0.7,0.53 0.98,0.88c0.27,0.34 0.45,0.72 0.6,1.13c0.15,0.4 0.21,0.82 0.28,1.23c0.07,0.46 0.05,0.92 0,1.38c-0.04,0.53 -0.22,1.03 -0.44,1.52c-0.23,0.51 -0.53,0.98 -0.86,1.43c-0.31,0.42 -0.68,0.8 -1.07,1.16c-1.4,1.23 -3.21,2.01 -4.79,2.9c-0.46,0.23 -0.96,0.37 -1.46,0.49c-0.43,0.09 -0.86,0.1 -1.3,0.06c-0.39,-0.05 -0.76,-0.13 -1.13,-0.28c-0.37,-0.14 -0.68,-0.4 -1,-0.63c-0.32,-0.25 -0.61,-0.54 -0.85,-0.87c-0.15,-0.21 -0.08,-0.1 -0.22,-0.31l3.5,-2.06c0.14,0.2 0.07,0.1 0.21,0.3c0.22,0.29 0.49,0.55 0.79,0.77c0.29,0.21 0.58,0.42 0.94,0.52c0.34,0.11 0.7,0.18 1.06,0.19c0.41,0.01 0.82,-0.05 1.22,-0.16c0.49,-0.14 0.96,-0.32 1.41,-0.55c-5.91,3.44 -3.31,2.08 -2.14,1.16c0.39,-0.34 0.78,-0.68 1.1,-1.09c0.34,-0.42 0.66,-0.87 0.9,-1.36c0.23,-0.44 0.43,-0.89 0.5,-1.39c0.05,-0.42 0.09,-0.85 0.04,-1.27c-0.06,-0.4 -0.11,-0.8 -0.24,-1.17c-0.13,-0.37 -0.29,-0.71 -0.54,-1.01c-0.26,-0.31 -0.56,-0.57 -0.9,-0.78c-0.39,-0.23 -0.8,-0.42 -1.24,-0.53c-0.52,-0.12 -1.06,-0.2 -1.6,-0.22c-0.61,-0.01 -1.22,0.03 -1.82,0.17c-0.66,0.15 -1.3,0.36 -1.89,0.7c6.11,-3.56 2.83,-1.78 1.58,-0.74c-0.62,0.5 -1.21,1.03 -1.75,1.6c-0.55,0.55 -1.07,1.13 -1.54,1.75c-0.47,0.61 -0.89,1.26 -1.21,1.96c-0.31,0.69 -0.62,1.39 -0.81,2.13c-0.16,0.74 -0.28,1.49 -0.29,2.25c-0.02,0.77 0.01,1.54 0.15,2.29c0.15,0.75 0.35,1.49 0.7,2.17c0.36,0.68 0.81,1.31 1.39,1.81c0.59,0.52 1.21,1.01 1.94,1.33c0.74,0.32 1.5,0.55 2.3,0.69c0.88,0.15 1.77,0.21 2.67,0.17c0.97,-0.03 1.94,-0.11 2.89,-0.34c0.99,-0.23 1.97,-0.49 2.9,-0.87c0.44,-0.2 0.47,-0.2 0.9,-0.42c0.14,-0.08 0.58,-0.33 0.43,-0.24c-5.57,3.27 -3.36,1.96 -2.14,1.23c0.87,-0.57 1.72,-1.18 2.47,-1.9c0.74,-0.71 1.46,-1.46 2.03,-2.32c0.55,-0.84 1.05,-1.72 1.41,-2.66c0.37,-0.96 0.73,-1.92 1.04,-2.89c0.28,-0.97 0.53,-1.95 0.74,-2.93c0.18,-0.94 0.3,-1.89 0.35,-2.85c0.05,-0.92 0.08,-1.84 -0.03,-2.75c-0.12,-0.84 -0.27,-1.67 -0.56,-2.47c-0.28,-0.77 -0.61,-1.52 -1.05,-2.21c-0.45,-0.66 -0.97,-1.26 -1.58,-1.79c-0.62,-0.54 -1.3,-1.02 -2.03,-1.39c-0.75,-0.38 -1.51,-0.73 -2.32,-0.92c-0.83,-0.18 -1.67,-0.25 -2.52,-0.2c-0.93,0.05 -1.85,0.18 -2.75,0.42c-0.96,0.26 -1.9,0.58 -2.77,1.07c-0.94,0.49 -1.88,1.01 -2.83,1.51c-1.24,0.68 -3.53,2.01 2.02,-1.19c1.57,-0.91 -3,1.7 -1.42,0.85c-0.92,0.6 -1.82,1.24 -2.69,1.92c-0.86,0.68 -1.69,1.4 -2.53,2.1c-0.83,0.72 -1.66,1.43 -2.49,2.15c-0.74,0.68 -1.45,1.38 -2.16,2.09c-0.61,0.63 -1.25,1.24 -1.85,1.89c-0.55,0.57 -1.09,1.13 -1.66,1.68c-0.53,0.47 -1.1,0.9 -1.68,1.33c-0.57,0.42 -1.14,0.84 -1.72,1.23c-1.65,1.12 -3.35,2.13 -5.12,3.06c-0.47,0.25 -0.95,0.51 -1.44,0.74c-0.43,0.19 -0.86,0.36 -1.31,0.49l3.22,-2.48z" fill="#330080" id="path5051"/>
     <path d="m909.51,569.65c1.48,-1.11 3.1,-2.1 4.83,-2.77c0.49,-0.19 1,-0.3 1.52,-0.37c0.53,-0.1 1.06,-0.08 1.59,0.01c0.6,0.11 1.16,0.31 1.71,0.57c0.62,0.31 1.15,0.76 1.65,1.23c0.57,0.57 1.04,1.23 1.45,1.91c0.43,0.77 0.79,1.57 1.13,2.38c0.39,0.91 0.64,1.86 0.89,2.82c0.29,1.13 0.47,2.28 0.65,3.44c0.2,1.42 0.35,2.85 0.51,4.28c0.15,1.46 0.29,2.92 0.46,4.38c0.15,1.38 0.35,2.75 0.58,4.12c0.24,1.37 0.58,2.72 0.95,4.06c0.36,1.29 0.83,2.55 1.37,3.78c0.56,1.22 1.24,2.39 1.96,3.53c0.72,1.1 1.53,2.14 2.38,3.15c0.85,1.02 1.84,1.92 2.88,2.75c1.09,0.87 2.26,1.62 3.45,2.33c1.16,0.69 2.37,1.27 3.6,1.82c1.12,0.48 2.27,0.89 3.43,1.3c0.94,0.35 1.93,0.52 2.94,0.54c0.82,0 1.58,-0.26 2.33,-0.57c1.24,-0.68 3.18,-1.77 -2.52,1.45c-0.1,0.06 0.2,-0.12 0.3,-0.19c0.27,-0.19 0.31,-0.24 0.56,-0.46c0.58,-0.55 0.93,-1.27 1.25,-2c0.34,-0.83 0.55,-1.71 0.68,-2.6c0.12,-1 -0.03,-1.99 -0.25,-2.96c-0.25,-1.1 -0.69,-2.13 -1.12,-3.17c-0.47,-1.08 -1.03,-2.12 -1.62,-3.14c-0.62,-1.06 -1.39,-2.04 -2.15,-3c-0.74,-0.95 -1.54,-1.84 -2.37,-2.71c-0.78,-0.8 -1.62,-1.54 -2.49,-2.24c-0.74,-0.64 -1.58,-1.14 -2.44,-1.61c-0.74,-0.42 -1.52,-0.76 -2.32,-1.05c-0.66,-0.25 -1.35,-0.43 -2.06,-0.52c-0.58,-0.08 -1.17,-0.07 -1.76,0.03c-0.51,0.06 -1,0.21 -1.47,0.43c-2.1,1.34 4.67,-3.3 2.2,-1.13c-0.3,0.27 -0.5,0.62 -0.66,0.99c-0.17,0.37 -0.26,0.76 -0.31,1.17c-0.04,0.53 0.01,1.06 0.07,1.59c0.07,0.57 0.19,1.13 0.31,1.69c0.13,0.55 0.32,1.09 0.54,1.62c0.21,0.52 0.49,1 0.8,1.47c0.32,0.46 0.73,0.87 1.16,1.24c0.46,0.4 0.93,0.79 1.42,1.15c0.52,0.37 1.06,0.71 1.6,1.04c0.56,0.34 1.16,0.62 1.76,0.89c0.65,0.28 1.32,0.52 1.98,0.76c0.66,0.23 1.34,0.41 2.01,0.57c0.45,0.11 0.23,0.06 0.67,0.17l-3.34,2.3c-0.44,-0.11 -0.22,-0.05 -0.67,-0.17c-0.68,-0.17 -1.36,-0.35 -2.02,-0.6c-0.68,-0.25 -1.35,-0.5 -2.01,-0.79c-0.61,-0.28 -1.22,-0.57 -1.79,-0.93c-0.55,-0.34 -1.09,-0.69 -1.61,-1.07c-0.5,-0.37 -0.98,-0.77 -1.45,-1.18c-0.45,-0.4 -0.87,-0.83 -1.21,-1.33c-0.32,-0.49 -0.62,-1 -0.84,-1.54c-0.23,-0.54 -0.43,-1.1 -0.57,-1.68c-0.13,-0.57 -0.25,-1.15 -0.33,-1.73c-0.07,-0.55 -0.12,-1.11 -0.11,-1.66c0.03,-0.44 0.08,-0.87 0.25,-1.28c0.15,-0.41 0.32,-0.8 0.6,-1.14c1.25,-1.38 3.05,-2.17 4.73,-2.93c0.51,-0.18 1.02,-0.29 1.55,-0.35c0.6,-0.05 1.22,-0.04 1.82,0.07c0.72,0.13 1.42,0.32 2.1,0.59c0.81,0.32 1.6,0.66 2.35,1.1c0.87,0.49 1.72,1.02 2.48,1.67c0.87,0.72 1.72,1.47 2.51,2.28c0.83,0.89 1.64,1.79 2.39,2.75c0.77,0.98 1.54,1.97 2.17,3.05c0.61,1.03 1.18,2.09 1.65,3.19c0.45,1.05 0.89,2.11 1.17,3.22c0.23,1.02 0.4,2.05 0.31,3.09c-0.11,0.92 -0.3,1.83 -0.63,2.69c-0.31,0.77 -0.64,1.53 -1.18,2.16c-1.44,1.5 -3.42,2.37 -5.28,3.24c-0.78,0.29 -1.58,0.47 -2.42,0.43c-1.03,-0.06 -2.04,-0.27 -3.01,-0.64c-1.16,-0.41 -2.32,-0.84 -3.45,-1.33c-1.23,-0.56 -2.45,-1.16 -3.61,-1.86c-1.21,-0.73 -2.39,-1.49 -3.49,-2.37c-1.05,-0.86 -2.05,-1.77 -2.92,-2.82c-0.86,-1.02 -1.68,-2.08 -2.41,-3.2c-0.73,-1.15 -1.41,-2.34 -1.98,-3.58c-0.55,-1.25 -1.04,-2.52 -1.4,-3.83c-0.38,-1.35 -0.73,-2.71 -0.97,-4.09c-0.24,-1.38 -0.44,-2.76 -0.6,-4.15c-0.17,-1.46 -0.31,-2.92 -0.46,-4.38c-0.15,-1.42 -0.3,-2.85 -0.5,-4.26c-0.17,-1.14 -0.35,-2.29 -0.63,-3.41c-0.25,-0.93 -0.49,-1.87 -0.87,-2.76c-0.33,-0.79 -0.68,-1.58 -1.11,-2.33c-0.39,-0.65 -0.84,-1.27 -1.39,-1.81c-0.48,-0.44 -0.98,-0.85 -1.58,-1.12c-0.53,-0.22 -1.07,-0.4 -1.64,-0.47c-0.51,-0.04 -1.02,-0.01 -1.52,0.09c-0.5,0.1 -1,0.23 -1.47,0.45c-2.31,1.14 4.42,-2.61 2.13,-1.26l-3.77,1.51z" fill="#330080" id="path5053"/>
     <path d="m926.06,557.15c0.38,-0.09 0.77,-0.13 1.16,-0.12c0.47,0.02 0.9,0.14 1.33,0.31c0.54,0.24 0.99,0.62 1.42,1.01c0.49,0.45 0.92,0.96 1.31,1.49c0.4,0.57 0.78,1.16 1.15,1.74c0.4,0.61 0.82,1.21 1.23,1.81c0.45,0.66 0.96,1.27 1.49,1.85c0.58,0.62 1.25,1.13 1.94,1.62c0.72,0.5 1.47,0.95 2.24,1.36c0.7,0.38 1.45,0.63 2.2,0.89c0.68,0.23 1.37,0.4 2.08,0.49c0.75,0.05 1.51,0.05 2.26,0.01c0.78,-0.05 1.54,-0.21 2.3,-0.4c0.74,-0.17 1.46,-0.41 2.16,-0.72c-0.91,0.61 2.18,-1.15 1.32,-0.66c-3.3,1.9 -4.18,2.46 -2.85,1.62c0.63,-0.4 1.17,-0.9 1.67,-1.45c0.49,-0.56 0.92,-1.17 1.31,-1.81c0.38,-0.64 0.66,-1.33 0.91,-2.03c0.25,-0.71 0.4,-1.45 0.53,-2.19c0.12,-0.69 0.18,-1.39 0.21,-2.09c0.02,-0.66 -0.07,-1.31 -0.22,-1.95c-0.17,-0.65 -0.56,-1.19 -0.97,-1.71c-0.48,-0.6 -1.06,-1.1 -1.67,-1.57c-0.64,-0.48 -1.33,-0.91 -2.04,-1.28c-0.7,-0.32 -1.45,-0.53 -2.2,-0.66c-0.7,-0.12 -1.4,-0.12 -2.1,-0.04c-0.64,0.1 -1.26,0.29 -1.88,0.5c-3.1,1.66 4.2,-2.94 1.79,-0.99c-0.46,0.41 -0.8,0.94 -1.1,1.48c-0.3,0.54 -0.52,1.12 -0.72,1.7c-0.22,0.6 -0.37,1.23 -0.52,1.85c-0.15,0.58 -0.21,1.16 -0.25,1.75c-0.02,0.57 -0.02,1.14 0.03,1.71c0.05,0.51 0.2,0.99 0.37,1.47c0.16,0.44 0.37,0.86 0.62,1.26c0.23,0.34 0.47,0.68 0.75,0.98c0.23,0.25 0.51,0.44 0.8,0.61c0.28,0.13 0.59,0.22 0.9,0.28c0.33,0.01 0.66,0.01 0.99,-0.03c0.35,-0.03 0.69,-0.12 1.02,-0.23c0.32,-0.1 0.61,-0.26 0.9,-0.43c-5.75,3.36 -3.51,2.21 -2.42,1.18c0.22,-0.22 0.39,-0.47 0.53,-0.74c0.15,-0.31 0.26,-0.63 0.36,-0.95c0.12,-0.35 0.16,-0.7 0.18,-1.06c0.02,-0.37 -0.01,-0.74 -0.07,-1.1c-0.08,-0.37 -0.19,-0.74 -0.31,-1.09c-0.02,-0.06 -0.04,-0.12 -0.06,-0.18l3.55,-1.96c0.02,0.06 0.05,0.12 0.07,0.18c0.12,0.37 0.24,0.74 0.33,1.13c0.08,0.39 0.12,0.79 0.12,1.2c-0.02,0.38 -0.04,0.77 -0.13,1.14c-0.1,0.34 -0.22,0.67 -0.34,1c-0.13,0.31 -0.27,0.61 -0.48,0.86c-1.1,1.41 -3.37,1.86 -4.5,2.94c-0.3,0.15 -0.62,0.28 -0.95,0.36c-0.35,0.09 -0.71,0.15 -1.07,0.16c-0.35,0.02 -0.71,0.01 -1.06,-0.07c-0.34,-0.1 -0.67,-0.2 -0.97,-0.39c-0.32,-0.19 -0.61,-0.42 -0.86,-0.71c-0.29,-0.32 -0.55,-0.67 -0.79,-1.04c-0.26,-0.42 -0.49,-0.86 -0.66,-1.33c-0.18,-0.51 -0.34,-1.02 -0.42,-1.56c-0.06,-0.59 -0.07,-1.17 -0.05,-1.76c0.02,-0.61 0.07,-1.23 0.22,-1.82c0.14,-0.64 0.28,-1.27 0.49,-1.89c0.2,-0.6 0.41,-1.2 0.7,-1.76c0.3,-0.57 0.62,-1.13 1.05,-1.62c1.44,-1.39 3.3,-2.32 5.17,-3.02c0.63,-0.2 1.27,-0.36 1.93,-0.42c0.72,-0.05 1.45,-0.01 2.16,0.13c0.78,0.17 1.55,0.4 2.26,0.77c0.73,0.39 1.43,0.82 2.09,1.33c0.62,0.5 1.22,1.02 1.71,1.65c0.45,0.57 0.87,1.16 1.07,1.86c0.17,0.67 0.27,1.36 0.27,2.05c-0.02,0.72 -0.08,1.43 -0.19,2.14c-0.12,0.76 -0.27,1.52 -0.5,2.25c-0.24,0.72 -0.51,1.43 -0.88,2.1c-0.38,0.66 -0.79,1.3 -1.28,1.88c-0.48,0.58 -0.99,1.13 -1.62,1.55c-1.7,1.19 -3.53,2.21 -5.44,3.03c-0.71,0.28 -1.44,0.5 -2.19,0.67c-0.77,0.17 -1.56,0.31 -2.35,0.34c-0.77,0.01 -1.54,0.03 -2.3,-0.08c-0.72,-0.12 -1.43,-0.31 -2.13,-0.55c-0.76,-0.27 -1.52,-0.55 -2.23,-0.95c-0.78,-0.42 -1.53,-0.88 -2.26,-1.4c-0.71,-0.51 -1.4,-1.04 -1.99,-1.69c-0.55,-0.6 -1.07,-1.22 -1.52,-1.89c-0.42,-0.61 -0.84,-1.21 -1.24,-1.83c-0.37,-0.58 -0.74,-1.15 -1.14,-1.71c-0.38,-0.51 -0.79,-1 -1.26,-1.42c-0.41,-0.35 -0.83,-0.7 -1.35,-0.88c-0.4,-0.13 -0.81,-0.21 -1.23,-0.18c-0.38,0.03 -0.75,0.08 -1.12,0.18l3.23,-2.46z" fill="#330080" id="path5055"/>
     <path d="m904.12,492.14c0.43,0.08 0.84,0.26 1.24,0.45c0.51,0.23 1,0.48 1.48,0.76c0.55,0.33 1.07,0.72 1.59,1.1c0.59,0.44 1.16,0.9 1.76,1.34c0.67,0.5 1.35,0.97 2.06,1.42c0.73,0.44 1.49,0.85 2.27,1.22c0.7,0.37 1.44,0.63 2.21,0.79c0.77,0.11 1.55,0.09 2.33,0.03c0.79,-0.07 1.56,-0.28 2.32,-0.52c0.79,-0.22 1.52,-0.58 2.25,-0.93c0.12,-0.07 0.25,-0.13 0.37,-0.2c0.52,-0.27 0.23,-0.11 0.73,-0.4c0.12,-0.07 0.49,-0.28 0.37,-0.21c-3.62,2.09 -4.09,2.37 -2.74,1.57c0.72,-0.41 1.42,-0.85 2.1,-1.31c0.69,-0.48 1.36,-0.99 2.03,-1.51c0.72,-0.58 1.44,-1.17 2.16,-1.76c0.74,-0.62 1.49,-1.23 2.23,-1.86c0.73,-0.64 1.49,-1.23 2.25,-1.83c0.79,-0.62 1.61,-1.2 2.44,-1.75c1.92,-1.27 3.95,-2.37 5.94,-3.52c0.78,-0.44 1.6,-0.77 2.45,-1.02c0.77,-0.25 1.58,-0.34 2.39,-0.36c0.73,-0.04 1.42,0.11 2.11,0.34c0.68,0.26 1.26,0.72 1.81,1.18c0.59,0.51 1.05,1.14 1.46,1.79c0.42,0.71 0.72,1.47 0.97,2.25c0.27,0.85 0.41,1.74 0.51,2.63c0.1,1 0.03,2.02 -0.06,3.02c-0.08,1.08 -0.36,2.12 -0.68,3.14c-0.33,1.07 -0.77,2.09 -1.21,3.11c-0.45,1 -0.97,1.96 -1.49,2.91c-0.5,0.92 -1.06,1.81 -1.63,2.69c-0.55,0.83 -1.16,1.62 -1.84,2.35c-0.65,0.69 -1.35,1.33 -2.08,1.93c-0.7,0.57 -1.44,1.07 -2.19,1.56c-1.85,1.11 -3.67,2.29 -5.65,3.16c-0.66,0.3 -1.35,0.54 -2.07,0.7c-0.62,0.16 -1.26,0.21 -1.9,0.21c-0.57,-0.01 -1.12,-0.16 -1.66,-0.32c-0.49,-0.14 -0.95,-0.36 -1.41,-0.59c-0.43,-0.22 -0.82,-0.5 -1.18,-0.83c-0.38,-0.36 -0.64,-0.82 -0.89,-1.28c-0.26,-0.47 -0.47,-0.96 -0.65,-1.46c-0.17,-0.52 -0.28,-1.06 -0.34,-1.61c-0.06,-0.57 -0.08,-1.14 -0.06,-1.72c0.03,-0.61 0.14,-1.21 0.26,-1.8c0.13,-0.63 0.33,-1.25 0.54,-1.85c0.22,-0.64 0.48,-1.26 0.77,-1.86c0.35,-0.67 0.74,-1.31 1.16,-1.94c0.42,-0.64 0.92,-1.22 1.42,-1.8c0.52,-0.61 1.1,-1.16 1.7,-1.69c0.64,-0.57 1.31,-1.09 2,-1.58c1.85,-1.24 3.77,-2.38 5.78,-3.35c0.76,-0.37 1.53,-0.71 2.32,-1.02c0.71,-0.26 1.43,-0.45 2.16,-0.61c0.63,-0.14 1.28,-0.19 1.92,-0.15c0.58,0.03 1.11,0.16 1.62,0.44c0.45,0.25 0.84,0.56 1.13,0.97c0.27,0.45 0.34,0.96 0.33,1.47c-0.03,0.57 -0.2,1.11 -0.4,1.64c-0.22,0.55 -0.54,1.06 -0.88,1.54c-0.35,0.49 -0.77,0.92 -1.21,1.33c-0.44,0.41 -0.93,0.78 -1.42,1.13c-0.48,0.37 -0.97,0.73 -1.48,1.06c-1.67,1.04 -3.4,1.98 -5.11,2.95c-0.6,0.32 -1.18,0.67 -1.77,1c-0.11,0.06 -0.42,0.23 -0.32,0.17c10.64,-6.15 -8.11,4.68 2.56,-1.47l-3.78,1.45c12.07,-6.98 -8.09,4.67 4.69,-2.7c0.59,-0.33 1.18,-0.66 1.77,-1c3.32,-1.9 -4.43,2.59 -1.82,1.07c0.51,-0.32 1.02,-0.65 1.49,-1.04c0.49,-0.34 0.98,-0.69 1.43,-1.08c0.45,-0.39 0.88,-0.8 1.24,-1.26c0.36,-0.45 0.68,-0.93 0.93,-1.45c0.21,-0.48 0.39,-0.99 0.46,-1.51c0.03,-0.43 0.02,-0.85 -0.21,-1.23c-0.26,-0.36 -0.63,-0.61 -1.02,-0.81c-0.48,-0.21 -0.99,-0.29 -1.52,-0.3c-0.62,0.01 -1.25,0.08 -1.86,0.24c-0.71,0.17 -1.42,0.37 -2.11,0.65c-0.78,0.32 -1.55,0.68 -2.31,1.05c-3.39,1.73 5.26,-3.12 1.16,-0.67c-0.7,0.48 -1.38,0.99 -2.02,1.54c-0.6,0.52 -1.19,1.05 -1.72,1.64c-0.5,0.57 -1.01,1.14 -1.44,1.77c-0.43,0.6 -0.82,1.23 -1.17,1.88c-0.31,0.58 -0.57,1.19 -0.8,1.81c-0.21,0.59 -0.41,1.19 -0.56,1.8c-0.12,0.58 -0.25,1.16 -0.28,1.75c-0.04,0.56 -0.03,1.11 0.02,1.66c0.05,0.52 0.15,1.03 0.3,1.53c0.17,0.48 0.37,0.95 0.62,1.4c0.23,0.42 0.47,0.84 0.82,1.16c0.34,0.3 0.71,0.55 1.12,0.74c0.44,0.21 0.89,0.41 1.37,0.53c0.52,0.14 1.04,0.25 1.58,0.22c0.63,-0.02 1.25,-0.12 1.85,-0.28c0.7,-0.2 1.37,-0.45 2.02,-0.76c4.03,-1.92 -4.51,2.58 -1.3,0.83c0.76,-0.47 1.5,-0.98 2.21,-1.52c0.74,-0.58 1.45,-1.2 2.11,-1.88c0.69,-0.71 1.32,-1.47 1.86,-2.29c0.58,-0.87 1.15,-1.74 1.65,-2.66c0.52,-0.94 1.04,-1.89 1.5,-2.87c0.45,-1.01 0.9,-2.02 1.23,-3.08c0.34,-0.99 0.63,-2.01 0.72,-3.06c0.1,-0.98 0.18,-1.96 0.09,-2.95c-0.08,-0.86 -0.22,-1.72 -0.47,-2.55c-0.23,-0.75 -0.52,-1.48 -0.92,-2.16c-0.39,-0.61 -0.83,-1.21 -1.39,-1.68c-0.53,-0.43 -1.08,-0.84 -1.73,-1.05c-0.67,-0.19 -1.34,-0.27 -2.03,-0.22c-0.79,0.05 -1.57,0.18 -2.32,0.44c-0.83,0.28 -1.64,0.64 -2.4,1.08c6.15,-3.56 2.35,-1.4 0.98,-0.5c-0.84,0.55 -1.66,1.12 -2.45,1.73c-0.76,0.59 -1.53,1.18 -2.26,1.81c-0.73,0.64 -1.49,1.24 -2.23,1.87c-0.72,0.59 -1.44,1.18 -2.16,1.77c-0.65,0.52 -1.33,1.03 -2.01,1.52c-0.68,0.48 -1.38,0.93 -2.09,1.35c-1.87,1.1 -3.73,2.24 -5.68,3.21c-0.74,0.35 -1.49,0.67 -2.28,0.89c-0.78,0.21 -1.57,0.4 -2.38,0.44c-0.8,0.04 -1.61,0.05 -2.4,-0.12c-0.79,-0.2 -1.54,-0.49 -2.27,-0.87c-0.78,-0.39 -1.55,-0.8 -2.29,-1.26c-0.71,-0.46 -1.4,-0.94 -2.07,-1.44c-0.6,-0.44 -1.17,-0.91 -1.77,-1.34c-0.5,-0.37 -1.01,-0.74 -1.56,-1.05c-0.48,-0.27 -0.96,-0.52 -1.46,-0.74c-0.39,-0.16 -0.77,-0.31 -1.19,-0.36l3.33,-2.33z" fill="#330080" id="path5057"/>
     <path d="m796.25,329.5c-0.01,-0.47 0.04,-0.93 0.07,-1.4c0.03,-0.58 0.09,-1.16 0.17,-1.74c0.09,-0.74 0.28,-1.47 0.47,-2.19c0.21,-0.8 0.47,-1.58 0.77,-2.34c0.31,-0.76 0.71,-1.47 1.15,-2.15c0.42,-0.63 0.92,-1.2 1.44,-1.76c0.49,-0.51 1,-1 1.53,-1.48c0.48,-0.44 1.02,-0.79 1.57,-1.14c1.6,-1.12 3.29,-1.96 5.04,-2.77c0.52,-0.21 1.02,-0.45 1.52,-0.69c0.55,-0.27 1.1,-0.52 1.65,-0.78c0.6,-0.3 1.2,-0.62 1.8,-0.93c0.63,-0.34 1.28,-0.69 1.9,-1.05c-6.06,3.52 -2.93,1.74 -1.59,0.84c0.6,-0.39 1.15,-0.85 1.68,-1.33c0.5,-0.45 0.97,-0.94 1.41,-1.45c0.4,-0.43 0.7,-0.91 0.95,-1.43c0.19,-0.41 0.35,-0.83 0.41,-1.28c0.02,-0.38 -0.21,-0.63 -0.46,-0.89c-0.27,-0.23 -0.59,-0.41 -0.94,-0.51c-0.19,0.03 -0.1,-0.01 -0.25,0.12l3.22,-2.47c0.27,0.03 0.14,0 0.4,0.08c0.38,0.16 0.74,0.37 1.04,0.67c0.31,0.34 0.58,0.7 0.61,1.18c0.01,0.49 -0.14,0.96 -0.33,1.41c-0.24,0.55 -0.52,1.08 -0.91,1.54c-0.43,0.53 -0.9,1.03 -1.4,1.5c-0.52,0.5 -1.06,0.97 -1.66,1.38c-1.71,1.17 -3.5,2.2 -5.33,3.19c-0.63,0.35 -1.27,0.71 -1.92,1.04c-0.59,0.31 -1.2,0.62 -1.8,0.91c-0.55,0.27 -1.1,0.52 -1.65,0.79c-0.51,0.23 -1.02,0.46 -1.53,0.68c-1.43,0.67 -4.15,2.19 1.92,-1.21c-0.56,0.32 -1.1,0.67 -1.6,1.07c-0.54,0.46 -1.04,0.95 -1.54,1.46c-0.52,0.53 -1.03,1.08 -1.47,1.69c-0.45,0.65 -0.86,1.34 -1.18,2.07c-0.32,0.74 -0.58,1.51 -0.79,2.29c-0.19,0.71 -0.4,1.42 -0.49,2.15c-0.09,0.57 -0.15,1.14 -0.18,1.72c-0.03,0.45 -0.08,0.91 -0.08,1.37l-3.62,1.84z" fill="#330080" id="path5059"/>
     <path d="m782.79,446.58c0.36,0.13 0.73,0.23 1.1,0.32c0.43,0.12 0.87,0.16 1.31,0.21c0.48,0.06 0.97,0.08 1.45,0.05c0.53,-0.02 1.07,-0.08 1.59,-0.17c0.52,-0.08 1.03,-0.25 1.54,-0.41c0.56,-0.2 1.1,-0.45 1.63,-0.72c3.4,-1.87 -4.46,2.65 -1.75,1.03c0.56,-0.34 1.11,-0.72 1.65,-1.1c0.53,-0.36 1.04,-0.74 1.57,-1.11c1.61,-1.15 3.36,-2.06 5.08,-3.06c0.51,-0.31 1.08,-0.52 1.65,-0.71c0.52,-0.15 1.06,-0.27 1.61,-0.31c0.49,-0.06 0.99,-0.05 1.49,-0.05c0.47,0.04 0.93,0.1 1.39,0.18c0.45,0.1 0.89,0.26 1.33,0.4c0.46,0.15 0.9,0.34 1.34,0.54c0.49,0.21 0.97,0.42 1.46,0.63c0.53,0.21 1.05,0.43 1.58,0.64c0.6,0.25 1.23,0.42 1.85,0.62c0.69,0.24 1.39,0.44 2.09,0.64c0.71,0.21 1.44,0.37 2.16,0.57c0.82,0.22 1.64,0.42 2.47,0.61c0.63,0.14 1.28,0.2 1.93,0.28l-3.29,2.33c-0.66,-0.08 -1.32,-0.15 -1.97,-0.31c-0.83,-0.19 -1.65,-0.39 -2.47,-0.62c-0.73,-0.18 -1.46,-0.36 -2.18,-0.57c-0.7,-0.2 -1.4,-0.42 -2.09,-0.65c-0.63,-0.2 -1.26,-0.39 -1.87,-0.65c-0.53,-0.21 -1.06,-0.42 -1.58,-0.64c-0.49,-0.21 -0.98,-0.42 -1.47,-0.63c-0.43,-0.19 -0.87,-0.36 -1.32,-0.51c-0.43,-0.14 -0.86,-0.27 -1.3,-0.35c-0.44,-0.07 -0.89,-0.11 -1.35,-0.12c-0.48,-0.01 -0.97,0.02 -1.46,0.08c-0.52,0.08 -1.05,0.2 -1.55,0.38c-0.56,0.21 -1.1,0.47 -1.61,0.78c6.08,-3.52 3.15,-1.92 1.85,-0.98c-0.53,0.36 -1.05,0.73 -1.56,1.11c-0.55,0.38 -1.09,0.76 -1.65,1.12c-1.68,1.07 -3.42,2.06 -5.2,2.96c-0.54,0.25 -1.1,0.5 -1.67,0.68c-0.52,0.15 -1.04,0.28 -1.58,0.35c-0.53,0.07 -1.07,0.13 -1.61,0.14c-0.5,-0.01 -1,-0.03 -1.49,-0.1c-0.46,-0.06 -0.91,-0.13 -1.34,-0.26c-0.38,-0.1 -0.75,-0.21 -1.12,-0.33l3.36,-2.29z" fill="#8787de" id="path5061"/>
     <path d="m402.44,645.14c0.44,-0.1 0.88,-0.15 1.33,-0.21c0.58,-0.09 1.16,-0.17 1.74,-0.23c0.7,-0.06 1.4,-0.12 2.1,-0.14c0.77,-0.04 1.53,-0.02 2.3,0.04c0.76,0.06 1.51,0.15 2.27,0.25c0.74,0.08 1.48,0.22 2.22,0.34c0.74,0.12 1.48,0.24 2.21,0.38c0.79,0.17 1.57,0.34 2.35,0.54c0.83,0.2 1.65,0.43 2.48,0.64c0.83,0.24 1.67,0.47 2.5,0.69c0.86,0.23 1.73,0.41 2.6,0.55c0.93,0.16 1.86,0.29 2.79,0.42c0.95,0.13 1.9,0.22 2.86,0.27c1.08,0.03 2.16,-0.03 3.25,-0.08c1.12,-0.07 2.23,-0.16 3.35,-0.27c1.19,-0.12 2.38,-0.26 3.57,-0.42c1.23,-0.17 2.47,-0.34 3.69,-0.55c1.29,-0.23 2.57,-0.47 3.85,-0.74c1.23,-0.27 2.47,-0.52 3.7,-0.79c1.19,-0.26 2.37,-0.57 3.55,-0.86c1.13,-0.26 2.26,-0.55 3.39,-0.83c1.13,-0.26 2.25,-0.54 3.37,-0.82c1.12,-0.26 2.24,-0.54 3.36,-0.82c1.1,-0.27 2.21,-0.52 3.31,-0.77c1.05,-0.24 2.11,-0.46 3.17,-0.64c1.03,-0.16 2.08,-0.29 3.12,-0.37c1.02,-0.09 2.05,-0.1 3.07,-0.08c1.03,0.01 2.05,0.03 3.08,0.09c1.02,0.04 2.02,0.17 3.03,0.3c0.97,0.11 1.93,0.27 2.89,0.42c1,0.15 2.01,0.3 3.01,0.49c1.04,0.2 2.07,0.39 3.11,0.57c1.07,0.17 2.14,0.35 3.21,0.54c1.02,0.18 2.04,0.36 3.06,0.57c1,0.18 1.99,0.39 2.99,0.61c0.98,0.21 1.97,0.44 2.94,0.69c0.96,0.26 1.92,0.5 2.89,0.73c0.99,0.23 1.99,0.43 3,0.62c1,0.18 1.99,0.38 2.98,0.59c0.97,0.21 1.94,0.4 2.91,0.57c1.02,0.19 2.05,0.34 3.08,0.46c1.02,0.12 2.05,0.22 3.08,0.28c1.04,0.08 2.08,0.1 3.12,0.11c1.09,0.04 2.17,-0.01 3.25,-0.07c1.18,-0.05 2.35,-0.14 3.52,-0.27c1.2,-0.12 2.39,-0.27 3.59,-0.46c1.18,-0.19 2.36,-0.37 3.54,-0.54c1.23,-0.17 2.45,-0.38 3.66,-0.62c1.28,-0.25 2.56,-0.49 3.83,-0.76c1.25,-0.25 2.5,-0.54 3.74,-0.81c1.21,-0.25 2.41,-0.53 3.61,-0.81c1.14,-0.26 2.27,-0.51 3.41,-0.75c1.1,-0.23 2.22,-0.44 3.33,-0.64c1.1,-0.19 2.2,-0.41 3.3,-0.62c1.12,-0.21 2.25,-0.39 3.38,-0.57c1.11,-0.19 2.23,-0.35 3.36,-0.47c1.13,-0.12 2.27,-0.17 3.4,-0.24c1.13,-0.06 2.25,-0.11 3.37,-0.16c1.1,-0.06 2.21,-0.06 3.31,-0.03c1.06,0.03 2.1,0.15 3.15,0.25c1.09,0.12 2.15,0.35 3.21,0.57c1.09,0.23 2.16,0.5 3.24,0.75c1.07,0.26 2.13,0.55 3.18,0.86c1.03,0.31 2.04,0.66 3.06,1.01c0.97,0.35 1.94,0.72 2.91,1.07c0.92,0.36 1.83,0.72 2.75,1.06c0.9,0.34 1.8,0.65 2.7,0.97c0.92,0.33 1.85,0.62 2.79,0.9c0.99,0.25 1.99,0.46 2.99,0.66c0.95,0.21 1.91,0.39 2.88,0.54c1.01,0.15 2.03,0.21 3.05,0.25c1.03,0.07 2.05,0.05 3.07,-0.02c1.03,-0.06 2.06,-0.15 3.08,-0.26c1.07,-0.09 2.12,-0.31 3.18,-0.51c1.09,-0.2 2.18,-0.4 3.27,-0.62c1.06,-0.21 2.12,-0.42 3.18,-0.62c1.04,-0.18 2.07,-0.4 3.1,-0.6c1.03,-0.22 2.05,-0.45 3.08,-0.67c1,-0.24 2.02,-0.45 3.02,-0.7c1,-0.25 1.99,-0.53 2.99,-0.79c0.99,-0.29 1.98,-0.57 2.97,-0.82c0.99,-0.24 1.98,-0.53 2.96,-0.79c0.99,-0.27 1.98,-0.48 2.98,-0.67c0.98,-0.18 1.95,-0.37 2.93,-0.5c0.93,-0.12 1.86,-0.25 2.8,-0.32c0.87,-0.09 1.75,-0.09 2.63,-0.11c0.83,0 1.67,0.04 2.5,0.13c0.8,0.08 1.59,0.23 2.38,0.39c0.79,0.16 1.58,0.34 2.36,0.55c0.81,0.2 1.62,0.43 2.43,0.66c0.87,0.24 1.74,0.49 2.61,0.73c0.89,0.24 1.79,0.45 2.69,0.65c0.93,0.2 1.85,0.39 2.77,0.6c0.91,0.22 1.83,0.39 2.75,0.54c0.91,0.15 1.83,0.28 2.74,0.41c0.93,0.09 1.86,0.18 2.79,0.23c0.93,0.04 1.87,0.04 2.8,0.01c0.92,-0.03 1.84,-0.11 2.76,-0.2c0.91,-0.07 1.82,-0.17 2.72,-0.31c0.93,-0.13 1.86,-0.32 2.78,-0.49c0.89,-0.18 1.78,-0.38 2.66,-0.6c0.87,-0.21 1.71,-0.48 2.56,-0.75c0.83,-0.25 1.63,-0.54 2.45,-0.81c0.67,-0.23 1.31,-0.51 1.98,-0.75l-3.19,2.5c-0.66,0.25 -1.32,0.52 -1.99,0.74c-0.81,0.27 -1.62,0.55 -2.45,0.8c-0.85,0.26 -1.71,0.52 -2.58,0.73c-0.88,0.21 -1.77,0.41 -2.67,0.58c-0.93,0.17 -1.85,0.35 -2.79,0.47c-0.91,0.13 -1.82,0.23 -2.74,0.3c-0.92,0.08 -1.84,0.15 -2.77,0.17c-0.94,0.03 -1.88,0.02 -2.81,-0.03c-0.94,-0.06 -1.88,-0.15 -2.81,-0.26c-0.92,-0.13 -1.84,-0.26 -2.75,-0.41c-0.93,-0.16 -1.85,-0.34 -2.77,-0.57c-0.92,-0.2 -1.84,-0.39 -2.76,-0.59c-0.91,-0.21 -1.81,-0.43 -2.71,-0.67c-0.87,-0.24 -1.74,-0.49 -2.61,-0.73c-0.81,-0.23 -1.61,-0.45 -2.43,-0.66c-0.77,-0.19 -1.56,-0.37 -2.34,-0.53c-0.78,-0.15 -1.57,-0.28 -2.36,-0.35c-0.82,-0.07 -1.65,-0.1 -2.47,-0.09c-0.87,0.01 -1.75,0.04 -2.62,0.12c-0.92,0.1 -1.85,0.21 -2.77,0.34c-0.98,0.15 -1.95,0.33 -2.92,0.52c-1,0.19 -1.99,0.42 -2.96,0.69c-0.99,0.27 -1.98,0.54 -2.97,0.79c-0.99,0.26 -1.98,0.55 -2.97,0.82c-1,0.26 -1.99,0.55 -2.99,0.79c-1.01,0.23 -2.02,0.46 -3.03,0.69c-1.03,0.22 -2.05,0.45 -3.08,0.66c-1.03,0.2 -2.07,0.41 -3.1,0.6c-1.06,0.2 -2.12,0.41 -3.18,0.62c-1.09,0.22 -2.19,0.41 -3.28,0.62c-1.06,0.2 -2.12,0.39 -3.2,0.48c-1.02,0.11 -2.05,0.19 -3.08,0.25c-1.04,0.05 -2.07,0.05 -3.1,-0.01c-1.03,-0.06 -2.06,-0.14 -3.08,-0.3c-0.97,-0.15 -1.93,-0.35 -2.89,-0.55c-1.01,-0.21 -2.02,-0.41 -3.01,-0.69c-0.94,-0.28 -1.88,-0.58 -2.8,-0.91c-0.91,-0.32 -1.81,-0.64 -2.7,-0.98c-0.92,-0.34 -1.84,-0.7 -2.75,-1.05c-0.97,-0.36 -1.94,-0.73 -2.91,-1.07c-1.01,-0.36 -2.02,-0.7 -3.04,-1c-1.05,-0.3 -2.11,-0.59 -3.17,-0.84c-1.08,-0.25 -2.15,-0.52 -3.23,-0.74c-1.06,-0.22 -2.12,-0.43 -3.19,-0.53c-1.04,-0.1 -2.09,-0.21 -3.13,-0.23c-1.1,-0.02 -2.2,-0.01 -3.3,0.05c-1.12,0.05 -2.24,0.11 -3.36,0.17c-1.14,0.06 -2.27,0.12 -3.4,0.25c-1.12,0.13 -2.23,0.3 -3.34,0.48c-1.13,0.18 -2.25,0.37 -3.38,0.59c-1.1,0.21 -2.2,0.42 -3.3,0.61c-1.11,0.21 -2.22,0.42 -3.32,0.65c-1.14,0.24 -2.27,0.49 -3.4,0.76c-1.2,0.28 -2.4,0.55 -3.61,0.8c-1.25,0.28 -2.5,0.55 -3.75,0.81c-1.27,0.26 -2.55,0.5 -3.83,0.75c-1.22,0.23 -2.44,0.44 -3.67,0.61c-1.18,0.17 -2.36,0.36 -3.55,0.55c-1.19,0.17 -2.39,0.32 -3.6,0.44c-1.17,0.11 -2.35,0.2 -3.52,0.26c-1.09,0.05 -2.18,0.07 -3.27,0.05c-1.05,-0.02 -2.09,-0.05 -3.13,-0.13c-1.04,-0.07 -2.07,-0.18 -3.1,-0.3c-1.04,-0.13 -2.07,-0.3 -3.09,-0.48c-0.98,-0.18 -1.95,-0.37 -2.92,-0.58c-0.99,-0.21 -1.98,-0.4 -2.98,-0.58c-1.01,-0.2 -2.01,-0.4 -3.01,-0.64c-0.97,-0.23 -1.93,-0.48 -2.89,-0.73c-0.97,-0.24 -1.95,-0.47 -2.93,-0.68c-1,-0.22 -1.99,-0.42 -2.99,-0.61c-1.02,-0.2 -2.03,-0.38 -3.05,-0.56c-1.07,-0.19 -2.14,-0.36 -3.22,-0.54c-1.03,-0.18 -2.07,-0.37 -3.1,-0.57c-1,-0.18 -2.01,-0.33 -3.01,-0.48c-0.96,-0.15 -1.92,-0.31 -2.88,-0.42c-1,-0.12 -2,-0.23 -3.01,-0.27c-1.03,-0.05 -2.05,-0.07 -3.08,-0.08c-1.01,-0.01 -2.03,0.02 -3.04,0.12c-1.04,0.1 -2.07,0.21 -3.1,0.39c-1.06,0.19 -2.11,0.42 -3.15,0.65c-1.11,0.25 -2.21,0.51 -3.31,0.79c-1.12,0.28 -2.24,0.55 -3.36,0.82c-1.12,0.28 -2.25,0.55 -3.37,0.82c-1.13,0.28 -2.26,0.55 -3.39,0.82c-1.18,0.29 -2.36,0.6 -3.55,0.86c-1.24,0.26 -2.48,0.51 -3.71,0.78c-1.28,0.26 -2.57,0.51 -3.85,0.73c-1.24,0.2 -2.47,0.37 -3.71,0.54c-1.19,0.15 -2.38,0.3 -3.57,0.41c-1.13,0.1 -2.25,0.19 -3.37,0.25c-1.09,0.05 -2.19,0.1 -3.28,0.05c-0.96,-0.06 -1.92,-0.16 -2.87,-0.3c-0.94,-0.13 -1.88,-0.26 -2.81,-0.42c-0.88,-0.16 -1.75,-0.35 -2.61,-0.59c-0.84,-0.22 -1.67,-0.45 -2.51,-0.68c-0.82,-0.22 -1.64,-0.44 -2.47,-0.64c-0.77,-0.19 -1.55,-0.36 -2.34,-0.52c-0.73,-0.14 -1.47,-0.24 -2.21,-0.37c-0.74,-0.12 -1.47,-0.25 -2.21,-0.33c-0.75,-0.1 -1.5,-0.18 -2.26,-0.23c-0.75,-0.05 -1.51,-0.04 -2.27,-0.01c-0.7,0.04 -1.39,0.1 -2.08,0.17c-0.58,0.07 -1.16,0.16 -1.74,0.24c-0.45,0.06 -0.89,0.14 -1.34,0.21l3.26,-2.43z" fill="#8787de" id="path5063"/>
    </g>
   </g>
  </svg>
  `)
  }
}