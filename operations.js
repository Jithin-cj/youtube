

let intialCode = window.location.search.replace("?code=", "");
console.log("intial url" + intialCode);
document.getElementById("demo").setAttribute("src","https://www.youtube.com/embed/"+ intialCode);

function clickHandler() {
    var code =document.getElementById("inputVal").value.split("&")[0].replace("https://www.youtube.com/watch?v=", "");
//EAR7De6Goz4
    //document.getElementById("demo").setAttribute("src", url);
    window.location.href = window.location.href.split("?")[0]+"?code="+code;

    console.log(code)
}

//https://www.youtube.com/watch?v=OPaLnMw2i_0&list=PL6QREj8te1P7gixBDSU8JLvQndTEEX3c3
