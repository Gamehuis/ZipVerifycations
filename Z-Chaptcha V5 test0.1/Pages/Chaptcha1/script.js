const images = document.querySelectorAll('.image-container img');
const submitBtn = document.getElementById('submit-btn');

let selectedImages = [];

function toggleSelection(img) {
  img.classList.toggle('selected');
  if (img.classList.contains('selected')) {
    selectedImages.push(img);
  } else {
    selectedImages = selectedImages.filter(selectedImg => selectedImg !== img);
  }
}

function checkSelection() {
  const selectedImageAlts = selectedImages.map(selectedImg => selectedImg.alt);
  const requiredImageAlts = ['Image 4', 'Image 5', 'Image 6'];
  if (selectedImageAlts.length !== 3) {
    alert('Please select 3 images');
  } else if (selectedImageAlts.every(alt => requiredImageAlts.includes(alt))) {
    alert('Congratulations! You selected the correct images!');
  } else {
    alert('Sorry, you did not select the correct images.');
  }
}

images.forEach(img => {
  img.addEventListener('click', () => toggleSelection(img));
});

submitBtn.addEventListener('click', checkSelection);
