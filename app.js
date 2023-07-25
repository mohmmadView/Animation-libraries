
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

  function winScroll(number,element,classId) {
    if (window.scrollY > number) {
      element.classList.add(classId);
    } else {
      element.classList.remove(classId);
    }
  }
 /**
	Prism Live: Code editor based on Prism.js
	Works best in Chrome. Currently only very basic support in other browsers (no snippets, no shortcuts)
	@author Lea Verou
*/
(async function() {

  const CURRENT_URL = document.currentScript? new URL(document.currentScript.src) : null;
  
  if (!window.Bliss) {
    // Load Bliss if not loaded
    console.log("Bliss not loaded. Loading remotely from blissfuljs.com");
  
    let bliss = document.createElement("script");
    bliss.src = "https://blissfuljs.com/bliss.shy.min.js";
    document.head.appendChild(bliss);
  
    await new Promise(resolve => bliss.onload = resolve);
  }
  
  var $ = Bliss, $$ = Bliss.$;
  var ready = Promise.resolve();
  
  if (CURRENT_URL) {
    // Tiny dynamic loader. Use e.g. ?load=css,markup,javascript to load components
    var load = CURRENT_URL.searchParams.get("load");
  
    if (load !== null) {
      var files = ["../prism-live.css"];
  
      if (load) {
        files.push(...load.split(/,/).map(c => /\./.test(c)? c : `prism-live-${c}.js`));
      }
  
      ready = Promise.all(files.map(url => $.load(url, CURRENT_URL)));
    }
  }
  
  var superKey = navigator.platform.indexOf("Mac") === 0? "metaKey" : "ctrlKey";
  
  var _ = Prism.Live = class PrismLive {
    constructor(source) {
      this.source = source;
      this.sourceType = source.nodeName.toLowerCase();
  
      this.wrapper = $.create({
        className: "prism-live",
        around: this.source
      });
  
      if (this.sourceType === "textarea") {
        this.textarea = this.source;
        this.code = $.create("code");
  
        this.pre = $.create("pre", {
          className: this.textarea.className + " no-whitespace-normalization",
          contents: this.code,
          before: this.textarea
        });
      }
      else {
        this.pre = this.source;
        // Normalize once, to fix indentation from markup and then remove normalization
        // so we can enter blank lines etc
  
        // Prism.plugins.NormalizeWhitespace.normalize($("code", this.pre), {});
        this.pre.classList.add("no-whitespace-normalization");
        this.code = $("code", this.pre);
  
        this.textarea = $.create("textarea", {
          className: this.pre.className,
          value: this.pre.textContent,
          after: this.pre
        });
      }
  
      _.all.set(this.textarea, this);
      _.all.set(this.pre, this);
      _.all.set(this.code, this);
  
      this.pre.classList.add("prism-live");
      this.textarea.classList.add("prism-live");
      this.source.classList.add("prism-live-source");
  
      if (self.Incrementable) {
        // TODO data-* attribute for modifier
        // TODO load dynamically if not present
        new Incrementable(this.textarea);
      }
  
      $.bind(this.textarea, {
        input: evt => this.update(),
  
        keyup: evt => {
          if (evt.key == "Enter") { // Enter
            // Maintain indent on line breaks
            this.insert(this.currentIndent);
            this.syncScroll();
          }
        },
  
        keydown: evt => {
          if (evt.key == "Tab" && !evt.altKey) {
            // Default is to move focus off the textarea
            // this is never desirable in an editor
            evt.preventDefault();
  
            if (this.tabstops && this.tabstops.length > 0) {
              // We have tabstops to go
              this.moveCaret(this.tabstops.shift());
            }
            else if (this.hasSelection) {
              var before = this.beforeCaret("\n");
              var outdent = evt.shiftKey;
  
              this.selectionStart -= before.length;
  
              var selection = _.adjustIndentation(this.selection, {
                relative: true,
                indentation: outdent? -1 : 1
              });
  
              this.replace(selection);
  
              if (outdent) {
                var indentStart = _.regexp.gm`^${this.indent}`;
                var isBeforeIndented = indentStart.test(before);
                this.selectionStart += before.length + 1 - (outdent + isBeforeIndented);
              }
              else { // Indent
                var hasLineAbove = before.length == this.selectionStart;
                this.selectionStart += before.length + 1 + !hasLineAbove;
              }
            }
            else {
              // Nothing selected, expand snippet
              var selector = _.match(this.beforeCaret(), /\S*$/);
              var snippetExpanded = this.expandSnippet(selector);
  
              if (snippetExpanded) {
                requestAnimationFrame(() => $.fire(this.textarea, "input"));
              }
              else {
                this.insert(this.indent);
              }
            }
          }
          else if (_.pairs[evt.key]) {
            var other = _.pairs[evt.key];
            this.wrapSelection({
              before: evt.key,
              after: other,
              outside: true
            });
            evt.preventDefault();
          }
          else if (Object.values(_.pairs).includes(evt.key)) {
            if (this.selectionStart == this.selectionEnd && this.textarea.value[this.selectionEnd] == evt.key) {
              this.selectionStart += 1;
              this.selectionEnd += 1;
              evt.preventDefault();
            }
          }
          else {
            for (let shortcut in _.shortcuts) {
              if (_.checkShortcut(shortcut, evt)) {
                _.shortcuts[shortcut].call(this, evt);
                evt.preventDefault();
              }
            }
          }
        },
  
        click: evt => {
          var l = this.getLine();
          var v = this.value;
          var ss = this.selectionStart;
          //console.log(ss, v[ss], l, v.slice(l.start, l.end));
        },
  
        "click keyup": evt => {
          if (!evt.key || evt.key.lastIndexOf("Arrow") > -1) {
            // Caret moved
            this.tabstops = null;
          }
        }
      });
  
      // this.syncScroll();
      this.textarea.addEventListener("scroll", this, {passive: true});
  
      $.bind(window, {
        "resize": evt => this.syncStyles()
      });
  
      // Copy styles with a delay
      requestAnimationFrame(() => {
        this.syncStyles();
  
        var sourceCS = getComputedStyle(this.source);
  
        this.pre.style.height = this.source.style.height || sourceCS.getPropertyValue("--height");
        this.pre.style.maxHeight = this.source.style.maxHeight || sourceCS.getPropertyValue("--max-height");
        this.textarea.spellcheck = this.source.spellcheck || sourceCS.getPropertyValue("--spellcheck");
      });
  
      this.update();
      this.lang = (this.code.className.match(/lang(?:uage)?-(\w+)/i) || [,])[1];
  
      this.observer = new MutationObserver(r => {
        if (document.activeElement !== this.textarea) {
          this.textarea.value = this.pre.textContent;
        }
      });
  
      this.observe();
  
      this.source.dispatchEvent(new CustomEvent("prism-live-init", {bubbles: true, detail: this}));
    }
  
    handleEvent(evt) {
      if (evt.type === "scroll") {
        this.syncScroll();
      }
    }
  
    observe () {
      return this.observer && this.observer.observe(this.pre, {
        childList: true,
        subtree: true,
        characterData: true
      });
    }
  
    unobserve () {
      if (this.observer) {
        this.observer.takeRecords();
        this.observer.disconnect();
      }
    }
  
    expandSnippet(text) {
      if (!text) {
        return false;
      }
  
      var context = this.context;
  
      if (text in context.snippets || text in _.snippets) {
        // Static Snippets
        var expansion = context.snippets[text] || _.snippets[text];
      }
      else if (context.snippets.custom) {
        var expansion = context.snippets.custom.call(this, text);
      }
  
      if (expansion) {
        // Insert snippet
        var stops = [];
        var replacement = [];
        var str = expansion;
        var match;
  
        while (match = _.CARET_INDICATOR.exec(str)) {
          stops.push(match.index + 1);
          replacement.push(str.slice(0, match.index + match[1].length));
          str = str.slice(match.index + match[0].length);
          _.CARET_INDICATOR.lastIndex = 0;
        }
  
        replacement.push(str);
        replacement = replacement.join("");
  
        if (stops.length > 0) {
          // make first stop relative to end, all others relative to previous stop
          stops[0] -= replacement.length;
        }
  
        this.delete(text);
        this.insert(replacement, {matchIndentation: true});
        this.tabstops = stops;
        this.moveCaret(this.tabstops.shift());
      }
  
      return !!expansion;
    }
  
    get selectionStart() {
      return this.textarea.selectionStart;
    }
    set selectionStart(v) {
      this.textarea.selectionStart = v;
    }
  
    get selectionEnd() {
      return this.textarea.selectionEnd;
    }
    set selectionEnd(v) {
      this.textarea.selectionEnd = v;
    }
  
    get hasSelection() {
      return this.selectionStart != this.selectionEnd;
    }
  
    get selection() {
      return this.value.slice(this.selectionStart, this.selectionEnd);
    }
  
    get value() {
      return this.textarea.value;
    }
    set value(v) {
      this.textarea.value = v;
    }
  
    get indent() {
      return _.match(this.value, /^[\t ]+/m, _.DEFAULT_INDENT);
    }
  
    get currentIndent() {
      var before = this.value.slice(0, this.selectionStart-1);
      return _.match(before, /^[\t ]*/mg, "", -1);
    }
  
    // Current language at caret position
    get currentLanguage() {
      var node = this.getNode();
      node = node? node.parentNode : this.code;
      var lang = _.match(node.closest('[class*="language-"]').className, /language-(\w+)/, 1);
      return _.aliases[lang] || lang;
    }
  
    // Get settings based on current language
    get context() {
      var lang = this.currentLanguage;
      return _.languages[lang] || _.languages.DEFAULT;
    }
  
    setSelection(start, end) {
      if (start && typeof start === "object" && (start.start || start.end)) {
        end = start.end;
        start = start.start;
      }
  
      let prevStart = this.selectionStart;
      let prevEnd = this.selectionEnd;
  
      if (start !== undefined) {
        this.selectionStart = start;
      }
  
      if (end !== undefined) {
        this.selectionEnd = end;
      }
  
      // If there is a selection, and it's not the same as the previous selection, fire appropriate select event
      if (this.selectionStart !== this.selectionEnd && (prevStart !== this.selectionStart || prevEnd !== this.selectionEnd)) {
        this.textarea.dispatchEvent(new Event("select", {bubbles: true}));
      }
    }
  
    update (force) {
      var code = this.value;
  
      // If code ends in newline then browser "conveniently" trims it
      // but we want to see the new line we just inserted!
      // So we insert a zero-width space, which isn't trimmed
      if (/\n$/.test(this.value)) {
        code += "\u200b";
      }
  
      if (!force && this.code.textContent === code && $(".token", this.code)) {
        // Already highlighted
        return;
      }
  
      this.unobserve();
      this.code.textContent = code;
  
      Prism.highlightElement(this.code);
  
      this.observe();
    }
  
    syncStyles() {
      // Copy pre metrics over to textarea
      var cs = getComputedStyle(this.pre);
  
      // Copy styles from <pre> to textarea
      this.textarea.style.caretColor = cs.color;
  
      var properties = /^(font|lineHeight)|[tT]abSize/gi;
  
      for (var prop in cs) {
        if (cs[prop] && prop in this.textarea.style && properties.test(prop)) {
          this.wrapper.style[prop] = cs[prop];
          this.textarea.style[prop] = this.pre.style[prop] = "inherit";
        }
      }
  
      // This is primarily for supporting the line-numbers plugin.
      this.textarea.style['padding-left'] = cs['padding-left'];
  
      this.update();
    }
  
    syncScroll() {
      if (this.pre.clientWidth === 0 && this.pre.clientHeight === 0) {
        return;
      }
  
      this.pre.scrollTop = this.textarea.scrollTop;
      this.pre.scrollLeft = this.textarea.scrollLeft;
    }
  
    beforeCaretIndex (until = "") {
      return this.value.lastIndexOf(until, this.selectionStart);
    }
  
    afterCaretIndex (until = "") {
      return this.value.indexOf(until, this.selectionEnd);
    }
  
    beforeCaret (until = "") {
      var index = this.beforeCaretIndex(until);
  
      if (index === -1 || !until) {
        index = 0;
      }
  
      return this.value.slice(index, this.selectionStart);
    }
  
    getLine(offset = this.selectionStart) {
      var value = this.value;
      var lf = "\n", cr = "\r";
      var start, end, char;
  
      for (var start = this.selectionStart; char = value[start]; start--) {
        if (char === lf || char === cr || !start) {
          break;
        }
      }
  
      for (var end = this.selectionStart; char = value[end]; end++) {
        if (char === lf || char === cr) {
          break;
        }
      }
  
      return {start, end};
    }
  
    afterCaret(until = "") {
      var index = this.afterCaretIndex(until);
  
      if (index === -1 || !until) {
        index = undefined;
      }
  
      return this.value.slice(this.selectionEnd, index);
    }
  
    setCaret(pos) {
      this.selectionStart = this.selectionEnd = pos;
    }
  
    moveCaret(chars) {
      if (chars) {
        this.setCaret(this.selectionEnd + chars);
      }
    }
  
    insert(text, {index} = {}) {
      if (!text) {
        return;
      }
  
      this.textarea.focus();
  
      if (index === undefined) {
        // No specified index, insert in current caret position
        this.replace(text);
      }
      else {
        // Specified index, first move caret there
        var start = this.selectionStart;
        var end = this.selectionEnd;
  
        this.selectionStart = this.selectionEnd = index;
        this.replace(text);
  
        this.setSelection(
          start + (index < start? text.length : 0),
          end + (index <= end? text.length : 0)
        );
      }
    }
  
    // Replace currently selected text
    replace (text) {
      var hadSelection = this.hasSelection;
  
      this.insertText(text);
  
      if (hadSelection) {
        // By default inserText places the caret at the end, losing any selection
        // What we want instead is the replaced text to be selected
        this.setSelection({start: this.selectionEnd - text.length});
      }
    }
  
    // Set text between indexes and restore caret position
    set (text, {start, end} = {}) {
      var ss = this.selectionStart;
      var se = this.selectionEnd;
  
      this.setSelection(start, end);
  
      this.insertText(text);
  
      this.setSelection(ss, se);
    }
  
    insertText (text) {
      if (!text) {
        return;
      }
  
      if (_.supportsExecCommand === true) {
        document.execCommand("insertText", false, text);
      }
      else if (_.supportsExecCommand === undefined) {
        // We still don't know if document.execCommand("insertText") is supported
        let value = this.value;
  
        document.execCommand("insertText", false, text);
  
        _.supportsExecCommand = value !== this.value;
      }
  
      if (_.supportsExecCommand === false) {
        this.textarea.setRangeText(text, this.selectionStart, this.selectionEnd, "end");
        requestAnimationFrame(() => this.update());
      }
  
      return _.supportsExecCommand;
    }
  
    /**
     * Wrap text with strings
     * @param before {String} The text to insert before
     * @param after {String} The text to insert after
     * @param start {Number} Character offset
     * @param end {Number} Character offset
     */
    wrap ({before, after, start = this.selectionStart, end = this.selectionEnd} = {}) {
      var ss = this.selectionStart;
      var se = this.selectionEnd;
      var between = this.value.slice(start, end);
  
      this.set(before + between + after, {start, end});
  
      if (ss > start) {
        ss += before.length;
      }
  
      if (se > start) {
        se += before.length;
      }
  
      if (ss > end) {
        ss += after.length;
      }
  
      if (se > end) {
        se += after.length;
      }
  
      this.setSelection(ss, se);
    }
  
    wrapSelection (o = {}) {
      var hadSelection = this.hasSelection;
  
      this.replace(o.before + this.selection + o.after);
  
      if (hadSelection) {
        if (o.outside) {
          // Do not include new text in selection
          this.selectionStart += o.before.length;
          this.selectionEnd -= o.after.length;
        }
      }
      else {
        this.moveCaret(-o.after.length);
      }
    }
  
    toggleComment() {
      var comments = this.context.comments;
  
      // Are we inside a comment?
      var node = this.getNode();
      var commentNode = node.parentNode.closest(".token.comment");
  
      if (commentNode) {
        // Remove comment
        var start = this.getOffset(commentNode);
        var commentText = commentNode.textContent;
  
        if (comments.singleline && commentText.indexOf(comments.singleline) === 0) {
          var end = start + commentText.length;
          this.set(this.value.slice(start + comments.singleline.length, end), {start, end});
          this.moveCaret(-comments.singleline.length);
        }
        else {
          comments = comments.multiline || comments;
          var end = start + commentText.length - comments[1].length;
          this.set(this.value.slice(start + comments[0].length, end), {start, end: end + comments[1].length});
        }
      }
      else {
        // Not inside comment, add
        if (this.hasSelection) {
          comments = comments.multiline || comments;
  
          this.wrapSelection({
            before: comments[0],
            after: comments[1]
          });
        }
        else {
          // No selection, wrap line
          // FIXME *inside indent*
          comments = comments.singleline? [comments.singleline, ""] : comments.multiline || comments;
          end = this.afterCaretIndex("\n");
          this.wrap({
            before: comments[0],
            after: comments[1],
            start: this.beforeCaretIndex("\n") + 1,
            end: end < 0? this.value.length : end
          });
        }
      }
    }
  
    duplicateContent () {
      var before = this.beforeCaret("\n");
      var after = this.afterCaret("\n");
      var text = before + this.selection + after;
  
      this.insert(text, {index: this.selectionStart - before.length});
    }
  
    delete (characters, {forward, pos} = {}) {
      var i = characters = characters > 0? characters : (characters + "").length;
  
      if (pos) {
        var selectionStart = this.selectionStart;
        this.selectionStart = pos;
        this.selectionEnd = pos + this.selectionEnd - selectionStart;
      }
  
      while (i--) {
        document.execCommand(forward? "forwardDelete" : "delete");
      }
  
      if (pos) {
        // Restore caret
        this.selectionStart = selectionStart - characters;
        this.selectionEnd = this.selectionEnd - pos + this.selectionStart;
      }
    }
  
    /**
     * Get the text node at a given chracter offset
     */
    getNode(offset = this.selectionStart, container = this.code) {
      var node, sum = 0;
      var walk = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  
      while (node = walk.nextNode()) {
        sum += node.data.length;
  
        if (sum >= offset) {
          return node;
        }
      }
  
      // if here, offset is larger than maximum
      return null;
    }
  
    /**
     * Get the character offset of a given node in the highlighted source
     */
    getOffset(node) {
      var range = document.createRange();
      range.selectNodeContents(this.code);
      range.setEnd(node, 0);
      return range.toString().length;
    }
  
    // Utility method to get regex matches
    static match(str, regex, def, index = 0) {
      if (typeof def === "number" && arguments.length === 3) {
        index = def;
        def = undefined;
      }
  
      var match = str.match(regex);
  
      if (index < 0) {
        index = match.length + index;
      }
  
      return match? match[index] : def;
    }
  
    static checkShortcut(shortcut, evt) {
      return shortcut.trim().split(/\s*\+\s*/).every(key => {
        switch (key) {
          case "Cmd":   return evt[superKey];
          case "Ctrl":  return evt.ctrlKey;
          case "Shift": return evt.shiftKey;
          case "Alt":   return evt.altKey;
          default: return evt.key === key;
        }
      });
    }
  
    static registerLanguage(name, context, parent = _.languages.DEFAULT) {
      Object.setPrototypeOf(context, parent);
      return _.languages[name] = context;
    }
  
    static matchIndentation(text, currentIndent) {
      // FIXME this assumes that text has no indentation of its own
      // to make this more generally useful beyond snippets, we should first
      // strip text's own indentation.
      text = text.replace(/\r?\n/g, "$&" + currentIndent);
    }
  
    static adjustIndentation(text, {indentation, relative = true, indent = _.DEFAULT_INDENT}) {
      if (!relative) {
        // First strip min indentation
        var minIndent = text.match(_.regexp.gm`^(${indent})+`).sort()[0];
  
        if (minIndent) {
          text.replace(_.regexp.gm`^${minIndent}`, "");
        }
      }
  
      if (indentation < 0) {
        return text.replace(_.regexp.gm`^${indent}`, "");
      }
      else if (indentation > 0) { // Indent
        return text.replace(/^/gm, indent);
      }
    }
  
    static create (source, ...args) {
      let ret = _.all.get(source);
      if (!ret) {
        ret = new _(source);
      }
      return ret;
    }
  };
  
  // Static properties
  Object.assign(_, {
    all: new WeakMap(),
    ready,
    DEFAULT_INDENT: "\t",
    CARET_INDICATOR: /(^|[^\\])\$(\d+)/g,
    snippets: {
      "test": "Snippets work!",
    },
    pairs: {
      "(": ")",
      "[": "]",
      "{": "}",
      '"': '"',
      "'": "'",
      "`": "`"
    },
    shortcuts: {
      "Cmd + /": function() {
        this.toggleComment();
      },
      "Ctrl + Shift + D": function() {
        this.duplicateContent();
      }
    },
    languages: {
      DEFAULT: {
        comments: {
          multiline: ["/*", "*/"]
        },
        snippets: {}
      }
    },
    // Map of Prism language ids and their canonical name
    aliases: (() => {
      var ret = {};
      var canonical = new WeakMap(Object.entries(Prism.languages).map(x => x.reverse()).reverse());
  
      for (var id in Prism.languages) {
        var grammar = Prism.languages[id];
  
        if (typeof grammar !== "function") {
          ret[id] = canonical.get(grammar);
        }
      }
  
      return ret;
    })(),
  
    regexp: (() => {
      var escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      var _regexp = (flags, strings, ...values) => {
        var pattern = strings[0] + values.map((v, i) => escape(v) + strings[i+1]).join("");
        return RegExp(pattern, flags);
      };
      var cache = {};
  
      return new Proxy(_regexp.bind(_, ""), {
        get: (t, property) => {
          return t[property] || cache[property]
               || (cache[property] = _regexp.bind(_, property));
        }
      });
    })()
  });
  
  _.supportsExecCommand = document.execCommand? undefined : false;
  
  $.ready().then(() => {
    $$(":not(.prism-live) > textarea.prism-live, :not(.prism-live) > pre.prism-live").forEach(source => _.create(source));
  });
  
  })();
  