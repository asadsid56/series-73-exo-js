/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (function() {
//     document.getElementsByClassName("target")[0].innerHTML = "owned"; 
//     document.getElementsByClassName("target")[1].innerHTML = "owned"; 
//     document.getElementsByClassName("target")[2].innerHTML = "owned"; 
//     document.getElementsByClassName("target")[3].innerHTML = "owned"; 
//     document.getElementsByClassName("target")[4].innerHTML = "owned"; 
   
// })();


(function() {
   
   let arr = document.getElementsByClassName("target");
   for(let i = 0; i < arr.length; i++) {
    document.getElementsByClassName("target")[i].innerHTML = "owned";
   }
})();