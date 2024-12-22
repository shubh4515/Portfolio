const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
function SubForm() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  document.getElementById("currentDateTime").defaultValue = dateTime;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyqDxkswDOMAmrpuARPnR9Z2lMk3dz8DGLoHZkoRbJW8wiUogE/exec",
    type: "post",
    data: $("#myForm").serializeArray(),
    success: function () {
      alert("Form Data Submitted :)");
    },
    error: function () {
      alert("There was an error :(");
    },
  });
  document.getElementById("myForm").reset();
}
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2000,
  reset: true,
});
sr.reveal(".home__title", {});
sr.reveal(".button", {
  delay: 200,
});
sr.reveal(".home__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", {
  interval: 200,
});
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", {
  delay: 400,
});
sr.reveal(".about__text", {
  delay: 400,
});
sr.reveal(".qualif__icon", {
  delay: 400,
});
sr.reveal(".qualif__subtitle", {
  delay: 400,
});
sr.reveal(".qualif__text", {
  delay: 400,
});
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", {
  delay: 600,
});
sr.reveal(".skills__data", {
  interval: 200,
});
sr.reveal(".skills__img", {
  delay: 600,
});
sr.reveal(".familiar_cont", {
  interval: 200,
});
sr.reveal(".familiar__img", {
  interval: 200,
});
sr.reveal(".familiar__subtitle", {
  interval: 200,
});
sr.reveal(".contact__input", {
  interval: 50,
});
var typed = new Typed(".typing", {
  strings: [
    "Physics Faculty",
    "Quick Learner",
    "Excellent Command <br> on Subject ",
  ],
  typeSpeed: 100,
  backSpeed: 70,
  loop: true,
});
