const stickers = document.querySelectorAll(".sticker");
const whiteboard = document.getElementById("whiteboard")

const lightbulb = document.getElementById("lightbulb")

function cloneSticker() { // clones button text
  const clone = lightbulb.cloneNode(true);
  return clone.innerText;
  // console.log(clone.innerText);
}

// stickers.forEach((sticker) => {
//   sticker.addEventListener("click", cloneSticker);
// })

lightbulb.addEventListener("click", cloneSticker)

function dropSticker(event) {
  const clonedSticker = cloneSticker()
  const x = event.clientX;
  const y = event.clientY;
  const stickerDropPos = `<div style="position: absolute; top: ${y}px; left: ${x}px;">${clonedSticker}</div>`;
  
  event.target.insertAdjacentHTML("afterbegin", stickerDropPos)
}

whiteboard.addEventListener("click", dropSticker);



const mousePosText = document.getElementById('mouse-pos');
let mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
   mousePos = { x: event.clientX, y: event.clientY };
  mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
})
