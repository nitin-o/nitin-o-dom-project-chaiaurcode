const buttons = document.querySelectorAll(".button");
buttons.forEach((button)=>{
   button.addEventListener("click",(e)=>{chaneColor(e.target)});
});

function chaneColor(p) {
    document.querySelector('body').style.backgroundColor=p.id}
    
