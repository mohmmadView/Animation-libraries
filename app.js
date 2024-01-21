all()
  function all(){

//TODO -------------------------------------------------------------------------- */
//?  --------------------------------- moveBorder ------------------------------- */
//TODO -------------------------------------------------------------------------- */
let elmTitle = document.querySelector(".title");
let offsetTitle = anime.setDashoffset(elmTitle);
elmTitle.setAttribute("stroke-dashoffset", offsetTitle);
anime({
  targets: elmTitle,
  strokeDashoffset: [offsetTitle, 200],
  duration: anime.random(1000, 3000),
  delay: anime.random(0, 0),
  loop: true,
  direction: "alternate",
  easing: "easeInOutSine",
  autoplay: true,
});
//TODO -------------------------------------------------------------------------- */
//?  ------------------------------ TheMoveBorder ------------------------------- */
//TODO -------------------------------------------------------------------------- */
//* -------------------------------------------------------------------------- */
//! ------------------------------ StartAnimate.css ------------------------------ */
//* -------------------------------------------------------------------------- */
let elmAnimate = document.querySelector(".layer2");
let offsetAnimate = anime.setDashoffset(elmAnimate);
elmAnimate.setAttribute("stroke-dashoffset", offsetAnimate);
anime({
  targets: elmAnimate,
  strokeDashoffset: [offsetAnimate, 25],
  duration: anime.random(3000, 2000),
  delay: anime.random(1000, 1000),
  loop: true,
  direction: "alternate",
  easing: "easeInOutSine",
  autoplay: true,
});
//* -------------------------------------------------------------------------- */
//! ------------------------------ TheEndAnimate.css ------------------------------ */
//* -------------------------------------------------------------------------- */
//! -------------------------------------------------------------------------- */
//* ----------------------------- ClassAnimation.css ----------------------------- */
//! -------------------------------------------------------------------------- */
let ArrayListMove = [
  "animate__bounce",
  "animate__flash",
  "animate__pulse",
  "animate__rubberBand",
  "animate__shakeX",
  "animate__shakeY",
  "animate__headShake",
  "animate__swing",
  "animate__tada",
  "animate__wobble",
  "animate__jello",
  "animate__heartBeat",
  "animate__backInDown",
  "animate__backInLeft",
  "animate__backInRight",
  "animate__backInUp",
  "animate__backOutDown",
  "animate__backOutLeft",
  "animate__backOutRight",
  "animate__backOutUp",
  "animate__bounceIn",
  "animate__bounceInDown",
  "animate__bounceInLeft",
  "animate__bounceInRight",
  "animate__bounceInUp",
  "animate__fadeIn",
  "animate__fadeInDownBig",
  "animate__flipInX",
  "animate__lightSpeedInLeft",
  "animate__rotateInDownLeft",
];
let elemTextView = document.querySelector(".textView");
let elemListMove = document.querySelectorAll(".list_move > div > a");
let elemAnimateCss = document.querySelector(".animateCss");
for (let i = 0; i < ArrayListMove.length; i++) {
  elemListMove[i].onclick = () => {
    elemTextView.innerHTML = `<h2 class="text-white"><<span class="text-yellow-600">h1</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">animate__animated  ${ArrayListMove[i]}</span>"> Animate.css <<span class="text-yellow-600">/h1</span>></h2> `;
    handler(elemAnimateCss, ArrayListMove[i], 800);
  };
}

//! -------------------------------------------------------------------------- */
//* -------------------------- TheEndClassAnimation.css ----------------------------- */
//! -------------------------------------------------------------------------- */


//TODO ----------------------- FunctionViewClassAnimation ----------------------- */
function handler(element, moveAnimate, time) {
  element.classList.toggle(moveAnimate);
  setTimeout(() => {
    element.classList.remove(moveAnimate);
  }, time);
}
//! -------------------------------------------------------------------------- */
//* ----------------------------- StartAnimate.js ----------------------------- */
//! -------------------------------------------------------------------------- */
let elmAnimateJs = document.querySelector(".animate_js");
let elmContainerSvgAnimeJs = document.querySelector("#container-Svg-AnimeJs");
let containerAnimateJs = document.querySelector("#Code-svgAnimateJs");
console.log(elmContainerSvgAnimeJs);
let offsetAnimateJs = anime.setDashoffset(elmAnimateJs);
function SvgAnimateJs() {
  elmAnimate.setAttribute("stroke-dashoffset", offsetAnimateJs);
anime({
  targets: elmAnimateJs,
  strokeDashoffset: [offsetAnimateJs, 25],
  duration: anime.random(3000, 2000),
  delay: anime.random(1000, 0),
  loop: true,
  direction: "alternate",
  easing: "easeInOutSine",
  autoplay: true,
});

  console.log("test.win");
}
containerAnimateJs.addEventListener("click",()=>{
  console.log("containeAnimeJs");
  // elmContainerSvgAnimeJs.classList.add("hidden");
  elmTextAnimeJs.innerHTML = "";
  elmTextAnimeJs.insertAdjacentHTML("beforeend", `
  <div class="absolute w-5/6 h-5/6 flex justify-center divAnimateJs animate__animated animate__lightSpeedInLeft">
         <svg class="w-full" viewBox="100 0 245 100" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
         <text class="animate_js  animate__animated" style="fill: rgb(235, 14, 14); font-family: &quot;Distro Extinct&quot;; stroke: rgb(124, 132, 97); stroke-dasharray: 30px; stroke-dashoffset: 3.37319px; stroke-opacity: 0.53; stroke-width: 0.756387px; white-space: pre;" transform="matrix(4.114889, 0, 0, 3.817554, -392.250885, -53.289532)" x="119.835" y="32.323" stroke-dasharray="undefined">AnimeJs</text>
          </svg>
  
  `);
  // sourceCodeAnimJs.remove();
})
SvgAnimateJs()

//TODO --------------- scrollAnimateJs ----------------- */
// let body = document.body;
let elmDivAnimateJs = document.querySelector(".divAnimateJs");
let elmLineAnimate = document.querySelector("#lineAnimate");
window.onscroll = () => {
  winScroll(384, elmLineAnimate, "animate__backInRight"); //! <=== جواب
  winScroll(845, elmDivAnimateJs, "animate__lightSpeedInLeft");
};

//TODO --------------- TheEndScrollAnimateJs ----------------- */
//@
//! -------------------------------------------------------------------------- */
//* ----------------------------- MenuAnimeJs -------------------------------- */
//! -------------------------------------------------------------------------- */
let elmMenuCodeAnimeJs = document.querySelector("#menuCodeAnimeJs");
 let sourceCodeAnimJs = document.querySelector("#innerSourceCodeAnimeJ");
//TODO --------------- animeJs-1 ----------------- */
let elemAnimeJs_1 = document.querySelector("#animejs-1");
let elmTextAnimeJs = document.querySelector(".divMenuAnimeJs");
let elmDivAnimeJs = document.querySelector("#divAll");
let createElm = document.createElement("div");
elemAnimeJs_1.addEventListener("click", animeJs_1);
let elmEl = document.querySelectorAll(".el");
function animeJs_1() {
 
  createElm.classList =
    "relative bottom-56 w-3/4 h-52 animate__animated animate__zoomInDown bg-slate-200/30 border-8 ring ring-rose-500 border-double";
  elmDivAnimeJs.classList.remove("mt-52");
  elmDivAnimeJs.classList.add("mt-2");
  elmTextAnimeJs.innerHTML = "";
  ////! source code  anime js
  elmTextAnimeJs.insertAdjacentHTML("beforeend", codeAnmieJs_All[0]);
  //!2test replay click fix animate
  anime({
    targets: ".function-based-params-anime-js .el",
    translateX: 190,
    direction: "alternate",
    loop: true,
    delay: function (el, i, l) {
      return i * 500;
    },
    endDelay: function (el, i, l) {
      return (l - i) * 100;
    },
  });
}
//TODO --------------- animeJs-2 ----------------- */
let elementAnimeJS_2 = document.querySelector("#animejs-2");
elementAnimeJS_2.addEventListener("click", clickAnimejs_2);
function clickAnimejs_2() {
  createElm.classList =
    "relative bottom-56 w-3/4 h-52 animate__animated animate__zoomInDown bg-slate-200/30 border-8 ring ring-rose-500 border-double";
  elmDivAnimeJs.classList.remove("mt-52");
  elmDivAnimeJs.classList.add("mt-2");
  elmTextAnimeJs.innerHTML = "";
  ////! source code  anime js
  elmTextAnimeJs.insertAdjacentHTML("beforeend", codeAnmieJs_All[1]);
  //!  fix Repaly Fix
  //
  anime({
    targets: ".autoplay-true",
    translateX: 180,
    autoplay: true,
    easing: "easeInOutSine",
  });

  anime({
    targets: ".autoplay-true",
    translateX: 200,
    autoplay: false,
    easing: "easeInOutSine",
  });
}
//TODO --------------- animeJs-3 ----------------- */
let elementAnimeJS_3 = document.querySelector("#animejs-3");
elementAnimeJS_3.addEventListener("click", clickAnimejs_3);
function clickAnimejs_3() {
  createElm.classList =
    "relative bottom-56 w-3/4 h-52 animate__animated animate__zoomInDown bg-slate-200/30 border-8 ring ring-rose-500 border-double";
  elmDivAnimeJs.classList.remove("mt-52");
  elmDivAnimeJs.classList.add("mt-2");
  elmTextAnimeJs.innerHTML = "";
  ////! source code  anime js
 
  elmTextAnimeJs.insertAdjacentHTML("beforeend", codeAnmieJs_All[2]);
  //!  fix Repaly Fix
  var progressLogEl = document.querySelector(".promise-demo .progress-log");
  var promiseEl = document.querySelector(".promise-demo .el");
  var finishedLogEl = document.querySelector(".promise-demo .finished-log");
  var demoPromiseResetTimeout;
  function logFinished() {
    anime.set(finishedLogEl, { value: "Promise resolved" });
    anime.set(promiseEl, { backgroundColor: "#18FF92" });
  }
  var animation = anime
    .timeline({
      targets: promiseEl,
      delay: 400,
      duration: 380,
      endDelay: 400,
      easing: "easeInOutSine",
      update: function (anim) {
        progressLogEl.value = "progress : " + Math.round(anim.progress) + "%";
      },
    })
    .add({ translateX: 180 })
    .add({ scale: 2 })
    .add({ translateX: 0 });
  animation.finished.then(logFinished);
}
//TODO --------------- animeJs-4 ----------------- */
let path = anime.path(".motion-path-demo path");
let elementAnimeJS_4 = document.querySelector("#animejs-4");
elementAnimeJS_4.addEventListener("click", clickAnimejs_4);
function clickAnimejs_4() {
  createElm.classList =
    "relative bottom-56 w-3/4 h-52 animate__animated animate__zoomInDown bg-slate-200/30 border-8 ring ring-rose-500 border-double";
  elmDivAnimeJs.classList.remove("mt-52");
  elmDivAnimeJs.classList.add("mt-2");
  elmTextAnimeJs.innerHTML = "";
  ////! source code  anime js
  elmTextAnimeJs.insertAdjacentHTML("beforeend", codeAnmieJs_All[3]);
  let path = anime.path(".motion-path-demo path");
  anime({
    targets: ".motion-path-demo .el",
    translateX: path("x"),
    translateY: path("y"),
    rotate: path("angle"),
    easing: "linear",
    duration: 2000,
    loop: true,
  });

}
//TODO --------------- animeJs-5 ----------------- */
let elementAnimeJS_5 = document.querySelector("#animejs-5");

elementAnimeJS_5.addEventListener("click", clickAnimejs_5);
function clickAnimejs_5() {
 
  createElm.classList =
    "relative bottom-56 w-3/4 h-52 animate__animated animate__zoomInDown bg-slate-200/30 border-8 ring ring-rose-500 border-double";
  elmDivAnimeJs.classList.remove("mt-52");
  elmDivAnimeJs.classList.add("mt-2");
  elmTextAnimeJs.innerHTML = "";
  ////! source code  anime js
  elmTextAnimeJs.insertAdjacentHTML("beforeend", codeAnmieJs_All[4]);
  anime({
    targets: ".staggering-grid-demo .el",
    scale: [
      { value: 0.1, easing: "easeOutSine", duration: 500 },
      { value: 1, easing: "easeInOutQuad", duration: 1200 },
    ],
    delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
  });

  //  }
}

//TODO --------------- animeJs-6 ----------------- */

var animation = anime({
  targets: ".seek-anim-demo .el",
  translateX: 180,
  delay: function (el, i) {
    return i * 100;
  },
  elasticity: 200,
  easing: "easeInOutSine",
  autoplay: false,
});

var seekProgressEl = document.querySelector(".seek-anim-demo .progress");
seekProgressEl.oninput = function () {
  animation.seek(animation.duration * (seekProgressEl.value / 100));
};
function menuAnimeJs(colorBorder, colorBg, colorShadow) {
  let elmAll_Menu = document.querySelectorAll(".menuAnimeJs");
  for (let i = 0; i < elmAll_Menu.length; i++) {}
}

//TODO --------------- animeJs-7 ----------------- */
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml1 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>",
);
anime
  .timeline({ loop: true })
  .add({
    targets: ".ml1 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
  })
  .add({
    targets: ".ml1 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: "-=875",
    delay: (el, i, l) => 80 * (l - i),
  })
  .add({
    targets: ".ml1",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

//!====>move moJs <=====\\
let scr = window.scrollY;
let ElmMoveJs = document.querySelector("#moveMoJs");
window.addEventListener("scroll", () => {
  if (1818 < window.scrollY) console.log("test good scroll");
  anime({
    targets: "#moveMoJs",
    translateX: 500,
    autoplay: "false",
    easing: "easeInOutSine",
  });
  anime({
    targets: "#moveMoJs2",
    translateX: -500,
    autoplay: "false",
    easing: "easeInOutSine",
  });
});
//! move Mo.js \\

//? ======> MoveJs <======\\


new mojs.Shape({
  parent: "#circle",
  shape: "circle", // shape 'circle' is default
  radius: 25, // shape radius
  radiusX: 30,
  left: "25%",
  isShowStart: true, // show before any animation starts
});

new mojs.Shape({
  parent: "#polygon",
  shape: "polygon", // shape 'polygon' and rect
  radius: 35, // shape radius
  radiusX: 60,
  left: "25%",
  fill: "yellow", // same as 'transparent'
  stroke: "black", // or 'cyan'
  strokeWidth: 4, // width of the stroke
  isShowStart: true, // show before any animation starts
});

 new mojs.Shape({
  parent: "#zigzag",
  shape: "zigzag",
  points: 8,
  radius: 130,
  radiusY: 50,
  left: "45%",
  top:"60%",
  fill: "none",
  stroke: "blue",
  isShowStart: true,
});

// var curve = new mojs.Shape({
//   parent: "#curve",
//   shape: "curve",
//   points: 11,
//   radius: 60,
//   radiusY: 50,
//   left: "50%",
//   fill: "none",
//   stroke: "deeppink",
//   isShowStart: true,
//   x:55,
//   y:40,
// });

new mojs.Shape({
  parent: "#cross",
  shape: "cross",
  points: 11,
  radius: 65,
  radiusX: 95,
  left: "75%",
  stroke: "green",
  isShowStart: true,
 strokeWidth: 4,
});
const circleCopy = document.querySelector("#Layer_1"); 
circleCopy.addEventListener("click",()=>{
  ClipboardEvent
  navigator.clipboard.writeText(`"
  <div class="relative bg-black/20 h-28 ">
  <div id="bouncyCircle2" class="absolute top-10 left-1/2  w-4  h-8" ></div>
</div>
<script src="https://cdn.jsdelivr.net/npm/@mojs/core"></script>
<script>
const bouncyCircle2 = new mojs.Shape({
parent: "#bouncyCircle2",
shape: "circle",
fill: { "#F64040": "#FC46AD" },
radius: { 20: 40 },
duration: 2000,
isYoyo: true,
isShowStart: true,
easing: "elastic.inout",
repeat: 100,
});

bouncyCircle2.play();
</script>`
  );
})

const bouncyCircle = new mojs.Shape({
  parent: "#bouncyCircle",
  shape: "circle",
  fill: { "#d98d6c": "#fa4d02" },
  radius: { 20: 80 },
  duration: 2000,
  isYoyo: true,
  isShowStart: true,
  easing: "elastic.inout",
  repeat: 100,
});
bouncyCircle.play();
//======>Mojs 6<======\\
const bouncyTriangle = new mojs.Shape({
  parent:     '#triangle',
  shape:      'polygon',
  fill:       'red',
  radius:     65,
  rotate:      { [-120]: -40 },
  x:          { [-140]: 70 },
  y:          { [50]: -20 },
  scaleX:     { 0 : 1.3 },

  repeat:     150,
  duration:   1500,
  isYoyo:     true,
  backwardEasing: 'sin.in',

  isShowEnd:  false
})
bouncyTriangle.play()
const OPTS = {
  fill:           'none',
  radius:         25,
  strokeWidth:    { 50 : 0 },
  scale:          { 0: 1 },
  angle:          { 'rand(-35, -70)': 0 },
  duration:       500,
  left: 0,        top: 0,
  easing: 'cubic.out'
};

const circle1 = new mojs.Shape({
  ...OPTS,
  stroke:         'cyan',
});

const circle2 = new mojs.Shape({
  ...OPTS,
  radius:         { 0 : 15 },
  strokeWidth:    { 30: 0 },
  stroke:         'magenta',
  delay:          'rand(75, 150)'
});

document.querySelector('#mojs8').addEventListener( 'click', function (e) {
  
   circle1
    .tune({ x: e.pageX, y: e.pageY  })
    .replay();
  
  circle2
    .tune({ x: e.pageX, y: e.pageY  })
    .replay();
  
});

const SWIRL_OPTS = {
  left: 0, top: 0,
  fill:           'green',
  duration:       'rand(600, 1000)',
  radius:         'rand(10, 20)',
  pathScale:      'rand(.5, 1)',
  swirlFrequency: 'rand(2,4)',
  swirlSize: 'rand(6,14)',
}

const swirl1 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS
});
  
