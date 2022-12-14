let navslide = () =>{
    let ham = document.querySelector(".ham");
    let nav = document.querySelector(".nav-link");
    let navlink = document.querySelectorAll(".nav-link li");


    ham.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navlink.forEach((link,index)=>{
                if(link.style.animation){
                    link.style.animation='';
                } else {
                    link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.5}s `
                }
        
        });

        ham.classList.toggle('toggle');



    });





}


navslide();