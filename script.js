

document.addEventListener('contextmenu', event => event.preventDefault());
function a() {
    var a = document.getElementById("aa")
    var b = document.getElementById('bb')
    var aa = document.getElementById('aaa')
    var bb = document.getElementById('bbb')
    a.style.backgroundColor = "transparent"
    a.style.border = "none"
    a.style.color = "grey"
    a.style.borderBottom = "1px solid grey"
    b.style.backgroundColor = "whitesmoke"
    b.style.color = "black"
    b.style.borderTop = "3px solid grey"
    b.style.borderBottom = "none";
    b.style.borderLeft = "1px solid grey";
    b.style.borderRight = "1px solid grey";
    aaa.style.display = "none"
    bbb.style.display = 'block'
}
function b() {
    var a = document.getElementById("aa")
    var b = document.getElementById('bb')
    var aa = document.getElementById('aaa')
    var bb = document.getElementById('bbb')
    b.style.backgroundColor = "transparent"
    b.style.border = "none"
    b.style.color = "grey"
    b.style.borderBottom = "1px solid grey"
    a.style.backgroundColor = "whitesmoke"
    a.style.color = "black"
    a.style.borderTop = "3px solid grey"
    a.style.borderBottom = "none"
    a.style.borderLeft = "1px solid grey"
    a.style.borderRight = "1px solid grey"
    bbb.style.display = "none"
    aaa.style.display = 'block'
}


function f() {
    window.location.replace("search-page.html");
}


function searchh() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchbar');
    filter = input.value.toUpperCase();
    ul = document.querySelector(".contentt");
    li = ul.getElementsByTagName('li');
    let resultsDiv = document.querySelector('.r');

    let count = 0;
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        count++;
      } else {
        li[i].style.display = "none";
      }
    }
    resultsDiv.innerText = count;
  }

