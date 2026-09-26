let textArea = document.querySelector(".text");
const totalchar = document.querySelector(".totalchar");
let reamin = document.querySelector(".Remaining");

textArea.addEventListener("keyup", () => {
updatecounter();
})
updatecounter();
 
function updatecounter(){
totalchar.innerText = textArea.value.length
reamin.innerText = textArea.getAttribute("maxLength") -  textArea.value.length
}
