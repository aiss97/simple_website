const header =document.querySelector("header"),
menuToggles=document.querySelectorAll("#menu_toggle");

menuToggles.forEach(toggs=>{
    toggs.addEventListener("click",()=>{
        header.classList.toggle("showMenu");
    })
});