// Your code goes here

//change introSection background/bottomborder/padding
//dblclick
let introSection = document.querySelector(".intro");
introSection.addEventListener("dblclick", () => {
  introSection.style.background = "#a7cfdf";
  introSection.style.borderBottom = "2px dashed #698792";
  introSection.style.paddingRight = "10px";
  introSection.style.paddingLeft = "10px";
})

//change to other image on double click 
//also stop propogation
let funBusImg = document.querySelector(".intro img");
funBusImg.addEventListener("dblclick", (event) => {
    funBusImg.setAttribute("src", "img/unsplashBusTropical.jpg");
    event.stopPropagation();
})


//add border to content images on scroll
let contentImg = document.querySelectorAll(".img-content img");

contentImg.forEach((pic) => {
    pic.addEventListener("wheel", () => {
        pic.style.border = "6px solid #376e57";
    })
})

//mouseenter & mouseleave
let contentSection = document.querySelectorAll(".content-section");

contentSection.forEach((cSection) => {
    cSection.addEventListener("mouseenter", () => {
        cSection.style.background = "#469490";
        cSection.style.color = "black";
        cSection.style.padding = "15px";
    })
})

contentSection.forEach((cSection) => {
    cSection.addEventListener("mouseleave", () => {
        cSection.style.background = "White";
        cSection.style.color = "#376e57";
    })
})

//focus & blur on Nav Bar

let navMenu = document.querySelectorAll(".nav-link");

navMenu.forEach((item) => {
    item.addEventListener("focus", () => {
        item.style.color = "#469490";
        item.style.transform = "scale(1.2)";
    })
})

navMenu.forEach((item) => {
    item.addEventListener("blur", () => {
        item.style.color = "black";
        item.style.transform = "scale(1)";
    })
})

//mousedown and mouseup
let destinationTitle = document.querySelectorAll(".destination h4");

destinationTitle.forEach((item) => {
    item.addEventListener("mousedown", () => {
        item.style.color = "#469490";
        item.style.transform = "scale(1.2)";
        item.style.marginLeft = "20px"
        item.style.transition = "all 0.3s"
    })
})

let destinationText = document.querySelectorAll(".destination p");

destinationText.forEach((item) => {
    item.addEventListener("mousedown", () => {
        item.style.color = "#ece22d";
        item.style.transition = "all 0.3s"
    })
})

destinationText.forEach((item) => {
    item.addEventListener("mouseup", () => {
        item.style.color = "#e93f33";
        item.style.transition = "all 0.3s"
    })
})


//mouseover & mouseout
let funFooter = document.querySelector("footer");

funFooter.addEventListener("mouseover", () => {
   funFooter.style.background = "#e93f33"
   funFooter.style.borderTop = "2px dashed black";
   funFooter.style.transition = "all 2s";

});

funFooter.addEventListener("mouseout", () => {
    funFooter.style.background = "#FFEBCD";
    funFooter.style.borderTop = "2px dashed #C0C0C0";
    funFooter.style.transition = "all 2s";
 });
 


 const stopLink = document.querySelectorAll(".nav-link");

 stopLink.forEach((item) => {
   item.addEventListener("click", (event) => {
   console.log("stopped link"); 
   event.preventDefault();
    });
 })
 