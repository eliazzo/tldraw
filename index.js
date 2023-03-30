const stickers = document.querySelectorAll(".sticker");
const whiteboard = document.getElementById("whiteboard");

/* -------------- */

function dragStart(event) {
  console.log("dragging...");
  event.dataTransfer.setData("text", event.target.innerText); // dataTransfer holds event data // setData manages the dragged data (type_of_data, data)
}

stickers.forEach((sticker) => {
  sticker.addEventListener("dragstart", dragStart); // event fires on dragstart
});

/* -------------- */

function dragOver(event) {
  console.log("dragging over");
  event.preventDefault(); // default behaviour does not allow drop
}

whiteboard.addEventListener("dragover", dragOver); // event fires repeatedly when sticker is over whiteboard

/* -------------- */

function drop(event) {
  event.preventDefault(); // default behaviour opens link
  const stickerData = event.dataTransfer.getData("text"); // get all data set as type 'text' by the setData method
  const x = event.clientX;
  const y = event.clientY;
  const stickerDrop = `<div style="position: absolute; top: ${y}px; left: ${x}px;">${stickerData}</div>`;
  event.target.insertAdjacentHTML("afterbegin", stickerDrop);
}

whiteboard.addEventListener("drop", drop); // handles transferred data
