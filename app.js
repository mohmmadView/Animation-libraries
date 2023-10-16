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
console.log(ArrayListMove.length);
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
console.log(elmDivAnimeJs);

let createElm = document.createElement("div").innerHTML;
console.log(elemAnimeJs_1);

elemAnimeJs_1.addEventListener("click", animeJs_1);
console.log("best");
let elmEl = document.querySelectorAll(".el");
console.log(elmEl);
// let Body = document.querySelector("body");
// Body.onclick=()=>{
//  let divSampleCode = document.querySelector("#innerSourceCodeAnimeJs");
//  if(divSampleCode){
//  divSampleCode.innerHTML="";
//  console.log(divSampleCode);
// }}
// console.log(Body,"body");
function animeJs_1() {
  createElm.classList =
    "relative bottom-56 w-3/4 h-52 animate__animated animate__zoomInDown bg-slate-200/30 border-8 ring ring-rose-500 border-double";
  elmDivAnimeJs.classList.remove("mt-52");
  elmDivAnimeJs.classList.add("mt-2");

  elmTextAnimeJs.innerHTML = "";
  ////! source code  anime js
  elmTextAnimeJs.insertAdjacentHTML(
    "beforeend",
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
`
    // textCodeMenuAnimeJs(codeAnimeJs1)
  );

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
//  elemAnimeJs_1.onclick=()=>{
//   console.log("test");
//   let codeAnimeJs1=
// textCodeMenuAnimeJs(codeAnimeJs1)

// }
// // console.log(codeAnimeJs1);
// function textCodeMenuAnimeJs(codeAnimeJs){
// return   codeAnimeJs
// }
//TODO --------------- animeJs-2 ----------------- */
let elementAnimeJS_2 = document.querySelector("#animejs-2");
console.log(elementAnimeJS_2);
elementAnimeJS_2.addEventListener("click", clickAnimejs_2);
function clickAnimejs_2() {
  /*DEMO*/
  let sourceCodeAnimJs = document.querySelector("#innerSourceCodeAnimeJs");
  console.log(sourceCodeAnimJs);

  createElm.classList =
    "relative bottom-56 w-3/4 h-52 animate__animated animate__zoomInDown bg-slate-200/30 border-8 ring ring-rose-500 border-double";
  elmDivAnimeJs.classList.remove("mt-52");
  elmDivAnimeJs.classList.add("mt-2");

  elmTextAnimeJs.innerHTML = "";
  ////! source code  anime js
  elmTextAnimeJs.insertAdjacentHTML(
    "beforeend",
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
 </div>
`
  );
  // let elmInnerSourceCode = document.querySelector('#innerSourceCodeAnimeJs');
  // elmInnerSourceCode.innerHTML="";
  // console.log(elmInnerSourceCode);
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
  /*DEMO*/
  // animeJs_1()
}

// function animeJs_2() {}

//TODO --------------- animeJs-3 ----------------- */
let elementAnimeJS_3 = document.querySelector("#animejs-3");
console.log(elementAnimeJS_3);
elementAnimeJS_3.addEventListener("click", clickAnimejs_3);
function clickAnimejs_3() {
  /*DEMO*/
  
  createElm.classList =
    "relative bottom-56 w-3/4 h-52 animate__animated animate__zoomInDown bg-slate-200/30 border-8 ring ring-rose-500 border-double";
  elmDivAnimeJs.classList.remove("mt-52");
  elmDivAnimeJs.classList.add("mt-2");

  elmTextAnimeJs.innerHTML = "";
  ////! source code  anime js
  elmTextAnimeJs.insertAdjacentHTML(
    "beforeend",
    `<div class="w-3/4 flex justify-center">
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
`
  );
  let sourceCodeAnimJs = document.querySelector("#innerSourceCodeAnimeJs");
  console.log(sourceCodeAnimJs);

sourceCodeAnimJs.classList.add("text-2xl");
  // let elmInnerSourceCode = document.querySelector('#innerSourceCodeAnimeJs');
  // elmInnerSourceCode.innerHTML="";
  // console.log(elmInnerSourceCode);
  //!  fix Repaly Fix
  //
  // anime({
  //   targets: ".css-transforms-demo .el",
  //   translateX: 180,
  //   scale: 2,
  //   rotate: "1turn",
  // });
  /*DEMO*/
  // animeJs_1()
  var progressLogEl = document.querySelector('.promise-demo .progress-log');
var promiseEl = document.querySelector('.promise-demo .el');
var finishedLogEl = document.querySelector('.promise-demo .finished-log');
var demoPromiseResetTimeout;

function logFinished() {
  anime.set(finishedLogEl, {value: 'Promise resolved'});
  anime.set(promiseEl, {backgroundColor: '#18FF92'});
}

var animation = anime.timeline({
  targets: promiseEl,
  delay: 400,
  duration: 380,
  endDelay: 400,
  easing: 'easeInOutSine',
  update: function(anim) {
    progressLogEl.value = 'progress : '+Math.round(anim.progress)+'%';
  }
}).add({
  translateX: 180
}).add({
  scale: 2
}).add({
  translateX: 0
});

animation.finished.then(logFinished);
}

