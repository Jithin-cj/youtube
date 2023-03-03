

function clickHandler() {
    var url =document.getElementById("inputVal").value.replace("watch?v=", "embed/");
//EAR7De6Goz4
    document.getElementById("demo").setAttribute("src", url);
    console.log(url)
}
