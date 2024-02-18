/**
 * Copy text to clipboard when button is clicked and display a message.
 *
 * @param {Element} btn - The button element that triggers the copy action
 * @param {string} ListMessage - The message to be copied to the clipboard
 * @param {Element} containerElm - The container element where the message copy confirmation will be displayed
 * @return {void} 
 */
export default function clipboardCopy(btn,ListMessage,containerElm){
btn.onclick=()=>{
    console.log(`test clipboard ${btn}`);
    navigator.clipboard.writeText(` ${ListMessage}`);
    console.log(containerElm);
    containerElm.insertAdjacentHTML("afterbegin",`<h1 id="messageCopy" class="text-white text-lg p-2 border rounded-xl bottom-0	absolute mt-20 bg-yellow-600/70 ">copied</h1>`)
   setTimeout(()=>{
        let elmMessageCopy = document.querySelector("#messageCopy")
        console.log(elmMessageCopy);
    elmMessageCopy.remove()
        
    },2000)

}
}