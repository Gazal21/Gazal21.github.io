// Smooth horizontal scrolling for project rows
document.querySelectorAll('.project-row').forEach(row => {
  row.addEventListener('wheel', (e) => {
    e.preventDefault();

    // Use deltaX for horizontal scrolling
    row.scrollBy({
      left: e.deltaX, // Scroll in the direction of the horizontal wheel scroll
      behavior: 'smooth' // Smooth scrolling
    });
  });
});

document.querySelectorAll('.project-container').forEach(container => {
  const row = container.querySelector('.project-row');
  const leftArrow = container.querySelector('.left-arrow');
  const rightArrow = container.querySelector('.right-arrow');

  // Scroll left on left arrow click
  leftArrow.addEventListener('click', () => {
    row.scrollBy({
      left: -200, // Adjust the scroll amount as needed
      behavior: 'smooth'
    });
  });

  // Scroll right on right arrow click
  rightArrow.addEventListener('click', () => {
    row.scrollBy({
      left: 200, // Adjust the scroll amount as needed
      behavior: 'smooth'
    });
  });
});

