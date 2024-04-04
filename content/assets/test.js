document.addEventListener('DOMContentLoaded', (event) => {
    document.body.addEventListener('tikzjax-load-finished', function(e) {
      const svgEl = e.target;
      console.log('TikZJax processing finished, SVG loaded:', svgEl);
      // Tutaj możesz dodać dodatkową logikę, np. optymalizację SVG
    });
  });
  