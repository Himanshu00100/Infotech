

// header

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let element = document.querySelector(".header");
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    element.classList.add("shadow-lg");
    element.classList.add("shadow-black");
  } else {
    element.classList.remove("shadow-lg");
    element.classList.remove("shadow-black");
  }
}
// let element = document.querySelector(".header");
// element.style.backgroundColor="red"

// Navbar key animations

const keyanimation = (key, underline) => {
  let element = document.querySelector(key);
  let element2 = document.querySelector(underline);
  element.addEventListener('mouseenter', () => {
    element2.style.width = "100%";
  })
  element.addEventListener('mouseleave', () => {
    element2.style.width = "0%";
  })
}
keyanimation(".homekey", ".underline1");
keyanimation(".offerkey", ".underline2");
keyanimation(".aboutkey", ".underline3");
keyanimation(".contactkey", ".underline4");
keyanimation(".faqkey", ".underline5");
keyanimation(".ewastekey", ".underline6");

// cta 1 animation


$(document).ready(() => {
  $(".cta1").mouseenter(() => {
    $(".mirage").css({
      "transition": "all 400ms ease-out",
      "translate": "100% 100%",
      "opacity": "0"
    })
  })
  $(".cta1").mouseleave(() => {
    $(".mirage").css({
      "translate": "200% 200%",
      "opacity": "100",
    })
  })
})

// social media bg slider animation

const sliderfunction = (element1, element2) => {
  $(document).ready(() => {
    $(element1).mouseenter(() => {
      $(element2).css({
        "translate": "50% 0%"
      })
    })
    $(element1).mouseleave(() => {
      $(element2).css({
        "translate": "100% 0%"
      })
    })
  })
}
sliderfunction(".facebook", ".slider1");
sliderfunction(".twitter", ".slider2");
sliderfunction(".linkedin", ".slider3");
sliderfunction(".instagram", ".slider4")



