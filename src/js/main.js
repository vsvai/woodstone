console.log("main.js running");
var btn = document.getElementById("test ");
console.log(btn);
if (btn) {
    btn.addEventListener("click", visitingcard())

}
var open = 0;

function visitingcard() {
    console.log('working card')
    var visit = document.getElementById("visit ");
    visit.innerHTML('<img src="./assests/home1.jpeg"/>');
}