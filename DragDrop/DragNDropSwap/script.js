document.addEventListener('DOMContentLoaded', () => {
  let dragSrcEl = null;
  console.log(dragSrcEl);
  function handleDragStart(e) {
    console.log('drag start');
    console.log(this);
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
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
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
      console.log('drop');
    }
  }

  function handleDragEnd(e) {
    console.log('drag end');
    this.style.opacity = '1';
    console.log(dragSrcEl);
  }
  let items = document.querySelectorAll('.card');

  items.forEach((item) => {
    item.setAttribute('draggable', 'true');
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });
});
