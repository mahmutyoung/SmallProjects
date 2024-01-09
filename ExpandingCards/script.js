const imageList = document.querySelectorAll('.item');
const header = document.querySelector('.visible');

imageList.forEach((image, key) => {
  image.addEventListener('click', () => {
    imageList.forEach((image) => {
      image.classList.remove('active');
      if (key === 0) {
        header.classList.add('visible');
        header.classList.remove('hidden');
      } else {
        header.classList.remove('visible');
        header.classList.add('hidden');
      }
    });
    image.classList.add('active');
  });
});
