

function clickHandler() {
    var url ="https://www.youtube.com/embed/"+document.getElementById("inputVal").value
//EAR7De6Goz4
    document.getElementById("demo").setAttribute("src", url);
    console.log(url)
}