var modal = document.getElementById("modal");
var close = document.getElementById("close-btn");
var start = document.getElementById("modal-btn");

start.addEventListener("click",()=>{
    modal.style.display="block";
    modal.style.opacity="1";
});
close.addEventListener("click",()=>{
    modal.style.display="none";
    
})