document.addEventListener('dragend', DnDSwap);
function DnDSwap() {
  let dragSrcEl = null;
  console.log(dragSrcEl);
  function handleDragStart(e) {
    console.log('drag start');
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
    this.style.opacity = '0.8';
  }

  function handleDragOver(e) {
    console.log('drag over');
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  function handleDragEnter(e) {
    console.log('drag Enter');
    this.style.opacity = '0.4';
  }

  function handleDragLeave(e) {
    console.log('drag Leave');
    this.style.opacity = '1';
  }

  function handleDrop(e) {
    if (dragSrcEl != this) {
      this.style.opacity = '1';
      dragSrcEl.outerHTML = this.outerHTML;
      this.outerHTML = e.dataTransfer.getData('text/html');

      console.log('drop');
    }
  }

  function handleDragEnd(e) {
    console.log('drag end');
    this.style.opacity = '1';
    console.log(dragSrcEl);
  }

  let draggableItem = document.querySelector('.draggable');
  let droppableItem = document.querySelector('.droppable');

  draggableItem.addEventListener('dragstart', handleDragStart, false);
  droppableItem.addEventListener('dragenter', handleDragEnter, false);
  droppableItem.addEventListener('dragover', handleDragOver, false);
  droppableItem.addEventListener('dragleave', handleDragLeave, false);
  droppableItem.addEventListener('drop', handleDrop, false);
  draggableItem.addEventListener('dragend', handleDragEnd, false);
}
