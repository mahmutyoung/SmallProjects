function makeElementDraggable(element) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  const dragHeader = element.querySelector('.drag-header');

  dragHeader.addEventListener('mousedown', dragMouseDown);

  function dragMouseDown(e) {
    //why do we need preventDefault
    //https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    //https://stackoverflow.com/questions/32553158/drag-and-drop-detection-using-html5
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.addEventListener('mouseup', closeDragElement);
    document.addEventListener('mousemove', elementDrag);
  }

  function elementDrag(e) {
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
    document.removeEventListener('mousemove', elementDrag);
  }
}

const draggableElement = document.getElementById('mydiv');
makeElementDraggable(draggableElement);
