// let wrapper = document.querySelector('.link');
// let toggle = document.querySelector('.burger');


// window.onclick=function(){
    
//     toggle.onclick=function(){
//     toggle.classList.toggle('active'); 
//     wrapper.classList.toggle('open')
//     }
    
// }






const nav = document.querySelector(".link")
const burger = document.querySelector(".burger")
const links = nav.querySelectorAll("a")

burger.addEventListener("click",() => {
    nav.classList.toggle("open");
    burger.classList.toggle("active");
});

links.forEach(link => {
    link.addEventListener('click',() => {
        nav.classList.toggle("open");
        burger.classList.toggle("active");

    });
});
