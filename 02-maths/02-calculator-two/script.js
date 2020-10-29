// // 

// /* becode/javascript
//  *
//  * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
//  *
//  * coded by leny@BeCode
//  * started at 26/10/2018
//  */

// // NOTE: don't focus on the existing code structure for now.
// // You will have time to focus on it later.



let a = 0; 
let b = 0; 

document.getElementById("addition").onclick = calculate; 
document.getElementById("substraction").onclick = calculate; 
document.getElementById("multiplication").onclick = calculate; 
document.getElementById("division").onclick = calculate; 


function calculate(a,b) {
     a = new Number(document.getElementById("op-one").value);
     b = new Number(document.getElementById("op-two").value);

switch (calculate) {
        case 'addition':
        alert(calculate(a + b));
            break;

        case 'substraction':
        alert(calculate(a - b));
            break;

        case 'multiplication':
        alert(calculate(a * b));
            break;

        case 'division':
        alert(calculate(a / b));
            break;

        default:
        alert('please enter a valid number');
            break;
    }
}
/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



