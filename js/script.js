let container=document.querySelector(".container");
let message=document.querySelector(".message")
let gif=document.querySelector("#gif")
let span=document.querySelector(".span")


setTimeout(() => {
    message.style.width="75%"
    gif.style.display="none"
    span.style.display="block"
}, 3200);