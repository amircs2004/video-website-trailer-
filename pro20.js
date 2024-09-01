const btnEL = document.querySelector(".btn")
const closeEL = document.querySelector(".close")
const trailerEL = document.querySelector(".trailerContainer")
btnEL.addEventListener("click",()=>{
    trailerEL.classList.remove("active")
})
closeEL.addEventListener("click" , () => {
   trailerEL.classList.add("active")
})
