/*const btnSearch=document.querySelector(".btn-search")
const containerSearch=document.querySelector(".search-container")


btnSearch.addEventListener("click", ()=>{
    const inputSearch=document.createElement("input")

    inputSearch.type="text"
    inputSearch.placeholder="search"
    inputSearch.name="Search"
    inputSearch.style.height="100px"
     
    containerSearch.appendChild(inputSearch)

})*/

const scrollContainer= document.querySelectorAll(".scrollContainer")
const btnScrollRight= document.querySelectorAll(".arrow-right")
const btnScrollLeft= document.querySelectorAll(".arrow-left")


btnScrollLeft.forEach((btn, i)=>{
    btn.addEventListener("click", ()=>{
        scrollContainer[i].scrollBy({left:-400, behavior: "smooth"})
    })
})

btnScrollRight.forEach((btn, i)=>{
    btn.addEventListener("click", ()=>{
        scrollContainer[i].scrollBy({left:400, behavior: "smooth"})
    })
})

