const hamburger = document.querySelector("#hamburger");
const dropdown = document.querySelector("#dropdown");
const anchorLinks = document.querySelectorAll("#anchor-link");
const body = document.querySelector("body");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");


hamburger.addEventListener("click", ()=> {
    dropdown.classList.toggle("hidden")
})

anchorLinks.forEach((link)=> {
    link.addEventListener("click", () => {
      dropdown.classList.toggle("hidden");
    });
})

moon.addEventListener("click", ()=> {
    // body.classList.add("dark");
    body.classList.toggle("dark");
    body.classList.toggle("bg-orchid-300");
    body.classList.toggle("bg-orchid-600");
})

sun.addEventListener("click", () => {
//   body.classList.remove("dark");
//   body.classList.add("dark");
  body.classList.toggle("dark");
  body.classList.toggle("bg-orchid-300");
  body.classList.toggle("bg-orchid-600");
});