const swirl2 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS,
  direction: -1
});

const swirl3 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS
});
  
const swirl4 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS
});

document.querySelector('#mojs9').addEventListener('click', (e)=> {  console.log("mouse");
  const x = e.pageX,
        y = { [e.pageY]: e.pageY-150 };
  swirl1
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl2
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl3
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl4
    .tune({ x, y })
    .generate()
    .replay();

});


function winScroll(number, element, classId) {
  if (window.scrollY > number) {
    element.classList.add(classId);
  } else {
    element.classList.remove(classId);
  }
}
// ////////////////////////////////////////
//? =========> Code AnimeJs ALL <========\\
// ////////////////////////////////////////
let codeAnmieJs_All = [
  `
  <div class="">
  
  </div>
  <div  class="w-3/4 flex justify-center">
  <div id="innerSourceCodeAnimeJs" class="relative flex p-2   w-full  h-42 z-10 animate__animated animate__zoomInDown bg-slate-200/30 border-8 ring ring-rose-500  border-double">
   <div class="w-2/4 p-2 bg-rose-600/20 text-white h-auto">
      <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">function-based-params-demo</span>"> 
         <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">el</span>">   <<span class="text-yellow-600">/div</span>></h2>
         <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">el</span>"> 
            <<span class="text-yellow-600">/div</span>></h2>
         <<span class="text-yellow-600">/div</span>></h2>
   </div>
   <div class="w-2/4 bg-rose-600/20  h-auto">
      <pre><span class="text-blue-800">anime</span>({
    <span class="text-green-600"> targets:</span> <span class="text-yellow-400">'.function-based-params-demo .el'</span>,
    <span class="text-green-600">translateX:</span><span class="text-yellow-400"> 270,</span>
    <span class="text-green-600">direction:</span> <span class="text-yellow-400">'alternate',</span>
    <span class="text-green-600">loop:</span><span class="text-yellow-400"> true,</span>
    <span class="text-blue-600">delay:</span> <span class="text-yellow-400">function(el, i, l) {</span>
     <span class="text-green-600"></span><span class="text-purple-700"> return</span> i * 100;
    <span class="text-yellow-400">},</span>
    <span class="text-blue-600">endDelay:</span><span class="text-yellow-400">function(el, i, l) {</span>
     <span class="text-purple-700"> return</span> (l - i) * 100;
    <span class="text-blue-600">}</span> }); </pre>
   </div>
    </div>
 </div>
`,
  `<div class="w-3/4 flex justify-center">
  <div id="innerSourceCodeAnimeJs" class="relative flex p-2   w-full h-42 z-10 animate__animated animate__zoomInDown  border-8 ring ring-rose-500  border-double">
   <div class="w-2/4 p-2 bg-blue-600/20 text-2xl text-white">
      <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">function-based-params-demo</span>"> 
         <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">autoplay-true</span>">   <<span class="text-yellow-600">/div</span>></h2>
         <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">autoplay-false</span>">   <<span class="text-yellow-600">/div</span>></h2>
         <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">autoplay-true</span>"> 
            <<span class="text-yellow-600">/div</span>></h2>
         <<span class="text-yellow-600">/div</span>></h2>
   </div>
   <div class="w-2/4  bg-blue-600/20">
      <pre><span class="text-blue-800">anime</span>({
    <span class="text-green-600"> targets:</span> <span class="text-yellow-400">'.autoplay-true'</span>,
    <span class="text-green-600">translateX:</span><span class="text-yellow-400"> 200,</span>
    <span class="text-green-600">autoplay:</span> <span class="text-yellow-400">'true',</span>
    <span class="text-green-600">easing:</span><span class="text-yellow-400"> 'easeInOutSine'</span><span class="text-black">})</span>
    <span class="text-blue-800">anime</span>({
      <span class="text-green-600"> targets:</span> <span class="text-yellow-400">'.autoplay-true'</span>,
      <span class="text-green-600">translateX:</span><span class="text-yellow-400"> 200,</span>
      <span class="text-green-600">autoplay:</span> <span class="text-yellow-400">'true',</span>
      <span class="text-green-600">easing:</span><span class="text-yellow-400"> 'easeInOutSine'</span><span class="text-black">})</span> </pre>
   </div>
    </div>
 </div>`,

  `
     <div class="w-3/4 flex justify-center">
  <div id="innerSourceCodeAnimeJs" class="relative flex p-2   w-full h-42 z-10 animate__animated animate__zoomInDown bg-slate-200/30 border-8 ring ring-rose-500  border-double">
   <div class="w-2/4 p-2 bg-yellow-700/10 text-white  h-auto">
      <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">css-transforms-demo</span>"> 
        
         <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">el</span>"> 
            <<span class="text-yellow-600">/div</span>></h2>
         <<span class="text-yellow-600">/div</span>></h2>
   </div>
   <div class="w-2/4 bg-yellow-700/10">
      <pre><span class="text-blue-800">anime</span>({
    <span class="text-green-600"> targets:</span> <span class="text-yellow-400">'.css-transforms-demo .el'</span>,
    <span class="text-green-600">translateX:</span><span class="text-yellow-400"> 180,</span>
    <span class="text-green-600">scale:</span> <span class="text-yellow-400">'2',</span>
    <span class="text-green-600">rotate:</span><span class="text-yellow-400"> 1turn,</span>
   </pre>
   </div>
    </div>
 </div>
     `,
  `
      <div class="div w-3/4   flex absolute justify-center">
  <div id="innerSourceCodeAnimeJs" class="relative flex p-2   w-full h-5/6 z-10 animate__animated animate__zoomInDown bg-slate-200/30 border-8 ring ring-rose-500  border-double">
   <div class="w-2/4 p-2 bg-green-600/10 text-white text-2xl">
      <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">motion-path-demo</span>"> 
         <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">el follow-path</span>">   <<span class="text-yellow-600">/div</span>></h2>
         <h2 class="text-white"><<span class="text-yellow-600">svg</span> <span class="text-yellow-400"> width=</span>"<span class="text-green-700">256</span>" <span class="text-yellow-400"> height=</span>"<span class="text-green-700">112</span>">
       <br>< <span class="text-yellow-600">path</span>> <<span class="text-yellow-600">path</span>> <<span class="text-yellow-600">/svg</span>></h2>
       <<span class="text-yellow-600">/div</span>></h2>
   </div>
   <div class="w-2/4 bg-green-600/10 text-xg ">
      <pre>
      <span class="text-rose-400">let</span><span class="text-white"> path</span><span class="text-blue-400">=</span>anime.<span class="text-blue-600">path</span><span class="text-green-700">('.motion-path-demo path')</span>
      <span class="text-blue-800">anime</span>({
    <span class="text-green-600"> targets:</span> <span class="text-yellow-400">'.motion-path-demo .el'</span>,
    <span class="text-green-600">translateX:</span><span class="text-yellow-400"> path('x'),</span>
    <span class="text-green-600">translateY</span> <span class="text-yellow-400">path('y'),</span>
    <span class="text-green-600">rotate:</span><span class="text-yellow-400"> path('angle')</span>
    <span class="text-green-600"> easing:</span> <span class="text-yellow-400">'linear',</span>
     <span class="text-green-600">duration:</span><span class="text-yellow-700"> 2000,</span>;
     <span class="text-green-600">loop:</span><span class="text-yellow-700"> true,</span>;
    <span class="text-yellow-400">})</span>
     </pre>
   </div>
    </div>
 </div>
      
      `,
  //4
  `
      <div class="div w-3/4   flex absolute justify-center">
  <div id="innerSourceCodeAnimeJs" class="relative flex p-2   w-full h-42 z-10 animate__animated animate__zoomInDown bg-slate-200/30 border-8 ring ring-rose-500  border-double">
   <div class="w-2/4 p-2 bg-rose-600/20 text-white h-auto">
      <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">staggering-grid-demo</span>"> 
         <h2 class="text-white">  <<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700"/>grid grid-cols-12 bg-gray-600</span>">     <div class="w-5 h-5  bg-red-600 border border-white ssmall square el" style="transform: scale(1);"></div> <<span class="text-yellow-600">/div</span>></h2>
         <h2 class="text-white"><<span class="text-yellow-600">svg</span> <span class="text-yellow-400"> width=</span>"<span class="text-green-700">256</span>" <span class="text-yellow-400"> height=</span>"<span class="text-green-700">112</span>">
       <br>< <span class="text-yellow-600">path</span>> <<span class="text-yellow-600">path</span>> <<span class="text-yellow-600">/svg</span>></h2>
       <<span class="text-yellow-600">/div</span>></h2>
   </div>
   <div class="w-2/4 bg-rose-600/20 text-lg h-auto">
      <pre>
      <span class="text-rose-400">let</span><span class="text-white"> path</span><span class="text-blue-400">=</span>anime.<span class="text-blue-600">path</span><span class="text-green-700">('.motion-path-demo path')</span>
      <span class="text-blue-800">anime</span>({
    <span class="text-green-600"> targets:</span> <span class="text-yellow-400">'.motion-path-demo .el'</span>,
    <span class="text-green-600">translateX:</span><span class="text-yellow-400"> path('x'),</span>
    <span class="text-green-600">translateY</span> <span class="text-yellow-400">path('y'),</span>
    <span class="text-green-600">rotate:</span><span class="text-yellow-400"> path('angle')</span>
    <span class="text-green-600"> easing:</span> <span class="text-yellow-400">'linear',</span>
     <span class="text-green-600">duration:</span><span class="text-yellow-700"> 2000,</span>;
     <span class="text-green-600">loop:</span><span class="text-yellow-700"> true,</span>;
    <span class="text-yellow-400">})</span>
     </pre>
   </div>
    </div>
 </div>
      
      `,
];
}



