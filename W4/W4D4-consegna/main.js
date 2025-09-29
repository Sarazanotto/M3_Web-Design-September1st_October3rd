
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 6, // default
    spaceBetween: 16, // spazio tra le card
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Quando la larghezza è <= 768px (tablet e mobile)
      0: {
        slidesPerView: 3,
      },
      // >= 1024px (desktop)
      1024: {
        slidesPerView: 6,
      },
    },
  });

const btnToggle=document.querySelector(".button-toggle")
const menuToggle=document.querySelector(".menu-toggle")

btnToggle.addEventListener("mouseenter", ()=>{
    menuToggle.classList.add("show")
})

btnToggle.addEventListener("mouseleave",()=>{
    menuToggle.classList.remove("show")
})

menuToggle.addEventListener("mouseenter", ()=>{
    menuToggle.classList.add("show")
})

menuToggle.addEventListener("mouseleave",()=>{
    menuToggle.classList.remove("show")
})


window.addEventListener("scroll", ()=>{
  const navbar=document.getElementById("navbar")
  if( window.scrollY>40){
    navbar.classList.add("scrolled")
  }else{
    navbar.classList.remove("scrolled")
  }
})