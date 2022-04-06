// let currentSlide = 0;
// const slides = document.querySelectorAll(".slide");
// const dots = document.querySelectorAll('.dot');
//
// const init = (n) => {
//     slides.forEach((slide) => {
//         slide.style.display = "none";
//         dots.forEach((dot) => {
//             dot.classList.remove("active");
//         })
//     })
//     slides[n].style.display = "flex";
//     dots[n].classList.add("active");
// }
// document.addEventListener("DOMContentLoaded", init(currentSlide));
//
// const next = () => {
//     currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
//     init(currentSlide);
// }
//
// setInterval(() => {
//     next();
// }, 10000);
//
// dots.forEach((dot, i) => {
//     dot.addEventListener("click", () => {
//         init(i);
//         currentSlide = i;
//     })
// })