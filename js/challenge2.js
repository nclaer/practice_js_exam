window.addEventListener("load", function() {
    console.log(document.querySelector("#billing").value)
});
document.querySelector('input[name="useBilling"]').addEventListener("click", function() {
    if (this.checked) {
        console.log("Set it")
        document.querySelector("#home").value = document.querySelector("#billing").value
        document.querySelector("#home").disabled = true
    }
    else {
        console.log("Unset it")
        document.querySelector("#home").value = ""
        document.querySelector("#home").disabled = false
    }
});