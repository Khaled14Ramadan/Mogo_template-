const navbar = document.getElementById("navbar");
const UpBtn = document.getElementById("UpBtn");
let navLink = document.getElementsByClassName("nav-link");
navLink = Array.from(navLink);

navLink.forEach((link)=>{
    link.onclick = ()=>{
        navLink.forEach((x)=>{x.classList.remove("active")});
        link.classList.add("active");
    }
})

window.onscroll = function () {
// for add backgroundColor for nav bar after hero section
    if(scrollY >=600){
        navbar.classList.remove("bg-transparent");
        navbar.style.backgroundColor="#f38181";
    }
    else {
        navbar.classList.add("bg-transparent");        
    }

    // for up button 
    if(scrollY >=400){
        UpBtn.style.opacity="1";
    }
    else {
        UpBtn.style.opacity="0";
    }
}

UpBtn.onclick=function (){
    window.scroll({left:0,top:0,})
}

