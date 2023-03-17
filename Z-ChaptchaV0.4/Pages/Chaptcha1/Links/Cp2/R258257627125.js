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
  const requiredImageAlts = ['bImage 2', 'bImage 4', 'bImage 6'];
  if (selectedImageAlts.length !== 3) {
    alert('Please select 3 images');
  } else if (selectedImageAlts.every(alt => requiredImageAlts.includes(alt))) {
    window.open("https://rebrand.ly/Zip_Compleet245821999")
  } else {
    alert('Sorry, you did not select the correct images.');
  }
}

images.forEach(img => {
  img.addEventListener('click', () => toggleSelection(img));
});

submitBtn.addEventListener('click', checkSelection);