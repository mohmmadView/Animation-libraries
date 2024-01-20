// import Prism from "prismjs";
// console.log(Prism.languages);
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
// window.onscroll=()=>{
//   console.log("test");
// else{
// }}

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
let offsetAnimateJs = anime.setDashoffset(elmAnimateJs);
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
//TODO --------------- animeJs-1 ----------------- */
let elemAnimeJs_1 = document.querySelector("#animejs-1");
let elmTextAnimeJs = document.querySelector(".divMenuAnimeJs");
let elmDivAnimeJs = document.querySelector("#divAll");
let createElm = document.createElement("div").innerHTML;
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
  let sourceCodeAnimJs = document.querySelector("#innerSourceCodeAnimeJs");
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
  let sourceCodeAnimJs = document.querySelector("#innerSourceCodeAnimeJs");
  sourceCodeAnimJs.classList.add("text-2xl");
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
  let sourceCodeAnimJs = document.querySelector("#innerSourceCodeAnimeJs");
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
  let sourceCodeAnimJs = document.querySelector("#innerSourceCodeAnimeJs");
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
console.log(ElmMoveJs);

//! move Mo.js \\

//? ======> MoveJs <======\\

const bouncyCircle = new mojs.Shape({
  parent: "#bouncyCircle",
  shape: "circle",
  fill: { "#F64040": "#FC46AD" },
  radius: { 20: 40 },
  duration: 2000,
  isYoyo: true,
  isShowStart: true,
  easing: "elastic.inout",
  repeat: 100,
});
// let mojs_1 = document.querySelector("#bouncyCircle2")
// console.log(mojs_1);
bouncyCircle.play();

new mojs.Shape({
  parent: "#circle",
  shape: "circle", // shape 'circle' is default
  radius: 25, // shape radius
  radiusX: 30,
  left: "25%",
  fill: "transparent", // same as 'transparent'
  stroke: "#F64040", // or 'cyan'
  strokeWidth: 5, // width of the stroke
  isShowStart: true, // show before any animation starts
});

new mojs.Shape({
  parent: "#circle2",
  shape: "circle", // shape 'circle' is default
  radius: 35, // shape radius
  radiusX: 60,
  left: "25%",
  fill: "deeppink", // same as 'transparent'
  stroke: "#F64040", // or 'cyan'
  strokeWidth: 7, // width of the stroke
  isShowStart: true, // show before any animation starts
});
var rect = new mojs.Shape({
  parent: "#test",

  stroke: "#F64040", // or 'cyan'
  shape: "rect",
  radius: 35,
  left: "50%",
  fill: "cyan",
  isShowStart: true,
});

var polygon = new mojs.Shape({
  parent: "#polygon",
  shape: "polygon",
  radiusX: 50,
  radiusY: 50,
  left: "75%",
  fill: "yellow",
  isShowStart: true,
});

var zigzag = new mojs.Shape({
  parent: "#zigzag",
  shape: "zigzag",
  points: 11,
  radius: 25,
  radiusY: 50,
  left: "25%",
  fill: "none",
  stroke: "deeppink",
  isShowStart: true,
});

var curve = new mojs.Shape({
  parent: "#curve",
  shape: "curve",
  points: 11,
  radius: 25,
  radiusY: 50,
  left: "50%",
  fill: "none",
  stroke: "deeppink",
  isShowStart: true,
});

var cross = new mojs.Shape({
  parent: "#cross",
  shape: "cross",
  points: 11,
  radius: 25,
  radiusX: 50,
  left: "75%",
  fill: "none",
  stroke: "deeppink",
  isShowStart: true,
  y: -25,
});
//======>Mojs 6<======\\
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
  `<div  class="w-3/4 flex justify-center">
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
   <div class="w-2/4 p-2 bg-blue-500 text-2xl text-white">
      <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">function-based-params-demo</span>"> 
         <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">autoplay-true</span>">   <<span class="text-yellow-600">/div</span>></h2>
         <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">autoplay-false</span>">   <<span class="text-yellow-600">/div</span>></h2>
         <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">autoplay-true</span>"> 
            <<span class="text-yellow-600">/div</span>></h2>
         <<span class="text-yellow-600">/div</span>></h2>
   </div>
   <div class="w-2/4 ">
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
   <div class="w-2/4 p-2 bg-rose-600/20 text-white h-auto">
      <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">css-transforms-demo</span>"> 
        
         <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">el</span>"> 
            <<span class="text-yellow-600">/div</span>></h2>
         <<span class="text-yellow-600">/div</span>></h2>
   </div>
   <div class="w-2/4 bg-rose-600/20 ">
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
      <div class="div w-3/4 h-2/6  flex absolute justify-center">
  <div id="innerSourceCodeAnimeJs" class="relative flex p-2   w-full h-5/6 z-10 animate__animated animate__zoomInDown bg-slate-200/30 border-8 ring ring-rose-500  border-double">
   <div class="w-2/4 p-2 bg-rose-600/20 text-white text-2xl">
      <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">motion-path-demo</span>"> 
         <h2 class="text-white"><<span class="text-yellow-600">div</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">el follow-path</span>">   <<span class="text-yellow-600">/div</span>></h2>
         <h2 class="text-white"><<span class="text-yellow-600">svg</span> <span class="text-yellow-400"> width=</span>"<span class="text-green-700">256</span>" <span class="text-yellow-400"> height=</span>"<span class="text-green-700">112</span>">
       <br>< <span class="text-yellow-600">path</span>> <<span class="text-yellow-600">path</span>> <<span class="text-yellow-600">/svg</span>></h2>
       <<span class="text-yellow-600">/div</span>></h2>
   </div>
   <div class="w-2/4 bg-rose-600/20 text-xg ">
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
      <div class="div w-3/4 h-2/6  flex absolute justify-center">
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
