let nav = document.getElementById("nv")
let bar = document.getElementById("bar")

bar.addEventListener("click", function () {
    nav.classList.toggle("active")
})



let ico1 = document.getElementById("ico1")
let ico2 = document.getElementById("ico2")
let custom = document.querySelectorAll(".custom")
ico2.addEventListener("click",  () => {
    ico1.classList.toggle("btn-active")
    ico2.classList.toggle("btn-active")
    custom[0].classList.add("actived")
    custom[1].classList.remove("actived")
})
ico1.addEventListener("click",  () => {
    ico2.classList.toggle("btn-active")
    ico1.classList.toggle("btn-active")
    custom[1].classList.add("actived")
    custom[0].classList.remove("actived")
})

let btnFaq = document.querySelectorAll(".btn-faq")

btnFaq.forEach((e) => {
    e.addEventListener("click", function () {
        btnFaq.forEach((ele) => {
            ele.nextElementSibling.classList.remove("desc-active")
        })
        e.nextElementSibling.classList.toggle("desc-active")
    })
})

let sec = document.querySelectorAll("section");

window.onscroll = function () {
    sec.forEach((e) => {
        if (window.scrollY >= e.offsetTop - 290) {
            e.classList.add("show-animate")
        }
    })
}

let head = document.querySelector("header")

window.addEventListener("load", function () {
    head.classList.add("show-animate")
})

let arrow = document.getElementById("arrow");

window.addEventListener("scroll",()=>{
    if(window.scrollY >= 218 ){
        arrow.style.display = "block";
    }else{
        arrow.style.display = "none";
    }
})

arrow.onclick = () =>{
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
}