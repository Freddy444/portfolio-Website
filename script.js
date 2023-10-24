function toggleMenu(){ 
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".ham-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const downloadCVButton = document.getElementById('downloadCVButton');
const contactInfoButton = document.getElementById('contactInfoButton');

// Add event listeners to the buttons
downloadCVButton.addEventListener('click', () => {
  window.open('swresume.pdf');
});

contactInfoButton.addEventListener('click', () => {
  location.href = './#contact';
});