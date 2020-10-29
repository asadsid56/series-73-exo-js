/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let element = document.getElementById("source");
    console.log(element);
    let attribut = element.getAttribute("data-image"); 
    console.log(attribut);
    let img = document.createElement("img");
    console.log(img);
    img.setAttribute("src",attribut);
    element.appendChild(img);
})();

// element.setAttribute(attributename, attributevalue)
// setAttribute("src","http://www.randomkittengenerator.com/cats/rotator.php");