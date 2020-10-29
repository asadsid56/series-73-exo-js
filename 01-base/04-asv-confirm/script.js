/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// let confirmation; 

// function about() {
//     let age = prompt("what is your age ?"); 
//     let town = prompt("where do you live ?"); 
//     let gender = prompt("what is your gender ?"); 
//     alert(age + " " + town + " " + gender);
//     confirmation = confirm("please confirm"); 
// }   
// about();

// if (confirmation == false) {
//     about();
// }

let confirmation; 

function about() {
   while (confirmation != true) {
        let age = prompt("what is your age ?"); 
        let town = prompt("where do you live ?"); 
        let gender = prompt("what is your gender ?"); 
        alert(age + " " + town + " " + gender);
        confirmation = confirm("please confirm"); 
   } 
}   
about();