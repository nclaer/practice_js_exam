window.addEventListener("load", function() {
    console.log("styling header")
    this.document.querySelector("h1").classList.add("heading")
});

window.addEventListener("dblclick", function() {
    console.log("adding alert with current time")
    var dt = new Date();
    this.window.alert(dt);
});

var checkBox = document.querySelector("#toggle");
checkBox.addEventListener("change", function () {
    console.log("adding email box")
    if (checkBox.checked) {
        document.querySelector(".hidden").style.display = "block";
    }
    else {
        document.querySelector(".hidden").style.display = "none";
    }
});

