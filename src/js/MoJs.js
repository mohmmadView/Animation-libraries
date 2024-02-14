import mojs from '@mojs/core';
//  import Prism from 'prismjs';
// new mojs.Html({
//   // ...
// });
export default function animateMojs(){
    document.querySelector("#ContainerMoJs").innerHTML=`
<!--?----------------------------------------------------------------------- -->
<!--*----------------------------- Install Mo.js ----------------------------- -->
<!--?----------------------------------------------------------------------- -->
<br>
<br>
<div class="flex justify-center ">
   <div class="w-3/4 m-2 p-3 border border-dashed bg-white bg-opacity-10">

<h2 class="text-rose-500 p-2 text-2xl">installing Mo.js</h2> 
<h2 class="text-white ">yarn add @mojs/core</h2>
<h2 class="text-rose-300 text-2xl">or</h2> 
<h2 class="text-white">npm i @mojs/core OR </h2>
<h2 class="text-white">Import it import mojs from '@mojs/core'</h2>
<h2 class="text-rose-300 text-2xl">or</h2> 
<h2 class="text-white ">Or use the minified CDN version:</h2>
<h2 class="text-white"><<span class="text-yellow-600">Script src=</span>"<span class="text-green-600">stylesheet</span>" <span class="text-yellow-400"> href=</span>"<span class="text-green-700">https://cdn.jsdelivr.net/npm/@mojs/core</span>"></h2>
</div>
</div>
 <div class="w-full flex  justify-between">
   <div id="moveMoJs" class="self-start w-24 h-24 font-bold font-family  bg-slate-400" ></div>
   <h1 id="titleMo.js" class="self-center text-5xl text-center p-5 font-bold text-green-700">Mo.js</h1>
   <div id="moveMoJs2" class="self-start w-24 h-24 text-4xl font-bold font-family  bg-slate-400" ></div>
 </div>
<!--?----------------------------------------------------------------------- -->
<!--*----------------------------- List Mo.js ----------------------------- -->
<!--?----------------------------------------------------------------------- -->
<div class="grid grid-cols-4 gap-4  bg-red-50/30  border-2 border-dashed  outline-d outline-offset-2 outline-1  p-6 ">
<!--TODO--------------- Mo.js-1 -------------------- -->

<!--TODO--------------- Mo.js-2 -------------------- -->

 <div class="bg-slate-400  h-64">
  <div class="w-full h-64 flex justify-center bottom-4  relative">
     <div id="circle" class="absolute  self-center  w-4  h-8" ></div>
   </div>
</div>
<pre  class="h-64 m-0 p-0 "><code class="language-js">
  new mojs.Shape({
    parent: "#circle",
    shape: "circle", // shape 'circle' is default
    radius: 25, // shape radius
    radiusX: 30,
    left: "25%",
    isShowStart: true, // show before any animation starts
  });
  
</code></pre>
<!--TODO--------------- Mo.js-3 -------------------- -->

 <div class="bg-slate-400 h-64">
  <div class="w-full h-64 flex justify-center  bottom-4  relative">
    <div id="polygon" class="absolute self-center  w-4  h-8" ></div>
  </div>
 </div>
 <pre  class="h-64 m-0 p-0 "><code class="language-js">
  new mojs.Shape({
    parent: "#polygon",
    shape: "polygon", // shape 'circle' is default
    radius: 35, // shape radius
    radiusX: 60,
    left: "25%",
    fill: "yellow", // same as 'transparent'
    stroke: "black", // or 'cyan'
    strokeWidth: 4, // width of the stroke
    isShowStart: true, // show before any animation starts
  });
  
</code></pre>
<!--TODO--------------- Mo.js-4 -------------------- -->
 

 <div class="bg-slate-400 h-64">
  <div class="w-full h-64 flex justify-center  bottom-4  relative">
    <div id="zigzag" class="absolute self-center  w-3/4  h-full" >

    </div>
  </div>
 </div>
  <pre  class="h-64 m-0 p-0 "><code class="language-js">
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
  
</code></pre>
<!--TODO--------------- Mo.js-5 -------------------- -->


 <div class="bg-slate-400 h-64">
  <div class="w-full h-64 flex justify-center  bottom-4  relative">
    <div id="cross" class="absolute self-center  w-4  h-8" >
      
    </div>
  </div>
 </div>
   <pre  class="h-64 m-0 p-0 "><code class="language-js">
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
</code></pre>
<!--TODO--------------- Mo.js-6 -------------------- -->


 <div class="bg-slate-400 h-64">
<svg  class="w-8 h-8  cursor-pointer" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M160,160h192c-1.7-20-9.7-35.2-27.9-40.1c-0.4-0.1-0.9-0.3-1.3-0.4c-12-3.4-20.8-7.5-20.8-20.7V78.2    c0-25.5-20.5-46.3-46-46.3c-25.5,0-46,20.7-46,46.3v20.6c0,13.1-8.8,17.2-20.8,20.6c-0.4,0.1-0.9,0.4-1.4,0.5    C169.6,124.8,161.9,140,160,160z M256,64.4c7.6,0,13.8,6.2,13.8,13.8c0,7.7-6.2,13.8-13.8,13.8c-7.6,0-13.8-6.2-13.8-13.8    C242.2,70.6,248.4,64.4,256,64.4z"/><path d="M404.6,63H331v14.5c0,10.6,8.7,18.5,19,18.5h37.2c6.7,0,12.1,5.7,12.4,12.5l0.1,327.2c-0.3,6.4-5.3,11.6-11.5,12.1    l-264.4,0.1c-6.2-0.5-11.1-5.7-11.5-12.1l-0.1-327.3c0.3-6.8,5.9-12.5,12.5-12.5H162c10.3,0,19-7.9,19-18.5V63h-73.6    C92.3,63,80,76.1,80,91.6V452c0,15.5,12.3,44,27.4,28H256h148.6c15.1,0,27.4-12.5,27.4-28V91.6C432,76.1,419.7,63,404.6,63z"/></g><rect height="16" width="112" x="144" y="192"/><rect height="16" width="160" x="144" y="288"/><rect height="16" width="129" x="144" y="384"/><rect height="16" width="176" x="144" y="336"/><rect height="16" width="208" x="144" y="240"/></g></svg>
  <div class="w-full h-60 flex justify-center  bottom-4  relative">
    <div id="bouncyCircle" class="absolute self-center  w-4  h-8" >
      
    </div>
  </div>
 </div>
   <pre  class="h-64 m-0 p-0 "><code class="language-js">
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
</code></pre>
<!--TODO--------------- Mo.js-7 -------------------- -->

 <div class="bg-slate-400 h-64">
  <div class="w-full h-60 flex justify-center  bottom-4  relative">
    <div id="triangle" class="absolute self-center  w-4  h-8" >
      
    </div>
  </div>
 </div>
 <pre  class="h-64 m-0 p-0 "><code class="language-js">
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
</code></pre>
<!--TODO--------------- Mo.js-8 -------------------- -->

<div id="mojs8" class="bg-slate-400 h-64">
  <p class="text-center text-3xl">click in react</p>
  <div class="w-full h-40 flex justify-center  bottom-4  relative">
    <div id="" class="absolute self-center  w-4  h-8" >
      
    </div>
  </div>
 </div>
  <pre  class="h-64 m-0 p-0 "><code class="language-js">
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
</code></pre>
<!--TODO--------------- Mo.js-9 -------------------- -->
 
<div id="mojs9" class="bg-slate-400 h-64">
  <p class="text-center text-3xl">click in react</p>
  <div class="w-full h-40 flex justify-center  bottom-4  relative">
    <div id="" class="absolute self-center  w-4  h-8" >
      
    </div>
  </div>
 </div>
 <pre  class="h-64 m-0 p-0 "><code class="language-js">
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
</code></pre>
</div>
    
    `


  //!====>move moJs <=====\\
  let scr = window.scrollY;
  let ElmMoveJs = document.querySelector("#moveMoJs");
//   window.addEventListener("scroll", () => {
//     if (1818 < window.scrollY){ 
//       console.log("test 1818");

//    new mojs.Shape({
//       parent: ElmMoveJs,
//       shape:"circle",
//       radius: 50, 
//       radiusX: 80,
//       fill: "yellow", // 
//     left: "25%",
//     isShowStart: true, 
//     });
// }else{
//  new mojs.Shape({
//       parent: ElmMoveJs,
  
//     });
//   }
//   })
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
  const circleCopy = document.querySelector("#Layer_1");
  circleCopy.addEventListener("click", () => {
    ClipboardEvent;
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
</script>`);
  });

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