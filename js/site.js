// Mobile menu toggle and scroll-to-top button, shared by every page.
(function () {
  var btn = document.getElementById("hamburgerbtn");
  var overlay = document.getElementById("overlay");
  btn.addEventListener("click", function () {
    overlay.classList.toggle("open");
    btn.classList.toggle("is-open");
    document.body.classList.toggle("scroll-lock");
  });
  document.querySelector(".scroll-top").addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });
  document.getElementById("year").textContent = new Date().getFullYear();
})();
