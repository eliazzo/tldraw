const stickers = document.querySelectorAll(".sticker");
const whiteboard = document.getElementById("whiteboard");

/* -------------- */

function dragStart(event) { 
  console.log("dragging...");
  event.dataTransfer.setData("text", event.target.innerText);
}
// dataTransfer holds event data
// setData manages the dragged data (type_of_data, data)

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

function drop(event){
  event.preventDefault(); // default behaviour opens link
  const draggableElementData = event.dataTransfer.getData("text"); // get all data set as type 'text' by the setData method
  const x = event.clientX - whiteboard.offsetLeft; // event.clientNum returns the coordinates of the mouse
  const y = event.clientY - whiteboard.offsetTop; //  offset values are needed to calculate the position of the mouse click relative to the droppable element

  // const draggableElement = document.getElementById(draggableElementData);
  event.target.insertAdjacentHTML("afterbegin", `<div style="position: absolute; top: ${y}px; left: ${x}px;">${draggableElementData}</div>`);
}

whiteboard.addEventListener("drop", drop) // handles transferred data
