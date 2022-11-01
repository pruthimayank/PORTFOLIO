var sidebar = document.querySelector(".sidebar")
var sidebarCross = document.querySelector(".sidebar-cross")
var nav = document.querySelector(".nav-ul")


sidebar.addEventListener("click",()=>{
    nav.style.display = "block";
    sidebar.style.display = "none";
    sidebarCross.style.display = "block";
})

sidebarCross.addEventListener("click",()=>{
    nav.style.display = "none";
    sidebar.style.display = "block";
    sidebarCross.style.display = "none"
})
