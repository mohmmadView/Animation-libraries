import mojs from '@mojs/core';
import innerHtmlMojs from './htmlMojs';
import clipboardCopy from '../../assets/componets/copyClipboard';
import svgClipboard from '../../assets/svg/clipboard_icon.svg';
export default function animateMojs(){
   innerHtmlMojs()
   let sourceCodeNodeMojs = document.querySelectorAll("pre");
   let sourceCodeMojs = Array.from(sourceCodeNodeMojs);
   sourceCodeMojs.forEach((elm,i)=>{
    elm.insertAdjacentHTML("afterbegin",`<img class="clipboardMojs w-8 h-8 cursor-pointer" src=${svgClipboard}></img>`)
    let elmClipboard =document.querySelectorAll(".clipboardMojs");
     clipboardCopy(Array.from(elmClipboard)[i],elm.innerText,elm,"inline-block");
    
   })
  //!====>move moJs <=====\\
  let scr = window.scrollY;
  let ElmMoveJs = document.querySelector("#moveMoJs");
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
    top: "60%",
    fill: "none",
    stroke: "blue",
    isShowStart: true,
  });

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
//   const circleCopy = document.querySelector("#Layer_1");
//   console.log(circleCopy);
//   circleCopy.addEventListener("click", () => {
//     ClipboardEvent;
//     navigator.clipboard.writeText(`"
//   <div class="relative bg-black/20 h-28 ">
//   <div id="bouncyCircle2" class="absolute top-10 left-1/2  w-4  h-8" ></div>
// </div>
// <script src="https://cdn.jsdelivr.net/npm/@mojs/core"></script>
// <script>
// const bouncyCircle2 = new mojs.Shape({
// parent: "#bouncyCircle2",
// shape: "circle",
// fill: { "#F64040": "#FC46AD" },
// radius: { 20: 40 },
// duration: 2000,
// isYoyo: true,
// isShowStart: true,
// easing: "elastic.inout",
// repeat: 100,
// });

// bouncyCircle2.play();
// </script>`);
//   });

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
    parent: "#triangle",
    shape: "polygon",
    fill: "red",
    radius: 65,
    rotate: { [-120]: -40 },
    x: { [-140]: 70 },
    y: { [50]: -20 },
    scaleX: { 0: 1.3 },

    repeat: 150,
    duration: 1500,
    isYoyo: true,
    backwardEasing: "sin.in",

    isShowEnd: false,
  });
  bouncyTriangle.play();
  const OPTS = {
    fill: "none",
    radius: 25,
    strokeWidth: { 50: 0 },
    scale: { 0: 1 },
    angle: { "rand(-35, -70)": 0 },
    duration: 500,
    left: 0,
    top: 0,
    easing: "cubic.out",
  };

  const circle1 = new mojs.Shape({
    ...OPTS,
    stroke: "cyan",
  });

  const circle2 = new mojs.Shape({
    ...OPTS,
    radius: { 0: 15 },
    strokeWidth: { 30: 0 },
    stroke: "magenta",
    delay: "rand(75, 150)",
  });

  document.querySelector("#mojs8").addEventListener("click", function (e) {
    circle1.tune({ x: e.pageX, y: e.pageY }).replay();

    circle2.tune({ x: e.pageX, y: e.pageY }).replay();
  });

  const SWIRL_OPTS = {
    left: 0,
    top: 0,
    fill: "green",
    duration: "rand(600, 1000)",
    radius: "rand(10, 20)",
    pathScale: "rand(.5, 1)",
    swirlFrequency: "rand(2,4)",
    swirlSize: "rand(6,14)",
  };
  const swirl1 = new mojs.ShapeSwirl({
    ...SWIRL_OPTS,
  });
  const swirl2 = new mojs.ShapeSwirl({
    ...SWIRL_OPTS,
    direction: -1,
  });
  const swirl3 = new mojs.ShapeSwirl({
    ...SWIRL_OPTS,
  });
  const swirl4 = new mojs.ShapeSwirl({
    ...SWIRL_OPTS,
  });
  document.querySelector("#mojs9").addEventListener("click", (e) => {
    console.log("mouse");
    const x = e.pageX,
      y = { [e.pageY]: e.pageY - 150 };
    swirl1.tune({ x, y }).generate().replay();
    swirl2.tune({ x, y }).generate().replay();
    swirl3.tune({ x, y }).generate().replay();
    swirl4.tune({ x, y }).generate().replay();
  });
}