//TODO --------------- animeJs-4 ----------------- */
let path = anime.path(".motion-path-demo path");
let elementAnimeJS_4 = document.querySelector("#animejs-4");
console.log(elementAnimeJS_4);
elementAnimeJS_4.addEventListener("click", clickAnimejs_4);

//  function animeJs_4() {

// var motionPath = function() {
/*DEMO*/

function clickAnimejs_4() {
  /*DEMO*/

  createElm.classList =
    "relative bottom-56 w-3/4 h-52 animate__animated animate__zoomInDown bg-slate-200/30 border-8 ring ring-rose-500 border-double";
  elmDivAnimeJs.classList.remove("mt-52");
  elmDivAnimeJs.classList.add("mt-2");

  elmTextAnimeJs.innerHTML = "";
  ////! source code  anime js
  elmTextAnimeJs.insertAdjacentHTML(
    "beforeend",
    `<div class="div w-3/4 h-2/6  flex absolute justify-center">
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
`
  );
    let sourceCodeAnimJs = document.querySelector("#innerSourceCodeAnimeJs");
    console.log(sourceCodeAnimJs);
  // var myPath = anime.path('svg path');
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

  //  }
}

//TODO --------------- animeJs-5 ----------------- */
// let path = anime.path(".motion-path-demo path");
let elementAnimeJS_5 = document.querySelector("#animejs-5");
console.log(elementAnimeJS_5);
elementAnimeJS_5.addEventListener("click", clickAnimejs_5);


function clickAnimejs_5() {
  /*DEMO*/
  console.log("test");
  let sourceCodeAnimJs = document.querySelector("#innerSourceCodeAnimeJs");

  createElm.classList =
    "relative bottom-56 w-3/4 h-52 animate__animated animate__zoomInDown bg-slate-200/30 border-8 ring ring-rose-500 border-double";
  elmDivAnimeJs.classList.remove("mt-52");
  elmDivAnimeJs.classList.add("mt-2");

  elmTextAnimeJs.innerHTML = "";
  ////! source code  anime js
  elmTextAnimeJs.insertAdjacentHTML(
    "beforeend",
  
    `<div class="div w-3/4 h-2/6  flex absolute justify-center">
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
`
  );
  // var myPath = anime.path('svg path');
anime({
  targets: '.staggering-grid-demo .el',
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1200}
  ],
  delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
});
  

  //  }
}

//TODO --------------- animeJs-6 ----------------- */

var animation = anime({
  targets: '.seek-anim-demo .el',
  translateX: 180,
  delay: function(el, i) { return i * 100; },
  elasticity: 200,
  easing: 'easeInOutSine',
  autoplay: false
});

var seekProgressEl = document.querySelector('.seek-anim-demo .progress');
seekProgressEl.oninput = function() {
  animation.seek(animation.duration * (seekProgressEl.value / 100));
};
function menuAnimeJs(colorBorder, colorBg, colorShadow) {
  let elmAll_Menu = document.querySelectorAll(".menuAnimeJs");
  for (let i = 0; i < elmAll_Menu.length; i++) {}
}

//TODO --------------- animeJs-7 ----------------- */
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });





  //!====>move moJs <=====\\
  let scr = window.scrollY;
console.log("scroolScreen",scr);
let ElmMoveJs = document.querySelector('#moveMoJs');

console.log(ElmMoveJs); 
  // winScroll(1920,ElmMoveJs, 'autoplay-true')
