(function() {
    let body = document.querySelector('body'); 

    document.getElementById("red").addEventListener("click", function (){
        body.setAttribute("style","background-color: red")
    });
    document.getElementById("green").addEventListener("click", function (){
        body.setAttribute("style","background-color: green")
    });
    document.getElementById("yellow").addEventListener("click", function (){
        body.setAttribute("style","background-color: yellow")
    });
    document.getElementById("blue").addEventListener("click", function (){
        body.setAttribute("style","background-color: blue")
    });
})();
