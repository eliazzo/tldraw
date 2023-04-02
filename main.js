const stickers = document.querySelectorAll(".sticker");
const whiteboard = document.getElementById("whiteboard");

let previousClickHandler;
let previousSticker;

function createEmojiSticker(event, emoji) {
  const sticker = document.createElement('div')
  sticker.style.position = "absolute"
  sticker.style.left = `${event.clientX}px`
  sticker.style.top = `${event.clientY}px`
  sticker.innerText = emoji
  sticker.style.transform = 'rotate(10deg)'
  return sticker
}

function stickerDrop(event, emoji) {
  const newSticker = createEmojiSticker(event, emoji)
  whiteboard.appendChild(newSticker);
}

function stickerMousemove(event, emoji) {

  if (previousSticker) {
    whiteboard.removeChild(previousSticker)
  }

  const newSticker = createEmojiSticker(event, emoji)
  whiteboard.appendChild(newSticker);

  previousSticker = newSticker;
}


stickers.forEach((sticker) => {
  sticker.addEventListener("click", () => {
    const emoji = sticker.cloneNode(true).innerText;

    const onClickHandler = (event) => stickerDrop(event, emoji)

    whiteboard.removeEventListener("click", previousClickHandler);
    whiteboard.addEventListener("click", onClickHandler);

    const mousemoveHandler = (event) => stickerMousemove(event, emoji)
    whiteboard.addEventListener("mousemove", mousemoveHandler);
    
    previousClickHandler = onClickHandler
  });
}); 