window.addEventListener("scroll",()=>{
if(1818 < window.scrollY)
console.log("test good scroll");
anime({
  targets: "#moveMoJs",
  translateX: 500,
  autoplay: 'false',
  easing: "easeInOutSine",
});
anime({
  targets: "#moveMoJs2",
  translateX: -500,
  autoplay: "false",
  easing: "easeInOutSine",
});
})
console.log(ElmMoveJs); 
 
 //! move Mo.js \\

 
  //? ======> MoveJs <======\\
  
  const bouncyCircle = new mojs.Shape({
    parent:       '#bouncyCircle',
    shape:        'circle',
    fill:         {'#F64040': '#FC46AD'},
    radius:       {20: 40},
    duration:     2000,
    isYoyo:       true,
    isShowStart:  true,
    easing:       'elastic.inout',
    repeat:       100,
  });
// let mojs_1 = document.querySelector("#bouncyCircle2")
// console.log(mojs_1);
  bouncyCircle.play()

 new mojs.Shape({
    parent:       '#circle',
    shape:        'circle',     // shape 'circle' is default
    radius:       25,           // shape radius
    radiusX:      30,
    left:         '25%',
    fill:         'transparent',// same as 'transparent'
    stroke:       '#F64040',    // or 'cyan'
    strokeWidth:  5,            // width of the stroke
    isShowStart:  true,         // show before any animation starts
  });

  new mojs.Shape({
    parent:       '#circle2',
    shape:        'circle',     // shape 'circle' is default
    radius:       35,           // shape radius
    radiusX:      60,
    left:         '25%',
    fill:         'deeppink',// same as 'transparent'
    stroke:       '#F64040',    // or 'cyan'
    strokeWidth:  7,            // width of the stroke
    isShowStart:  true,         // show before any animation starts
  });
  var rect = new mojs.Shape({
    parent:       '#test',

    stroke:       '#F64040',    // or 'cyan'
    shape:        'rect',
    radius:       35,
    left:         '50%',
    fill:         'cyan',
    isShowStart:  true,
  });
  
  var polygon = new mojs.Shape({
    parent:       '#polygon', 
    shape:        'polygon',
    radiusX:      50,
    radiusY:      50,
    left:         '75%',
    fill:         'yellow',
    isShowStart:  true,
  });


  var zigzag = new mojs.Shape({
    parent:      '#zigzag',
    shape:       'zigzag',
    points:       11,
    radius:       25,
    radiusY:      50,
    left:         '25%',
    fill:         'none',
    stroke:       'deeppink',
    isShowStart:   true,
  });
  
  var curve = new mojs.Shape({
    parent:       '#curve',    
    shape:        'curve',
    points:       11,
    radius:       25,
    radiusY:      50,
    left:         '50%',
    fill:         'none',
    stroke:       'deeppink',
    isShowStart:   true,
  });
  
  var cross = new mojs.Shape({
    parent:       '#cross',
    shape:        'cross',
    points:       11,
    radius:       25,
    radiusX:      50,
    left:         '75%',
    fill:         'none',
    stroke:       'deeppink',
    isShowStart:   true,
    y:            -25,
  });
  //======>Mojs 6<======\\
//   const COLORS = {
//     white:   '#ffffff',
//     black:   '#000000',
//     green:   '#49F2CC',
//     lightGrey: '#777',
//     grey:    '#29363B',
//     cyan:    'cyan',
//     yellow:  '#FFE202',
//     hotpink: 'deeppink',
//   };

// const _getWindowSize = () => {
// const w = document.querySelector('#mojs-div');
// console.log(w.clientHeight);
// return Math.max( w.innerWidth   )
// }

// const _calcScale = (radius) => {
// return 1.4 * (_getWindowSize() / radius / 2);
// }

// let circleSize = 500,
// scale      = _calcScale( circleSize ),
// opts       = {
//   radius:     circleSize,
//   fill:       COLORS.grey,
//   scale:      { 0.05 : 0.2 },
//   duration:   465,
//   easing:     'cubic.out',
//   isShowEnd:  false,
//   isForce3d:  true,
// };

// const circle1 = new mojs.Shape(opts)
// .then({
// easing:     'cubic.inout',
// scale:      .125,
// duration:   350
// }).then({
// easing:     'cubic.inout',
// scale:      scale,
// duration:   465
// });

// const circle2 = new mojs.Shape({
// ...opts,
// fill:       COLORS.lightGrey,
// scale:      { 0 : .1125 },
// duration:   407,
// delay:      580
// }).then({
// easing:     'cubic.inout',
// scale:      scale,
// duration:   350
// });

