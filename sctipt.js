let clr1 = document.getElementById("btn-1");
let body = document.getElementById("body")
clr1.addEventListener("click", ()=>{
    body.style.backgroundColor = "black"
    body.style.color = "white"
})

let clr2 = document.getElementById("btn-2");
clr2.addEventListener("click", ()=>{
    body.style.backgroundColor = "white"
    body.style.color = "black"
})