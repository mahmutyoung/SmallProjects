const imageList = document.querySelectorAll('.item');
console.log(imageList[0]);

imageList.forEach((image) => {
  image.addEventListener('click', () => {
    imageList.forEach((image) => {
      image.classList.remove('active');
    });
    image.classList.add('active');
  });
});
