let wrapper = document.querySelector('.link');
let toggle = document.querySelector('.burger');


window.onload=function(){
    
    toggle.onclick=function(){
    toggle.classList.toggle('active'); 
    wrapper.classList.toggle('open')
    }
    
}