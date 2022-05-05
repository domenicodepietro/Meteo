function switchMode() {
    var checkbox = document.getElementById("darkmode-button");
    if (checkbox.checked == true) {
        document.body.setAttribute("class","bootstrap-dark");
    }
    else {
        document.body.setAttribute("class","bootstrap");
    }
}