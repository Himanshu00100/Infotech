

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


// hero section animation

// let slide = 1;
// let left = document.querySelector(".leftarrow");
// let right = document.querySelector(".rightarrow");
// let slider = document.querySelector(".slider");
// let image=document.querySelectorAll(".image");
// let imagelength=image.length
// console.log(imagelength);

// if (slide < imagelength) {
//   right.addEventListener('click', () => {
//     slider.style.transform = `translateX(-${slide * 1280}px)`;
//     slide++
//   })
// }
// else if (slide > imagelength) {
//   slider.style.transform = `translateX(0px)`;
//   slide=1;
// }

let element1 = document.querySelector(".rightarrow");
let counter = 1;
let images = document.querySelectorAll(".image");
let slider=document.querySelector(".slider")
let navigation=document.querySelectorAll(".navigation");
console.log(navigation.length)
const anonymous = () => {
  element1.addEventListener("click", () => {
    if (counter < (images.length)) {
      slider.style.transform = `translateX(-${counter * 1280}px)`;

      // console.log(counter)
      counter++
    }
    else {
      let zero = counter * 0
      slider.style.transform = `translateX(${zero}px)`;
      // console.log("counter greater than 5")
      counter = 1;
    }

  })
}

anonymous()
setInterval(()=>{
  if (counter < (images.length)) {
    slider.style.transform = `translateX(-${counter * 1280}px)`;
    console.log(counter)
    counter++
  }
  else {
    let zero = counter * 0
    slider.style.transform = `translateX(${zero}px)`;
    console.log("counter greater than 5")
    counter = 1;
  }
},3000)


// product section starts from here

const productslider=(element1,element2)=>{
  $(element1).mouseenter(()=>{
    $(element2).css({
      "right":"12px"
    })
  })
  $(element1).mouseleave(()=>{
    $(element2).css({
      "right":"-44px"
    })
  })
}
productslider(".product1",".cartlist1");
productslider(".product2",".cartlist2");
productslider(".product3",".cartlist3");
productslider(".product4",".cartlist4");
productslider(".product5",".cartlist5");
productslider(".product6",".cartlist6");
productslider(".product7",".cartlist7");
