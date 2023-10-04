const cat = document.getElementById("cat");
const cactus = document.getElementById("cactus");
var counterVal = 0;

document.addEventListener("keydown", function(event) {
	jump ();
});

function jump () {
	if (cat.classList != "jump") {
		cat.classList.add("jump")
	}
	setTimeout( function () {
		cat.classList.remove("jump")
	}, 500)

	updateDisplay(++counterVal);
}

let iaAlive = setInterval ( function() {
	let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

	if (cactusLeft < 100 && cactusLeft > 0 && catTop >= 140) {
		alert("МЯЯЯЯЯЯЯЯУ!!!")
		counterVal = 0;
		updateDisplay(counterVal);
	}
}, 10)

function updateDisplay(val) {
    document.getElementById("counterClick").innerHTML = val;
}

