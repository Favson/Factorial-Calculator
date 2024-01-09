// function calc() {
//     var inputVal =parseInt(document.getElementById("factoriaValue").value) 
//     for (y=inputVal; y>=1; y--) {
//         var result = inputVal *= y
//         console.log(result)
//     }
// }


function calc() {
    var inputVal = parseInt(document.getElementById("factorialValue").value);

    if (isNaN(inputVal)) {
        displayResult.innerHTML="Please enter a valid number"
        return;
    }
    var result = 1;

    for (y=inputVal; y >= 1; y--) {
        result *= y;
    }
    displayResult.innerHTML= inputVal +"! = " + result

    document.getElementById("factorialValue").value=""
}