// const circle3 = new mojs.Shape({
// ...opts,
// scale:        { 0: scale },
// duration:     580,
// delay:        1160,
// isShowStart:  true,
// // isShowEnd:    true
// });

// const smallCircle = new mojs.Shape({
// radius:       { 5: 25 },
// fill:         'none',
// stroke:       COLORS.grey,
// strokeWidth:  { 20: 0 },
// isShowEnd:    false,
// delay:        700,
// duration:     290,
// });

// const triangleOpts = {
// shape:      'polygon',
// radius:     15,
// duration:   407,
// fill:       COLORS.lightGrey,
// y:          { 80 : -15 },
// scale:      {  1 : 0 },
// delay:      495,
// isForce3d:  true,
// easing:     'cubic.out'
// }
// const triangle1 = new mojs.Shape( triangleOpts );

// const triangle2 = new mojs.Shape({
// ...triangleOpts,
// y:        { [-80] : 15 },
// angle:    180
// });

// const lineOpts = {
// shape:            'line',
// x:               -180,
// radius:           50,
// radiusY:          0,
// stroke:           COLORS.grey,
// strokeWidth:      {15 : 0},
// duration:         580,
// isShowEnd:        false,
// strokeDasharray:  '100% 100%',
// strokeDashoffset: { '-100%': '100%' },
// easing:           'cubic.out',
// }
// const line1 = new mojs.Shape(lineOpts);

// const line2 = new mojs.Shape({
// ...lineOpts,
// angle:  180,
// x:      -lineOpts.x
// });

// const timeline = new mojs.Timeline();
// timeline
// .add(
// circle1, circle2, circle3, smallCircle,
// triangle1, triangle2,
// line1, line2
// );

// new MojsPlayer({ add: timeline, isPlaying: true, isRepeat: true });

const COLORS = {
  white:   '#ffffff',
  black:   '#000000',
  green:   '#49F2CC',
  lightGrey: '#777',
  grey:    '#29363B',
  cyan:    'cyan',
  yellow:  '#FFE202',
  hotpink: 'deeppink',
};

// ADD CUSTOM SHAPES
class M extends mojs.CustomShape {
  getShape () {
    return '<path d="M91.5714286,44.4285714 L91.5714286,100 L96.7142857,100 L96.7142857,33.4285714 L49.8571429,72 L3,33.4285714 L3,100 L8.14285714,100 L8.14285714,44.4285714 L49.8571429,78.7142857 L91.5714286,44.4285714 Z M49.8571429,38.7142857 L92,3.85714286 L88.7142857,-6.50146603e-13 L49.8571429,31.8571429 L11,-6.50146603e-13 L7.71428571,3.85714286 L49.8571429,38.7142857 Z"></path>';
  }
}
mojs.addShape('m', M);

class J extends mojs.CustomShape {
  getShape () {
    return '<path d="M22,87.535014 C27.7422969,95.0980392 36.8459384,100 47.070028,100 C64.2969188,100 78.442577,88.6554622 78.442577,68.627451 L78.442577,0 L73.4005602,0 L73.4005602,68.627451 C73.4005602,85.8543417 61.4957983,94.9579832 47.070028,94.9579832 C38.3865546,94.9579832 30.5434174,90.6162465 25.7815126,84.0336134 L22,87.535014 Z"></path>';
  }
}
mojs.addShape('j', J);

class S extends mojs.CustomShape {
  getShape () {
    return '<path d="M15,71.0164835 C15,92.3076923 34.7802198,100 49.478022,100 C68.5714286,100 84.0934066,91.2087912 84.0934066,72.3901099 C84.0934066,61.5384615 79.2857143,51.7857143 61.978022,45.1923077 C45.2197802,38.8736264 27.2252747,35.5769231 27.2252747,21.8406593 C27.2252747,10.3021978 38.0769231,4.53296703 48.9285714,4.53296703 C59.9175824,4.53296703 70.7692308,10.3021978 70.7692308,21.8406593 L75.7142857,21.8406593 C75.7142857,7.14285714 62.6648352,0 49.478022,0 C36.0164835,0 22.2802198,7.41758242 22.2802198,21.8406593 C22.2802198,39.5604396 43.4340659,42.9945055 60.6043956,49.5879121 C74.8901099,55.0824176 79.1483516,63.7362637 79.1483516,72.5274725 C79.1483516,89.010989 64.1758242,95.0549451 49.478022,95.0549451 C35.3296703,95.0549451 19.9450549,87.6373626 19.9450549,71.0164835 L15,71.0164835 Z"></path>';
  }
}
mojs.addShape('s', S);

