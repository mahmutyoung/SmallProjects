const draggableElement = document.getElementById('mydiv');
makeElementDraggable(draggableElement);

function makeElementDraggable(element) {
  let pos1,
    pos2,
    pos3,
    pos4 = 0;

  const draggableHeader = document.querySelector('.drag-header');

  draggableHeader.addEventListener('mousedown', dragMouseDown);

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.addEventListener('mouseup', closeDragElement);
    document.addEventListener('mousemove', dragElement);
  }
  function dragElement(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = element.offsetTop - pos2 + 'px';
    element.style.left = element.offsetLeft - pos1 + 'px';
  }
  function closeDragElement() {
    document.removeEventListener('mouseup', closeDragElement);
    document.removeEventListener('mousemove', dragElement);
  }
}
