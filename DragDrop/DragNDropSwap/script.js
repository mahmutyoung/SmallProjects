document.addEventListener('DOMContentLoaded', () => {
  let dragSrcEl = null;
  function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);

    this.classList.add('over');
  }

  function handleDragOver(e) {
    console.log('drag over');
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (dragSrcEl != this) {
      this.classList.remove('over');
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
  }

  function handleDragEnd(e) {
    this.classList.remove('over');
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
