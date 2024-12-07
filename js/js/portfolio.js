// public/js/portfolio.js

document.addEventListener('DOMContentLoaded', () => {
  const image1Input = document.getElementById('image1');
  const fileNameDisplay = document.getElementById('file-name-display');

  if (image1Input) {
      image1Input.addEventListener('change', function () {
          const fileName = this.files[0]?.name;
          if (fileName) {
              fileNameDisplay.textContent = `Selected file: ${fileName}`;
          } else {
              fileNameDisplay.textContent = '';
          }
      });
  }
});
