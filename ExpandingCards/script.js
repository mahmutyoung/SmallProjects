const imageList = document.querySelectorAll('.item');
console.log(imageList[0]);
const header = document.querySelector('h1');
console.log(header);

imageList.forEach((image, key) => {
  header.classList.add('visible');
  image.addEventListener('click', () => {
    imageList.forEach((image) => {
      image.classList.remove('active');
      if (key !== 0) {
        header.classList.add('hidden');
        header.classList.remove('visible');
      } else {
        header.classList.add('visible');
      }
    });
    image.classList.add('active');
  });
});
