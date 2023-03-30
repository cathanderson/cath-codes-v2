const hamburger = document.querySelector("#hamburger");
const dropdown = document.querySelector("#dropdown");
const anchorLinks = document.querySelectorAll("#anchor-link")

hamburger.addEventListener("click", ()=> {
    dropdown.classList.toggle("hidden")
})

anchorLinks.forEach((link)=> {
    link.addEventListener("click", () => {
      dropdown.classList.toggle("hidden");
    });
})

