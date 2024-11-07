// Smooth horizontal scrolling for project rows
document.querySelectorAll('.project-row').forEach(row => {
  row.addEventListener('wheel', (e) => {
    e.preventDefault();
    row.scrollBy({
      left: e.deltaY < 0 ? -100 : 100,
      behavior: 'smooth'
    });
  });
});
