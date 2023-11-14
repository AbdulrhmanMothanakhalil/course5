const mobilebtn= document.querySelector("#mobile-btn");
const mobilemenu= document.querySelector("#mobile-menu");
const close = document.querySelector("#close");

mobilebtn.addEventListener('click', ()=>{

mobilemenu.classList.toggle('hidden');





});


close.addEventListener('click', ()=>{

    mobilemenu.classList.toggle('hidden');
    
});