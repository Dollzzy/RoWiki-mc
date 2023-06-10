
function d(){
    let d = document.getElementById("ss")
    var dd = d.value
    if (dd == '/T') {
        window.location.replace("pg-1.html");
    }
    if (dd == '/hide-logo') {
        document.querySelector('.logo').style.display = 'none'
    }
    if (dd == '/hide-rezults') {
        document.querySelector('.contentt').style.display = 'none'
    }
    if (dd == '/easter-egg') {
        document.querySelector('.contentt').innerHTML = "Felicitari ai descoperit un easteregg"
    }

    d.value = ""
}