/* ============================================
   Visual Kreasi - Main JS
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  // Fade-in animations on load
  var animElements = document.querySelectorAll('.animate');
  animElements.forEach(function (el, index) {
    var delay = el.getAttribute('data-delay') || index * 100;
    setTimeout(function () {
      el.classList.add('visible');
    }, delay);
  });
});
