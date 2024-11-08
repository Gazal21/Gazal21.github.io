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
