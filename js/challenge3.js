window.addEventListener("load", function() {
    console.log("adding alert with caption")
    this.window.alert(document.querySelectorAll("figcaption")[1].innerHTML)
});

document.querySelectorAll("img")[1].setAttribute("tabindex", "0")

images = document.querySelectorAll("img")
for (i = 0; i <images.length; i++) {
    console.log("hovering over image")
    images[i].addEventListener("mouseover", function() {
        document.querySelector("#display").style.backgroundImage = "url('" + this.src + "')"
        document.querySelector("#display").innerHTML = this.alt
        this.style.visibility = 'hidden'
    });
    images[i].addEventListener("mouseleave", function () {
        document.querySelector("#display").style.backgroundImage = ""
        document.querySelector("#display").innerHTML = "Hover over an image below to display the image and the alt text."
        this.style.visibility = 'visible'
    });
    images[i].addEventListener("focusin", function() {
        document.querySelector("#display").style.backgroundImage = "url('" + this.src + "')"
        document.querySelector("#display").innerHTML = this.alt
    });
    images[i].addEventListener("focusout", function () {
        document.querySelector("#display").style.backgroundImage = ""
        document.querySelector("#display").innerHTML = "Hover over an image below to display the image and the alt text."
    });
}



/* 2) use "this" for each picture hovered over
images = document.querySelectorAll("img")
for (i = 0, i <images.length; i++){
    images[i].addEventListener("mouseenter", function() {
        "THIS IS WHERE THE CODE GOES (this.alt, this.src, etc)"
    })
}
not display:none but visibility:hidden

tabindex is an attribute (can use javascript to add attributes) -> when page loads add tabindex=0
.setAttribute("tabindex", "0")
*/