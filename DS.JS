// Scroll-based animations
document.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const cardBottom = card.getBoundingClientRect().bottom;
      if (cardTop < window.innerHeight && cardBottom > 0) {
        card.classList.add('visible');
      }
    });
  });