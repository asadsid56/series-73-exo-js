/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let image = document.getElementsByTagName("img")[0];
    let attribut = image.getAttribute("src");
    image.addEventListener("mouseover",function(){
        image.setAttribute("src",image.getAttribute("data-hover"));
    })
    image.addEventListener("mouseout",function(){
        image.setAttribute("src",attribut);
    })
})();