// VARIABLES
const {approximate} = mojs.easing,
      shiftCurve = approximate(mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' )),
      scaleCurve = approximate(mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100' )),
      charSize = 25,
      leftStep = 22,
      logo     = document.querySelector('#js-logo');

const CHAR_OPTS = {
        parent:       logo,
        isForce3d:    true,
        fill:         'white',
        radius:       charSize/2,
        stroke:       'white',
        strokeWidth:  2
      }

const CHAR_HIDE_THEN = {
        delay: 930,
        isShowEnd: false
      }

// HELPERS
const scale = function (curve, n) {
  return (p) => { return n*curve(p); }
}
const increase = function (curve, n) {
  return (p) => { return n + curve(p); }
}

// CURVES
const scaleC = approximate( increase( scaleCurve, 1 ) ),
      scaledCurve = ( amount ) => {
        return increase( scale( scaleCurve, amount ), 1 );
      },
      scaleCShort = approximate( scaledCurve(.75) );


// SHAPES
const mCharacter = new mojs.Shape({
    ...CHAR_OPTS,
    shape:    'm',
    left:     leftStep + '%',
    x:        -7,
    y:        { [350] : 150, easing: shiftCurve },
    scaleY:   { 1 : 1, curve: scaleCShort },
    origin:   { '50% 100%' : '50% 0%', easing: shiftCurve },
    delay:    232,
    duration: 680,
  }).then({
    delay:   115,
    y:       { to: 0, easing: shiftCurve },
    scaleY:  { 1: 1, curve: approximate( scaledCurve(.5) ) },
    origin: { '50% 100%' : '50% 0%', easing: shiftCurve }
  }).then(CHAR_HIDE_THEN);

const oCharacter = new mojs.Shape({
    ...CHAR_OPTS, 
    shape:        'circle',
    fill:         'none',
    left:         2*leftStep + '%',
    delay:        350,
    duration:     465,
    strokeWidth:  3,
    x:            200,
    y:            { [-100] : 250, easing: shiftCurve },
    scaleY:       { 1: 1, curve: scaleC },
    origin:       { '50% 0%' : '50% 100%', easing: shiftCurve }
  }).then({
    duration:     407,
    x:            { to: 0, easing: shiftCurve },
    scaleX:       { 1: 1, curve: scaleCShort },
    origin:       { '100% 50%' : '0% 50%', easing: shiftCurve }
  }).then({
    duration:     700,
    y:            { to: 0, easing: shiftCurve },
    scaleY:       { 1: 1, curve: scaleCShort },
    origin:       { '50% 100%' : '50% 0%', easing: shiftCurve }
  }).then(CHAR_HIDE_THEN);

const oCharacterInner = new mojs.Shape({
    parent: oCharacter.el,
    fill:         'white',
    radius:       3,
    delay:        1337,
    y:            { 0: 35 },
    easing:       'expo.out',
    isForce3d:    true,
    isShowStart:  true
}).then({
    y:            0,
    easing:       'elastic.out',
    duration:     1160,
});

const jCharacter = new mojs.Shape({
      ...CHAR_OPTS,
      shape:      'j',
      left:       3*leftStep + '%',
      delay:      40,
      duration:   580,
      x:         -200,
      y:          { [250] : -100, easing: shiftCurve },
      scaleY:     { 1: 1, curve: scaleC },
      origin:     { '50% 100%' : '50% 0%', easing: shiftCurve }
    })
.then({
      duration:   523,
      x:          { to: 0, easing: shiftCurve },
      scaleX:     { 1: 1, curve: scaleCShort },
      origin:     { '0% 50%' : '100% 50%', easing: shiftCurve }
    })
.then({
      y:          { to: 0, easing: shiftCurve },
      // x:          { to: charSize, easing: shiftCurve },
      scaleY:     { 1: 1, curve:  approximate( scaledCurve(.5) ) },
      origin:     { '50% 0%' : '50% 100%', easing: shiftCurve }
}).then(CHAR_HIDE_THEN);

const sCharacter = new mojs.Shape({
      ...CHAR_OPTS,
      shape:      's',
      left:       4*leftStep + '%',
      delay:      116,
      duration:   523,
      x:          { 500: 0, easing: shiftCurve },
      y:          200,
      scaleX:     { 1: 1, curve: scaleC },
      origin:     { '100% 50%' : '0% 100%', easing: shiftCurve }
    })
.then({
      delay:      116,
      y:          { to: 0, easing: shiftCurve },
      scaleY:     { 1: 1, curve: scaleCShort },
      origin:     { '50% 100%' : '50% 0%', easing: shiftCurve }
    }).then({ ...CHAR_HIDE_THEN, delay: 1280 });

// LINES

let LINE_OPTS = {
  shape:        'line',
  strokeWidth:  { 10: 0 },
  stroke:       COLORS.cyan,
  radius:       44,
  parent:       logo,
  angle:        90,
  duration:     465,
  delay:        495,
  radiusY:      0,
  strokeDasharray: '100% 100%',
  strokeDashoffset: { '100%': '-100%' }
};

let line1 = new mojs.Shape({
  ...LINE_OPTS,
  x:  189,
  y:  { [-20] : 160 },
});

let line2 = new mojs.Shape({
  ...LINE_OPTS,
  x: -175,
  y: { 200 : -20 },
  stroke: COLORS.hotpink,
  strokeDashoffset: { '-100%' : '100%' },
  delay: 290
});

let line3 = new mojs.Shape({
  ...LINE_OPTS,
  radius: 53,
  y: 30,
  stroke: COLORS.yellow,
  strokeDashoffset: { '-100%': '100%' },
  delay: 804,
  angle: 0
});

let StaggerShape = new mojs.stagger( mojs.Shape );

let underlines = new StaggerShape({
  ...LINE_OPTS,
  radius: 53,
  angle:  0,
  radiusY: 0,
  y: 30,
  strokeWidth: 2,
  stroke: [ COLORS.hotpink, COLORS.yellow, COLORS.cyan, COLORS.white ],
  duration: 581,
  delay: 'stagger(1686, 145)',
  strokeDasharray: null,
  strokeDashoffset: null,
  scaleX: { 0: 1 },
  origin: '0 50%',
  quantifier: 'stroke',
  easing: 'expo.out',
  x: 1,
  isForce3d: true
});

// SHAPES
let shapes = new StaggerShape({
  parent:       logo,
  left:         '100%',
  x:            [ -20, 10, 0 ],
  y:            [ -25, -5, -35 ],
  quantifier:   'shape',
  shape:        [ 'circle', 'polygon', 'rect' ],
  radius:       7,
  fill:         'none',
  stroke:       [ 'deeppink', COLORS.cyan, COLORS.yellow ],
  strokeWidth:  { 5 : 0 },
  scale:        { .75 : 1 },
  delay:        'stagger(1860, 58)',
  isTimelineLess: true
});

// LOGO SHIFT
let yShift = 0;
const getYShift = () => {
  const w = window;
  const height = w.innerHeight || e.clientHeight || g.clientHeight;
  yShift = height/1.5;
}

getYShift();
window.addEventListener('resize', getYShift);


let logoShift = new mojs.Tween({
  duration: 349,
  delay:    2790,
  onUpdate (p) {
    var shiftP = mojs.easing.cubic.in( p );
    var scaleP = mojs.easing.quad.in( p );
    
    mojs.h.setPrefixedStyle( logo, 'transform',
      `translate(0px, ${ yShift*shiftP }px)
      scaleY(${ 1 + 25*scaleP })`
    );
  }
})

const timeline = new mojs.Timeline({
  onStart () {
    mojs.h.setPrefixedStyle( logo, 'transform', 'none' );
  },
  onComplete () {
    let modules = underlines.childModules;
    for (var i = 0; i < modules.length; i++) {
      modules[i]._hide();
    }
  }
});
timeline
  .add(
  mCharacter, oCharacter, oCharacterInner, jCharacter, sCharacter,
  underlines, line1, line2, line3,
  shapes,
  logoShift
);

// var hoter = new MojsPlayer({ add: timeline, isPlaying: true, isRepeat: true });

  function winScroll(number,element,classId) {
    if (window.scrollY > number) {
      element.classList.add(classId);
    } else {
      element.classList.remove(classId);
    }
  }
