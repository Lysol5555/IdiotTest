let textEl = document.getElementById("buttonClicked");
 
function hide() {
    document.getElementById("btn").style.display = "none";
    innerText()
}
function innerText() {
    document.getElementById("buttonClicked").innerText = "Good Job, You Win";
    console.log("Clicked")
}