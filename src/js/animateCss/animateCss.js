import anime from "animejs";
import innerHTMLAnimateCss from "./htmlAnimateCss";
export default function animateCss(){
 innerHTMLAnimateCss();

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
          let elmCodeAnimateCss = document.querySelector(".codeAnimateCss");
          let elmBtnClipboardAnimateCss = document.querySelector("#btn-clipboard-animateCss")
        
          console.log(elmBtnClipboardAnimateCss);
          for (let i = 0; i < ArrayListMove.length; i++) {
            elemListMove[i].onclick = () => {
              elemTextView.innerHTML = `<h2 class="text-white"><<span class="text-yellow-600">h1</span> <span class="text-yellow-400"> class=</span>"<span class="text-green-700">animate__animated  ${ArrayListMove[i]}</span>"> Animate.css <<span class="text-yellow-600">/h1</span>></h2> `;
              elmBtnClipboardAnimateCss.onclick=()=>{
                console.log(`animate__animated  ${ArrayListMove[i]}`);
                navigator.clipboard.writeText(`animate__animated  ${ArrayListMove[i]}`);
                elmCodeAnimateCss.insertAdjacentHTML("afterbegin",`<h1 id="messageCopy" class="text-white text-lg p-2 border rounded-xl	absolute mt-20 bg-yellow-600/70 ">copied</h1>`)
                setInterval(()=>{
                    let elmMessageCopy = document.querySelector("#messageCopy")
                elmMessageCopy.classList.add("hidden")
                    
                },2000)

                
             
              }
              handler(elemAnimateCss, ArrayListMove[i], 800);
              handler(elmCodeAnimateCss, "animate__fadeIn", 100);
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
}


//   
   