import anime from "animejs";
export default function animateJS() {
 document.querySelector("#ContainerAnimateJS").innerHTML=`
 <!--? ----------------------------------------------------------------------- -->
<!--TODO ---------------------- installing AnimeJS ----------------------- -->
<!--? ----------------------------------------------------------------------- -->
<div class="flex  justify-center mt-4 before:first-line:">
</div>
<div class="flex justify-center ">
   <div class="w-3/4 m-2 p-3 border border-dashed bg-white bg-opacity-10">

<h2 class="text-rose-500 p-2 text-2xl">installing Animejs</h2> 
<h2 class="text-yellow-500 p-2 text-xl">Download</h2> 
<h2 class="text-white ">Download  <span class="text-rose-600 ">animejs</span>  framework from project github  </h2>
<a class="text-cyan-600 hover:cursor-pointer hover:text-blue-300" href="https://github.com/juliangarnier/anime/">https://github.com/juliangarnier/anime/</a>
<h2 class="text-rose-300 text-2xl">or</h2> 
<h2 class="text-white">npm install <span class="text-rose-600 ">animejs </span>--save</h2>
<h2 class="text-yellow-500 text-xl p-2">Usage</h2> 
<h2 class="text-white"><span class="text-orange-500">import  </span>  anime  <span class="text-orange-600"> from </span><span class="text-green-700">'animejs/lib/anime.es.js'</span>;</h2>
<h2 class="text-yellow-500 p-2 text-xl">CommonJS</h2> 
<h2 class="text-white"><span class="text-orange-500"> const </span> anime <span class="text-blue-400"> = </span><span class="text-green-700"> require </span>( <span class="text-yellow-600">'animejs'</span> );</h2>
</div>
</div>
<!--? ----------------------------------------------------------------------- -->
<!--TODO ------------------------- TheEnd_installing ------------------------ -->
<!--? ----------------------------------------------------------------------- -->

 <!--? ----------------------------------------------------------------------- -->
<!--TODO ------------------------- svgAnimeJs------------------------ -->
<!--? ----------------------------------------------------------------------- -->
<!--!  title sourceCode -->
<div id="container-AnimateJs">
<div class="w-full h-96">
<div class="mb-1 ">

   <div class="flex mb-4 justify-center">
<svg id="Code-svgAnimateJs" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"/><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"/></svg>
      <div class=" ring-lime-50  border bg-gradient-to-r from-red-600/5 via-red-600/20 to-red-600/5  hover:from-red-600/20 hover:via-red-600/5 hover:to-red-600/20 p-2 border-dotted bg-red-400/5 border-red-300">
         <h1 class="text-red-600 text-3xl font-body">source Code AnimateJS</h1>
      </div>
     </div>
</div>

<!--!  title sourceCode -->
<div class="w-full h-5/6"> 
<div id="container-Svg-AnimeJs" class=" flex justify-center relative w-full h-full divMenuAnimeJs">
   <div class="absolute w-5/6 h-5/6 flex justify-center divAnimateJs animate__animated">
      <svg class="w-full" viewBox="100 0 245 100" xmlns="http://www.w3.org/2000/svg">
         <defs></defs>
         <text class="animate_js  animate__animated" style="fill: rgb(235, 14, 14);  stroke: rgb(124, 132, 97); stroke-dasharray: 30px; stroke-dashoffset: -50px; stroke-opacity: 0.53; stroke-width: 0.756387px; white-space: pre;" transform="matrix(4.114889, 0, 0, 3.817554, -392.250885, -53.289532)" x="119.835" y="32.323">AnimeJs</text>
       </svg>
</div>
</div>
</div>
 <!--? ----------------------------------------------------------------------- -->
<!--TODO ----------------------- TheEnd_svg-AnimeJs --------------------- -->
<!--? ----------------------------------------------------------------------- -->
</div>

 <!--? ----------------------------------------------------------------------- -->
<!--TODO ----------------------- start_Sample_move_AnimeJs --------------------- -->
<!--? ----------------------------------------------------------------------- -->
   <div id="divAll" class="bg-white bg-opacity-10 border border-dashed border-white overflow-x-auto px-10 py-10 snap-x flex gap-4 w-full h-54">
      <div class="snap-center  shrink-0">
      </div>
      <div class="snap-center shrink-0">
         <div class="w-10 h-8"> </div>
      </div> 
     <!--* animejs-1 -->
      <div id="animejs-1" class="snap-center shrink-0  flex demo-content function-based-params-anime-js">
         <div class="snap-start w-20 h-20"></div>
         <div class="menuAnimeJs w-80 h-40  flex justify-center flex-col  shadow-lg shadow-rose-700 rounded-lg space-y-2  shrink-0  bg-rose-500 line">
            <div class="w-3/4 mx-auto h-8 flex bg-red-50/30 rounded-md">
               <svg class="el self-center" width="50px" height="50px" viewBox="0 -15 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g id="Group_576" data-name="Group 576" transform="translate(-288 -437.409)">
                    <g id="Group_527" data-name="Group 527">
                      <g id="Group_520" data-name="Group 520">
                        <path id="Path_745" data-name="Path 745" d="M318,447.409v-2a2,2,0,0,0-2-2h0a2,2,0,0,0-2,2v2" fill="#29abe2"/>
                        <path id="Path_746" data-name="Path 746" d="M318,448.409a1,1,0,0,1-1-1v-2a1,1,0,0,0-2,0v2a1,1,0,1,1-2,0v-2a3,3,0,0,1,6,0v2A1,1,0,0,1,318,448.409Z"/>
                      </g>
                      <path id="Path_747" data-name="Path 747" d="M316,441.409a1,1,0,0,1-1-1v-2a1,1,0,0,1,2,0v2A1,1,0,0,1,316,441.409Z"/>
                      <path id="Path_748" data-name="Path 748" d="M318.793,442.116a1,1,0,0,1-.707-1.707l1.414-1.414a1,1,0,0,1,1.414,1.414l-1.414,1.414A1,1,0,0,1,318.793,442.116Z"/>
                      <path id="Path_749" data-name="Path 749" d="M313.207,442.116a1,1,0,0,1-.707-.293l-1.414-1.414a1,1,0,0,1,1.414-1.414l1.414,1.414a1,1,0,0,1-.707,1.707Z"/>
                      <g id="Group_521" data-name="Group 521">
                        <path id="Path_750" data-name="Path 750" d="M329.969,455.377l-5.471-6.221a5,5,0,0,0-3.8-1.747H304.976a2.148,2.148,0,0,0-1.976,2v5.968" fill="#29abe2"/>
                        <path id="Path_751" data-name="Path 751" d="M329.969,456.377a1,1,0,0,1-.751-.339l-5.471-6.222a4.008,4.008,0,0,0-3.049-1.407H304.976a1.176,1.176,0,0,0-.976,1v5.967a1,1,0,1,1-2,0V449.41a3.148,3.148,0,0,1,2.976-3H320.7a6,6,0,0,1,4.559,2.1l5.463,6.213a1,1,0,0,1-.751,1.66Z"/>
                      </g>
                      <g id="Group_522" data-name="Group 522">
                        <path id="Path_752" data-name="Path 752" d="M344,460.409a5,5,0,0,0-5-5H301a5,5,0,0,0-5,5h0a5,5,0,0,0,5,5h38a5,5,0,0,0,5-5Z" fill="#29abe2"/>
                        <path id="Path_753" data-name="Path 753" d="M339,466.409H301a6,6,0,0,1,0-12h38a6,6,0,0,1,0,12Zm-38-10a4,4,0,0,0,0,8h38a4,4,0,0,0,0-8Z"/>
                      </g>
                      <g id="Group_523" data-name="Group 523">
                        <circle id="Ellipse_133" data-name="Ellipse 133" cx="3.975" cy="3.975" r="3.975" transform="translate(329.53 460.459)" fill="#29abe2"/>
                        <path id="Path_754" data-name="Path 754" d="M333.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                      </g>
                      <g id="Group_524" data-name="Group 524">
                        <circle id="Ellipse_134" data-name="Ellipse 134" cx="3.975" cy="3.975" r="3.975" transform="translate(301.53 460.459)" fill="#29abe2"/>
                        <path id="Path_755" data-name="Path 755" d="M305.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                      </g>
                      <g id="Group_525" data-name="Group 525">
                        <line id="Line_217" data-name="Line 217" x1="3" transform="translate(319 459.409)" fill="#29abe2"/>
                        <path id="Path_756" data-name="Path 756" d="M322,460.409h-3a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"/>
                      </g>
                      <g id="Group_526" data-name="Group 526">
                        <line id="Line_218" data-name="Line 218" x1="62" transform="translate(289 470.409)" fill="#29abe2"/>
                        <path id="Path_757" data-name="Path 757" d="M351,471.409H289a1,1,0,0,1,0-2h62a1,1,0,0,1,0,2Z"/>
                      </g>
                    </g>
                  </g>
                </svg>
                
            </div>
            <div class="w-3/4 mx-auto h-8 flex bg-red-50/30 rounded-md">
               <svg class="el self-center" width="50px" height="50px" viewBox="0 -15 64 64" xmlns="http://www.w3.org/2000/svg">
               <g id="Group_576" data-name="Group 576" transform="translate(-288 -437.409)">
                 <g id="Group_527" data-name="Group 527">
                   <g id="Group_520" data-name="Group 520">
                     <path id="Path_745" data-name="Path 745" d="M318,447.409v-2a2,2,0,0,0-2-2h0a2,2,0,0,0-2,2v2" fill="#29abe2"/>
                     <path id="Path_746" data-name="Path 746" d="M318,448.409a1,1,0,0,1-1-1v-2a1,1,0,0,0-2,0v2a1,1,0,1,1-2,0v-2a3,3,0,0,1,6,0v2A1,1,0,0,1,318,448.409Z"/>
                   </g>
                   <path id="Path_747" data-name="Path 747" d="M316,441.409a1,1,0,0,1-1-1v-2a1,1,0,0,1,2,0v2A1,1,0,0,1,316,441.409Z"/>
                   <path id="Path_748" data-name="Path 748" d="M318.793,442.116a1,1,0,0,1-.707-1.707l1.414-1.414a1,1,0,0,1,1.414,1.414l-1.414,1.414A1,1,0,0,1,318.793,442.116Z"/>
                   <path id="Path_749" data-name="Path 749" d="M313.207,442.116a1,1,0,0,1-.707-.293l-1.414-1.414a1,1,0,0,1,1.414-1.414l1.414,1.414a1,1,0,0,1-.707,1.707Z"/>
                   <g id="Group_521" data-name="Group 521">
                     <path id="Path_750" data-name="Path 750" d="M329.969,455.377l-5.471-6.221a5,5,0,0,0-3.8-1.747H304.976a2.148,2.148,0,0,0-1.976,2v5.968" fill="#29abe2"/>
                     <path id="Path_751" data-name="Path 751" d="M329.969,456.377a1,1,0,0,1-.751-.339l-5.471-6.222a4.008,4.008,0,0,0-3.049-1.407H304.976a1.176,1.176,0,0,0-.976,1v5.967a1,1,0,1,1-2,0V449.41a3.148,3.148,0,0,1,2.976-3H320.7a6,6,0,0,1,4.559,2.1l5.463,6.213a1,1,0,0,1-.751,1.66Z"/>
                   </g>
                   <g id="Group_522" data-name="Group 522">
                     <path id="Path_752" data-name="Path 752" d="M344,460.409a5,5,0,0,0-5-5H301a5,5,0,0,0-5,5h0a5,5,0,0,0,5,5h38a5,5,0,0,0,5-5Z" fill="#29abe2"/>
                     <path id="Path_753" data-name="Path 753" d="M339,466.409H301a6,6,0,0,1,0-12h38a6,6,0,0,1,0,12Zm-38-10a4,4,0,0,0,0,8h38a4,4,0,0,0,0-8Z"/>
                   </g>
                   <g id="Group_523" data-name="Group 523">
                     <circle id="Ellipse_133" data-name="Ellipse 133" cx="3.975" cy="3.975" r="3.975" transform="translate(329.53 460.459)" fill="#29abe2"/>
                     <path id="Path_754" data-name="Path 754" d="M333.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                   </g>
                   <g id="Group_524" data-name="Group 524">
                     <circle id="Ellipse_134" data-name="Ellipse 134" cx="3.975" cy="3.975" r="3.975" transform="translate(301.53 460.459)" fill="#29abe2"/>
                     <path id="Path_755" data-name="Path 755" d="M305.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                   </g>
                   <g id="Group_525" data-name="Group 525">
                     <line id="Line_217" data-name="Line 217" x1="3" transform="translate(319 459.409)" fill="#29abe2"/>
                     <path id="Path_756" data-name="Path 756" d="M322,460.409h-3a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"/>
                   </g>
                   <g id="Group_526" data-name="Group 526">
                     <line id="Line_218" data-name="Line 218" x1="62" transform="translate(289 470.409)" fill="#29abe2"/>
                     <path id="Path_757" data-name="Path 757" d="M351,471.409H289a1,1,0,0,1,0-2h62a1,1,0,0,1,0,2Z"/>
                   </g>
                 </g>
               </g>
             </svg>
             </div>
            <div class="w-3/4 mx-auto h-8 flex bg-red-50/30 rounded-md">
       <svg class="el self-center" width="50px" height="50px" viewBox="0 -15 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g id="Group_576" data-name="Group 576" transform="translate(-288 -437.409)">
                    <g id="Group_527" data-name="Group 527">
                      <g id="Group_520" data-name="Group 520">
                        <path id="Path_745" data-name="Path 745" d="M318,447.409v-2a2,2,0,0,0-2-2h0a2,2,0,0,0-2,2v2" fill="#29abe2"/>
                        <path id="Path_746" data-name="Path 746" d="M318,448.409a1,1,0,0,1-1-1v-2a1,1,0,0,0-2,0v2a1,1,0,1,1-2,0v-2a3,3,0,0,1,6,0v2A1,1,0,0,1,318,448.409Z"/>
                      </g>
                      <path id="Path_747" data-name="Path 747" d="M316,441.409a1,1,0,0,1-1-1v-2a1,1,0,0,1,2,0v2A1,1,0,0,1,316,441.409Z"/>
                      <path id="Path_748" data-name="Path 748" d="M318.793,442.116a1,1,0,0,1-.707-1.707l1.414-1.414a1,1,0,0,1,1.414,1.414l-1.414,1.414A1,1,0,0,1,318.793,442.116Z"/>
                      <path id="Path_749" data-name="Path 749" d="M313.207,442.116a1,1,0,0,1-.707-.293l-1.414-1.414a1,1,0,0,1,1.414-1.414l1.414,1.414a1,1,0,0,1-.707,1.707Z"/>
                      <g id="Group_521" data-name="Group 521">
                        <path id="Path_750" data-name="Path 750" d="M329.969,455.377l-5.471-6.221a5,5,0,0,0-3.8-1.747H304.976a2.148,2.148,0,0,0-1.976,2v5.968" fill="#29abe2"/>
                        <path id="Path_751" data-name="Path 751" d="M329.969,456.377a1,1,0,0,1-.751-.339l-5.471-6.222a4.008,4.008,0,0,0-3.049-1.407H304.976a1.176,1.176,0,0,0-.976,1v5.967a1,1,0,1,1-2,0V449.41a3.148,3.148,0,0,1,2.976-3H320.7a6,6,0,0,1,4.559,2.1l5.463,6.213a1,1,0,0,1-.751,1.66Z"/>
                      </g>
                      <g id="Group_522" data-name="Group 522">
                        <path id="Path_752" data-name="Path 752" d="M344,460.409a5,5,0,0,0-5-5H301a5,5,0,0,0-5,5h0a5,5,0,0,0,5,5h38a5,5,0,0,0,5-5Z" fill="#29abe2"/>
                        <path id="Path_753" data-name="Path 753" d="M339,466.409H301a6,6,0,0,1,0-12h38a6,6,0,0,1,0,12Zm-38-10a4,4,0,0,0,0,8h38a4,4,0,0,0,0-8Z"/>
                      </g>
                      <g id="Group_523" data-name="Group 523">
                        <circle id="Ellipse_133" data-name="Ellipse 133" cx="3.975" cy="3.975" r="3.975" transform="translate(329.53 460.459)" fill="#29abe2"/>
                        <path id="Path_754" data-name="Path 754" d="M333.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                      </g>
                      <g id="Group_524" data-name="Group 524">
                        <circle id="Ellipse_134" data-name="Ellipse 134" cx="3.975" cy="3.975" r="3.975" transform="translate(301.53 460.459)" fill="#29abe2"/>
                        <path id="Path_755" data-name="Path 755" d="M305.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                      </g>
                      <g id="Group_525" data-name="Group 525">
                        <line id="Line_217" data-name="Line 217" x1="3" transform="translate(319 459.409)" fill="#29abe2"/>
                        <path id="Path_756" data-name="Path 756" d="M322,460.409h-3a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"/>
                      </g>
                      <g id="Group_526" data-name="Group 526">
                        <line id="Line_218" data-name="Line 218" x1="62" transform="translate(289 470.409)" fill="#29abe2"/>
                        <path id="Path_757" data-name="Path 757" d="M351,471.409H289a1,1,0,0,1,0-2h62a1,1,0,0,1,0,2Z"/>
                      </g>
                    </g>
                  </g>
                </svg>

            </div>
         </div>
       </div>
      <!--* anime-js-2 -->
      <div id="animejs-2" class="function-based-values-demo">
      <div class="snap-center shrink-0">
       <div class="menuAnimeJs w-80 h-40  flex  justify-center flex-col shrink-0 shadow-lg shadow-blue-700 rounded-lg space-y-2 bg-blue-400 line">
            <div class="w-3/4 mx-auto h-8 flex bg-red-50/30  rounded-md">
 <svg class="autoplay-true self-center" width="50px" height="50px" viewBox="0 -15 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g id="Group_576" data-name="Group 576" transform="translate(-288 -437.409)">
                    <g id="Group_527" data-name="Group 527">
                      <g id="Group_520" data-name="Group 520">
                        <path id="Path_745" data-name="Path 745" d="M318,447.409v-2a2,2,0,0,0-2-2h0a2,2,0,0,0-2,2v2" fill="#29abe2"/>
                        <path id="Path_746" data-name="Path 746" d="M318,448.409a1,1,0,0,1-1-1v-2a1,1,0,0,0-2,0v2a1,1,0,1,1-2,0v-2a3,3,0,0,1,6,0v2A1,1,0,0,1,318,448.409Z"/>
                      </g>
                      <path id="Path_747" data-name="Path 747" d="M316,441.409a1,1,0,0,1-1-1v-2a1,1,0,0,1,2,0v2A1,1,0,0,1,316,441.409Z"/>
                      <path id="Path_748" data-name="Path 748" d="M318.793,442.116a1,1,0,0,1-.707-1.707l1.414-1.414a1,1,0,0,1,1.414,1.414l-1.414,1.414A1,1,0,0,1,318.793,442.116Z"/>
                      <path id="Path_749" data-name="Path 749" d="M313.207,442.116a1,1,0,0,1-.707-.293l-1.414-1.414a1,1,0,0,1,1.414-1.414l1.414,1.414a1,1,0,0,1-.707,1.707Z"/>
                      <g id="Group_521" data-name="Group 521">
                        <path id="Path_750" data-name="Path 750" d="M329.969,455.377l-5.471-6.221a5,5,0,0,0-3.8-1.747H304.976a2.148,2.148,0,0,0-1.976,2v5.968" fill="#29abe2"/>
                        <path id="Path_751" data-name="Path 751" d="M329.969,456.377a1,1,0,0,1-.751-.339l-5.471-6.222a4.008,4.008,0,0,0-3.049-1.407H304.976a1.176,1.176,0,0,0-.976,1v5.967a1,1,0,1,1-2,0V449.41a3.148,3.148,0,0,1,2.976-3H320.7a6,6,0,0,1,4.559,2.1l5.463,6.213a1,1,0,0,1-.751,1.66Z"/>
                      </g>
                      <g id="Group_522" data-name="Group 522">
                        <path id="Path_752" data-name="Path 752" d="M344,460.409a5,5,0,0,0-5-5H301a5,5,0,0,0-5,5h0a5,5,0,0,0,5,5h38a5,5,0,0,0,5-5Z" fill="#29abe2"/>
                        <path id="Path_753" data-name="Path 753" d="M339,466.409H301a6,6,0,0,1,0-12h38a6,6,0,0,1,0,12Zm-38-10a4,4,0,0,0,0,8h38a4,4,0,0,0,0-8Z"/>
                      </g>
                      <g id="Group_523" data-name="Group 523">
                        <circle id="Ellipse_133" data-name="Ellipse 133" cx="3.975" cy="3.975" r="3.975" transform="translate(329.53 460.459)" fill="#29abe2"/>
                        <path id="Path_754" data-name="Path 754" d="M333.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                      </g>
                      <g id="Group_524" data-name="Group 524">
                        <circle id="Ellipse_134" data-name="Ellipse 134" cx="3.975" cy="3.975" r="3.975" transform="translate(301.53 460.459)" fill="#29abe2"/>
                        <path id="Path_755" data-name="Path 755" d="M305.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                      </g>
                      <g id="Group_525" data-name="Group 525">
                        <line id="Line_217" data-name="Line 217" x1="3" transform="translate(319 459.409)" fill="#29abe2"/>
                        <path id="Path_756" data-name="Path 756" d="M322,460.409h-3a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"/>
                      </g>
                      <g id="Group_526" data-name="Group 526">
                        <line id="Line_218" data-name="Line 218" x1="62" transform="translate(289 470.409)" fill="#29abe2"/>
                        <path id="Path_757" data-name="Path 757" d="M351,471.409H289a1,1,0,0,1,0-2h62a1,1,0,0,1,0,2Z"/>
                      </g>
                    </g>
                  </g>
                </svg>
            </div>
            <div class="w-3/4 mx-auto h-8 flex bg-red-50/30 rounded-md"><svg class="self-center" width="50px" height="50px" viewBox="0 -18.5 64 64" xmlns="http://www.w3.org/2000/svg">
               <g id="Group_194" data-name="Group 194" transform="translate(-188 -821.409)">
                 <g id="Group_187" data-name="Group 187">
                   <line id="Line_108" data-name="Line 108" y1="7" x2="7" transform="translate(231 824.409)" fill="#29abe2"/>
                   <path id="Path_297" data-name="Path 297" d="M231,832.409a1,1,0,0,1-.707-1.707l7-7a1,1,0,0,1,1.414,1.414l-7,7A1,1,0,0,1,231,832.409Z"/>
                 </g>
                 <g id="Group_188" data-name="Group 188">
                   <path id="Path_298" data-name="Path 298" d="M231.458,830.367,226,824.156a5.005,5.005,0,0,0-3.8-1.747H199a2,2,0,0,0-2,2v6" fill="#29abe2"/>
                   <path id="Path_299" data-name="Path 299" d="M197,831.409a1,1,0,0,1-1-1v-6a3,3,0,0,1,3-3h23.2a6,6,0,0,1,4.559,2.1l5.452,6.2a1,1,0,1,1-1.5,1.32l-5.46-6.211a4.008,4.008,0,0,0-3.049-1.407H199a1,1,0,0,0-1,1v6A1,1,0,0,1,197,831.409Z"/>
                 </g>
                 <g id="Group_189" data-name="Group 189">
                   <path id="Path_300" data-name="Path 300" d="M202,840.409a5,5,0,0,1-5-5v-5h43.219A4.781,4.781,0,0,1,245,835.19v.438a4.782,4.782,0,0,1-4.781,4.781H202Z" fill="#29abe2"/>
                   <path id="Path_301" data-name="Path 301" d="M240.219,841.409H202a6.007,6.007,0,0,1-6-6v-6h44.219A5.788,5.788,0,0,1,246,835.19v.437A5.789,5.789,0,0,1,240.219,841.409Zm-42.219-10v4a4,4,0,0,0,4,4h38.219A3.786,3.786,0,0,0,244,835.627v-.437a3.785,3.785,0,0,0-3.781-3.781Z"/>
                 </g>
                 <g id="Group_190" data-name="Group 190">
                   <circle id="Ellipse_49" data-name="Ellipse 49" cx="3.975" cy="3.975" r="3.975" transform="translate(230.53 837.459)" fill="#29abe2"/>
                   <path id="Path_302" data-name="Path 302" d="M234.505,837.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                 </g>
                 <g id="Group_191" data-name="Group 191">
                   <circle id="Ellipse_50" data-name="Ellipse 50" cx="3.975" cy="3.975" r="3.975" transform="translate(202.53 837.459)" fill="#29abe2"/>
                   <path id="Path_303" data-name="Path 303" d="M206.505,837.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                 </g>
                 <g id="Group_192" data-name="Group 192">
                   <line id="Line_109" data-name="Line 109" x1="3" transform="translate(220 834.409)" fill="#29abe2"/>
                   <path id="Path_304" data-name="Path 304" d="M223,835.409h-3a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"/>
                 </g>
                 <g id="Group_193" data-name="Group 193">
                   <line id="Line_110" data-name="Line 110" x1="62" transform="translate(189 847.409)" fill="#29abe2"/>
                   <path id="Path_305" data-name="Path 305" d="M251,848.409H189a1,1,0,0,1,0-2h62a1,1,0,0,1,0,2Z"/>
                 </g>
               </g>
             </svg>
             </div>
            <div class="w-3/4 mx-auto h-8 flex bg-red-50/30 rounded-md">
<svg class="autoplay-true self-center" width="50px" height="50px" viewBox="0 -15 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g id="Group_576" data-name="Group 576" transform="translate(-288 -437.409)">
                    <g id="Group_527" data-name="Group 527">
                      <g id="Group_520" data-name="Group 520">
                        <path id="Path_745" data-name="Path 745" d="M318,447.409v-2a2,2,0,0,0-2-2h0a2,2,0,0,0-2,2v2" fill="#29abe2"/>
                        <path id="Path_746" data-name="Path 746" d="M318,448.409a1,1,0,0,1-1-1v-2a1,1,0,0,0-2,0v2a1,1,0,1,1-2,0v-2a3,3,0,0,1,6,0v2A1,1,0,0,1,318,448.409Z"/>
                      </g>
                      <path id="Path_747" data-name="Path 747" d="M316,441.409a1,1,0,0,1-1-1v-2a1,1,0,0,1,2,0v2A1,1,0,0,1,316,441.409Z"/>
                      <path id="Path_748" data-name="Path 748" d="M318.793,442.116a1,1,0,0,1-.707-1.707l1.414-1.414a1,1,0,0,1,1.414,1.414l-1.414,1.414A1,1,0,0,1,318.793,442.116Z"/>
                      <path id="Path_749" data-name="Path 749" d="M313.207,442.116a1,1,0,0,1-.707-.293l-1.414-1.414a1,1,0,0,1,1.414-1.414l1.414,1.414a1,1,0,0,1-.707,1.707Z"/>
                      <g id="Group_521" data-name="Group 521">
                        <path id="Path_750" data-name="Path 750" d="M329.969,455.377l-5.471-6.221a5,5,0,0,0-3.8-1.747H304.976a2.148,2.148,0,0,0-1.976,2v5.968" fill="#29abe2"/>
                        <path id="Path_751" data-name="Path 751" d="M329.969,456.377a1,1,0,0,1-.751-.339l-5.471-6.222a4.008,4.008,0,0,0-3.049-1.407H304.976a1.176,1.176,0,0,0-.976,1v5.967a1,1,0,1,1-2,0V449.41a3.148,3.148,0,0,1,2.976-3H320.7a6,6,0,0,1,4.559,2.1l5.463,6.213a1,1,0,0,1-.751,1.66Z"/>
                      </g>
                      <g id="Group_522" data-name="Group 522">
                        <path id="Path_752" data-name="Path 752" d="M344,460.409a5,5,0,0,0-5-5H301a5,5,0,0,0-5,5h0a5,5,0,0,0,5,5h38a5,5,0,0,0,5-5Z" fill="#29abe2"/>
                        <path id="Path_753" data-name="Path 753" d="M339,466.409H301a6,6,0,0,1,0-12h38a6,6,0,0,1,0,12Zm-38-10a4,4,0,0,0,0,8h38a4,4,0,0,0,0-8Z"/>
                      </g>
                      <g id="Group_523" data-name="Group 523">
                        <circle id="Ellipse_133" data-name="Ellipse 133" cx="3.975" cy="3.975" r="3.975" transform="translate(329.53 460.459)" fill="#29abe2"/>
                        <path id="Path_754" data-name="Path 754" d="M333.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                      </g>
                      <g id="Group_524" data-name="Group 524">
                        <circle id="Ellipse_134" data-name="Ellipse 134" cx="3.975" cy="3.975" r="3.975" transform="translate(301.53 460.459)" fill="#29abe2"/>
                        <path id="Path_755" data-name="Path 755" d="M305.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                      </g>
                      <g id="Group_525" data-name="Group 525">
                        <line id="Line_217" data-name="Line 217" x1="3" transform="translate(319 459.409)" fill="#29abe2"/>
                        <path id="Path_756" data-name="Path 756" d="M322,460.409h-3a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"/>
                      </g>
                      <g id="Group_526" data-name="Group 526">
                        <line id="Line_218" data-name="Line 218" x1="62" transform="translate(289 470.409)" fill="#29abe2"/>
                        <path id="Path_757" data-name="Path 757" d="M351,471.409H289a1,1,0,0,1,0-2h62a1,1,0,0,1,0,2Z"/>
                      </g>
                    </g>
                  </g>
                </svg>
            </div>
       </div>
      </div>
      </div>

      <!--* anime-js-3 -->
      <div id="animejs-3" class="snap-center shrink-0">
         <div class="menuAnimeJs w-80 h-40  flex items-center rounded-lg shadow-xl shadow-yellow-500 shrink-0  bg-yellow-400">
            <div class="w-3/4 h-28 bg-white/20 mx-auto demo-content promise-demo">
              <div class="logs">
                <div class="circle shadow"></div>
              <div class="ml-6 mb-4  circle el w-5 h-5 rounded-2xl mt-3" style="transform: translateX(0px) scale(2); background-color: rgb(179, 59, 48);"></div>
              <div class="w-2/3 h-16 mx-auto flex flex-col ">
                <input class="  bg-yellow-300/20 log progress-log">
                <input class="bg-yellow-300/20  log finished-log">
              </div>
              </div>
            </div>
         </div>
      </div>
      <!--* anime-js-4 -->
      <div id="animejs-4" class="snap-center">
         <div class="menuAnimeJs flex items-center  justify-center w-80 h-40 rounded-lg shadow-xl  shrink-0  bg-green-400">
            <div class="motion-path-demo bg-red-50/30">
                 <div class="w-5 h-5 bg-white el follow-path"></div>
                 <svg  width="256" height="112" viewBox="0 0 256 112">
                   <path fill="none" stroke="currentColor" stroke-width="1" d="M8,56 C8,33.90861 25.90861,16 48,16 C70.09139,16 88,33.90861 88,56 C88,78.09139 105.90861,92 128,92 C150.09139,92 160,72 160,56 C160,40 148,24 128,24 C108,24 96,40 96,56 C96,72 105.90861,92 128,92 C154,93 168,78 168,56 C168,33.90861 185.90861,16 208,16 C230.09139,16 248,33.90861 248,56 C248,78.09139 230.09139,96 208,96 L48,96 C25.90861,96 8,78.09139 8,56 Z"/>
                 </svg>
             </div>
         </div>
      </div>
      <!-- * anime-js-5 -->
      <div class="snap-center">
         <div id="animejs-5" class="menuAnimeJs w-80 h-40 rounded-lg shadow-xl  shrink-0  bg-white">
            <div class="demo-content staggering-grid-demo">
               <div class="grid grid-cols-12 bg-gray-600">
                 <div class="w-5 h-5  bg-red-600 border border-white ssmall square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5  bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                    <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                 <div class="w-5 h-5 bg-red-600 border border-white small square el" style="transform: scale(1);"></div>
                              </div>
               <div class="grid shadow">
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
                 <div class="small square"></div>
               </div>
             </div>
         </div>
      </div>
      <!--* AnimeJs-6-->
       <div id="animejs-6" class="snap-center">
            <div class="menuAnimeJs w-80 h-40 seek-anim-demo flex justify-center flex-col  shadow-lg shadow-rose-700 rounded-lg space-y-2  shrink-0  bg-rose-500 line">
               <div class="w-3/4 mx-auto h-8 flex bg-red-50/30 rounded-md">
                  <svg class="el self-center" width="50px" height="50px" viewBox="0 -15 64 64" xmlns="http://www.w3.org/2000/svg">
                     <g id="Group_576" data-name="Group 576" transform="translate(-288 -437.409)">
                       <g id="Group_527" data-name="Group 527">
                         <g id="Group_520" data-name="Group 520">
                           <path id="Path_745" data-name="Path 745" d="M318,447.409v-2a2,2,0,0,0-2-2h0a2,2,0,0,0-2,2v2" fill="#29abe2"/>
                           <path id="Path_746" data-name="Path 746" d="M318,448.409a1,1,0,0,1-1-1v-2a1,1,0,0,0-2,0v2a1,1,0,1,1-2,0v-2a3,3,0,0,1,6,0v2A1,1,0,0,1,318,448.409Z"/>
                         </g>
                         <path id="Path_747" data-name="Path 747" d="M316,441.409a1,1,0,0,1-1-1v-2a1,1,0,0,1,2,0v2A1,1,0,0,1,316,441.409Z"/>
                         <path id="Path_748" data-name="Path 748" d="M318.793,442.116a1,1,0,0,1-.707-1.707l1.414-1.414a1,1,0,0,1,1.414,1.414l-1.414,1.414A1,1,0,0,1,318.793,442.116Z"/>
                         <path id="Path_749" data-name="Path 749" d="M313.207,442.116a1,1,0,0,1-.707-.293l-1.414-1.414a1,1,0,0,1,1.414-1.414l1.414,1.414a1,1,0,0,1-.707,1.707Z"/>
                         <g id="Group_521" data-name="Group 521">
                           <path id="Path_750" data-name="Path 750" d="M329.969,455.377l-5.471-6.221a5,5,0,0,0-3.8-1.747H304.976a2.148,2.148,0,0,0-1.976,2v5.968" fill="#29abe2"/>
                           <path id="Path_751" data-name="Path 751" d="M329.969,456.377a1,1,0,0,1-.751-.339l-5.471-6.222a4.008,4.008,0,0,0-3.049-1.407H304.976a1.176,1.176,0,0,0-.976,1v5.967a1,1,0,1,1-2,0V449.41a3.148,3.148,0,0,1,2.976-3H320.7a6,6,0,0,1,4.559,2.1l5.463,6.213a1,1,0,0,1-.751,1.66Z"/>
                         </g>
                         <g id="Group_522" data-name="Group 522">
                           <path id="Path_752" data-name="Path 752" d="M344,460.409a5,5,0,0,0-5-5H301a5,5,0,0,0-5,5h0a5,5,0,0,0,5,5h38a5,5,0,0,0,5-5Z" fill="#29abe2"/>
                           <path id="Path_753" data-name="Path 753" d="M339,466.409H301a6,6,0,0,1,0-12h38a6,6,0,0,1,0,12Zm-38-10a4,4,0,0,0,0,8h38a4,4,0,0,0,0-8Z"/>
                         </g>
                         <g id="Group_523" data-name="Group 523">
                           <circle id="Ellipse_133" data-name="Ellipse 133" cx="3.975" cy="3.975" r="3.975" transform="translate(329.53 460.459)" fill="#29abe2"/>
                           <path id="Path_754" data-name="Path 754" d="M333.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                         </g>
                         <g id="Group_524" data-name="Group 524">
                           <circle id="Ellipse_134" data-name="Ellipse 134" cx="3.975" cy="3.975" r="3.975" transform="translate(301.53 460.459)" fill="#29abe2"/>
                           <path id="Path_755" data-name="Path 755" d="M305.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                         </g>
                         <g id="Group_525" data-name="Group 525">
                           <line id="Line_217" data-name="Line 217" x1="3" transform="translate(319 459.409)" fill="#29abe2"/>
                           <path id="Path_756" data-name="Path 756" d="M322,460.409h-3a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"/>
                         </g>
                         <g id="Group_526" data-name="Group 526">
                           <line id="Line_218" data-name="Line 218" x1="62" transform="translate(289 470.409)" fill="#29abe2"/>
                           <path id="Path_757" data-name="Path 757" d="M351,471.409H289a1,1,0,0,1,0-2h62a1,1,0,0,1,0,2Z"/>
                         </g>
                       </g>
                     </g>
                   </svg>
                   
               </div>
               <div class="w-3/4 mx-auto h-8 flex bg-red-50/30 rounded-md">
                  <svg class="el self-center" width="50px" height="50px" viewBox="0 -15 64 64" xmlns="http://www.w3.org/2000/svg">
                  <g id="Group_576" data-name="Group 576" transform="translate(-288 -437.409)">
                    <g id="Group_527" data-name="Group 527">
                      <g id="Group_520" data-name="Group 520">
                        <path id="Path_745" data-name="Path 745" d="M318,447.409v-2a2,2,0,0,0-2-2h0a2,2,0,0,0-2,2v2" fill="#29abe2"/>
                        <path id="Path_746" data-name="Path 746" d="M318,448.409a1,1,0,0,1-1-1v-2a1,1,0,0,0-2,0v2a1,1,0,1,1-2,0v-2a3,3,0,0,1,6,0v2A1,1,0,0,1,318,448.409Z"/>
                      </g>
                      <path id="Path_747" data-name="Path 747" d="M316,441.409a1,1,0,0,1-1-1v-2a1,1,0,0,1,2,0v2A1,1,0,0,1,316,441.409Z"/>
                      <path id="Path_748" data-name="Path 748" d="M318.793,442.116a1,1,0,0,1-.707-1.707l1.414-1.414a1,1,0,0,1,1.414,1.414l-1.414,1.414A1,1,0,0,1,318.793,442.116Z"/>
                      <path id="Path_749" data-name="Path 749" d="M313.207,442.116a1,1,0,0,1-.707-.293l-1.414-1.414a1,1,0,0,1,1.414-1.414l1.414,1.414a1,1,0,0,1-.707,1.707Z"/>
                      <g id="Group_521" data-name="Group 521">
                        <path id="Path_750" data-name="Path 750" d="M329.969,455.377l-5.471-6.221a5,5,0,0,0-3.8-1.747H304.976a2.148,2.148,0,0,0-1.976,2v5.968" fill="#29abe2"/>
                        <path id="Path_751" data-name="Path 751" d="M329.969,456.377a1,1,0,0,1-.751-.339l-5.471-6.222a4.008,4.008,0,0,0-3.049-1.407H304.976a1.176,1.176,0,0,0-.976,1v5.967a1,1,0,1,1-2,0V449.41a3.148,3.148,0,0,1,2.976-3H320.7a6,6,0,0,1,4.559,2.1l5.463,6.213a1,1,0,0,1-.751,1.66Z"/>
                      </g>
                      <g id="Group_522" data-name="Group 522">
                        <path id="Path_752" data-name="Path 752" d="M344,460.409a5,5,0,0,0-5-5H301a5,5,0,0,0-5,5h0a5,5,0,0,0,5,5h38a5,5,0,0,0,5-5Z" fill="#29abe2"/>
                        <path id="Path_753" data-name="Path 753" d="M339,466.409H301a6,6,0,0,1,0-12h38a6,6,0,0,1,0,12Zm-38-10a4,4,0,0,0,0,8h38a4,4,0,0,0,0-8Z"/>
                      </g>
                      <g id="Group_523" data-name="Group 523">
                        <circle id="Ellipse_133" data-name="Ellipse 133" cx="3.975" cy="3.975" r="3.975" transform="translate(329.53 460.459)" fill="#29abe2"/>
                        <path id="Path_754" data-name="Path 754" d="M333.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                      </g>
                      <g id="Group_524" data-name="Group 524">
                        <circle id="Ellipse_134" data-name="Ellipse 134" cx="3.975" cy="3.975" r="3.975" transform="translate(301.53 460.459)" fill="#29abe2"/>
                        <path id="Path_755" data-name="Path 755" d="M305.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                      </g>
                      <g id="Group_525" data-name="Group 525">
                        <line id="Line_217" data-name="Line 217" x1="3" transform="translate(319 459.409)" fill="#29abe2"/>
                        <path id="Path_756" data-name="Path 756" d="M322,460.409h-3a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"/>
                      </g>
                      <g id="Group_526" data-name="Group 526">
                        <line id="Line_218" data-name="Line 218" x1="62" transform="translate(289 470.409)" fill="#29abe2"/>
                        <path id="Path_757" data-name="Path 757" d="M351,471.409H289a1,1,0,0,1,0-2h62a1,1,0,0,1,0,2Z"/>
                      </g>
                    </g>
                  </g>
                </svg>
                </div>
               <div class="w-3/4 mx-auto h-8 flex bg-red-50/30 rounded-md">
       <svg class="el self-center" width="50px" height="50px" viewBox="0 -15 64 64" xmlns="http://www.w3.org/2000/svg">
                     <g id="Group_576" data-name="Group 576" transform="translate(-288 -437.409)">
                       <g id="Group_527" data-name="Group 527">
                         <g id="Group_520" data-name="Group 520">
                           <path id="Path_745" data-name="Path 745" d="M318,447.409v-2a2,2,0,0,0-2-2h0a2,2,0,0,0-2,2v2" fill="#29abe2"/>
                           <path id="Path_746" data-name="Path 746" d="M318,448.409a1,1,0,0,1-1-1v-2a1,1,0,0,0-2,0v2a1,1,0,1,1-2,0v-2a3,3,0,0,1,6,0v2A1,1,0,0,1,318,448.409Z"/>
                         </g>
                         <path id="Path_747" data-name="Path 747" d="M316,441.409a1,1,0,0,1-1-1v-2a1,1,0,0,1,2,0v2A1,1,0,0,1,316,441.409Z"/>
                         <path id="Path_748" data-name="Path 748" d="M318.793,442.116a1,1,0,0,1-.707-1.707l1.414-1.414a1,1,0,0,1,1.414,1.414l-1.414,1.414A1,1,0,0,1,318.793,442.116Z"/>
                         <path id="Path_749" data-name="Path 749" d="M313.207,442.116a1,1,0,0,1-.707-.293l-1.414-1.414a1,1,0,0,1,1.414-1.414l1.414,1.414a1,1,0,0,1-.707,1.707Z"/>
                         <g id="Group_521" data-name="Group 521">
                           <path id="Path_750" data-name="Path 750" d="M329.969,455.377l-5.471-6.221a5,5,0,0,0-3.8-1.747H304.976a2.148,2.148,0,0,0-1.976,2v5.968" fill="#29abe2"/>
                           <path id="Path_751" data-name="Path 751" d="M329.969,456.377a1,1,0,0,1-.751-.339l-5.471-6.222a4.008,4.008,0,0,0-3.049-1.407H304.976a1.176,1.176,0,0,0-.976,1v5.967a1,1,0,1,1-2,0V449.41a3.148,3.148,0,0,1,2.976-3H320.7a6,6,0,0,1,4.559,2.1l5.463,6.213a1,1,0,0,1-.751,1.66Z"/>
                         </g>
                         <g id="Group_522" data-name="Group 522">
                           <path id="Path_752" data-name="Path 752" d="M344,460.409a5,5,0,0,0-5-5H301a5,5,0,0,0-5,5h0a5,5,0,0,0,5,5h38a5,5,0,0,0,5-5Z" fill="#29abe2"/>
                           <path id="Path_753" data-name="Path 753" d="M339,466.409H301a6,6,0,0,1,0-12h38a6,6,0,0,1,0,12Zm-38-10a4,4,0,0,0,0,8h38a4,4,0,0,0,0-8Z"/>
                         </g>
                         <g id="Group_523" data-name="Group 523">
                           <circle id="Ellipse_133" data-name="Ellipse 133" cx="3.975" cy="3.975" r="3.975" transform="translate(329.53 460.459)" fill="#29abe2"/>
                           <path id="Path_754" data-name="Path 754" d="M333.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                         </g>
                         <g id="Group_524" data-name="Group 524">
                           <circle id="Ellipse_134" data-name="Ellipse 134" cx="3.975" cy="3.975" r="3.975" transform="translate(301.53 460.459)" fill="#29abe2"/>
                           <path id="Path_755" data-name="Path 755" d="M305.505,460.459a3.975,3.975,0,1,1-3.975,3.975,3.975,3.975,0,0,1,3.975-3.975m0-2a5.975,5.975,0,1,0,5.974,5.975,5.982,5.982,0,0,0-5.974-5.975Z"/>
                         </g>
                         <g id="Group_525" data-name="Group 525">
                           <line id="Line_217" data-name="Line 217" x1="3" transform="translate(319 459.409)" fill="#29abe2"/>
                           <path id="Path_756" data-name="Path 756" d="M322,460.409h-3a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"/>
                         </g>
                         <g id="Group_526" data-name="Group 526">
                           <line id="Line_218" data-name="Line 218" x1="62" transform="translate(289 470.409)" fill="#29abe2"/>
                           <path id="Path_757" data-name="Path 757" d="M351,471.409H289a1,1,0,0,1,0-2h62a1,1,0,0,1,0,2Z"/>
                         </g>
                       </g>
                     </g>
                   </svg>
               </div>

               <div class="w-3/4 mx-auto h-8 flex  rounded-md">
               <div class="w-full line controls">
                  <input class="progress w-full" step=".001" type="range" min="20" max="100" value="0">
                </div>
                </div>
                </div> 
    </div>
    <!--* AnimeJs-7-->
<div id="animejs-7" class="snap-center ...">

<div class="menuAnimeJs w-80 h-40  flex items-center rounded-lg shadow-xl shadow-yellow-500 shrink-0  bg-yellow-400">
   <!-- <div class="w-3/4 mx-auto h-28 css-transforms-demo flex bg-red-50/30 rounded-md"><div class="w-8 h-8 bg-white self-center rounded-full  el"></div></div> -->
   <div class="w-3/4 h-28 bg-white/20 mx-auto demo-content text-center flex justify-center promise-demo">
    <h1 class="ml1 flex justify-center  ">
      <span class="text-wrapper flex ">
        <span class="line line1  el "></span>
        <span class="letters self-center">THURSDAY</span>
        <span class="line line2"></span>
      </span>
    </h1>
     
   </div>
         
   </div>
 </div>
 </div>
</div>
<!--! ----------------------------------------------------------------------- -->
<!--TODO ------------------- TheEnd_Sample_move_AnimeJs --------------------- -->
<!--! ----------------------------------------------------------------------- -->
 
 `
  //! -------------------------------------------------------------------------- */
  //* ----------------------------- StartAnimate.js ----------------------------- */
  //! -------------------------------------------------------------------------- */
  let elmAnimateJs = document.querySelector(".animate_js");
  let elmContainerSvgAnimeJs = document.querySelector("#container-Svg-AnimeJs");
  let containerAnimateJs = document.querySelector("#Code-svgAnimateJs");
  let offsetAnimateJs = anime.setDashoffset(elmAnimateJs);
  function SvgAnimateJs() {
    elmAnimateJs.setAttribute("stroke-dashoffset", offsetAnimateJs);
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
  }
  containerAnimateJs.addEventListener("click", () => {
    console.log("containeAnimeJs");
    // elmContainerSvgAnimeJs.classList.add("hidden");
    elmTextAnimeJs.innerHTML = "";
    elmTextAnimeJs.insertAdjacentHTML(
      "beforeend",
      `
  <div class="absolute w-5/6 h-5/6 flex justify-center divAnimateJs animate__animated animate__lightSpeedInLeft">
         <svg class="w-full" viewBox="100 0 245 100" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
         <text class="animate_js  animate__animated" style="fill: rgb(235, 14, 14); font-family: &quot;Distro Extinct&quot;; stroke: rgb(124, 132, 97); stroke-dasharray: 30px; stroke-dashoffset: 3.37319px; stroke-opacity: 0.53; stroke-width: 0.756387px; white-space: pre;" transform="matrix(4.114889, 0, 0, 3.817554, -392.250885, -53.289532)" x="119.835" y="32.323" stroke-dasharray="undefined">AnimeJs</text>
          </svg>
  `,
    );
    location.reload();
    // sourceCodeAnimJs.remove();
  });
  SvgAnimateJs();

  //TODO --------------- scrollAnimateJs ----------------- */
  // let body = document.body;
  let elmDivAnimateJs = document.querySelector(".divAnimateJs");
  let elmLineAnimate = document.querySelector("#lineAnimate");
  window.onscroll = () => {
    winScroll(384, elmLineAnimate, "animate__backInRight"); //! <=== جواب
    winScroll(845, elmDivAnimateJs, "animate__lightSpeedInLeft");
  };

  //TODO --------------- TheEndScrollAnimateJs ----------------- */
  //! -------------------------------------------------------------------------- */
  //* ----------------------------- MenuAnimeJs -------------------------------- */
  //! -------------------------------------------------------------------------- */
  // //TODO --------------- animeJs-1 ----------------- */
  let elemAnimeJs_1 = document.querySelector("#animejs-1");
  let elmTextAnimeJs = document.querySelector(".divMenuAnimeJs");
  let elmDivAnimeJs = document.querySelector("#divAll");
  let createElm = document.createElement("div");
  elemAnimeJs_1.addEventListener("click", animeJs_1);
  // let elmEl = document.querySelectorAll(".el");
   let codeAnmieJs_All = [
          `
          
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
            </div
        });>
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
      loop: true,
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
}
/**
 * Checks the window scroll position and adds or removes a class from an element based on the scroll position.
 *
 * @param {number} number - The scroll position to compare against window.scrollY
 * @param {Element} element - The element to add or remove the class from
 * @param {string} classId - The class to add or remove from the element
 * @return {void} 
 */
function winScroll(number, element, classId) {
  if (window.scrollY > number) {

    element.classList.add(classId);
  } else {
    element.classList.remove(classId);
  }
}